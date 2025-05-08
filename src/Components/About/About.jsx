// import React from 'react';
// import { motion } from 'framer-motion';
// import about from "../../assets/About/interior.webp";
// import about2 from "../../assets/About/side-left.webp";
// import about3 from "../../assets/About/Sofaa.webp";

// const About = () => {
//   return (
//     <div className="py-16 bg-[#191919] text-white">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl font-semibold text-center text-[#C0A062] mb-12">
//           Unveiling Sobha Realty - Your Gateway to Exceptional Living
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Left Side: Image Box Container */}
//           <div className="w-full flex flex-col gap-6">
//             <motion.div
//               className="flex flex-col space-y-6"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//             >
//               <div className="flex space-x-4 justify-between">
//                 <div className="w-1/3">
//                   <img
//                     src={about}
//                     alt="Expert Craftsmanship"
//                     className="w-full h-64 object-cover rounded-lg shadow-lg"
//                   />
//                 </div>
//                 <div className="w-1/3">
//                   <img
//                     src={about2}
//                     alt="Innovation"
//                     className="w-full h-64 object-cover rounded-lg shadow-lg"
//                   />
//                 </div>
//                 <div className="w-1/3">
//                   <img
//                     src={about3}
//                     alt="Uncompromised Quality"
//                     className="w-full h-64 object-cover rounded-lg shadow-lg"
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Side: Text with Full Animations */}
//           <div className="space-y-5 text-left">
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1, delay: 0.2 }}
//             >
//               <h3 className="text-3xl font-bold text-[#C0A062] mb-4">Why Invest in Sobha Realty?</h3>
//               <p className="text-xl text-gray-300">
//                 Here's why discerning individuals choose us for their dream homes:
//               </p>
//             </motion.div>

//             {/* Expert Craftsmanship Section */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1, delay: 0.4 }}
//             >
//               <h3 className="text-2xl font-bold text-[#C0A062] mb-4">Expert Craftsmanship</h3>
//               <p className="text-lg text-gray-300">
//                 Sobha Realty: Crafted by skilled artisans and architects for homes of unparalleled excellence.
//               </p>
//             </motion.div>

//             {/* Innovation Section */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1, delay: 0.6 }}
//             >
//               <h3 className="text-2xl font-bold text-[#C0A062] mb-4">Innovation</h3>
//               <p className="text-lg text-gray-300">
//                 Sobha Realty redefines living, offering residences that embody innovative design concepts for a unique lifestyle.
//               </p>
//             </motion.div>

//             {/* Uncompromised Quality Section */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1, delay: 0.8 }}
//             >
//               <h3 className="text-2xl font-bold text-[#C0A062] mb-4">Uncompromised Quality</h3>
//               <p className="text-lg text-gray-300">
//                 Sobha Realty demands the best, using top-tier materials to create homes that stand the test of time.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import React from 'react';
import { motion } from 'framer-motion';
import about from "../../assets/About/about4.jpg";
import about2 from "../../assets/About/about5.jpg";
import about3 from "../../assets/About/Sobha-One.webp";

const About = () => {
  return (
    <div id ="about" className="py-16 bg-[#191919] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-[#C0A062] mb-10 mt-8">
          Unveiling Sobha Realty - Your Gateway to Exceptional Living
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Image Box Container */}
          <div className="w-full flex flex-col gap-6">
          <motion.div
  className="flex space-x-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  {/* First Two Images in One Row */}
  <div className="w-1/2">
    <img
      src={about}
      alt="Expert Craftsmanship"
      className="w-full h-[250px] object-cover rounded-lg shadow-lg"
    />
  </div>
  <div className="w-1/2">
    <img
      src={about2}
      alt="Innovation"
      className="w-full h-[250px] object-cover rounded-lg shadow-lg"
    />
  </div>
</motion.div>


            {/* Third Image (Sofa) Taking Full Width */}
            <motion.div
              className="w-full mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <img
                src={about3}
                alt="Uncompromised Quality"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          {/* Right Side: Text with Full Animations */}
          <div className="space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <h3 className="text-3xl font-bold text-[#C0A062] mb-4">Why Invest in Sobha Realty?</h3>
              <p className="text-xl text-gray-300">
                Here's why discerning individuals choose us for their dream homes:
              </p>
            </motion.div>

            {/* Expert Craftsmanship Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <h3 className="text-2xl font-bold text-[#C0A062] mb-4">Expert Craftsmanship</h3>
              <p className="text-lg text-gray-300">
                Sobha Realty: Crafted by skilled artisans and architects for homes of unparalleled excellence.
              </p>
            </motion.div>

            {/* Innovation Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-[#C0A062] mb-4">Innovation</h3>
              <p className="text-lg text-gray-300">
                Sobha Realty redefines living, offering residences that embody innovative design concepts for a unique lifestyle.
              </p>
            </motion.div>

            {/* Uncompromised Quality Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#C0A062] mb-4">Uncompromised Quality</h3>
              <p className="text-lg text-gray-300">
                Sobha Realty demands the best, using top-tier materials to create homes that stand the test of time.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
