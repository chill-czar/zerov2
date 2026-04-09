"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export function TransformationSection() {
  const [hoveredCard, setHoveredCard] = useState<'legacy' | 'zero' | null>(null);

  const legacyItems = [
    { title: 'Fragmented Data Silos', desc: 'Disconnected spreadsheets and point solutions across procurement, delivery, and leasing.' },
    { title: 'Delayed Reporting', desc: 'Decisions made on 30-day old data cycles that inherently lack accuracy and confidence.' },
    { title: 'Reactive Management', desc: 'Scrambling to fix critical variances only after they impact the institutional bottom line.' }
  ];

  const zeroItems = [
    { title: 'Structured Sovereignty', desc: 'A unified architectural core owning the undeniable truth of every asset and action.' },
    { title: 'Real-time Telemetry', desc: 'Zero latency between physical ground action, financial impact, and executive insight.' },
    { title: 'Controlled Outcomes', desc: 'Automated governance strictly preventing variance before it ever artificially occurs.' }
  ];

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Cinematic Deep Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none opacity-30 mask-[radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-linear-to-r from-transparent to-primary/50"></div>
              <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase">Transformation</span>
              <div className="h-px w-12 bg-linear-to-l from-transparent to-primary/50"></div>
            </div>
            <h2 className="text-[3rem] leading-[1.05] md:text-[5rem] font-display font-medium text-white tracking-tight">
              The Paradigm <span className="text-white/40 italic font-light">Shift.</span>
            </h2>
          </motion.div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
          
          {/* Legacy Card */}
          <motion.div 
            className={`rounded-3xl border border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl p-8 md:p-14 transition-all duration-700 relative overflow-hidden flex flex-col ${
              hoveredCard === 'zero' 
                ? 'opacity-30 scale-[0.98] blur-xs' 
                : hoveredCard === 'legacy' 
                  ? 'border-red-500/30 bg-[#0A0A0A] shadow-[0_0_60px_rgba(239,68,68,0.08)] scale-[1.02] z-10' 
                  : 'hover:border-red-500/20'
            }`}
            onMouseEnter={() => setHoveredCard('legacy')}
            onMouseLeave={() => setHoveredCard(null)}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Legacy Internal Glow */}
            <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(239,68,68,0.05)_0%,transparent_60%)] transition-opacity duration-1000 pointer-events-none ${hoveredCard === 'legacy' ? 'opacity-100' : 'opacity-0'}`}></div>

            <div className="relative z-10 flex items-center gap-4 mb-16 border-b border-white/5 pb-8">
              <div className="w-12 h-12 rounded-full bg-red-500/5 border border-red-500/20 flex items-center justify-center shrink-0">
                <X className="text-red-400/80" size={20} />
              </div>
              <div>
                 <span className="text-[10px] font-mono text-white/40 tracking-[0.2em] mb-1 block">DIAGNOSTIC</span>
                 <h3 className="text-sm font-mono uppercase tracking-[0.3em] text-red-500/90">The Legacy State</h3>
              </div>
            </div>

            <ul className="space-y-12 relative z-10">
              {/* Vertical connecting line */}
              <div className={`absolute left-[11px] top-6 bottom-12 w-px transition-colors duration-700 ${hoveredCard === 'legacy' ? 'bg-linear-to-b from-red-500/30 via-red-500/10 to-transparent' : 'bg-white/5'}`}></div>
              
              {legacyItems.map((item, i) => (
                <li key={i} className="flex items-start gap-8 relative group/item">
                  <div className={`mt-1 shrink-0 w-6 h-6 rounded-full border bg-[#050505] flex items-center justify-center transition-all duration-500 z-10 ${
                    hoveredCard === 'legacy' 
                      ? 'border-red-500/50 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]' 
                      : 'border-white/10 text-white/20'
                  }`}>
                    <X size={12} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className={`text-xl md:text-2xl font-display font-medium tracking-wide mb-3 transition-colors duration-500 ${hoveredCard === 'legacy' ? 'text-white' : 'text-white/60'}`}>{item.title}</h4>
                    <p className="text-on-surface-variant font-light text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ZERO Card */}
          <motion.div 
            className={`rounded-3xl border border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl p-8 md:p-14 transition-all duration-700 relative overflow-hidden flex flex-col ${
              hoveredCard === 'legacy' 
                ? 'opacity-30 scale-[0.98] blur-xs' 
                : hoveredCard === 'zero' 
                  ? 'border-primary/40 bg-[#0A0A0A] shadow-[0_0_80px_rgba(226,195,132,0.15)] scale-[1.02] z-10' 
                  : 'hover:border-primary/30'
            }`}
            onMouseEnter={() => setHoveredCard('zero')}
            onMouseLeave={() => setHoveredCard(null)}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* ZERO Internal Glow */}
            <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(226,195,132,0.12)_0%,transparent_70%)] transition-opacity duration-1000 pointer-events-none ${hoveredCard === 'zero' ? 'opacity-100' : 'opacity-0'}`}></div>

            <div className="relative z-10 flex items-center gap-4 mb-16 border-b border-white/5 pb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(226,195,132,0.2)]">
                <Check className="text-primary" size={20} strokeWidth={3} />
              </div>
              <div>
                 <span className="text-[10px] font-mono text-white/40 tracking-[0.2em] mb-1 block">SOLUTION</span>
                 <h3 className="text-sm font-mono uppercase tracking-[0.3em] text-primary">The ZERO State</h3>
              </div>
            </div>

            <ul className="space-y-12 relative z-10">
              {/* Vertical connecting line */}
              <div className={`absolute left-[11px] top-6 bottom-12 w-px transition-colors duration-700 ${hoveredCard === 'zero' ? 'bg-linear-to-b from-primary/50 via-primary/20 to-transparent' : 'bg-white/5'}`}></div>
              
              {zeroItems.map((item, i) => (
                <li key={i} className="flex items-start gap-8 relative group/item">
                  <div className={`mt-1 shrink-0 w-6 h-6 rounded-full border bg-[#050505] flex items-center justify-center transition-all duration-500 z-10 relative ${
                    hoveredCard === 'zero' 
                      ? 'border-primary/80 text-primary shadow-[0_0_15px_rgba(226,195,132,0.4)]' 
                      : 'border-white/10 text-white/20'
                  }`}>
                    <Check size={12} strokeWidth={4} />
                    {/* Ring ping animation */}
                    {hoveredCard === 'zero' && (
                       <motion.div 
                          className="absolute inset-[-4px] border border-primary/30 rounded-full"
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                       />
                    )}
                  </div>
                  <div>
                    <h4 className={`text-xl md:text-2xl font-display font-medium tracking-wide mb-3 transition-colors duration-500 ${hoveredCard === 'zero' ? 'text-primary' : 'text-white/60'}`}>{item.title}</h4>
                    <p className="text-on-surface-variant font-light text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
