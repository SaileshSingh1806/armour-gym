"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/#programs" },
  { name: "Ladies Program", href: "/#ladies-program" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
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
      <header
        id="mainHeader"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-[#0a0a0a]/98 backdrop-blur-xl py-2.5 sm:py-3 border-b border-white/10 shadow-2xl"
            : "bg-gradient-to-b from-black/90 to-transparent py-3 sm:py-4 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center group relative z-10 py-0.5 shrink-0"
            aria-label="Armour 24-7 Gym Homepage"
          >
            <Image
              src="/armour-logo.png"
              alt="Armour 24-7 Gym Ahmedabad"
              width={906}
              height={223}
              priority
              className="h-[38px] sm:h-[44px] md:h-[48px] lg:h-[52px] w-auto object-contain drop-shadow-[0_2px_15px_rgba(255,42,59,0.25)] transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold uppercase tracking-wider text-gray-300">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`hover:text-[#ff2a3b] transition-colors py-1.5 border-b-2 ${
                    isActive
                      ? "text-[#ff2a3b] border-[#ff2a3b] font-bold"
                      : "border-transparent"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA - Desktop Only */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-oswald font-bold px-7 py-3 text-sm uppercase tracking-wider transition-all rounded-sm shadow-[0_0_25px_rgba(255,42,59,0.45)] flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Join Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center lg:hidden gap-2 sm:gap-3">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="bg-[#ff2a3b] text-white font-oswald font-bold px-3.5 py-1.5 text-xs uppercase tracking-wider rounded-sm shadow-md"
            >
              Join
            </Link>

            {/* Hamburger Toggle Button */}
            <button
              onClick={toggleMenu}
              type="button"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors cursor-pointer focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#ff2a3b]" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden animate-in fade-in slide-in-from-top-4 duration-200 overflow-y-auto"
          style={{ minHeight: "100dvh" }}
        >
          {/* Nav List */}
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`py-3 px-3 text-lg font-oswald font-bold uppercase tracking-wider rounded-lg flex items-center justify-between transition-colors ${
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
          </div>

          {/* Bottom Actions in Drawer */}
          <div className="space-y-3 pt-6 border-t border-white/10 mt-4">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block w-full py-3.5 text-center bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-oswald font-bold text-sm uppercase tracking-wider rounded-lg shadow-[0_0_20px_rgba(255,42,59,0.4)] transition-colors"
            >
              Claim Free Trial Pass
            </Link>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href="tel:+918160697163"
                className="py-2.5 px-3 bg-[#141414] border border-white/10 rounded-lg text-xs font-oswald font-bold uppercase text-gray-300 hover:text-white flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#ff2a3b]" />
                <span>Call Desk</span>
              </a>
              <a
                href="https://wa.me/918160697163?text=Hi%20Armour%20Gym%2C%20I%20want%20to%20know%20more%20about%20membership%20plans"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 bg-[#141414] border border-white/10 rounded-lg text-xs font-oswald font-bold uppercase text-green-400 hover:text-green-300 flex items-center justify-center gap-2"
              >
                <span>WhatsApp</span>
              </a>
            </div>

            <p className="text-[10px] text-center text-gray-500 font-mono pt-1">
              C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad
            </p>
          </div>
        </div>
      )}
    </>
  );
}
