import {
  Trophy,
  BookOpen,
  Library,
  Castle,
  Footprints,
  Globe,
  ShieldCheck,
} from "lucide-react";

const programmeItems = [
  {
    title: "Sport Support",
    description:
      "Soccer, netball and a new wave of low-cost sports delivered through Sports Wednesday.",
    icon: Trophy,
  },
  {
    title: "Sports Manuals",
    description:
      "Simple, practical guides so schools with few resources can coach new sports themselves.",
    icon: BookOpen,
  },
  {
    title: "Living Library",
    description:
      "Capturing, preserving and publishing the stories, songs and wisdom of the community.",
    icon: Library,
  },
  {
    title: "Chess Academies & Chess Gardens",
    description:
      "School clubs, community academies and outdoor chess spaces with coaching and competitions.",
    icon: Castle,
  },
  {
    title: "Share-a-Shoe",
    description:
      "Removing a real barrier to participation by sharing gently used, good-quality shoes with learners.",
    icon: Footprints,
  },
  {
    title: "Website",
    description:
      "Telling the story of the work, sharing results and growing community participation.",
    icon: Globe,
  },
  {
    title: "Management",
    description:
      "Planning, budgeting, safeguarding and coordination that holds the entire programme together.",
    icon: ShieldCheck,
  },
];

function YouthProgrammeSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
            Youth Programme
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl lg:text-5xl">
            The Youth Programme 2026
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-red-500" />

          <p className="mt-6 text-base leading-tight text-slate-600 sm:text-lg">
            The Ponelo Pelo Youth Programme is an integrated, year-round effort
            that brings sport participation, storytelling, mind-sport skills,
            and practical support together in one place. Delivered through
            schools and villages across the Greenvalley circuit, the programme
            equips schools with simple tools, strengthens local ownership, and
            connects communities through seven impactful initiatives.
          </p>
        </div>

        {/* Programme Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {programmeItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
              >
            
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 text-red-500">
                  <Icon size={28} strokeWidth={2} />
                </div>

                <h3 className="mb-1 text-xl font-bold text-slate-800">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-tight">
                  {item.description}
                </p>

                {/* <div className="mt-6 h-1 w-12 rounded-full bg-red-500 transition-all duration-300 group-hover:w-20" /> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default YouthProgrammeSection;