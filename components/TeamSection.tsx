import Image from "next/image";
import AnimateIn from "./AnimateIn";

const team = [
  {
    name: "Dr. Jason Woo",
    photo: "/images/dr-jason-woo.jpg",
    credentials: "OD",
    title: "Optometrist",
    specialties: [
      "Contact Lens Fitting",
      "Myopia Management",
      "Specialty Lenses",
    ],
    bio: "Dr. Jason Woo believes exceptional eye care starts with truly listening. Since graduating from the University of Waterloo in 2012, he has dedicated his practice to thorough, individualized care that puts patients completely at ease.\n\nFor Dr. Woo, eye care is deeply personal. Having worn glasses since age four for astigmatism, managed contact lens complications, and undergone LASIK surgery, he has experienced the patient journey from every angle. This firsthand perspective fuels his empathetic approach and passion for patient education. He skips dense medical jargon in favor of clear, down-to-earth explanations so you always leave EyeQ Vision with peace of mind.\n\nDr. Woo speaks French with his newborn daughter and proudly offers exams in English, French, and basic American Sign Language. Outside the clinic, he loves making custom handmade wooden eyewear and growing his garden.",
  },
  {
    name: "Dr. Rehanna Ali",
    photo: "/images/dr-rehanna-ali.jpg",
    credentials: "OD",
    title: "Optometrist",
    specialties: ["Dry Eye Disease", "Ocular Surface", "Comprehensive Exams"],
    bio: "Dr. Rehanna Ali completed her Bachelor of Biomedical Science in 2015, and Doctor of Optometry degree in 2022 with Dean's Honours at the University of Waterloo. She is also board certified in Canada and the US.",
  },
  {
    name: "Dr. Eunice Wong",
    photo: "/images/dr-eunice-wong.jpg",
    credentials: "OD",
    title: "Optometrist",
    specialties: [
      "Pediatric Eye Care",
      "Specialty Contacts",
      "Eye Disease Management",
    ],
    bio: "Dr. Eunice Wong is a graduate of Midwestern University Arizona College of Optometry with a strong foundation in comprehensive eye care and vision health. Drawing on both advanced clinical training and experience as a licensed optician, Dr. Wong provides personalized care tailored to each patient's unique visual needs.\n\nThrough clinical rotations in private practices, hospitals, and community health centers, Dr. Wong gained extensive experience in comprehensive eye examinations, diagnosing and managing ocular diseases, and prescribing effective treatment solutions. Dedicated to staying current with the latest advancements in eye care technology and best practices, Dr. Wong is passionate about helping patients achieve and maintain their best possible vision.",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-paper-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn className="mb-16">
          <p className="text-teal-dark font-bold text-sm tracking-widest uppercase mb-3">
            Meet the Team
          </p>
          <h2 className="font-display font-extrabold text-ink text-4xl md:text-5xl max-w-xl leading-tight">
            Three doctors,
            <br />
            one shared mission.
          </h2>
        </AnimateIn>

        <div className="space-y-12">
          {team.map((doc, i) => (
            <AnimateIn key={doc.name} delay={i * 0.1}>
              <div className="bg-paper rounded-xl overflow-hidden border-2 border-ink/5 flex flex-col lg:flex-row hover:shadow-md transition-shadow duration-300">
                <div className="relative h-72 lg:h-auto lg:w-64 shrink-0 bg-ink">
                  <Image
                    src={doc.photo}
                    alt={doc.name}
                    fill
                    sizes="(min-width: 1024px) 256px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-teal rounded">
                    <span className="text-ink text-xs font-bold tracking-widest uppercase">
                      {doc.credentials}
                    </span>
                  </div>
                </div>

                <div className="flex-1 p-8 lg:p-10">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-ink text-2xl font-bold">
                        {doc.name}
                      </h3>
                      <p className="text-slate text-sm">{doc.title}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {doc.specialties.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-3 py-1 bg-teal-pale text-teal-dark rounded font-semibold"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    {doc.bio.split("\n\n").map((para, j) => (
                      <p
                        key={j}
                        className="text-ink/70 leading-relaxed text-[0.95rem]"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
