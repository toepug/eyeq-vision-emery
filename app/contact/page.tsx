import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "Book an Appointment | EyeQ Vision Emery — North York",
  description:
    "Book an eye exam or consultation at EyeQ Vision Emery, 45 Abraham Welsh Rd, Unit B6, North York. Open Monday–Saturday.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-36 pb-16 bg-teal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-ink/60 font-bold text-sm tracking-widest uppercase mb-4">
            We&apos;d Love to See You
          </p>
          <h1 className="font-display font-extrabold text-ink text-5xl md:text-6xl mb-4 leading-tight">
            Book an Appointment
          </h1>
          <p className="text-ink/70 text-lg max-w-xl leading-relaxed">
            Fill in the form below and we&apos;ll confirm your appointment
            within one business day. Or just give us a call.
          </p>
        </div>
      </section>

      <section className="py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-paper-warm rounded-xl p-8 md:p-10 border-2 border-ink/5">
              <h2 className="font-display text-ink text-2xl font-bold mb-7">
                Appointment Request
              </h2>
              <ContactForm />
            </div>

            <div className="space-y-5">
              <div className="bg-ink rounded-xl p-7 text-paper">
                <h3 className="font-display text-lg font-bold mb-4">
                  Clinic Hours
                </h3>
                <ul className="space-y-3 text-sm text-paper/80">
                  <li className="flex justify-between">
                    <span>Mon – Sat</span>
                    <span>11 am – 7 pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>

              <div className="bg-paper-warm rounded-xl p-7 border-2 border-ink/5">
                <h3 className="font-display text-ink text-lg font-bold mb-4">
                  Prefer to Call?
                </h3>
                <a
                  href="tel:4167448868"
                  className="block text-2xl font-display font-bold text-teal-dark hover:text-teal transition-colors"
                >
                  (416) 744-8868
                </a>
                <p className="text-slate text-sm mt-2">
                  We&apos;re happy to book you over the phone during clinic
                  hours.
                </p>
              </div>

              <div className="bg-teal-pale rounded-xl p-7 border-2 border-teal/20">
                <h3 className="font-display text-ink text-lg font-bold mb-2">
                  First Visit?
                </h3>
                <p className="text-ink/70 text-sm leading-relaxed">
                  Please bring any previous prescription, your health card,
                  and insurance information if applicable. Free parking is
                  right out front — no need to arrive early to find a spot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MapSection />
    </>
  );
}
