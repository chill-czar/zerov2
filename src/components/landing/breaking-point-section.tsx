"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function BreakingPointSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position for cinematic background text parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["-15%", "0%"]);

  return (
    <section ref={containerRef} className="bg-[#050505] relative py-32 md:py-48 overflow-hidden flex items-center justify-center min-h-[90vh] border-t border-white/5">
      
      {/* Precision Structural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none z-10 mask-[radial-gradient(ellipse_at_center,black_40%,transparent_90%)]"></div>

      {/* Sterile Ambient Core Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none overflow-hidden"></div>

      {/* Massive Background Structural Texts */}
      <div className="absolute top-1/4 left-0 w-[200%] pointer-events-none flex flex-col gap-6 select-none z-0">
        <motion.h1 style={{ x: xLeft }} className="text-[12vw] font-display font-medium text-white/[0.02] leading-none whitespace-nowrap">
          SYSTEMIC ISOLATION SYSTEMIC ISOLATION SYSTEMIC ISOLATION 
        </motion.h1>
        <motion.h1 style={{ x: xRight }} className="text-[12vw] font-display font-medium text-white/[0.02] leading-none whitespace-nowrap">
          LATENCY THRESHOLD LATENCY THRESHOLD LATENCY THRESHOLD 
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full">
        
        {/* The Diagnostic Console Wrapper */}
        <div className="relative group mx-auto max-w-5xl cursor-target">
          
          {/* Edge Glow Hover Effect */}
          <div className="absolute -inset-0.5 bg-linear-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="border border-white/5 bg-[#0A0A0A]/80 backdrop-blur-3xl p-8 md:p-16 rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            {/* Top Bar of Console */}
            <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="relative flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-amber-500/80 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                  <div className="absolute w-2.5 h-2.5 bg-amber-500 rounded-full animate-ping opacity-50"></div>
                </div>
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/40">Diagnostic Alert :: Threshold Breach</span>
              </div>
              <div className="hidden sm:flex gap-1.5 items-end h-6">
                {[...Array(6)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: ["4px", "24px", "8px", "16px", "4px"] }}
                    transition={{ duration: Math.random() * 1.5 + 1, repeat: Infinity, delay: i * 0.2, ease: "linear" }}
                    className="w-1.5 bg-white/10 rounded-sm"
                  />
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-medium leading-[1.1] text-white tracking-tight mb-8">
                  The exact moment control is <span className="text-amber-500/90 italic font-light">lost.</span>
                </h2>
                <div className="h-px w-16 bg-linear-to-r from-amber-500/40 to-transparent mb-8"></div>
                <p className="text-white/50 text-lg md:text-xl leading-relaxed font-light">
                  When the speed of physical portfolio changes outpaces your organization's digital reporting, you are no longer managing operations.<br/><br/>
                  <span className="font-medium text-white/90">You are reacting to a history book.</span>
                </p>
              </div>

              {/* Data Visualization of Latency vs Decision */}
              <div className="bg-[#050505] border border-white/5 rounded-2xl p-6 md:p-8 relative overflow-hidden group/viz">
                 
                 {/* Internal Console Grid Glare */}
                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none"></div>

                 <div className="flex justify-between text-[10px] font-mono text-white/30 mb-8 tracking-[0.2em] uppercase">
                   <span>Asset Velocity</span>
                   <span className="text-amber-500/70">Decision Lag</span>
                 </div>
                 
                 <div className="space-y-10 relative">
                   {/* Bar 1: Asset Reality */}
                   <div className="relative">
                     <span className="absolute -top-5 left-0 text-[10px] font-mono text-white/40 tracking-widest">REAL-TIME TRUTH</span>
                     <div className="relative h-2 w-full bg-[#0A0A0A] rounded-full overflow-hidden border border-white/5">
                       <motion.div 
                          initial={{ x: "-100%" }}
                          whileInView={{ x: "0%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, ease: "circOut" }}
                          className="absolute inset-y-0 left-0 w-[95%] bg-white/40 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                       ></motion.div>
                     </div>
                   </div>
                   
                   {/* Bar 2: Legacy ERP Reality */}
                   <div className="relative">
                     <span className="absolute -top-5 left-0 text-[10px] font-mono text-amber-500/60 tracking-widest">ERP REPORTING SIGHTLINE</span>
                     <div className="relative h-2 w-full bg-[#0A0A0A] rounded-full overflow-hidden border border-white/5 shadow-[inset_0_0_10px_rgba(245,158,11,0.02)]">
                       <motion.div 
                          initial={{ x: "-100%" }}
                          whileInView={{ x: "0%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 3, delay: 0.5, ease: "easeOut" }}
                          className="absolute inset-y-0 left-0 w-[45%] bg-amber-500/50 rounded-full"
                       >
                         {/* Moving scanline inside the amber bar */}
                         <div className="absolute inset-0 w-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"></div>
                       </motion.div>
                     </div>
                   </div>

                   {/* Vertical Line showing the gap */}
                   <div className="absolute top-2 bottom-0 left-[45%] w-px bg-amber-500/80 shadow-[0_0_15px_rgba(245,158,11,0.5)] z-10"></div>
                   
                   {/* Measurement bracket */}
                   <motion.div 
                     initial={{ opacity: 0, x: -10 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
                     className="absolute left-[47%] top-1/2 -translate-y-1/2 flex items-center gap-4"
                   >
                     <div className="h-px w-8 bg-amber-500/30 hidden md:block"></div>
                     <div className="text-[10px] md:text-xs font-mono text-amber-500/90 font-medium tracking-[0.2em] uppercase">
                       T+30 Days Blindspot
                     </div>
                   </motion.div>
                 </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
