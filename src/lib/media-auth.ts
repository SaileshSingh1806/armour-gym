import "server-only";
import { createHmac, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "armour_media_session";
const SESSION_LIFETIME = 8 * 60 * 60;

function sessionSecret(): string | null {
  const secret = process.env.MEDIA_ADMIN_SESSION_SECRET;
  return secret && secret.length >= 32 ? secret : null;
}

export function adminConfigured(): boolean {
  return Boolean(process.env.MEDIA_ADMIN_EMAIL && process.env.MEDIA_ADMIN_PASSWORD_HASH && sessionSecret());
}

export function verifyPassword(candidate: string): boolean {
  const record = process.env.MEDIA_ADMIN_PASSWORD_HASH ?? "";
  const parts = record.split("$");
  if (parts.length !== 3 || parts[0] !== "scrypt" ||
      !/^[0-9a-f]{32,64}$/.test(parts[1]) || !/^[0-9a-f]{128}$/.test(parts[2]) ||
      candidate.length > 256) return false;
  try {
    const expected = Buffer.from(parts[2], "hex");
    const actual = scryptSync(candidate, Buffer.from(parts[1], "hex"), expected.length);
    return timingSafeEqual(expected, actual);
  } catch {
    return false;
  }
}

function signature(payload: string, secret: string): string {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

export function newSession(email: string): string {
  const secret = sessionSecret();
  if (!secret) throw new Error("Admin session secret missing");
  const data = Buffer.from(JSON.stringify({
    email,
    exp: Math.floor(Date.now() / 1000) + SESSION_LIFETIME,
  })).toString("base64url");
  return data + "." + signature(data, secret);
}

function validSession(token: string | undefined): boolean {
  const secret = sessionSecret();
  if (!secret || !token) return false;
  const [encoded, mac, extra] = token.split(".");
  if (!encoded || !mac || extra || encoded.length > 1024 || mac.length > 100) return false;
  const expected = Buffer.from(signature(encoded, secret));
  const received = Buffer.from(mac);
  if (expected.length !== received.length || !timingSafeEqual(expected, received)) return false;
  try {
    const data: unknown = JSON.parse(Buffer.from(encoded, "base64url").toString());
    if (!data || typeof data !== "object") return false;
    const session = data as { email?: unknown; exp?: unknown };
    return typeof session.email === "string" &&
      session.email === process.env.MEDIA_ADMIN_EMAIL?.trim().toLowerCase() &&
      typeof session.exp === "number" && session.exp > Date.now() / 1000;
  } catch {
    return false;
  }
}

export async function isMediaAdmin(): Promise<boolean> {
  const store = await cookies();
  return validSession(store.get(COOKIE_NAME)?.value);
}

export function isMediaAdminRequest(req: NextRequest): boolean {
  return validSession(req.cookies.get(COOKIE_NAME)?.value);
}

export function sameOrigin(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  return Boolean(origin && origin === req.nextUrl.origin);
}

export const mediaCookie = {
  name: COOKIE_NAME,
  options: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    path: "/",
    maxAge: SESSION_LIFETIME,
  },
};
