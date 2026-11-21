import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { getPublishedImages } from "@/lib/cloudinary-media";

export const metadata = {
  title: "Contact & Location | Armour 24-7 Gym Hathijan Circle, Ahmedabad 382445",
  description:
    "Visit Armour 24-7 Gym at C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad 382445. Call +91 81606 97163 for 24/7 membership passes and demo sessions.",
  keywords: [
    "Armour gym address",
    "Armour gym phone number",
    "Gym in Hathijan Circle address",
    "Gym near Hathijan 382445",
    "Gym contact Ahmedabad",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact & Location | Armour 24-7 Gym Hathijan Circle, Ahmedabad",
    description: "C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad. Open 24 Hours / 7 Days.",
    url: "https://armour-gym-pi.vercel.app/contact",
  },
};

export const dynamic = "force-dynamic";

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string | string[]; program?: string | string[] }>;
}) {
  const [params, images] = await Promise.all([searchParams, getPublishedImages()]);
  const initialPlan = typeof params.plan === "string" ? params.plan : undefined;

  return (
    <div className="min-h-screen bg-[#090A0C] pb-24 pt-28 text-white sm:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-20 lg:pb-20">
          <div>
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.23em] text-[#FF858A]">
              <span aria-hidden="true" className="h-px w-10 bg-[#C8010A]" />
              CONNECT WITH ARMOUR
            </p>
            <h1 className="font-oswald text-[clamp(3.65rem,7vw,8rem)] font-bold uppercase leading-[0.9] tracking-tight">
              YOUR NEXT
              <br />
              STEP <span className="text-[#C8010A]">STARTS HERE.</span>
            </h1>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
            Visit our floor in Hathijan Circle, or send your membership enquiry.
            We can help with plans, training and demo session details.
          </p>
        </div>

        <div className="grid items-start gap-12 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20">
          <div className="space-y-10 lg:col-span-5">
            <div className="relative h-64 overflow-hidden bg-[#171717] sm:h-80">
              <Image
                src={images["contact-photo"].src}
                alt={images["contact-photo"].src.startsWith("/images/dummy-") ? "Decorative gym preview image" : "Interior of ARMOUR 24-7 Gym with illuminated branding"}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
                style={{ objectPosition: images["contact-photo"].position }}
              />
            </div>

            <div>
              <h2 className="font-oswald text-3xl font-semibold text-white">Find us</h2>
              <p className="mt-4 flex items-start gap-3 text-base leading-relaxed text-white/70">
                <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-[#FF858A]" />
                <span>C-601, 602 Shalin Square, Hathijan Circle,<br />Ahmedabad, Gujarat 382445, India</span>
              </p>
              <a
                href="https://maps.app.goo.gl/fdHFDqTDaHNvw5Pf6"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 border-b border-[#C8010A] pb-2 text-sm font-semibold text-white hover:text-[#FF858A]"
              >
                Open Google Maps <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>

            <div className="grid gap-5 border-y border-white/10 py-8 text-sm sm:text-base">
              <a href="tel:+918160697163" className="flex items-center gap-3 text-white/75 transition-colors hover:text-white">
                <Phone aria-hidden="true" className="size-5 text-[#FF858A]" /> +91 81606 97163
              </a>
              <a href="mailto:armour247gym@gmail.com" className="flex items-center gap-3 break-all text-white/75 transition-colors hover:text-white">
                <Mail aria-hidden="true" className="size-5 text-[#FF858A]" /> armour247gym@gmail.com
              </a>
              <a
                href="https://wa.me/918160697163"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/75 transition-colors hover:text-white"
              >
                <MessageSquare aria-hidden="true" className="size-5 text-[#FF858A]" /> Chat on WhatsApp
              </a>
            </div>

            <div className="flex items-start gap-3 text-sm text-white/65">
              <Clock3 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#FF858A]" />
              <p>
                Member access schedule: 24/7*<br />
                Front desk: 6:00 am – 10:00 pm.
                <span className="mt-2 block text-xs text-white/45">
                  * Subject to scheduled closures, facility guidelines and management policies. See{" "}
                  <Link href="/terms-conditions" className="underline underline-offset-2">terms</Link>.
                </span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <LeadForm initialPlan={initialPlan} />
          </div>
        </div>
      </div>
    </div>
  );
}
