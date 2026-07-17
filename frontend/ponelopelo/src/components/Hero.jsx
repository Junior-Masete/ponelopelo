import { Link } from "react-router-dom";
import heroImage from "../assets/banner_image.jpg";

export default function Hero() {
  return (
    <section
      className="relative h-[90vh] min-h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl text-left">

            <h1 className="mb-6 text-4xl text-left font-semibold leading-none text-white sm:text-5xl lg:text-6xl">
              Building Bright Futures
              <br />
              Together
            </h1>

            <p className="mb-8 text-lg text-left leading-tight text-white/95 sm:text-xl">
              We believe in the power of collaboration between schools and
              communities for a brighter future. Through our holistic
              approach, we support learners, teachers, and local economic
              activities.
            </p>

            <Link
              to="/about"
              className="mt-3 inline-flex items-center rounded-lg bg-red-500 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-red-600 hover:shadow-lg"
            >
              Learn More
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}