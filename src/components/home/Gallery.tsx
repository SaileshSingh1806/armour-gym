import Image from "next/image";
import { ParallaxFrame } from "@/components/Parallax";
import { Container, SectionTitle } from "./ui";
import type { SiteImages } from "@/lib/media-slots";

// Real photos of the Hathijan Circle floor. Widths vary per row so the grid has a rhythm;
// `focus` keeps the subject (sign, racks, machines) in frame when a portrait photo is cropped wide.
const tiles = [
  {
    slot: "gallery-1",
    src: "/images/dummy-gallery-1.webp",
    alt: "Main training floor under the illuminated ARMOUR sign",
    caption: "Main floor under the ARMOUR sign",
    span: "lg:col-span-5",
    focus: "center 62%",
  },
  {
    slot: "gallery-2",
    src: "/images/dummy-gallery-3.webp",
    alt: "Power rack and lifting platform with wall murals",
    caption: "Power rack and lifting platform",
    span: "lg:col-span-4",
    focus: "center 60%",
  },
  {
    slot: "gallery-3",
    src: "/images/dummy-gallery-6.webp",
    alt: "Rubber dumbbell racks in front of the cable machines",
    caption: "Dumbbell racks",
    span: "lg:col-span-3",
    focus: "center 70%",
  },
  {
    slot: "gallery-4",
    src: "/images/dummy-gallery-5.webp",
    alt: "Plate-loaded machine in front of the Train In The Dark wall",
    caption: "Plate-loaded machines",
    span: "lg:col-span-3",
    focus: "center 55%",
  },
  {
    slot: "gallery-5",
    src: "/images/dummy-gallery-2.webp",
    alt: "Bench press station and plate-loaded machines on the main floor",
    caption: "Bench and press stations",
    span: "lg:col-span-4",
    focus: "center 58%",
  },
  {
    slot: "gallery-6",
    src: "/images/dummy-gallery-4.webp",
    alt: "Wide view of the machines and dumbbell area from the entrance",
    caption: "Machines and free weights",
    span: "lg:col-span-5",
    focus: "center 68%",
  },
];

export default function Gallery({ images }: { images: SiteImages }) {
  return (
    <section id="gallery" className="bg-[#0e0e0e] py-20 md:py-28">
      <Container>
        <SectionTitle
          title="Inside the gym"
          lead="Photos from our floor at Hathijan Circle."
        />

        <div className="mt-12 grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-12">
          {tiles.map((tile, index) => (
            <ParallaxFrame
              key={tile.slot}
              speed={[9, 15, 12, 18, 11, 16][index]}
              className={`group relative h-80 overflow-hidden bg-[#151515] sm:h-96 lg:h-[30rem] ${tile.span}`}
              overlay={
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/5 to-transparent p-5">
                  <span className="font-body text-sm font-semibold text-white sm:text-base">
                    {tile.caption}
                  </span>
                </div>
              }
            >
              <Image
                src={images[tile.slot as keyof SiteImages].src}
                alt={images[tile.slot as keyof SiteImages].src.startsWith("/images/dummy-") ? `Decorative gym image for ${tile.caption}` : tile.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                style={{ objectPosition: images[tile.slot as keyof SiteImages].src === tile.src ? tile.focus : images[tile.slot as keyof SiteImages].position }}
              />
            </ParallaxFrame>
          ))}
        </div>
      </Container>
    </section>
  );
}
