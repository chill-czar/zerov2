"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

interface FinalCtaSectionProps {
  headline?: string;
  subtext?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  hideSecondary?: boolean;
}

export function FinalCtaSection({
  headline = "Take Command of Your Portfolio.",
  subtext = "",
  ctaText = "Schedule Authority Briefing",
  ctaHref = "/contact",
  secondaryCtaText = "Explore Architecture",
  secondaryCtaHref = "/platform",
  hideSecondary = false
}: FinalCtaSectionProps) {
  return (
    <>
      <section className="py-32 md:py-48 px-6 md:px-12 bg-[#020202] relative overflow-hidden flex items-center justify-center text-center border-t border-white/5">
        {/* Subtle background pulse for cinematic depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(226,195,132,0.03)_0%,transparent_60%)] pointer-events-none"></div>

        <motion.div 
          className="max-w-5xl relative z-10"
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="text-[3.5rem] leading-[1.05] md:text-[7rem] font-display font-medium text-white tracking-tighter mb-8">
            This Is Not <span className="text-white/30 italic font-light pr-4">Software.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="hidden sm:block h-px w-16 bg-linear-to-r from-transparent to-primary/50"></div>
            <p className="text-sm md:text-base text-primary font-mono uppercase tracking-[0.4em]">
              It is an architectural decision
            </p>
            <div className="hidden sm:block h-px w-16 bg-linear-to-l from-transparent to-primary/50"></div>
          </div>
        </motion.div>
      </section>
      
      <section className="py-32 md:py-48 px-6 md:px-12 bg-[#050505] relative overflow-hidden border-t border-white/5 border-b">
        {/* Architectural Background Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none opacity-50 mask-[radial-gradient(ellipse_at_center,black_50%,transparent_90%)]"></div>
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(226,195,132,0.15)_0%,transparent_70%)] pointer-events-none"></div>

        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10 space-y-10 md:space-y-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[2.5rem] leading-[1.1] md:text-[4.5rem] text-white tracking-tight font-display font-medium">
            {headline.split(' ').map((word, i, arr) => (
              <span key={i} className={i === arr.length - 1 ? "text-primary italic font-light pr-2" : ""}>
                {word}{' '}
              </span>
            ))}
          </h2>
          
          {subtext && (
            <p className="text-xl md:text-2xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
              {subtext}
            </p>
          )}

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8 md:pt-4 mx-auto relative z-20">
            <Link href={ctaHref} className={`w-full sm:w-auto ${hideSecondary ? 'max-w-md mx-auto relative group/cta block' : 'relative group/cta'}`}>
               <div className="absolute -inset-1 bg-primary/20 rounded-none blur-md group-hover/cta:bg-primary/40 transition-colors duration-500"></div>
               <button className="relative w-full bg-primary text-[#050505] font-mono text-sm md:text-base uppercase tracking-[0.2em] px-10 py-5 transition-transform duration-500 hover:-translate-y-1 inner-shadow-sm font-semibold">
                  {ctaText}
               </button>
            </Link>

            {!hideSecondary && (
              <Link href={secondaryCtaHref} className="w-full sm:w-auto group/sec">
                <button className="w-full bg-transparent border border-white/20 text-white font-mono text-sm md:text-base uppercase tracking-[0.2em] px-10 py-5 transition-all duration-500 hover:border-white/60 hover:bg-white/5">
                  {secondaryCtaText}
                </button>
              </Link>
            )}
          </div>
        </motion.div>

        {/* Decorative corner framing lines */}
        <div className="absolute top-12 left-12 w-16 h-px bg-white/20 hidden lg:block"></div>
        <div className="absolute top-12 left-12 w-px h-16 bg-white/20 hidden lg:block"></div>
        
        <div className="absolute bottom-12 right-12 w-16 h-px bg-white/20 hidden lg:block"></div>
        <div className="absolute bottom-12 right-12 w-px h-16 bg-white/20 hidden lg:block"></div>
      </section>
    </>
  );
}
