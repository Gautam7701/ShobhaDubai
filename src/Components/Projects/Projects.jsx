import React from "react";
import { motion } from "framer-motion";
import Project1 from "../../assets/Projects/Sea-Heaven.webp"
import Project11 from "../../assets/Projects/sobha-element.webp"
import Project2 from "../../assets/Projects/sobha-elwood.webp"
import Project3 from "../../assets/Projects/Sobha-hartland-2-VILLA.webp"
import Project4 from "../../assets/Projects/Sobha-hartland-2.webp"
import Project5 from "../../assets/Projects/Sobha-One.webp"
import Project6 from "../../assets/Projects/Sobha-orbis (2).webp"
import Project7 from "../../assets/Projects/sobha-skyvue.webp"
import Project8 from "../../assets/Projects/sobha-solis.webp"
import Project9 from "../../assets/Projects/The-S.webp"
import Project10 from "../../assets/Projects/Verde.webp"


const Projects = () => {
  const projectData = [
    {
      id: 1,
      image: Project1,
      title: "Sobha Sea Heaven",
      location: "DUBAI HARBOUR, DUBAI",
      price: "Starting from AED 1.1M",
      description:
        "Premium waterfront apartments with top-tier amenities and lush green surroundings.",
      brochureLink: "#",
      unitLink: "#",
    },
    {
      id: 2,
      image: Project2,
      title: "Sobha SeaHaven",
      location: "Dubai Marina",
      price: "Starting from AED 2.3M",
      description:
        "Iconic sea-facing apartments with cutting-edge architecture and views of the Arabian Gulf.",
      brochureLink: "#",
      unitLink: "#",
    },
    {
      id: 3,
      image: Project3,
      title: "Sobha One",
      location: "Ras Al Khor, Dubai",
      price: "Starting from AED 1.6M",
      description:
        "Golf-course facing luxury apartments with stunning skyline views and serene living.",
      brochureLink: "#",
      unitLink: "#",
    },
    {
      id: 4,
      image: Project4,
      title: "Sobha One",
      location: "Ras Al Khor, Dubai",
      price: "Starting from AED 1.6M",
      description:
        "Golf-course facing luxury apartments with stunning skyline views and serene living.",
      brochureLink: "#",
      unitLink: "#",
    },
    {
      id: 5,
      image: Project5,
      title: "Sobha One",
      location: "Ras Al Khor, Dubai",
      price: "Starting from AED 1.6M",
      description:
        "Golf-course facing luxury apartments with stunning skyline views and serene living.",
      brochureLink: "#",
      unitLink: "#",
    },
    {
      id: 6,
      image: Project6,
      title: "Sobha One",
      location: "Ras Al Khor, Dubai",
      price: "Starting from AED 1.6M",
      description:
        "Golf-course facing luxury apartments with stunning skyline views and serene living.",
      brochureLink: "#",
      unitLink: "#",
    },
    {
      id: 7,
      image: Project7,
      title: "Sobha One",
      location: "Ras Al Khor, Dubai",
      price: "Starting from AED 1.6M",
      description:
        "Golf-course facing luxury apartments with stunning skyline views and serene living.",
      brochureLink: "#",
      unitLink: "#",
    },
    {
      id: 8,
      image: Project8,
      title: "Sobha One",
      location: "Ras Al Khor, Dubai",
      price: "Starting from AED 1.6M",
      description:
        "Golf-course facing luxury apartments with stunning skyline views and serene living.",
      brochureLink: "#",
      unitLink: "#",
    },
    {
      id: 9,
      image: Project9,
      title: "Sobha One",
      location: "Ras Al Khor, Dubai",
      price: "Starting from AED 1.6M",
      description:
        "Golf-course facing luxury apartments with stunning skyline views and serene living.",
      brochureLink: "#",
      unitLink: "#",
    },
    {
      id: 10,
      image: Project10,
      title: "Sobha One",
      location: "Ras Al Khor, Dubai",
      price: "Starting from AED 1.6M",
      description:
        "Golf-course facing luxury apartments with stunning skyline views and serene living.",
      brochureLink: "#",
      unitLink: "#",
    },
    {
      id: 11,
      image: Project11,
      title: "Sobha One",
      location: "Ras Al Khor, Dubai",
      price: "Starting from AED 1.6M",
      description:
        "Golf-course facing luxury apartments with stunning skyline views and serene living.",
      brochureLink: "#",
      unitLink: "#",
    },
  ];

  return (
    <section className="py-16 bg-[#111111] text-white" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#C0A062] mb-10 mt-8">
        Sobha Dubai Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#191919] rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#C0A062] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-1">{project.location}</p>
                <p className="text-sm text-[#C0A062] mb-3 font-medium">
                  {project.price}
                </p>
                <p className="text-gray-300 mb-5 text-sm">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.brochureLink}
                    className="px-4 py-2 bg-[#C0A062] text-black rounded-full text-sm hover:bg-white transition"
                  >
                    Download Brochure
                  </a>
                  <a
                    href={project.unitLink}
                    className="px-4 py-2 border border-[#C0A062] text-[#C0A062] rounded-full text-sm hover:bg-[#C0A062] hover:text-black transition"
                  >
                    Available Units
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

