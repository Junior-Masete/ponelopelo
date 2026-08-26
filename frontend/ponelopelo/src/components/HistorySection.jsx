import { Calendar } from "lucide-react";

const historyTimeline = [
  {
    year: "2020",
    title: "The journey begins",
    description:
      "The Ponelo Pelo project gets underway with a vision of whole-school development, laying the foundation for long-term community impact.",
  },
  {
    year: "2021",
    title: "Empowering teachers and building local pride",
    description:
      "The School Uniform Project begins with Kedibone, a local businesswoman, demonstrating how local enterprise can supply locally produced uniforms. The Educator Empowerment Project launches at Powerline Primary, supporting more than 1,000 learners and 32 staff members.",
  },
  {
    year: "2022",
    title: "Deepening the work",
    description:
      "The Educator Empowerment pilot is completed and documented, with school leadership reporting stronger teacher confidence and visible progress among learners. A termite-damage assessment leads to the Termite Treatment Programme, helping restore unsafe classrooms.",
  },
  {
    year: "2023–2024",
    title: "Growing and connecting",
    description:
      "Ponelo Pelo expands its activities and partnerships, laying the groundwork for a wider youth-focused programme across the Greenvalley Circuit.",
  },
  {
    year: "2025",
    title: "Sport and stories take off",
    description:
      "Sports Wednesday rolls out across the Greenvalley Circuit, equipping schools and building a shared database of facilities and needs. Young adults collect the first Living Library stories in the villages of Bulelang and Moloro, creating the Village of Many Footprints archive.",
  },
  {
    year: "2026",
    title: "The Integrated Youth Programme",
    description:
      "Ponelo Pelo brings together sport support, sports manuals, Share-a-Shoe, Living Library, Chess Academies and Chess Gardens, and an upgraded website into one connected youth programme.",
  },
];

function HistorySection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
            Our Story
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">
            Our History
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-red-500" />

          <p className="mx-auto mt-6 max-w-3xl text-slate-600 leading-tight">
            From a single vision for whole-school development to an integrated
            youth programme serving communities across the Greenvalley Circuit,
            Ponelo Pelo's journey has been one of collaboration, growth, and
            lasting impact.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-5 top-2 bottom-2 w-1 rounded-full bg-slate-300 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {historyTimeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="ml-16 md:ml-0 md:w-1/2 md:px-10">
                  <div className="rounded-2xl bg-slate-50 p-6 shadow-sm transition duration-300 hover:shadow-md">
                    <div className="mb-3 flex items-center gap-2 text-red-500">
                      <Calendar size={18} />
                      <span className="font-bold">{item.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-800">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-slate-600 leading-tight">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-5 top-8 z-10 md:left-1/2 md:-translate-x-1/2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-slate-700 shadow-lg">
                    {/* <div className="h-3 w-3 rounded-full bg-red-500" /> */}
                  </div>
                </div>

                {/* Empty column for desktop alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistorySection;