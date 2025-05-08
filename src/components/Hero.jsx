import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.img 
          src="/src/assets/Profile.png" 
          alt="Profile" 
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-500"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            delay: 0.2 
          }}
        />
        <div>
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent leading-tight py-1"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              delay: 0.4 
            }}
          >
            Hi, I'm Atharv Bargir
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              delay: 0.6 
            }}
          >
            A passionate developer crafting modern software experiences.
          </motion.p>
          <motion.a 
            href="#projects" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              delay: 0.8 
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;