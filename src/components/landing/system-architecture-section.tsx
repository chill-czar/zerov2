"use client";

import { motion, type Variants } from 'framer-motion';

export function SystemArchitectureSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const layers = [
    {
      num: "03",
      title: "Visualization Layer",
      desc: "Real-time executive cockpit, automated reporting, and predictive analytics dashboards."
    },
    {
      num: "02",
      title: "Processing Layer",
      desc: "Automated logic engines, KPI weightings, and cross-departmental data reconciliation."
    },
    {
      num: "01",
      title: "Data Environment",
      desc: "The unified truth engine that ingests and standardizes data from all existing legacy silos."
    }
  ];

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-[#050505] relative overflow-hidden border-t border-white/5">
      
      {/* Structural Background Blueprint */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px] pointer-events-none opacity-20 mask-[radial-gradient(ellipse_at_bottom_right,black_20%,transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* Left Column: Mission Text */}
        <div className="lg:w-5/12 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary"></div>
              <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase">Architecture</span>
            </div>
            
            <h2 className="text-[3rem] leading-[1.05] md:text-[4.5rem] lg:text-[5rem] font-display font-medium text-white mb-8 tracking-tighter">
              Structured <br/>
              <span className="text-white/40 italic font-light">Authority.</span>
            </h2>
            
            <div className="relative pl-6 border-l border-white/10 before:absolute before:-left-px before:top-0 before:bottom-0 before:w-px before:bg-linear-to-b before:from-primary/50 before:to-transparent">
               <p className="text-on-surface-variant text-lg font-light leading-relaxed mb-6">
                 ZERO isn&apos;t just a dashboard; it&apos;s a governance framework. 
               </p>
               <p className="text-on-surface-variant text-lg font-light leading-relaxed">
                 It practically enforces the processes that protect your capital and ensure your architectural vision is delivered continuously, exactly as designed.
               </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: The Tech Stack */}
        <div className="lg:w-7/12 relative">
          
          <motion.div 
            className="space-y-6 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Core Vertical Data Line */}
            <div className="absolute left-10 md:left-12 top-10 bottom-10 w-px bg-linear-to-b from-transparent via-white/20 to-transparent z-0 hidden sm:block">
               <motion.div 
                  className="absolute left-0 w-px h-[40%] bg-linear-to-b from-transparent via-primary to-transparent"
                  animate={{ top: ["100%", "-40%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               />
            </div>

            {layers.map((layer) => (
               <motion.div 
                 key={layer.num} 
                 variants={itemVariants}
                 className="flex flex-col sm:flex-row gap-6 md:gap-8 relative z-10 group"
               >
                  {/* Node */}
                  <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)] group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500 relative overflow-hidden">
                     <span className="font-mono text-2xl md:text-3xl text-white/40 group-hover:text-primary transition-colors duration-300 z-10">{layer.num}</span>
                     
                     {/* Subtle internal glow on hover */}
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,195,132,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Content Box */}
                  <div className="flex-1 rounded-2xl border border-white/5 bg-white/1 p-8 md:p-10 backdrop-blur-md group-hover:bg-white/2 group-hover:border-white/10 transition-all duration-500 relative overflow-hidden">
                     {/* Top highlight bar */}
                     <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                     
                     <h4 className="text-xl md:text-2xl font-display text-white mb-4 tracking-wide group-hover:text-primary transition-colors duration-300">
                       {layer.title}
                     </h4>
                     <p className="text-on-surface-variant font-light leading-relaxed text-sm md:text-base">
                       {layer.desc}
                     </p>
                  </div>
               </motion.div>
            ))}

          </motion.div>

        </div>
      </div>
    </section>
  );
}
