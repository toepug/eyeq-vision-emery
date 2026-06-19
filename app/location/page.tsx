import type { Metadata } from "next";
import { Car, DoorOpen, MapPin } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import MapSection from "@/components/MapSection";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Location & Hours | EyeQ Vision Emery — North York",
  description:
    "Visit EyeQ Vision Emery at 45 Abraham Welsh Rd, Unit B6, North York. Free plaza parking, walk-in friendly, open Monday–Saturday.",
};

const perks = [
  {
    icon: Car,
    title: "Free Plaza Parking",
    desc: "Pull right up — there's no metered street parking to hunt for and no garage to navigate.",
  },
  {
    icon: DoorOpen,
    title: "Walk-In Friendly",
    desc: "Browse frames, ask a quick question, or get an adjustment without booking ahead.",
  },
  {
    icon: MapPin,
    title: "Easy to Find",
    desc: "Ground-floor unit with street-facing glass storefront — visible from the road, not tucked away.",
  },
];

export default function LocationPage() {
  return (
    <>
      <section className="pt-36 pb-16 bg-ink">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-teal font-bold text-sm tracking-widest uppercase mb-4">
            Find Us
          </p>
          <h1 className="font-display font-extrabold text-paper text-5xl md:text-6xl mb-4 leading-tight">
            Location &amp; Hours
          </h1>
          <p className="text-paper/70 text-lg max-w-xl leading-relaxed">
            45 Abraham Welsh Rd, Unit B6, North York, ON M9M 0G6 — easy to
            reach, easy to park.
          </p>
        </div>
      </section>

      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="/images/storefront-exterior.webp"
          alt="EyeQ Vision Emery storefront exterior with grand opening signage"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/30" />
      </div>

      <section className="py-20 bg-paper-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {perks.map((p, i) => {
              const Icon = p.icon;
              return (
                <AnimateIn
                  key={p.title}
                  delay={i * 0.08}
                  className="bg-paper rounded-xl p-7 border-2 border-ink/5"
                >
                  <div className="w-12 h-12 rounded-lg bg-teal-pale flex items-center justify-center mb-5">
                    <Icon size={22} className="text-teal-dark" />
                  </div>
                  <h3 className="font-display text-ink text-xl font-bold mb-2">
                    {p.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      <MapSection />
      <CTABanner />
    </>
  );
}
