"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "muscle-gain",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to submit. Please try again.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        goal: "muscle-gain",
        message: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm relative shadow-2xl">
      {/* Decorative Header Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff2a3b]" />

      <div className="mb-6">
        <div className="inline-block px-2.5 py-0.5 mb-2 text-[10px] font-heading font-bold uppercase tracking-widest bg-[#ff2a3b] text-white">
          FREE 1-DAY PASS
        </div>
        <h3 className="font-heading text-3xl font-bold uppercase tracking-wider text-white">
          CLAIM YOUR <span className="text-[#ff2a3b]">WORKOUT PASS</span>
        </h3>
        <p className="text-xs text-gray-400 mt-1">
          Experience Ahmedabad’s premier 24/7 strength facility. Our team will contact you within 15 minutes.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-6 bg-[#ff2a3b]/10 border border-[#ff2a3b] text-center space-y-3 animate-in fade-in">
          <CheckCircle2 className="w-12 h-12 text-[#ff2a3b] mx-auto" />
          <h4 className="font-heading text-2xl font-bold uppercase text-white">
            YOU&apos;RE ON THE LIST!
          </h4>
          <p className="text-xs text-gray-300">
            Your free 1-day pass has been reserved. Check your phone for SMS confirmation and visit Armour 24-7 Gym Ahmedabad anytime!
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 px-5 py-2 text-xs font-heading font-bold uppercase tracking-wider bg-[#ff2a3b] text-white hover:bg-white hover:text-black transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "error" && (
            <div className="p-3 bg-red-950/50 border border-red-500 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage || "Submission failed. Please check your details."}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-heading uppercase tracking-wider font-semibold text-gray-300 mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-none px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ff2a3b] focus:ring-1 focus:ring-[#ff2a3b] transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-heading uppercase tracking-wider font-semibold text-gray-300 mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-none px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ff2a3b] focus:ring-1 focus:ring-[#ff2a3b] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-heading uppercase tracking-wider font-semibold text-gray-300 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="rahul@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-none px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ff2a3b] focus:ring-1 focus:ring-[#ff2a3b] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-heading uppercase tracking-wider font-semibold text-gray-300 mb-1.5">
              Primary Fitness Objective
            </label>
            <select
              value={formData.goal}
              onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff2a3b] focus:ring-1 focus:ring-[#ff2a3b] transition-colors"
            >
              <option value="muscle-gain">Heavy Hypertrophy &amp; Muscle Gain</option>
              <option value="powerlifting">Powerlifting &amp; Max Strength</option>
              <option value="fat-loss">Fat Loss &amp; Conditioning (HIIT)</option>
              <option value="boxing">Combat &amp; Boxing Training</option>
              <option value="general-fitness">24/7 Lifestyle &amp; General Fitness</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-heading uppercase tracking-wider font-semibold text-gray-300 mb-1.5">
              Additional Notes (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Preferred workout timing or questions..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-none px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ff2a3b] focus:ring-1 focus:ring-[#ff2a3b] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3.5 bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-heading text-lg font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer shadow-[0_0_20px_rgba(255,42,59,0.35)]"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>PROCESSING PASS...</span>
              </>
            ) : (
              <>
                <span>CLAIM FREE PASS NOW</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
