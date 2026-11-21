import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { isMediaAdmin } from "@/lib/media-auth";
import { getCloudImage, getPublishedImages, parseFocus } from "@/lib/cloudinary-media";
import { isMediaSlot, mediaSlots, type SiteImages } from "@/lib/media-slots";
import Hero from "@/components/home/Hero";
import CinematicStory from "@/components/CinematicStory";
import ProgramShowcase from "@/components/ProgramShowcase";
import Gallery from "@/components/home/Gallery";
import SpecialtyShowcase from "@/components/SpecialtyShowcase";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Draft Image Preview | ARMOUR Media Manager",
  robots: { index: false, follow: false },
};

type Params = {
  slot?: string;
  asset?: string;
  x?: string;
  y?: string;
};

/**
 * Authenticated, non-published preview of the ACTUAL homepage components.
 * A draft image is injected only for this admin-only request.
 */
export default async function MediaPreviewPage({
  searchParams,
}: {
  searchParams: Promise<Params>;
}) {
  if (!(await isMediaAdmin())) redirect("/admin/login");

  const params = await searchParams;
  if (!isMediaSlot(params.slot) || !params.asset || params.asset.length > 180) {
    redirect("/admin/media");
  }
  const slot = params.slot;
  const isOwnDraft = params.asset.startsWith("armour-media/drafts/" + slot + "-");
  const isOwnHistory = params.asset.startsWith("armour-media/history/" + slot + "/");
  if (!isOwnDraft && !isOwnHistory) redirect("/admin/media");

  const [source, images] = await Promise.all([
    getCloudImage(params.asset),
    getPublishedImages(),
  ]);
  if (!source) redirect("/admin/media");

  const focus = parseFocus((params.x ?? "50") + "% " + (params.y ?? "50") + "%");
  const previewImages: SiteImages = {
    ...images,
    [slot]: { src: source.secure_url, position: focus },
  };

  const area = mediaSlots[slot].area;
  let content;
  if (area === "Home") content = <Hero images={previewImages} />;
  else if (area === "Story") content = <CinematicStory images={previewImages} />;
  else if (area === "Programs") content = <ProgramShowcase images={previewImages} />;
  else if (area === "Gallery") content = <Gallery images={previewImages} />;
  else if (area === "Studios") content = <SpecialtyShowcase images={previewImages} />;
  else {
    content = (
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#171717]">
            <Image
              src={source.secure_url}
              alt={mediaSlots[slot].title + " draft preview"}
              fill unoptimized sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: focus }}
            />
          </div>
          <div>
            <h2 className="font-oswald text-5xl font-bold uppercase text-white sm:text-6xl">
              {area === "About" ? "MORE THAN A GYM." : "YOUR NEXT STEP STARTS HERE."}
            </h2>
            <p className="mt-6 text-base text-white/65">
              Draft preview for {mediaSlots[slot].title}. The actual page will use this image and focal position after publishing.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#08090B] text-white">
      <div className="relative z-10 border-b border-[#FF858A]/35 bg-[#C8010A]/15 px-4 pb-6 pt-32 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 font-oswald text-sm font-bold uppercase tracking-wider text-[#FF858A]">
              <ShieldCheck className="size-4" aria-hidden="true" />
              ADMIN PREVIEW — NOT PUBLISHED
            </p>
            <p className="mt-1 text-sm text-white/70">
              {mediaSlots[slot].title} • {source.width} × {source.height} px
            </p>
          </div>
          <Link
            href="/admin/media"
            className="inline-flex min-h-11 items-center gap-2 border border-white/25 px-5 text-sm font-semibold text-white hover:bg-white/10"
          >
            <ArrowLeft aria-hidden="true" className="size-4" /> Back to Media Manager
          </Link>
        </div>
      </div>
      {content}
    </main>
  );
}
