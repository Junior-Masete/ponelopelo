import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Ponelo Pelo"
                className="h-16 w-auto"
              />
            </Link>

            <p className="mt-6 text-gray-600 leading-4 text-left">
              The Ponelo Pelo project adopts a
              <span className="font-medium text-slate-800">
                {" "}
                "No School Left Behind"
              </span>{" "}
              approach to supporting the most needy schools in the
              Bushbuckridge Municipality.
            </p>
          </div>

          {/* Our Work */}
          <div className="text-left">
            <h3 className="mb-5 text-lg font-bold text-slate-800">
              Our Work
            </h3>

            <ul className="space-y-3">
              <li>
                <HashLink
                  to="/projects#community-section"
                  className="text-gray-600 transition hover:text-red-500"
                >
                  Community Projects
                </HashLink>
              </li>

              <li>
                <HashLink
                  to="/projects#school-section"
                  className="text-gray-600 transition hover:text-red-500"
                >
                  School Projects
                </HashLink>
              </li>

              <li>
                <HashLink
                  to="/projects#uniform-section"
                  className="text-gray-600 transition hover:text-red-500"
                >
                  School Uniform Projects
                </HashLink>
              </li>

              <li>
                <HashLink
                  to="/termite-treatment"
                  className="text-gray-600 transition hover:text-red-500"
                >
                  Termite Treatment
                </HashLink>
              </li>

              <li>
                <Link
                  to="/living-library"
                  className="text-gray-600 transition hover:text-red-500"
                >
                  Living Library
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="text-left">
            <h3 className="mb-5 text-lg font-bold text-slate-800">
              About Us
            </h3>

            <ul className="space-y-3">
              <li>
                <HashLink
                  to="/about-us#whoweare-section"
                  className="text-gray-600 transition hover:text-red-500"
                >
                  Who We Are
                </HashLink>
              </li>

              <li>
                <HashLink
                  to="/about-us#history-section"
                  className="text-gray-600 transition hover:text-red-500"
                >
                  Our History
                </HashLink>
              </li>

              <li>
                <HashLink
                  to="/about-us#committee-section"
                  className="text-gray-600 transition hover:text-red-500"
                >
                  Our Committee
                </HashLink>
              </li>

              <li>
                <Link
                  to="/partners"
                  className="text-gray-600 transition hover:text-red-500"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="text-left">
            <h3 className="mb-5 text-lg font-bold text-slate-800">
              Follow Us
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition hover:text-red-500"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition hover:text-red-500"
                >
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition hover:text-red-500"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-12 border-t border-gray-200 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} Ponelo Pelo. All rights reserved.
            </p>

            {/* <div className="flex gap-6">
              <Link
                to="/privacy-policy"
                className="hover:text-red-500 transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="hover:text-red-500 transition"
              >
                Terms of Use
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}