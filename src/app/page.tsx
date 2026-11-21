import type { Metadata } from "next";
import { getPublishedImages } from "@/lib/cloudinary-media";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "ARMOUR 24-7 GYM",
  description: "Fitness facility with strength training, imported equipment and 24/7 member access in Hathijan, Ahmedabad.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://armour-gym-pi.vercel.app",
  telephone: "+918160697163",
  image: new URL("/images/dummy-hero.webp", process.env.NEXT_PUBLIC_SITE_URL || "https://armour-gym-pi.vercel.app").toString(),
  hasMap: "https://maps.app.goo.gl/fdHFDqTDaHNvw5Pf6",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C-601, 602 Shalin Square, Hathijan Circle",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382445",
    addressCountry: "IN",
  },
};

import CinematicStory from "@/components/CinematicStory";
import ProgramShowcase from "@/components/ProgramShowcase";
import SpecialtyShowcase from "@/components/SpecialtyShowcase";
import { WhyArmour } from "@/components/HomeSections";
import Hero from "@/components/home/Hero";
import Gallery from "@/components/home/Gallery";
import PlansPreview from "@/components/home/PlansPreview";
import Reviews from "@/components/home/Reviews";
import Bmi from "@/components/home/Bmi";
import MobileActionBar from "@/components/home/MobileActionBar";

// Server component. Only the pieces that need browser state (hero strip, story scroll,
// BMI inputs, mobile action bar) are client components.
//
// Rhythm: dark hero, light facts, dark story/programs/gallery, light plans, dark the rest.
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await getPublishedImages();
  return (
    <div className="bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          ...structuredData,
          image: images.hero.src.startsWith("https://")
            ? images.hero.src
            : new URL(images.hero.src, process.env.NEXT_PUBLIC_SITE_URL || "https://armour-gym-pi.vercel.app").toString(),
        }) }}
      />
      <Hero images={images} />
      <WhyArmour />
      <CinematicStory images={images} />
      <ProgramShowcase images={images} />
      <SpecialtyShowcase images={images} />
      <Gallery images={images} />
      <PlansPreview />
      <Reviews />
      <Bmi />
      <MobileActionBar />
      {/* Keeps the last content clear of the fixed action bar on phones */}
      <div className="h-14 md:hidden" aria-hidden="true" />
    </div>
  );
}
