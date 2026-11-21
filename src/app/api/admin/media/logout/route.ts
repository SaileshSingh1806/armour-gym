import { NextRequest, NextResponse } from "next/server";
import { mediaCookie, sameOrigin } from "@/lib/media-auth";

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  const response = NextResponse.json({ ok: true });
  response.cookies.set(mediaCookie.name, "", { ...mediaCookie.options, maxAge: 0 });
  return response;
}
