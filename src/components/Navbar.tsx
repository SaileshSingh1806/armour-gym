"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/#programs" },
  { name: "About", href: "/about" },
  { name: "Schedule", href: "/schedule" },
  { name: "Pricing", href: "/pricing" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      id="mainHeader"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 lg:px-12 ${
        isScrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md py-3 border-b border-white/10 shadow-2xl"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Large Prominent Responsive Logo */}
        <Link href="/" className="flex items-center group relative z-10 py-1">
          <Image
            src="/logo.png"
            alt="Armour 24-7 Gym Ahmedabad"
            width={350}
            height={110}
            priority
            className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain drop-shadow-[0_2px_15px_rgba(255,42,59,0.25)] transition-transform duration-300 group-hover:scale-105"
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

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/contact"
            className="bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-oswald font-bold px-7 py-3 text-sm uppercase tracking-wider transition-all rounded-sm shadow-[0_0_25px_rgba(255,42,59,0.45)] flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>Join Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile quick actions */}
        <div className="flex items-center lg:hidden gap-3">
          <Link
            href="/contact"
            className="bg-[#ff2a3b] text-white font-oswald font-bold px-4 py-2 text-xs uppercase tracking-wider rounded-sm shadow-md"
          >
            Join
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="p-2 text-gray-300 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7 text-[#ff2a3b]" />
            ) : (
              <Menu className="w-7 h-7 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0a]/98 border-b border-white/10 backdrop-blur-2xl px-6 pt-4 pb-6 space-y-3 mt-3 animate-in slide-in-from-top duration-200 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-2.5 text-lg font-oswald font-bold uppercase tracking-wider text-gray-300 hover:text-[#ff2a3b] transition-colors flex items-center justify-between border-b border-white/5"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-gray-600" />
              </Link>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="/contact"
              className="block w-full py-3.5 text-center bg-[#ff2a3b] text-white font-oswald font-bold text-base uppercase tracking-wider rounded-sm shadow-[0_0_20px_rgba(255,42,59,0.35)]"
            >
              Get Free Pass • Ahmedabad 382445
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
