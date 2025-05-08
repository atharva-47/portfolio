import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Hazard Eye - Road Hazard Detection",
    logo: "https://img.icons8.com/color/96/000000/road.png",
    description: "An AI-powered system for real-time road hazard detection using computer vision techniques.",
    link: "https://github.com/atharva-47/Hazard_Eye-Road-Hazard-Detection"
  },
  {
    name: "AI-Based Fraud Management System for UID Aadhaar",
    logo: "https://img.icons8.com/color/96/000000/artificial-intelligence.png",
    description: "A robust AI-driven solution to detect and manage fraud in UID Aadhaar systems.",
    link: "https://github.com/atharva-47/AI-Based-Fraud-Management-System-for-UID-Aadhaar"
  },
  {
    name: "GrandLine Laptops (Ecommerce Website)",
    logo: "https://img.icons8.com/color/96/000000/laptop.png",
    description: "A full-featured e-commerce platform with secure payments, chatbot integration, and optimized database design.",
    link: "https://github.com/atharva-47/Project"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center">
      <motion.h2 
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-5xl overflow-y-auto max-h-[50vh] sm:max-h-[60vh] pr-2 scrollbar-hide">
        {projects.map((project, index) => (
          <motion.div 
            key={project.name} 
            className="bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-blue-500/20 flex flex-col items-center h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.03, 
              backgroundColor: "rgba(30, 41, 59, 0.8)",
              transition: { duration: 0.2 }
            }}
          >
            <motion.img 
              src={project.logo} 
              alt={project.name + ' logo'} 
              className="w-12 h-12 mb-3"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ 
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 }
              }}
            />
            <h3 className="text-xl font-semibold mb-2 text-center">{project.name}</h3>
            <p className="text-gray-300 mb-4 text-sm text-center flex-grow">{project.description}</p>
            <motion.a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300 font-bold text-sm px-4 py-2 border border-blue-500 rounded-full hover:bg-blue-500/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View on GitHub
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;