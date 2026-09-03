"use client";

import Link from "next/link";
import Image from "next/image";
import { FormEvent } from "react";

export default function Footer() {
  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        
        {/* Col 1: Brand & Socials */}
        <div>
          <div className="relative h-14 sm:h-16 w-52 sm:w-64 mb-5">
            <Image
              src="/logo.png"
              alt="Armour 24-7 Gym"
              fill
              className="object-contain object-left"
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Ahmedabad’s premier 24/7 bodybuilding and athletic training sanctuary.<br></br> C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad 382445.
          </p>
          <div className="flex gap-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#ff2a3b] hover:text-white hover:border-[#ff2a3b] transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#ff2a3b] hover:text-white hover:border-[#ff2a3b] transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#ff2a3b] hover:text-white hover:border-[#ff2a3b] transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="font-oswald font-bold uppercase text-lg mb-6 text-white">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <Link href="/about" className="hover:text-[#ff2a3b] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#ladies-program" className="hover:text-[#ff2a3b] transition-colors">
                Ladies Fitness Program
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-[#ff2a3b] transition-colors">
                Membership Plans
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#ff2a3b] transition-colors">
                Contact &amp; Free Pass
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Working Hours */}
        <div>
          <h4 className="font-oswald font-bold uppercase text-lg mb-6 text-white">Working Hours</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Mon – Fri</span>
              <span className="text-gray-300">05:30 – 24:00</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Weekends</span>
              <span className="text-[#ff2a3b] font-bold">24 Hours Open</span>
            </li>
            <li className="text-[11px] text-gray-500 pt-1">
              * Biometric keycard members have 24/7/365 unrestricted entry.
            </li>
          </ul>
        </div>

        {/* Col 4: Newsletter */}
        <div>
          <h4 className="font-oswald font-bold uppercase text-lg mb-6 text-white">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">Stay connected with latest fitness trends &amp; workout programs.</p>
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex border border-white/10 rounded-sm overflow-hidden"
          >
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent text-sm p-3 w-full focus:outline-none text-white placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-[#ff2a3b] text-white font-bold uppercase text-xs px-4 font-oswald hover:bg-white hover:text-black transition-colors shrink-0 cursor-pointer"
            >
              Go
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 relative z-10">
        <p suppressHydrationWarning>Copyright © 2026 Armour 24-7 Gym Ahmedabad. All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>

      {/* Giant Bottom Faint Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center z-0 pointer-events-none">
        <span className="text-[7rem] md:text-[13rem] font-oswald font-bold text-white/[0.02] leading-none tracking-tighter block whitespace-nowrap">
          ARMOUR 24-7
        </span>
      </div>
    </footer>
  );
}
