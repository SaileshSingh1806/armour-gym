import Link from "next/link";
import Image from "next/image";
import {
  Dumbbell,
  Clock,
  Award,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
} from "lucide-react";

export const metadata = {
  title: "About Us | Armour 24-7 Gym Ahmedabad",
  description: "Learn about Armour 24-7 Gym in Hathijan Circle, Ahmedabad. 24/7 biometric gym access, imported strength machinery, and certified coaching staff.",
};

const stats = [
  { value: "24-7", label: "Always Open Access", sub: "Biometric Keycard Entry" },
  { value: "250+", label: "Active Members", sub: "Growing Fitness Community" },
  { value: "40+", label: "Strength Machines", sub: "Plate-Loaded & Free Weights" },
  { value: "8+", label: "Certified Coaches", sub: "Floor Guidance & Personal Training" },
];

const pillars = [
  {
    icon: Clock,
    title: "Round-The-Clock Biometric Entry",
    desc: "Your workout schedule shouldn't be limited by early closing hours. Registered members can enter the facility at any hour of the day or night through automated biometric access.",
    image: "/images/dummy-hero.webp",
  },
  {
    icon: Dumbbell,
    title: "Imported Plate-Loaded Strength Equipment",
    desc: "Equipped with heavy dumbbells, Olympic barbells, squat platforms, and plate-loaded machines selected for natural biomechanics and progressive overload training.",
    image: "/images/dummy-gallery-1.webp",
  },
  {
    icon: Award,
    title: "Coaching & Form Assistance",
    desc: "Certified trainers are on the gym floor during peak hours to guide beginners through equipment operation, correct lifting posture, and prevent training injuries.",
    image: "/images/dummy-gallery-4.webp",
  },
  {
    icon: Users,
    title: "Dedicated Fitness & Studio Zones",
    desc: "Spacious air-conditioned floors with separate areas for heavy barbell work, machine circuits, cardiovascular endurance, and guided group fitness sessions.",
    image: "/images/dummy-gallery-6.webp",
  },
];

// Coaching team representation with human trainer portraits
const coaches = [
  {
    name: "Strength & Conditioning Coach",
    role: "Barbell & Heavy Resistance Coach",
    experience: "Experienced in barbell mechanics, powerlifting form, and hypertrophy periodization.",
    specialties: ["Compound Movements", "Strength Progression", "Form Correction"],
    image: "/images/coach-1.webp",
  },
  {
    name: "Functional Fitness & Cardio Trainer",
    role: "Endurance & Conditioning Specialist",
    experience: "Guides high-energy circuit training, cardiovascular endurance, and fat loss conditioning.",
    specialties: ["HIIT & Circuit", "Agility Drills", "Cardio Conditioning"],
    image: "/images/coach-2.webp",
  },
  {
    name: "Personal Trainer & Nutrition Consultant",
    role: "Personal Coaching & Body Composition",
    experience: "Works 1-on-1 with members needing customized exercise splits and daily diet structure.",
    specialties: ["1-on-1 PT", "Macro Guidance", "Beginner Fundamentals"],
    image: "/images/coach-3.webp",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-28 md:pt-36 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-oswald uppercase tracking-widest text-[#ff2a3b] font-bold block mb-2">
            Hathijan Circle • Ahmedabad
          </span>
          <h1 className="text-4xl sm:text-6xl font-oswald font-bold uppercase tracking-tight text-white mb-4">
            About <span className="text-[#ff2a3b]">Armour 24-7 Gym</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-body leading-relaxed">
            Armour 24-7 Gym was established to bring serious, accessible, round-the-clock strength training to Hathijan Circle, Ahmedabad. We combine modern plate-loaded equipment, certified coaching, and flexible 24/7 access to give members a consistent space to pursue their fitness goals.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-[#141414] border border-white/10 p-5 rounded-sm">
              <span className="font-oswald text-3xl sm:text-4xl font-bold text-[#ff2a3b] block">
                {s.value}
              </span>
              <p className="font-oswald font-bold uppercase text-xs sm:text-sm text-white mt-1">
                {s.label}
              </p>
              <p className="text-[11px] text-gray-400 font-body mt-0.5">
                {s.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Core Pillars */}
        <div className="space-y-12 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-oswald uppercase tracking-widest text-[#ff2a3b] font-bold block mb-1">
              Facility Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-oswald font-bold uppercase text-white">
              What Sets <span className="text-[#ff2a3b]">Armour</span> Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="bg-[#141414] border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between">
                  <div className="relative h-60 w-full">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-sm bg-[#ff2a3b]/10 text-[#ff2a3b] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-oswald font-bold uppercase text-lg sm:text-xl text-white">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed font-body">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floor Coaches Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs sm:text-sm font-oswald uppercase tracking-widest text-[#ff2a3b] font-bold block mb-1">
              Certified Mentors
            </span>
            <h2 className="text-3xl sm:text-5xl font-oswald font-bold uppercase text-white leading-tight">
              Our Coaching <span className="text-[#ff2a3b]">Staff</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mt-2 font-body">
              Floor coaches available to support your form and workout structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coaches.map((c, i) => (
              <div key={i} className="bg-[#141414] border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-[#ff2a3b]/40 transition-colors">
                <div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden bg-black/40">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] sm:text-xs font-oswald font-bold uppercase tracking-widest text-[#ff2a3b] bg-black/60 px-2 py-0.5 rounded-sm backdrop-blur-sm border border-white/10 inline-block mb-1">
                      {c.role}
                    </span>
                    <h3 className="font-oswald font-bold uppercase text-lg sm:text-xl text-white">
                      {c.name}
                    </h3>
                  </div>
                </div>
                <div className="p-5 sm:p-6 space-y-3">
                  <p className="text-sm text-gray-300 leading-relaxed font-body">
                    {c.experience}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {c.specialties.map((spec, sIdx) => (
                      <span key={sIdx} className="text-xs bg-white/5 border border-white/10 text-gray-300 px-2.5 py-1 rounded-sm">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visit CTA */}
        <div className="bg-[#141414] border border-white/10 p-8 rounded-sm text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase text-white">
            Visit Our Facility In Hathijan Circle
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-body max-w-xl mx-auto leading-relaxed">
            Walk in during front desk hours (06:00 AM – 10:00 PM) to inspect the equipment or take a trial workout session (₹500).
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href="/pricing"
              className="bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-oswald font-bold uppercase text-xs sm:text-sm px-7 py-3 rounded-sm transition-colors"
            >
              View Membership Rates
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-oswald font-bold uppercase text-xs sm:text-sm px-7 py-3 rounded-sm transition-colors"
            >
              Contact Front Desk
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
