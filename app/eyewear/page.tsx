import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Eyewear & Collections | EyeQ Vision Emery",
  description:
    "Browse the designer eyewear collection at EyeQ Vision Emery — Matsuda, Kuboraum, Cutler and Gross, Ray-Ban, Maui Jim, and more.",
};

const gallery = [
  {
    src: "/images/frames-matsuda-case.webp",
    alt: "Designer eyeglasses arranged in a multi-tray display case",
    span: "row-span-2",
  },
  {
    src: "/images/frames-tray-teal-pink.webp",
    alt: "Kuboraum frames in teal, pink, and tortoise lined up in a display tray",
    span: "",
  },
  {
    src: "/images/frames-rack-rows.webp",
    alt: "Rows of designer eyeglasses on a lit display rack",
    span: "",
  },
  {
    src: "/images/frames-display-case.webp",
    alt: "Matsuda eyeglasses on display beside Kuboraum frames in a glass showcase",
    span: "",
  },
  {
    src: "/images/interior-frame-wall.webp",
    alt: "Wall of eyeglasses on lit glass shelving inside the Emery showroom",
    span: "row-span-2",
  },
  {
    src: "/images/frames-tray-colourful.webp",
    alt: "Colourful Kuboraum frames in a black display tray",
    span: "",
  },
  {
    src: "/images/frames-rayban-clubmaster.webp",
    alt: "Black and gold Ray-Ban Clubmaster sunglasses",
    span: "",
  },
  {
    src: "/images/frames-case-sunglasses.webp",
    alt: "Assorted sunglasses in a glass showcase",
    span: "",
  },
  {
    src: "/images/frames-square-gold-grey.webp",
    alt: "Grey and gold square eyeglass frames, side angle",
    span: "",
  },
  {
    src: "/images/frames-matsuda-case-2.webp",
    alt: "Matsuda sunglasses in a glass display case",
    span: "",
  },
  {
    src: "/images/frames-round-gold.webp",
    alt: "Round gold-rimmed sunglasses with dark lenses",
    span: "",
  },
];

const brands = [
  "Matsuda",
  "Kuboraum",
  "Cutler and Gross",
  "Ray-Ban",
  "Maui Jim",
  "Chopard",
];

export default function EyewearPage() {
  return (
    <>
      <section className="bg-ink pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <p className="text-teal font-bold text-sm tracking-widest uppercase mb-4">
              Eyewear &amp; Collections
            </p>
            <h1 className="font-display font-extrabold text-paper text-5xl md:text-6xl leading-tight mb-6 max-w-3xl">
              A Frame Wall Worth Crossing the Plaza For.
            </h1>
            <p className="text-paper/75 text-lg max-w-2xl">
              We hand-pick every brand we carry — independent makers and
              established names alike — so you can find a frame that's
              actually yours, not just whatever's in stock.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Brand strip */}
      <section className="bg-teal py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
          {brands.map((b) => (
            <span
              key={b}
              className="font-display font-bold text-ink text-lg tracking-tight"
            >
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[240px] gap-4">
            {gallery.map((photo, i) => (
              <AnimateIn
                key={photo.src}
                delay={(i % 6) * 0.06}
                className={`group overflow-hidden rounded-xl bg-ink ${photo.span}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
