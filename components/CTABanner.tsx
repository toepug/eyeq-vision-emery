import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import AnimateIn from "./AnimateIn";

export default function CTABanner() {
  return (
    <section className="py-20 bg-teal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-ink text-3xl md:text-4xl mb-2">
              Walk in. See clearly. Walk out happy.
            </h2>
            <p className="text-ink/70 text-lg">
              Emery Village Plaza, Unit B6 — easy parking, no appointment
              needed to browse frames.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ink text-paper font-bold rounded-md hover:bg-ink-light transition-colors duration-200 group whitespace-nowrap"
            >
              Book an Appointment
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <a
              href="tel:4167448868"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-ink text-ink font-bold rounded-md hover:bg-ink hover:text-paper transition-colors duration-200 whitespace-nowrap"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
