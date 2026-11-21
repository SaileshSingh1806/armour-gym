"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ParallaxFrame, Reveal } from "@/components/Parallax";
import type { SiteImages } from "@/lib/media-slots";

const experiences = [
  {
    slot: "special-zumba",
    number: "01",
    tag: "THE RHYTHM",
    title: "ZUMBA",
    subtitle: "STUDIO",
    description: "High-energy dance fitness in a dedicated studio space.",
    large: true,
    speed: 18,
    wide: "lg:col-span-7",
    height: "h-[27rem] sm:h-[32rem] lg:h-[37rem]",
  },
  {
    slot: "special-yoga",
    number: "02",
    tag: "THE BALANCE",
    title: "YOGA",
    subtitle: "STUDIO",
    description: "Improve mobility, control and recovery.",
    large: false,
    speed: 10,
    wide: "lg:col-span-5",
    height: "h-[25rem] sm:h-[30rem] lg:h-[34rem]",
  },
  {
    slot: "special-hyrox",
    number: "03",
    tag: "THE CHALLENGE",
    title: "HYROX",
    subtitle: "TRAINING",
    description: "Strength and endurance. One powerful training style.",
    large: false,
    speed: 13,
    wide: "lg:col-span-5",
    height: "h-[25rem] sm:h-[30rem] lg:h-[34rem]",
  },
  {
    slot: "special-terrace",
    number: "04",
    tag: "THE FREEDOM",
    title: "OPEN TERRACE",
    subtitle: "WORKOUT",
    description: "Take your training into an open-air environment.",
    large: true,
    speed: 21,
    wide: "lg:col-span-7",
    height: "h-[27rem] sm:h-[32rem] lg:h-[37rem]",
  },
] as const;

/**
 * Editorial 7/5 and 5/7 image composition with independent scroll-linked
 * motion, a parallax typography layer, and accessible reduced-motion behavior.
 * Photos are served from the Media Manager or safe local placeholder assets.
 */
export default function SpecialtyShowcase({ images }: { images: SiteImages }) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["-16%", "16%"]);
  const watermarkOpacity = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.06, 0.13, 0.06]);

  return (
    <section
      ref={sectionRef}
      id="studios"
      aria-labelledby="studios-heading"
      className="relative isolate overflow-hidden border-t border-white/10 bg-[#07080A] py-24 text-white sm:py-32 lg:py-36"
    >
      <motion.div
        aria-hidden="true"
        style={reduce ? { opacity: 0.07 } : { y: watermarkY, opacity: watermarkOpacity }}
        className="pointer-events-none absolute -right-16 top-32 z-0 select-none whitespace-nowrap font-oswald text-[clamp(8rem,24vw,26rem)] font-bold uppercase leading-none tracking-[-0.09em] text-white"
      >
        BEYOND
      </motion.div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_0%_20%,rgba(200,1,10,0.13),transparent_55%)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-14 flex flex-col justify-between gap-7 lg:mb-20 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#FF858A]">
                <span aria-hidden="true" className="h-px w-12 bg-[#C8010A]" />
                MORE WAYS TO MOVE
              </p>
              <h2
                id="studios-heading"
                className="font-oswald text-[clamp(3.7rem,8.3vw,8.6rem)] font-bold uppercase leading-[0.84] tracking-[-0.055em] text-white"
              >
                BEYOND THE
                <br />
                <span className="text-[#C8010A]">GYM FLOOR.</span>
              </h2>
            </div>
            <p className="max-w-sm border-l-2 border-[#C8010A] pl-5 text-base leading-relaxed text-white/65 lg:mb-2">
              Find your rhythm, challenge your endurance and take your training beyond the ordinary.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-12 lg:items-center lg:gap-5">
          {experiences.map((experience, index) => {
            const image = images[experience.slot];
            const isPlaceholder = image.src.startsWith("/images/dummy-");
            return (
              <Reveal key={experience.slot} className={experience.wide} delay={index % 2 ? 0.1 : 0}>
                <article className={`group relative isolate overflow-hidden border border-white/15 bg-[#121316] ${experience.height}`}>
                  <ParallaxFrame
                    speed={experience.speed}
                    className="absolute inset-0 overflow-hidden"
                    overlay={
                      <>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07080A]/95 via-[#07080A]/35 to-[#07080A]/20 transition-colors duration-500 group-hover:via-[#07080A]/20" />
                        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 transition-colors duration-500 group-hover:ring-[#FF858A]/55" />
                      </>
                    }
                  >
                    <Image
                      src={image.src}
                      alt={isPlaceholder
                        ? `Decorative preview image for ${experience.title} ${experience.subtitle}`
                        : `${experience.title} ${experience.subtitle} at ARMOUR 24-7 GYM`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 62vw"
                      className="object-cover transition-[filter] duration-700 group-hover:brightness-110"
                      style={{ objectPosition: image.position }}
                    />
                  </ParallaxFrame>

                  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between p-6 sm:p-8">
                    <span className="font-oswald text-5xl font-bold tracking-tighter text-white/40 sm:text-6xl">
                      {experience.number}
                    </span>
                    <span className="border border-white/40 bg-black/35 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.17em] text-white/90 backdrop-blur-sm">
                      {experience.tag}
                    </span>
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 lg:p-10">
                    <div className="mb-5 h-0.5 w-10 bg-[#C8010A] transition-all duration-500 group-hover:w-20" />
                    <h3 className={`font-oswald font-bold uppercase leading-[0.86] tracking-[-0.035em] text-white ${experience.large ? "text-[clamp(3.25rem,5.9vw,6.6rem)]" : "text-[clamp(2.9rem,4.9vw,5.3rem)]"}`}>
                      {experience.title}
                      <br />
                      <span className="text-white/80">{experience.subtitle}</span>
                    </h3>
                    <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/80 sm:text-base">
                      {experience.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#FF949A]">
                      ARMOUR 24-7 GYM
                      <MoveUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col items-start justify-between gap-7 border-t border-white/20 pt-8 sm:flex-row sm:items-center">
            <p className="max-w-md text-sm leading-relaxed text-white/65">
              From studio sessions to open-air workouts, discover more ways to train at ARMOUR.
            </p>
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center gap-3 border-b border-[#C8010A] pb-2 font-oswald text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors hover:text-[#FF858A]"
            >
              ASK ABOUT SESSIONS
              <ArrowUpRight aria-hidden="true" className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
