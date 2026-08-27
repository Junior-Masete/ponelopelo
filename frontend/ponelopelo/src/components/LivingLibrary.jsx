import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import livingLibraryImg from "../assets/gallery/living_library2.jpg"

export default function LivingLibrarySection() {
  return (
    <section className="bg-white py-20">
      <motion.div 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      
      className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Image */}
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src={livingLibraryImg}
              alt="Living Library"
              className="h-[280px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[350px] lg:h-[380px]"
            />
          </div>

          {/* Content */}
          <div className="text-left">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
            LIVING LIBRARY
          </span>

            <h2 className="mt-3 mb-3 text-2xl font-bold leading-none text-slate-800 sm:text-4xl lg:text-5xl">
              Embracing the Cultural Tapestry of Shangaan and Sepedi Communities
            </h2>

            <p className="mt-6 text-base leading-tight text-gray-600 sm:text-lg">
              The Ponelo Pelo Living Library is a unique initiative that
              collects and documents stories from Shangaan and Sepedi
              communities. By creating a digital repository of cultural
              knowledge, it preserves invaluable narratives while empowering
              learners and contributing to the long-term preservation of local
              heritage.
            </p>

            <div className="mt-5">
              <Link
                to="/living-library"
                className="inline-flex items-center rounded-lg bg-red-500 px-7 py-3 font-semibold text-white transition duration-300 hover:bg-red-600 hover:shadow-lg"
              >
                Explore
              </Link>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}