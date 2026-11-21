import Link from "next/link";
import { Package, Truck, ArrowLeft, Mail, Phone, MapPin, CheckCircle2, Clock, Zap } from "lucide-react";

export const metadata = {
  title: "Shipping & Delivery Policy | Armour 24-7 Gym Ahmedabad",
  description: "Fulfillment and delivery policy for digital gym membership passes, physical starter kits, and biometric keycard access at Armour 24-7 Gym.",
};

export default function ShippingPolicyPage() {
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
            <Package className="w-4 h-4" />
            <span>FULFILLMENT &amp; SERVICE ACCESS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-oswald font-bold uppercase tracking-tight text-white">
            SHIPPING &amp; <span className="text-[#C8010A]">DELIVERY POLICY</span>
          </h1>
          <p className="text-sm font-mono text-gray-400 mt-2">
            Effective Date: January 1, 2026 • Last Updated: October 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-base text-gray-200 leading-relaxed font-body">
          
          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#C8010A]">1.</span> Nature of Services &amp; Products
            </h2>
            <p>
              <strong>Armour 24-7 Gym</strong> operates a premier physical fitness training center and bodybuilding gym facility. Services sold online through this website primarily consist of <strong>Digital Membership Passes, Gym Subscriptions, Pre-Launch Passes, and Personal Coaching Programs</strong>.
            </p>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#C8010A]">2.</span> Digital Delivery Timeline
            </h2>
            <p>
              Upon successful online payment processing:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className="bg-[#0a0a0a] border border-white/10 p-5 rounded-sm">
                <Clock className="w-6 h-6 text-[#C8010A] mb-2" />
                <span className="text-xs font-mono text-gray-400 block uppercase">Instant Confirmation</span>
                <span className="font-oswald text-lg sm:text-xl font-bold text-white">5 to 15 Minutes</span>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">Order receipt &amp; invoice delivered via Email &amp; WhatsApp.</p>
              </div>

              <div className="bg-[#0a0a0a] border border-white/10 p-5 rounded-sm">
                <Zap className="w-6 h-6 text-[#C8010A] mb-2" />
                <span className="text-xs font-mono text-gray-400 block uppercase">Account Activation</span>
                <span className="font-oswald text-lg sm:text-xl font-bold text-white">Grand Opening Day</span>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">Pre-launch memberships start on opening or 1st check-in.</p>
              </div>

              <div className="bg-[#0a0a0a] border border-white/10 p-5 rounded-sm">
                <Package className="w-6 h-6 text-[#C8010A] mb-2" />
                <span className="text-xs font-mono text-gray-400 block uppercase">Physical Kit Pickup</span>
                <span className="font-oswald text-lg sm:text-xl font-bold text-white">On-Site Handover</span>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">Starter bag, shaker, and towel handed over at reception.</p>
              </div>
            </div>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#C8010A]">3.</span> Physical Merchandise &amp; Starter Kit Delivery
            </h2>
            <p>
              Certain premium memberships (such as the <strong>Pre-Launch Founder Pass</strong> and Elite Annual Membership) include physical welcome kits (Armour Gym Duffel Bag, Stainless Steel Shaker, Heavy-Duty Workout Towel) and RFID biometric access cards.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-200 pl-2 text-base">
              <li><strong>Pickup Location:</strong> Front Desk Reception, Armour 24-7 Gym, C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad 382445.</li>
              <li><strong>Pickup Requirements:</strong> Present your digital order invoice / confirmation SMS and a valid government photo ID (Aadhaar Card, Driving License, or Passport).</li>
              <li><strong>Shipping Charges:</strong> Zero shipping charges apply as goods are physically collected at the training facility.</li>
            </ul>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#C8010A]">4.</span> Non-Receipt of Digital Order Confirmation
            </h2>
            <p>
              If your payment was debited from your bank account but you did not receive an email or WhatsApp confirmation within 15 minutes, please check your Spam/Junk folder or reach out immediately with your bank transaction reference ID:
            </p>
            <div className="bg-[#181818] border border-white/10 p-5 rounded-sm flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs text-gray-400 font-bold block">DESK HELPLINE</span>
                <span className="font-oswald text-lg sm:text-xl font-bold text-white">+91 81606 97163</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 font-bold block">EMAIL SUPPORT</span>
                <span className="font-oswald text-lg sm:text-xl font-bold text-[#C8010A]">armour247gym@gmail.com</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
