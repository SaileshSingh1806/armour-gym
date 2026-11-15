import Link from "next/link";
import { Check, ArrowRight, Info, ShieldCheck, Clock } from "lucide-react";

export const metadata = {
  title: "Membership Plans & Pricing | Armour 24-7 Gym Ahmedabad",
  description: "Official membership pricing for Armour 24-7 Gym in Hathijan Circle, Ahmedabad. Demo session (₹500), 1 Month, 3 Months, 6 Months, and 12 Months plans.",
};

const pricingPlans = [
  {
    id: "demo",
    name: "DEMO WORKOUT",
    duration: "Single Session",
    price: "₹500",
    period: "one-time pass",
    equivalent: "Trial Workout",
    description: "Try out the imported machines, free weights, and gym floor atmosphere before choosing a longer plan.",
    highlight: false,
    badge: null,
    features: [
      "1-Day full gym floor access",
      "Access to all strength & cardio zones",
      "Use of calibrated plates & dumbbells",
      "Locker room and changing area access",
      "Floor coach assistance during your session",
    ],
    ctaText: "Book Demo (₹500)",
    ctaLink: "/contact?plan=demo",
  },
  {
    id: "1-month",
    name: "1 MONTH",
    duration: "Monthly Pass",
    price: "₹3,500",
    period: "for 1 month",
    equivalent: "₹3,500 / month",
    description: "Short-term flexibility with round-the-clock facility access whenever your schedule allows.",
    highlight: false,
    badge: null,
    features: [
      "24/7 biometric keycard access *",
      "Full access to strength and free-weight zones",
      "Cardio machines and stamina conditioning",
      "Locker rooms and showers",
      "General floor trainer guidance",
    ],
    ctaText: "Join 1 Month",
    ctaLink: "/contact?plan=1-month",
  },
  {
    id: "3-month",
    name: "3 MONTHS",
    duration: "Quarterly Pass",
    price: "₹6,500",
    period: "for 3 months",
    equivalent: "₹2,166 / month",
    description: "A solid 90-day training cycle to establish consistency, build strength, and notice measurable progress.",
    highlight: false,
    badge: "POPULAR",
    features: [
      "24/7 biometric keycard access *",
      "Full access to all machines and barbell platforms",
      "Cardio and functional training floor",
      "Locker rooms and showers",
      "Routine form checks from floor trainers",
    ],
    ctaText: "Join 3 Months",
    ctaLink: "/contact?plan=3-month",
  },
  {
    id: "6-month",
    name: "6 MONTHS",
    duration: "Half-Yearly Pass",
    price: "₹9,000",
    period: "for 6 months",
    equivalent: "₹1,500 / month",
    description: "Our high-value half-yearly membership for dedicated athletes committed to long-term strength and muscle gains.",
    highlight: true,
    badge: "BEST VALUE",
    features: [
      "24/7 biometric keycard access *",
      "Complete access to all strength & cardio equipment",
      "Heavy dumbbell racks and Olympic squat stations",
      "Locker rooms and showers",
      "Save ₹12,000 compared to monthly renewals",
      "General floor trainer guidance",
    ],
    ctaText: "Join 6 Months",
    ctaLink: "/contact?plan=6-month",
  },
  {
    id: "12-month",
    name: "12 MONTHS",
    duration: "Annual Pass",
    price: "₹15,000",
    period: "for 12 months",
    equivalent: "₹1,250 / month",
    description: "Lowest monthly rate for lifters who make year-round fitness and training part of their everyday routine.",
    highlight: false,
    badge: "LOWEST MONTHLY RATE",
    features: [
      "24/7 biometric keycard access *",
      "Year-round unlimited facility entry",
      "Full access to strength, cardio, and turf areas",
      "Locker rooms and showers",
      "Save ₹27,000 compared to monthly renewals",
      "General floor trainer guidance",
    ],
    ctaText: "Join 12 Months",
    ctaLink: "/contact?plan=12-month",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-28 md:pt-36 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-oswald uppercase tracking-widest text-[#ff2a3b] font-bold block mb-2">
            Clear &amp; Transparent Rates
          </span>
          <h1 className="text-4xl sm:text-6xl font-oswald font-bold uppercase tracking-tight text-white mb-4">
            Membership <span className="text-[#ff2a3b]">Plans</span>
          </h1>
          <p className="text-xs sm:text-base text-gray-400 font-body leading-relaxed">
            Choose the duration that matches your training routine. All memberships include round-the-clock biometric facility access and full floor equipment privileges in Hathijan Circle, Ahmedabad.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-14 items-stretch">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-[#141414] rounded-sm p-5 sm:p-6 flex flex-col justify-between transition-colors ${
                plan.highlight
                  ? "border-2 border-[#ff2a3b] relative"
                  : "border border-white/10 hover:border-white/25"
              }`}
            >
              <div>
                {/* Badge if present */}
                {plan.badge && (
                  <div className="mb-3">
                    <span
                      className={`text-[10px] font-oswald font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm ${
                        plan.highlight
                          ? "bg-[#ff2a3b] text-white"
                          : "bg-white/10 text-gray-200"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h3 className="font-oswald font-bold uppercase text-lg text-white">
                  {plan.name}
                </h3>
                <p className="text-[11px] text-gray-400 font-body mb-3">
                  {plan.duration}
                </p>

                {/* Price Display */}
                <div className="border-y border-white/10 py-3 my-3">
                  <div className="font-oswald text-3xl sm:text-4xl font-bold text-white leading-none">
                    {plan.price}
                  </div>
                  <span className="text-[10px] text-gray-400 font-body block mt-1">
                    {plan.period}
                  </span>
                  <span className="text-[11px] text-[#ff2a3b] font-semibold font-body block mt-0.5">
                    {plan.equivalent}
                  </span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed font-body mb-4">
                  {plan.description}
                </p>

                {/* Feature Inclusions */}
                <ul className="space-y-2 text-xs text-gray-300 font-body mb-6">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#ff2a3b] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  href={plan.ctaLink}
                  className={`w-full py-2.5 px-3 text-xs font-oswald font-bold uppercase tracking-wider rounded-sm text-center block transition-colors ${
                    plan.highlight
                      ? "bg-[#ff2a3b] hover:bg-white hover:text-black text-white"
                      : "bg-white/10 hover:bg-[#ff2a3b] text-white"
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Policy & Inclusions Information Box */}
        <div className="bg-[#121212] border border-white/10 p-6 sm:p-8 rounded-sm max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-white font-oswald uppercase font-bold text-base">
            <Info className="w-5 h-5 text-[#ff2a3b]" />
            <span>Important Membership Policies &amp; Terms</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-300 leading-relaxed font-body">
            <div className="space-y-1">
              <strong className="text-white block font-semibold">Non-Refundable Policy:</strong>
              <p>
                All membership fees and single demo charges are strictly non-refundable and non-transferable once registered and processed.
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
              <strong className="text-white block font-semibold">Personal Training:</strong>
              <p>
                Dedicated 1-on-1 personal coaching is separate from standard general floor access. Enquire at the desk for coach packages.
              </p>
            </div>
          </div>

          <div className="pt-2 text-[11px] text-gray-500 font-body border-t border-white/5">
            For questions about corporate packages or group admissions, speak with our desk at <a href="tel:+918160697163" className="text-[#ff2a3b] underline">+91 81606 97163</a> or email <a href="mailto:armour247gym@gmail.com" className="text-[#ff2a3b] underline">armour247gym@gmail.com</a>.
          </div>
        </div>

      </div>
    </div>
  );
}
