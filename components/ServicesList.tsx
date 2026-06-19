import AnimateIn from "./AnimateIn";
import {
  Eye,
  Contact,
  Baby,
  Droplets,
  Sun,
  Wrench,
  ShieldAlert,
  Activity,
  Layers,
  Microscope,
} from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Comprehensive Eye Exams",
    desc: "A full vision and eye-health check-up that goes beyond the chart — prescription, eye disease screening, and how your eyes work together, in one efficient visit.",
  },
  {
    icon: Contact,
    title: "Contact Lens Fittings",
    desc: "New to contacts or switching brands? We fit soft, rigid, and specialty lenses dialed in for comfort and clarity from day one.",
  },
  {
    icon: Baby,
    title: "Kids' Eye Care",
    desc: "Patient, friendly exams for children of all ages — catching vision issues early so school and sports never have to wait.",
  },
  {
    icon: Sun,
    title: "Sunglasses & Polarized Lenses",
    desc: "A real selection of polarized sunglasses, including Maui Jim, ready for prescription lenses or to wear straight off the rack.",
  },
  {
    icon: Wrench,
    title: "Frame Adjustments & Repairs",
    desc: "Bent a temple or lost a screw? Walk in during open hours for a quick, no-appointment tune-up.",
  },
  {
    icon: Droplets,
    title: "Dry Eye Treatment",
    desc: "We identify what's actually causing your dry eye — gland dysfunction, screen time, environment — and build a plan that gives lasting relief.",
  },
  {
    icon: Layers,
    title: "Specialty Contact Lenses",
    desc: "Complex prescriptions and irregular corneas need more than off-the-shelf lenses. We fit scleral, RGP, and custom soft lenses for real comfort.",
  },
  {
    icon: ShieldAlert,
    title: "Cataract Consultations",
    desc: "If we spot cataract formation, we monitor its progress and walk you through your options, co-managing with ophthalmology when surgery is the right call.",
  },
  {
    icon: Activity,
    title: "Glaucoma Monitoring",
    desc: "Pressure testing and imaging that catch glaucoma before it costs you vision, plus ongoing management for diagnosed patients.",
  },
  {
    icon: Microscope,
    title: "Diabetic Eye Exams",
    desc: "Annual screening that catches retinal changes from diabetes before symptoms show up — coordinated with the rest of your care team.",
  },
];

export default function ServicesList() {
  return (
    <section className="py-20 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="divide-y divide-ink/10">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimateIn key={service.title} delay={i * 0.04}>
                <div className="group py-8 flex gap-6 items-start hover:bg-paper-warm transition-colors duration-200 -mx-4 px-4 rounded-xl">
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-teal-pale flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                    <Icon size={20} className="text-teal-dark" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-ink text-xl font-bold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate leading-relaxed text-[0.95rem]">
                      {service.desc}
                    </p>
                  </div>
                  <span className="shrink-0 text-ink/10 font-display text-3xl font-extrabold pt-0.5 hidden md:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
