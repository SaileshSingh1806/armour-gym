"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { ButtonLink, Container, SectionTitle } from "./ui";

function describe(bmi: number) {
  if (bmi < 18.5) {
    return {
      category: "Underweight range",
      tone: "border-amber-400/40 text-amber-300",
      advice:
        "Focus on structured strength training with a nutrient-rich caloric surplus to build lean muscle mass.",
    };
  }
  if (bmi <= 24.9) {
    return {
      category: "Normal range",
      tone: "border-emerald-400/40 text-emerald-300",
      advice:
        "A healthy general baseline. Focus on progressive strength, stamina and overall body composition.",
    };
  }
  if (bmi <= 29.9) {
    return {
      category: "Overweight range",
      tone: "border-amber-400/40 text-amber-300",
      advice:
        "Combine resistance training with cardio and moderate calorie management to improve body composition.",
    };
  }
  return {
    category: "Higher range",
    tone: "border-[#C8010A]/50 text-[#FF858A]",
    advice:
      "Prioritize low-impact, joint-friendly cardio, progressive functional movements and structured nutrition planning.",
  };
}

export default function Bmi() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);

  const meters = height / 100;
  const bmi = Math.round((weight / (meters * meters)) * 10) / 10;
  const result = describe(bmi);

  return (
    <section id="bmi" className="bg-[#0a0a0a] py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionTitle
              title="BMI calculator"
              lead="Estimate your Body Mass Index as a basic starting point."
            />
            <p className="mt-8 flex max-w-[52ch] items-start gap-3 font-body text-sm leading-relaxed text-gray-400">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-gray-500" aria-hidden="true" />
              <span>
                BMI is a ratio of weight to height. It does not measure body fat or muscle mass and
                is not a medical diagnosis or training prescription. Speak with our coaches for a
                personal assessment.
              </span>
            </p>
          </div>

          <div className="grid gap-8  border border-white/12 bg-[#141414] p-6 sm:p-8 md:grid-cols-2 lg:col-span-7">
            <div className="space-y-8">
              <div>
                <div className="flex items-baseline justify-between">
                  <label htmlFor="heightRange" className="font-body text-sm font-semibold text-gray-200">
                    Height
                  </label>
                  <span className="font-oswald text-2xl font-semibold text-white">
                    {height} <span className="font-body text-sm font-normal text-gray-400">cm</span>
                  </span>
                </div>
                <input
                  id="heightRange"
                  type="range"
                  min={130}
                  max={220}
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-[#2a2a2a] accent-[#C8010A]"
                />
                <div className="mt-1.5 flex justify-between font-body text-xs text-gray-500">
                  <span>130 cm</span>
                  <span>220 cm</span>
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between">
                  <label htmlFor="weightRange" className="font-body text-sm font-semibold text-gray-200">
                    Weight
                  </label>
                  <span className="font-oswald text-2xl font-semibold text-white">
                    {weight} <span className="font-body text-sm font-normal text-gray-400">kg</span>
                  </span>
                </div>
                <input
                  id="weightRange"
                  type="range"
                  min={40}
                  max={150}
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-[#2a2a2a] accent-[#C8010A]"
                />
                <div className="mt-1.5 flex justify-between font-body text-xs text-gray-500">
                  <span>40 kg</span>
                  <span>150 kg</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between  bg-[#0a0a0a] p-6" aria-live="polite">
              <div>
                <p className="font-body text-sm text-gray-400">Your BMI</p>
                <p className="mt-1 font-oswald text-7xl font-semibold leading-none text-white">
                  {bmi}
                </p>
                <span
                  className={`mt-4 inline-block rounded-full border px-3 py-1 font-body text-xs font-semibold ${result.tone}`}
                >
                  {result.category}
                </span>
                <p className="mt-4 font-body text-sm leading-relaxed text-gray-300">
                  {result.advice}
                </p>
              </div>
              <div className="mt-6">
                <ButtonLink href="/contact" variant="outline" className="w-full">
                  Discuss a workout routine
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
