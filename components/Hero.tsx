import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background — inside the Emery showroom */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/images/interior-wide.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24">
        <div className="max-w-2xl">
          <p className="inline-block bg-teal text-ink font-bold text-sm tracking-wide uppercase mb-6 px-3 py-1 rounded">
            Emery Village Plaza · North York
          </p>

          <h1 className="font-display font-extrabold text-paper text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
            Eye Care That
            <br />
            <span className="text-teal">Moves at Your Pace.</span>
          </h1>

          <p className="text-paper/85 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            A bright, modern eyewear showroom and full-service optometry
            clinic — easy parking, walk-in friendly, and a frame collection
            that punches well above expectations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-teal text-ink font-bold rounded-md hover:bg-teal-dark hover:text-paper transition-colors duration-200 group"
            >
              Book an Appointment
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <a
              href="tel:4167448868"
              className="inline-flex items-center gap-2 px-7 py-4 border-2 border-paper/60 text-paper font-semibold rounded-md hover:bg-paper/10 transition-colors duration-200"
            >
              <Phone size={16} />
              (416) 744-8868
            </a>
          </div>

          <div className="mt-16 flex gap-10 border-t border-paper/20 pt-8">
            <div>
              <p className="font-display text-paper text-3xl font-extrabold">
                6
              </p>
              <p className="text-paper/65 text-sm mt-1">Days a Week</p>
            </div>
            <div className="border-l border-paper/20 pl-10">
              <p className="font-display text-paper text-3xl font-extrabold">
                20+
              </p>
              <p className="text-paper/65 text-sm mt-1">Designer Brands</p>
            </div>
            <div className="border-l border-paper/20 pl-10">
              <p className="font-display text-paper text-3xl font-extrabold">
                Free
              </p>
              <p className="text-paper/65 text-sm mt-1">Plaza Parking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
