"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { HeroParallax } from "@/components/Parallax";
import { ButtonLink } from "./ui";
import type { SiteImages } from "@/lib/media-slots";

const sequence = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.08 } },
};
const rise = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Hero({ images }: { images: SiteImages }) {
  const reduce = useReducedMotion();

  return (
    <HeroParallax
      id="homepage-hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-14 pt-28 sm:pt-36"
      background={
        <>
          <Image
            src={images.hero.src}
            alt={images.hero.src.startsWith("/images/dummy-") ? "Decorative gym preview image" : "ARMOUR 24-7 Gym training floor, Hathijan, Ahmedabad"}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: images.hero.position }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060608]/95 via-[#08090B]/70 to-[#08090B]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-[#08090B]/35" />
        </>
      }
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={sequence}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="max-w-6xl"
        >
          <motion.h1
            variants={rise}
            className="font-oswald text-[clamp(3.9rem,10.2vw,11rem)] font-bold uppercase leading-[0.83] tracking-[-0.045em] text-white"
          >
            Built
            <br />
            to be
            <br />
            <span className="text-[#C8010A]">stronger.</span>
          </motion.h1>
          <motion.div
            variants={rise}
            className="mt-9 flex flex-col gap-7 border-l-2 border-[#C8010A] pl-5 sm:flex-row sm:items-end sm:justify-between sm:gap-10 sm:pl-7"
          >
            <p className="max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
              Imported equipment. Uncompromising energy. Your goals, your pace — on your time.
            </p>
            <div className="flex shrink-0 flex-wrap gap-3">
              <ButtonLink href="/pricing" arrow>Explore memberships</ButtonLink>
              <ButtonLink href="/contact?plan=demo" variant="outline">Book a demo session</ButtonLink>
            </div>
          </motion.div>

          {/* The brand promise, not a front-desk timetable. */}
          <motion.div variants={rise} className="mt-10 sm:mt-14">
            <div className="group relative inline-flex max-w-full items-center gap-5 overflow-hidden border-y border-white/30 py-4 pr-4 sm:gap-7 sm:py-5 sm:pr-7">
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#C8010A]/20 via-white/[0.04] to-transparent opacity-80" />
              <div className="relative flex size-14 shrink-0 items-center justify-center border border-[#FF757C]/60 bg-[#C8010A]/20 sm:size-16">
                <Clock3 aria-hidden="true" className="size-7 text-white sm:size-8" />
              </div>
              <div className="relative">
                <p className="font-oswald text-2xl font-bold uppercase leading-none tracking-tight text-white sm:text-4xl">
                  YOUR TIME. <span className="text-[#FF666F]">YOUR GRIND.</span>
                </p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.23em] text-white/75 sm:text-xs">
                  24/7 GYM ACCESS FOR MEMBERS*
                </p>
              </div>
              <ArrowUpRight aria-hidden="true" className="relative hidden size-5 shrink-0 text-[#FF858A] sm:block" />
            </div>
            <p className="mt-3 max-w-xl text-[11px] leading-relaxed text-white/55">
              * Subject to facility policies and scheduled closures.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </HeroParallax>
  );
}
