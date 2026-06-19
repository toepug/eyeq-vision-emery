import Link from "next/link";
import AnimateIn from "./AnimateIn";
import { Eye, Contact, Baby, Sun, Wrench, ArrowRight } from "lucide-react";

const featured = [
  {
    icon: Eye,
    title: "Comprehensive Eye Exams",
    desc: "Fast, thorough vision and eye-health assessments for every age — no long waits.",
  },
  {
    icon: Contact,
    title: "Contact Lens Fittings",
    desc: "Soft, rigid, and specialty lens fittings, dialed in for your prescription and lifestyle.",
  },
  {
    icon: Baby,
    title: "Kids' Eye Care",
    desc: "Friendly, patient exams that catch vision problems early.",
  },
  {
    icon: Sun,
    title: "Sunglasses & Polarized Lenses",
    desc: "Maui Jim and more — premium polarized options ready to take home same day.",
  },
  {
    icon: Wrench,
    title: "Frame Adjustments & Repairs",
    desc: "Walk in any time we're open for a quick tune-up, no appointment required.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-paper-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn className="text-center mb-16">
          <p className="text-teal-dark font-bold text-sm tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-display font-extrabold text-ink text-4xl md:text-5xl mb-4">
            Full-Service Care,
            <br />
            Zero Hassle.
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            Park right out front, walk straight in, and get real attention
            from a team that takes your vision seriously.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimateIn
                key={service.title}
                delay={i * 0.08}
                className="group bg-paper rounded-xl p-7 border-2 border-ink/5 hover:border-teal transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-teal-pale flex items-center justify-center mb-5 group-hover:bg-teal/20 transition-colors">
                  <Icon size={22} className="text-teal-dark" />
                </div>
                <h3 className="font-display text-ink text-xl font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {service.desc}
                </p>
              </AnimateIn>
            );
          })}

          <AnimateIn
            delay={featured.length * 0.08}
            className="bg-ink rounded-xl p-7 flex flex-col justify-between"
          >
            <div>
              <p className="font-display text-paper text-xl font-bold mb-2">
                And much more.
              </p>
              <p className="text-paper/70 text-sm leading-relaxed">
                Dry eye treatment, diabetic eye exams, red eye/emergency
                visits, and prescription updates.
              </p>
            </div>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-2 text-teal font-bold text-sm group"
            >
              View all services
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
