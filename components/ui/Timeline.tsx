"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

interface TimelineEntry {
  id: number;
  title: string;
  desc: string;
  startDate: string;
  endDate: string;
  thumbnail: string;
  company: string;
  location: string;
}

interface TimelineProps {
  data: TimelineEntry[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [300, -300]);

  return (
    <div className="relative py-20" ref={containerRef}>
      <h1 className="heading mb-16">
        My <span className="text-purple">work experience</span>
      </h1>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Straight vertical white timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white"></div>
        
        {/* Animated progress line */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-blue-500"
          style={{
            height: scrollYProgress.get() * 100 + "%",
          }}
        />
        
        {/* Timeline items - Mobile responsive */}
        <div className="space-y-8 md:space-y-16">
          {data.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 120,
                damping: 20
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              {/* Mobile: Single column, Desktop: Alternating */}
              <div className={`flex flex-col md:flex-row md:items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}>
                {/* Content - Mobile: Full width, Desktop: Half width with alternating sides */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 
                    ? "md:pr-8 lg:pr-12" 
                    : "md:pl-8 lg:pl-12"
                }`}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    className="bg-black-200/60 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-white/20 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                    
                    {/* Company logo with enhanced animations */}
                    <div className={`flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 mb-4 md:mb-6 relative z-10 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}>
                      <motion.div
                        whileHover={{ 
                          rotate: [0, -5, 5, 0],
                          scale: 1.1
                        }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                      >
                        <motion.div
                          className="absolute inset-0 bg-purple-500/20 rounded-full blur-lg"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <img
                          src={item.thumbnail}
                          alt={item.company}
                          className="relative w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-purple-500/50"
                        />
                      </motion.div>
                      <div className={`flex-1 ${
                        index % 2 === 0 ? "md:text-left" : "md:text-right"
                      }`}>
                        <motion.h3 
                          className="text-lg md:text-xl lg:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          {item.title}
                        </motion.h3>
                        <motion.p 
                          className="text-purple text-sm md:text-base lg:text-lg font-semibold"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          {item.company}
                        </motion.p>
                        <motion.p 
                          className="text-white-100 text-xs md:text-sm"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          {item.location}
                        </motion.p>
                      </div>
                    </div>
                    
                    <motion.p 
                      className="text-white-100 mb-4 md:mb-6 leading-relaxed text-sm md:text-base lg:text-lg"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {item.desc}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className={`flex flex-wrap items-center gap-2 text-xs md:text-sm text-purple font-semibold ${
                        index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                      }`}
                    >
                      <motion.span 
                        className="bg-purple-500/20 px-2 md:px-3 py-1 rounded-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.startDate}
                      </motion.span>
                      <span className="text-white-200">→</span>
                      <motion.span 
                        className="bg-blue-500/20 px-2 md:px-3 py-1 rounded-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.endDate}
                      </motion.span>
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Timeline dot and connecting line - Hidden on mobile */}
                <div className="hidden md:block relative z-10 flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      delay: 0.3 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.2 }}
                    className="relative w-4 h-4 bg-purple rounded-full border-4 border-black-100 shadow-lg"
                  />
                  
                  {/* Connecting line to content */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    className={`absolute top-1/2 w-8 lg:w-12 h-0.5 bg-white ${
                      index % 2 === 0 ? "right-0" : "left-0"
                    }`}
                  />
                </div>
                
                {/* Spacer for desktop */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom fade effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-t from-purple-500 to-transparent rounded-full"
        />
      </div>
    </div>
  );
};

export default Timeline;
