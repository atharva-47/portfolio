import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "REST APIs", icon: "https://img.icons8.com/ios-filled/50/000000/api-settings.png" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Prompt Engineering", icon: "https://img.icons8.com/ios-filled/50/000000/artificial-intelligence.png" },
  { name: "Android Development", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
  { name: "Deployment", icon: "https://img.icons8.com/ios-filled/50/000000/deployment.png" },
  { name: "Git/GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
      <motion.h2 
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {skills.map((skill, index) => (
          <motion.span 
            key={skill.name} 
            className="flex flex-col items-center bg-gray-800 px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-gray-200 min-w-[100px] sm:min-w-[120px] shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.05,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
              backgroundColor: "rgba(30, 64, 175, 0.6)"
            }}
          >
            <motion.img 
              src={skill.icon} 
              alt={skill.name + ' icon'} 
              className="w-10 h-10 mb-2"
              animate={{ 
                y: [0, -5, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                delay: index * 0.1
              }}
            />
            {skill.name}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Skills;