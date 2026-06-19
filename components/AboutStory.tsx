import AnimateIn from "./AnimateIn";

export default function AboutStory() {
  return (
    <section className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimateIn direction="left">
            <p className="text-teal-dark font-bold text-sm tracking-widest uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-display font-extrabold text-ink text-4xl md:text-5xl mb-6 leading-tight">
              Same EyeQ Vision.
              <br />
              Built for the plaza.
            </h2>
            <div className="space-y-4 text-ink/75 leading-relaxed">
              <p>
                EyeQ Vision Emery opened in Emery Village Plaza to bring the
                same independent, patient-first care our Junction location is
                known for to a part of the city built around drive-by
                convenience, not foot traffic.
              </p>
              <p>
                That meant a different kind of space: a brighter, modern
                showroom with real parking out front, a faster path from
                walking in to walking out with new glasses, and a frame wall
                stocked with names you wouldn&apos;t expect to find next to a
                grocery store.
              </p>
              <p>
                The doctors are the same people behind EyeQ Vision in The
                Junction, bringing the same standards in specialty contact
                lenses, pediatric vision, and ocular disease management — just
                in a space built for how this neighbourhood actually shops.
              </p>
              <p>
                Whether you&apos;re booking your first exam or stopping in
                between errands to browse frames, you&apos;ll get the same
                attention either way.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn direction="right">
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-ink">
                <img
                  src="/images/frames-square-gold-grey.webp"
                  alt="Grey and gold square eyeglass frames"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-ink mt-8">
                <img
                  src="/images/frames-round-gold.webp"
                  alt="Round gold-rimmed sunglasses with dark lenses"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-teal rounded-xl -z-10" />
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-oak/40 rounded-xl -z-10" />
            </div>
          </AnimateIn>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              heading: "Walk-In Friendly",
              body: "No appointment to browse frames, ask questions, or get a quick adjustment. Come as you are.",
            },
            {
              heading: "Plaza-Convenient",
              body: "Free parking right at the door — no circling the block, no transit transfers.",
            },
            {
              heading: "Same Expert Care",
              body: "The same optometrists and standards as our Junction location, in a space built for this neighbourhood.",
            },
          ].map((v) => (
            <AnimateIn key={v.heading}>
              <div className="bg-paper-warm border-2 border-ink/5 rounded-xl p-6">
                <h3 className="font-display text-ink text-xl font-bold mb-2">
                  {v.heading}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {v.body}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
