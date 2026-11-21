"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone, MessageSquare } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/#programs" },
  { name: "Studios", href: "/#studios" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuState, setMobileMenuState] = useState({ open: false, pathname: "" });
  const isMobileMenuOpen = mobileMenuState.open && mobileMenuState.pathname === pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Keep the first viewport immersive; restore legibility over later sections.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll and handle Esc key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setMobileMenuState({ open: false, pathname });
        toggleButtonRef.current?.focus();
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen, pathname]);

  const toggleMenu = () => {
    setMobileMenuState((prev) => ({
      open: !(prev.open && prev.pathname === pathname),
      pathname,
    }));
  };

  const closeMenu = () => {
    setMobileMenuState({ open: false, pathname });
  };

  return (
    <>
      {/* Transparent over the homepage hero; an opaque surface appears while scrolling. */}
      <header
        id="mainHeader"
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,padding,backdrop-filter] duration-500 ${isScrolled || pathname !== "/" || isMobileMenuOpen ? "border-white/10 bg-[#08090B]/95 py-3 shadow-[0_12px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl" : "border-transparent bg-gradient-to-b from-black/80 to-transparent py-4 sm:py-5"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-6">
          
          {/* Brand Logo - Enlarged for mobile prominence */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center group relative z-10 py-1 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8010A] rounded-sm"
            aria-label="Armour 24-7 Gym Homepage"
          >
            <Image
              src="/armour-logo.png"
              alt="Armour 24-7 Gym"
              width={906}
              height={223}
              priority
              className="h-11 sm:h-12 md:h-14 w-auto object-contain transition-opacity group-hover:opacity-90"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 xl:gap-9 text-sm xl:text-base font-semibold uppercase tracking-wider text-gray-200"
          >
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : !link.href.includes("#") && pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8010A] rounded-sm ${
                    isActive
                      ? "text-[#C8010A] font-bold"
                      : "hover:text-[#C8010A] text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Primary Action - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-[#C8010A] hover:bg-white hover:text-black text-white font-oswald font-bold px-6 py-3 text-sm uppercase tracking-wider transition-colors rounded-sm inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Join Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center lg:hidden gap-3">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="bg-[#C8010A] text-white font-oswald font-bold px-4 py-2 text-sm uppercase tracking-wider rounded-sm shadow-md"
            >
              Join
            </Link>

            <button
              ref={toggleButtonRef}
              onClick={toggleMenu}
              type="button"
              className="w-11 h-11 flex items-center justify-center rounded-sm bg-black/50 hover:bg-black/70 text-white border border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8010A]"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#C8010A]" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-40 bg-[#0c0c0c] flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden overflow-y-auto"
        >
          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`py-3.5 px-3 text-xl font-oswald font-bold uppercase tracking-wider rounded-sm flex items-center justify-between transition-colors ${
                    isActive
                      ? "text-[#C8010A] bg-white/5"
                      : "text-gray-200 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className={`w-5 h-5 ${isActive ? "text-[#C8010A]" : "text-gray-600"}`} />
                </Link>
              );
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="space-y-3 pt-6 border-t border-white/10 mt-6">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block w-full py-4 text-center bg-[#C8010A] text-white font-oswald font-bold text-base uppercase tracking-wider rounded-sm hover:bg-white hover:text-black transition-colors"
            >
              Join Armour 24-7 Gym
            </Link>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href="tel:+918160697163"
                className="py-3 px-3 bg-[#181818] border border-white/10 rounded-sm text-sm font-oswald font-bold uppercase text-gray-200 hover:text-white flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C8010A]" />
                <span>Call Desk</span>
              </a>
              <a
                href="https://wa.me/918160697163?text=Hi%20Armour%20Gym%2C%20I%20want%20to%20know%20more%20about%20membership%20plans"
                target="_blank"
                rel="noreferrer"
                className="py-3 px-3 bg-[#181818] border border-white/10 rounded-sm text-sm font-oswald font-bold uppercase text-green-400 hover:text-green-300 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            <p className="text-xs text-center text-gray-400 font-body pt-2 leading-relaxed">
              C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad 382445
            </p>
          </div>
        </div>
      )}
    </>
  );
}
