export const mediaSlots = {
  hero: { title: "Homepage • Hero", area: "Home", fallback: "/images/dummy-hero.webp", aspect: "wide", recommended: "2400 × 1400 px" },
  "story-space": { title: "Story • Space", area: "Story", fallback: "/images/dummy-break.webp", aspect: "landscape", recommended: "1600 × 1200 px" },
  "story-equipment": { title: "Story • Equipment", area: "Story", fallback: "/images/dummy-gallery-1.webp", aspect: "landscape", recommended: "1600 × 1200 px" },
  "story-routine": { title: "Story • Routine", area: "Story", fallback: "/images/dummy-gallery-2.webp", aspect: "landscape", recommended: "1600 × 1200 px" },
  "program-strength": { title: "Program • Strength", area: "Programs", fallback: "/images/dummy-gallery-3.webp", aspect: "portrait", recommended: "1200 × 1600 px" },
  "program-cardio": { title: "Program • Cardio", area: "Programs", fallback: "/images/dummy-gallery-4.webp", aspect: "portrait", recommended: "1200 × 1600 px" },
  "program-functional": { title: "Program • Functional", area: "Programs", fallback: "/images/dummy-gallery-5.webp", aspect: "portrait", recommended: "1200 × 1600 px" },
  "program-personal": { title: "Program • Personal", area: "Programs", fallback: "/images/dummy-gallery-6.webp", aspect: "portrait", recommended: "1200 × 1600 px" },
  "gallery-1": { title: "Gallery • Main Floor", area: "Gallery", fallback: "/images/dummy-gallery-1.webp", aspect: "landscape", recommended: "1600 × 1200 px" },
  "gallery-2": { title: "Gallery • Power Rack", area: "Gallery", fallback: "/images/dummy-gallery-3.webp", aspect: "landscape", recommended: "1600 × 1200 px" },
  "gallery-3": { title: "Gallery • Dumbbells", area: "Gallery", fallback: "/images/dummy-gallery-6.webp", aspect: "landscape", recommended: "1600 × 1200 px" },
  "gallery-4": { title: "Gallery • Machines", area: "Gallery", fallback: "/images/dummy-gallery-5.webp", aspect: "landscape", recommended: "1600 × 1200 px" },
  "gallery-5": { title: "Gallery • Bench", area: "Gallery", fallback: "/images/dummy-gallery-2.webp", aspect: "landscape", recommended: "1600 × 1200 px" },
  "gallery-6": { title: "Gallery • Free Weights", area: "Gallery", fallback: "/images/dummy-gallery-4.webp", aspect: "landscape", recommended: "1600 × 1200 px" },
  "about-hero": { title: "About • Main Image", area: "About", fallback: "/images/dummy-gallery-1.webp", aspect: "landscape", recommended: "1800 × 1300 px" },
  "about-side": { title: "About • Secondary", area: "About", fallback: "/images/dummy-gallery-4.webp", aspect: "portrait", recommended: "1200 × 1600 px" },
  "about-bottom": { title: "About • Training Area", area: "About", fallback: "/images/dummy-gallery-6.webp", aspect: "landscape", recommended: "1600 × 1200 px" },
  "special-yoga": { title: "Special • Yoga Studio", area: "Studios", fallback: "/images/dummy-gallery-3.webp", aspect: "portrait", recommended: "1600 × 2000 px" },
  "special-zumba": { title: "Special • Zumba Studio", area: "Studios", fallback: "/images/dummy-gallery-4.webp", aspect: "landscape", recommended: "2000 × 1500 px" },
  "special-hyrox": { title: "Special • HYROX Training", area: "Studios", fallback: "/images/dummy-gallery-5.webp", aspect: "portrait", recommended: "1600 × 2000 px" },
  "special-terrace": { title: "Special • Open Terrace", area: "Studios", fallback: "/images/dummy-gallery-6.webp", aspect: "landscape", recommended: "2000 × 1500 px" },
  "contact-photo": { title: "Contact • Photo", area: "Contact", fallback: "/images/dummy-gallery-1.webp", aspect: "landscape", recommended: "1600 × 1200 px" },
} as const;

export type MediaSlot = keyof typeof mediaSlots;
export type SiteImage = { src: string; position: string };
export type SiteImages = Record<MediaSlot, SiteImage>;
export const slotIds = Object.keys(mediaSlots) as MediaSlot[];

export function isMediaSlot(value: unknown): value is MediaSlot {
  return typeof value === "string" && Object.prototype.hasOwnProperty.call(mediaSlots, value);
}

export function fallbackImages(): SiteImages {
  return Object.fromEntries(slotIds.map((id) => [
    id, { src: mediaSlots[id].fallback, position: "50% 50%" },
  ])) as SiteImages;
}
