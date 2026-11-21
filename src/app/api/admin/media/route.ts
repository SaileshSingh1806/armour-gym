import { NextRequest, NextResponse } from "next/server";
import { isMediaAdminRequest } from "@/lib/media-auth";
import { getMediaInventory, isCloudConfigured } from "@/lib/cloudinary-media";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  if (!isMediaAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  if (!isCloudConfigured()) {
    return NextResponse.json({ error: "Cloudinary variables are not configured." }, { status: 503 });
  }
  try {
    const inventory = await getMediaInventory();
    return NextResponse.json(inventory, { headers: { "Cache-Control": "no-store" } });
  } catch (error: unknown) {
    console.error("Media inventory unavailable:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Unable to load media. Check Cloudinary credentials." }, { status: 502 });
  }
}
