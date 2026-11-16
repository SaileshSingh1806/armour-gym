import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Payment Confirmation | Armour 24-7 Gym Ahmedabad",
  description: "Payment confirmation and membership receipt for Armour 24-7 Gym Ahmedabad.",
};

export default async function PaymentStatusPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const orderId = typeof params.order_id === "string" ? params.order_id : "ARMOUR-" + Math.floor(100000 + Math.random() * 900000);
  const name = typeof params.name === "string" ? params.name : "Valued Member";
  const planName = typeof params.plan === "string" ? params.plan : "Armour Gym Membership";
  const phone = typeof params.phone === "string" ? params.phone : "+91 98250 XXXXX";

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-28 md:pt-36 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        
        {/* Receipt Container */}
        <div className="bg-[#141414] border border-white/15 rounded-sm p-6 sm:p-8 text-center space-y-6">
          
          <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-oswald uppercase tracking-widest text-emerald-400 font-bold px-3 py-1 rounded-sm bg-emerald-950/30 border border-emerald-500/30 inline-block">
              Payment Confirmed
            </span>
            <h1 className="text-2xl sm:text-4xl font-oswald font-bold uppercase text-white mt-3">
              Membership Registration Confirmed
            </h1>
            <p className="text-sm sm:text-base text-gray-300 font-body mt-1.5">
              Thank you for choosing Armour 24-7 Gym. Your transaction has been received.
            </p>
          </div>

          {/* Receipt Breakdown */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-5 text-left space-y-3 font-mono text-sm text-gray-200">
            <div className="flex justify-between border-b border-white/5 pb-2.5">
              <span className="text-gray-400">Order / Reference:</span>
              <span className="text-white font-bold">{orderId}</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2.5">
              <span className="text-gray-400">Member Name:</span>
              <span className="text-white font-semibold">{name}</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2.5">
              <span className="text-gray-400">Registered Phone:</span>
              <span className="text-white font-semibold">{phone}</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2.5">
              <span className="text-gray-400">Plan:</span>
              <span className="text-white font-bold">{planName}</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-gray-400">Status:</span>
              <span className="text-emerald-400 font-bold">PAID / CONFIRMED</span>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-[#181818] border border-white/10 rounded-sm p-5 text-left space-y-2.5">
            <h4 className="font-oswald text-sm sm:text-base font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#ff2a3b]" />
              <span>Next Steps:</span>
            </h4>
            <ul className="text-sm sm:text-base text-gray-200 font-body space-y-2 list-disc list-inside">
              <li>Visit our front desk to complete your biometric keycard registration.</li>
              <li>Please carry a valid photo ID (Aadhaar / Driving License) on your first visit.</li>
              <li>For any scheduling questions, connect with our support desk below.</li>
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
            <Link
              href="/"
              className="flex-1 py-3.5 bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-oswald text-sm sm:text-base font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <span>Back to Homepage</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/918160697163?text=Hi%20Armour%20Gym%2C%20I%20have%20completed%20my%20payment%20for%20order%20"
              target="_blank"
              rel="noreferrer"
              className="py-3.5 px-6 bg-white/10 hover:bg-white/20 text-white font-oswald text-sm sm:text-base font-bold uppercase tracking-wider rounded-sm transition-colors text-center"
            >
              WhatsApp Desk
            </a>
          </div>

        </div>

        {/* Customer Support Info */}
        <div className="mt-8 text-center text-xs sm:text-sm text-gray-400 font-body space-y-1">
          <p>
            Have a question? Call <a href="tel:+918160697163" className="text-white hover:underline font-semibold">+91 81606 97163</a> or email <a href="mailto:armour247gym@gmail.com" className="text-[#ff2a3b] hover:underline font-semibold">armour247gym@gmail.com</a>.
          </p>
          <p>C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad 382445</p>
        </div>

      </div>
    </div>
  );
}
