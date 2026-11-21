"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageSquare, Phone } from "lucide-react";

/** Only show conversion actions after the hero leaves view, and hide over the footer. */
export default function MobileActionBar() {
  const [heroOutOfView, setHeroOutOfView] = useState(false);
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("homepage-hero");
    const footer = document.querySelector("footer");
    if (!hero) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setHeroOutOfView(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0),
      { threshold: 0 },
    );
    heroObserver.observe(hero);

    let footerObserver: IntersectionObserver | undefined;
    if (footer) {
      footerObserver = new IntersectionObserver(
        ([entry]) => setFooterInView(entry.isIntersecting),
        { threshold: 0 },
      );
      footerObserver.observe(footer);
    }

    return () => {
      heroObserver.disconnect();
      footerObserver?.disconnect();
    };
  }, []);

  const visible = heroOutOfView && !footerInView;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_1fr_1.4fr] border-t border-white/15 bg-[#0a0a0a]/95 pb-[env(safe-area-inset-bottom)] backdrop-blur transition-transform duration-300 md:hidden ${visible ? "translate-y-0" : "pointer-events-none translate-y-full"}`}
      aria-hidden={!visible}
    >
      <a
        href="tel:+918160697163"
        tabIndex={visible ? 0 : -1}
        className="flex min-h-14 items-center justify-center gap-2 text-sm font-semibold text-white"
      >
        <Phone className="size-4" aria-hidden="true" /> Call
      </a>
      <a
        href="https://wa.me/918160697163"
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={visible ? 0 : -1}
        className="flex min-h-14 items-center justify-center gap-2 border-l border-white/15 text-sm font-semibold text-white"
      >
        <MessageSquare className="size-4" aria-hidden="true" /> WhatsApp
      </a>
      <Link
        href="/contact?plan=demo"
        tabIndex={visible ? 0 : -1}
        className="flex min-h-14 items-center justify-center bg-[#C8010A] text-sm font-semibold text-white"
      >
        Book a demo
      </Link>
    </div>
  );
}
