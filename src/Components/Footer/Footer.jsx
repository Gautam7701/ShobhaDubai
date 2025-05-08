import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-gray-400 py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10"
      >
        {/* Brand Info */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">Sobha Realty</h2>
          <p className="text-sm">
            Discover a new standard of luxury living. Premium homes crafted with precision, innovation, and excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">Business Bay, Dubai, UAE</p>
          <p className="text-sm">+971 4 123 4567</p>
          <p className="text-sm">contact@sobharealty.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-white text-xl">
            <a href="#"><FaInstagram className="hover:text-[#C0A062]" /></a>
            <a href="#"><FaFacebookF className="hover:text-[#C0A062]" /></a>
            <a href="#"><FaTwitter className="hover:text-[#C0A062]" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-[#C0A062]" /></a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sobha Realty. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
