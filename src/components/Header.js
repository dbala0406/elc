import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icon imports
// import elclogo from "../assets/elc-logo.png";
import elclogo from "../assets/elc-logo1.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { name: "Home", id: "home" },
    { name: "Courses", id: "courses" },
    { name: "Gallery", id: "gallery" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      id="header"
      className="sticky top-0 left-0 w-full bg-purple-600 text-white p-4 backdrop-blur-md z-50"
    >
      <nav className="flex items-center justify-between max-w-5xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img src={elclogo} alt="ELC Logo" className="h-[80px] w-[100px]" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-semibold tracking-wide">
          {sections.map((section, index) => (
            <li
              key={index}
              className="relative group cursor-pointer transition duration-300"
            >
              <a
                href={`#${section.id}`}
                className="hover:text-yellow-300 transition"
              >
                {section.name}
              </a>
              {/* Underline Effect */}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/9607744531"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 px-5 py-2.5 rounded-lg shadow-md font-semibold tracking-wide hover:brightness-110 transition"
        >
          Book A Free Trial
        </a>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-purple-700 mt-[20px] p-5 rounded-b-2xl transition-all ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 text-center text-lg font-semibold tracking-wide">
          {sections.map((section, index) => (
            <li
              key={index}
              className="relative group cursor-pointer transition duration-300"
            >
              <a
                href={`#${section.id}`}
                className="hover:text-yellow-300 transition"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {section.name}
              </a>
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
