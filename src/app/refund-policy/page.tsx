import Link from "next/link";
import { ShieldCheck, RefreshCw, ArrowLeft, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Refund & Cancellation Policy | Armour 24-7 Gym Ahmedabad",
  description: "Transparent refund and cancellation policy for Armour 24-7 Gym memberships and subscriptions in Hathijan Circle, Ahmedabad.",
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Breadcrumb Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#ff2a3b] transition-colors mb-8 uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ff2a3b]/10 border border-[#ff2a3b]/30 rounded-full text-[#ff2a3b] text-xs font-oswald font-bold uppercase tracking-wider mb-4">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>CUSTOMER ASSURANCE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-oswald font-bold uppercase tracking-tight text-white">
            REFUND &amp; <span className="text-[#ff2a3b]">CANCELLATION POLICY</span>
          </h1>
          <p className="text-xs font-mono text-gray-400 mt-2">
            Effective Date: January 1, 2026 • Last Updated: October 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm text-gray-300 leading-relaxed font-body">
          
          {/* Highlight Card: 7-Day Guarantee */}
          <div className="bg-gradient-to-r from-[#1c1414] to-[#141414] border-2 border-[#ff2a3b]/60 p-6 sm:p-8 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-[#ff2a3b]">
              <ShieldCheck className="w-6 h-6 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-oswald font-bold uppercase text-white tracking-wider">
                7-Day Zero-Risk Money-Back Guarantee
              </h2>
            </div>
            <p className="text-gray-200">
              We stand completely behind our world-class training facility. If you purchase any annual membership and decide to cancel within 7 days of your first check-in, we will issue a full refund minus minimal onboarding processing fees.
            </p>
          </div>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-2xl space-y-3">
            <h2 className="text-xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#ff2a3b]">1.</span> Membership Cancellation &amp; Refund Terms
            </h2>
            <p>
              Memberships are active upon first biometric check-in. Cancellation requests are eligible under the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 pl-2">
              <li><strong>7-Day Trial Period for Annual Members:</strong> New annual members may request a cancellation within 7 days of their initial check-in date if dissatisfied with the training equipment, environment, or coaching.</li>
              <li><strong>Medical Exemption:</strong> In case of debilitating medical illness or severe injury certified by a registered medical practitioner, members can apply for a medical pause or pro-rata refund for unused full months.</li>
              <li><strong>Relocation:</strong> If a member relocates to a city outside Ahmedabad (more than 25 km from the gym), they may request a pro-rata refund upon submitting verified proof of residential relocation.</li>
            </ul>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-2xl space-y-3">
            <h2 className="text-xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#ff2a3b]">2.</span> How to Request a Refund or Cancellation
            </h2>
            <p>
              To initiate a cancellation or refund request, please follow this straightforward process:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-300 pl-2">
              <li>Send an email to <a href="mailto:armour247gym@gmail.com" className="text-[#ff2a3b] font-bold hover:underline">armour247gym@gmail.com</a> or WhatsApp message to <a href="https://wa.me/919714840999" className="text-white font-bold hover:underline">+91 97148 40999</a>.</li>
              <li>Include your <strong>Order ID / Payment Reference ID</strong>, Full Name, and Registered Mobile Number.</li>
              <li>State the reason for cancellation along with any supporting documents (if medical/relocation).</li>
            </ol>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-2xl space-y-3">
            <h2 className="text-xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#ff2a3b]">3.</span> Refund Processing Timeline &amp; Method
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#0a0a0a] border border-white/10 p-4 rounded-xl">
                <span className="text-xs font-mono text-gray-400 block uppercase">Review &amp; Approval</span>
                <span className="font-oswald text-lg font-bold text-white">Within 24 to 48 Hours</span>
              </div>
              <div className="bg-[#0a0a0a] border border-white/10 p-4 rounded-xl">
                <span className="text-xs font-mono text-gray-400 block uppercase">Bank Credit Turnaround</span>
                <span className="font-oswald text-lg font-bold text-green-400">5 to 7 Business Days</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 pt-2">
              * Approved refunds are credited directly back to the original source payment method (Bank Account, UPI, Debit/Credit Card) through the payment gateway.
            </p>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-2xl space-y-3">
            <h2 className="text-xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#ff2a3b]">4.</span> Membership Freeze / Pause Policy
            </h2>
            <p>
              If you are traveling for business, vacation, or temporary illness, you don&apos;t have to cancel your membership. Annual membership holders can freeze their membership for up to <strong>30 to 60 days per calendar year</strong> with 48 hours advance notice to the front desk.
            </p>
          </section>

          {/* Support Box */}
          <div className="bg-[#181818] border border-[#ff2a3b]/40 p-6 rounded-2xl">
            <h3 className="text-lg font-oswald font-bold uppercase text-white mb-2">
              Need Help with a Refund or Billing?
            </h3>
            <p className="text-xs text-gray-400 mb-4">
              Our customer support desk is available daily from 06:00 AM to 10:00 PM:
            </p>
            <div className="space-y-2 text-xs text-gray-300">
              <p><strong>Email:</strong> <a href="mailto:armour247gym@gmail.com" className="text-[#ff2a3b] font-bold hover:underline">armour247gym@gmail.com</a></p>
              <p><strong>Phone / WhatsApp:</strong> <a href="tel:+919714840999" className="text-white font-bold hover:underline">+91 97148 40999</a></p>
              <p><strong>Address:</strong> C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad 382445</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
