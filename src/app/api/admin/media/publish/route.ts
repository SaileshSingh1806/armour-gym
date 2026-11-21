import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { isMediaAdminRequest, sameOrigin } from "@/lib/media-auth";
import { publishImage } from "@/lib/cloudinary-media";
import { isMediaSlot } from "@/lib/media-slots";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  if (!isMediaAdminRequest(request)) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  if (!sameOrigin(request)) return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  let body: unknown;
  try { body = await request.json(); } catch {
    return NextResponse.json({ error: "Invalid publish request." }, { status: 400 });
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid publish request." }, { status: 400 });
  }
  const { slot, sourceId, position } = body as Record<string, unknown>;
  if (!isMediaSlot(slot) || typeof sourceId !== "string" || sourceId.length > 180 ||
      typeof position !== "string") {
    return NextResponse.json({ error: "Invalid image selection or crop position." }, { status: 400 });
  }
  try {
    const image = await publishImage(slot, sourceId, position);
    revalidateTag("armour-media-live", { expire: 0 });
    revalidatePath("/");
    revalidatePath("/about");
    revalidatePath("/contact");
    return NextResponse.json({ ok: true, image }, { headers: { "Cache-Control": "no-store" } });
  } catch (error: unknown) {
    console.error("Media publish failed:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Publish failed. Existing image was retained where possible; refresh and check." }, { status: 502 });
  }
}
