"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Container } from "./ui";

const faqs = [
  {
    question: "Which is the best 24-hour gym in Hathijan Circle, Ahmedabad?",
    answer:
      "Armour 24-7 Gym at Shalin Square, Hathijan Circle is widely recognized as the premier 24-hour gym in the area. It features round-the-clock biometric keycard access, imported plate-loaded Hammer Strength machinery, Olympic barbell platforms, high-capacity climate control, certified floor coaches, and dedicated studio zones for Zumba, Yoga, and HYROX.",
  },
  {
    question: "What are the membership charges at Armour 24-7 Gym?",
    answer:
      "Armour 24-7 Gym offers transparent, competitive rates: a 1-Day Demo Workout Pass for ₹500 (no commitment), 1 Month for ₹3,500, 3 Months for ₹6,500, 6 Months for ₹9,000 (Best Value), and a 12-Month Annual Pass for ₹15,000 (just ₹1,250/month). All recurring passes include full 24/7 biometric facility access.",
  },
  {
    question: "Where is Armour 24-7 Gym located in Ahmedabad?",
    answer:
      "Armour 24-7 Gym is centrally located at C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad, Gujarat 382445. It is easily accessible from Hathijan, Vatva, Ramol, Vinzol, and the SP Ring Road.",
  },
  {
    question: "Are there certified personal trainers and floor coaches available?",
    answer:
      "Yes. Certified floor trainers are on the gym floor during peak hours (06:00 AM – 10:00 PM) to assist with equipment operation, posture correction, and exercise routines. In addition, 1-on-1 personal training packages with customized workout splits and nutrition tracking are available.",
  },
  {
    question: "Does Armour 24-7 Gym offer a Ladies Fitness Program?",
    answer:
      "Yes. Armour Gym provides a dedicated, respectful environment for women of all fitness levels. We offer female trainer availability, specialized weight-loss and toning circuits, core conditioning, secure lockers, and private changing areas.",
  },
  {
    question: "Can I try the gym before committing to a long-term plan?",
    answer:
      "Absolutely. You can book a 1-Day Full Facility Demo Session for ₹500 to test the imported machines, free weights, and gym atmosphere before choosing a longer-term membership.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx((current) => (current === idx ? null : idx));
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="border-t border-white/10 bg-[#0e0e10] py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <span className="font-oswald text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#FF858A] block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2
              id="faq-heading"
              className="font-oswald text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white"
            >
              Everything You Need To Know About <span className="text-[#C8010A]">Armour Gym</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-white/70 max-w-2xl mx-auto font-body">
              Got questions about our 24/7 access, imported machines, or membership plans in Hathijan, Ahmedabad? We have answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`border transition-colors rounded-sm overflow-hidden ${
                    isOpen ? "border-[#C8010A] bg-[#151619]" : "border-white/10 bg-[#121316] hover:border-white/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors"
                  >
                    <span className="font-oswald text-lg sm:text-xl font-bold uppercase tracking-wide text-white pr-4">
                      {faq.question}
                    </span>
                    <span className={`shrink-0 flex items-center justify-center size-8 rounded-full transition-transform duration-200 ${
                      isOpen ? "bg-[#C8010A] text-white rotate-180" : "bg-white/10 text-white/70"
                    }`}>
                      <ChevronDown className="size-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-sm sm:text-base text-gray-200 leading-relaxed font-body border-t border-white/5 pt-4">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center border-t border-white/10 pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70 font-body">
            <span>Still have questions?</span>
            <a
              href="tel:+918160697163"
              className="inline-flex items-center gap-2 font-oswald text-base font-bold uppercase tracking-wider text-[#FF858A] hover:text-white transition-colors"
            >
              <Phone className="size-4" />
              <span>Call Front Desk: +91 81606 97163</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
