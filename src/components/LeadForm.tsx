"use client";

import { useState, FormEvent, useId } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, Phone } from "lucide-react";

export default function LeadForm() {
  const nameId = useId();
  const phoneId = useId();
  const programId = useId();
  const emailId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "Demo Workout Session (₹500)",
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
        throw new Error(errorData.message || "Unable to submit your enquiry. Please call us directly.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Something went wrong. Please call or WhatsApp our front desk.");
      }
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setFormData({
      name: "",
      email: "",
      phone: "",
      program: "Demo Workout Session (₹500)",
      message: "",
    });
  };

  const whatsappUrl = `https://wa.me/918160697163?text=${encodeURIComponent(
    `Hello Armour 24-7 Gym, I have submitted an enquiry on your website.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nPlan/Program: ${formData.program}`
  )}`;

  return (
    <div className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm relative">
      <div className="mb-6">
        <h3 className="font-oswald text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
          MEMBERSHIP <span className="text-[#ff2a3b]">ENQUIRY</span>
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 mt-1 font-body">
          Visit our facility in Hathijan Circle or request plan details. Our front desk will get in touch with you shortly.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-6 bg-[#1a1a1a] border border-[#ff2a3b]/40 rounded-sm text-center space-y-4">
          <CheckCircle2 className="w-10 h-10 text-[#ff2a3b] mx-auto" />
          <h4 className="font-oswald text-xl font-bold uppercase text-white">
            ENQUIRY RECEIVED
          </h4>
          <p className="text-xs text-gray-300 leading-relaxed font-body">
            Thank you, <strong className="text-white">{formData.name}</strong>. We have received your interest for <strong className="text-[#ff2a3b]">{formData.program}</strong>. Our team will contact you shortly on {formData.phone}.
          </p>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-oswald text-sm font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Connect on WhatsApp Now</span>
            </a>

            <button
              type="button"
              onClick={handleReset}
              className="w-full py-2.5 text-xs font-oswald font-bold uppercase tracking-wider bg-transparent border border-white/20 text-gray-300 hover:text-white hover:border-white transition-colors rounded-sm"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "error" && (
            <div className="p-3 bg-red-950/40 border border-red-500/60 text-red-300 text-xs flex items-center gap-2 rounded-sm" role="alert">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage || "Submission failed. Please check your details."}</span>
            </div>
          )}

          {/* Full Name & Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor={nameId}
                className="block text-xs font-oswald uppercase tracking-wider font-semibold text-gray-300 mb-1"
              >
                Full Name <span className="text-[#ff2a3b]">*</span>
              </label>
              <input
                id={nameId}
                type="text"
                required
                autoComplete="name"
                placeholder="Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-white/15 rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ff2a3b] focus:ring-1 focus:ring-[#ff2a3b] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor={phoneId}
                className="block text-xs font-oswald uppercase tracking-wider font-semibold text-gray-300 mb-1"
              >
                Phone Number <span className="text-[#ff2a3b]">*</span>
              </label>
              <input
                id={phoneId}
                type="tel"
                required
                autoComplete="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-white/15 rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ff2a3b] focus:ring-1 focus:ring-[#ff2a3b] transition-colors"
              />
            </div>
          </div>

          {/* Program / Plan Selection */}
          <div>
            <label
              htmlFor={programId}
              className="block text-xs font-oswald uppercase tracking-wider font-semibold text-gray-300 mb-1"
            >
              Select Plan / Interest
            </label>
            <select
              id={programId}
              value={formData.program}
              onChange={(e) => setFormData({ ...formData, program: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-white/15 rounded-sm px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff2a3b] focus:ring-1 focus:ring-[#ff2a3b] transition-colors cursor-pointer"
            >
              <option value="Demo Workout Session (₹500)">Demo Workout Session — ₹500</option>
              <option value="1 Month Membership (₹3,500)">1 Month Membership — ₹3,500</option>
              <option value="3 Months Membership (₹6,500)">3 Months Membership — ₹6,500</option>
              <option value="6 Months Membership (₹9,000)">6 Months Membership — ₹9,000</option>
              <option value="12 Months Membership (₹15,000)">12 Months Membership — ₹15,000</option>
              <option value="1-on-1 Personal Training Enquiry">1-on-1 Personal Training Enquiry</option>
              <option value="Ladies Fitness Program">Ladies Fitness Program</option>
            </select>
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor={emailId}
              className="block text-xs font-oswald uppercase tracking-wider font-semibold text-gray-300 mb-1"
            >
              Email Address <span className="text-gray-500 font-normal lowercase">(optional)</span>
            </label>
            <input
              id={emailId}
              type="email"
              autoComplete="email"
              placeholder="rahul@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-white/15 rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ff2a3b] focus:ring-1 focus:ring-[#ff2a3b] transition-colors"
            />
          </div>

          {/* Message / Timing */}
          <div>
            <label
              htmlFor={messageId}
              className="block text-xs font-oswald uppercase tracking-wider font-semibold text-gray-300 mb-1"
            >
              Notes or Questions <span className="text-gray-500 font-normal lowercase">(optional)</span>
            </label>
            <textarea
              id={messageId}
              rows={2}
              placeholder="Preferred visit time or fitness goals..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-white/15 rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ff2a3b] focus:ring-1 focus:ring-[#ff2a3b] transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-oswald text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer rounded-sm"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Enquiry</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
