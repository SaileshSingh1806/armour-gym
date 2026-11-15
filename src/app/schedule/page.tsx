"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, Dumbbell, ArrowRight, CheckCircle2 } from "lucide-react";

type ClassItem = {
  id: string;
  name: string;
  category: "Strength" | "HIIT & Cardio" | "Functional" | "Mobility";
  time: string;
  duration: string;
  trainer: string;
  zone: string;
  days: string[];
};

const daysOfWeek = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
const categories = ["ALL", "Strength", "HIIT & Cardio", "Functional", "Mobility"] as const;

const classesData: ClassItem[] = [
  {
    id: "1",
    name: "Barbell Strength & Squat Mechanics",
    category: "Strength",
    time: "06:30 AM - 07:30 AM",
    duration: "60 Min",
    trainer: "Strength Coach",
    zone: "Platform Zone A",
    days: ["MONDAY", "WEDNESDAY", "FRIDAY"],
  },
  {
    id: "2",
    name: "Morning Cardio & Interval Blast",
    category: "HIIT & Cardio",
    time: "08:00 AM - 08:45 AM",
    duration: "45 Min",
    trainer: "Conditioning Coach",
    zone: "Cardio & Turf Floor",
    days: ["MONDAY", "TUESDAY", "THURSDAY", "SATURDAY"],
  },
  {
    id: "3",
    name: "Functional Core & Mobility Drills",
    category: "Mobility",
    time: "09:00 AM - 09:45 AM",
    duration: "45 Min",
    trainer: "Floor Coach",
    zone: "Studio Floor",
    days: ["TUESDAY", "THURSDAY", "SATURDAY"],
  },
  {
    id: "4",
    name: "Upper Body Hypertrophy Circuit",
    category: "Strength",
    time: "06:30 PM - 07:30 PM",
    duration: "60 Min",
    trainer: "Strength Coach",
    zone: "Plate-Loaded Machines",
    days: ["MONDAY", "WEDNESDAY", "FRIDAY"],
  },
  {
    id: "5",
    name: "Evening Fat Loss & HIIT Circuit",
    category: "HIIT & Cardio",
    time: "07:30 PM - 08:15 PM",
    duration: "45 Min",
    trainer: "Conditioning Coach",
    zone: "Cardio Line & Dumbbell Area",
    days: ["MONDAY", "TUESDAY", "THURSDAY", "FRIDAY"],
  },
  {
    id: "6",
    name: "Weekend Strength & Form Workshop",
    category: "Functional",
    time: "08:30 AM - 09:45 AM",
    duration: "75 Min",
    trainer: "Head Coach",
    zone: "Main Training Arena",
    days: ["SATURDAY", "SUNDAY"],
  },
];

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState<string>("MONDAY");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const filteredClasses = classesData.filter((c) => {
    const matchesDay = c.days.includes(selectedDay);
    const matchesCategory = selectedCategory === "ALL" || c.category === selectedCategory;
    return matchesDay && matchesCategory;
  });

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-28 md:pt-36 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-oswald uppercase tracking-widest text-[#ff2a3b] font-bold block mb-2">
            Weekly Routine
          </span>
          <h1 className="text-4xl sm:text-6xl font-oswald font-bold uppercase tracking-tight text-white mb-4">
            Floor &amp; Group <span className="text-[#ff2a3b]">Schedule</span>
          </h1>
          <p className="text-xs sm:text-base text-gray-400 font-body leading-relaxed">
            While members have 24/7 self-directed biometric access, organized coach-assisted group batches and form workshops follow the schedule below.
          </p>
        </div>

        {/* Days of the Week Filter */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 border-b border-white/10 pb-4">
          {daysOfWeek.map((day) => (
            <button
              key={day}
              type="button"
              onClick={() => setSelectedDay(day)}
              className={`px-3 sm:px-4 py-2 text-xs font-oswald uppercase font-bold tracking-wider rounded-sm transition-colors cursor-pointer ${
                selectedDay === day
                  ? "bg-[#ff2a3b] text-white"
                  : "bg-[#141414] text-gray-400 hover:text-white"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-oswald uppercase font-semibold rounded-sm transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? "bg-white/20 text-white"
                  : "bg-transparent text-gray-500 hover:text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Classes List */}
        {filteredClasses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {filteredClasses.map((item) => (
              <div
                key={item.id}
                className="bg-[#141414] border border-white/10 rounded-sm p-5 flex flex-col justify-between hover:border-[#ff2a3b]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-oswald font-bold uppercase px-2 py-0.5 rounded-sm bg-[#ff2a3b]/10 text-[#ff2a3b] border border-[#ff2a3b]/30">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-400 font-body flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-500" />
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="font-oswald font-bold uppercase text-lg text-white mb-2">
                    {item.name}
                  </h3>

                  <div className="space-y-1.5 text-xs text-gray-300 font-body mb-5">
                    <p className="flex items-center gap-2">
                      <strong className="text-white">Time:</strong> {item.time}
                    </p>
                    <p className="flex items-center gap-2">
                      <strong className="text-white">Zone:</strong> {item.zone}
                    </p>
                    <p className="flex items-center gap-2">
                      <strong className="text-white">Coach:</strong> {item.trainer}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <Link
                    href={`/contact?class=${encodeURIComponent(item.name)}`}
                    className="w-full py-2 bg-white/10 hover:bg-[#ff2a3b] text-white font-oswald text-xs uppercase font-bold tracking-wider rounded-sm transition-colors text-center block"
                  >
                    Reserve Slot / Enquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-[#141414] border border-white/10 p-10 rounded-sm text-center max-w-md mx-auto my-12">
            <p className="text-sm text-gray-300 font-body mb-3">
              No organized classes scheduled for {selectedDay} in the {selectedCategory} category.
            </p>
            <p className="text-xs text-gray-500 font-body">
              The gym floor is open 24/7 for independent workouts with biometric access.
            </p>
          </div>
        )}

        {/* 24/7 Access Reminder */}
        <div className="bg-[#121212] border border-white/10 p-6 rounded-sm text-center max-w-2xl mx-auto space-y-2">
          <h4 className="font-oswald font-bold uppercase text-sm text-white">
            Looking for Free-Floor Training Outside Class Hours?
          </h4>
          <p className="text-xs text-gray-400 font-body leading-relaxed">
            Registered members have 24/7 round-the-clock biometric entry to use all free weights, squat racks, and machines at any hour.
          </p>
          <div className="pt-2">
            <Link
              href="/pricing"
              className="text-xs text-[#ff2a3b] font-oswald font-bold uppercase hover:underline inline-flex items-center gap-1"
            >
              <span>View 24/7 Membership Plans</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
