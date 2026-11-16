"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import AntigravityAnimation from "@/components/AntigravityAnimation";
import {
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
  Clock,
  ShieldCheck,
  Dumbbell,
  Users,
  CheckCircle2,
  X,
  MapPin,
  Flame,
  Info,
  Sparkles,
  Zap,
} from "lucide-react";

// Programs data for tabbed section (using clean dummy gym imagery)
const programsData = {
  strength: {
    title: "Strength & Hypertrophy",
    badge: "Most Popular",
    image: "/images/dummy-gallery-1.webp",
    desc: "Structured weight training using Olympic barbells, calibrated plates, dumbbells, and plate-loaded machines. Engineered for raw strength and progressive overload.",
    highlights: [
      "Barbell squat, bench press, and deadlift mechanics",
      "Plate-loaded iso-lateral machines for targeted hypertrophy",
      "Heavy dumbbell sets and Olympic barbell stations",
      "Personalized form checks from certified floor coaches",
    ],
  },
  cardio: {
    title: "Cardio & Stamina Conditioning",
    badge: "Cardio Zone",
    image: "/images/dummy-gallery-3.webp",
    desc: "Improve cardiovascular endurance, burn calories, and build stamina with modern treadmills, ellipticals, cycling bikes, and bodyweight circuits.",
    highlights: [
      "Heart-rate paced endurance workouts",
      "Interval conditioning and calorie-burn circuits",
      "Pre-workout dynamic mobility and warmup drills",
      "Low-impact machine options for joint health",
    ],
  },
  functional: {
    title: "Functional & Core Training",
    badge: "All Levels",
    image: "/images/dummy-gallery-4.webp",
    desc: "Multi-planar movements to improve balance, core strength, agility, and day-to-day athleticism using kettlebells, cables, resistance bands, and turf work.",
    highlights: [
      "Rotational and anti-rotational core stabilization",
      "Functional movement patterns to prevent injuries",
      "Adjustable dual-pulley cable setups",
      "Mobility and post-workout active recovery",
    ],
  },
  personal: {
    title: "1-on-1 Personal Training",
    badge: "Dedicated Coach",
    image: "/images/dummy-gallery-2.webp",
    desc: "Work directly with a certified personal trainer dedicated to your specific fitness targets, whether you are beginning your fitness journey or preparing for competitive lifting.",
    highlights: [
      "Individualized exercise programming and weekly adjustments",
      "One-on-one form correction on every repetition",
      "Nutritional guidance and macronutrient tracking",
      "Flexible slot scheduling based on your routine",
    ],
  },
};

// Real Google Reviews from Armour Gym's Google Maps listing
const googleReviews = [
  {
    initial: "H",
    name: "Hardik Trivedi",
    time: "Verified Member",
    rating: 5,
    text: "One of the best gyms in Hathijan Circle. Clean setup with a wide variety of imported machines and calibrated weights. The trainers are supportive and the atmosphere keeps you focused.",
  },
  {
    initial: "S",
    name: "Sneha Mehta",
    time: "Verified Member",
    rating: 5,
    text: "Great atmosphere, hygienic facilities, and round-the-clock access. Being able to train comfortably after my work shift without rushing before closing time is a huge convenience.",
  },
  {
    initial: "R",
    name: "Rohan Dave",
    time: "Verified Member",
    rating: 5,
    text: "Proper air conditioning, well-maintained equipment, and courteous staff. The dumbbell selection and machine variety are among the best in this area of Ahmedabad.",
  },
  {
    initial: "J",
    name: "Jignesh Joshi",
    time: "Verified Member",
    rating: 5,
    text: "The coaches on the floor take time to guide you on proper posture and injury prevention. Excellent gym for both beginners and experienced lifters.",
  },
];

// Blog posts with practical information
const blogPosts = [
  {
    id: 1,
    title: "5 Compound Lifts That Form the Basis of Strength",
    category: "Training Guide",
    date: "Fitness Resource",
    readTime: "4 min read",
    image: "/images/dummy-gallery-1.webp",
    desc: "Learn why multi-joint compound exercises recruit more muscle fibers and deliver better functional strength than isolation movements alone.",
    content: [
      "Compound exercises are movements that involve more than one joint and work multiple muscle groups simultaneously.",
      "1. Barbell Squat: Engages the quadriceps, hamstrings, glutes, and core musculature.",
      "2. Deadlift: Strengthens the entire posterior chain including hamstrings, glutes, lats, and lower back.",
      "3. Overhead Press: Develops shoulder stability, triceps, and core balance while standing.",
      "4. Bench Press: Primary builder for chest, front shoulders, and triceps pressing power.",
      "5. Barbell Row / Pull-Up: Essential for upper back thickness, posture, and balanced shoulder mechanics.",
      "At Armour 24-7 Gym, dedicated squat platforms and Olympic weight plates provide the stable base needed to perform these lifts safely."
    ],
  },
  {
    id: 2,
    title: "A Practical Approach to Pre and Post Workout Nutrition",
    category: "Nutrition",
    date: "Fitness Resource",
    readTime: "4 min read",
    image: "/images/dummy-gallery-3.webp",
    desc: "How simple meal timing and adequate daily protein support muscle recovery and steady workout energy.",
    content: [
      "You do not need complicated diets to support your gym training. A few consistent habits make the biggest difference:",
      "Pre-Workout (1 to 2 hours before): Have easily digestible carbohydrates paired with a moderate amount of protein (such as oats with curd, banana with eggs, or a roti roll). This replenishes glycogen stores so you do not feel sluggish during lifting.",
      "Hydration: Even mild dehydration reduces strength and causes premature muscle fatigue. Drink plenty of water throughout the day, not just while exercising.",
      "Post-Workout: Consume 20 to 30 grams of protein along with carbohydrates within a couple of hours after training to assist muscle tissue repair.",
      "Daily Consistency: The most important nutritional factor remains hitting your overall daily calorie and protein requirements consistently over months."
    ],
  },
  {
    id: 3,
    title: "Why Mobility and Recovery Are Essential for Lifters",
    category: "Recovery",
    date: "Fitness Resource",
    readTime: "3 min read",
    image: "/images/dummy-gallery-6.webp",
    desc: "Simple mobility drills that protect your joints, relieve desk-job stiffness, and improve lifting mechanics.",
    content: [
      "Strength training creates microscopic stress on muscles and connective tissues. Proper recovery allows that tissue to rebuild stronger.",
      "Dynamic Warmups: Spend 5 to 8 minutes performing arm circles, hip openers, and bodyweight squats before touching a barbell. This lubricates joints with synovial fluid.",
      "Addressing Sitting Posture: Hours spent sitting at a desk tighten hip flexors and round the thoracic spine. Daily mobility work directly helps restore full range of motion for squats and presses.",
      "Sleep and Rest Days: Muscle growth happens during rest, especially deep sleep. Schedule at least one to two rest days every week to let your nervous system recover."
    ],
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<keyof typeof programsData>("strength");
  const [selectedBlog, setSelectedBlog] = useState<(typeof blogPosts)[0] | null>(null);
  const [activeReview, setActiveReview] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Parallax Scroll Tracking (Optimized with requestAnimationFrame)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-advance mobile reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % googleReviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // BMI Calculator State
  const [bmiGender, setBmiGender] = useState<"male" | "female">("male");
  const [bmiHeight, setBmiHeight] = useState<number>(170);
  const [bmiWeight, setBmiWeight] = useState<number>(70);

  const currentProgram = programsData[activeTab];

  // BMI Calculations
  const heightInMeters = bmiHeight / 100;
  const bmiValue = parseFloat((bmiWeight / (heightInMeters * heightInMeters)).toFixed(1));

  const getBmiDetails = () => {
    if (bmiValue < 18.5) {
      return {
        category: "Underweight Range",
        colorClass: "text-amber-400 border-amber-400/30 bg-amber-950/20",
        advice: "Focus on structured strength training with a nutrient-rich caloric surplus to build lean muscle mass.",
        suggestedPlan: "Strength & Hypertrophy Training",
      };
    } else if (bmiValue <= 24.9) {
      return {
        category: "Normal BMI Range",
        colorClass: "text-emerald-400 border-emerald-400/30 bg-emerald-950/20",
        advice: "Healthy general baseline. Focus on progressive strength progression, stamina, and overall body composition.",
        suggestedPlan: "Balanced Strength & Conditioning",
      };
    } else if (bmiValue <= 29.9) {
      return {
        category: "Overweight Range",
        colorClass: "text-amber-400 border-amber-400/30 bg-amber-950/20",
        advice: "Combine resistance training with cardiovascular workouts and moderate calorie management to improve body composition.",
        suggestedPlan: "Cardio + Strength Combination",
      };
    } else {
      return {
        category: "Higher BMI Range",
        colorClass: "text-[#ff2a3b] border-[#ff2a3b]/30 bg-red-950/20",
        advice: "Prioritize low-impact joint-friendly cardio, progressive functional movements, and structured nutrition planning.",
        suggestedPlan: "Functional Conditioning & Guidance",
      };
    }
  };

  const bmiDetails = getBmiDetails();

  return (
    <div className="bg-[#0a0a0a] text-white">
      
      {/* ============================================================ */}
      {/* 1. HERO — Full Bleed Gym Photo with Transparent Header       */}
      {/* ============================================================ */}
      <section className="min-h-screen relative flex items-center justify-start overflow-hidden pt-24 pb-16">
        {/* Gym Photo as Background with Smooth Parallax */}
        <div
          className="absolute inset-0 -top-16 -bottom-16 z-0 will-change-transform"
          style={{ transform: `translate3d(0, ${scrollY * 0.28}px, 0)` }}
        >
          <Image
            src="/images/dummy-hero.webp"
            alt="Armour 24-7 Gym Athletic Arena in Hathijan Circle, Ahmedabad"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_center]"
          />
          {/* Subtle directional gradient to make text effortlessly legible while preserving image depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/60 to-transparent" />
        </div>

        {/* Antigravity Particle Animation Layer */}
        <AntigravityAnimation
          count={26}
          speed={0.6}
          colors={["#ff2a3b", "#ffffff", "#e5e5e5", "#b91c1c"]}
          shape="mixed"
          gravity={-0.03}
          opacity={0.6}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 md:pt-24">
          <div className="max-w-2xl">
            {/* Professional Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-oswald font-bold uppercase leading-[1.05] tracking-tight text-white mb-6">
              Strength &amp; Performance.<br />
              <span className="text-[#ff2a3b]">On Your Schedule.</span>
            </h1>

            {/* Concise Professional Supporting Copy */}
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-8 max-w-xl font-body">
              Experience round-the-clock biometric gym access, advanced plate-loaded machinery, and certified coaching in Hathijan Circle, Ahmedabad. Built for fitness enthusiasts who value quality, consistency, and real results.
            </p>

            {/* Clear Primary & Secondary Actions with comfortable touch targets */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                href="/pricing"
                className="bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-oswald font-bold uppercase text-sm sm:text-base px-8 py-3.5 tracking-wider transition-colors rounded-sm inline-flex items-center gap-2 shadow-lg"
              >
                <span>View Membership Plans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="bg-black/60 hover:bg-white/10 text-white border border-white/30 font-oswald font-bold uppercase text-sm sm:text-base px-7 py-3.5 tracking-wider transition-colors rounded-sm backdrop-blur-sm"
              >
                Enquire / Book Demo
              </Link>
            </div>

            {/* Compact Fact Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/15">
              <div>
                <span className="text-3xl sm:text-4xl font-oswald font-bold text-[#ff2a3b] block">24/7</span>
                <p className="text-xs text-gray-300 uppercase tracking-wider mt-1 font-semibold">Biometric Entry *</p>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-oswald font-bold text-white block">250+</span>
                <p className="text-xs text-gray-300 uppercase tracking-wider mt-1 font-semibold">Active Members</p>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-oswald font-bold text-white block">40+</span>
                <p className="text-xs text-gray-300 uppercase tracking-wider mt-1 font-semibold">Machines &amp; Racks</p>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-oswald font-bold text-[#ff2a3b] block">8+</span>
                <p className="text-xs text-gray-300 uppercase tracking-wider mt-1 font-semibold">Certified Coaches</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. CORE ADVANTAGES — Compact & Concrete Gym Facts            */}
      {/* ============================================================ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0e0e0e] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow text-xs sm:text-sm text-[#ff2a3b] font-bold block mb-2">
              WHY TRAIN WITH US
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-oswald font-bold uppercase text-white leading-tight">
              The Armour 24-7 <span className="text-[#ff2a3b]">Standard</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mt-2 font-body leading-relaxed">
              Everything required for consistent strength progression under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#141414] border border-white/10 p-6 sm:p-7 rounded-sm hover:border-[#ff2a3b]/40 transition-colors">
              <div className="w-12 h-12 rounded-sm bg-[#ff2a3b]/10 text-[#ff2a3b] flex items-center justify-center mb-5">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-oswald font-bold uppercase text-lg sm:text-xl text-white mb-2">
                24/7 Biometric Access
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-body">
                Train early morning, afternoon, or late night. Registered members enter seamlessly via fingerprint and facial recognition.
              </p>
            </div>

            <div className="bg-[#141414] border border-white/10 p-6 sm:p-7 rounded-sm hover:border-[#ff2a3b]/40 transition-colors">
              <div className="w-12 h-12 rounded-sm bg-[#ff2a3b]/10 text-[#ff2a3b] flex items-center justify-center mb-5">
                <Dumbbell className="w-6 h-6" />
              </div>
              <h3 className="font-oswald font-bold uppercase text-lg sm:text-xl text-white mb-2">
                Heavy Iron &amp; Machines
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-body">
                Full setup of plate-loaded machines, Olympic barbells, heavy dumbbells, squat racks, and dedicated cable stations.
              </p>
            </div>

            <div className="bg-[#141414] border border-white/10 p-6 sm:p-7 rounded-sm hover:border-[#ff2a3b]/40 transition-colors">
              <div className="w-12 h-12 rounded-sm bg-[#ff2a3b]/10 text-[#ff2a3b] flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-oswald font-bold uppercase text-lg sm:text-xl text-white mb-2">
                Certified Floor Trainers
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-body">
                Experienced trainers on the floor to correct your form, answer questions, and offer guidance on workout structure.
              </p>
            </div>

            <div className="bg-[#141414] border border-white/10 p-6 sm:p-7 rounded-sm hover:border-[#ff2a3b]/40 transition-colors">
              <div className="w-12 h-12 rounded-sm bg-[#ff2a3b]/10 text-[#ff2a3b] flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-oswald font-bold uppercase text-lg sm:text-xl text-white mb-2">
                Clean, Monitored Facility
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-body">
                High-capacity air conditioning, sanitized workout areas, secure lockers, changing rooms, and 24/7 CCTV surveillance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. TRAINING PROGRAMS — Practical Tabbed Interface            */}
      {/* ============================================================ */}
      <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <span className="eyebrow text-xs sm:text-sm text-[#ff2a3b] font-bold block mb-1">
                WORKOUT OPTIONS
              </span>
              <h2 className="text-3xl sm:text-5xl font-oswald font-bold uppercase text-white leading-tight">
                Training <span className="text-[#ff2a3b]">Programs</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-300 max-w-md leading-relaxed">
              Whether your goal is building muscle, increasing stamina, or working 1-on-1 with a personal trainer, our floor setup supports every level.
            </p>
          </div>

          {/* Program Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4" role="tablist">
            {(Object.keys(programsData) as Array<keyof typeof programsData>).map((key) => {
              const item = programsData[key];
              const isSelected = activeTab === key;
              return (
                <button
                  key={key}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-oswald uppercase font-bold tracking-wider rounded-sm transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-[#ff2a3b] text-white shadow-md"
                      : "bg-[#141414] text-gray-300 hover:text-white"
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm">
            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-sm overflow-hidden bg-black/40">
              <Image
                src={currentProgram.image}
                alt={currentProgram.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <span className="absolute top-3 left-3 bg-[#ff2a3b] text-white text-[10px] font-oswald font-bold uppercase px-2.5 py-1 rounded-sm shadow-md">
                {currentProgram.badge}
              </span>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-oswald font-bold uppercase text-white leading-tight">
                {currentProgram.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-body">
                {currentProgram.desc}
              </p>

              <div className="space-y-2.5 pt-1">
                <h4 className="text-xs sm:text-sm font-oswald font-bold uppercase tracking-wider text-gray-400">
                  Program Inclusions:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-gray-200">
                  {currentProgram.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff2a3b] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-oswald text-xs sm:text-sm uppercase font-bold tracking-wider px-7 py-3.5 rounded-sm transition-colors shadow-md"
                >
                  <span>Enquire About This Program</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. FACILITY GALLERY — Clean Athletic Gym Photography          */}
      {/* ============================================================ */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0e0e0e] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <span className="eyebrow text-xs sm:text-sm text-[#ff2a3b] font-bold block mb-1">
                FACILITY SHOWCASE
              </span>
              <h2 className="text-3xl sm:text-5xl font-oswald font-bold uppercase text-white leading-tight">
                The Gym <span className="text-[#ff2a3b]">Floor</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-300 max-w-md leading-relaxed">
              Equipped with dedicated strength zones, Olympic lifting stations, cardio lines, and locker facilities in Hathijan Circle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative h-64 sm:h-72 rounded-sm overflow-hidden group bg-black/40">
              <Image
                src="/images/dummy-gallery-1.webp"
                alt="Main Gym Training Floor"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4">
                <span className="text-sm font-oswald uppercase tracking-wider text-white font-bold">
                  Main Training Floor &amp; Power Racks
                </span>
              </div>
            </div>

            <div className="relative h-64 sm:h-72 rounded-sm overflow-hidden group bg-black/40">
              <Image
                src="/images/dummy-gallery-2.webp"
                alt="Plate Loaded Machines and Leg Press"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4">
                <span className="text-sm font-oswald uppercase tracking-wider text-white font-bold">
                  Plate-Loaded Strength Machines
                </span>
              </div>
            </div>

            <div className="relative h-64 sm:h-72 rounded-sm overflow-hidden group bg-black/40">
              <Image
                src="/images/dummy-gallery-3.webp"
                alt="Cardio Equipment and Treadmills"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4">
                <span className="text-sm font-oswald uppercase tracking-wider text-white font-bold">
                  Cardio &amp; Stamina Line
                </span>
              </div>
            </div>

            <div className="relative h-64 sm:h-72 rounded-sm overflow-hidden group bg-black/40">
              <Image
                src="/images/dummy-gallery-4.webp"
                alt="Dumbbells and Free Weight Racks"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4">
                <span className="text-sm font-oswald uppercase tracking-wider text-white font-bold">
                  Heavy Dumbbells &amp; Free Weights
                </span>
              </div>
            </div>

            <div className="relative h-64 sm:h-72 rounded-sm overflow-hidden group bg-black/40">
              <Image
                src="/images/dummy-gallery-5.webp"
                alt="Cable Rigs and Upper Body Stations"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4">
                <span className="text-sm font-oswald uppercase tracking-wider text-white font-bold">
                  Dual-Cable Towers &amp; Upper Body Rigs
                </span>
              </div>
            </div>

            <div className="relative h-64 sm:h-72 rounded-sm overflow-hidden group bg-black/40">
              <Image
                src="/images/dummy-gallery-6.webp"
                alt="Armour Gym Training Atmosphere"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4">
                <span className="text-sm font-oswald uppercase tracking-wider text-white font-bold">
                  Air-Conditioned Workout Space
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. PARALLAX MOMENTUM BREAK — Unique Facility Pillars         */}
      {/* (Fixed: Removed duplicate hero stats numbers)                */}
      {/* ============================================================ */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/10">
        {/* Parallax Background with Dummy Gym Visual */}
        <div
          className="absolute inset-0 -top-32 -bottom-32 z-0 will-change-transform"
          style={{ transform: `translate3d(0, ${(scrollY - 2000) * 0.16}px, 0)` }}
        >
          <Image
            src="/images/dummy-break.webp"
            alt="Armour 24-7 Gym Athletic Arena"
            fill
            sizes="100vw"
            className="object-cover object-center scale-110"
          />
          <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px]" />
        </div>

        {/* Antigravity floating geometric particles */}
        <AntigravityAnimation
          count={20}
          speed={0.5}
          colors={["#ff2a3b", "#ffffff", "#888888"]}
          shape="triangle"
          gravity={-0.02}
          opacity={0.5}
        />

        {/* Parallax Foreground Content — Non-repetitive, High-impact Value */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/15 rounded-full text-gray-200 text-xs sm:text-sm font-oswald uppercase tracking-widest backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#ff2a3b]" />
            EXPERIENCE THE ARMOUR ADVANTAGE
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-oswald font-bold uppercase text-white leading-tight tracking-tight">
            Engineered For Serious Lifting.<br />
            <span className="text-[#ff2a3b]">Zero Distractions.</span>
          </h2>

          <p className="text-sm sm:text-lg text-gray-200 font-body max-w-2xl mx-auto leading-relaxed">
            Step onto a gym floor built for raw, measurable progress. From calibrated barbell platforms to smooth plate-loaded isolation machines, everything is curated for consistent training.
          </p>

          {/* 4 Concrete Facility Highlights (Replaced the duplicate 24/7, 250+, 40+, 8+ stats) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 max-w-5xl mx-auto border-t border-white/10 text-left">
            <div className="bg-black/60 border border-white/10 p-5 rounded-sm backdrop-blur-sm">
              <div className="w-8 h-8 rounded-sm bg-[#ff2a3b]/10 text-[#ff2a3b] flex items-center justify-center mb-3">
                <Dumbbell className="w-4 h-4" />
              </div>
              <h3 className="font-oswald font-bold uppercase text-base text-white mb-1">
                Olympic Calibrated Gear
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-body leading-relaxed">
                Dedicated deadlift platforms and competition-grade barbell setups.
              </p>
            </div>

            <div className="bg-black/60 border border-white/10 p-5 rounded-sm backdrop-blur-sm">
              <div className="w-8 h-8 rounded-sm bg-[#ff2a3b]/10 text-[#ff2a3b] flex items-center justify-center mb-3">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="font-oswald font-bold uppercase text-base text-white mb-1">
                Plate-Loaded Isolation
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-body leading-relaxed">
                Iso-lateral machines supporting natural human movement mechanics.
              </p>
            </div>

            <div className="bg-black/60 border border-white/10 p-5 rounded-sm backdrop-blur-sm">
              <div className="w-8 h-8 rounded-sm bg-[#ff2a3b]/10 text-[#ff2a3b] flex items-center justify-center mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-oswald font-bold uppercase text-base text-white mb-1">
                Biometric Turnstile
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-body leading-relaxed">
                Seamless fingerprint and facial recognition entry around the clock.
              </p>
            </div>

            <div className="bg-black/60 border border-white/10 p-5 rounded-sm backdrop-blur-sm">
              <div className="w-8 h-8 rounded-sm bg-[#ff2a3b]/10 text-[#ff2a3b] flex items-center justify-center mb-3">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-oswald font-bold uppercase text-base text-white mb-1">
                Hygienic Climate Arena
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-body leading-relaxed">
                High-capacity air conditioning, sanitized floors, lockers, and showers.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/pricing"
              className="bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-oswald font-bold uppercase text-xs sm:text-sm px-8 py-3.5 tracking-wider transition-colors rounded-sm inline-flex items-center gap-2 shadow-lg"
            >
              <span>Explore Membership Rates</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact?plan=demo"
              className="bg-white/10 hover:bg-white/20 text-white font-oswald font-bold uppercase text-xs sm:text-sm px-7 py-3.5 tracking-wider transition-colors rounded-sm"
            >
              Book Demo Session (₹500)
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. LADIES FITNESS PROGRAM — Welcoming & Respectful Tone       */}
      {/* ============================================================ */}
      <section id="ladies-program" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative h-80 sm:h-[450px] rounded-sm overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/dummy-gallery-5.webp"
                alt="Ladies Fitness Training Area at Armour 24-7 Gym"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 p-4 rounded-sm border border-white/10">
                <p className="text-sm font-oswald font-bold uppercase text-white">
                  Safe &amp; Welcoming Workout Environment
                </p>
                <p className="text-xs text-gray-300 font-body mt-0.5">
                  Comfortable, clean, and guided directly on the floor.
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="eyebrow text-xs sm:text-sm text-[#ff2a3b] font-bold block mb-1">
                  DEDICATED GUIDANCE
                </span>
                <h2 className="text-3xl sm:text-5xl font-oswald font-bold uppercase text-white leading-tight">
                  Ladies Fitness <span className="text-[#ff2a3b]">Program</span>
                </h2>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mt-3 font-body">
                  A comfortable and motivating training environment for women of all fitness levels. Whether your priority is fat loss, toning, core stability, or functional stamina, our certified coaches ensure you feel confident using every machine.
                </p>
              </div>

              {/* 4 Clear Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="bg-[#141414] border border-white/10 p-4 sm:p-5 rounded-sm">
                  <h3 className="text-sm sm:text-base font-oswald font-bold uppercase text-white mb-1">
                    Structured Fat Loss &amp; Toning
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-body">
                    Workouts designed to combine moderate weights and cardio intervals for steady calorie burn.
                  </p>
                </div>

                <div className="bg-[#141414] border border-white/10 p-4 sm:p-5 rounded-sm">
                  <h3 className="text-sm sm:text-base font-oswald font-bold uppercase text-white mb-1">
                    Beginner-Friendly Coaching
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-body">
                    Step-by-step instruction on posture, machine setup, and weights without intimidation.
                  </p>
                </div>

                <div className="bg-[#141414] border border-white/10 p-4 sm:p-5 rounded-sm">
                  <h3 className="text-sm sm:text-base font-oswald font-bold uppercase text-white mb-1">
                    Female Trainer Availability
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-body">
                    Option to train with certified female fitness coaches for customized personal guidance.
                  </p>
                </div>

                <div className="bg-[#141414] border border-white/10 p-4 sm:p-5 rounded-sm">
                  <h3 className="text-sm sm:text-base font-oswald font-bold uppercase text-white mb-1">
                    Comfort &amp; Hygiene First
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-body">
                    Well-maintained changing areas, secure lockers, and a respectful atmosphere on the floor.
                  </p>
                </div>
              </div>

              <div>
                <Link
                  href="/contact?program=ladies-program"
                  className="inline-flex items-center gap-2 bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-oswald text-xs sm:text-sm uppercase font-bold tracking-wider px-7 py-3.5 rounded-sm transition-colors shadow-md"
                >
                  <span>Enquire For Ladies Program</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. GOOGLE REVIEWS & RATING                                   */}
      {/* ============================================================ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0e0e0e] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
            <div>
              <span className="eyebrow text-xs sm:text-sm text-[#ff2a3b] font-bold block mb-1">
                VERIFIED MEMBER FEEDBACK
              </span>
              <h2 className="text-3xl sm:text-5xl font-oswald font-bold uppercase text-white leading-tight">
                What Members <span className="text-[#ff2a3b]">Say</span>
              </h2>
            </div>

            {/* Google Rating Card */}
            <div className="flex items-center gap-4 bg-[#141414] border border-white/10 px-5 py-3.5 rounded-sm">
              <div className="font-oswald text-3xl sm:text-4xl font-bold text-white leading-none">
                4.9
              </div>
              <div className="text-left border-l border-white/10 pl-4">
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <a
                  href="https://maps.app.goo.gl/fdHFDqTDaHNvw5Pf6"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#ff2a3b] hover:underline font-semibold block mt-1"
                >
                  Google Maps Reviews ↗
                </a>
              </div>
            </div>
          </div>

          {/* Reviews Grid on Desktop */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {googleReviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-[#141414] border border-white/10 p-6 sm:p-7 rounded-sm flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#ff2a3b] text-white flex items-center justify-center font-oswald font-bold text-base shadow-sm">
                        {rev.initial}
                      </div>
                      <div>
                        <h3 className="font-oswald font-bold uppercase text-base text-white">
                          {rev.name}
                        </h3>
                        <span className="text-xs text-gray-400 font-body block">{rev.time}</span>
                      </div>
                    </div>
                    <div className="flex text-amber-400 gap-0.5">
                      {[...Array(rev.rating)].map((_, r) => (
                        <Star key={r} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-body">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden">
            <div className="bg-[#141414] border border-white/10 p-6 rounded-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#ff2a3b] text-white flex items-center justify-center font-oswald font-bold text-base">
                    {googleReviews[activeReview].initial}
                  </div>
                  <div>
                    <h3 className="font-oswald font-bold uppercase text-base text-white">
                      {googleReviews[activeReview].name}
                    </h3>
                    <span className="text-xs text-gray-400 font-body block">{googleReviews[activeReview].time}</span>
                  </div>
                </div>
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(googleReviews[activeReview].rating)].map((_, r) => (
                    <Star key={r} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed font-body min-h-[70px]">
                &ldquo;{googleReviews[activeReview].text}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <div className="flex gap-1.5">
                  {googleReviews.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveReview(i)}
                      className={`h-2 rounded-full transition-all ${
                        activeReview === i ? "w-6 bg-[#ff2a3b]" : "w-2 bg-white/20"
                      }`}
                      aria-label={`View review ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveReview((prev) => (prev === 0 ? googleReviews.length - 1 : prev - 1))}
                    className="p-2 rounded-sm border border-white/20 text-gray-200 hover:text-white"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveReview((prev) => (prev + 1) % googleReviews.length)}
                    className="p-2 rounded-sm border border-white/20 text-gray-200 hover:text-white"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. PRACTICAL FITNESS ARTICLES (With Interactive Modal)       */}
      {/* ============================================================ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
            <div>
              <span className="eyebrow text-xs sm:text-sm text-[#ff2a3b] font-bold block mb-1">
                GUIDES &amp; RESOURCES
              </span>
              <h2 className="text-3xl sm:text-5xl font-oswald font-bold uppercase text-white leading-tight">
                Practical Training <span className="text-[#ff2a3b]">Tips</span>
              </h2>
            </div>
            <p className="text-sm text-gray-400 font-body">
              Click any article to read the full guide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedBlog(post)}
                className="bg-[#141414] border border-white/10 rounded-sm overflow-hidden group cursor-pointer hover:border-[#ff2a3b]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-black/40">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 bg-[#ff2a3b] text-white text-[10px] font-oswald font-bold uppercase px-2 py-0.5 rounded-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <span className="text-xs text-gray-400 font-body block mb-1.5">
                      {post.readTime}
                    </span>
                    <h3 className="font-oswald font-bold uppercase text-lg text-white group-hover:text-[#ff2a3b] transition-colors leading-snug mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed font-body line-clamp-2">
                      {post.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-oswald font-bold uppercase tracking-wider text-[#ff2a3b] flex items-center gap-1">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Blog Reader Modal */}
      {selectedBlog && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedBlog.title}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-[#141414] border border-white/20 rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              type="button"
              onClick={() => setSelectedBlog(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 bg-black/70 hover:bg-[#ff2a3b] text-white rounded-sm flex items-center justify-center transition-colors"
              aria-label="Close article modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative h-56 w-full">
              <Image
                src={selectedBlog.image}
                alt={selectedBlog.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4">
                <span className="bg-[#ff2a3b] text-white text-[10px] font-oswald font-bold uppercase px-2 py-0.5 rounded-sm mr-2">
                  {selectedBlog.category}
                </span>
                <span className="text-xs text-gray-300 font-body">{selectedBlog.readTime}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase text-white leading-tight">
                {selectedBlog.title}
              </h2>
              <div className="space-y-3 text-sm text-gray-200 leading-relaxed font-body">
                {selectedBlog.content.map((p, idx) => (
                  <p key={idx} className={p.match(/^[1-5]\./) ? "font-semibold text-white pt-1" : ""}>
                    {p}
                  </p>
                ))}
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <p className="text-xs text-gray-400 font-body">
                  Questions? Speak with a coach on the floor.
                </p>
                <Link
                  href="/contact"
                  onClick={() => setSelectedBlog(null)}
                  className="bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-oswald text-xs uppercase font-bold px-4 py-2.5 rounded-sm transition-colors"
                >
                  Visit Gym
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 9. BMI CALCULATOR — Clarified Framing & Non-Medical Metric   */}
      {/* ============================================================ */}
      <section id="bmi" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0e0e0e] border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow text-xs sm:text-sm text-[#ff2a3b] font-bold block mb-1">
              GENERAL SCREENING
            </span>
            <h2 className="text-3xl sm:text-5xl font-oswald font-bold uppercase text-white leading-tight">
              BMI <span className="text-[#ff2a3b]">Calculator</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mt-2 font-body">
              Estimate your Body Mass Index as a basic starting benchmark.
            </p>
          </div>

          {/* Educational Disclaimer Box */}
          <div className="bg-[#181818] border border-white/10 p-4 rounded-sm flex items-start gap-3 mb-8 text-xs sm:text-sm text-gray-300">
            <Info className="w-5 h-5 text-[#ff2a3b] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Please Note:</strong> Body Mass Index (BMI) is a general ratio calculated purely from weight and height. It does not measure body fat percentage or muscle mass and is not a medical diagnosis or training prescription. Speak with our coaches for a personalized fitness assessment.
            </p>
          </div>

          <div className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Gender Selection */}
              <div>
                <label className="text-xs sm:text-sm font-oswald uppercase tracking-wider text-gray-300 font-bold block mb-2">
                  Select Gender
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setBmiGender("male")}
                    className={`py-2.5 px-3 text-xs sm:text-sm font-oswald uppercase font-bold tracking-wider rounded-sm transition-colors ${
                      bmiGender === "male"
                        ? "bg-[#ff2a3b] text-white shadow-md"
                        : "bg-[#1c1c1c] text-gray-300 hover:text-white"
                    }`}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => setBmiGender("female")}
                    className={`py-2.5 px-3 text-xs sm:text-sm font-oswald uppercase font-bold tracking-wider rounded-sm transition-colors ${
                      bmiGender === "female"
                        ? "bg-[#ff2a3b] text-white shadow-md"
                        : "bg-[#1c1c1c] text-gray-300 hover:text-white"
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>

              {/* Height Slider */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="heightRange" className="text-xs sm:text-sm font-oswald uppercase tracking-wider text-gray-300 font-bold">
                    Height
                  </label>
                  <span className="font-oswald text-lg font-bold text-white">
                    {bmiHeight} <span className="text-xs text-gray-400 font-normal">cm</span>
                  </span>
                </div>
                <input
                  id="heightRange"
                  type="range"
                  min="130"
                  max="220"
                  value={bmiHeight}
                  onChange={(e) => setBmiHeight(Number(e.target.value))}
                  className="w-full h-2 bg-[#222] rounded-sm appearance-none cursor-pointer accent-[#ff2a3b]"
                />
                <div className="flex justify-between text-xs text-gray-400 font-body mt-1">
                  <span>130 cm</span>
                  <span>175 cm</span>
                  <span>220 cm</span>
                </div>
              </div>

              {/* Weight Slider */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="weightRange" className="text-xs sm:text-sm font-oswald uppercase tracking-wider text-gray-300 font-bold">
                    Weight
                  </label>
                  <span className="font-oswald text-lg font-bold text-white">
                    {bmiWeight} <span className="text-xs text-gray-400 font-normal">kg</span>
                  </span>
                </div>
                <input
                  id="weightRange"
                  type="range"
                  min="40"
                  max="150"
                  value={bmiWeight}
                  onChange={(e) => setBmiWeight(Number(e.target.value))}
                  className="w-full h-2 bg-[#222] rounded-sm appearance-none cursor-pointer accent-[#ff2a3b]"
                />
                <div className="flex justify-between text-xs text-gray-400 font-body mt-1">
                  <span>40 kg</span>
                  <span>95 kg</span>
                  <span>150 kg</span>
                </div>
              </div>

            </div>

            {/* Calculated Output */}
            <div className="lg:col-span-5 bg-[#0a0a0a] border border-white/10 p-6 rounded-sm text-center space-y-4">
              <span className="text-xs font-oswald uppercase tracking-widest text-gray-400 font-bold block">
                Calculated BMI
              </span>
              <div className="font-oswald text-5xl sm:text-6xl font-bold text-white leading-none">
                {bmiValue}
              </div>
              <div>
                <span className={`inline-block px-3.5 py-1 text-xs font-oswald font-bold uppercase rounded-sm border ${bmiDetails.colorClass}`}>
                  {bmiDetails.category}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-body">
                {bmiDetails.advice}
              </p>
              <div className="pt-2 border-t border-white/10">
                <Link
                  href="/contact"
                  className="block w-full py-3 bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-oswald text-xs sm:text-sm uppercase font-bold tracking-wider rounded-sm transition-colors text-center shadow-md"
                >
                  Discuss Workout Routine
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. MARQUEE STRIP — Verified Business Facts                  */}
      {/* ============================================================ */}
      <div className="bg-[#ff2a3b] py-3 text-white font-oswald font-bold uppercase text-xs sm:text-sm tracking-wider marquee-container">
        <div className="marquee-content flex gap-8 items-center">
          <span>• OPEN 24/7 IN HATHIJAN CIRCLE</span>
          <span>• 250+ ACTIVE MEMBERS</span>
          <span>• 40+ STRENGTH &amp; CARDIO MACHINES</span>
          <span>• CERTIFIED FLOOR COACHES</span>
          <span>• DEMO SESSION AVAILABLE (₹500)</span>
          <span>• AIR-CONDITIONED FACILITY</span>
          <span>• OPEN 24/7 IN HATHIJAN CIRCLE</span>
          <span>• 250+ ACTIVE MEMBERS</span>
          <span>• 40+ STRENGTH &amp; CARDIO MACHINES</span>
          <span>• CERTIFIED FLOOR COACHES</span>
          <span>• DEMO SESSION AVAILABLE (₹500)</span>
          <span>• AIR-CONDITIONED FACILITY</span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 11. ENQUIRY & VISIT SECTION                                  */}
      {/* ============================================================ */}
      <section id="enquiry" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="eyebrow text-xs sm:text-sm text-[#ff2a3b] font-bold block mb-1">
                HATHIJAN CIRCLE • AHMEDABAD
              </span>
              <h2 className="text-3xl sm:text-5xl font-oswald font-bold uppercase text-white leading-tight">
                Visit Armour <span className="text-[#ff2a3b]">24-7 Gym</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mt-3 font-body">
                Located at C-601, 602 Shalin Square, Hathijan Circle. Walk in to inspect the machines or submit an inquiry for membership plans.
              </p>
            </div>

            <div className="bg-[#141414] border border-white/10 p-6 rounded-sm space-y-3.5 text-xs sm:text-sm text-gray-300 font-body">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ff2a3b] shrink-0 mt-0.5" />
                <p>
                  C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad, Gujarat 382445
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#ff2a3b] shrink-0" />
                <p>Biometric Access: 24/7 • Front Desk: 06:00 AM – 10:00 PM</p>
              </div>
              <div className="pt-2 border-t border-white/10">
                <a
                  href="https://maps.app.goo.gl/fdHFDqTDaHNvw5Pf6"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#ff2a3b] font-semibold hover:underline"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open Directions on Google Maps ↗</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <LeadForm />
          </div>
        </div>
      </section>

    </div>
  );
}
