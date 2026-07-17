import { Link } from "react-router-dom";

import communityImg from "../assets/gallery/community.jpg";
import schoolImg from "../assets/gallery/school_garden.jpg";
import partnersImg from "../assets/gallery/partners.jpg";

const cards = [
  {
    title: "Our Community Projects",
    description:
      "Embracing diversity and creating opportunities through community integration, cultural celebrations, support for special needs, waste management, and other initiatives that strengthen communities.",
    image: communityImg,
    link: "/community-projects",
  },
  {
    title: "Our School Projects",
    description:
      "Supporting schools through vegetable gardens, outdoor classrooms, culture centres, libraries, and sustainable learning environments that help learners thrive.",
    image: schoolImg,
    link: "/school-projects",
  },
  {
    title: "Our Partners",
    description:
      "Working alongside government, NGOs, businesses, universities, and community organisations to create lasting partnerships that strengthen education.",
    image: partnersImg,
    link: "/partners",
  },
];

export default function CommunitySection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl lg:text-5xl">
            Working Together for Stronger Communities
          </h2>

          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Through community projects, school initiatives, and powerful
            partnerships, we are building a sustainable future for everyone.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="mb-4 text-2xl font-bold text-slate-800">
                  {card.title}
                </h3>

                <p className="mb-6 text-gray-600 leading-relaxed">
                  {card.description}
                </p>

                <Link
                  to={card.link}
                  className="inline-flex items-center rounded-lg bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}