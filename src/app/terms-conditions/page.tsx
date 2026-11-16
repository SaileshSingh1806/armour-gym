import Link from "next/link";
import { ShieldCheck, FileText, ArrowLeft, Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Armour 24-7 Gym Ahmedabad",
  description: "Terms and conditions governing memberships, facility access, and digital payments for Armour 24-7 Gym in Hathijan Circle, Ahmedabad.",
};

export default function TermsConditionsPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-28 md:pt-36 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Breadcrumb Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-[#ff2a3b] transition-colors mb-8 uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#ff2a3b]/10 border border-[#ff2a3b]/30 rounded-full text-[#ff2a3b] text-xs sm:text-sm font-oswald font-bold uppercase tracking-wider mb-4">
            <FileText className="w-4 h-4" />
            <span>LEGAL &amp; COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-oswald font-bold uppercase tracking-tight text-white">
            TERMS &amp; <span className="text-[#ff2a3b]">CONDITIONS</span>
          </h1>
          <p className="text-sm font-mono text-gray-400 mt-2">
            Effective Date: January 1, 2026 • Last Updated: October 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-base text-gray-200 leading-relaxed font-body">
          
          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#ff2a3b]">1.</span> Introduction &amp; Acceptance of Terms
            </h2>
            <p>
              Welcome to <strong>Armour 24-7 Gym</strong> (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;), operated at <strong>C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad, Gujarat 382445</strong>. By accessing our website, purchasing memberships (including the Pre-Launch Founder Pass), or utilizing our physical training facilities, you agree to comply with and be bound by the following Terms and Conditions.
            </p>
            <p>
              If you disagree with any part of these terms, you must refrain from purchasing memberships or using the gym facilities.
            </p>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#ff2a3b]">2.</span> 24/7 Facility Access &amp; Management Rights
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-200 pl-2">
              <li><strong>24/7 Access Privileges:</strong> Valid membership entitles the registered holder to round-the-clock facility access using biometric recognition or assigned RFID credentials.</li>
              <li><strong>Sole Discretion of Management:</strong> Provision of 24/7 round-the-clock facility access is strictly subject to the operational decisions, safety protocols, and management rights of Armour 24-7 Gym. Management reserves the absolute right to alter, modify, restrict, temporarily suspend, or revoke 24/7 operating hours or individual access at any time for scheduled maintenance, sanitization, security audits, emergencies, legal/government regulations, or safety compliance without any prior notice or financial liability.</li>
              <li><strong>Right of Admission Reserved:</strong> Gym management reserves the absolute right of admission. Management holds the unconditional right to suspend, terminate, or revoke any member&apos;s access or membership permanently, without refund or compensation, if the member engages in misconduct, inappropriate behavior, property damage, rule violation, or creates a nuisance.</li>
              <li><strong>Strict Non-Transferability:</strong> Memberships are strictly personal, non-transferable, and non-assignable under any circumstances.</li>
              <li><strong>Tailgating &amp; Unauthorized Entry:</strong> Allowing non-members or unverified guests into the facility using your access credentials is strictly forbidden. Any violation will result in immediate termination of membership and biometric access, forfeiture of all fees, and possible legal action for trespassing.</li>
              <li><strong>Minimum Age:</strong> Members must be at least 16 years of age. Minors between 16 and 18 require signed parental or legal guardian consent.</li>
            </ul>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#ff2a3b]">3.</span> Fees Non-Refundable &amp; No Membership Freeze Policy
            </h2>
            <div className="bg-[#1c1414] border border-[#ff2a3b]/40 p-5 rounded-sm space-y-2 text-white">
              <p className="font-oswald text-lg font-bold text-[#ff2a3b] uppercase tracking-wide">
                STRICT NO-REFUND POLICY — FEES ONCE PAID WILL NOT BE REFUNDED UNDER ANY CIRCUMSTANCES
              </p>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                All membership fees, registration charges, advance dues, personal training fees, and ancillary service payments once paid are <strong>strictly non-refundable</strong> under any circumstances whatsoever (including but not limited to relocation, change of mind, lack of usage, personal schedules, dissatisfaction, illness, medical reasons, or unforeseen events).
              </p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/10 p-5 rounded-sm space-y-2 text-white">
              <p className="font-oswald text-lg font-bold text-white uppercase tracking-wide">
                NO MEMBERSHIP FREEZE / PAUSE / HOLD
              </p>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Armour 24-7 Gym maintains an absolute <strong>Zero-Freeze Policy</strong>. No membership can be frozen, paused, extended, put on hold, or carried forward under any circumstances, including travel, examination, medical conditions, or personal commitments. The membership period runs continuously from the date of activation until its scheduled expiry.
              </p>
            </div>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#ff2a3b]">4.</span> Payment Terms &amp; Digital Transactions
            </h2>
            <p>
              All online transactions are securely encrypted and processed through RBI-authorized payment gateways. We accept UPI (PhonePe, Google Pay, Paytm, BHIM), Credit Cards, Debit Cards, and Netbanking.
            </p>
            <p>
              Upon successful transaction, an electronic order confirmation and invoice receipt are instantly generated and sent to your registered email and WhatsApp number.
            </p>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#ff2a3b]">5.</span> Health, Safety &amp; Assumption of Risk
            </h2>
            <p>
              Physical exercise, heavy weightlifting, and high-intensity cardiovascular conditioning carry inherent risks of injury. You acknowledge that you are in adequate physical health to participate in strenuous exercise. Armour 24-7 Gym strongly encourages consulting a certified medical practitioner before starting any rigorous fitness regimen.
            </p>
            <p>
              Members agree to rerack weights after use, practice proper gym hygiene, wipe down equipment, and respect fellow athletes and staff members at all times.
            </p>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#ff2a3b]">6.</span> Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted under applicable laws in India, Armour 24-7 Gym, its directors, coaches, and staff shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the loss of personal belongings, misuse of machines, or physical injuries sustained on the premises, except in cases of proven gross negligence.
            </p>
          </section>

          <section className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-oswald font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <span className="text-[#ff2a3b]">7.</span> Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of India. Any legal disputes or claims arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in <strong>Ahmedabad, Gujarat</strong>.
            </p>
          </section>

          {/* Contact & Escalation */}
          <div className="bg-[#181818] border border-[#ff2a3b]/40 p-6 sm:p-8 rounded-sm">
            <h3 className="text-xl font-oswald font-bold uppercase text-white mb-3">
              Questions or Grievances?
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              For any clarification regarding these terms, contact our administrative desk:
            </p>
            <div className="space-y-2.5 text-sm sm:text-base text-gray-200">
              <p className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#ff2a3b] shrink-0" />
                <span>C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad, Gujarat 382445</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-[#ff2a3b] shrink-0" />
                <a href="tel:+918160697163" className="hover:text-white font-bold">+91 81606 97163</a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-[#ff2a3b] shrink-0" />
                <a href="mailto:armour247gym@gmail.com" className="hover:text-white font-bold text-[#ff2a3b]">armour247gym@gmail.com</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
