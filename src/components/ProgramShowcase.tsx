import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ParallaxFrame } from "@/components/Parallax";
import { Container } from "@/components/home/ui";
import type { SiteImages } from "@/lib/media-slots";

const programs = [
  {
    index: "01",
    slot: "program-strength",
    title: "Strength",
    eyebrow: "Strength training",
    line: "Build your strength. Break your limits.",
    image: "/images/dummy-gallery-3.webp",
    alt: "ARMOUR 24-7 Gym power rack and lifting platform",
    speed: 10,
    focus: "center 56%",
  },
  {
    index: "02",
    slot: "program-cardio",
    title: "Cardio",
    eyebrow: "Cardio training",
    line: "Find your pace. Go further.",
    image: "/images/dummy-gallery-4.webp",
    alt: "Wide view of ARMOUR training machines and fitness floor",
    speed: 15,
    focus: "center 65%",
  },
  {
    index: "03",
    slot: "program-functional",
    title: "Functional",
    eyebrow: "Functional fitness",
    line: "Move better. Perform stronger.",
    image: "/images/dummy-gallery-5.webp",
    alt: "Plate-loaded training equipment inside ARMOUR 24-7 Gym",
    speed: 12,
    focus: "center 54%",
  },
  {
    index: "04",
    slot: "program-personal",
    title: "Personal",
    eyebrow: "Personal training",
    line: "Focused support for your goals.",
    image: "/images/dummy-gallery-6.webp",
    alt: "Dumbbells and training stations at ARMOUR 24-7 Gym",
    speed: 17,
    focus: "center 68%",
  },
] as const;

/**
 * Image-first training showcase built entirely from photos of the real gym.
 * Images show training facilities, not staged or invented workout sessions.
 */
export default function ProgramShowcase({ images }: { images: SiteImages }) {
  return (
    <section id="programs" aria-labelledby="programs-heading" className="relative overflow-hidden bg-[#090A0D] py-24 sm:py-32">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#FF858A]">
              FIND YOUR FOCUS
            </p>
            <h2 id="programs-heading" className="font-oswald text-[clamp(3.5rem,7vw,7.3rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em] text-white">
              CHOOSE YOUR <span className="text-[#C8010A]">GRIND.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/65 sm:text-base">
            Four ways to move forward. One place to put in the work.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {programs.map((program) => (
            <article key={program.index} className="group relative isolate min-h-[360px] overflow-hidden border border-white/15 bg-[#111317] sm:min-h-[440px] xl:min-h-[500px]">
              <ParallaxFrame
                speed={program.speed}
                className="absolute inset-0 overflow-hidden"
                overlay={
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/25 transition-colors duration-500 group-hover:from-black/85">
                    <span className="absolute left-6 top-6 font-oswald text-5xl font-bold text-white/40 sm:text-6xl">
                      {program.index}
                    </span>
                    <span className="absolute right-6 top-8 h-px w-12 bg-[#FF858A]" />
                  </div>
                }
              >
                <Image
                  src={images[program.slot].src}
                  alt={images[program.slot].src.startsWith("/images/dummy-") ? `Decorative training illustration for ${program.title}` : program.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-[filter] duration-700 group-hover:brightness-125"
                  style={{ objectPosition: images[program.slot].src === program.image ? program.focus : images[program.slot].position }}
                />
              </ParallaxFrame>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF9297]">{program.eyebrow}</p>
                <h3 className="font-oswald text-4xl font-bold uppercase leading-none text-white lg:text-[2.7rem]">{program.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{program.line}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/15 pt-7 sm:flex-row sm:items-center">
          <p className="text-sm text-white/60">Your next chapter starts on the gym floor.</p>
          <Link href="/contact" className="group inline-flex min-h-12 items-center gap-3 border-b border-[#C8010A] pb-2 font-oswald text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:text-[#FF858A]">
            Ask about training
            <ArrowUpRight aria-hidden="true" className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
