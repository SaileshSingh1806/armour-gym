import Image from "next/image";
import Link from "next/link";
import { getPublishedImages } from "@/lib/cloudinary-media";
import { ArrowUpRight, Clock3, Dumbbell, MapPin, Users } from "lucide-react";

export const metadata = {
  title: "About Armour 24-7 Gym | Premier Fitness Facility in Hathijan, Ahmedabad",
  description:
    "Learn about Armour 24-7 Gym in Hathijan Circle, Ahmedabad. Features imported heavy-duty strength equipment, Olympic lifting platforms, certified floor coaches & 24/7 access.",
  keywords: [
    "About Armour Gym",
    "Armour gym story",
    "Best gym in Hathijan Circle",
    "Top gym in Ahmedabad",
    "24/7 fitness center Ahmedabad",
    "Gym trainers in Hathijan",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Armour 24-7 Gym | Hathijan Circle, Ahmedabad",
    description: "Premier 24-hour training floor with imported machines, certified coaches, and round-the-clock access.",
    url: "https://armour247gym.com/about",
  },
};

const strengths = [
  {
    Icon: Clock3,
    title: "Train on your schedule",
    detail: "24/7 member access, subject to facility policies and scheduled closures.",
  },
  {
    Icon: Dumbbell,
    title: "Imported equipment",
    detail: "A training floor built around strength, free weights and cardio.",
  },
  {
    Icon: Users,
    title: "Training guidance",
    detail: "Support with equipment and routines, with personal training enquiries welcome.",
  },
] as const;

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  const images = await getPublishedImages();
  return (
    <div className="min-h-screen bg-[#090A0C] pb-20 pt-28 text-white sm:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20 lg:pb-24">
          <div>
            <span className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.23em] text-[#FF858A]">
              <span aria-hidden="true" className="h-px w-10 bg-[#C8010A]" />
              OUR STORY
            </span>
            <h1 className="font-oswald text-[clamp(3.75rem,7.5vw,8.5rem)] font-bold uppercase leading-[0.9] tracking-tight">
              MORE THAN
              <br />
              A GYM.
              <br />
              <span className="text-[#C8010A]">A MOVEMENT.</span>
            </h1>
          </div>
          <div>
            <p className="max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
              ARMOUR 24-7 is a place to train with purpose. From your first workout
              to your next personal best, the floor is built for consistency,
              strength and progress.
            </p>
            <Link
              href="/#gallery"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#C8010A] pb-3 font-oswald text-sm font-bold uppercase tracking-wider text-white transition-colors hover:text-[#FF858A]"
            >
              Explore our gym floor <ArrowUpRight aria-hidden="true" className="size-5" />
            </Link>
          </div>
        </div>

        <div className="grid gap-3 py-8 sm:grid-cols-12 sm:gap-4 sm:py-12">
          <div className="relative h-80 overflow-hidden sm:col-span-7 sm:h-[530px]">
            <Image
              src={images["about-hero"].src}
              alt={images["about-hero"].src.startsWith("/images/dummy-") ? "Decorative gym image" : "ARMOUR 24-7 Gym floor beneath the illuminated ARMOUR sign"}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 58vw"
              className="object-cover"
              style={{ objectPosition: images["about-hero"].position }}
            />
          </div>
          <div className="relative h-80 overflow-hidden sm:col-span-5 sm:h-[530px]">
            <Image
              src={images["about-side"].src}
              alt={images["about-side"].src.startsWith("/images/dummy-") ? "Decorative fitness equipment photo" : "Training machines and free weights inside ARMOUR 24-7 Gym"}
              fill
              sizes="(max-width: 640px) 100vw, 42vw"
              className="object-cover"
              style={{ objectPosition: images["about-side"].position }}
            />
          </div>
        </div>

        <section aria-labelledby="why-join-heading" className="py-12 sm:py-20">
          <h2 id="why-join-heading" className="font-oswald text-4xl font-semibold text-white sm:text-6xl">
            Built around your goals.
          </h2>
          <div className="mt-10 grid border-t border-white/15 md:grid-cols-3">
            {strengths.map(({ Icon, title, detail }) => (
              <article key={title} className="border-b border-white/15 py-8 md:border-b-0 md:px-7 md:first:pl-0">
                <Icon aria-hidden="true" className="mb-5 size-7 text-[#FF858A]" />
                <h3 className="font-oswald text-2xl font-semibold text-white">{title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65 sm:text-base">
                  {detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid items-center gap-10 border-y border-white/10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="relative h-[350px] overflow-hidden sm:h-[460px]">
            <Image
              src={images["about-bottom"].src}
              alt={images["about-bottom"].src.startsWith("/images/dummy-") ? "Decorative strength training image" : "ARMOUR 24-7 dumbbell and cable machine area"}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: images["about-bottom"].position }}
            />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#FF858A]">COME SEE FOR YOURSELF</p>
            <h2 className="mt-4 font-oswald text-5xl font-semibold uppercase leading-none sm:text-6xl">
              YOUR NEXT REP STARTS HERE.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65">
              Visit us at Shalin Square, Hathijan Circle, Ahmedabad.
              See the equipment, ask about training and choose what works for you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center gap-3 bg-[#C8010A] px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-black"
              >
                Contact the team <ArrowUpRight aria-hidden="true" className="size-5" />
              </Link>
              <a
                href="https://maps.app.goo.gl/fdHFDqTDaHNvw5Pf6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <MapPin aria-hidden="true" className="size-4" /> Directions
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
