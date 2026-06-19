import type { Metadata } from "next";
import AboutStory from "@/components/AboutStory";
import TeamSection from "@/components/TeamSection";
import CTABanner from "@/components/CTABanner";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "About Us | EyeQ Vision Emery — North York",
  description:
    "Meet the team behind EyeQ Vision Emery — Dr. Jason Woo, Dr. Rehanna Ali, and Dr. Eunice Wong. Independent optometry built for Emery Village Plaza.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-36 pb-16 bg-ink">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-teal font-bold text-sm tracking-widest uppercase mb-4">
            Who We Are
          </p>
          <h1 className="font-display font-extrabold text-paper text-5xl md:text-6xl mb-4 leading-tight">
            About EyeQ Vision Emery
          </h1>
          <p className="text-paper/70 text-lg max-w-xl leading-relaxed">
            Independent optometry and a hand-picked eyewear collection,
            built for Emery Village Plaza.
          </p>
        </div>
      </section>

      <div className="relative h-80 md:h-[28rem] overflow-hidden">
        <img
          src="/images/interior-wide.webp"
          alt="Inside the EyeQ Vision Emery showroom with display cases and seating"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="font-display text-paper text-xl md:text-2xl font-bold">
            Serving North York since 2023
          </p>
        </div>
      </div>

      <AboutStory />

      <section className="py-16 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="group overflow-hidden rounded-xl aspect-[4/3] bg-ink">
                <img
                  src="/images/frames-rack-rows.webp"
                  alt="Rows of designer eyeglasses on a lit display rack"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <div className="group overflow-hidden rounded-xl aspect-[4/3] bg-ink sm:mt-8">
                <img
                  src="/images/frames-tray-colourful.webp"
                  alt="Colourful Kuboraum frames in a black display tray"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <TeamSection />
      <CTABanner />
    </>
  );
}
