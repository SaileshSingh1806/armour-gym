import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink, Container } from "./ui";

// Prices mirror /pricing — keep the two in sync.
const plans = [
  { id: "1-month", name: "1 month", note: "Flexible monthly pass", price: "₹3,500", perMonth: "₹3,500", save: null, tag: null, featured: false },
  { id: "3-month", name: "3 months", note: "A full 90-day training cycle", price: "₹6,500", perMonth: "₹2,166", save: "Save ₹4,000", tag: "Popular", featured: false },
  { id: "6-month", name: "6 months", note: "For long-term gains", price: "₹9,000", perMonth: "₹1,500", save: "Save ₹12,000", tag: "Best value", featured: true },
  { id: "12-month", name: "12 months", note: "The lowest monthly rate", price: "₹15,000", perMonth: "₹1,250", save: "Save ₹27,000", tag: null, featured: false },
];

export default function PlansPreview() {
  return (
    <section id="memberships" className="bg-[#e7e8e6] py-20 text-[#0a0a0a] md:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#C8010A]">YOUR JOURNEY. YOUR PLAN.</p>
            <h2 className="font-oswald text-5xl font-bold uppercase leading-[0.94] tracking-tight text-[#0A0A0A] sm:text-6xl">
              CHOOSE YOUR <span className="text-[#C8010A]">MEMBERSHIP.</span>
            </h2>
            <p className="mt-5 text-sm text-[#41454a] sm:text-base">Every recurring pass includes 24/7 biometric access.*</p>
          </div>
          <ButtonLink href="/pricing" variant="outline-ink" arrow className="self-start md:self-auto">
            Compare all plans
          </ButtonLink>
        </div>

        <ul className="mt-12 space-y-3">
          {plans.map((plan) => (
            <li key={plan.id}>
              <Link
                href={`/contact?plan=${plan.id}`}
                aria-label={`Join the ${plan.name} pass for ${plan.price}`}
                className={`group grid grid-cols-2 items-center gap-x-4 gap-y-3  px-5 py-5 transition-colors md:grid-cols-[1.4fr_1fr_1fr_auto] md:px-7 ${
                  plan.featured
                    ? "bg-[#0a0a0a] text-white"
                    : "border border-black/15 hover:border-black/40 hover:bg-white/60"
                }`}
              >
                <div className="col-span-2 md:col-span-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-oswald text-2xl font-semibold leading-none tracking-tight sm:text-3xl">
                      {plan.name}
                    </span>
                    {plan.tag && (
                      <span
                        className={`rounded-full px-3 py-1 font-body text-xs font-semibold ${
                          plan.featured ? "bg-[#C8010A] text-white" : "bg-black/10 text-[#0a0a0a]"
                        }`}
                      >
                        {plan.tag}
                      </span>
                    )}
                  </div>
                  <p className={`mt-1.5 font-body text-sm ${plan.featured ? "text-gray-300" : "text-[#41454a]"}`}>
                    {plan.note}
                  </p>
                </div>

                <div>
                  <p className="font-oswald text-3xl font-semibold leading-none tracking-tight sm:text-4xl">
                    {plan.price}
                  </p>
                </div>

                <div className="text-right md:text-left">
                  {plan.save ? (
                    <>
                      <p className="font-body text-sm font-semibold">{plan.perMonth} per month</p>
                      <p className={`font-body text-xs ${plan.featured ? "text-gray-300" : "text-[#41454a]"}`}>
                        {plan.save} vs monthly renewals
                      </p>
                    </>
                  ) : null}
                </div>

                <span
                  className={`col-span-2 inline-flex items-center justify-between gap-2 font-body text-sm font-semibold md:col-span-1 md:justify-end ${
                    plan.featured ? "text-white" : "text-[#C8010A]"
                  }`}
                >
                  Join
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-4  border border-dashed border-black/30 px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-7">
          <p className="max-w-[60ch] font-body text-base text-[#0a0a0a] [text-wrap:balance]">
            <strong className="font-semibold">Not ready to commit?</strong> Try one full workout
            session for ₹500, with no lock-in.
          </p>
          <ButtonLink href="/contact?plan=demo" variant="outline-ink">
            Book a demo session
          </ButtonLink>
        </div>

        <p className="mt-8 max-w-[80ch] font-body text-xs leading-relaxed text-[#575c61]">
          * Round-the-clock access is subject to facility guidelines, management discretion,
          scheduled sanitization and safety audits. Fees are non-refundable and plans cannot be
          frozen or paused. Full terms are on the{" "}
          <Link href="/pricing" className="underline hover:text-[#0a0a0a]">
            pricing page
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
