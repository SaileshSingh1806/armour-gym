import Link from "next/link";
import PreLaunchOffer from "@/components/PreLaunchOffer";
import {
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  Sparkles,
  HelpCircle,
  Award,
} from "lucide-react";

export const metadata = {
  title: "Pre-Launch Founder Pass (@ ₹9,999) | Armour 24-7 Gym Ahmedabad",
  description: "Exclusive Pre-Launch Founder Membership for Armour 24-7 Gym Ahmedabad. 1 Full Year 24/7 Biometric Access for just ₹9,999 (Regular ₹15,000). Limited to first 100 members.",
  keywords: [
    "Armour Gym Pre Launch Offer",
    "Gym Membership Offer Ahmedabad",
    "24/7 Gym Hathijan Circle",
    "Armour 24-7 Gym Founder Pass",
  ],
};

const founderFaqs = [
  {
    q: "What is included in the ₹9,999 Pre-Launch Founder Pass?",
    a: "The Founder Pass grants 365 days of unrestricted 24/7 biometric gym entry, a complimentary Armour Gym Welcome Kit (custom bag + shaker + towel), 2 free 1-on-1 personal training assessment sessions, and unlimited Zumba & Ladies section access.",
  },
  {
    q: "When does my 1-Year (365 days) membership start?",
    a: "Your 365-day validity begins on the official Grand Opening date of our Hathijan Circle facility or on the day of your first physical check-in—meaning you lose zero days prior to opening.",
  },
  {
    q: "What is the 100% Pre-Launch Money-Back Guarantee?",
    a: "If you purchase the Pre-Launch pass and decide to cancel for any reason prior to the gym opening, we issue a 100% full refund with zero cancellation fees within 5 to 7 business days directly to your original payment source.",
  },
  {
    q: "Which payment methods are accepted?",
    a: "We accept all major secure payment modes including UPI (Google Pay, PhonePe, Paytm, BHIM), Credit Cards, Debit Cards, and Netbanking.",
  },
];

export default function PreLaunchOfferPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Header Banner */}
      <div className="pt-12 pb-6 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#ff2a3b]/10 border border-[#ff2a3b]/40 rounded-full text-[#ff2a3b] text-xs font-oswald font-bold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(255,42,59,0.2)]">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          OFFICIAL PRE-LAUNCH FOUNDER CAMPAIGN
        </div>
        <h1 className="text-4xl sm:text-6xl font-oswald font-bold uppercase tracking-tight text-white">
          EXCLUSIVE <span className="text-[#ff2a3b]">PRE-LAUNCH OFFER</span>
        </h1>
        <p className="mt-3 text-sm sm:text-base text-gray-300 font-body max-w-2xl mx-auto">
          Secure your 1-Year All-Inclusive Founder Membership for just ₹9,999 (Regular ₹15,000) before standard rates apply at Hathijan Circle, Ahmedabad.
        </p>
      </div>

      {/* Main Interactive Offer Component */}
      <PreLaunchOffer />

      {/* Trust & Guarantee Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#141414] border border-white/10 p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 bg-[#ff2a3b]/10 text-[#ff2a3b] border border-[#ff2a3b]/30 rounded-xl flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-oswald text-lg font-bold uppercase text-white">
                  100% PRE-LAUNCH REFUND GUARANTEE
                </h3>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Cancel anytime before grand opening for a full refund. Zero questions asked.
                </p>
              </div>
            </div>

            <div className="bg-[#141414] border border-white/10 p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 bg-[#ff2a3b]/10 text-[#ff2a3b] border border-[#ff2a3b]/30 rounded-xl flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-oswald text-lg font-bold uppercase text-white">
                  OFFICIAL FOUNDER PRIVILEGES
                </h3>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Includes free welcome starter kit, 2 free PT sessions, and priority biometric badge.
                </p>
              </div>
            </div>

            <div className="bg-[#141414] border border-white/10 p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 bg-[#ff2a3b]/10 text-[#ff2a3b] border border-[#ff2a3b]/30 rounded-xl flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-oswald text-lg font-bold uppercase text-white">
                  INSTANT DIGITAL PASS
                </h3>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Instant order confirmation &amp; digital invoice sent to your WhatsApp &amp; Email.
                </p>
              </div>
            </div>
          </div>

          {/* Offer FAQs */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-oswald font-bold uppercase text-white text-center mb-8">
              PRE-LAUNCH OFFER <span className="text-[#ff2a3b]">FAQS</span>
            </h2>
            <div className="space-y-4">
              {founderFaqs.map((faq, idx) => (
                <div key={idx} className="bg-[#141414] border border-white/10 p-5 rounded-xl">
                  <h4 className="font-oswald font-bold text-base text-white mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#ff2a3b] shrink-0" />
                    {faq.q}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Policy Direct Links Callout */}
          <div className="mt-12 text-center text-xs text-gray-400 border-t border-white/10 pt-8 max-w-2xl mx-auto">
            <p className="mb-3">
              Need assistance before purchasing? Contact our Hathijan Circle desk at{" "}
              <a href="tel:+919714840999" className="text-white font-bold hover:underline">
                +91 97148 40999
              </a>{" "}
              or email{" "}
              <a href="mailto:armour247gym@gmail.com" className="text-[#ff2a3b] hover:underline">
                armour247gym@gmail.com
              </a>.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-gray-500">
              <Link href="/terms-conditions" className="hover:text-white transition-colors">
                Terms &amp; Conditions
              </Link>
              <span>•</span>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/refund-policy" className="hover:text-white transition-colors">
                Refund &amp; Cancellation Policy
              </Link>
              <span>•</span>
              <Link href="/shipping-policy" className="hover:text-white transition-colors">
                Shipping &amp; Delivery Policy
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
