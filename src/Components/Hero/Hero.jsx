import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import { motion } from "framer-motion";
import bgImage from "../../assets/Background.webp";
import VisitFormModal  from "./VisitForwardModel";

const Hero = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden" id ="home">
      <Navbar />
      
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${isModalOpen ? 'blur-lg' : ''}`}
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: "brightness(0.3)", // Darken the image slightly
        }}
      ></div>

      {/* Overlay Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl md:text-6xl font-serif text-[#C0A062]"
        >
          Discover Elite Living
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-gray-300 text-md md:text-xl mt-4 max-w-2xl"
        >
          Experience the finest real estate projects curated by Sobha in the heart of Dubai.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-8 flex gap-6"
        >
          <button className="px-6 py-3 bg-[#C0A062] text-black font-semibold rounded-full hover:bg-white transition">
            Explore Projects
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 border border-[#C0A062] text-[#C0A062] font-semibold rounded-full hover:bg-[#C0A062] hover:text-black transition"
          >
            Book a Visit
          </button>
        </motion.div>

        <VisitFormModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      </div>
      <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-50">
  <button className="bg-[#C0A062] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#a88b4e] transition duration-300">
    Speak to Sobha Expert
  </button>
  <button className="bg-white text-[#C0A062] border border-[#C0A062] px-4 py-2 rounded-lg shadow-md hover:bg-[#f2f2f2] transition duration-300">
    Download Brochure
  </button>
</div>
    </div>
    
  );
};

export default Hero;

