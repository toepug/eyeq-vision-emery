import type { Metadata } from "next";
import ServicesList from "@/components/ServicesList";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Services | EyeQ Vision Emery — North York",
  description:
    "Comprehensive eye exams, contact lens fittings, kids' eye care, dry eye treatment, and more at EyeQ Vision Emery, North York.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-36 pb-16 bg-ink">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-teal font-bold text-sm tracking-widest uppercase mb-4">
            What We Offer
          </p>
          <h1 className="font-display font-extrabold text-paper text-5xl md:text-6xl mb-4 leading-tight">
            Our Services
          </h1>
          <p className="text-paper/70 text-lg max-w-xl leading-relaxed">
            From routine exams to complex eye disease management — all
            under one roof at Emery Village Plaza.
          </p>
        </div>
      </section>

      <div className="relative h-56 md:h-72 overflow-hidden">
        <img
          src="/images/frames-display-case.webp"
          alt="Close-up of designer eyeglass frames on a lit display shelf"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/65" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <p className="font-display text-paper text-2xl md:text-4xl font-bold">
            Real Care. Real Frames. No Waiting Room Drama.
          </p>
        </div>
      </div>

      <section className="py-16 bg-paper-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-teal-dark font-bold text-sm tracking-widest uppercase mb-3">
                Eyewear &amp; Frames
              </p>
              <h2 className="font-display font-extrabold text-ink text-3xl md:text-4xl mb-4 leading-tight">
                Designer frames,
                <br />
                fitted by people who care.
              </h2>
              <p className="text-slate leading-relaxed">
                Alongside our clinical services, we stock a hand-picked
                selection of designer and independent eyewear brands —
                Matsuda, Kuboraum, Cutler and Gross, and more. Our opticians
                take the time to match you with frames that suit your face,
                your prescription, and your style.
              </p>
            </div>
            <div className="group overflow-hidden rounded-xl aspect-[4/3] bg-ink">
              <img
                src="/images/frames-matsuda-case-2.webp"
                alt="Matsuda eyeglasses on display in a glass showcase"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <ServicesList />
      <CTABanner />
    </>
  );
}
