"use client";

import React from "react";
import { motion } from "framer-motion";
import { techStack } from "@/data";

const TechStack = () => {
  const categories = [
    { title: "Languages", skills: techStack.languages, color: "from-blue-500 to-cyan-500" },
    { title: "Backend", skills: techStack.backend, color: "from-purple-500 to-pink-500" },
    { title: "Frontend", skills: techStack.frontend, color: "from-green-500 to-emerald-500" },
    { title: "Database", skills: techStack.database, color: "from-orange-500 to-red-500" },
    { title: "DevOps/Cloud", skills: techStack.devops, color: "from-indigo-500 to-purple-500" },
    { title: "Testing", skills: techStack.testing, color: "from-yellow-500 to-orange-500" },
    { title: "Tools", skills: techStack.tools, color: "from-gray-500 to-slate-500" },
    { title: "OS", skills: techStack.os, color: "from-teal-500 to-cyan-500" },
    { title: "Authentication", skills: techStack.auth, color: "from-rose-500 to-pink-500" },
    { title: "Monitoring", skills: techStack.monitoring, color: "from-violet-500 to-purple-500" }
  ];

  return (
    <div className="py-20 w-full" id="tech-stack">
      <h1 className="heading mb-16">
        My <span className="text-purple">Technical Skills</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: categoryIndex * 0.1,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-black-200/60 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 group"
          >
            {/* Category Header */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {category.title}
              </h3>
              <div className={`w-12 h-1 bg-gradient-to-r ${category.color} rounded-full`}></div>
            </div>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-black-100/50 hover:bg-purple-500/10 transition-all duration-300 group/skill"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-5 h-5 object-contain"
                    />
                  </motion.div>
                  <span className="text-sm text-white-100 group-hover/skill:text-purple-300 transition-colors font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-16 text-center"
      >
       
      </motion.div>
    </div>
  );
};

export default TechStack;
