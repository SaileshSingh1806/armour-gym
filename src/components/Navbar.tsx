"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone, MessageSquare } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/#programs" },
  { name: "Ladies Program", href: "/#ladies-program" },
  { name: "Facility", href: "/#gallery" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Schedule", href: "/schedule" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll and handle Esc key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
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
  }, [isMobileMenuOpen]);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* 
        Header is permanently transparent across all scroll states.
        A subtle linear gradient at the very top ensures high contrast and readability 
        over the hero image and bright background areas without creating a solid strip.
      */}
      <header
        id="mainHeader"
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-200 bg-gradient-to-b from-black/80 via-black/40 to-transparent py-3 sm:py-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center group relative z-10 py-1 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff2a3b] rounded-sm"
            aria-label="Armour 24-7 Gym Homepage"
          >
            <Image
              src="/armour-logo.png"
              alt="Armour 24-7 Gym"
              width={906}
              height={223}
              priority
              className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-opacity group-hover:opacity-90"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs xl:text-sm font-semibold uppercase tracking-wider text-gray-200"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff2a3b] rounded-sm ${
                    isActive
                      ? "text-[#ff2a3b] font-bold"
                      : "hover:text-[#ff2a3b] text-gray-300"
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
              className="bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-oswald font-bold px-5 py-2.5 text-xs xl:text-sm uppercase tracking-wider transition-colors rounded-sm inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Join Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center lg:hidden gap-2.5">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="bg-[#ff2a3b] text-white font-oswald font-bold px-3 py-1.5 text-xs uppercase tracking-wider rounded-sm"
            >
              Join
            </Link>

            <button
              ref={toggleButtonRef}
              onClick={toggleMenu}
              type="button"
              className="w-10 h-10 flex items-center justify-center rounded-sm bg-black/40 hover:bg-black/60 text-white border border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff2a3b]"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#ff2a3b]" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
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
          <nav className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`py-3 px-3 text-base font-oswald font-bold uppercase tracking-wider rounded-sm flex items-center justify-between transition-colors ${
                    isActive
                      ? "text-[#ff2a3b] bg-white/5"
                      : "text-gray-200 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className={`w-4 h-4 ${isActive ? "text-[#ff2a3b]" : "text-gray-600"}`} />
                </Link>
              );
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="space-y-3 pt-6 border-t border-white/10 mt-6">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block w-full py-3.5 text-center bg-[#ff2a3b] text-white font-oswald font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-white hover:text-black transition-colors"
            >
              Join Armour 24-7 Gym
            </Link>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href="tel:+918160697163"
                className="py-2.5 px-3 bg-[#181818] border border-white/10 rounded-sm text-xs font-oswald font-bold uppercase text-gray-200 hover:text-white flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#ff2a3b]" />
                <span>Call Desk</span>
              </a>
              <a
                href="https://wa.me/918160697163?text=Hi%20Armour%20Gym%2C%20I%20want%20to%20know%20more%20about%20membership%20plans"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 bg-[#181818] border border-white/10 rounded-sm text-xs font-oswald font-bold uppercase text-green-400 hover:text-green-300 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            <p className="text-[11px] text-center text-gray-500 font-body pt-2 leading-relaxed">
              C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad 382445
            </p>
          </div>
        </div>
      )}
    </>
  );
}
