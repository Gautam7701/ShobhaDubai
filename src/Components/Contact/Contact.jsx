import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#111111] text-white px-6 py-16" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Get in Touch with Sobha Realty
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-400 mb-12 max-w-xl mx-auto"
        >
          Whether you have a question about our properties, pricing, or anything else, our team is ready to help.
        </motion.p>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#191919] p-8 rounded-xl shadow-md space-y-6"
          >
            <div>
              <label className="block mb-1 text-sm">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded bg-[#27292d] text-white outline-none border border-[#333] focus:border-[#C0A062]"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-[#27292d] text-white outline-none border border-[#333] focus:border-[#C0A062]"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Message</label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full px-4 py-2 rounded bg-[#27292d] text-white outline-none border border-[#333] focus:border-[#C0A062]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#C0A062] text-white px-6 py-2 rounded hover:bg-[#a88b4e] transition"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#191919] p-8 rounded-xl shadow-md space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-[#C0A062] mb-2">Our Address</h3>
              <p className="text-gray-400">
                Sobha Realty Headquarters<br />
                Business Bay, Dubai, UAE
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#C0A062] mb-2">Phone</h3>
              <p className="text-gray-400">+971 4 123 4567</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#C0A062] mb-2">Email</h3>
              <p className="text-gray-400">contact@sobharealty.com</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
