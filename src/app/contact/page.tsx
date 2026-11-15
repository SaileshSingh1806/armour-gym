import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Contact & Location | Armour 24-7 Gym Ahmedabad 382445",
  description: "Visit Armour 24-7 Gym in Hathijan Circle, Ahmedabad, Gujarat 382445. Inquire about membership plans or book a demo workout session.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-28 md:pt-36 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[#ff2a3b] text-xs font-oswald font-bold uppercase tracking-widest mb-3 rounded-sm">
          <MapPin className="w-3.5 h-3.5" />
          Hathijan Circle • Ahmedabad 382445
        </div>
        <h1 className="font-oswald text-4xl sm:text-6xl font-bold uppercase tracking-tight text-white">
          Contact &amp; <span className="text-[#ff2a3b]">Location</span>
        </h1>
        <p className="max-w-xl mx-auto mt-3 text-xs sm:text-sm text-gray-400 font-body leading-relaxed">
          Walk in to our Hathijan Circle facility during desk hours or submit your enquiry below for plan details and demo session bookings.
        </p>
      </div>

      {/* Main Grid: Info + LeadForm */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Details & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-[#141414] border border-white/10 p-6 rounded-sm space-y-4">
              <h2 className="font-oswald text-lg font-bold uppercase text-white border-b border-white/10 pb-3">
                Facility Address
              </h2>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ff2a3b] shrink-0 mt-0.5" />
                <div className="space-y-1 font-body text-xs text-gray-300">
                  <p className="font-semibold text-white">Armour 24-7 Gym</p>
                  <p>C-601, 602 Shalin Square, Hathijan Circle,</p>
                  <p>Ahmedabad, Gujarat — 382445, India</p>
                  <div className="pt-2">
                    <a
                      href="https://maps.app.goo.gl/fdHFDqTDaHNvw5Pf6"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff2a3b] hover:underline"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Open in Google Maps ↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Communication Channels */}
            <div className="bg-[#141414] border border-white/10 p-6 rounded-sm space-y-4">
              <h2 className="font-oswald text-lg font-bold uppercase text-white border-b border-white/10 pb-3">
                Phone &amp; Email
              </h2>
              <div className="space-y-3 text-xs font-body text-gray-300">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#ff2a3b] shrink-0" />
                  <div>
                    <span className="text-[10px] text-gray-500 font-oswald uppercase block">Call Desk</span>
                    <a href="tel:+918160697163" className="hover:text-white transition-colors font-semibold">
                      +91 81606 97163
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-green-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-gray-500 font-oswald uppercase block">WhatsApp Support</span>
                    <a
                      href="https://wa.me/918160697163?text=Hi%20Armour%20Gym%2C%20I%20want%20to%20know%20more%20about%20membership%20plans"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white transition-colors font-semibold"
                    >
                      Chat on WhatsApp (+91 81606 97163)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#ff2a3b] shrink-0" />
                  <div>
                    <span className="text-[10px] text-gray-500 font-oswald uppercase block">Official Email</span>
                    <a href="mailto:armour247gym@gmail.com" className="hover:text-white transition-colors font-semibold">
                      armour247gym@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#141414] border border-white/10 p-6 rounded-sm space-y-3 text-xs font-body text-gray-300">
              <h2 className="font-oswald text-lg font-bold uppercase text-white border-b border-white/10 pb-2">
                Facility Operating Hours
              </h2>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Biometric Member Entry</span>
                <span className="text-[#ff2a3b] font-semibold">24 Hours / 7 Days *</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Front Desk Staff &amp; Tours</span>
                <span className="text-white">06:00 AM – 10:00 PM</span>
              </div>
              <p className="text-[11px] text-gray-500 pt-1 leading-snug">
                * 24/7 access is subject to management rights and facility safety rules. See our <Link href="/terms-conditions" className="text-[#ff2a3b] underline">Terms &amp; Conditions</Link>.
              </p>
            </div>

          </div>

          {/* Right Column: Lead Form (7 cols) */}
          <div className="lg:col-span-7">
            <LeadForm />
          </div>

        </div>
      </div>
    </div>
  );
}
