import React, { useState } from "react";
import Logo from "../assets/logo1.png";
import {
  FaBars,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <h4 className="text-gray-300 uppercase font-bold text-4xl">Arjun</h4>
      </div>

      <ul className="hidden md:flex">
        <li>
          <ScrollLink to="home" smooth={true} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="skills" smooth={true} duration={500}>
            Skills
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="work" smooth={true} duration={500}>
            Projects
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      {nav && (
        <ul className="absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center">
          <li className="py-6 text-4xl">
            <ScrollLink
              onClick={handleClick}
              to="home"
              smooth={true}
              duration={500}
            >
              Home
            </ScrollLink>
          </li>
          <li className="py-6 text-4xl">
            <ScrollLink
              onClick={handleClick}
              to="about"
              smooth={true}
              duration={500}
            >
              About
            </ScrollLink>
          </li>
          <li className="py-6 text-4xl">
            <ScrollLink
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </ScrollLink>
          </li>
          <li className="py-6 text-4xl">
            <ScrollLink
              onClick={handleClick}
              to="work"
              smooth={true}
              duration={500}
            >
              Projects
            </ScrollLink>
          </li>
          <li className="py-6 text-4xl">
            <ScrollLink
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      )}

      {/* Social */}
      <div className="hidden md:flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900">
            <a
              href="https://www.linkedin.com/in/arjunshankarofficial/"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800">
            <a
              href="https://github.com/arjun4619"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-900">
            <a
              href="https://www.instagram.com/arjunshankarrr/"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
