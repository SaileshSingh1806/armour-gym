import Link from "next/link";
import Image from "next/image";
import {
  Dumbbell,
  Shield,
  Clock,
  Trophy,
  Award,
  Zap,
  Flame,
  HeartPulse,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "About Us | Armour 24-7 Gym Ahmedabad",
  description: "Learn about Armour 24-7 Gym, Ahmedabad's leading strength and bodybuilding haven with 24/7 biometric access, Eleiko & Hammer Strength setups, and elite coaches.",
};

const stats = [
  { value: "24-7", label: "ALWAYS OPEN ACCESS", sub: "No Holidays, No Shutdowns" },
  { value: "15,000+", label: "SQUARE FEET FLOOR", sub: "4 Dedicated Training Sectors" },
  { value: "40+", label: "ELITE MACHINES", sub: "Hammer Strength & Eleiko" },
  { value: "5+", label: "CERTIFIED COACHES", sub: "IFBB, CSCS & ACSM Certified" },
];

const pillars = [
  {
    icon: Clock,
    title: "24/7 BIOMETRIC UNRESTRICTED ACCESS",
    desc: "Your training schedule shouldn't be dictated by arbitrary closing times. Tap in with facial recognition or RFID keycard at 3:00 PM or 3:00 AM. Total freedom with round-the-clock secure entry and high-definition surveillance.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Dumbbell,
    title: "WORLD-CLASS HEAVY IRON & MACHINES",
    desc: "Curated with precision for serious lifters: calibrated Eleiko competition plates, Rogue power cages, custom dumbbell sets up to 70kg, Hammer Strength plate-loaded iso-lateral machines, and dedicated deadlift platforms.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Trophy,
    title: "CHAMPIONSHIP-GRADE COACHING",
    desc: "No inexperienced gym floor helpers. Our coaching staff consists of competitive powerlifters, national physique athletes, and CSCS-certified strength coaches who create individualized periodization programs.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: HeartPulse,
    title: "RAPID RECOVERY & WELLNESS SUITE",
    desc: "True gains happen during recovery. Members enjoy commercial Finnish dry cedar saunas, high-pressure eucalyptus steam rooms, ice cold plunge hydrotherapy tubs, and InBody 570 clinical composition analysis.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
  },
];

const trainers = [
  {
    name: "VIKRAM RATHORE",
    role: "HEAD STRENGTH & POWERLIFTING COACH",
    credentials: "CSCS • National Powerlifting Record Holder (800kg Total)",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80",
    bio: "With over 12 years of coaching high-performance athletes, Vikram specializes in biomechanical bar path efficiency, raw power, and elite CNS conditioning.",
    specialties: ["Powerlifting", "Barbell Mechanics", "Meet Prep"],
  },
  {
    name: "ANANYA PATEL",
    role: "DIRECTOR OF ATHLETIC CONDITIONING & HIIT",
    credentials: "ACSM Certified • Crossfit Level 2 Trainer • Ex-National Sprinter",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80",
    bio: "Ananya designs heart-rate monitored conditioning protocols that push VO2 max limits while incinerating body fat without compromising muscle mass.",
    specialties: ["Metabolic Conditioning", "Plyometrics", "Endurance"],
  },
  {
    name: "DEVENDRA SINGH",
    role: "HEAD OF COMBAT & STRIKING",
    credentials: "Pro Muay Thai & Boxing Veteran • 8+ Years Ring Experience",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
    bio: "Devendra leads explosive punch mechanics, footwork drills, and heavy bag conditioning in Armour's dedicated octagon striking sector.",
    specialties: ["Boxing & Kickboxing", "Agility Drills", "Core Endurance"],
  },
  {
    name: "KABIR MEHTA",
    role: "SENIOR HYPERTROPHY & PHYSIQUE SPECIALIST",
    credentials: "IFBB Men's Physique Top 3 • Sports Nutritionist (ISSN)",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80",
    bio: "Kabir helps lifters break through muscle plateaus through targeted volume periodization, customized macro nutrition, and time-under-tension protocols.",
    specialties: ["Bodybuilding", "Contest Prep", "Nutritional Science"],
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen py-12 md:py-20">
      
      {/* Hero Header with Background Visual */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] border border-[#ff2a3b]/40 text-[#ff2a3b] text-xs font-heading font-extrabold uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5 fill-[#ff2a3b]" />
            THE ARMOUR PHILOSOPHY
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white leading-none">
            BUILT FOR THE <span className="text-[#ff2a3b]">UNCOMPROMISING</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-gray-300 font-body leading-relaxed">
            Armour 24-7 Gym was founded in Ahmedabad with a singular, relentless mission: to eliminate the distractions, poor equipment, and restrictive hours of standard commercial fitness clubs and create an uncompromising sanctuary for true athletic performance.
          </p>
        </div>

        {/* Big Numbers Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-none text-center relative overflow-hidden group hover:border-[#ff2a3b] transition-colors"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff2a3b] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ff2a3b] tracking-tight">
                {stat.value}
              </div>
              <div className="font-heading text-lg font-bold text-white uppercase tracking-wider mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-gray-400 mt-1 font-body">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facility & Equipment Pillars with Real Action Photos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="border-b border-white/10 pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#ff2a3b]">
              WHY ATHLETES CHOOSE US
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mt-1">
              THE FOUR PILLARS OF <span className="text-[#ff2a3b] inline-block whitespace-nowrap">ARMOUR 24-7</span>
            </h2>
          </div>
          <p className="text-xs text-gray-400 max-w-md">
            Engineered from the ground up for powerlifters, bodybuilders, functional athletes, and night-shift workers across Ahmedabad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#141414] border border-white/10 rounded-none hover:border-white/30 transition-all group flex flex-col justify-between overflow-hidden"
              >
                {/* Photo Top */}
                <div className="relative h-56 w-full bg-black overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-[#0a0a0a]/90 backdrop-blur-sm border border-white/15 text-[#ff2a3b] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-2xl font-bold uppercase tracking-wider text-white mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-heading font-bold text-[#ff2a3b] uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Standard at Ahmedabad 382445 Facility</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expert Trainers Section with Trainer Photos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] border border-[#ff2a3b]/40 text-[#ff2a3b] text-xs font-heading font-extrabold uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            WORLD-CLASS COACHING STAFF
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-tight text-white">
            MEET THE <span className="text-[#ff2a3b]">MASTER COACHES</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Every Armour coach has competed at national or international standards. Learn from leaders who practice what they preach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((coach, idx) => (
            <div
              key={idx}
              className="bg-[#141414] border border-white/10 rounded-none flex flex-col justify-between hover:border-[#ff2a3b] transition-colors group overflow-hidden"
            >
              {/* Coach Photo */}
              <div className="relative h-64 w-full bg-black overflow-hidden">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30" />
                <span className="absolute top-3 right-3 text-[10px] font-heading font-extrabold uppercase tracking-widest bg-[#ff2a3b] text-white px-2 py-0.5 shadow-md">
                  PRO COACH
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-wider text-white group-hover:text-[#ff2a3b] transition-colors">
                    {coach.name}
                  </h3>
                  <p className="text-xs font-heading font-semibold uppercase tracking-wider text-[#ff2a3b] mt-0.5">
                    {coach.role}
                  </p>
                  <p className="text-[11px] text-gray-400 font-semibold mt-1">
                    {coach.credentials}
                  </p>

                  <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                    {coach.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {coach.specialties.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] bg-[#0a0a0a] text-gray-300 px-2 py-0.5 border border-white/10 font-heading uppercase"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/contact?trainer=${encodeURIComponent(coach.name)}`}
                    className="w-full py-2 bg-[#0a0a0a] hover:bg-[#ff2a3b] text-white font-heading text-xs font-bold uppercase tracking-wider border border-white/15 hover:border-[#ff2a3b] transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>BOOK 1-ON-1 COACHING</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Bottom Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-gradient-to-r from-[#141414] to-[#1a1a1a] border-2 border-[#ff2a3b] p-8 sm:p-12 text-center rounded-none relative shadow-[0_0_40px_rgba(255,42,59,0.2)]">
          <h3 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-wider text-white">
            READY TO JOIN AHMEDABAD&apos;S <span className="text-[#ff2a3b]">ELITE STRENGTH TRIBE</span>?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-xl mx-auto">
            Get your 24/7 biometric keycard activated today and claim your free introductory personal training session.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="px-8 py-3.5 bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-heading text-lg font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,42,59,0.3)]"
            >
              VIEW MEMBERSHIP TIERS
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-[#0a0a0a] hover:bg-white/10 text-white font-heading text-lg font-bold uppercase tracking-wider border border-white/20 transition-all"
            >
              SCHEDULE A TOUR
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
