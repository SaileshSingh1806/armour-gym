"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, Phone } from "lucide-react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "Standard Gym Membership",
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
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setFormData({
      name: "",
      email: "",
      phone: "",
      program: "Standard Gym Membership",
      message: "",
    });
  };

  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    `Hello Armour 24-7 Gym, I have submitted an enquiry on your website.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nProgram: ${formData.program}`
  )}`;

  return (
    <div className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-xl relative shadow-2xl">
      {/* Decorative Header Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff2a3b] rounded-t-xl" />

      <div className="mb-6">
        <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
          SEND QUICK <span className="text-[#ff2a3b]">MEMBERSHIP ENQUIRY</span>
        </h3>
        <p className="text-xs text-gray-400 mt-1 font-body">
          Experience Ahmedabad’s premier 24/7 strength facility. Our team will contact you within 15 minutes.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-6 bg-[#ff2a3b]/10 border border-[#ff2a3b] rounded-lg text-center space-y-4 animate-in fade-in">
          <CheckCircle2 className="w-12 h-12 text-[#ff2a3b] mx-auto" />
          <h4 className="font-heading text-2xl font-bold uppercase text-white">
            ENQUIRY SUBMITTED SUCCESSFULLY!
          </h4>
          <p className="text-xs text-gray-300 leading-relaxed font-body">
            Thank you, <strong className="text-white">{formData.name}</strong>! Your enquiry for <strong className="text-[#ff2a3b]">{formData.program}</strong> has been received. Our team will contact you shortly within 15 minutes.
          </p>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading text-sm font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Connect on WhatsApp Instantly</span>
            </a>

            <button
              onClick={handleReset}
              className="w-full py-2.5 text-xs font-heading font-bold uppercase tracking-wider bg-transparent border border-white/20 text-gray-300 hover:text-white hover:border-white transition-colors rounded-lg"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "error" && (
            <div className="p-3 bg-red-950/50 border border-red-500 text-red-300 text-xs flex items-center gap-2 rounded-lg">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage || "Submission failed. Please check your details."}</span>
            </div>
          )}

          {/* Full Name & Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-heading uppercase tracking-wider font-semibold text-gray-300 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ff2a3b] focus:ring-1 focus:ring-[#ff2a3b] transition-colors"
              />
            </div>

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
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ff2a3b] focus:ring-1 focus:ring-[#ff2a3b] transition-colors"
              />
            </div>
          </div>

          {/* Program / Service Interest Dropdown */}
          <div>
            <label className="block text-xs font-heading uppercase tracking-wider font-semibold text-gray-300 mb-1.5">
              Program / Service Interest
            </label>
            <select
              value={formData.program}
              onChange={(e) => setFormData({ ...formData, program: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff2a3b] focus:ring-1 focus:ring-[#ff2a3b] transition-colors cursor-pointer"
            >
              <option value="Standard Gym Membership">Standard Gym Membership</option>
              <option value="3-Day Free VIP Trial Pass">3-Day Free VIP Trial Pass</option>
              <option value="1-on-1 Personal Training">1-on-1 Personal Training</option>
              <option value="Ladies Fitness Program">Ladies Fitness Program</option>
              <option value="Weight Loss Transformation">Weight Loss Transformation</option>
            </select>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-heading uppercase tracking-wider font-semibold text-gray-300 mb-1.5">
              Email Address (Optional)
            </label>
            <input
              type="email"
              placeholder="rahul@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ff2a3b] focus:ring-1 focus:ring-[#ff2a3b] transition-colors"
            />
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs font-heading uppercase tracking-wider font-semibold text-gray-300 mb-1.5">
              Additional Notes (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="Preferred workout timing or questions..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ff2a3b] focus:ring-1 focus:ring-[#ff2a3b] transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3.5 bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-heading text-lg font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer shadow-[0_0_25px_rgba(255,42,59,0.45)] rounded-lg"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>SUBMITTING ENQUIRY...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 fill-current" />
                <span>SUBMIT ENQUIRY NOW</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
