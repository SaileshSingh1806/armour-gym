import Link from "next/link";
import { Check, Zap, Sparkles, Shield, HelpCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Membership Plans | Armour 24-7 Gym Ahmedabad",
  description: "Flexible, transparent membership plans for Armour 24-7 Gym. Choose from Day Pass, Monthly Pro, or Annual Elite VIP memberships.",
};

const pricingPlans = [
  {
    id: "day-pass",
    name: "1-DAY PASS",
    tagline: "FULL 24-HOUR ACCESS",
    price: "₹499",
    period: "single entry",
    description: "Ideal for travelers, drop-ins, and anyone wanting to test the Armour 24-7 experience before committing.",
    highlight: false,
    badge: null,
    features: [
      "24-Hour full facility access",
      "Full access to Heavy Iron & Dumbbells (up to 70kg)",
      "Olympic Powerlifting Platforms & Eleiko Plates",
      "Locker room & high-pressure steam showers",
      "Free high-speed WiFi & hydration station",
      "No long-term commitment",
    ],
    ctaText: "GET DAY PASS",
    ctaLink: "/contact?plan=day-pass",
  },
  {
    id: "monthly-pro",
    name: "PRO WARRIOR",
    tagline: "MOST POPULAR FOR DEDICATED LIFTERS",
    price: "₹2,499",
    period: "per month",
    description: "Our core membership for serious fitness enthusiasts demanding 24/7 round-the-clock training freedom.",
    highlight: true,
    badge: "MOST POPULAR",
    features: [
      "UNLIMITED 24/7/365 biometric keycard access",
      "Access to all 4 training zones & combat cage",
      "All Group HIIT, Boxing & Powerlifting classes",
      "1 Free 1-on-1 personal coaching assessment",
      "InBody 570 body composition scan per month",
      "Free locker access & recovery steam sauna",
      "Exclusive Armour 24-7 member app access",
    ],
    ctaText: "JOIN PRO WARRIOR",
    ctaLink: "/contact?plan=pro-warrior",
  },
  {
    id: "annual-elite",
    name: "ELITE VIP ANNUAL",
    tagline: "MAXIMUM GAINS • BEST VALUE",
    price: "₹21,999",
    period: "per year (₹1,833/mo)",
    description: "For elite athletes who make strength their lifestyle. Includes personal locker, recovery zone, and PT sessions.",
    highlight: false,
    badge: "SAVE 27%",
    features: [
      "All Pro Warrior 24/7 unlimited benefits",
      "5 Free 1-on-1 Personal Training sessions",
      "Unlimited Cold Plunge & Infrared Sauna sessions",
      "Dedicated personalized VIP permanent locker",
      "Monthly InBody 570 scans + nutritional plan",
      "4 Free Guest passes per quarter for friends",
      "Complimentary Armour 24-7 Custom Gym Bag & Shaker",
    ],
    ctaText: "CLAIM ELITE VIP",
    ctaLink: "/contact?plan=elite-vip",
  },
];

const faqs = [
  {
    q: "How does 24/7 access work at Armour Gym Ahmedabad?",
    a: "Once enrolled, you receive a secure biometric RFID keycard and facial scan profile. You can scan in anytime 24 hours a day, 7 days a week, 365 days a year—even on public holidays.",
  },
  {
    q: "Are there any hidden joining or registration fees?",
    a: "Zero hidden charges. All our prices are completely transparent. Taxes and your initial RFID setup are included with all memberships.",
  },
  {
    q: "Can I freeze or pause my membership if I travel?",
    a: "Yes! Monthly and Annual members can pause their membership for up to 30 to 60 days per year with 48-hour advance notice to the front desk.",
  },
  {
    q: "Where exactly is Armour 24-7 Gym located in Ahmedabad?",
    a: "We are located at C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad, Gujarat 382445, equipped with ample dedicated parking for two-wheelers and cars.",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen py-12 md:py-20">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] border border-[#ff2a3b]/40 text-[#ff2a3b] text-xs font-heading font-bold uppercase tracking-widest mb-4">
          <Zap className="w-3.5 h-3.5 fill-[#ff2a3b]" />
          TRANSPARENT MEMBERSHIP TIERS
        </div>
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white">
          INVEST IN YOUR <span className="text-[#ff2a3b]">RAW POWER</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-gray-400 font-body">
          No lock-in traps, no excuses. 24/7 uncompromised strength training facility in Ahmedabad with world-grade Hammer Strength and Eleiko setups.
        </p>
      </div>

      {/* 3 Tier Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between bg-[#141414] rounded-sm transition-all duration-300 p-6 sm:p-8 ${
                plan.highlight
                  ? "border-2 border-[#ff2a3b] shadow-[0_0_35px_rgba(255,42,59,0.25)] -translate-y-2 md:-translate-y-4"
                  : "border border-white/10 hover:border-white/25 hover:-translate-y-1"
              }`}
            >
              {/* Badge if present */}
              {plan.badge && (
                <div
                  className={`absolute -top-3.5 right-6 px-3 py-0.5 text-xs font-heading font-black tracking-wider uppercase ${
                    plan.highlight
                      ? "bg-[#ff2a3b] text-white shadow-md"
                      : "bg-white text-black"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Header */}
                <div className="border-b border-white/10 pb-6">
                  <h2 className="font-heading text-3xl font-bold uppercase tracking-wider text-white">
                    {plan.name}
                  </h2>
                  <p className="text-[11px] font-heading font-semibold uppercase tracking-widest text-[#ff2a3b] mt-0.5">
                    {plan.tagline}
                  </p>
                  
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-heading text-5xl sm:text-6xl font-bold tracking-tight text-white">
                      {plan.price}
                    </span>
                    <span className="text-xs text-gray-400 font-body uppercase">
                      / {plan.period}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="py-6">
                  <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-gray-300 mb-4 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#ff2a3b]" />
                    WHAT&apos;S INCLUDED:
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                        <div className={`p-0.5 rounded-full mt-0.5 shrink-0 ${
                          plan.highlight ? "bg-[#ff2a3b] text-white" : "bg-white/10 text-[#ff2a3b]"
                        }`}>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-white/10 mt-6">
                <Link
                  href={plan.ctaLink}
                  className={`w-full py-3.5 flex items-center justify-center gap-2 font-heading text-lg font-bold uppercase tracking-wider transition-all duration-300 ${
                    plan.highlight
                      ? "bg-[#ff2a3b] hover:bg-white hover:text-black text-white shadow-[0_0_20px_rgba(255,42,59,0.35)]"
                      : "bg-[#0a0a0a] hover:bg-[#ff2a3b] text-white border border-white/20 hover:border-[#ff2a3b]"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-center text-[10px] text-gray-500 mt-2">
                  Instant biometric activation • Ahmedabad 382445
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Value Guarantee Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-[#141414] border border-white/10 p-8 sm:p-12 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#ff2a3b]/5 to-transparent pointer-events-none" />
          
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-[#ff2a3b]/10 border border-[#ff2a3b] flex items-center justify-center shrink-0 text-[#ff2a3b]">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
                ARMOUR 7-DAY ZERO-RISK GUARANTEE
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-xl">
                Try Armour 24-7 for 7 days. If the equipment, environment, or coaching doesn’t blow your expectations away, we will issue a full 100% refund, no questions asked.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="shrink-0 px-8 py-3.5 bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-heading text-lg font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,42,59,0.3)]"
          >
            CLAIM 1-DAY TRIAL
          </Link>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center mb-12">
          <h3 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-[#ff2a3b]" />
            FREQUENTLY ASKED QUESTIONS
          </h3>
          <p className="text-xs text-gray-400 mt-1">Everything you need to know about joining Ahmedabad&apos;s #1 24/7 gym.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#141414] border border-white/10 p-6 rounded-sm">
              <h4 className="font-heading text-xl font-bold uppercase text-white mb-2 flex items-center gap-2">
                <span className="text-[#ff2a3b]">0{index + 1}.</span> {faq.q}
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
