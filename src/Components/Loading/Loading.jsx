

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loading({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => onFinish(), 1000); // After fade-out
    }, 3000); // 3s loading time
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-[#101010] z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-serif text-[#C0A062] tracking-widest"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.1, 1], opacity: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            Sobha Dubai
          </motion.h1>
          <motion.p
            className="mt-4 text-gray-400 text-sm md:text-base tracking-wider"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Welcome to elite living
          </motion.p>
          <motion.div
            className="mt-8 w-36 h-1 bg-[#C0A062] rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
