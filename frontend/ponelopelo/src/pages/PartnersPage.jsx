import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import partnersFramework from "../assets/gallery/partners/partners.png";

function PartnersPage() {
  return (
    <motion.section 
    initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}

    className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
            Our Partners
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 sm:text-4xl lg:text-5xl">
            Building Collaborative Partnerships:
            <br className="hidden sm:block" />
            Uniting for Impactful Change
          </h2>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-red-500" />
        </div>

        {/* Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left - Partnership Framework Image */}
          <div className="flex justify-center">
            <div className="rounded-3xl bg-slate-50 p-5 shadow-md ring-1 ring-slate-200">
              <img
                src={partnersFramework}
                alt="Ponelo Pelo Partnership Framework"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>

          {/* Right - Description */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 sm:text-3xl">
              Creating Sustainable Community Partnerships
            </h3>

            <p className="mt-6 text-slate-600 leading-tight">
              Our initiatives bring together government departments such as the
              Department of Education, Department of Health, Department of
              Social Development, COGTA, and G-SHAT, alongside local
              businesses, universities, and civil society organisations.
            </p>

            <p className="mt-5 text-slate-600 leading-tight">
              We collaborate with NGOs and civic organisations including AWARD,
              SAWIC, Nourish, Spring of Hope, Hlokomela, Hoedspruit Hub, K2C,
              and Thembha Foundation to strengthen community-driven projects
              across education, health, and youth development.
            </p>

            <p className="mt-5 text-slate-600 leading-tight">
              Funding support comes from respected organisations including
              UNESCO, Rotary, and Hoedspruit Chamber of Commerce. Over time,
              we have negotiated and established clear roles for every partner,
              working hand-in-hand to create transformative outcomes and lasting
              positive change in our communities.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg bg-red-500 px-7 py-3 font-semibold text-white transition duration-300 hover:bg-red-600 hover:shadow-lg"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default PartnersPage;