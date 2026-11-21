import { Clock3, Dumbbell, Users } from "lucide-react";
import { Container } from "@/components/home/ui";

const benefits = [
  {
    Icon: Clock3,
    title: "Open when you are",
    detail: "Flexible 24/7 member access with biometric entry.",
  },
  {
    Icon: Dumbbell,
    title: "Imported equipment",
    detail: "Premium imported machines for strength and cardio.",
  },
  {
    Icon: Users,
    title: "Real guidance",
    detail: "Certified coaches on the floor, for every level of training.",
  },
] as const;

/** Light band directly under the hero: the three reasons people join. */
export function WhyArmour() {
  return (
    <section aria-labelledby="why-armour-heading" className="bg-[#e7e8e6] py-20 text-[#0a0a0a] md:py-24">
      <Container>
        <h2
          id="why-armour-heading"
          className="max-w-3xl font-oswald text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
        >
          Built for your progress
        </h2>

        <ul className="mt-12 grid border-t border-black/20 md:grid-cols-3">
          {benefits.map(({ Icon, title, detail }) => (
            <li
              key={title}
              className="flex items-start gap-4 border-b border-black/20 py-8 md:border-b-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
            >
              <Icon aria-hidden="true" className="mt-1 size-7 shrink-0 text-[#C8010A]" />
              <div>
                <h3 className="font-oswald text-2xl font-semibold leading-tight tracking-tight">
                  {title}
                </h3>
                <p className="mt-2 max-w-[34ch] font-body text-base leading-relaxed text-[#41454a]">
                  {detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
