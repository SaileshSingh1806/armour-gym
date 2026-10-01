"use client";

import { useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Flame,
  ArrowRight,
  Gift,
  Lock,
  X,
  CreditCard,
  AlertCircle,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function PreLaunchOffer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          planId: "pre-launch-9999",
          planName: "1-Year Pre-Launch Founder Pass",
          amount: 9999,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to initiate payment order.");
      }

      // If Live Gateway session exists, load payment SDK dynamically
      if (data.isLive && data.payment_session_id) {
        if (!(window as any).Cashfree) {
          const script = document.createElement("script");
          script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
          script.async = true;
          script.onload = () => {
            const cashfree = (window as any).Cashfree({
              mode: data.environment === "PRODUCTION" ? "production" : "sandbox",
            });
            cashfree.checkout({
              paymentSessionId: data.payment_session_id,
              redirectTarget: "_self",
            });
          };
          document.body.appendChild(script);
        } else {
          const cashfree = (window as any).Cashfree({
            mode: data.environment === "PRODUCTION" ? "production" : "sandbox",
          });
          cashfree.checkout({
            paymentSessionId: data.payment_session_id,
            redirectTarget: "_self",
          });
        }
      } else {
        // Direct redirect to payment status confirmation
        window.location.href = `/payment/status?order_id=${data.order_id}&name=${encodeURIComponent(formData.name)}&phone=${encodeURIComponent(formData.phone)}&email=${encodeURIComponent(formData.email)}`;
      }
    } catch (err: any) {
      console.error("Payment error:", err);
      setErrorMsg(err.message || "An error occurred while processing checkout.");
      setLoading(false);
    }
  };

  return (
    <section id="pre-launch-offer" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#ff2a3b]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-[#ff2a3b]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Eyebrow & Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#ff2a3b]/10 border border-[#ff2a3b]/40 rounded-full text-[#ff2a3b] text-xs font-oswald font-bold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(255,42,59,0.2)]">
            <Flame className="w-4 h-4 fill-current animate-pulse" />
            <span>LIMITED PRE-LAUNCH FOUNDER PASS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-oswald font-bold uppercase text-white tracking-tight leading-tight">
            BECOME A <span className="text-[#ff2a3b]">FOUNDING MEMBER</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mt-3 font-body max-w-2xl mx-auto leading-relaxed">
            Ahmedabad’s premier 24/7 strength &amp; athletic training haven is opening soon at Hathijan Circle. Lock in your <strong>1-Year All-Inclusive Membership for just ₹9,999</strong> before standard rates of ₹15,000 apply.
          </p>
        </div>

        {/* The Big Offer Card */}
        <div className="bg-gradient-to-b from-[#161616] via-[#111111] to-[#0c0c0c] border border-white/15 hover:border-[#ff2a3b]/50 transition-all duration-500 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_0_50px_rgba(255,42,59,0.2)] relative overflow-hidden">
          
          {/* Top Banner Tag */}
          <div className="absolute top-0 right-0 bg-[#ff2a3b] text-white font-oswald font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-2 rounded-bl-2xl shadow-lg">
            LIMITED PRE-LAUNCH PRICE • FIRST 100 PASSES ONLY
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Col: Pricing & Scarcity */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-mono tracking-widest text-gray-400 uppercase block">
                  ANNUAL ALL-INCLUSIVE PASS
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="font-oswald text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                    ₹9,999
                  </span>
                  <span className="text-xl sm:text-2xl text-gray-500 line-through font-mono">
                    ₹15,000
                  </span>
                </div>
                <p className="text-xs text-green-400 font-mono font-semibold">
                  ✓ Flat ₹5,001 Instant Pre-Launch Discount
                </p>
              </div>

              {/* Scarcity Bar */}
              <div className="bg-[#0a0a0a] border border-white/10 p-4 rounded-2xl space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-gray-300">FOUNDER SLOTS CLAIMED</span>
                  <span className="text-[#ff2a3b] font-bold">86 / 100 (86%)</span>
                </div>
                <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-600 to-[#ff2a3b] rounded-full w-[86%]" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-amber-400 font-medium">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>Only 14 Passes Remaining at ₹9,999 Pre-Launch Price</span>
                </div>
              </div>

              {/* Instant Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  type="button"
                  className="w-full group bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-oswald text-lg font-bold uppercase tracking-wider py-4 px-6 rounded-xl shadow-[0_0_30px_rgba(255,42,59,0.5)] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <Sparkles className="w-5 h-5 fill-current" />
                  <span>CLAIM FOUNDER PASS @ ₹9,999</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center justify-center gap-3 mt-3 text-[11px] text-gray-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
                    100% Pre-Launch Refund Guarantee
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-blue-400" />
                    Encrypted Secure Checkout
                  </span>
                </div>
              </div>

            </div>

            {/* Right Col: 4 Core Founder Privileges */}
            <div className="lg:col-span-7">
              <h3 className="font-oswald text-xl sm:text-2xl font-bold uppercase text-white tracking-wide mb-5 flex items-center gap-2">
                <Gift className="w-5 h-5 text-[#ff2a3b]" />
                WHAT&apos;S INCLUDED IN THE FOUNDER PASS:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="bg-[#141414] border border-white/10 p-4 sm:p-5 rounded-2xl hover:border-[#ff2a3b]/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#ff2a3b]/10 border border-[#ff2a3b]/30 flex items-center justify-center text-[#ff2a3b] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-oswald font-bold uppercase text-sm sm:text-base text-white">
                        365 DAYS 24/7 ACCESS
                      </h4>
                      <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                        Round-the-clock biometric keycard entry. Workout whenever you want, 365 days a year.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#141414] border border-white/10 p-4 sm:p-5 rounded-2xl hover:border-[#ff2a3b]/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#ff2a3b]/10 border border-[#ff2a3b]/30 flex items-center justify-center text-[#ff2a3b] shrink-0 mt-0.5">
                      <Gift className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-oswald font-bold uppercase text-sm sm:text-base text-white">
                        FREE ARMOUR STARTER KIT
                      </h4>
                      <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                        Custom Armour Gym Duffel Bag, Stainless Steel Shaker &amp; Heavy-Duty Workout Towel.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#141414] border border-white/10 p-4 sm:p-5 rounded-2xl hover:border-[#ff2a3b]/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#ff2a3b]/10 border border-[#ff2a3b]/30 flex items-center justify-center text-[#ff2a3b] shrink-0 mt-0.5">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-oswald font-bold uppercase text-sm sm:text-base text-white">
                        2 FREE 1-ON-1 PT SESSIONS
                      </h4>
                      <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                        Biomechanical movement analysis, posture correction &amp; custom periodization plan.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#141414] border border-white/10 p-4 sm:p-5 rounded-2xl hover:border-[#ff2a3b]/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#ff2a3b]/10 border border-[#ff2a3b]/30 flex items-center justify-center text-[#ff2a3b] shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-oswald font-bold uppercase text-sm sm:text-base text-white">
                        ZUMBA &amp; LADIES ZONE ACCESS
                      </h4>
                      <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                        Full access to daily high-energy Zumba dance studio sessions and private women&apos;s zones.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Payment Checkout Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#141414] border border-[#ff2a3b]/50 w-full max-w-lg rounded-3xl p-6 sm:p-8 relative shadow-2xl">
            
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-oswald text-[#ff2a3b] font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                INSTANT ONLINE PAYMENT
              </div>
              <h3 className="text-2xl sm:text-3xl font-oswald font-bold uppercase text-white">
                CLAIM FOUNDER PASS
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                1-Year 24/7 Access • ₹9,999 (Original ₹15,000)
              </p>
            </div>

            {/* Error banner */}
            {errorMsg && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/40 rounded-xl flex items-center gap-2 text-xs text-red-400">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleCheckout} className="space-y-4">
              <div>
                <label className="block text-xs font-oswald font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-[#0a0a0a] border border-white/15 focus:border-[#ff2a3b] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-oswald font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                  WHATSAPP / PHONE NUMBER *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. 9825000000"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-[#0a0a0a] border border-white/15 focus:border-[#ff2a3b] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-oswald font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. rahul@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-[#0a0a0a] border border-white/15 focus:border-[#ff2a3b] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                />
              </div>

              {/* Total Order Summary */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4 my-2 flex justify-between items-center">
                <div>
                  <span className="text-xs text-gray-400 block">TOTAL PAYABLE</span>
                  <span className="text-[11px] text-green-400 font-mono">1 Year 24/7 Founder Pass</span>
                </div>
                <div className="text-right">
                  <span className="font-oswald text-2xl font-bold text-[#ff2a3b]">₹9,999</span>
                </div>
              </div>

              {/* Submit / Pay Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-oswald text-base font-bold uppercase tracking-wider py-4 rounded-xl shadow-[0_0_25px_rgba(255,42,59,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>CONNECTING SECURE PAYMENT...</span>
                  </>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4" />
                    <span>PROCEED TO PAY ₹9,999</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-[10px] text-gray-500 leading-tight">
                By clicking proceed, you agree to our{" "}
                <Link href="/terms-conditions" target="_blank" className="text-[#ff2a3b] hover:underline">
                  Terms &amp; Conditions
                </Link>{" "}
                and{" "}
                <Link href="/refund-policy" target="_blank" className="text-[#ff2a3b] hover:underline">
                  Refund Policy (100% Pre-Launch Guarantee)
                </Link>.
              </p>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
