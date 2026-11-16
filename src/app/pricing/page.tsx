import Link from "next/link";
import { Check, ArrowRight, Info, ShieldCheck, Clock, Zap, Star } from "lucide-react";

export const metadata = {
  title: "Membership Plans & Pricing | Armour 24-7 Gym Ahmedabad",
  description: "Official membership pricing for Armour 24-7 Gym in Hathijan Circle, Ahmedabad. Demo session (₹500), 1 Month (₹3,500), 3 Months (₹6,500), 6 Months (₹9,000), and 12 Months (₹15,000).",
};

const corePlans = [
  {
    id: "1-month",
    name: "1 MONTH",
    duration: "Flexible Monthly Pass",
    price: "₹3,500",
    period: "for 1 month",
    equivalent: "₹3,500 / month",
    saveBadge: null,
    highlight: false,
    badge: null,
    description: "Ideal for short-term routines and lifters wanting monthly flexibility with 24/7 access freedom.",
    features: [
      "24/7 biometric keycard access *",
      "Full access to strength & free-weight zones",
      "All cardio machines & stamina line",
      "Secure lockers & changing showers",
      "General floor trainer guidance",
    ],
    ctaText: "Join 1 Month",
    ctaLink: "/contact?plan=1-month",
  },
  {
    id: "3-month",
    name: "3 MONTHS",
    duration: "Quarterly Habit Builder",
    price: "₹6,500",
    period: "for 3 months",
    equivalent: "₹2,166 / month",
    saveBadge: "Save ₹4,000",
    highlight: false,
    badge: "POPULAR",
    description: "A solid 90-day training cycle to establish discipline, build strength, and notice physique changes.",
    features: [
      "24/7 biometric keycard access *",
      "Full access to all strength & machine sectors",
      "Plate-loaded machines & squat stations",
      "Cardio zone & functional floor",
      "Routine form checks from floor trainers",
      "Secure lockers & shower facilities",
    ],
    ctaText: "Join 3 Months",
    ctaLink: "/contact?plan=3-month",
  },
  {
    id: "6-month",
    name: "6 MONTHS",
    duration: "Half-Yearly Commitment",
    price: "₹9,000",
    period: "for 6 months",
    equivalent: "₹1,500 / month",
    saveBadge: "Save ₹12,000",
    highlight: true,
    badge: "BEST VALUE",
    description: "Our highest-value half-yearly membership for dedicated athletes committed to long-term gains.",
    features: [
      "24/7 biometric keycard access *",
      "Complete access to all strength & cardio gear",
      "Heavy dumbbell racks & Olympic squat platforms",
      "Save ₹12,000 compared to monthly renewals",
      "Secure lockers & shower facilities",
      "General floor trainer guidance",
    ],
    ctaText: "Join 6 Months",
    ctaLink: "/contact?plan=6-month",
  },
  {
    id: "12-month",
    name: "12 MONTHS",
    duration: "Full Year Lifestyle Pass",
    price: "₹15,000",
    period: "for 12 months",
    equivalent: "₹1,250 / month",
    saveBadge: "Save ₹27,000",
    highlight: false,
    badge: "LOWEST RATE",
    description: "Lowest monthly rate for athletes who make fitness and bodybuilding their permanent lifestyle.",
    features: [
      "24/7 biometric keycard access *",
      "Year-round unlimited facility entry",
      "Full access to strength, cardio, and turf areas",
      "Save ₹27,000 compared to monthly renewals",
      "Secure lockers & shower facilities",
      "General floor trainer guidance",
    ],
    ctaText: "Join 12 Months",
    ctaLink: "/contact?plan=12-month",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-28 md:pt-36 pb-24 px-4 sm:px-6 lg:px-8 ambient-glow">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="eyebrow text-xs text-[#ff2a3b] font-bold block mb-2 tracking-[0.2em]">
            MEMBERSHIP TIERS • HATHIJAN CIRCLE
          </span>
          <h1 className="text-4xl sm:text-6xl font-oswald font-bold uppercase tracking-tight text-white mb-4">
            Membership <span className="text-[#ff2a3b]">Plans</span>
          </h1>
          <p className="text-xs sm:text-base text-gray-300 font-body leading-relaxed max-w-2xl mx-auto">
            Transparent pricing with round-the-clock biometric facility access, imported plate-loaded machines, and certified floor coaches in Ahmedabad.
          </p>
        </div>

        {/* ============================================================ */}
        {/* DEMO WORKOUT PASS — Prominent Featured Callout Banner        */}
        {/* ============================================================ */}
        <div className="bg-gradient-to-r from-[#171717] via-[#141414] to-[#171717] border border-white/10 rounded-sm p-6 sm:p-7 mb-14 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff2a3b]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4 sm:gap-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-sm bg-[#ff2a3b]/10 border border-[#ff2a3b]/30 flex flex-col items-center justify-center text-[#ff2a3b] shrink-0 font-oswald font-bold">
                <span className="text-xl sm:text-2xl leading-none">₹500</span>
                <span className="text-[9px] uppercase tracking-wider text-gray-400 mt-0.5">Trial</span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-[10px] font-oswald font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-[#ff2a3b] text-white">
                    SINGLE WORKOUT SESSION
                  </span>
                  <span className="text-xs text-gray-400 font-body">No lock-in or membership commitment</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-oswald font-bold uppercase text-white tracking-wide">
                  Try The Armour 24-7 Training Arena
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 font-body max-w-2xl mt-1 leading-relaxed">
                  Experience the imported Hammer Strength machines, calibrated Olympic plates, and high-energy atmosphere for a full day before selecting a plan.
                </p>
              </div>
            </div>

            <Link
              href="/contact?plan=demo"
              className="bg-white hover:bg-[#ff2a3b] text-black hover:text-white font-oswald font-bold uppercase text-xs sm:text-sm px-7 py-3.5 rounded-sm transition-colors shrink-0 tracking-wider inline-flex items-center gap-2 shadow-lg"
            >
              <span>Book Demo Session (₹500)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ============================================================ */}
        {/* CORE MEMBERSHIP PLANS — Spacious 4-Column Grid on Laptops   */}
        {/* ============================================================ */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-3">
            <h2 className="text-xl sm:text-2xl font-oswald font-bold uppercase text-white tracking-wide">
              Recurring Membership Passes
            </h2>
            <span className="text-xs text-gray-400 font-body hidden sm:inline-block">
              Includes 24/7 biometric keycard access
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-stretch">
            {corePlans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-sm p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                  plan.highlight
                    ? "gym-card-featured relative scale-[1.02] z-10"
                    : "gym-card hover:border-white/20"
                }`}
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between mb-3 min-h-[24px]">
                    {plan.badge ? (
                      <span
                        className={`text-[10px] font-oswald font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-sm ${
                          plan.highlight
                            ? "bg-[#ff2a3b] text-white shadow-sm"
                            : "bg-white/10 text-gray-200"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    ) : <span />}

                    {plan.saveBadge && (
                      <span className="text-[11px] font-oswald font-bold uppercase tracking-wider text-emerald-400">
                        {plan.saveBadge}
                      </span>
                    )}
                  </div>

                  {/* Plan Name & Duration */}
                  <h3 className="font-oswald font-bold uppercase text-xl sm:text-2xl text-white tracking-wide">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-body mb-4">
                    {plan.duration}
                  </p>

                  {/* Pricing Display */}
                  <div className="border-y border-white/10 py-4 my-4 bg-black/20 -mx-6 sm:-mx-7 px-6 sm:px-7">
                    <div className="flex items-baseline gap-1">
                      <span className="font-oswald text-4xl sm:text-5xl font-bold text-white leading-none">
                        {plan.price}
                      </span>
                      <span className="text-xs text-gray-400 font-body">
                        {plan.period}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-[#ff2a3b] font-body mt-1">
                      {plan.equivalent}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-300 leading-relaxed font-body mb-5">
                    {plan.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 text-xs text-gray-300 font-body mb-8">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#ff2a3b] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="pt-2">
                  <Link
                    href={plan.ctaLink}
                    className={`w-full py-3 px-4 text-xs font-oswald font-bold uppercase tracking-wider rounded-sm text-center block transition-colors ${
                      plan.highlight
                        ? "bg-[#ff2a3b] hover:bg-white hover:text-black text-white shadow-lg"
                        : "bg-white/10 hover:bg-[#ff2a3b] text-white"
                    }`}
                  >
                    {plan.ctaText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* MEMBERSHIP POLICIES & TRANSPARENCY CARD                      */}
        {/* ============================================================ */}
        <div className="bg-[#121212] border border-white/10 p-6 sm:p-8 rounded-sm max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-white font-oswald uppercase font-bold text-base">
            <Info className="w-5 h-5 text-[#ff2a3b]" />
            <span>Important Membership Terms &amp; Policies</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-gray-300 leading-relaxed font-body">
            <div className="space-y-1">
              <strong className="text-white block font-semibold">Strict Non-Refundable Policy:</strong>
              <p>
                All membership fees and single demo session charges are strictly non-refundable and non-transferable once registered and processed.
              </p>
            </div>
            <div className="space-y-1">
              <strong className="text-white block font-semibold">Zero Freeze / Pause Policy:</strong>
              <p>
                Memberships run continuously from registration date. Plans cannot be put on hold, frozen, or extended due to personal reasons.
              </p>
            </div>
            <div className="space-y-1">
              <strong className="text-white block font-semibold">* 24/7 Biometric Access:</strong>
              <p>
                Round-the-clock access is subject to facility guidelines, management discretion, scheduled sanitization, and safety audits.
              </p>
            </div>
            <div className="space-y-1">
              <strong className="text-white block font-semibold">1-on-1 Personal Training:</strong>
              <p>
                Dedicated 1-on-1 personal training packages are separate from standard general floor access. Enquire at the desk for coach packages.
              </p>
            </div>
          </div>

          <div className="pt-3 text-[11px] text-gray-500 font-body border-t border-white/5">
            For corporate enrollments or queries, contact our front desk at{" "}
            <a href="tel:+918160697163" className="text-[#ff2a3b] underline font-semibold">+91 81606 97163</a>{" "}
            or email <a href="mailto:armour247gym@gmail.com" className="text-[#ff2a3b] underline">armour247gym@gmail.com</a>.
          </div>
        </div>

      </div>
    </div>
  );
}
