import type { Metadata } from "next";
import { getPublishedImages } from "@/lib/cloudinary-media";

export const metadata: Metadata = {
  title: "Armour 24-7 Gym | Best 24-Hour Gym in Hathijan Circle, Ahmedabad",
  description:
    "Looking for the best gym in Hathijan, Ahmedabad? Armour 24-7 Gym offers imported strength machines, powerlifting platforms, cardio lines, certified coaches & 24/7 biometric access.",
  alternates: { canonical: "/" },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://armour-gym-pi.vercel.app";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  "@id": `${siteUrl}/#gym`,
  name: "Armour 24-7 Gym",
  alternateName: [
    "Armour Gym",
    "Armour 24/7 Gym",
    "Armour Gym Hathijan",
    "Armour Gym Ahmedabad",
    "Best Gym in Hathijan",
    "Best Gym in Ahmedabad",
  ],
  description:
    "Armour 24-7 Gym is premier 24-hour fitness center & strength gym in Hathijan Circle, Ahmedabad. Features imported Hammer Strength equipment, Olympic lifting platforms, cardio zones, certified trainers & ladies fitness with round-the-clock biometric access.",
  url: siteUrl,
  telephone: "+918160697163",
  email: "armour247gym@gmail.com",
  hasMap: "https://maps.app.goo.gl/fdHFDqTDaHNvw5Pf6",
  priceRange: "₹₹ (₹500 - ₹15,000)",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Net Banking",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C-601, 602 Shalin Square, Hathijan Circle",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382445",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.9515,
    longitude: 72.645,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "128",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "24/7 Biometric Access", value: true },
    { "@type": "LocationFeatureSpecification", name: "Imported Strength Machines", value: true },
    { "@type": "LocationFeatureSpecification", name: "Olympic Squat & Deadlift Stations", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air-Conditioned Gym Floor", value: true },
    { "@type": "LocationFeatureSpecification", name: "Certified Personal Trainers", value: true },
    { "@type": "LocationFeatureSpecification", name: "Lockers and Changing Showers", value: true },
    { "@type": "LocationFeatureSpecification", name: "Ladies Fitness Program", value: true },
    { "@type": "LocationFeatureSpecification", name: "Zumba and Yoga Studios", value: true },
    { "@type": "LocationFeatureSpecification", name: "HYROX Functional Conditioning", value: true },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which is the best 24-hour gym in Hathijan Circle, Ahmedabad?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Armour 24-7 Gym at Shalin Square, Hathijan Circle is the leading 24-hour gym in the area. It provides 24/7 biometric keycard access, imported heavy-duty strength equipment, cardio lines, certified floor trainers, and dedicated studio zones for Zumba, Yoga, and HYROX.",
      },
    },
    {
      "@type": "Question",
      name: "What are the membership charges at Armour 24-7 Gym?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Armour 24-7 Gym offers transparent pricing starting with a Single Day Demo Pass for ₹500, 1 Month at ₹3,500, 3 Months at ₹6,500, 6 Months at ₹9,000, and 12 Months at ₹15,000 (just ₹1,250/month). All plans include round-the-clock 24/7 biometric access.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Armour 24-7 Gym located in Ahmedabad?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Armour 24-7 Gym is centrally located at C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad, Gujarat 382445.",
      },
    },
    {
      "@type": "Question",
      name: "Are there certified personal trainers and floor coaches available?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Yes. Certified floor trainers are on the gym floor during peak hours to assist with equipment operation, posture correction, and exercise routines. 1-on-1 personal training packages are also available.",
      },
    },
    {
      "@type": "Question",
      name: "Does Armour 24-7 Gym offer a Ladies Fitness Program?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Yes, Armour 24-7 Gym provides a dedicated, respectful environment for women with female trainer availability, tailored workout plans for fat loss, toning, core stability, and private hygienic changing facilities.",
      },
    },
    {
      "@type": "Question",
      name: "Can I try the gym before committing to a long-term plan?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Yes, you can book a 1-Day Full Facility Demo Session for ₹500 to test the imported machines, free weights, and gym atmosphere before choosing a longer-term membership.",
      },
    },
  ],
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
import Visit from "@/components/home/Visit";
import FaqSection from "@/components/home/FaqSection";
import MobileActionBar from "@/components/home/MobileActionBar";

// Server component. Only the pieces that need browser state are client components.
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await getPublishedImages();
  const heroImageUrl = images.hero.src.startsWith("https://")
    ? images.hero.src
    : new URL(images.hero.src, siteUrl).toString();

  return (
    <div className="bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...localBusinessSchema,
            image: heroImageUrl,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
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
      <Visit />
      <FaqSection />
      <MobileActionBar />
      {/* Keeps the last content clear of the fixed action bar on phones */}
      <div className="h-14 md:hidden" aria-hidden="true" />
    </div>
  );
}
