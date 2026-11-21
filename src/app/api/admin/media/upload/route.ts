import { NextRequest, NextResponse } from "next/server";
import { isMediaAdminRequest, sameOrigin } from "@/lib/media-auth";
import { signDraftUpload } from "@/lib/cloudinary-media";
import { isMediaSlot } from "@/lib/media-slots";

export const runtime = "nodejs";

/** Gives the logged-in admin a signature for one draft upload. No file bytes hit Vercel. */
export async function POST(request: NextRequest) {
  if (!isMediaAdminRequest(request)) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  if (!sameOrigin(request)) return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });

  let body: unknown;
  try { body = await request.json(); } catch {
    return NextResponse.json({ error: "Invalid upload request." }, { status: 400 });
  }
  const slot = body && typeof body === "object" && "slot" in body
    ? (body as { slot: unknown }).slot
    : undefined;
  if (!isMediaSlot(slot)) {
    return NextResponse.json({ error: "Unknown image slot." }, { status: 400 });
  }

  try {
    const upload = signDraftUpload(slot);
    return NextResponse.json(upload, { headers: { "Cache-Control": "no-store" } });
  } catch (error: unknown) {
    console.error("Cloudinary signature generation failed:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Cloudinary upload is currently unavailable." }, { status: 503 });
  }
}
