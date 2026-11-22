import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import FooterHologram from "@/components/FooterHologram";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Training Programs", href: "/#programs" },
  { label: "Studios & Terrace", href: "/#studios" },
  { label: "Our Facilities", href: "/#gallery" },
  { label: "About ARMOUR", href: "/about" },
  { label: "Membership Plans", href: "/pricing" },
  { label: "Contact", href: "/contact" },
] as const;

const policies = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Delivery Policy", href: "/shipping-policy" },
] as const;

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#08090B] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-full bg-[radial-gradient(ellipse_at_80%_0%,rgba(200,1,10,0.13),transparent_55%)]"
      />
      <FooterHologram />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Clear final action, without duplicating the homepage contact form. */}
        <div className="grid gap-10 border-b border-white/15 py-20 sm:py-24 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16 lg:py-28">
          <div>
            <p className="mb-7 flex items-center gap-3 font-oswald text-xs font-bold uppercase tracking-[0.24em] text-[#FF858A]">
              <span aria-hidden="true" className="h-px w-11 bg-[#C8010A]" />
              THE NEXT STEP IS YOURS
            </p>
            <h2 className="max-w-4xl font-oswald text-[clamp(3.65rem,8.1vw,8.5rem)] font-bold uppercase leading-[0.86] tracking-[-0.05em]">
              READY TO
              <br />
              <span className="text-[#C8010A]">GO ALL IN?</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="max-w-sm text-base leading-relaxed text-white/65 sm:text-lg">
              Your strength journey starts with one decision. Make your next move at ARMOUR.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="/pricing"
                className="group inline-flex min-h-12 items-center justify-between gap-5 bg-[#C8010A] px-6 py-4 font-oswald text-sm font-bold uppercase tracking-[0.1em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
              >
                Explore Memberships
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center border-b border-white/35 font-oswald text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-[#C8010A] hover:text-[#FF858A]"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>

        {/* Brand and essentials — intentionally concise for easier scanning. */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-12 lg:py-20">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block focus-visible:outline-offset-4" aria-label="ARMOUR 24-7 Gym — Homepage">
              <Image
                src="/armour-logo.png"
                alt="ARMOUR 24-7 Gym"
                width={906}
                height={223}
                className="h-12 w-auto object-contain sm:h-14"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60 sm:text-base">
              More than a gym. It&apos;s a movement.
              <br />
              Train stronger, together.
            </p>
            <a
              href="https://maps.app.goo.gl/fdHFDqTDaHNvw5Pf6"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex max-w-sm items-start gap-4 text-sm leading-relaxed text-white/80 transition-colors hover:text-white"
              aria-label="Find ARMOUR 24-7 Gym on Google Maps"
            >
              <span className="flex size-10 shrink-0 items-center justify-center border border-[#FF858A]/55 bg-[#C8010A]/20 shadow-[0_0_20px_rgba(200,1,10,0.16)]"><MapPin aria-hidden="true" className="size-5 text-white" /></span>
              <span>
                C-601, 602 Shalin Square, Hathijan Circle,
                <br />
                Ahmedabad, Gujarat 382445
                <ArrowUpRight aria-hidden="true" className="ml-2 inline size-4 align-text-top transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>

          <nav aria-label="Footer navigation" className="lg:col-span-3">
            <h3 className="mb-6 font-oswald text-sm font-bold uppercase tracking-[0.2em] text-white">
              EXPLORE
            </h3>
            <ul className="grid gap-3 text-sm text-white/60 sm:text-base">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block py-0.5 transition-colors hover:text-[#FF858A]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h3 className="mb-6 font-oswald text-sm font-bold uppercase tracking-[0.2em] text-white">
              GET IN TOUCH
            </h3>
            <div className="space-y-4 text-sm sm:text-base">
              <a
                href="tel:+918160697163"
                className="flex items-center gap-4 text-white/85 transition-colors hover:text-white"
              >
                <span className="flex size-10 shrink-0 items-center justify-center border border-[#FF858A]/55 bg-[#C8010A]/20 shadow-[0_0_20px_rgba(200,1,10,0.16)]"><Phone aria-hidden="true" className="size-5 text-white" /></span>
                +91 81606 97163
              </a>
              <a
                href="mailto:armour247gym@gmail.com"
                className="flex items-center gap-4 break-all text-white/85 transition-colors hover:text-white"
              >
                <span className="flex size-10 shrink-0 items-center justify-center border border-[#FF858A]/55 bg-[#C8010A]/20 shadow-[0_0_20px_rgba(200,1,10,0.16)]"><Mail aria-hidden="true" className="size-5 text-white" /></span>
                armour247gym@gmail.com
              </a>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="flex items-center gap-3 text-sm font-semibold text-white">
                <span className="flex size-10 shrink-0 items-center justify-center border border-[#FF858A]/55 bg-[#C8010A]/20 shadow-[0_0_20px_rgba(200,1,10,0.16)]"><Clock3 aria-hidden="true" className="size-5 text-white" /></span>
                MEMBER ACCESS: 24/7*
              </div>
              <p className="mt-2 text-sm text-white/55">
                Front Desk: 06:00 AM – 10:00 PM
              </p>
              <p className="mt-3 max-w-sm text-xs leading-relaxed text-white/40">
                * Access is subject to management policies and facility safety guidelines.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/10 py-7 text-xs text-white/45 sm:text-sm lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 ARMOUR 24-7 GYM. All rights reserved.</p>
          <nav aria-label="Legal information">
            <ul className="flex flex-wrap gap-x-5 gap-y-3">
              {policies.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
