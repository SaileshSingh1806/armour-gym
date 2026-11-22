import Link from "next/link";
import { Shield, Lock, ArrowLeft, Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Armour 24-7 Gym Ahmedabad",
  description: "Privacy policy detailing data collection, processing, and protection practices for Armour 24-7 Gym Ahmedabad.",
};

export default function PrivacyPolicyPage() {
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
            <Lock className="w-4 h-4" />
            <span>DATA PROTECTION &amp; PRIVACY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-oswald font-bold uppercase tracking-tight text-white">
            PRIVACY <span className="text-[#C8010A]">POLICY</span>
          </h1>
          <p className="text-sm font-mono text-gray-400 mt-2">
            Effective Date: January 1, 2026 • Last Updated: October 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-base text-gray-200 leading-relaxed font-body">
          
          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#C8010A]">1.</span> Overview
            </h2>
            <p>
              At <strong>Armour 24-7 Gym</strong> (an individual / sole proprietorship enterprise legally owned and operated by <strong>Sailesh Singh Shivraj</strong>, located at C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad, Gujarat 382445), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines our practices concerning the collection, storage, use, and disclosure of personal information collected through our website, mobile communications, and physical facility operations.
            </p>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#C8010A]">2.</span> Information We Collect
            </h2>
            <p>We may collect and process the following categories of information:</p>
            <ul className="list-disc list-inside space-y-3 text-gray-200 pl-2">
              <li><strong>Contact Information:</strong> Full name, email address, mobile/WhatsApp telephone number, residential address.</li>
              <li><strong>Facility Access &amp; Biometric Data:</strong> Biometric facial landmarks or RFID card tokens strictly used for verifying authorized 24/7 entry through automated turnstiles. Raw biometric images are never shared externally.</li>
              <li><strong>Transactional Data:</strong> Order details, membership plans chosen, transaction references, billing history. We do <em>not</em> store credit/debit card numbers or CVVs; these are securely handled by PCI-DSS compliant payment gateways.</li>
              <li><strong>Fitness &amp; Health Information:</strong> Optional fitness goals, body composition metrics, or relevant medical clearances provided for personalized coaching.</li>
            </ul>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#C8010A]">3.</span> How We Use Your Information
            </h2>
            <p>Your information is used strictly to:</p>
            <ul className="list-disc list-inside space-y-3 text-gray-200 pl-2">
              <li>Process and fulfill membership purchases, including the Pre-Launch Founder Pass.</li>
              <li>Authenticate and grant secure round-the-clock physical access to the facility.</li>
              <li>Send digital transaction receipts, booking confirmations, and membership notices via SMS, Email, or WhatsApp.</li>
              <li>Provide customer support, address billing questions, and process approved refund requests.</li>
              <li>Ensure premises security via round-the-clock CCTV surveillance for member safety.</li>
            </ul>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#C8010A]">4.</span> Payment Processing &amp; Security
            </h2>
            <p>
              When you pay online on our website, your payment credentials are transmitted directly over 256-bit SSL encrypted channels to authorized Indian Payment Gateways. We do not store sensitive cardholder data, banking passwords, or UPI PINs on our servers.
            </p>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#C8010A]">5.</span> Third-Party Disclosures
            </h2>
            <p>
              We do not sell, trade, rent, or commercialize your personal information to third parties. We share information only with trusted service partners (such as payment processors, SMS/WhatsApp notification gateways, and cloud infrastructure providers) who are legally bound to uphold data confidentiality.
            </p>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#C8010A]">6.</span> Data Retention &amp; Rights
            </h2>
            <p>
              We retain membership and billing records for as long as your account remains active and as required by Indian taxation and accounting laws. You have the right to request access to, correction of, or deletion of your non-statutory personal data by contacting our grievance officer.
            </p>
          </section>

          {/* Grievance Officer */}
          <div className="bg-[#181818] border border-[#C8010A]/40 p-6 sm:p-8 rounded-sm">
            <h3 className="text-xl font-oswald font-bold uppercase text-white mb-2">
              Privacy Grievance Officer
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              In accordance with the Information Technology Act 2000 and SPDI Rules 2011:
            </p>
            <div className="space-y-2.5 text-sm sm:text-base text-gray-200">
              <p><strong>Officer:</strong> Armour 24-7 Compliance Desk</p>
              <p><strong>Address:</strong> C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad 382445</p>
              <p><strong>Email:</strong> <a href="mailto:armour247gym@gmail.com" className="text-[#C8010A] font-bold hover:underline">armour247gym@gmail.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+918160697163" className="text-white font-bold hover:underline">+91 81606 97163</a></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
