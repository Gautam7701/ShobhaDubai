import React, { useState } from 'react';
import logo from "../../../assets/logo.png";
import { motion } from 'framer-motion';
import hamburgerIcon from "../../../assets/hamburgenicon.png";
import cancelIcon from "../../../assets/cancel.png"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 flex justify-between items-center backdrop-blur-md bg-black/30">
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden absolute top-7 left-6 flex items-center" onClick={toggleMenu}>
          <motion.img
            src={isMenuOpen ? cancelIcon : hamburgerIcon}
            alt={isMenuOpen ? "Close Menu" : "Open Menu"}
            className="w-6 h-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Logo */}
        <img src={logo} alt="Logo" className="h-[50px] w-auto" />

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex gap-6 text-white text-sm">
          <li className="hover:text-[#C0A062] cursor-pointer"><a href="#home">Home</a></li>
          <li className="hover:text-[#C0A062] cursor-pointer"><a href="#about">About</a></li>
          <li className="hover:text-[#C0A062] cursor-pointer"><a href="#projects">Projects</a></li>
          <li className="hover:text-[#C0A062] cursor-pointer"><a href="#contact">Contact</a></li>
          <li className="hover:text-[#C0A062] cursor-pointer"><a href="#gallery">Gallery</a></li>
        </ul>

        {/* Mobile Navigation Links */}
        <ul className={`md:hidden flex flex-col items-center absolute top-16 text-white gap-5 cursor-pointer right-40 w-full  bg-black/40 ${isMenuOpen ? 'flex' : 'hidden'} h-[calc(100vh-64px)]`}>
          <li className="hover:text-[#C0A062] cursor-pointer"><a href="#home">Home</a></li>
          <li className="hover:text-[#C0A062] cursor-pointer"><a href="#about">About</a></li>
          <li className="hover:text-[#C0A062] cursor-pointer"><a href="#projects">Projects</a></li>
          <li className="hover:text-[#C0A062] cursor-pointer"><a href="#contact">Contact</a></li>
          <li className="hover:text-[#C0A062] cursor-pointer"><a href="#gallery">Gallery</a></li>
        </ul>
        {/* Mobile Navigation + Buttons */}



        {/* Buttons */}
        <div className="flex gap-3">
          <button className="bg-[#C0A062] text-black text-sm px-4 py-2 rounded hover:bg-[#b2924f] transition">
            Download Brochure
          </button>
          <button className="border border-[#C0A062] text-[#C0A062] text-sm px-4 py-2 rounded hover:bg-[#C0A062] hover:text-black transition">
            Get in Touch
          </button>
        </div>
        {/* Desktop Buttons */}


      </nav>
    </div>
  );
};

export default Navbar;
