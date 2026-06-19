import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";

const hours = [
  { days: "Monday – Saturday", time: "11:00 am – 7:00 pm" },
  { days: "Sunday", time: "Closed" },
];

const services = [
  "Comprehensive Eye Exams",
  "Contact Lens Fittings",
  "Designer Frame Selection",
  "Sunglasses & Polarized Lenses",
  "Kids' Eye Care",
  "Walk-In Frame Adjustments",
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/90 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="EyeQ Vision Emery"
              width={140}
              height={56}
              className="h-14 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-sm text-paper/65 leading-relaxed">
              Modern optometry and a hand-picked designer frame collection at
              Emery Village Plaza, North York.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-paper mb-4 text-lg">
              Find Us
            </h3>
            <ul className="space-y-3 text-sm text-paper/75">
              <li className="flex gap-3">
                <MapPin size={16} className="shrink-0 mt-0.5 text-teal" />
                <span>
                  45 Abraham Welsh Rd, Unit B6
                  <br />
                  North York, ON M9M 0G6
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="shrink-0 mt-0.5 text-teal" />
                <a
                  href="tel:4167448868"
                  className="hover:text-paper transition-colors"
                >
                  (416) 744-8868
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display font-bold text-paper mb-4 text-lg">
              Hours
            </h3>
            <ul className="space-y-2 text-sm">
              {hours.map((h) => (
                <li key={h.days} className="flex gap-3 text-paper/75">
                  <Clock size={14} className="shrink-0 mt-0.5 text-teal" />
                  <div>
                    <span className="font-medium text-paper/90">{h.days}</span>
                    <br />
                    {h.time}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-paper mb-4 text-lg">
              Services
            </h3>
            <ul className="space-y-1.5 text-sm text-paper/75">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="hover:text-paper transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-teal hover:text-teal/80 transition-colors font-semibold"
                >
                  View all services →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-paper/15 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-paper/50">
          <p>
            © {new Date().getFullYear()} EyeQ Vision Emery. All rights
            reserved.
          </p>
          <p>45 Abraham Welsh Rd, Unit B6, North York</p>
        </div>
      </div>
    </footer>
  );
}
