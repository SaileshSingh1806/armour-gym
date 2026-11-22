"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ParallaxFrame, Reveal } from "@/components/Parallax";
import type { SiteImages } from "@/lib/media-slots";

const moments = [
  {
    number: "01",
    slot: "story-space",
    label: "The space",
    title: "Built to move differently.",
    description:
      "A purposeful training environment with room to focus, push and progress at your own pace.",
    image: "/images/dummy-break.webp",
    position: "center",
  },
  {
    number: "02",
    slot: "story-equipment",
    label: "The equipment",
    title: "Every rep matters.",
    description:
      "From free weights to dedicated strength stations, find your next challenge on the gym floor.",
    image: "/images/dummy-gallery-1.webp",
    position: "center",
  },
  {
    number: "03",
    slot: "story-routine",
    label: "Your routine",
    title: "Your goals. Your hours.",
    description:
      "Make training part of your life with the flexibility and energy of ARMOUR 24-7.",
    image: "/images/dummy-gallery-2.webp",
    position: "center",
  },
] as const;

/**
 * Sticky editorial storytelling.
 * The left narrative remains in view on large screens while the 3 story cards
 * are displayed with identical uniform sizing and consistent parallax motion.
 */
export default function CinematicStory({ images }: { images: SiteImages }) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.25"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    mass: 0.5,
  });

  return (
    <section
      ref={sectionRef}
      aria-labelledby="story-heading"
      className="relative isolate overflow-clip border-y border-white/10 bg-[#08090B] py-24 sm:py-32 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(ellipse_at_10%_30%,rgba(200,1,10,0.09),transparent_45%)]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20 lg:px-8">
        <div className="self-start lg:sticky lg:top-32">
          <Reveal>
            <h2
              id="story-heading"
              className="max-w-xl font-oswald text-[clamp(3.25rem,5.8vw,6.6rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em] text-white"
            >
              MORE THAN
              <br />
              A GYM.
              <br />
              IT&apos;S A
              <br />
              <span className="text-[#C8010A]">MOVEMENT.</span>
            </h2>
            <p className="mt-8 max-w-md font-body text-base leading-relaxed text-white/65 sm:text-lg">
              A place to show up, find your strength and keep moving forward — together.
            </p>
            <Link
              href="/#gallery"
              className="group mt-9 inline-flex items-center gap-3 border-b border-[#C8010A] pb-2 font-body text-sm font-semibold text-white transition-colors hover:text-[#FF858A]"
            >
              Explore our space
              <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="mt-14 hidden items-center gap-4 lg:flex" aria-hidden="true">
            <div className="relative h-24 w-px overflow-hidden bg-white/10">
              <motion.div
                className="absolute inset-0 origin-top bg-[#C8010A]"
                style={{ scaleY: reduceMotion ? 1 : progress }}
              />
            </div>
            <span className="font-body text-xs text-white/65">
              Scroll to explore
            </span>
          </div>
        </div>

        <div className="space-y-10 sm:space-y-16">
          {moments.map((moment, index) => (
            <Reveal key={moment.number} delay={0.06 * index} y={28}>
              <article className="group overflow-hidden rounded-sm border border-white/10 bg-[#111317] transition-colors duration-500 hover:border-white/25">
                <ParallaxFrame
                  speed={10}
                  className="relative h-[260px] sm:h-[340px] lg:h-[380px] w-full overflow-hidden"
                  overlay={
                    <div className="pointer-events-none absolute inset-0 flex items-start justify-between bg-gradient-to-t from-black/60 via-transparent to-black/25 p-5 sm:p-6">
                      <span className="rounded-sm border border-white/30 bg-black/60 px-3 py-1.5 font-oswald text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                        {moment.label}
                      </span>
                    </div>
                  }
                >
                  <Image
                    src={images[moment.slot].src}
                    alt={images[moment.slot].src.startsWith("/images/dummy-") ? `ARMOUR 24-7 Gym – ${moment.label.toLowerCase()}` : `ARMOUR 24-7 Gym – ${moment.label.toLowerCase()}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 54vw"
                    className="object-cover object-center transition-[filter] duration-700 group-hover:brightness-110"
                    style={{ objectPosition: images[moment.slot].src === moment.image ? moment.position : images[moment.slot].position }}
                  />
                </ParallaxFrame>
                <div className="grid gap-3 p-6 sm:p-8">
                  <h3 className="font-oswald text-2xl font-bold uppercase leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                    {moment.title}
                  </h3>
                  <p className="max-w-lg font-body text-sm leading-relaxed text-white/70 sm:text-base">
                    {moment.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
