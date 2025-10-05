"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FeaturedCaseStudy = () => {
  return (
    <section className="py-20" id="case-study">
      <h2 className="heading mb-10">
        Featured <span className="text-purple">Case Study</span>
      </h2>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black-200/60 backdrop-blur-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-6 md:p-10 lg:p-12">
            <motion.h3
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Kerala Treasury Savings Bank (NIC)
            </motion.h3>
            <motion.p
              className="text-white-100 text-sm md:text-base leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Led development for a fintech system managing payroll for 500,000+ employees. Optimized DB2 stored procedures and service flows; delivered significant performance gains and reliability improvements.
            </motion.p>
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
              <div className="rounded-xl bg-[#10132E] p-4">
                <div className="text-2xl md:text-3xl font-bold text-purple">80%</div>
                <div className="text-white-100 text-xs md:text-sm">Faster salary processing</div>
              </div>
              <div className="rounded-xl bg-[#10132E] p-4">
                <div className="text-2xl md:text-3xl font-bold text-purple">500k+</div>
                <div className="text-white-100 text-xs md:text-sm">Employees served</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Laravel",
                "DB2",
                "React",
                "Next.js",
                "REST APIs",
              ].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-[#10132E] text-white-100 text-xs md:text-sm">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href="https://tsbonline.kerala.gov.in/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-white text-black text-sm md:text-base font-medium">
                See live
              </a>
              <a href="/Riyas-Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-[#161A31] text-white-100 text-sm md:text-base">
                Read summary
              </a>
            </div>
          </div>
          <div className="relative min-h-[220px] md:min-h-[320px] lg:min-h-[420px]">
            <Image src="/tsb.png" alt="Kerala Treasury" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;


