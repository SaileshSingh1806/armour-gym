import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-white pt-16 pb-12 px-4 sm:px-6 md:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Col 1: Brand & Location */}
        <div className="space-y-4">
          <Link href="/" className="inline-block" aria-label="Armour 24-7 Gym Homepage">
            <Image
              src="/armour-logo.png"
              alt="Armour 24-7 Gym"
              width={906}
              height={223}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="text-gray-400 text-xs leading-relaxed font-body">
            Armour 24-7 Gym provides round-the-clock strength training and fitness facilities at Hathijan Circle, Ahmedabad.
          </p>
          <div className="pt-1">
            <p className="text-xs text-gray-300 font-body">
              C-601, 602 Shalin Square, Hathijan Circle,<br />
              Ahmedabad, Gujarat 382445
            </p>
            <a
              href="https://maps.app.goo.gl/fdHFDqTDaHNvw5Pf6"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#ff2a3b] hover:underline font-semibold mt-2"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Google Maps Location ↗</span>
            </a>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div>
          <h4 className="font-oswald font-bold uppercase text-sm tracking-wider mb-4 text-white">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-400 font-body">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#programs" className="hover:text-white transition-colors">
                Training Programs
              </Link>
            </li>
            <li>
              <Link href="/#ladies-program" className="hover:text-white transition-colors">
                Ladies Program
              </Link>
            </li>
            <li>
              <Link href="/#gallery" className="hover:text-white transition-colors">
                Gym Facility &amp; Equipment
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Armour 24-7
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-white transition-colors">
                Membership Plans
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact &amp; Location
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Policies & Compliance */}
        <div>
          <h4 className="font-oswald font-bold uppercase text-sm tracking-wider mb-4 text-white">
            Policies &amp; Legal
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-400 font-body">
            <li>
              <Link href="/terms-conditions" className="hover:text-white transition-colors">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/refund-policy" className="hover:text-white transition-colors">
                Refund &amp; Cancellation Policy
              </Link>
            </li>
            <li>
              <Link href="/shipping-policy" className="hover:text-white transition-colors">
                Shipping &amp; Delivery Policy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Helpdesk &amp; Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Timings & Contact */}
        <div>
          <h4 className="font-oswald font-bold uppercase text-sm tracking-wider mb-4 text-white">
            Hours &amp; Contact
          </h4>
          <ul className="space-y-3 text-xs text-gray-400 font-body">
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Biometric Access</span>
              <span className="text-[#ff2a3b] font-semibold">24/7 Open *</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Front Desk Staff</span>
              <span className="text-gray-300">06:00 AM – 10:00 PM</span>
            </li>
            <li className="space-y-1.5 pt-1 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#ff2a3b]" />
                <a href="tel:+918160697163" className="hover:text-white transition-colors">
                  +91 81606 97163
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#ff2a3b]" />
                <a href="mailto:armour247gym@gmail.com" className="hover:text-white transition-colors">
                  armour247gym@gmail.com
                </a>
              </div>
            </li>
            <li className="text-[11px] text-gray-500 pt-1 leading-snug">
              * 24/7 access is subject to management rights and facility safety guidelines.
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-3">
        <p suppressHydrationWarning>© 2026 Armour 24-7 Gym Ahmedabad. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4 text-[11px] text-gray-400">
          <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms</Link>
          <span>•</span>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
          <span>•</span>
          <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          <span>•</span>
          <Link href="/shipping-policy" className="hover:text-white transition-colors">Delivery</Link>
        </div>
      </div>
    </footer>
  );
}
