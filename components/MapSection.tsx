import { MapPin, Phone, Clock, Car } from "lucide-react";
import AnimateIn from "./AnimateIn";

const hours = [
  { days: "Monday – Saturday", time: "11:00 am – 7:00 pm" },
  { days: "Sunday", time: "Closed" },
];

export default function MapSection() {
  return (
    <section className="py-20 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Clinic info */}
          <AnimateIn direction="left" className="lg:col-span-2">
            <div className="bg-paper-warm rounded-xl overflow-hidden border-2 border-ink/5 h-full flex flex-col">
              <div className="relative h-44 shrink-0">
                <img
                  src="/images/storefront-exterior.webp"
                  alt="EyeQ Vision Emery storefront in Emery Village Plaza"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <p className="absolute bottom-3 left-4 right-4 text-paper text-xs leading-snug font-medium">
                  45 Abraham Welsh Rd, Unit B6 — Emery Village Plaza
                </p>
              </div>

              <div className="p-8 flex-1">
                <h2 className="font-display text-ink text-2xl font-bold mb-6">
                  Plaza Information
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-3">
                    <MapPin size={18} className="shrink-0 mt-0.5 text-teal-dark" />
                    <div>
                      <p className="font-semibold text-ink text-sm">Address</p>
                      <p className="text-slate text-sm mt-0.5">
                        45 Abraham Welsh Rd, Unit B6
                        <br />
                        North York, ON M9M 0G6
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone size={18} className="shrink-0 mt-0.5 text-teal-dark" />
                    <div>
                      <p className="font-semibold text-ink text-sm">Phone</p>
                      <a
                        href="tel:4167448868"
                        className="text-teal-dark text-sm hover:underline mt-0.5 block"
                      >
                        (416) 744-8868
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Clock size={18} className="shrink-0 mt-0.5 text-teal-dark" />
                    <div>
                      <p className="font-semibold text-ink text-sm mb-2">
                        Hours
                      </p>
                      <ul className="space-y-1.5">
                        {hours.map((h) => (
                          <li key={h.days} className="text-sm text-slate">
                            <span className="font-medium text-ink/80">
                              {h.days}
                            </span>
                            <br />
                            {h.time}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-3 border-t border-ink/10 pt-5">
                    <Car size={18} className="shrink-0 mt-0.5 text-teal-dark" />
                    <p className="text-slate text-sm">
                      Free plaza parking right out front — no need to circle
                      the block.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Map */}
          <AnimateIn direction="right" className="lg:col-span-3">
            <div className="rounded-xl overflow-hidden border-2 border-ink/5 h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps?q=45+Abraham+Welsh+Rd+Unit+B6+North+York+ON+M9M+0G6&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="EyeQ Vision Emery location map"
              />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
