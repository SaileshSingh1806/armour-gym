import Link from "next/link";
import { ShieldCheck, RefreshCw, ArrowLeft, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Refund & Cancellation Policy | Armour 24-7 Gym Ahmedabad",
  description: "Transparent refund and cancellation policy for Armour 24-7 Gym memberships, including the 100% Pre-Launch Founder Pass guarantee.",
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-28 md:pt-36 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Breadcrumb Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-[#C8010A] transition-colors mb-8 uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#C8010A]/10 border border-[#C8010A]/30 rounded-full text-[#C8010A] text-xs sm:text-sm font-oswald font-bold uppercase tracking-wider mb-4">
            <RefreshCw className="w-4 h-4" />
            <span>CUSTOMER ASSURANCE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-oswald font-bold uppercase tracking-tight text-white">
            REFUND &amp; <span className="text-[#C8010A]">CANCELLATION POLICY</span>
          </h1>
          <p className="text-sm font-mono text-gray-400 mt-2">
            Effective Date: January 1, 2026 • Last Updated: October 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-base text-gray-200 leading-relaxed font-body">
          
          {/* Highlight Card: 100% Pre-Launch Guarantee */}
          <div className="bg-gradient-to-r from-[#1c1414] to-[#141414] border-2 border-[#C8010A]/60 p-6 sm:p-8 rounded-sm space-y-3">
            <div className="flex items-center gap-2.5 text-[#C8010A]">
              <ShieldCheck className="w-7 h-7 shrink-0" />
              <h2 className="text-2xl sm:text-3xl font-oswald font-bold uppercase text-white tracking-wider">
                100% Pre-Launch Money-Back Guarantee
              </h2>
            </div>
            <p className="text-gray-200 text-base sm:text-lg">
              We stand completely behind our modern facility. If you purchase the <strong>Pre-Launch Founder Pass (₹9,999)</strong> and decide to cancel for <em>any reason</em> before the official Grand Opening date of our Hathijan Circle facility, we will issue a <strong>100% full refund with ZERO cancellation deductions</strong>.
            </p>
          </div>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#C8010A]">1.</span> Strict No-Refund Policy (Post-Registration / Once Paid)
            </h2>
            <div className="bg-[#1c1414] border border-[#C8010A]/40 p-5 rounded-sm space-y-2">
              <p className="font-oswald text-lg font-bold text-[#C8010A] uppercase tracking-wide">
                FEES ONCE PAID ARE STRICTLY NON-REFUNDABLE UNDER ANY CIRCUMSTANCES
              </p>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                All membership fees, subscription dues, personal training packages, guest fees, and administrative charges once paid through the website, online payment gateway, or at the front desk are <strong>100% NON-REFUNDABLE and NON-TRANSFERABLE</strong> under any circumstances whatsoever.
              </p>
            </div>
            <ul className="list-disc list-inside space-y-3 text-gray-200 pl-2 text-base">
              <li>No refunds, credits, or fee adjustments will be issued for non-usage of gym facilities, change of mind, lack of time, personal dissatisfaction, relocation, or schedule changes.</li>
              <li>No refunds will be granted in the event of medical illness, bodily injury, medical advice, pregnancy, travel, job transfer, or personal emergency.</li>
              <li>If a member is suspended, removed, or has their facility access revoked due to misconduct, misbehavior, rules violation, or breach of safety standards, all fees paid stand forfeited and no refund will be provided.</li>
            </ul>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#C8010A]">2.</span> Absolute Zero Membership Freeze Policy
            </h2>
            <div className="bg-[#0a0a0a] border border-white/10 p-5 rounded-sm space-y-2">
              <p className="font-oswald text-lg font-bold text-white uppercase tracking-wide">
                NO MEMBERSHIP FREEZE / PAUSE / EXTENSION UNDER ANY CIRCUMSTANCES
              </p>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                Armour 24-7 Gym does <strong>NOT</strong> offer any membership freeze, hold, pause, extension, or carryover facility under any circumstances.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm sm:text-base pl-2 pt-1">
                <li>Travel, business tours, vacations, examinations, and personal commitments do not qualify for a pause or tenure extension.</li>
                <li>Medical illness, medical surgeries, injury recoveries, or fitness breaks do not qualify for membership freeze.</li>
                <li>The membership validity runs consecutively from the date of activation until the exact expiry date.</li>
              </ul>
            </div>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#C8010A]">3.</span> Duplicate Transactions &amp; Billing Errors
            </h2>
            <p className="text-base text-gray-200 leading-relaxed">
              In the rare event of a technical payment gateway failure, double charge, or duplicate transaction where the member&apos;s bank account or UPI was debited multiple times for a single order:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#0a0a0a] border border-white/10 p-5 rounded-sm">
                <span className="text-xs font-mono text-gray-400 block uppercase">Verification Desk</span>
                <span className="font-oswald text-xl font-bold text-white">Within 24 to 48 Hours</span>
              </div>
              <div className="bg-[#0a0a0a] border border-white/10 p-5 rounded-sm">
                <span className="text-xs font-mono text-gray-400 block uppercase">Duplicate Charge Reversal</span>
                <span className="font-oswald text-xl font-bold text-green-400">5 to 7 Business Days</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 pt-1">
              * Verified duplicate charges are credited directly back to the original source payment method (Bank Account, UPI, Debit/Credit Card) through the payment gateway.
            </p>
          </section>

          {/* Support Box */}
          <div className="bg-[#181818] border border-[#C8010A]/40 p-6 sm:p-8 rounded-sm">
            <h3 className="text-xl font-oswald font-bold uppercase text-white mb-2">
              Need Help with a Refund or Billing?
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Our customer support desk is available daily from 06:00 AM to 10:00 PM:
            </p>
            <div className="space-y-2.5 text-sm sm:text-base text-gray-200">
              <p><strong>Email:</strong> <a href="mailto:armour247gym@gmail.com" className="text-[#C8010A] font-bold hover:underline">armour247gym@gmail.com</a></p>
              <p><strong>Phone / WhatsApp:</strong> <a href="tel:+918160697163" className="text-white font-bold hover:underline">+91 81606 97163</a></p>
              <p><strong>Address:</strong> C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad 382445</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
