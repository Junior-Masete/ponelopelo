import { Link } from "react-router-dom";
import personImage from "../assets/banner_image2.png";
import dotsPattern from "../assets/dots-pattern.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#E93636]">
      <div className="relative mx-auto min-h-[420px]  px-6 sm:min-h-[480px] sm:px-8 lg:min-h-[500px] lg:px-10">

        {/* Dot Pattern */}
        <img
          src={dotsPattern}
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-[45%] object-cover"
        />

        {/* Text */}
        <div className="relative z-20 flex min-h-[420px] max-w-[580px] flex-col justify-center pb-48 pt-12 sm:min-h-[480px] sm:pb-52 lg:min-h-[500px] lg:pb-0">
          <h1 className="max-w-[430px] text-4xl font-extrabold leading-[0.95] text-left text-white sm:text-5xl lg:text-[52px]">
            Building Bright Futures
            <br />
            Together
          </h1>

          <p className="mt-3 max-w-[560px] text-lg leading-[1.05] text-left text-white sm:text-xl lg:text-[20px]">
            We believe in the power of collaboration between schools and
            communities for a brighter future. Through our holistic approach,
            we support learners, teachers, and local economic activities.
          </p>

          <div className="mt-5">
            <button
              className="rounded-md bg-[#233D60] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1b304d]"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Learner */}
        <div className="hidden md:block absolute bottom-0 right-[4%] z-10 w-[42%] max-w-[390px] sm:right-[7%] sm:w-[40%] lg:right-[8%] lg:w-[37%]">
          <img
            src={personImage}
            alt="School learner"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;


























// import heroImage from "../assets/banner_image.jpg";

// export default function Hero() {
//   return (
//     <section
//       className="relative h-[90vh] min-h-[600px] bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${heroImage})`,
//       }}
//     >
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/45" />

//       {/* Content */}
//       <div className="relative z-10 flex h-full items-center">
//         <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
//           <div className="max-w-2xl text-left">

//             <h1 className="mb-6 text-4xl text-left font-semibold leading-none text-white sm:text-5xl lg:text-6xl">
//               Building Bright Futures
//               <br />
//               Together
//             </h1>

//             <p className="mb-8 text-lg text-left leading-tight text-white/95 sm:text-xl">
//               We believe in the power of collaboration between schools and
//               communities for a brighter future. Through our holistic
//               approach, we support learners, teachers, and local economic
//               activities.
//             </p>

//             <Link
//               to="/about"
//               className="mt-3 inline-flex items-center rounded-lg bg-red-500 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-red-600 hover:shadow-lg"
//             >
//               Learn More
//             </Link>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }