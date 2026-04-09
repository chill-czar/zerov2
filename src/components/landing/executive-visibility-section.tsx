"use client";

import { motion, type Variants } from 'framer-motion';

export function ExecutiveVisibilitySection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-[#050505] relative overflow-hidden border-t border-white/5">
      
      {/* Deep Background Noise / Radar Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[100px_100px] pointer-events-none opacity-20 mask-[radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20 md:mb-24">
          <motion.div 
            className="space-y-6 max-w-3xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 bg-primary"></div>
               <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase">Executive Terminal</span>
            </div>
            <h2 className="text-[3rem] leading-[1.05] md:text-[4.5rem] lg:text-[5.5rem] text-white font-display font-medium tracking-tight">
              Absolute <span className="text-white/40 italic font-light">Visibility.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-on-surface-variant text-lg md:text-xl font-light leading-relaxed max-w-md border-l border-primary/30 pl-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Zero lag between physical ground truth and boardroom strategy. Monitor the entire planetary portfolio in real-time.
          </motion.p>
        </div>

        {/* Dashboard Metric Panel */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1: Cashflow */}
          <motion.div variants={cardVariants} className="rounded-2xl border border-white/5 bg-white/1 backdrop-blur-md p-8 md:p-10 hover:bg-white/2 hover:border-white/10 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-30">
               <span className="font-mono text-[10px] text-white/50 tracking-widest">DSB-01</span>
            </div>
            
            <h5 className="text-xs font-mono uppercase tracking-[0.2em] text-white/50 mb-6 group-hover:text-primary transition-colors duration-300">Cashflow Intelligence</h5>
            <div className="text-[3rem] md:text-5xl font-display font-medium text-white mb-8 tracking-tighter">
              +18.4<span className="text-primary/70 text-4xl">%</span>
            </div>
            
            {/* Animated SVG Sparkline */}
            <div className="w-full h-16 mb-8 relative">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="glowGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E2C384" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#E2C384" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path 
                  d="M0,30 L15,22 L30,26 L45,12 L60,18 L75,8 L100,2" 
                  fill="none" 
                  stroke="#E2C384" 
                  strokeWidth="1.5"
                  className="drop-shadow-[0_0_8px_rgba(226,195,132,0.6)]"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                />
                <motion.path 
                  d="M0,30 L15,22 L30,26 L45,12 L60,18 L75,8 L100,2 L100,30 L0,30 Z" 
                  fill="url(#glowGradient)" 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
              </svg>
            </div>

            <p className="text-on-surface-variant font-light text-sm leading-relaxed border-t border-white/5 pt-6">
              Real-time projection accuracy across the entire development portfolio.
            </p>
          </motion.div>
          
          {/* Card 2: Risk Mitigation */}
          <motion.div variants={cardVariants} className="rounded-2xl border border-white/5 bg-white/1 backdrop-blur-md p-8 md:p-10 hover:bg-white/2 hover:border-white/10 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-30">
               <span className="font-mono text-[10px] text-white/50 tracking-widest">DSB-02</span>
            </div>

            <h5 className="text-xs font-mono uppercase tracking-[0.2em] text-white/50 mb-6 group-hover:text-primary transition-colors duration-300">Risk Mitigation</h5>
            <div className="text-[3rem] md:text-5xl font-display font-medium text-white mb-8 tracking-tighter">
              0.02<span className="text-white/40 text-4xl">s</span>
            </div>

            {/* Simulated Latency Bars */}
            <div className="w-full h-16 mb-8 flex items-end gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
               {Array.from<undefined>({ length: 15 }).map((_, i) => (
                  <motion.div 
                     key={i}
                     className="flex-1 bg-primary/40 rounded-t-sm"
                     animate={{ height: ["20%", "100%", "20%"] }}
                     transition={{ 
                       duration: 2, 
                       repeat: Infinity, 
                       delay: i * 0.1,
                       ease: "easeInOut" 
                     }}
                  />
               ))}
            </div>

            <p className="text-on-surface-variant font-light text-sm leading-relaxed border-t border-white/5 pt-6">
              Instant variance detection on critical path activities across 40+ departments.
            </p>
          </motion.div>
          
          {/* Card 3: Plan Performance */}
          <motion.div variants={cardVariants} className="rounded-2xl border border-white/5 bg-white/1 backdrop-blur-md p-8 md:p-10 hover:bg-white/2 hover:border-white/10 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-30">
               <span className="font-mono text-[10px] text-white/50 tracking-widest">DSB-03</span>
            </div>

            <h5 className="text-xs font-mono uppercase tracking-[0.2em] text-white/50 mb-6 group-hover:text-primary transition-colors duration-300">Plan Performance</h5>
            <div className="text-[3rem] md:text-5xl font-display font-medium mb-8 tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-primary to-white">
              Active
            </div>

            {/* Rotating Validation Ring */}
            <div className="w-full h-16 mb-8 flex items-center justify-start gap-5">
               <div className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center relative bg-primary/2">
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }} 
                    className="w-full h-full border-t-2 border-l-2 border-primary/80 rounded-full absolute" 
                  />
                  <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_#E2C384] animate-pulse"></div>
               </div>
               <div className="flex flex-col">
                  <span className="text-white/60 font-mono text-[10px] tracking-widest mb-1">SYSTEM SYNC</span>
                  <span className="text-primary font-mono text-xs tracking-widest">VALIDATED</span>
               </div>
            </div>

            <p className="text-on-surface-variant font-light text-sm leading-relaxed border-t border-white/5 pt-6">
              Continuous baseline alignment checking directly against the institutional 10-year plan.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
