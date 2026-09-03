"use client";

import { useState, useEffect } from "react";
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
  CheckCircle2,
  X,
  Heart,
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

// Google Reviews Data
const googleReviews = [
  {
    initial: "H",
    name: "HARDIK TRIVEDI",
    time: "1 week ago",
    rating: 5,
    text: "One of the best gyms around. Massive 15,000 sq ft setup with an incredible variety of imported machines. Highly recommended in Hathijan Circle!",
  },
  {
    initial: "S",
    name: "SNEHA MEHTA",
    time: "2 weeks ago",
    rating: 5,
    text: "Good atmosphere, supportive trainers and open 24-7. As a working professional, being able to workout at 11 PM is a game-changer.",
  },
  {
    initial: "R",
    name: "ROHAN DAVE",
    time: "1 month ago",
    rating: 5,
    text: "Clean gym with amazing equipment and friendly staff. Hygiene is top notch and the air conditioning keeps it cool even in summer peak hours.",
  },
  {
    initial: "J",
    name: "JIGNESH JOSHI",
    time: "1 month ago",
    rating: 5,
    text: "Trainer Krish is very supportive, knowledgeable and professional. Guided me through my knee recovery and deadlift posture flawlessly.",
  },
];

// Blog posts with full interactive article content
const blogPosts = [
  {
    id: 1,
    title: "5 Compound Exercises That Build Total-Body Strength",
    category: "Training",
    date: "Dec 15, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80",
    desc: "Master the fundamental movements that recruit maximum muscle fibers, stimulate growth hormones, and forge raw power.",
    content: [
      "Compound exercises are multi-joint movements that work several muscle groups simultaneously. Unlike isolation exercises, compound movements yield the highest hormonal response and functional strength transfer.",
      "1. Barbell Squat: The undisputed king of lower-body development. Squats build immense quadriceps, hamstrings, and core stability.",
      "2. Conventional Deadlift: Tests and builds your entire posterior chain, spinal erectors, and grip strength.",
      "3. Standing Overhead Press: Creates powerful shoulders, triceps, and upper chest density while engaging stabilizing core muscles.",
      "4. Barbell Bench Press: Develops pushing power across the pectorals, anterior deltoids, and triceps.",
      "5. Weighted Pull-Ups / Rows: Builds a wide, thick back (V-taper) and protects shoulders against injury.",
      "At Armour 24-7 Gym, our Eleiko calibrated plates and dedicated Olympic platforms give you the exact pro setup needed to lift heavy safely."
    ],
  },
  {
    id: 2,
    title: "The Ultimate Guide to Pre & Post Workout Nutrition",
    category: "Nutrition",
    date: "Dec 10, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
    desc: "Fuel your performance and optimize recovery with the right nutrients at the right time.",
    content: [
      "Nutrition is 70% of your physical transformation. What you consume before and after strenuous training determines your energy output and muscle recovery speed.",
      "Pre-Workout Window (60-90 min before): Consume complex carbohydrates paired with moderate lean protein (e.g. oats with whey or banana with eggs) to maximize muscle glycogen without digestive sluggishness.",
      "Hydration & Electrolytes: Dehydration by just 2% can reduce your strength and endurance by over 15%. Drink at least 500ml water before stepping onto the gym floor.",
      "Post-Workout Window (Within 45 min): Prioritize fast-absorbing protein (25-35g) and simple carbs to spike insulin, drive amino acids into torn muscle fibers, and kickstart protein synthesis.",
      "Consistency is Key: Hit your daily protein targets (1.6g - 2.2g per kg of body weight) consistently to see compounding results week over week."
    ],
  },
  {
    id: 3,
    title: "Why Flexibility Training Is the Missing Piece in Your Routine",
    category: "Wellness",
    date: "Dec 5, 2025",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
    desc: "Improve mobility, prevent injury, and enhance performance with dedicated stretching sessions.",
    content: [
      "True athletic power requires both maximum tension and full active range of motion. Tight hips, stiff ankles, and rounded upper backs compromise heavy lifting technique.",
      "Dynamic Warmups vs. Static Stretching: Perform dynamic mobility drills (leg swings, world's greatest stretch) before your workout to increase synovial fluid in joints. Save deep static stretching for post-workout when muscles are warm.",
      "Spinal & Hip Health: Spending long hours sitting compresses the lumbar spine and shortens hip flexors. Daily 10-minute mobility drills relieve chronic lower back pain and enhance deep squat depth.",
      "Recovery Acceleration: Foam rolling and mobility work boost circulation, flushing out lactic acid and reducing delayed onset muscle soreness (DOMS)."
    ],
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<keyof typeof programsData>("strength");

  // Selected Blog Article for Interactive Modal
  const [selectedBlog, setSelectedBlog] = useState<(typeof blogPosts)[0] | null>(null);

  // Google Reviews Mobile Slider Autoplay State
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % googleReviews.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Smart BMI Calculator State
  const [bmiGender, setBmiGender] = useState<"male" | "female">("male");
  const [bmiHeight, setBmiHeight] = useState<number>(166);
  const [bmiWeight, setBmiWeight] = useState<number>(69);

  const currentProgram = programsData[activeTab];

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

            {/* Mini stats - New Grand Opening Facility */}
            <div className="flex gap-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <span className="text-3xl font-oswald font-bold text-[#ff2a3b]">24-7</span>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Biometric Access</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-oswald font-bold text-white">15,000</span>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Sq. Ft. Floor Space</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-oswald font-bold text-white">40+</span>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Elite Machines &amp; Rigs</p>
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
            <span className="text-5xl md:text-6xl font-oswald font-bold text-[#ff2a3b] block leading-none">24-7</span>
            <div className="w-8 h-[2px] bg-[#ff2a3b] mx-auto my-3" />
            <p className="text-xs text-gray-300 uppercase tracking-wider font-bold">Biometric Access</p>
          </div>

          <div>
            <span className="text-5xl md:text-6xl font-oswald font-bold text-white block leading-none">15,000</span>
            <div className="w-8 h-[2px] bg-white/20 mx-auto my-3" />
            <p className="text-xs text-gray-300 uppercase tracking-wider font-bold">Sq. Ft. Floor Space</p>
          </div>

          <div>
            <span className="text-5xl md:text-6xl font-oswald font-bold text-white block leading-none">40+</span>
            <div className="w-8 h-[2px] bg-white/20 mx-auto my-3" />
            <p className="text-xs text-gray-300 uppercase tracking-wider font-bold">Imported Machines</p>
          </div>

          <div>
            <span className="text-5xl md:text-6xl font-oswald font-bold text-[#ff2a3b] block leading-none">5+</span>
            <div className="w-8 h-[2px] bg-[#ff2a3b] mx-auto my-3" />
            <p className="text-xs text-gray-300 uppercase tracking-wider font-bold">Certified Coaches</p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. SPECIALIZED LADIES FITNESS PROGRAM */}
      {/* ============================================================ */}
      <section id="ladies-program" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0d0d0d] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Inspiring Women's Workout Image with Floating Glass Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] sm:h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80"
                alt="Ladies Fitness Training at Armour 24-7 Gym"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

              {/* Floating Bottom Badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-black/85 backdrop-blur-md border border-white/15 p-4 rounded-xl flex items-center gap-3.5 shadow-2xl">
                <div className="w-10 h-10 bg-[#ff2a3b]/15 border border-[#ff2a3b]/40 rounded-lg flex items-center justify-center text-[#ff2a3b] shrink-0 shadow-md">
                </div>
                <div>
                  <h4 className="font-oswald font-bold uppercase text-white text-sm tracking-wide">
                    EMPOWERING FEMALE FITNESS IN HATHIJAN CIRCLE
                  </h4>
                  <p className="text-[11px] text-gray-300 font-body">
                    Personal Guidance • Comfortable &amp; Hygienic Setup
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Program Details & 6 Benefit Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow & Title */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-[#ff2a3b] rounded-full shadow-[0_0_8px_#ff2a3b]" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff2a3b] font-oswald">
                  SPECIALIZED LADIES PROGRAM
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-oswald font-bold uppercase leading-tight text-white">
                STRONG IS BEAUTIFUL<br />
                <span className="text-[#ff2a3b]">TRANSFORM WITH CONFIDENCE</span>
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed mt-4 font-body">
                At Armour 24-7 Gym, we provide a safe, respectful, and motivating sanctuary for women of all fitness backgrounds. Whether you want to lose postpartum weight, tone your waistline, or build athletic strength, our dedicated female fitness programs provide expert instruction every step of the way.
              </p>
            </div>

            {/* 6 Benefit Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              
              <div className="bg-[#141414] border border-white/10 p-4 rounded-xl hover:border-[#ff2a3b]/50 transition-colors">
                <div className="flex items-center gap-2 mb-1 text-[#ff2a3b]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <h4 className="font-oswald font-bold uppercase text-sm text-white tracking-wider">
                    TARGETED FAT LOSS
                  </h4>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed pl-6">
                  Scientific high-calorie burn splits combined with sustained macro diets.
                </p>
              </div>

              <div className="bg-[#141414] border border-white/10 p-4 rounded-xl hover:border-[#ff2a3b]/50 transition-colors">
                <div className="flex items-center gap-2 mb-1 text-[#ff2a3b]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <h4 className="font-oswald font-bold uppercase text-sm text-white tracking-wider">
                    BODY TONING &amp; GLUTE FOCUS
                  </h4>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed pl-6">
                  Specialized resistance training for waist trimming and leg curvature.
                </p>
              </div>

              <div className="bg-[#141414] border border-white/10 p-4 rounded-xl hover:border-[#ff2a3b]/50 transition-colors">
                <div className="flex items-center gap-2 mb-1 text-[#ff2a3b]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <h4 className="font-oswald font-bold uppercase text-sm text-white tracking-wider">
                    SAFE &amp; SUPPORTIVE AMBIENCE
                  </h4>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed pl-6">
                  Comfortable, zero-intimidation atmosphere with supportive female peers.
                </p>
              </div>

              <div className="bg-[#141414] border border-white/10 p-4 rounded-xl hover:border-[#ff2a3b]/50 transition-colors">
                <div className="flex items-center gap-2 mb-1 text-[#ff2a3b]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <h4 className="font-oswald font-bold uppercase text-sm text-white tracking-wider">
                    FEMALE TRAINER OPTION
                  </h4>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed pl-6">
                  Experienced certified female fitness coaches dedicated to your progress.
                </p>
              </div>

              <div className="bg-[#141414] border border-white/10 p-4 rounded-xl hover:border-[#ff2a3b]/50 transition-colors">
                <div className="flex items-center gap-2 mb-1 text-[#ff2a3b]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <h4 className="font-oswald font-bold uppercase text-sm text-white tracking-wider">
                    BEGINNER FRIENDLY
                  </h4>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed pl-6">
                  Step-by-step guidance on machine usage without overwhelming workouts.
                </p>
              </div>

              <div className="bg-[#141414] border border-white/10 p-4 rounded-xl hover:border-[#ff2a3b]/50 transition-colors">
                <div className="flex items-center gap-2 mb-1 text-[#ff2a3b]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <h4 className="font-oswald font-bold uppercase text-sm text-white tracking-wider">
                    CONFIDENCE &amp; STAMINA
                  </h4>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed pl-6">
                  Build physical resilience, bone density, and everyday posture.
                </p>
              </div>

            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-oswald text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-[0_0_25px_rgba(255,42,59,0.45)] transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 fill-current" />
                <span>JOIN LADIES FITNESS PROGRAM</span>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. GOOGLE REVIEWS & REPUTATION */}
      {/* ============================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header & Google Score Card Split */}
          <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-8 mb-14">
            <div className="flex flex-col items-center lg:items-start max-w-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-[#ff2a3b] rounded-full shadow-[0_0_8px_#ff2a3b]" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff2a3b] font-oswald">
                  GOOGLE REVIEWS &amp; REPUTATION
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-oswald font-bold uppercase leading-tight text-white">
                WHAT OUR <span className="text-[#ff2a3b]">MEMBERS SAY</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-400 mt-2 font-body">
                Real feedback from lifters and fitness enthusiasts in Hathijan Circle, Ahmedabad.
              </p>
            </div>

            {/* Google Rating Card */}
            <div className="bg-[#141414] border border-white/10 p-5 sm:p-6 rounded-2xl flex items-center gap-6 shadow-2xl shrink-0 w-full sm:w-auto justify-center">
              <div className="text-center pr-6 border-r border-white/10 flex flex-col items-center justify-center">
                <div className="font-oswald text-4xl sm:text-5xl font-bold text-white leading-none">
                  4.9
                </div>
                <div className="flex items-center justify-center gap-1 my-2 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="text-[10px] text-gray-400 font-mono tracking-widest block">
                  OUT OF 5.0
                </span>
              </div>

              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                  <span className="font-bold text-sm text-white">Google Reviews</span>
                </div>
                <p className="text-xs text-gray-300 font-medium">88+ Verified 5-Star Reviews</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#ff2a3b] hover:underline flex items-center gap-1 mt-1 cursor-pointer"
                >
                  <span>View on Google Maps</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Desktop 2x2 Reviews Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {googleReviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-[#141414] border border-white/10 p-6 sm:p-7 rounded-2xl relative group hover:border-[#ff2a3b]/50 transition-all shadow-lg flex flex-col justify-between"
              >
                {/* Decorative Quote Icon */}
                <span className="font-oswald text-5xl font-bold text-white/5 group-hover:text-[#ff2a3b]/20 transition-colors absolute top-4 right-6 select-none leading-none">
                  ””
                </span>

                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 bg-[#ff2a3b] rounded-full flex items-center justify-center text-white font-oswald font-bold text-lg shadow-[0_0_15px_rgba(255,42,59,0.35)] shrink-0">
                      {rev.initial}
                    </div>
                    <div>
                      <h4 className="font-oswald font-bold uppercase text-base text-white tracking-wider leading-tight">
                        {rev.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex text-amber-400">
                          {Array.from({ length: rev.rating }).map((_, rIdx) => (
                            <Star key={rIdx} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                        <span className="text-[11px] text-gray-500 font-mono">• {rev.time}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-300 italic leading-relaxed">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Autoplay Slider (1 card at a time with smooth transition and controls) */}
          <div className="md:hidden">
            <div className="bg-[#141414] border border-white/10 p-6 rounded-2xl relative shadow-xl min-h-[220px] flex flex-col justify-between transition-all duration-300">
              <span className="font-oswald text-5xl font-bold text-white/5 absolute top-4 right-6 select-none leading-none">
                ””
              </span>

              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 bg-[#ff2a3b] rounded-full flex items-center justify-center text-white font-oswald font-bold text-lg shadow-[0_0_15px_rgba(255,42,59,0.35)] shrink-0">
                    {googleReviews[activeReview].initial}
                  </div>
                  <div>
                    <h4 className="font-oswald font-bold uppercase text-base text-white tracking-wider leading-tight">
                      {googleReviews[activeReview].name}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex text-amber-400">
                        {Array.from({ length: googleReviews[activeReview].rating }).map((_, rIdx) => (
                          <Star key={rIdx} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                      <span className="text-[11px] text-gray-500 font-mono">• {googleReviews[activeReview].time}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-300 italic leading-relaxed">
                  &ldquo;{googleReviews[activeReview].text}&rdquo;
                </p>
              </div>

              {/* Slider Controls & Autoplay Indicators */}
              <div className="flex items-center justify-between pt-5 mt-4 border-t border-white/5">
                {/* Dots */}
                <div className="flex items-center gap-1.5">
                  {googleReviews.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setActiveReview(dotIdx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        activeReview === dotIdx
                          ? "w-6 bg-[#ff2a3b]"
                          : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Go to review ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveReview((prev) => (prev === 0 ? googleReviews.length - 1 : prev - 1))}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#ff2a3b] transition-colors cursor-pointer"
                    aria-label="Previous Review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveReview((prev) => (prev + 1) % googleReviews.length)}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#ff2a3b] transition-colors cursor-pointer"
                    aria-label="Next Review"
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
      {/* 8. BLOG PREVIEW & INTERACTIVE ARTICLE READER */}
      {/* ============================================================ */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#ff2a3b] rounded-full shadow-[0_0_8px_#ff2a3b]" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff2a3b] font-oswald">
                  KNOWLEDGE &amp; TIPS
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase leading-tight text-white">
                From Our <span className="text-[#ff2a3b]">Blog</span>
              </h2>
            </div>
            <p className="text-xs font-mono text-gray-400">
              Click any article to read full guide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <div
                key={i}
                onClick={() => setSelectedBlog(post)}
                className="bg-[#141414] border border-white/10 p-4 rounded-xl group cursor-pointer hover:border-[#ff2a3b]/50 transition-all shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden rounded-lg mb-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#ff2a3b] text-white text-[10px] font-oswald font-bold uppercase px-2.5 py-1 rounded-sm shadow-md">
                      {post.category}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-gray-400 mb-2 font-mono">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-oswald font-bold uppercase text-lg group-hover:text-[#ff2a3b] transition-colors leading-snug mb-2 text-white">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                    {post.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ff2a3b] group-hover:underline flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Blog Article Reader Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#141414] border border-white/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/70 hover:bg-[#ff2a3b] text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Banner Image */}
            <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
              <Image
                src={selectedBlog.image}
                alt={selectedBlog.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <span className="bg-[#ff2a3b] text-white text-xs font-oswald font-bold uppercase px-3 py-1 rounded-sm">
                  {selectedBlog.category}
                </span>
                <span className="text-xs text-gray-300 font-mono">• {selectedBlog.date}</span>
                <span className="text-xs text-gray-300 font-mono">• {selectedBlog.readTime}</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-8 space-y-5">
              <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase leading-tight text-white">
                {selectedBlog.title}
              </h2>

              <p className="text-sm text-[#ff2a3b] font-semibold italic border-l-2 border-[#ff2a3b] pl-4">
                {selectedBlog.desc}
              </p>

              <div className="space-y-4 text-sm text-gray-300 leading-relaxed font-body">
                {selectedBlog.content?.map((paragraph, pIdx) => (
                  <p key={pIdx} className={paragraph.startsWith("1.") || paragraph.startsWith("2.") || paragraph.startsWith("3.") || paragraph.startsWith("4.") || paragraph.startsWith("5.") ? "font-semibold text-white pl-2" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Bottom CTA within Article */}
              <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-oswald font-bold uppercase text-white text-base">Ready To Put Knowledge Into Action?</h4>
                  <p className="text-xs text-gray-400">Join Armour 24-7 Gym in Hathijan Circle, Ahmedabad today.</p>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setSelectedBlog(null)}
                  className="px-6 py-3 bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-oswald font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-lg shrink-0"
                >
                  Claim Free Trial Pass
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 9. INTERACTIVE SMART BMI CALCULATOR */}
      {/* ============================================================ */}
      <section id="bmi" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff2a3b]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-2 h-2 bg-[#ff2a3b] rounded-full shadow-[0_0_8px_#ff2a3b]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff2a3b] font-oswald">
                FITNESS ASSESSMENT
              </span>
              <div className="w-2 h-2 bg-[#ff2a3b] rounded-full shadow-[0_0_8px_#ff2a3b]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase leading-tight text-white">
              SMART <span className="text-[#ff2a3b]">BMI CALCULATOR</span>
            </h2>
            <p className="text-sm text-gray-400 mt-2 font-body">
              Calculate your Body Mass Index and discover your optimal workout &amp; nutrition pathway.
            </p>
          </div>

          <div className="bg-[#141414] border border-white/10 p-6 sm:p-10 rounded-2xl shadow-2xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Interactive Controls (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-7">
                {/* Gender Selector */}
                <div>
                  <label className="text-xs font-oswald uppercase tracking-wider text-gray-300 font-bold block mb-3">
                    Select Gender
                  </label>
                  <div className="grid grid-cols-2 gap-4">
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
                    <label className="text-xs font-oswald uppercase tracking-wider text-gray-300 font-bold">
                      Height
                    </label>
                    <span className="font-oswald text-xl font-bold text-white">
                      {bmiHeight} <span className="text-xs text-[#ff2a3b] font-normal">cm</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min="120"
                    max="220"
                    value={bmiHeight}
                    onChange={(e) => setBmiHeight(Number(e.target.value))}
                    className="w-full h-2 bg-[#1f1f1f] rounded-lg appearance-none cursor-pointer accent-[#ff2a3b]"
                  />
                  <div className="flex justify-between text-[10px] text-gray-600 font-mono mt-1">
                    <span>120 cm</span>
                    <span>170 cm</span>
                    <span>220 cm</span>
                  </div>
                </div>

                {/* Weight Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-oswald uppercase tracking-wider text-gray-300 font-bold">
                      Weight
                    </label>
                    <span className="font-oswald text-xl font-bold text-white">
                      {bmiWeight} <span className="text-xs text-[#ff2a3b] font-normal">kg</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min="35"
                    max="160"
                    value={bmiWeight}
                    onChange={(e) => setBmiWeight(Number(e.target.value))}
                    className="w-full h-2 bg-[#1f1f1f] rounded-lg appearance-none cursor-pointer accent-[#ff2a3b]"
                  />
                  <div className="flex justify-between text-[10px] text-gray-600 font-mono mt-1">
                    <span>35 kg</span>
                    <span>95 kg</span>
                    <span>160 kg</span>
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
          <span>• GRAND OPENING IN HATHIJAN CIRCLE</span>
          <span>• 15,000 SQ. FT. PREMIUM ARENA</span>
          <span>• 24/7 BIOMETRIC MEMBER ACCESS</span>
          <span>• 40+ ELITE MACHINES &amp; RIGS</span>
          <span>• 5+ CERTIFIED MASTER COACHES</span>
          <span>• CLAIM FREE 1-DAY WORKOUT PASS</span>
          <span>• GRAND OPENING IN HATHIJAN CIRCLE</span>
          <span>• 15,000 SQ. FT. PREMIUM ARENA</span>
          <span>• 24/7 BIOMETRIC MEMBER ACCESS</span>
          <span>• 40+ ELITE MACHINES &amp; RIGS</span>
          <span>• 5+ CERTIFIED MASTER COACHES</span>
          <span>• CLAIM FREE 1-DAY WORKOUT PASS</span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 11. LEAD CAPTURE PASS (Hathijan Circle, Ahmedabad) */}
      {/* ============================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
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
            <p className="text-sm text-gray-300 leading-relaxed max-w-lg">
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
