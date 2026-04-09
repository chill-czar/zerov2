"use client";

import React from 'react';
import { motion } from 'framer-motion';

import { Marquee, MarqueeFade, MarqueeContent, MarqueeItem } from "../ui/marquee";

export function DepartmentIntegrationSection() {
  const departments = [
    "Procurement", "Design", "Delivery", "Commercial", "Sales", "Finance", 
    "Accounts", "HR", "Leasing", "Asset Management"
  ];
  
  return (
    <section className="py-12 md:py-16 bg-[#050505] overflow-hidden border-y border-white/5 relative">
      
      {/* Subtle blueprint grid to link with other sections */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none opacity-30"></div>

      <div className="text-center mb-8 relative z-10">
        <motion.h3 
          className="text-primary font-mono text-[10px] md:text-sm tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Unifying Departmental Execution
        </motion.h3>
      </div>

      <div className="relative w-full max-w-[1920px] mx-auto opacity-70 hover:opacity-100 transition-opacity duration-700 z-10">
        <Marquee>
          <MarqueeFade side="left" className="w-16 md:w-64 from-[#050505] to-transparent" />
          <MarqueeContent speed={40} className="flex items-center">
            {departments.map((dept, index) => (
              <MarqueeItem key={index} className="flex items-center justify-center mx-6 md:mx-10 group cursor-default">
                <span className="text-xl md:text-2xl lg:text-3xl font-display font-medium tracking-tight whitespace-nowrap select-none transition-colors duration-500 ease-out text-white/30 hover:text-primary hover:drop-shadow-[0_0_15px_rgba(226,195,132,0.4)]">
                  {dept}
                </span>
                <span className="text-primary/20 text-lg md:text-xl ml-12 md:ml-20 select-none font-bold">•</span>
              </MarqueeItem>
            ))}
          </MarqueeContent>
          <MarqueeFade side="right" className="w-16 md:w-64 from-[#050505] to-transparent" />
        </Marquee>
      </div>
    </section>
  );
}
