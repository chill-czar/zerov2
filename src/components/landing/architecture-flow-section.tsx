"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Layers, Box, Activity, TrendingUp, Wallet } from 'lucide-react';

export function ArchitectureFlowSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Track visibility to start auto-scroll only when user sees it
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: "-100px", once: false });
  
  const steps = [
    { id: '01', title: 'Design', label: 'PHASE I', desc: 'Parametric blueprints & structural engineering validation locked into immutable ledgers.', icon: Layers },
    { id: '02', title: 'Procurement', label: 'PHASE II', desc: 'Global supply chain sync. Automated variance detection across vendor networks.', icon: Box },
    { id: '03', title: 'Construction', label: 'PHASE III', desc: 'Physical assembly tracked via real-time onsite telemetry and drone lidar sweeps.', icon: Activity },
    { id: '04', title: 'Sales', label: 'PHASE IV', desc: 'Market realization executing against dynamic, algorithmically optimized pricing models.', icon: TrendingUp },
    { id: '05', title: 'Revenue', label: 'FINAL', desc: 'Secure financial settlement and continuous portfolio value optimization.', icon: Wallet },
  ];

  // Automatic timeline progression
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIdx = (prev + 1) % steps.length;
        
        // Auto-pan the timeline on mobile so the active node stays focused
        if (scrollRef.current && window.innerWidth < 768) {
          const scrollTarget = nextIdx * 180; // approximate width offset per item
          scrollRef.current.scrollTo({ left: scrollTarget, behavior: "smooth" });
        }
        
        return nextIdx;
      });
    }, 1500); // 5 seconds per phase
    
    return () => clearInterval(interval);
  }, [isInView, steps.length]);

  return (
    <>
      <style>{`.hide-scrollbars::-webkit-scrollbar { display: none; } .hide-scrollbars { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
      <section ref={sectionRef} className="py-24 md:py-40 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
        
        {/* Subtle Background Structural Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px] pointer-events-none mask-[linear-gradient(to_bottom,black,transparent_70%)]"></div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col justify-center items-center text-center gap-6 mb-20 md:mb-32">
          
          <motion.div 
            className="w-full flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(226,195,132,1)]"></div>
               <span className="text-primary font-mono text-xs md:text-sm tracking-[0.2em] uppercase">Pipeline Topography</span>
               <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(226,195,132,1)]"></div>
            </div>
            <h2 className="text-[2.5rem] md:text-5xl lg:text-5xl text-white font-display font-medium tracking-tight mb-6 md:mb-8 leading-[1.1] max-w-4xl">
              Horizontal Narrative <span className="text-white/40 italic font-light">Architecture.</span>
            </h2>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl font-light leading-relaxed">
              ZERO maps the entire enterprise horizontal. We connect ground-level technical execution directly with top-floor financial strategy, ensuring no fidelity is lost in translation.
            </p>
          </motion.div>
        </div>

        {/* The Timeline Track */}
        <div 
          ref={scrollRef}
          className="w-full overflow-x-auto hide-scrollbars py-6 scroll-smooth snap-x snap-mandatory relative z-10"
        >
          <div className="min-w-[1000px] w-full max-w-5xl mx-auto px-4 md:px-2 relative flex items-start justify-between h-40 pt-4">
              
              {/* Continuous Background Track Line (Top 55px = 16px padding + 40px half-height - 1px) */}
              <div className="absolute left-[6%] right-[6%] top-[55px] h-0.5 bg-white/5 rounded-full overflow-hidden">
                {/* Active Gold Laser Track */}
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_15px_rgba(226,195,132,0.8)]"
                  initial={{ width: 0 }}
                  animate={{ width: `${(activeIndex / (steps.length - 1)) * 100}%` }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </div>

              {/* Step Nodes */}
              {steps.map((step, idx) => {
                const isActive = activeIndex >= idx;
                const isCurrent = activeIndex === idx;

                return (
                  <div 
                    key={step.id} 
                    className="relative z-10 flex flex-col items-center gap-5 group cursor-pointer w-28 snap-center"
                    onClick={() => {
                      setActiveIndex(idx);
                      if (scrollRef.current && window.innerWidth < 768) {
                         const scrollAmount = (idx - activeIndex) * 200;
                         scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
                      }
                    }}
                  >
                    {/* Node Circle - using transform origin to ensure unclipped scaling */}
                    <div className="relative flex items-center justify-center">
                       <div className={`w-20 h-20 rounded-full flex items-center justify-center border transition-all duration-700 bg-[#050505] transform-gpu origin-center ${isActive ? 'border-primary text-primary scale-110 shadow-[0_0_30px_rgba(226,195,132,0.2)]' : 'border-white/10 text-white/30 group-hover:border-white/30 group-hover:text-white/70'}`}>
                          {/* Inner pulsing core when active */}
                          {isCurrent && (
                            <div className="absolute inset-0 border border-primary/50 rounded-full animate-ping opacity-30 pointer-events-none"></div>
                          )}
                          <step.icon className="w-7 h-7 relative z-10" strokeWidth={1.5} />
                       </div>
                    </div>

                    {/* Step Title below node */}
                    <div className="flex flex-col items-center text-center mt-1">
                       <span className={`font-mono text-[10px] tracking-widest mb-1 transition-colors duration-500 ${isActive ? 'text-primary' : 'text-white/30'}`}>{step.id}</span>
                       <span className={`text-sm md:text-base font-medium transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}>{step.title}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Dynamic Focus Panel (Dashboard Card underneath timeline) */}
        <div className="max-w-5xl mx-auto mt-4 px-4 md:px-0 relative z-10 hidden sm:block">
           <div className="relative h-[220px] w-full rounded-2xl overflow-hidden border border-white/5 bg-white/1 backdrop-blur-md">
             
             {/* Subtle internal gradient glow */}
             <div className="absolute inset-0 bg-linear-to-b from-primary/2 to-transparent pointer-events-none"></div>

             <AnimatePresence mode="wait">
               {(() => {
                 const currentStep = steps[activeIndex] || steps[0];
                 if (!currentStep) return null;
                 
                 return (
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 p-8 md:p-12 flex items-center gap-10"
                  >
                     {/* Left Icon Graphic */}
                     <div className="shrink-0 w-24 h-24 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center relative">
                       <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full pointer-events-none"></div>
                       {React.createElement(currentStep.icon, { className: "w-10 h-10 text-primary relative z-10", strokeWidth: 1.5 })}
                     </div>

                     {/* Right Content */}
                     <div className="flex-1">
                       <div className="flex items-center gap-3 mb-2">
                         <span className="w-1 h-1 bg-primary rounded-full"></span>
                         <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase">{currentStep.label}</span>
                       </div>
                       <h3 className="text-3xl md:text-4xl text-white font-display font-medium tracking-tight mb-4">{currentStep.title} Operation</h3>
                       <p className="text-on-surface-variant text-base md:text-lg leading-relaxed font-light max-w-2xl">
                         {currentStep.desc}
                       </p>
                     </div>
                  </motion.div>
                 );
               })()}
             </AnimatePresence>
           </div>
        </div>

      </section>
    </>
  );
}
