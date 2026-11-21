"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/** Purely decorative, scroll-responsive steel/red watermark. */
export default function FooterHologram() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_52%_82%,rgba(200,1,10,0.12),transparent_55%)]" />
      <motion.div
        style={reduce ? undefined : { y }}
        className="absolute inset-x-0 bottom-[-2rem] flex justify-center overflow-hidden sm:bottom-[-4rem]"
      >
        <span className="armour-hologram select-none whitespace-nowrap font-oswald text-[clamp(10rem,29vw,33rem)] font-bold uppercase leading-none tracking-[-0.08em]">
          ARMOUR
        </span>
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#08090B]/70 to-transparent" />
    </div>
  );
}
