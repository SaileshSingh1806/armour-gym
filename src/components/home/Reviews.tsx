import { ArrowUpRight, Dumbbell, Clock3, Users, Star } from "lucide-react";
import { Container } from "./ui";

const reviewTopics = [
  {
    Icon: Dumbbell,
    index: "01",
    title: "Equipment & facilities",
    description: "Explore member feedback about the training floor and equipment.",
  },
  {
    Icon: Users,
    index: "02",
    title: "Training experience",
    description: "Read what visitors have shared about their time at ARMOUR.",
  },
  {
    Icon: Clock3,
    index: "03",
    title: "24/7 flexibility",
    description: "See feedback about training around personal routines.",
  },
] as const;

const googleReviews = "https://maps.app.goo.gl/fdHFDqTDaHNvw5Pf6";

/**
 * These are links to independent reviews, NOT invented testimonials or a
 * claimed rating. Verified quote data can replace them when supplied.
 */
export default function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="relative overflow-hidden border-y border-white/10 bg-[#0C0D10] py-24 text-white sm:py-32">
      <Container>
        <div className="mb-12 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#FF858A]">
              THE ARMOUR COMMUNITY
            </p>
            <h2 id="reviews-heading" className="font-oswald text-5xl font-bold uppercase leading-[0.92] tracking-tight sm:text-7xl">
              REAL VOICES. <span className="text-[#C8010A]">REAL REVIEWS.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65">
              Explore genuine visitor experiences on our Google Business listing.
            </p>
          </div>
          <a
            href={googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-3 border-b border-[#C8010A] pb-2 font-oswald text-sm font-bold uppercase tracking-wider text-white transition-colors hover:text-[#FF858A]"
          >
            Read all Google reviews <ArrowUpRight aria-hidden="true" className="size-5" />
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {reviewTopics.map(({ Icon, index, title, description }) => (
            <a
              key={index}
              href={googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[270px] flex-col justify-between overflow-hidden border border-white/15 bg-[#14161A] p-7 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#C8010A]/70 sm:p-8"
              aria-label={`Explore Google reviews about ${title}`}
            >
              <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-[#C8010A]/[0.07] blur-3xl transition-colors group-hover:bg-[#C8010A]/[0.16]" />
              <div className="relative flex items-center justify-between">
                <div className="flex size-14 items-center justify-center border border-[#FF858A]/40 bg-[#C8010A]/10">
                  <Icon aria-hidden="true" className="size-7 text-[#FF858A]" />
                </div>
                <span className="font-oswald text-5xl font-bold text-white/15">{index}</span>
              </div>
              <div className="relative mt-10">
                <h3 className="font-oswald text-2xl font-semibold text-white sm:text-3xl">{title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">{description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#FF858A]">
                  See on Google <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-white/45">
          <Star aria-hidden="true" className="mt-0.5 size-3 shrink-0" />
          Read original member reviews and the latest ratings directly on Google Maps.
        </p>
      </Container>
    </section>
  );
}
