import Link from "next/link";
import { ShieldCheck, FileText, ArrowLeft, Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Armour 24-7 Gym Ahmedabad",
  description: "Terms and conditions governing memberships, facility access, and digital payments for Armour 24-7 Gym in Hathijan Circle, Ahmedabad.",
};

export default function TermsConditionsPage() {
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
            <FileText className="w-3.5 h-3.5" />
            <span>LEGAL &amp; COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-oswald font-bold uppercase tracking-tight text-white">
            TERMS &amp; <span className="text-[#ff2a3b]">CONDITIONS</span>
          </h1>
          <p className="text-xs font-mono text-gray-400 mt-2">
            Effective Date: January 1, 2026 • Last Updated: October 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm text-gray-300 leading-relaxed font-body">
          
          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-2xl space-y-3">
            <h2 className="text-xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#ff2a3b]">1.</span> Introduction &amp; Acceptance of Terms
            </h2>
            <p>
              Welcome to <strong>Armour 24-7 Gym</strong> (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;), operated at <strong>C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad, Gujarat 382445</strong>. By accessing our website, purchasing memberships (including the Pre-Launch Founder Pass), or utilizing our physical training facilities, you agree to comply with and be bound by the following Terms and Conditions.
            </p>
            <p>
              If you disagree with any part of these terms, you must refrain from purchasing memberships or using the gym facilities.
            </p>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-2xl space-y-3">
            <h2 className="text-xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#ff2a3b]">2.</span> Membership &amp; Facility Access Rules
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 pl-2">
              <li><strong>24/7 Access Privileges:</strong> Valid membership entitles the registered holder to round-the-clock facility access using biometric recognition or assigned RFID credentials.</li>
              <li><strong>Non-Transferability:</strong> Memberships are issued to individual persons and cannot be transferred, shared, or assigned to another individual without written administrative authorization.</li>
              <li><strong>Tailgating Prohibition:</strong> Allowing non-members or unverified guests into the facility using your access credentials is strictly forbidden and subject to instant membership revocation without refund.</li>
              <li><strong>Minimum Age:</strong> Members must be at least 16 years of age. Minors between 16 and 18 require signed parental or legal guardian consent.</li>
            </ul>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-2xl space-y-3">
            <h2 className="text-xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#ff2a3b]">3.</span> Pre-Launch Offer Terms &amp; Conditions
            </h2>
            <p>
              The <strong>Pre-Launch Founder Pass (₹9,999)</strong> is a special promotional membership with limited availability (100 passes):
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 pl-2">
              <li><strong>Membership Activation:</strong> The 365-day annual duration commences on the official facility opening date or the member&apos;s first physical check-in date, whichever is later.</li>
              <li><strong>100% Pre-Launch Refund Guarantee:</strong> If a purchaser wishes to cancel before the official gym opening date, a 100% full refund will be processed back to the original payment source.</li>
              <li><strong>Welcome Starter Kit:</strong> Starter kits (bag, shaker, towel) will be distributed at the front desk upon the member&apos;s first onboarding visit.</li>
            </ul>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-2xl space-y-3">
            <h2 className="text-xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#ff2a3b]">4.</span> Payment Terms &amp; Digital Transactions
            </h2>
            <p>
              All online transactions are securely encrypted and processed through RBI-authorized payment gateways. We accept UPI (PhonePe, Google Pay, Paytm, BHIM), Credit Cards, Debit Cards, and Netbanking.
            </p>
            <p>
              Upon successful transaction, an electronic order confirmation and invoice receipt are instantly generated and sent to your registered email and WhatsApp number.
            </p>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-2xl space-y-3">
            <h2 className="text-xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#ff2a3b]">5.</span> Health, Safety &amp; Assumption of Risk
            </h2>
            <p>
              Physical exercise, heavy weightlifting, and high-intensity cardiovascular conditioning carry inherent risks of injury. You acknowledge that you are in adequate physical health to participate in strenuous exercise. Armour 24-7 Gym strongly encourages consulting a certified medical practitioner before starting any rigorous fitness regimen.
            </p>
            <p>
              Members agree to rerack weights after use, practice proper gym hygiene, wipe down equipment, and respect fellow athletes and staff members at all times.
            </p>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-2xl space-y-3">
            <h2 className="text-xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#ff2a3b]">6.</span> Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted under applicable laws in India, Armour 24-7 Gym, its directors, coaches, and staff shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the loss of personal belongings, misuse of machines, or physical injuries sustained on the premises, except in cases of proven gross negligence.
            </p>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-2xl space-y-3">
            <h2 className="text-xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#ff2a3b]">7.</span> Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of India. Any legal disputes or claims arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in <strong>Ahmedabad, Gujarat</strong>.
            </p>
          </section>

          {/* Contact & Escalation */}
          <div className="bg-[#181818] border border-[#ff2a3b]/40 p-6 rounded-2xl">
            <h3 className="text-lg font-oswald font-bold uppercase text-white mb-3">
              Questions or Grievances?
            </h3>
            <p className="text-xs text-gray-400 mb-4">
              For any clarification regarding these terms, contact our administrative desk:
            </p>
            <div className="space-y-2 text-xs text-gray-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#ff2a3b] shrink-0" />
                <span>C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad, Gujarat 382445</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ff2a3b] shrink-0" />
                <a href="tel:+919714840999" className="hover:text-white font-bold">+91 97148 40999</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#ff2a3b] shrink-0" />
                <a href="mailto:armour247gym@gmail.com" className="hover:text-white font-bold text-[#ff2a3b]">armour247gym@gmail.com</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
