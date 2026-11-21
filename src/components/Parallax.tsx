"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/**
 * Parallax helpers built on framer-motion's scroll-linked motion values.
 * They update the DOM directly (no React re-renders while scrolling) and
 * automatically switch off when the visitor prefers reduced motion.
 */

/* ------------------------------------------------------------------ */
/* ParallaxBg — full-bleed background layer that drifts slower than    */
/* the page. Put it as the first child of a `relative overflow-hidden` */
/* section; its children (usually an <Image fill />) fill the layer.   */
/* ------------------------------------------------------------------ */
export function ParallaxBg({
  children,
  distance = 15,
  className = "",
}: {
  children: ReactNode;
  /** Max travel in % of the section height (each direction). */
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // The layer is `distance`% taller than the section on each side. Percent
  // translations are relative to the layer's own height, so convert to keep
  // the travel inside that spare margin (an edge must never become visible).
  const travel = distance / (1 + (2 * distance) / 100);
  const y = useTransform(scrollYProgress, [0, 1], [`-${travel}%`, `${travel}%`]);

  return (
    <div ref={ref} className="absolute inset-0 z-0 overflow-hidden">
      <motion.div
        style={reduce ? { top: 0, bottom: 0 } : { y, top: `-${distance}%`, bottom: `-${distance}%` }}
        className={`absolute inset-x-0 will-change-transform ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* HeroParallax — wraps hero background AND foreground so the photo    */
/* drifts down while the copy rises and fades as you scroll away.      */
/* ------------------------------------------------------------------ */
export function HeroParallax({
  background,
  overlay,
  children,
  className = "",
  id,
}: {
  id?: string;
  /** The hero photo + its gradients (fills the layer). */
  background: ReactNode;
  /** Optional layer between photo and copy (e.g. particle canvas). */
  overlay?: ReactNode;
  /** Hero copy. */
  children: ReactNode;
  /** Classes for the <section> (must include `relative overflow-hidden`). */
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Photo drifts down slower than the page and slowly zooms; copy rises and fades.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.18]);
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const fgOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section id={id} ref={ref} className={className}>
      <motion.div
        style={reduce ? undefined : { y: bgY, scale: bgScale }}
        className="absolute inset-0 -top-16 -bottom-16 z-0 will-change-transform"
      >
        {background}
      </motion.div>
      {overlay}
      <motion.div
        style={reduce ? undefined : { y: fgY, opacity: fgOpacity }}
        className="relative z-10 w-full will-change-transform"
      >
        {children}
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* ParallaxFrame — image that moves slightly inside a fixed frame      */
/* (gallery tiles, program card, ladies section). `speed` > 0 moves    */
/* the image against the scroll direction; vary it per tile for depth. */
/* ------------------------------------------------------------------ */
export function ParallaxFrame({
  children,
  overlay,
  className = "",
  speed = 12,
}: {
  /** The image (moves inside the frame). */
  children: ReactNode;
  /** Static layer above the image (gradients, captions) that does not move. */
  overlay?: ReactNode;
  /** Travel in % of the frame height (each direction). */
  speed?: number;
  /** Must include `relative overflow-hidden` and a height. */
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed}%`, `${speed}%`]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={reduce ? undefined : { y }}
        className="absolute inset-0 will-change-transform"
      >
        {/* Scale up a touch so translation never reveals the frame edge. */}
        <div
          className="relative w-full h-full"
          style={{ transform: `scale(${1 + (speed * 2) / 100 + 0.04})` }}
        >
          {children}
        </div>
      </motion.div>
      {overlay}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Reveal — fade + rise into view once. Use `delay` to stagger cards.  */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
