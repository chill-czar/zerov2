"use client";

import { motion } from 'framer-motion';


export function IntroduceZeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <section className="py-32 md:py-48 px-6 md:px-12 overflow-hidden relative bg-[#050505] flex items-center min-h-[80vh]">
        
        {/* The Architectural Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[100px_100px] mask-[radial-gradient(ellipse_70%_70%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none"></div>

        {/* Central Vertical Plumb Line */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-linear-to-b from-transparent via-primary/50 to-transparent pointer-events-none"
        />

        <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 relative"
          >
            {/* Massive Behind-Text Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
            <span className="relative text-[7rem] md:text-[14rem] lg:text-[18rem] font-display font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white via-white/80 to-white/5 select-none">
              ZERO
            </span>
          </motion.div>

          <motion.div 
            className="relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] text-primary tracking-tighter leading-[1.05] max-w-5xl mx-auto font-display font-medium">
              Replacing fragmentation <br className="hidden md:block"/>
              <span className="text-white relative inline-block">
                with institutional structure.
                {/* Animated underline */}
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
                  className="absolute -bottom-2 left-0 h-1.5 bg-primary rounded-r-full shadow-[0_0_15px_rgba(226,195,132,0.8)]"
                />
              </span>
            </h2>
          </motion.div>

          <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.6 }}
             className="mt-14 text-on-surface-variant text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            A unified operating system built for the complexity of enterprise real estate. No spreadsheets. No silos. Just architectural truth.
          </motion.p>
        </div>
      </section>

      <section className="py-24 md:py-40 px-6 md:px-12 bg-[#050505] relative overflow-hidden border-t border-white/5">
        
        {/* Structural Blueprint Grids */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[80px_80px] pointer-events-none mask-[radial-gradient(ellipse_at_center,black_20%,transparent_70%)] opacity-30 z-0"></div>
        
        <motion.div 
          className="max-w-7xl mx-auto flex flex-col gap-12 lg:gap-24 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={cardVariants} className="max-w-3xl">
            <h3 className="text-sm font-mono tracking-[0.2em] uppercase text-primary mb-6">The Foundation</h3>
            <p className="text-[3rem] md:text-[4.5rem] leading-[1.05] font-display font-medium text-white tracking-tight">
              The Real Estate <br/>
              <span className="text-white/40 italic font-light">PMO Operating System.</span>
            </p>
          </motion.div>
          
          {/* Asymmetrical Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            
            {/* Main Feature - Spans 8 cols */}
            <motion.div 
              variants={cardVariants} 
              className="md:col-span-8 rounded-2xl border border-white/5 bg-white/1 backdrop-blur-md p-8 md:p-12 cursor-default group hover:bg-white/2 hover:border-white/10 transition-all duration-500 relative overflow-hidden flex flex-col md:flex-row gap-10 items-center shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            >
              {/* Internal Glow Effect */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-5 group-hover:opacity-10 transition-opacity duration-1000"></div>
              
              <div className="flex-1 relative z-10 border-l border-primary/30 pl-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#E2C384]"></div>
                  <span className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]">Core Architecture</span>
                </div>
                <h4 className="text-[2rem] md:text-[2.5rem] leading-[1.1] font-display font-medium text-white mb-6 tracking-tight">Data Sovereignty</h4>
                <p className="text-on-surface-variant font-light leading-relaxed text-lg">
                  A unified architectural core that owns the truth of every asset across the lifecycle. 
                  No more reconciling conflicting spreadsheets or bridging disparate silos.
                </p>
              </div>

              {/* Visual Micro-component */}
              <div className="flex-1 w-full relative z-10 h-[240px] bg-[#0A0A0A]/50 border border-white/5 rounded-xl overflow-hidden flex items-center justify-center group-hover:border-primary/20 transition-colors duration-500">
                 <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#050505]/80 z-10 pointer-events-none"></div>
                 {/* Abstract structure */}
                 <div className="relative w-full h-full flex flex-col items-center justify-end pb-8 gap-4">
                    <div className="w-3/4 h-10 border border-primary/20 bg-primary/5 flex items-center px-6 justify-between relative shadow-[0_0_20px_rgba(226,195,132,0.05)] overflow-hidden">
                      <div className="w-16 h-1.5 bg-primary/40 rounded-full"></div>
                      <div className="w-2 h-2 rounded bg-primary/60"></div>
                      {/* Laser scanning line */}
                      <motion.div 
                        className="absolute top-0 bottom-0 w-px bg-primary shadow-[0_0_10px_#E2C384]"
                        animate={{ left: ["0%", "100%", "0%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                    <div className="w-2/4 h-10 border border-primary/10 bg-primary/2 flex items-center px-6 justify-between translate-y-2">
                      <div className="w-20 h-1.5 bg-primary/30 rounded-full"></div>
                    </div>
                    <div className="w-1/4 h-10 border border-white/5 bg-white/1 flex items-center px-6 justify-between translate-y-4">
                      <div className="w-10 h-1.5 bg-white/20 rounded-full"></div>
                    </div>
                    {/* Connecting lines */}
                    <div className="absolute top-1/4 bottom-0 left-1/2 -translate-x-1/2 w-px bg-linear-to-b from-primary/0 via-primary/40 to-primary/0 z-0"></div>
                 </div>
              </div>
            </motion.div>

            {/* Feature 2 - Spans 4 cols */}
            <motion.div 
              variants={cardVariants} 
              className="md:col-span-4 rounded-2xl border border-white/5 bg-white/1 backdrop-blur-md p-8 md:p-10 cursor-default group hover:bg-white/2 hover:border-white/10 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col justify-between min-h-[360px]"
            >
              <div className="absolute bottom-0 left-0 w-full h-[200px] bg-linear-to-t from-primary/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10 mb-8 border-l border-white/10 pl-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em]">Telemetry</span>
                </div>
                <h4 className="text-[1.75rem] md:text-[2rem] leading-[1.1] font-display font-medium text-white mb-4 tracking-tight">Radical Visibility</h4>
                <p className="text-on-surface-variant font-light text-base leading-relaxed">
                  Real-time telemetry from procurement to leasing. Zero latency between physical action and executive insight.
                </p>
              </div>

              {/* Data Bars */}
              <div className="relative z-10 flex items-end gap-1.5 h-28 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                {[40, 70, 45, 90, 60, 85, 100].map((height, i) => (
                  <motion.div 
                    key={i}
                    className="flex-1 bg-primary/20 border-t border-primary/40 rounded-t-sm relative overflow-hidden"
                    style={{ height: `${height}%` }}
                    initial={{ height: "0%" }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                  >
                    {/* Highlight flash */}
                    <motion.div 
                       className="absolute inset-0 bg-primary/40"
                       animate={{ opacity: [0, 1, 0] }}
                       transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Feature 3 - Spans Full Width But Slim */}
            <motion.div 
              variants={cardVariants} 
              className="md:col-span-12 rounded-2xl border border-white/5 bg-white/1 backdrop-blur-md p-8 md:p-12 cursor-default group hover:bg-white/2 hover:border-white/10 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12"
            >
              {/* Internal structural lines */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 pointer-events-none"></div>
              
              <div className="relative z-10 max-w-3xl border-l border-white/10 pl-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em]">Governance</span>
                </div>
                <h4 className="text-[2rem] md:text-[2.5rem] leading-[1.1] font-display font-medium text-white mb-4 tracking-tight">Institutional Rigor</h4>
                <p className="text-on-surface-variant font-light text-lg leading-relaxed">
                  Automated governance that prevents variance before it hits the bottom line. Strict operational boundaries ensure precision at scale.
                </p>
              </div>

              {/* Animated Core */}
              <div className="relative z-10 flex shrink-0 items-center justify-center w-28 h-28 rounded-full border border-white/10 bg-[#0A0A0A] shadow-[0_0_30px_rgba(0,0,0,0.8)] group-hover:border-primary/30 transition-colors duration-500">
                <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center relative">
                  {/* Orbiting node */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-px rounded-full"
                  >
                    <div className="absolute w-2 h-2 bg-primary rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(226,195,132,1)]"></div>
                  </motion.div>
                  
                  {/* Rotating inner square */}
                  <div className="w-6 h-6 border-[1.5px] border-primary/50 rotate-45 group-hover:rotate-180 transition-transform duration-1000 ease-in-out"></div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>
    </>
  );
}
