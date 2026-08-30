"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  Flame,
  Dumbbell,
  ArrowRight,
  Filter,
  CheckCircle2,
} from "lucide-react";

type ClassItem = {
  id: string;
  name: string;
  category: "Strength" | "HIIT & Cardio" | "Combat" | "Recovery";
  time: string;
  duration: string;
  trainer: string;
  intensity: "Moderate" | "High" | "Extreme";
  zone: string;
  calories: string;
  days: string[];
};

const daysOfWeek = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
const categories = ["ALL", "Strength", "HIIT & Cardio", "Combat", "Recovery"] as const;

const classesData: ClassItem[] = [
  {
    id: "1",
    name: "HEAVY IRON POWERLIFTING",
    category: "Strength",
    time: "06:30 AM - 07:45 AM",
    duration: "75 Min",
    trainer: "Coach Vikram Rathore",
    intensity: "Extreme",
    zone: "Platform Zone A",
    calories: "650+ kcal",
    days: ["MONDAY", "WEDNESDAY", "FRIDAY"],
  },
  {
    id: "2",
    name: "OCTANE HIIT BURN",
    category: "HIIT & Cardio",
    time: "08:00 AM - 08:50 AM",
    duration: "50 Min",
    trainer: "Coach Ananya Patel",
    intensity: "Extreme",
    zone: "Turf & Sprint Track",
    calories: "750+ kcal",
    days: ["MONDAY", "TUESDAY", "THURSDAY", "SATURDAY"],
  },
  {
    id: "3",
    name: "COMBAT BOXING & STRIKING",
    category: "Combat",
    time: "06:00 PM - 07:00 PM",
    duration: "60 Min",
    trainer: "Coach Devendra Singh",
    intensity: "High",
    zone: "Octagon Combat Ring",
    calories: "700+ kcal",
    days: ["MONDAY", "WEDNESDAY", "FRIDAY"],
  },
  {
    id: "4",
    name: "HYPERTROPHY CHEST & BACK",
    category: "Strength",
    time: "07:15 PM - 08:30 PM",
    duration: "75 Min",
    trainer: "Coach Kabir Mehta",
    intensity: "High",
    zone: "Hammer Strength Sector",
    calories: "550+ kcal",
    days: ["TUESDAY", "THURSDAY", "SATURDAY"],
  },
  {
    id: "5",
    name: "ATHLETIC CONDITIONING (KETTLEBELLS & PLYO)",
    category: "HIIT & Cardio",
    time: "07:00 AM - 08:00 AM",
    duration: "60 Min",
    trainer: "Coach Ananya Patel",
    intensity: "High",
    zone: "Functional Rig Area",
    calories: "600+ kcal",
    days: ["TUESDAY", "THURSDAY"],
  },
  {
    id: "6",
    name: "POWER YOGA & HIP MOBILITY",
    category: "Recovery",
    time: "08:30 AM - 09:30 AM",
    duration: "60 Min",
    trainer: "Coach Maya Desai",
    intensity: "Moderate",
    zone: "Zen Studio & Recovery",
    calories: "300+ kcal",
    days: ["WEDNESDAY", "SATURDAY", "SUNDAY"],
  },
  {
    id: "7",
    name: "MIDNIGHT IRON SESSIONS (OPEN RACKS)",
    category: "Strength",
    time: "11:00 PM - 01:00 AM",
    duration: "120 Min",
    trainer: "24/7 Floor Supervisor",
    intensity: "High",
    zone: "Full Main Floor",
    calories: "Self-Paced",
    days: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"],
  },
  {
    id: "8",
    name: "SUNDAY STRONGMAN & TIRE FLIP CLINIC",
    category: "Strength",
    time: "09:00 AM - 10:30 AM",
    duration: "90 Min",
    trainer: "Coach Vikram & Devendra",
    intensity: "Extreme",
    zone: "Outdoor Heavy Yard",
    calories: "850+ kcal",
    days: ["SUNDAY"],
  },
];

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState<string>("MONDAY");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const filteredClasses = classesData.filter((item) => {
    const matchesDay = item.days.includes(selectedDay);
    const matchesCat = selectedCategory === "ALL" || item.category === selectedCategory;
    return matchesDay && matchesCat;
  });

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen py-12 md:py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] border border-[#ff2a3b]/40 text-[#ff2a3b] text-xs font-heading font-bold uppercase tracking-widest mb-4">
          <Calendar className="w-3.5 h-3.5" />
          WEEKLY TRAINING SCHEDULE
        </div>
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white">
          FORGE YOUR <span className="text-[#ff2a3b]">DISCIPLINE</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-gray-400 font-body">
          From high-intensity sunrise metabolic conditioning to midnight open iron racks in Ahmedabad. Choose your session and book your spot.
        </p>
      </div>

      {/* Day Selector Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-white/10">
          {daysOfWeek.map((day) => {
            const isSelected = selectedDay === day;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-5 py-3 font-heading text-base sm:text-lg font-bold uppercase tracking-wider transition-all whitespace-nowrap rounded-sm cursor-pointer ${
                  isSelected
                    ? "bg-[#ff2a3b] text-white shadow-[0_0_20px_rgba(255,42,59,0.4)]"
                    : "bg-[#141414] text-gray-400 hover:text-white hover:bg-white/5 border border-white/10"
                }`}
              >
                <span>{day}</span>
              </button>
            );
          })}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-gray-400 font-heading font-bold uppercase flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5 text-[#ff2a3b]" /> Filter By:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-xs font-heading font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-white text-black font-bold"
                    : "bg-[#141414] text-gray-400 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-gray-400 font-body">
            Showing <strong className="text-[#ff2a3b]">{filteredClasses.length}</strong> sessions for {selectedDay}
          </div>
        </div>
      </div>

      {/* Class Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {filteredClasses.length === 0 ? (
          <div className="bg-[#141414] border border-white/10 p-12 text-center rounded-sm">
            <p className="font-heading text-2xl text-gray-400 uppercase">
              No scheduled group classes for this filter on {selectedDay}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              The gym floor, free weights, and power racks remain OPEN 24/7 for independent workouts.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClasses.map((item) => (
              <div
                key={item.id}
                className="bg-[#141414] border border-white/10 hover:border-[#ff2a3b]/60 p-6 rounded-sm transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_25px_rgba(255,42,59,0.15)] relative overflow-hidden"
              >
                {/* Accent side strip on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff2a3b] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Category & Intensity Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-widest px-2.5 py-0.5 bg-white/10 text-[#ff2a3b] rounded-xs">
                      {item.category}
                    </span>
                    <span
                      className={`text-[10px] font-heading font-bold uppercase tracking-widest px-2 py-0.5 rounded-xs flex items-center gap-1 ${
                        item.intensity === "Extreme"
                          ? "bg-red-950/80 text-red-300 border border-red-500/40"
                          : item.intensity === "High"
                          ? "bg-amber-950/80 text-amber-300 border border-amber-500/40"
                          : "bg-emerald-950/80 text-emerald-300 border border-emerald-500/40"
                      }`}
                    >
                      <Flame className="w-3 h-3" />
                      {item.intensity}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-white group-hover:text-[#ff2a3b] transition-colors leading-tight">
                    {item.name}
                  </h3>

                  {/* Metadata */}
                  <div className="mt-4 space-y-2 text-xs text-gray-400 border-t border-white/5 pt-3">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-white font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#ff2a3b]" />
                        {item.time}
                      </span>
                      <span>({item.duration})</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-gray-300">
                        <User className="w-3.5 h-3.5 text-[#ff2a3b]" />
                        {item.trainer}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px]">
                      <span className="flex items-center gap-1.5">
                        <Dumbbell className="w-3.5 h-3.5 text-gray-500" />
                        {item.zone}
                      </span>
                      <span className="text-[#ff2a3b] font-semibold">{item.calories}</span>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff2a3b]" /> Spot Guarantee
                  </span>
                  <Link
                    href={`/contact?class=${encodeURIComponent(item.name)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#0a0a0a] hover:bg-[#ff2a3b] text-white font-heading text-xs font-bold uppercase tracking-wider border border-white/15 hover:border-[#ff2a3b] transition-all"
                  >
                    <span>RESERVE SPOT</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 24/7 Open Floor Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-[#141414] border border-[#ff2a3b]/30 p-6 sm:p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#ff2a3b] text-white font-black flex items-center justify-center rounded-sm shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading text-2xl font-bold uppercase tracking-wider text-white">
                TRAIN ANYTIME 24/7/365 IN AHMEDABAD
              </h4>
              <p className="text-xs sm:text-sm text-gray-400">
                Group classes are included free with Pro &amp; VIP memberships. Prefer solo lifting at 2 AM? Our biometric doors never close.
              </p>
            </div>
          </div>
          <Link
            href="/pricing"
            className="shrink-0 px-6 py-3 bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-heading text-sm font-bold uppercase tracking-wider transition-all"
          >
            VIEW MEMBERSHIPS
          </Link>
        </div>
      </div>
    </div>
  );
}
