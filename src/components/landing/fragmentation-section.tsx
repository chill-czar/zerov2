"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { StickyScroll } from '~/components/ui/sticky-scroll-reveal';

export function FragmentationSection() {
  const LeftStickyContent = (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
        <span className="text-xs font-mono text-white/50 uppercase tracking-[0.3em]">The Baseline Problem</span>
      </div>
      
      <h2 className="text-[3rem] md:text-[4.5rem] leading-[1.05] font-display font-medium text-white mb-8 tracking-tight">
        The Ecosystem of <span className="text-white/30 italic font-light">Isolation.</span>
      </h2>
      <p className="text-white/50 font-light text-lg md:text-xl leading-relaxed">
        No single system sees the full picture. Crucial project and portfolio data is trapped in disconnected silos, requiring extreme human intervention to bridge the gaps. 
        The result is a fragile architecture of reactive decision-making.
      </p>
    </motion.div>
  );

  const content = [
    {
      title: "Decentralized Spreadsheets",
      description: (
        <div className="rounded-3xl p-8 md:p-12 group border border-white/5 hover:border-white/10 bg-[#0A0A0A]/40 backdrop-blur-md relative overflow-hidden transition-colors w-full">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity duration-700">
            <span className="text-[8rem] font-display font-medium text-white/[0.03] leading-none">01</span>
          </div>
          
          <div className="mb-10 flex items-center justify-between relative z-10">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-white/90 transition-colors">Decentralized Spreadsheets</h3>
          </div>

          <div className="h-32 w-full bg-[#050505] border border-white/5 rounded-xl mb-10 p-5 flex flex-col gap-3 relative overflow-hidden z-10">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
            {Array.from<undefined>({ length: 3 }).map((_, r) => (
              <div key={r} className="flex gap-3 w-full">
                {Array.from<undefined>({ length: 5 }).map((_, c) => {
                  const isError = (r === 1 && c === 3) || (r === 2 && c === 1);
                  return (
                    <div 
                      key={c} 
                      className={`h-4 rounded-sm flex-1 transition-all duration-500 ${isError ? 'bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20' : 'bg-white/5 border border-white/5'} ${isError ? 'group-hover:translate-y-1' : ''}`}
                    ></div>
                  );
                })}
              </div>
            ))}
          </div>

          <p className="text-white/40 font-light text-base leading-relaxed relative z-10">
            Hundreds of isolated workbooks with un-auditable cell-level logic and version control nightmares. A single broken formula compromises the entire portfolio.
          </p>
        </div>
      )
    },
    {
      title: "Legacy ERP Silos",
      description: (
        <div className="rounded-3xl p-8 md:p-12 group border border-white/5 hover:border-white/10 bg-[#0A0A0A]/40 backdrop-blur-md relative overflow-hidden transition-colors w-full">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity duration-700">
            <span className="text-[8rem] font-display font-medium text-white/[0.03] leading-none">02</span>
          </div>
          
          <div className="mb-10 flex items-center justify-between relative z-10">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-white/90 transition-colors">Legacy ERP Silos</h3>
          </div>

          <div className="h-32 w-full bg-[#050505] border border-white/5 rounded-xl mb-10 flex items-center justify-center relative overflow-hidden z-10">
            <div className="w-3/4 h-16 border border-white/10 bg-[#0A0A0A] rounded-lg flex items-center justify-center gap-5 group-hover:border-amber-500/20 transition-colors duration-500 relative">
              <div className="absolute -inset-1 bg-amber-500/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center group-hover:bg-amber-500/10 transition-colors duration-500">
                <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-amber-500 group-hover:animate-pulse transition-colors duration-500"></div>
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="h-1.5 w-24 bg-white/20 rounded-full"></div>
                <div className="h-1.5 w-16 bg-white/10 rounded-full"></div>
              </div>
              <div className="absolute -bottom-3 right-4 bg-[#050505] px-2 py-0.5 rounded border border-white/10 text-[9px] text-amber-500/80 font-mono tracking-[0.2em] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                SYNC: 30 DAY DELAY
              </div>
            </div>
          </div>

          <p className="text-white/40 font-light text-base leading-relaxed relative z-10">
            Rigid financial systems that force operations to work around them. Decisions are made on 30-day reporting delays, making proactive management impossible.
          </p>
        </div>
      )
    },
    {
      title: "The Human Protocol",
      description: (
        <div className="rounded-3xl p-8 md:p-12 group border border-white/5 hover:border-white/10 bg-[#0A0A0A]/40 backdrop-blur-md relative overflow-hidden transition-colors w-full">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity duration-700">
            <span className="text-[8rem] font-display font-medium text-white/[0.03] leading-none">03</span>
          </div>
          
          <div className="mb-10 flex items-center justify-between relative z-10">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-white/90 transition-colors">The Human Protocol</h3>
          </div>

          <div className="h-32 w-full bg-[#050505] border border-white/5 rounded-xl mb-10 relative overflow-hidden flex items-center justify-between px-8 z-10">
            <div className="w-12 h-12 rounded-lg border border-white/10 bg-[#0A0A0A] flex items-center justify-center">
              <div className="w-4 h-4 bg-white/10 rounded-sm"></div>
            </div>
            
            <div className="flex-1 px-4 relative h-full flex flex-col justify-center gap-3">
              <div className="h-px w-full bg-linear-to-r from-white/0 via-white/10 to-white/0 relative overflow-hidden">
                <div className="absolute inset-0 w-1/2 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[slideRight_1.5s_infinite_linear]"></div>
              </div>
              <div className="h-px w-full bg-linear-to-r from-white/0 via-white/10 to-white/0 relative overflow-hidden">
                <div className="absolute inset-0 w-1/2 bg-linear-to-r from-transparent via-white/30 to-transparent translate-x-[200%] group-hover:animate-[slideLeft_1.8s_infinite_linear]"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] border border-amber-500/30 rounded w-8 h-5 flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 delay-200">
                <span className="text-[8px] text-amber-500/80 font-mono tracking-widest pl-0.5">ERR</span>
              </div>
            </div>

            <div className="w-12 h-12 rounded-lg border border-white/10 bg-[#0A0A0A] flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-white/20"></div>
            </div>
          </div>

          <p className="text-white/40 font-light text-base leading-relaxed relative z-10">
            Highly paid professionals reduced to data-entry clerks. They act as the manual bridge between fragmented tools, attempting reconciliation through sheer brute force.
          </p>
        </div>
      )
    }
  ];

  return (
    <section className="bg-[#050505] py-24 md:py-40 px-6 md:px-12 relative border-t border-white/5">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-size-[40px_40px] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <StickyScroll
          content={content}
          stickyOnLeft={true}
          stickyContentOverride={LeftStickyContent}
          hideTitles={true}
          containerClassName="gap-16 lg:gap-24"
          contentClassName="lg:w-5/12 lg:top-[30vh] z-10 self-start"
          scrollContentClassName="lg:w-7/12 w-full relative z-10"
          scrollItemClassName="mb-12 md:mb-16"
        />
      </div>

      <style jsx global>{`
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes slideLeft {
          0% { transform: translateX(200%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
}
