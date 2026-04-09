"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function KpiAlignmentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Rendered from TOP to BOTTOM internally, so Data flows UP (Bottom to Top)
  const steps = [
    { level: '03', label: 'THE APEX', title: 'Business KPI', desc: 'Board-level executive reporting directly aligned to the overriding Business Plan.' },
    { level: '02', label: 'THE CORE', title: 'Project KPI', desc: 'Consolidated structural health metrics for specific assets or ongoing developments.' },
    { level: '01', label: 'THE FOUNDATION', title: 'Dept KPI', desc: 'Granular, high-fidelity performance data from individual functional teams.' }
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-40 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
      
      {/* Massive Cinematic Logo Watermark */}
      {/* <motion.div 
        className="absolute top-1/2 left-[60%] md:left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] md:w-[1200px] md:h-[1200px] opacity-0 pointer-events-none flex justify-center items-center z-0"
        initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
        whileInView={{ opacity: 0.1, scale: 2, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img 
          src="/Logo-03.png" 
          alt="ZERO Brand Watermark" 
          className="w-full h-full object-contain" 
        />
      </motion.div> */}

      {/* Dark Architectural Grid Background (Overlays the logo to embed it into the "blueprint") */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[80px_80px] pointer-events-none mask-[radial-gradient(ellipse_at_center,black_10%,transparent_70%)] opacity-30 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Massive Typography */}
          <motion.div 
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3">
               <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(226,195,132,1)]"></div>
               <span className="text-primary font-mono text-xs md:text-sm tracking-[0.2em] uppercase">Data Upwelling</span>
            </div>
            
            <h2 className="text-[3.5rem] leading-[1.05] md:text-[5rem] lg:text-[6rem] text-white font-display font-medium tracking-tight">
              Vertical <br/>
              <span className="italic font-light text-white/40">Truth.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-on-surface-variant max-w-lg font-light leading-relaxed">
              ZERO ensures that every data point captured on the site floor resonates directly into the executive boardroom. No translation errors. No filter. Complete structural transparency.
            </p>
          </motion.div>

          {/* Right Column - The Vertical Core */}
          <div className="relative py-8 md:pl-8">
            
            {/* The Main Shaft / Laser Track (positioned exactly at the center of the w-8 circles) */}
            <div className="absolute left-[15px] md:left-[47px] top-0 bottom-0 w-[2px] bg-white/5 rounded-full overflow-hidden">
               {/* Ascending Full-Width Glow Pulse */}
               <motion.div 
                 className="absolute left-0 w-full h-[250px] bg-linear-to-t from-transparent via-primary to-transparent blur-[2px]"
                 animate={{ top: ['100%', '-50%'] }}
                 transition={{ 
                   duration: 4, 
                   repeat: Infinity, 
                   ease: "linear",
                 }}
               />
               {/* Solid Core Element to anchor the glow */}
               <motion.div 
                 className="absolute left-[0.5px] w-px h-[100px] bg-white shadow-[0_0_15px_rgba(226,195,132,1)]"
                 animate={{ top: ['100%', '-50%'] }}
                 transition={{ 
                   duration: 4, 
                   repeat: Infinity, 
                   ease: "linear",
                 }}
               />
            </div>

            {/* Nodes */}
            <div className="space-y-12 lg:space-y-16 relative z-10 flex flex-col">
              {steps.map((step, idx) => (
                <motion.div 
                  key={step.level}
                  className="flex items-start gap-6 md:gap-8 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  {/* Node Connector Point */}
                  <div className="shrink-0 w-8 h-8 rounded-full border border-white/10 bg-[#050505] flex items-center justify-center relative mt-1 md:mt-2 group-hover:border-primary/50 transition-colors duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                     <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-primary transition-colors duration-500 group-hover:shadow-[0_0_10px_rgba(226,195,132,0.8)]"></div>
                     <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/30 group-hover:scale-150 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
                  </div>

                  {/* Content Glass Panel */}
                  <div className="flex-1 rounded-2xl border border-white/5 bg-white/1 backdrop-blur-md p-6 md:p-8 transition-all duration-500 group-hover:bg-white/2 group-hover:border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-primary font-mono text-xs tracking-widest">{step.level}</span>
                      <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                      <span className="text-white/40 font-mono text-[10px] tracking-widest uppercase">{step.label}</span>
                    </div>
                    
                    <h4 className="text-2xl md:text-3xl font-display font-medium text-white mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h4>
                    
                    <p className="text-on-surface-variant font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
