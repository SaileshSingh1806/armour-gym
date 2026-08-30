"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import {
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Award,
  ShieldCheck,
  Clock,
  Sparkles,
  Zap,
  Flame,
  Activity,
} from "lucide-react";

// Programs data for tabbed section
const programsData = {
  strength: {
    title: "Strength & Power Training",
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    desc: "Build raw strength and explosive power with our periodized training programs. Using progressive overload principles, our certified coaches will guide you through compound movements, isolation exercises, and advanced techniques to maximize muscle growth and performance.",
    stats: [
      { val: "12", label: "Week Programs", isBrand: true },
      { val: "5x", label: "Per Week", isBrand: false },
      { val: "60", label: "Min Sessions", isBrand: false },
      { val: "All", label: "Levels", isBrand: true },
    ],
  },
  cardio: {
    title: "HIIT & Cardio Blast",
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    desc: "Ignite your metabolism with our high-intensity interval training sessions. Designed to burn maximum calories in minimum time, our cardio programs combine treadmill intervals, cycling, rowing, and functional circuits for a full-body cardiovascular experience.",
    stats: [
      { val: "800+", label: "Cal/Session", isBrand: true },
      { val: "4x", label: "Per Week", isBrand: false },
      { val: "45", label: "Min Sessions", isBrand: false },
      { val: "All", label: "Levels", isBrand: true },
    ],
  },
  yoga: {
    title: "Yoga & Flexibility",
    badge: "Mindful",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    desc: "Find your balance between strength and flexibility. Our yoga programs blend traditional Hatha, Vinyasa flow, and power yoga to improve mobility, reduce stress, and enhance mind-body connection. Perfect for recovery days or as a standalone practice.",
    stats: [
      { val: "8", label: "Week Programs", isBrand: true },
      { val: "3x", label: "Per Week", isBrand: false },
      { val: "75", label: "Min Sessions", isBrand: false },
      { val: "All", label: "Levels", isBrand: true },
    ],
  },
  crossfit: {
    title: "CrossFit WOD",
    badge: "Intense",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    desc: "Challenge yourself with constantly varied, high-intensity functional movements. Our CrossFit programming includes Olympic lifts, gymnastics, and metabolic conditioning to build well-rounded fitness. Compete against yourself and the community.",
    stats: [
      { val: "∞", label: "Ongoing", isBrand: true },
      { val: "5x", label: "Per Week", isBrand: false },
      { val: "60", label: "Min Sessions", isBrand: false },
      { val: "Int+", label: "Level", isBrand: true },
    ],
  },
  boxing: {
    title: "Boxing & MMA",
    badge: "New",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=80",
    desc: "Learn the sweet science of boxing and mixed martial arts. From footwork and technique to sparring and conditioning, our combat programs build confidence, coordination, and explosive power. No prior experience needed.",
    stats: [
      { val: "10", label: "Week Programs", isBrand: true },
      { val: "3x", label: "Per Week", isBrand: false },
      { val: "90", label: "Min Sessions", isBrand: false },
      { val: "All", label: "Levels", isBrand: true },
    ],
  },
};

// Weekly Schedule data
const scheduleData: Record<string, Array<{ time: string; title: string; trainer: string; room: string; duration: string; isHighlight?: boolean }>> = {
  monday: [
    { time: "06:00", title: "Morning Yoga", trainer: "Emily Chen", room: "Studio A", duration: "60 min" },
    { time: "08:00", title: "CrossFit WOD", trainer: "Coach Vikram", room: "Box Arena", duration: "60 min" },
    { time: "10:00", title: "HIIT Cardio", trainer: "Coach Ananya", room: "Studio B", duration: "45 min" },
    { time: "14:00", title: "Strength Training", trainer: "Coach Kabir", room: "Main Floor", duration: "75 min", isHighlight: true },
    { time: "17:00", title: "Boxing Fundamentals", trainer: "Coach Devendra", room: "Boxing Ring", duration: "90 min" },
    { time: "19:30", title: "Evening Power", trainer: "Coach Vikram", room: "Main Floor", duration: "60 min" },
  ],
  tuesday: [
    { time: "07:00", title: "Spin Class", trainer: "Coach Ananya", room: "Cycle Room", duration: "45 min" },
    { time: "09:30", title: "Pilates", trainer: "Coach Maya", room: "Studio A", duration: "60 min" },
    { time: "12:00", title: "Power Lunch Express", trainer: "Coach Kabir", room: "Studio B", duration: "30 min", isHighlight: true },
    { time: "16:00", title: "Olympic Lifting", trainer: "Coach Vikram", room: "Platform", duration: "75 min" },
    { time: "20:00", title: "Night Burn", trainer: "Coach Ananya", room: "Studio B", duration: "45 min" },
  ],
  wednesday: [
    { time: "06:30", title: "Morning Burn", trainer: "Coach Ananya", room: "Studio A", duration: "45 min" },
    { time: "09:00", title: "Functional Training", trainer: "Coach Vikram", room: "Main Floor", duration: "60 min" },
    { time: "12:00", title: "Power Hour", trainer: "Coach Kabir", room: "Studio B", duration: "60 min", isHighlight: true },
    { time: "15:00", title: "MMA Conditioning", trainer: "Coach Devendra", room: "Boxing Ring", duration: "90 min" },
    { time: "18:30", title: "Vinyasa Flow", trainer: "Coach Maya", room: "Yoga Studio", duration: "75 min" },
  ],
  thursday: [
    { time: "07:00", title: "Athletic Mobility", trainer: "Coach Maya", room: "Studio A", duration: "50 min" },
    { time: "09:30", title: "Power Hypertrophy", trainer: "Coach Kabir", room: "Main Floor", duration: "75 min" },
    { time: "12:30", title: "Core & Abs Blast", trainer: "Coach Ananya", room: "Studio B", duration: "40 min", isHighlight: true },
    { time: "17:00", title: "Combat Striking", trainer: "Coach Devendra", room: "Boxing Ring", duration: "75 min" },
    { time: "19:00", title: "Heavy Barbell Squad", trainer: "Coach Vikram", room: "Platform", duration: "60 min" },
  ],
  friday: [
    { time: "06:30", title: "Fast Metabolic HIIT", trainer: "Coach Ananya", room: "Studio A", duration: "45 min" },
    { time: "09:00", title: "Full Body Sculpt", trainer: "Coach Kabir", room: "Main Floor", duration: "60 min" },
    { time: "12:00", title: "Lunch Deadlift Clinic", trainer: "Coach Vikram", room: "Platform", duration: "60 min", isHighlight: true },
    { time: "16:30", title: "Friday Fight Club", trainer: "Coach Devendra", room: "Boxing Ring", duration: "90 min" },
    { time: "19:00", title: "Weekend Warmup Flow", trainer: "Coach Maya", room: "Yoga Studio", duration: "60 min" },
  ],
  saturday: [
    { time: "08:00", title: "Weekend Warrior Boot Camp", trainer: "Coach Ananya", room: "Turf Area", duration: "75 min" },
    { time: "10:00", title: "Strongman & Tire Flips", trainer: "Coach Vikram", room: "Outdoor Yard", duration: "90 min", isHighlight: true },
    { time: "12:30", title: "Yin Yoga & Deep Stretch", trainer: "Coach Maya", room: "Yoga Studio", duration: "60 min" },
    { time: "15:00", title: "Open Sparring & Ring", trainer: "Coach Devendra", room: "Boxing Ring", duration: "60 min" },
  ],
};

// Testimonials data
const testimonialItems = [
  {
    quote: "Armour 24-7 Gym didn't just transform my body — it transformed my entire mindset. I walk taller, I think bigger, I live bolder.",
    name: "Jessica Torres",
    role: "Professional Athlete",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  },
  {
    quote: "The community at Armour 24-7 is incredible. Everyone from the coaches to fellow members pushes you to be your absolute best.",
    name: "Robert Kim",
    role: "Fitness Enthusiast",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
  },
];

// Blog posts
const blogPosts = [
  {
    title: "5 Compound Exercises That Build Total-Body Strength",
    category: "Training",
    date: "Dec 15, 2025",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "The Ultimate Guide to Pre & Post Workout Nutrition",
    category: "Nutrition",
    date: "Dec 10, 2025",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
    desc: "Fuel your performance and optimize recovery with the right nutrients at the right time.",
  },
  {
    title: "Why Flexibility Training Is the Missing Piece in Your Routine",
    category: "Wellness",
    date: "Dec 5, 2025",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
    desc: "Improve mobility, prevent injury, and enhance performance with dedicated stretching sessions.",
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<keyof typeof programsData>("strength");
  const [selectedDay, setSelectedDay] = useState<string>("monday");
  const [testimonialIndex, setTestimonialIndex] = useState<number>(0);

  // Smart BMI Calculator State
  const [bmiGender, setBmiGender] = useState<"male" | "female">("male");
  const [bmiHeight, setBmiHeight] = useState<number>(166);
  const [bmiWeight, setBmiWeight] = useState<number>(69);

  const currentProgram = programsData[activeTab];
  const currentTestimonial = testimonialItems[testimonialIndex];

  // Dynamic BMI Calculations
  const heightInMeters = bmiHeight / 100;
  const bmiValue = parseFloat((bmiWeight / (heightInMeters * heightInMeters)).toFixed(1));
  const minIdealWeight = Math.round(18.5 * heightInMeters * heightInMeters);
  const maxIdealWeight = Math.round(24.9 * heightInMeters * heightInMeters);

  const getBmiDetails = () => {
    if (bmiValue < 18.5) {
      return {
        category: "UNDERWEIGHT / LEAN MASS DEFICIT",
        badgeStyle: "border-cyan-500/50 bg-cyan-950/40 text-cyan-400",
        advice: "Focus on progressive overload hypertrophy training with a nutrient-dense caloric surplus to build dense muscle mass.",
        protocol: "HYPERTROPHY & LEAN BULKING PROTOCOL",
        goalParam: "muscle-gain",
      };
    } else if (bmiValue <= 24.9) {
      return {
        category: "OPTIMAL ATHLETIC / NORMAL",
        badgeStyle: "border-emerald-500/50 bg-emerald-950/40 text-emerald-400",
        advice: "Great foundation! Focus on explosive athletic power, heavy barbell compound mechanics, and muscle conditioning.",
        protocol: "POWERLIFTING & ATHLETIC PERFORMANCE PROTOCOL",
        goalParam: "powerlifting",
      };
    } else if (bmiValue <= 29.9) {
      return {
        category: "OVERWEIGHT / HIGH MASS",
        badgeStyle: "border-amber-500/50 bg-amber-950/40 text-amber-400",
        advice: "Combine metabolic weight loss cardio with hypertrophy workouts and caloric deficit.",
        protocol: "FAT LOSS & BODY RECOMPOSITION PROTOCOL",
        goalParam: "fat-loss",
      };
    } else {
      return {
        category: "OBESE / TRANSFORMATION PRIORITY",
        badgeStyle: "border-red-500/50 bg-red-950/40 text-red-400",
        advice: "Prioritize joint-friendly cardiovascular conditioning, metabolic fat burn circuits, and targeted macronutrient discipline.",
        protocol: "INTENSIVE METABOLIC TRANSFORMATION PROTOCOL",
        goalParam: "fat-loss",
      };
    }
  };

  const bmiDetails = getBmiDetails();

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      
      {/* ============================================================ */}
      {/* 1. HERO — Split Screen (Armour 24-7 Crimson Red Theme) */}
      {/* ============================================================ */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative gs-hero-section">
        {/* Left Content */}
        <div className="flex items-center px-8 md:px-16 lg:px-20 pt-36 pb-20 lg:pt-0 lg:pb-0 relative gs-hero-left">
          <div className="grid-pattern absolute inset-0 opacity-40 pointer-events-none" />
          <div className="relative z-10 max-w-xl">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2.5 h-2.5 bg-[#ff2a3b] rounded-full animate-pulse shadow-[0_0_10px_#ff2a3b]" />
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#ff2a3b] font-oswald">
                Fitness Redefined • Ahmedabad 382445
              </span>
            </div>

            {/* Title with Clean Non-Intersecting Solid & Red Outline Text */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-oswald font-bold uppercase leading-[0.92] mb-8">
              Forge Your<br />
              <span className="text-outline-brand inline-block my-1 tracking-wider">STRONGEST</span><br />
              Self <span className="text-[#ff2a3b]">Today</span>
            </h1>

            <p className="text-gray-300 leading-relaxed mb-10 max-w-md text-sm sm:text-base font-body">
              Discover a new approach to fitness with personalized training, cutting-edge equipment, and a community that celebrates every milestone at Armour 24-7 Gym Ahmedabad.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                href="/contact"
                className="bg-[#ff2a3b] text-white font-oswald font-bold uppercase text-sm px-10 py-4 tracking-widest hover:bg-white hover:text-black transition-all rounded-sm inline-flex items-center gap-3 shadow-[0_0_25px_rgba(255,42,59,0.4)]"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-[#ff2a3b] transition-colors underline underline-offset-4 decoration-[#ff2a3b]/40 hover:decoration-[#ff2a3b]"
              >
                Our Story
              </Link>
            </div>

            {/* Mini stats */}
            <div className="flex gap-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <span className="text-3xl font-oswald font-bold text-[#ff2a3b]">24/7</span>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Biometric Access</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-oswald font-bold text-white">200+</span>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Trainers &amp; Rigs</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-oswald font-bold text-white">15K</span>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Active Members</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Image with Floating Glass Cards */}
        <div className="relative hidden lg:block overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80"
            alt="Armour 24-7 Gym Athlete"
            fill
            priority
            sizes="50vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0a] to-transparent h-36" />

          {/* Floating Glass Card */}
          <div className="absolute bottom-16 left-8 glass p-5 rounded-lg max-w-xs shadow-2xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#ff2a3b] rounded-lg flex items-center justify-center text-white shadow-md">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-oswald font-bold uppercase text-white">Today&apos;s Progress</p>
                <p className="text-[10px] text-gray-400">8,450 calories burned</p>
              </div>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1.5 mt-2">
              <div className="bg-[#ff2a3b] h-1.5 rounded-full" style={{ width: "78%" }} />
            </div>
          </div>

          {/* Floating Rating Badge */}
          <div className="absolute top-32 right-8 glass p-4 rounded-lg text-center shadow-2xl">
            <span className="text-3xl font-oswald font-bold text-[#ff2a3b] block leading-none">4.9</span>
            <div className="flex text-[#ff2a3b] justify-center my-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <p className="text-[9px] text-gray-400 uppercase">Rating</p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. PROGRAMS — Interactive Tabbed Component */}
      {/* ============================================================ */}
      <section id="programs" className="py-28 px-6 bg-[#0f0f0f] relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-2 h-2 bg-[#ff2a3b] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff2a3b] font-oswald">
                Our Programs
              </span>
              <div className="w-2 h-2 bg-[#ff2a3b] rounded-full" />
            </div>
            <h2 className="text-4xl md:text-6xl font-oswald font-bold uppercase leading-tight text-white">
              Training <span className="text-[#ff2a3b]">Programs</span>
            </h2>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {(["strength", "cardio", "yoga", "crossfit", "boxing"] as const).map((tab) => {
              const isCurrent = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-oswald font-bold uppercase text-sm tracking-wider transition-all rounded-sm cursor-pointer ${
                    isCurrent
                      ? "bg-[#ff2a3b] text-white shadow-[0_0_20px_rgba(255,42,59,0.35)]"
                      : "bg-[#1a1a1a] text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center animate-in fade-in duration-300">
            <div className="relative overflow-hidden rounded-sm h-[450px]">
              <Image
                src={currentProgram.image}
                alt={currentProgram.title}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#ff2a3b] text-white px-3 py-1 text-[10px] font-bold uppercase font-oswald shadow-md">
                {currentProgram.badge}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-oswald font-bold uppercase mb-4 text-white">
                {currentProgram.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {currentProgram.desc}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {currentProgram.stats.map((st, i) => (
                  <div key={i} className="glass p-4 rounded-sm">
                    <p className={`text-2xl font-oswald font-bold ${st.isBrand ? "text-[#ff2a3b]" : "text-white"}`}>
                      {st.val}
                    </p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">{st.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-oswald font-bold uppercase text-sm px-8 py-3.5 tracking-widest transition-all rounded-sm inline-block shadow-lg"
              >
                Enroll Now
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. FEATURES — Icon Grid ("The Armour 24-7 Difference") */}
      {/* ============================================================ */}
      <section className="py-28 px-6 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#ff2a3b]/5 rounded-full blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#ff2a3b]/3 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-2 h-2 bg-[#ff2a3b] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff2a3b] font-oswald">
                Why Choose Us
              </span>
              <div className="w-2 h-2 bg-[#ff2a3b] rounded-full" />
            </div>
            <h2 className="text-4xl md:text-6xl font-oswald font-bold uppercase leading-tight text-white">
              The Armour 24-7 <span className="text-outline-brand inline-block tracking-wider">Difference</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-8 glass rounded-sm group hover:bg-[#ff2a3b]/5 transition-colors duration-500">
              <div className="w-16 h-16 mx-auto bg-[#ff2a3b]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#ff2a3b] transition-colors duration-300">
                <Award className="w-7 h-7 text-[#ff2a3b] group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-oswald font-bold uppercase text-lg mb-2 text-white">Modern Equipment</h4>
              <p className="text-xs text-gray-400 leading-relaxed">State-of-the-art machines and free weights from Eleiko &amp; Hammer Strength.</p>
            </div>

            <div className="text-center p-8 glass rounded-sm group hover:bg-[#ff2a3b]/5 transition-colors duration-500">
              <div className="w-16 h-16 mx-auto bg-[#ff2a3b]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#ff2a3b] transition-colors duration-300">
                <Sparkles className="w-7 h-7 text-[#ff2a3b] group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-oswald font-bold uppercase text-lg mb-2 text-white">Expert Coaches</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Certified trainers with 10+ years of national and professional experience.</p>
            </div>

            <div className="text-center p-8 glass rounded-sm group hover:bg-[#ff2a3b]/5 transition-colors duration-500">
              <div className="w-16 h-16 mx-auto bg-[#ff2a3b]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#ff2a3b] transition-colors duration-300">
                <Clock className="w-7 h-7 text-[#ff2a3b] group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-oswald font-bold uppercase text-lg mb-2 text-white">24/7 Access</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Train whenever suits you with round-the-clock biometric facility access.</p>
            </div>

            <div className="text-center p-8 glass rounded-sm group hover:bg-[#ff2a3b]/5 transition-colors duration-500">
              <div className="w-16 h-16 mx-auto bg-[#ff2a3b]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#ff2a3b] transition-colors duration-300">
                <ShieldCheck className="w-7 h-7 text-[#ff2a3b] group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-oswald font-bold uppercase text-lg mb-2 text-white">Safe Environment</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Clean, secure, and CCTV monitored facilities for worry-free training in Ahmedabad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. GALLERY — Masonry Grid ("Inside Armour 24-7") */}
      {/* ============================================================ */}
      <section id="gallery" className="py-28 px-6 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <span className="text-[18rem] font-oswald font-bold leading-none tracking-tighter">ARMOUR</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-2 h-2 bg-[#ff2a3b] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff2a3b] font-oswald">
                Our Facility
              </span>
              <div className="w-2 h-2 bg-[#ff2a3b] rounded-full" />
            </div>
            <h2 className="text-4xl md:text-6xl font-oswald font-bold uppercase leading-tight text-white">
              Inside <span className="text-[#ff2a3b]">Armour 24-7 Gym</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Big tile */}
            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-sm min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80"
                alt="Main Floor"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                <span className="font-oswald font-bold uppercase text-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-white">
                  Main Floor
                </span>
              </div>
            </div>

            {/* Small tiles */}
            <div className="relative group overflow-hidden rounded-sm h-48">
              <Image
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80"
                alt="Weight Room"
                fill
                sizes="25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                <span className="font-oswald font-bold uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  Weight Room
                </span>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-sm h-48">
              <Image
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80"
                alt="Yoga Studio"
                fill
                sizes="25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                <span className="font-oswald font-bold uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  Yoga Studio
                </span>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-sm h-48">
              <Image
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80"
                alt="Cardio Zone"
                fill
                sizes="25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                <span className="font-oswald font-bold uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  Cardio Zone
                </span>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-sm h-48">
              <Image
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=600&q=80"
                alt="Boxing Ring"
                fill
                sizes="25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                <span className="font-oswald font-bold uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  Boxing Ring
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. COUNTERS — Parallax Break */}
      {/* ============================================================ */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80"
            alt="Gym background"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/85" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="text-5xl md:text-6xl font-oswald font-bold text-[#ff2a3b] block leading-none">15K+</span>
            <div className="w-8 h-[2px] bg-[#ff2a3b] mx-auto my-3" />
            <p className="text-xs text-gray-300 uppercase tracking-wider font-bold">Happy Members</p>
          </div>

          <div>
            <span className="text-5xl md:text-6xl font-oswald font-bold text-white block leading-none">200+</span>
            <div className="w-8 h-[2px] bg-white/20 mx-auto my-3" />
            <p className="text-xs text-gray-300 uppercase tracking-wider font-bold">Expert Trainers</p>
          </div>

          <div>
            <span className="text-5xl md:text-6xl font-oswald font-bold text-white block leading-none">50+</span>
            <div className="w-8 h-[2px] bg-white/20 mx-auto my-3" />
            <p className="text-xs text-gray-300 uppercase tracking-wider font-bold">Training Stations</p>
          </div>

          <div>
            <span className="text-5xl md:text-6xl font-oswald font-bold text-[#ff2a3b] block leading-none">24/7</span>
            <div className="w-8 h-[2px] bg-[#ff2a3b] mx-auto my-3" />
            <p className="text-xs text-gray-300 uppercase tracking-wider font-bold">Always Open</p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. SCHEDULE — Visual Timeline */}
      {/* ============================================================ */}
      <section className="py-28 px-6 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-2 h-2 bg-[#ff2a3b] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff2a3b] font-oswald">
                Weekly Schedule
              </span>
              <div className="w-2 h-2 bg-[#ff2a3b] rounded-full" />
            </div>
            <h2 className="text-4xl md:text-6xl font-oswald font-bold uppercase leading-tight text-white">
              Class <span className="text-[#ff2a3b]">Schedule</span>
            </h2>
          </div>

          {/* Day Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].map((day) => {
              const isSelected = selectedDay === day;
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-5 py-2.5 font-oswald font-bold uppercase text-xs tracking-wider transition-all rounded-sm cursor-pointer ${
                    isSelected
                      ? "bg-[#ff2a3b] text-white shadow-[0_0_15px_rgba(255,42,59,0.4)]"
                      : "bg-[#111] border border-white/5 text-gray-400 hover:text-white"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Timeline List */}
          <div className="space-y-3 max-w-4xl mx-auto animate-in fade-in duration-200">
            {scheduleData[selectedDay]?.map((item, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-[80px_1fr_120px] md:grid-cols-[120px_1fr_150px] items-center p-4 rounded-sm transition-colors ${
                  item.isHighlight
                    ? "bg-[#ff2a3b] text-white shadow-[0_0_20px_rgba(255,42,59,0.3)]"
                    : "bg-[#111] border border-white/5 hover:border-[#ff2a3b]/40 text-white"
                }`}
              >
                <span className={`text-sm font-oswald font-bold ${item.isHighlight ? "text-white" : "text-[#ff2a3b]"}`}>
                  {item.time}
                </span>
                <div>
                  <h4 className="font-oswald font-bold uppercase">{item.title}</h4>
                  <p className={`text-[10px] ${item.isHighlight ? "text-white/80" : "text-gray-400"}`}>
                    {item.trainer} • {item.room}
                  </p>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider text-right ${item.isHighlight ? "text-white/80" : "text-gray-400"}`}>
                  {item.duration}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. TESTIMONIAL — Full-width Quote Slider */}
      {/* ============================================================ */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-[#ff2a3b] text-6xl font-oswald leading-none mb-6">&ldquo;</div>
          
          <p className="text-2xl md:text-4xl font-oswald uppercase leading-tight mb-8 text-white">
            {currentTestimonial.quote}
          </p>

          <div className="flex items-center justify-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#ff2a3b]">
              <Image
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-oswald font-bold uppercase text-white">{currentTestimonial.name}</p>
              <p className="text-xs text-gray-400">{currentTestimonial.role}</p>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-10">
            <button
              onClick={() => setTestimonialIndex((prev) => (prev === 0 ? testimonialItems.length - 1 : prev - 1))}
              className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:bg-[#ff2a3b] hover:text-white hover:border-[#ff2a3b] transition-colors cursor-pointer"
              aria-label="Previous quote"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setTestimonialIndex((prev) => (prev === testimonialItems.length - 1 ? 0 : prev + 1))}
              className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:bg-[#ff2a3b] hover:text-white hover:border-[#ff2a3b] transition-colors cursor-pointer"
              aria-label="Next quote"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. BLOG PREVIEW */}
      {/* ============================================================ */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#ff2a3b] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff2a3b] font-oswald">
                  Latest News
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase leading-tight text-white">
                From Our <span className="text-[#ff2a3b]">Blog</span>
              </h2>
            </div>
            <Link
              href="/contact"
              className="text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-[#ff2a3b] transition-colors flex items-center gap-2"
            >
              <span>View All Posts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-56 w-full overflow-hidden rounded-sm mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff2a3b] font-oswald">{post.category}</span>
                  <span className="text-[10px] text-gray-600">•</span>
                  <span className="text-[10px] text-gray-500">{post.date}</span>
                </div>
                <h3 className="font-oswald font-bold uppercase text-lg group-hover:text-[#ff2a3b] transition-colors leading-snug mb-2 text-white">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">{post.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. INTERACTIVE SMART BMI CALCULATOR */}
      {/* ============================================================ */}
      <section id="bmi" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff2a3b]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Flame className="w-4 h-4 text-[#ff2a3b] fill-[#ff2a3b]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff2a3b] font-oswald">
                INTERACTIVE BODY ASSESSOR
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-oswald font-bold uppercase leading-tight text-white">
              SMART <span className="text-[#ff2a3b]">BMI CALCULATOR</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mt-3 font-body">
              Calculate your Body Mass Index (BMI) and discover your ideal weight range &amp; recommended gym protocol.
            </p>
          </div>

          {/* Calculator Card Container */}
          <div className="max-w-4xl mx-auto bg-[#141414] border border-white/10 p-6 sm:p-10 rounded-2xl shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Interactive Controls (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-7">
                {/* Gender Selector */}
                <div>
                  <label className="block text-xs font-oswald uppercase tracking-widest text-gray-400 font-bold mb-2.5">
                    GENDER
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setBmiGender("male")}
                      className={`py-3 px-4 font-oswald font-bold uppercase text-sm tracking-wider rounded-lg transition-all cursor-pointer ${
                        bmiGender === "male"
                          ? "bg-[#ff2a3b] text-white shadow-[0_0_20px_rgba(255,42,59,0.45)]"
                          : "bg-[#1f1f1f] text-gray-400 hover:text-white border border-white/5"
                      }`}
                    >
                      MALE
                    </button>
                    <button
                      type="button"
                      onClick={() => setBmiGender("female")}
                      className={`py-3 px-4 font-oswald font-bold uppercase text-sm tracking-wider rounded-lg transition-all cursor-pointer ${
                        bmiGender === "female"
                          ? "bg-[#ff2a3b] text-white shadow-[0_0_20px_rgba(255,42,59,0.45)]"
                          : "bg-[#1f1f1f] text-gray-400 hover:text-white border border-white/5"
                      }`}
                    >
                      FEMALE
                    </button>
                  </div>
                </div>

                {/* Height Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-oswald uppercase tracking-widest text-gray-400 font-bold">
                      HEIGHT
                    </span>
                    <span className="font-oswald text-lg font-bold text-[#ff2a3b]">
                      {bmiHeight} CM
                    </span>
                  </div>
                  <input
                    type="range"
                    min="120"
                    max="220"
                    value={bmiHeight}
                    onChange={(e) => setBmiHeight(Number(e.target.value))}
                    className="w-full h-2 bg-[#222222] rounded-lg appearance-none cursor-pointer accent-[#ff2a3b]"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1">
                    <span>120 CM</span>
                    <span>170 CM</span>
                    <span>220 CM</span>
                  </div>
                </div>

                {/* Weight Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-oswald uppercase tracking-widest text-gray-400 font-bold">
                      WEIGHT
                    </span>
                    <span className="font-oswald text-lg font-bold text-[#ff2a3b]">
                      {bmiWeight} KG
                    </span>
                  </div>
                  <input
                    type="range"
                    min="35"
                    max="160"
                    value={bmiWeight}
                    onChange={(e) => setBmiWeight(Number(e.target.value))}
                    className="w-full h-2 bg-[#222222] rounded-lg appearance-none cursor-pointer accent-[#ff2a3b]"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1">
                    <span>35 KG</span>
                    <span>95 KG</span>
                    <span>160 KG</span>
                  </div>
                </div>

                {/* Ideal Weight Range Box */}
                <div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-xl">
                  <span className="text-[10px] font-oswald uppercase tracking-widest text-gray-400 font-bold block mb-1">
                    YOUR IDEAL WEIGHT RANGE
                  </span>
                  <div className="font-oswald text-2xl sm:text-3xl font-bold text-white tracking-wide">
                    {minIdealWeight} KG – {maxIdealWeight} KG
                  </div>
                </div>
              </div>

              {/* Right Column: Calculated Results Card (5 cols) */}
              <div className="lg:col-span-5 bg-[#0d0d0d] border border-white/10 p-6 sm:p-8 rounded-xl flex flex-col justify-between text-center shadow-inner">
                <div>
                  <span className="text-xs font-oswald uppercase tracking-widest text-gray-400 font-bold block">
                    YOUR CALCULATED BMI
                  </span>
                  
                  {/* Huge Numeric BMI */}
                  <div className="font-oswald text-6xl sm:text-7xl font-bold text-[#ff2a3b] my-2 leading-none">
                    {bmiValue}
                  </div>

                  {/* Category Badge */}
                  <div className={`inline-block px-4 py-1.5 rounded-full border text-xs font-oswald font-bold uppercase tracking-wider mb-4 ${bmiDetails.badgeStyle}`}>
                    {bmiDetails.category}
                  </div>

                  {/* Advice Snippet */}
                  <p className="text-xs text-gray-300 leading-relaxed max-w-xs mx-auto mb-6">
                    {bmiDetails.advice}
                  </p>
                </div>

                <div>
                  {/* Recommended Protocol Box */}
                  <div className="bg-[#181818] border border-[#ff2a3b]/30 p-3.5 rounded-lg mb-6 text-left">
                    <span className="text-[9px] uppercase font-oswald tracking-widest text-[#ff2a3b] font-bold block">
                      RECOMMENDED GYM PROTOCOL
                    </span>
                    <div className="font-oswald text-sm sm:text-base font-bold text-white uppercase tracking-wider mt-0.5">
                      {bmiDetails.protocol}
                    </div>
                  </div>

                  {/* Action CTA */}
                  <Link
                    href={`/contact?goal=${bmiDetails.goalParam}&bmi=${bmiValue}`}
                    className="w-full py-3.5 px-4 bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-oswald font-bold text-sm sm:text-base uppercase tracking-wider rounded-lg shadow-[0_0_25px_rgba(255,42,59,0.45)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Flame className="w-4 h-4 fill-current" />
                    <span>BOOK FREE TRIAL FOR THIS PLAN</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. BRAND MARQUEE STRIP */}
      {/* ============================================================ */}
      <div className="bg-[#ff2a3b] py-4 border-y border-black/10 marquee-container shadow-2xl">
        <div className="marquee-content font-oswald font-bold uppercase tracking-wider text-sm flex gap-12 items-center text-white">
          <span>• 10+ Years of Experience</span>
          <span>• Become A Member</span>
          <span>• Special 24/7 Member Access</span>
          <span>• Certified Gym Trainers</span>
          <span>• Ahmedabad 382445 Facility</span>
          <span>• 10+ Years of Experience</span>
          <span>• Become A Member</span>
          <span>• Special 24/7 Member Access</span>
          <span>• Certified Gym Trainers</span>
          <span>• Ahmedabad 382445 Facility</span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 11. LEAD CAPTURE PASS (Ahmedabad 382445) */}
      {/* ============================================================ */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-[#ff2a3b] rounded-full shadow-[0_0_10px_#ff2a3b]" />
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#ff2a3b] font-oswald">
                Ahmedabad 382445
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-oswald font-bold uppercase leading-tight text-white">
              Claim Your Free <br />
              <span className="text-[#ff2a3b]">1-Day Workout Pass</span>
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Experience the Armour 24-7 facility at C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad with zero obligation.
            </p>
          </div>
          <div className="lg:col-span-6">
            <LeadForm />
          </div>
        </div>
      </section>

    </div>
  );
}
