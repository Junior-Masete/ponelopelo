import { useState } from "react";
import "tailwindcss";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/logo.png"; // Replace with your logo

const navLinks = [
  {
    title: "About Us",
    path: "/about",
    submenu: [
      { title: "Who We Are", path: "/about" },
      { title: "Our Team", path: "/team" },
      { title: "Our Values", path: "/values" },
      { title: "Our Committee", path: "/committee" },
    ],
  },
  {
    title: "Projects",
    path: "/projects",
    submenu: [
      { title: "Community Projects", path: "/projects/current" },
      { title: "School Projects", path: "/projects/completed" },
      { title: "School Uniform Projects", path: "/projects/completed" },
      { title: "Termite Treatment Programme", path: "/projects/completed" },
    ],
  },
  {
    title: "Partners",
    path: "/partners",
  },
  {
    title: "Living Library",
    path: "/library",
  },
];

// const navLinks = [
//   {
//     title: "About Us",
//     path: "/about",
//     dropdown: true,
//   },
//   {
//     title: "Partners",
//     path: "/partners",
//     dropdown: true,
//   },
//   {
//     title: "Projects",
//     path: "/projects",
//     dropdown: true,
//   },
//   {
//     title: "Living Library@",
//     path: "/library",
//     dropdown: false,
//   },
// ];


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto">
        <div className="flex h-20 items-center justify-between px-5 lg:px-8">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Ponelo Pelo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
                <div key={item.title} className="relative group">

                <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                    `flex items-center gap-1 py-7 font-medium transition
                    ${
                        isActive
                        ? "text-red-600"
                        : "text-gray-800 hover:text-red-600"
                    }`
                    }
                >
                    {item.title}

                    {item.submenu && (
                    <ChevronDown
                        size={16}
                        className="transition-transform group-hover:rotate-180"
                    />
                    )}
                </NavLink>

                {item.submenu && (
                    <div className="absolute left-0 top-full hidden w-56 rounded-lg border bg-white shadow-xl group-hover:block">

                    {item.submenu.map((sub) => (
                        <NavLink
                        key={sub.title}
                        to={sub.path}
                        className="block px-5 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600"
                        >
                        {sub.title}
                        </NavLink>
                    ))}

                    </div>
                )}

                </div>
            ))}
            </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/get-involved"
              className="rounded-lg bg-red-500 px-7 py-3 font-semibold text-white transition hover:bg-red-600"
            >
              GET INVOLVED
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="border-t bg-white px-5 py-4">

            {navLinks.map((item, index) => (
                <div key={item.title}>

                    <button
                    onClick={() => {
                        if (item.submenu) {
                        setOpenSubmenu(openSubmenu === index ? null : index);
                        } else {
                        setIsOpen(false);
                        }
                    }}
                    className="flex w-full items-center justify-between py-4 text-left font-medium"
                    >
                    <span>{item.title}</span>

                    {item.submenu && (
                        <ChevronDown
                        size={18}
                        className={`transition-transform ${
                            openSubmenu === index ? "rotate-180" : ""
                        }`}
                        />
                    )}
                    </button>

                    {!item.submenu && (
                    <NavLink
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                    />
                    )}

                    {item.submenu && openSubmenu === index && (
                    <div className="ml-4 border-l border-gray-200">

                        {item.submenu.map((sub) => (
                        <NavLink
                            key={sub.title}
                            to={sub.path}
                            onClick={() => {
                            setIsOpen(false);
                            setOpenSubmenu(null);
                            }}
                            className="block px-4 py-3 text-gray-600 hover:text-red-600"
                        >
                            {sub.title}
                        </NavLink>
                        ))}

                    </div>
                    )}

                </div>
                ))}

            <Link
              to="/get-involved"
              onClick={() => setIsOpen(false)}
              className="mt-5 block rounded-lg bg-red-500 py-3 text-center font-semibold text-white"
            >
              GET INVOLVED
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}