"use client";

import { useState, type FormEvent, useId } from "react";
import { additionalInterests, findMembershipPlan, membershipPlans } from "@/lib/membership";
import { Send, CheckCircle2, AlertCircle, Loader2, MessageSquare } from "lucide-react";

export default function LeadForm({ initialPlan }: { initialPlan?: string }) {
  const requestedPlan = findMembershipPlan(initialPlan);
  const startingProgram: string = requestedPlan?.label ?? membershipPlans[0].label;
  const nameId = useId();
  const phoneId = useId();
  const programId = useId();
  const emailId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: startingProgram,
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website }),
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
      program: startingProgram,
      message: "",
    });
    setWebsite("");
  };

  const whatsappUrl = `https://wa.me/918160697163?text=${encodeURIComponent(
    `Hello Armour 24-7 Gym, I would like to enquire about your membership plans.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nPlan/Program: ${formData.program}`
  )}`;

  return (
    <div className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm relative">
      <div className="mb-6">
        <h3 className="font-oswald text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
          MEMBERSHIP <span className="text-[#C8010A]">ENQUIRY</span>
        </h3>
        <p className="text-sm sm:text-base text-gray-300 mt-1.5 font-body">
          Visit our facility in Hathijan Circle or request plan details. Our front desk will get in touch with you shortly.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-6 bg-[#1a1a1a] border border-[#C8010A]/40 rounded-sm text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-[#C8010A] mx-auto" />
          <h4 className="font-oswald text-2xl font-bold uppercase text-white">
            ENQUIRY RECEIVED
          </h4>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-body">
            Thank you, <strong className="text-white">{formData.name}</strong>. We have received your interest for <strong className="text-[#C8010A]">{formData.program}</strong>. Our team will contact you shortly on {formData.phone}.
          </p>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-oswald text-base font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Connect on WhatsApp Now</span>
            </a>

            <button
              type="button"
              onClick={handleReset}
              className="w-full py-3 text-sm font-oswald font-bold uppercase tracking-wider bg-transparent border border-white/20 text-gray-300 hover:text-white hover:border-white transition-colors rounded-sm cursor-pointer"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot: real visitors and assistive tech do not interact with this field. */}
          <div className="absolute -left-[10000px]" aria-hidden="true">
            <label htmlFor="enquiry-website">Leave this field empty</label>
            <input
              id="enquiry-website"
              type="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          {status === "error" && (
            <div className="p-3 bg-red-950/40 border border-red-500/60 text-red-200 text-sm flex items-center gap-2 rounded-sm" role="alert">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{errorMessage || "Submission failed. Please check your details."}</span>
            </div>
          )}
          {status === "error" && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF858A] underline underline-offset-4"
            >
              <MessageSquare aria-hidden="true" className="size-4" />
              Send your enquiry via WhatsApp instead
            </a>
          )}


          {/* Full Name & Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor={nameId}
                className="block text-sm font-oswald uppercase tracking-wider font-bold text-gray-200 mb-1.5"
              >
                Full Name <span className="text-[#C8010A]">*</span>
              </label>
              <input
                id={nameId}
                type="text"
                required
                autoComplete="name"
                placeholder="Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-white/15 rounded-sm px-4 py-3 text-base text-white placeholder-gray-600 focus:outline-none focus:border-[#C8010A] focus:ring-1 focus:ring-[#C8010A] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor={phoneId}
                className="block text-sm font-oswald uppercase tracking-wider font-bold text-gray-200 mb-1.5"
              >
                Phone Number <span className="text-[#C8010A]">*</span>
              </label>
              <input
                id={phoneId}
                type="tel"
                required
                autoComplete="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-white/15 rounded-sm px-4 py-3 text-base text-white placeholder-gray-600 focus:outline-none focus:border-[#C8010A] focus:ring-1 focus:ring-[#C8010A] transition-colors"
              />
            </div>
          </div>

          {/* Program / Plan Selection */}
          <div>
            <label
              htmlFor={programId}
              className="block text-sm font-oswald uppercase tracking-wider font-bold text-gray-200 mb-1.5"
            >
              Select Plan / Interest
            </label>
            <select
              id={programId}
              value={formData.program}
              onChange={(e) => setFormData({ ...formData, program: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-white/15 rounded-sm px-4 py-3 text-base text-white focus:outline-none focus:border-[#C8010A] focus:ring-1 focus:ring-[#C8010A] transition-colors cursor-pointer"
            >
              {membershipPlans.map((plan) => (
                <option key={plan.id} value={plan.label}>{plan.label}</option>
              ))}
              {additionalInterests.map((interest) => (
                <option key={interest} value={interest}>{interest}</option>
              ))}
            </select>
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor={emailId}
              className="block text-sm font-oswald uppercase tracking-wider font-bold text-gray-200 mb-1.5"
            >
              Email Address <span className="text-gray-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              id={emailId}
              type="email"
              autoComplete="email"
              placeholder="rahul@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-white/15 rounded-sm px-4 py-3 text-base text-white placeholder-gray-600 focus:outline-none focus:border-[#C8010A] focus:ring-1 focus:ring-[#C8010A] transition-colors"
            />
          </div>

          {/* Message / Timing */}
          <div>
            <label
              htmlFor={messageId}
              className="block text-sm font-oswald uppercase tracking-wider font-bold text-gray-200 mb-1.5"
            >
              Notes or Questions <span className="text-gray-400 font-normal lowercase">(optional)</span>
            </label>
            <textarea
              id={messageId}
              rows={2}
              placeholder="Preferred visit time or fitness goals..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-white/15 rounded-sm px-4 py-3 text-base text-white placeholder-gray-600 focus:outline-none focus:border-[#C8010A] focus:ring-1 focus:ring-[#C8010A] transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 bg-[#C8010A] hover:bg-white hover:text-black text-white font-oswald text-base font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer rounded-sm shadow-md"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Submit Enquiry</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
