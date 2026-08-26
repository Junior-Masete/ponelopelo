import derick from "../assets/gallery/commitee/derick.jpg";
import portia from "../assets/gallery/commitee/portia.jpg";
import betty from "../assets/gallery/commitee/betty.jpg";
import thuli from "../assets/gallery/commitee/thuli.jpg";
import surprise from "../assets/gallery/commitee/mdaka.jpg";
import solly from "../assets/gallery/commitee/solly.jpg";

const committeeMembers = [
  {
    name: "Derick Tu Toit",
    role: "Project Manager",
    image: derick,
  },
  {
    name: "Portia Mnisi",
    role: "Chairperson",
    image: portia,
  },
  {
    name: "Betty Thobeka",
    role: "Secretary",
    image: betty,
  },
  {
    name: "Thuli Mohlala",
    role: "Netball Coach",
    image: thuli,
  },
  {
    name: "Surprise Mdaka",
    role: "Photographer",
    image: surprise,
  },
  {
    name: "Solly Thabani",
    role: "Programme Principal",
    image: solly,
  },
];

const Committee = () => {
  return (
    <section className="bg-slate-50 px-6 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-[#233D60] sm:text-4xl">
          Meet Our Committee
        </h2>

        {/* Committee Grid */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {committeeMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-start"
            >
              {/* Profile Image */}
              <img
                src={member.image}
                alt={member.name}
                className="h-32 w-32 rounded-2xl object-cover sm:h-36 sm:w-36"
              />

              {/* Name */}
              <h3 className="mt-1 text-lg font-bold leading-tight text-[#233D60]">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-base leading-tight text-[#233D60]">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Committee;