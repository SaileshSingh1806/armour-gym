import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { isMediaAdminRequest, sameOrigin } from "@/lib/media-auth";
import { resetImageSlot } from "@/lib/cloudinary-media";
import { isMediaSlot } from "@/lib/media-slots";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  if (!isMediaAdminRequest(request)) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  if (!sameOrigin(request)) return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  let body: unknown;
  try { body = await request.json(); } catch {
    return NextResponse.json({ error: "Invalid reset request." }, { status: 400 });
  }
  const slot = body && typeof body === "object" && "slot" in body
    ? (body as { slot: unknown }).slot : undefined;
  if (!isMediaSlot(slot)) return NextResponse.json({ error: "Unknown image slot." }, { status: 400 });
  try {
    await resetImageSlot(slot);
    revalidateTag("armour-media-live", { expire: 0 });
    revalidatePath("/");
    revalidatePath("/about");
    revalidatePath("/contact");
    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    console.error("Image reset failed:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Unable to restore the original photo." }, { status: 502 });
  }
}
