import Link from "next/link";
import { Check, Zap, Sparkles, Shield, HelpCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Membership Plans & Pricing | Armour 24-7 Gym Ahmedabad",
  description: "Official membership pricing for Armour 24-7 Gym in Hathijan Circle, Ahmedabad. Demo Workout, 1 Month, 3 Months, 6 Months, and 12 Months plans.",
};

const pricingPlans = [
  {
    id: "demo",
    name: "DEMO WORKOUT",
    tagline: "SINGLE SESSION EXPERIENCE",
    price: "₹500",
    period: "single session",
    description: "Experience the facility, test out the imported equipment, and feel the high-energy training atmosphere.",
    highlight: false,
    badge: null,
    features: [
      "1-Day full gym floor access",
      "Access to all strength & cardio zones",
      "Calibrated Olympic plates & dumbbells",
      "Locker room & shower access",
      "Front desk tour & assistance",
      "Instant entry upon registration",
    ],
    ctaText: "BOOK DEMO (₹500)",
    ctaLink: "/contact?plan=demo",
  },
  {
    id: "1-month",
    name: "1 MONTH",
    tagline: "FLEXIBLE MONTHLY TRAINING",
    price: "₹3,500",
    period: "1 month",
    description: "Ideal for short-term goals and lifters wanting monthly flexibility with full 24/7 round-the-clock freedom.",
    highlight: false,
    badge: null,
    features: [
      "UNLIMITED 24/7 biometric access *",
      "Full access to Heavy Iron & Dumbbells area",
      "Cardio zone & stamina training machines",
      "Locker room & shower facilities",
      "Free high-speed WiFi & parking",
      "Clean, air-conditioned workout arena",
    ],
    ctaText: "JOIN 1 MONTH",
    ctaLink: "/contact?plan=1-month",
  },
  {
    id: "3-month",
    name: "3 MONTHS",
    tagline: "CONSISTENT HABIT BUILDER",
    price: "₹6,500",
    period: "3 months (₹2,166/mo)",
    description: "Build serious discipline and see measurable physique changes over a solid 90-day training cycle.",
    highlight: false,
    badge: "POPULAR",
    features: [
      "UNLIMITED 24/7 biometric access *",
      "Full access to all training zones",
      "Access to Olympic powerlifting platforms",
      "Locker room & high-pressure showers",
      "Free high-speed WiFi & parking",
      "Continuous progress & workout tracking",
    ],
    ctaText: "JOIN 3 MONTHS",
    ctaLink: "/contact?plan=3-month",
  },
  {
    id: "6-month",
    name: "6 MONTHS",
    tagline: "SERIOUS TRANSFORMATION",
    price: "₹9,000",
    period: "6 months (₹1,500/mo)",
    description: "Our high-value half-yearly membership for dedicated athletes committed to long-term strength and muscle gains.",
    highlight: true,
    badge: "BEST VALUE",
    features: [
      "UNLIMITED 24/7 biometric access *",
      "Complete access to all strength & cardio equipment",
      "Dedicated heavy dumbbell & barbell racks",
      "Locker room & shower facilities",
      "Dedicated vehicle parking & armed security",
      "Great savings compared to monthly plan",
    ],
    ctaText: "JOIN 6 MONTHS",
    ctaLink: "/contact?plan=6-month",
  },
  {
    id: "12-month",
    name: "12 MONTHS",
    tagline: "FULL YEAR WARRIOR PASS",
    price: "₹15,000",
    period: "12 months (₹1,250/mo)",
    description: "Maximum commitment and unbeatable value for athletes who make fitness and bodybuilding their permanent lifestyle.",
    highlight: false,
    badge: "SAVE BIG",
    features: [
      "UNLIMITED 24/7 biometric keycard access *",
      "Full 365 days unrestricted gym floor training",
      "Access to all imported machines & free weights",
      "Permanent locker room access & showers",
      "Free dedicated parking for two-wheelers & cars",
      "Lowest per-month cost at just ₹1,250/mo",
    ],
    ctaText: "JOIN 12 MONTHS",
    ctaLink: "/contact?plan=12-month",
  },
];

const faqs = [
  {
    q: "How does 24/7 access work at Armour Gym Ahmedabad?",
    a: "Once enrolled, members receive secure biometric access to enter the facility 24/7 during active operating periods. 24/7 access is subject to facility rules and management discretion (*Terms & Conditions Apply).",
  },
  {
    q: "Are membership fees refundable?",
    a: "No. All membership fees and dues once paid are strictly non-refundable and non-transferable under any circumstances.",
  },
  {
    q: "Can I freeze or pause my membership if I travel?",
    a: "No. Armour 24-7 Gym does not offer any membership freeze, hold, or pause facility under any circumstances. Memberships run continuously for their purchased tenure.",
  },
  {
    q: "Is Personal Training included in regular membership plans?",
    a: "No. Regular membership plans cover full 24/7 facility, machine, and gym floor access. 1-on-1 Personal Training (PT) packages are available separately under dedicated certified coaches.",
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

      {/* Facility & Dedication Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-[#141414] border border-white/10 p-8 sm:p-12 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#ff2a3b]/5 to-transparent pointer-events-none" />
          
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-[#ff2a3b]/10 border border-[#ff2a3b] flex items-center justify-center shrink-0 text-[#ff2a3b]">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
                ARMOUR 24-7 TRAINING STANDARDS
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-xl">
                Ready to experience Gujarat&apos;s most serious strength training arena? Walk in to our Hathijan Circle facility or book your ₹500 Demo session today.
              </p>
            </div>
          </div>

          <Link
            href="/contact?plan=demo"
            className="shrink-0 px-8 py-3.5 bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-heading text-lg font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,42,59,0.3)]"
          >
            BOOK DEMO WORKOUT
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
