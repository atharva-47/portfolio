import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-4 py-2 sm:py-4 flex flex-col items-center min-h-[80vh] sm:min-h-0">
      <motion.h2 
        className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center">
        {/* Left column with text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Full-Stack Developer & AI Enthusiast
          </h3>
          
          <p className="text-base sm:text-lg text-gray-300 mb-3 sm:mb-6">
            A motivated and versatile Full-Stack Developer with hands-on experience in both web development and AI-based applications.
          </p>
          
          <div className="space-y-2 sm:space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-500 p-1 sm:p-2 rounded-full mr-3 sm:mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm sm:text-base text-gray-300">Proficient in <span className="text-blue-400">Node.js, Express, Python, JavaScript, Java, and HTML/CSS</span>, building responsive and scalable web solutions.</p>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-500 p-1 sm:p-2 rounded-full mr-3 sm:mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <p className="text-sm sm:text-base text-gray-300">Strong foundation in <span className="text-purple-400">computer vision and AI</span>, with experience integrating AI models into real-world applications.</p>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-500 p-1 sm:p-2 rounded-full mr-3 sm:mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-sm sm:text-base text-gray-300">Developed a <span className="text-green-400">real-time object detection system using YOLO</span> during a Generative AI internship.</p>
            </div>
          </div>
        </motion.div>
        
        {/* Right column with images */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[250px] sm:h-[350px] md:h-[400px] w-full"
        >
          {/* Main image */}
          <motion.div
            className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Coding workspace" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </motion.div>
          
          {/* Floating image 1 - AI/ML */}
          <motion.div
            className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-5 md:-right-5 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-lg overflow-hidden shadow-xl z-10"
            initial={{ rotate: -5 }}
            animate={{ rotate: 5 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 3 }}
          >
            <img 
              src="https://img.freepik.com/free-vector/ai-technology-microchip-background-vector-digital-transformation-concept_53876-112222.jpg?semt=ais_hybrid&w=740" 
              alt="AI visualization" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Floating image 2 - Web Dev */}
          <motion.div
            className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-5 md:-left-5 w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-lg overflow-hidden shadow-xl z-10"
            initial={{ rotate: 5 }}
            animate={{ rotate: -5 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 4 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Web development" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom quote */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6 sm:mt-8 md:mt-12 text-center max-w-3xl"
      >
        <blockquote className="text-sm sm:text-lg md:text-xl italic text-gray-300 border-l-4 border-blue-500 pl-4">
          "Passionate about leveraging AI to create innovative, user-focused solutions and committed to continuously learning and exploring new technologies to drive impactful results."
        </blockquote>
      </motion.div>
    </section>
  );
};

export default About;