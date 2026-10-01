import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowRight, Download, Phone, Mail, MapPin, Calendar, CreditCard } from "lucide-react";

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
  const phone = typeof params.phone === "string" ? params.phone : "+91 98250 XXXXX";
  const email = typeof params.email === "string" ? params.email : "member@armour247gym.com";

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        
        {/* Success Header Card */}
        <div className="bg-gradient-to-b from-[#181818] to-[#121212] border-2 border-green-500/50 rounded-3xl p-6 sm:p-10 text-center shadow-[0_0_50px_rgba(34,197,94,0.15)] relative overflow-hidden">
          
          <div className="w-16 h-16 bg-green-500/10 border border-green-500/40 rounded-full flex items-center justify-center text-green-400 mx-auto mb-4 shadow-lg">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 rounded-full text-green-400 text-xs font-mono font-bold uppercase mb-2">
            <span>Payment Successful</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-oswald font-bold uppercase text-white tracking-wide">
            WELCOME TO THE ARMOUR BROTHERHOOD!
          </h1>
          <p className="text-sm text-gray-300 mt-2 font-body">
            Your <strong>1-Year Pre-Launch Founder Pass</strong> has been successfully confirmed.
          </p>

          {/* Receipt Breakdown */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 my-6 text-left space-y-3 font-mono text-xs">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-gray-400">ORDER / INVOICE ID:</span>
              <span className="text-white font-bold">{orderId}</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-gray-400">PLAN:</span>
              <span className="text-white font-bold">1-Year Pre-Launch Founder Pass</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-gray-400">MEMBER NAME:</span>
              <span className="text-white">{name}</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-gray-400">CONTACT PHONE:</span>
              <span className="text-white">{phone}</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-gray-400">PAYMENT STATUS:</span>
              <span className="text-green-400 font-bold">PAID (₹9,999)</span>
            </div>
            <div className="flex justify-between pt-1 text-sm font-oswald font-bold">
              <span className="text-gray-300 uppercase">Total Amount Paid:</span>
              <span className="text-[#ff2a3b] text-base">₹9,999</span>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-[#141414] border border-white/10 rounded-2xl p-4 text-left space-y-2 mb-6">
            <h4 className="font-oswald text-xs font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#ff2a3b]" />
              WHAT HAPPENS NEXT:
            </h4>
            <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside">
              <li>A digital confirmation &amp; tax invoice has been sent to your WhatsApp and Email.</li>
              <li>Your 365-day access validity starts on Grand Opening day or your 1st workout.</li>
              <li>Collect your free Armour Gym Starter Kit &amp; RFID access key at the front desk.</li>
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="flex-1 py-3.5 bg-[#ff2a3b] hover:bg-white hover:text-black text-white font-oswald text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>Back to Homepage</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919714840999?text=Hi%20Armour%20Gym%2C%20I%20have%20completed%20my%20payment%20for%20order%20"
              target="_blank"
              rel="noreferrer"
              className="py-3.5 px-6 bg-[#181818] hover:bg-white/10 border border-white/15 text-white font-oswald text-sm font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <span>WhatsApp Desk</span>
            </a>
          </div>

        </div>

        {/* Customer Support Callout */}
        <div className="mt-8 text-center text-xs text-gray-400 space-y-2">
          <p>
            For any billing inquiries, write to{" "}
            <a href="mailto:armour247gym@gmail.com" className="text-[#ff2a3b] hover:underline font-bold">
              armour247gym@gmail.com
            </a>{" "}
            or call{" "}
            <a href="tel:+919714840999" className="text-white hover:underline font-bold">
              +91 97148 40999
            </a>.
          </p>
          <p>C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad, Gujarat 382445</p>
        </div>

      </div>
    </div>
  );
}
