import { Clock, MapPin, MessageSquare, Phone } from "lucide-react";
import { ButtonLink, Container, SectionTitle } from "./ui";

/** Compact "find us" block. The full enquiry form lives on /contact. */
export default function Visit() {
  return (
    <section id="visit" className="border-t border-white/10 bg-[#0a0a0a] py-20 md:py-24">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionTitle
              title="Visit ARMOUR 24-7 Gym"
              lead="Walk in to see the floor, or book a demo session and a coach will show you around."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact?plan=demo" arrow>
                Book a demo session
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Send an enquiry
              </ButtonLink>
            </div>
          </div>

          <ul className="space-y-6 font-body text-base text-gray-100 lg:col-span-6">
            <li className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#E33B42]" aria-hidden="true" />
              <div>
                <p>C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad, Gujarat 382445</p>
                <a
                  href="https://maps.app.goo.gl/fdHFDqTDaHNvw5Pf6"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-sm text-gray-200 underline decoration-white/40 underline-offset-4 hover:text-white"
                >
                  Get directions on Google Maps
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-[#E33B42]" aria-hidden="true" />
              <p>Biometric access: 24/7. Front desk: 6:00 am to 10:00 pm.</p>
            </li>
            <li className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-[#E33B42]" aria-hidden="true" />
              <a href="tel:+918160697163" className="hover:text-white">
                +91 81606 97163
              </a>
            </li>
            <li className="flex items-start gap-4">
              <MessageSquare className="mt-1 h-5 w-5 shrink-0 text-[#E33B42]" aria-hidden="true" />
              <a
                href="https://wa.me/918160697163"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Message us on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
