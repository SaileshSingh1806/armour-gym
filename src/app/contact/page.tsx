import LeadForm from "@/components/LeadForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ShieldCheck,
  Car,
} from "lucide-react";

export const metadata = {
  title: "Contact & Location | Armour 24-7 Gym Ahmedabad 382445",
  description: "Visit Armour 24-7 Gym on S.G. Highway, Ahmedabad, Gujarat 382445. Contact our coaches or claim your free 1-day workout trial.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen py-12 md:py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] border border-[#ff2a3b]/40 text-[#ff2a3b] text-xs font-heading font-bold uppercase tracking-widest mb-4">
          <MapPin className="w-3.5 h-3.5" />
          AHMEDABAD HEADQUARTERS
        </div>
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white">
          VISIT <span className="text-[#ff2a3b]">ARMOUR 24-7</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-gray-400 font-body">
          Ready to experience Gujarat’s most serious strength training arena? Walk in for a tour or claim your complimentary 1-day pass below.
        </p>
      </div>

      {/* Main Grid: Info + LeadForm */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details & Hours (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Address & Direct Channels */}
            <div className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm space-y-6">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white border-b border-white/10 pb-4">
                FACILITY LOCATION &amp; ACCESS
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0a0a0a] border border-[#ff2a3b]/40 text-[#ff2a3b] flex items-center justify-center rounded-sm shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold uppercase text-white">
                      PHYSICAL ADDRESS
                    </h4>
                    <p className="text-gray-300 mt-0.5 leading-relaxed">
                      Armour 24-7 Gym, C-601, 602 Shalin Square, Hathijan Circle,<br />
                      <strong className="text-white">Ahmedabad, Gujarat — 382445, India</strong>
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3 bg-[#0a0a0a] p-4 border border-white/5">
                    <Phone className="w-5 h-5 text-[#ff2a3b] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider font-heading font-bold block">
                        24/7 HELPLINE / FRONT DESK
                      </span>
                      <a
                        href="tel:+919876543210"
                        className="font-heading text-lg font-bold text-white hover:text-[#ff2a3b] transition-colors"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-[#0a0a0a] p-4 border border-white/5">
                    <MessageSquare className="w-5 h-5 text-[#ff2a3b] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider font-heading font-bold block">
                        INSTANT WHATSAPP SUPPORT
                      </span>
                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noreferrer"
                        className="font-heading text-lg font-bold text-white hover:text-[#ff2a3b] transition-colors"
                      >
                        CHAT ON WHATSAPP
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#0a0a0a] p-4 border border-white/5">
                  <Mail className="w-5 h-5 text-[#ff2a3b] shrink-0" />
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider font-heading font-bold block">
                      OFFICIAL EMAIL INQUIRIES
                    </span>
                    <a
                      href="mailto:armour247gym@gmail.com"
                      className="text-sm font-medium text-white hover:text-[#ff2a3b] transition-colors"
                    >
                      contact@armour247gym.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Breakdown */}
            <div className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm">
              <h3 className="font-heading text-2xl font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#ff2a3b]" />
                OPERATING SCHEDULE
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-[#0a0a0a] border border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#ff2a3b] animate-pulse shadow-[0_0_8px_#ff2a3b]" />
                    <span className="font-heading text-base font-bold uppercase text-white">
                      BIOMETRIC KEYCARD MEMBER ACCESS
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#ff2a3b] font-heading uppercase tracking-wider bg-[#ff2a3b]/10 px-2.5 py-1">
                    24 HOURS / 7 DAYS / 365 DAYS
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#0a0a0a] border border-white/5 text-xs text-gray-300">
                  <span>Front Desk Staff &amp; Tours</span>
                  <span className="font-mono text-white">06:00 AM – 11:00 PM Daily</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#0a0a0a] border border-white/5 text-xs text-gray-300">
                  <span>Certified Personal Coaches On Floor</span>
                  <span className="font-mono text-white">06:00 AM – 10:30 PM</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-2 gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#ff2a3b]" />
                  <span>Free Parking</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#ff2a3b]" />
                  <span>24/7 Armed Guard &amp; CCTV</span>
                </div>
              </div>
            </div>

            {/* Google Maps Embed Layout */}
            <div className="bg-[#141414] border border-white/10 rounded-sm overflow-hidden">
              <div className="p-4 bg-[#0e0e0e] border-b border-white/10 flex items-center justify-between">
                <span className="font-heading text-lg font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#ff2a3b]" />
                  LOCATION MAP • AHMEDABAD 382445
                </span>
                <span className="text-[10px] text-gray-400 uppercase">Hathijan Circle</span>
              </div>
              <div className="relative w-full h-[320px] bg-[#0d0d0d] overflow-hidden">
                <iframe
                  title="Armour 24-7 Gym Ahmedabad Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1298.88922210367!2d72.65593224313736!3d22.957085946512475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e888caf7b654d%3A0xf154cf2006f0e347!2sShalin%20Square!5e0!3m2!1sen!2sin!4v1788094321302!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(85%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <LeadForm />
          </div>

        </div>
      </div>
    </div>
  );
}
