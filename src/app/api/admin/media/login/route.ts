import { NextRequest, NextResponse } from "next/server";
import { adminConfigured, mediaCookie, newSession, sameOrigin, verifyPassword } from "@/lib/media-auth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }
  if (!adminConfigured()) {
    return NextResponse.json({ error: "Admin login is not configured yet." }, { status: 503 });
  }
  let body: unknown;
  try { body = await request.json(); } catch {
    return NextResponse.json({ error: "Invalid login request." }, { status: 400 });
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid login request." }, { status: 400 });
  }
  const { email, password } = body as Record<string, unknown>;
  const correctEmail = typeof email === "string" &&
    email.trim().toLowerCase() === process.env.MEDIA_ADMIN_EMAIL?.trim().toLowerCase();
  if (typeof password !== "string" || !correctEmail || !verifyPassword(password)) {
    return NextResponse.json({ error: "Incorrect email or password." }, { status: 401 });
  }
  const response = NextResponse.json({ ok: true });
  response.cookies.set(mediaCookie.name, newSession(email.trim().toLowerCase()), mediaCookie.options);
  response.headers.set("Cache-Control", "no-store");
  return response;
}
