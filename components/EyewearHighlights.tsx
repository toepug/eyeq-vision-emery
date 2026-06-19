import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimateIn from "./AnimateIn";

const photos = [
  {
    src: "/images/frames-matsuda-case.webp",
    alt: "Designer eyeglasses arranged in a multi-tray display case",
  },
  {
    src: "/images/frames-tray-teal-pink.webp",
    alt: "Kuboraum frames in teal, pink, and tortoise lined up in a display tray",
  },
  {
    src: "/images/frames-rack-rows.webp",
    alt: "Rows of designer eyeglasses on a lit display rack",
  },
  {
    src: "/images/frames-tray-colourful.webp",
    alt: "Colourful Kuboraum frames in a black display tray",
  },
];

export default function EyewearHighlights() {
  return (
    <section className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-teal-dark font-bold text-sm tracking-widest uppercase mb-3">
              Frames &amp; Eyewear
            </p>
            <h2 className="font-display font-extrabold text-ink text-4xl md:text-5xl">
              Designer Eyewear,
              <br />
              Strip-Mall Easy.
            </h2>
          </div>
          <Link
            href="/eyewear"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper font-bold rounded-md hover:bg-ink-light transition-colors duration-200 group whitespace-nowrap"
          >
            Browse the Collection
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </AnimateIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {photos.map((photo, i) => (
            <AnimateIn
              key={photo.src}
              delay={i * 0.08}
              className="group overflow-hidden rounded-xl bg-ink"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
