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
  secondaryCtaText = "Download Framework",
  secondaryCtaHref = "/how-it-works",
  hideSecondary = false
}: FinalCtaSectionProps) {
  return (
    <>
      <section className="py-24 md:py-40 px-6 md:px-12 bg-surface flex items-center justify-center text-center">
        <motion.div 
          className="max-w-5xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-[3rem] leading-[1.1] md:text-display-sm font-display font-bold text-white tracking-tighter mb-6">
            This Is Not Software.
          </h2>
          <p className="text-lg md:text-xl text-primary font-label uppercase tracking-[0.3em] font-light">
            It is an architectural decision.
          </p>
        </motion.div>
      </section>
      
      <section className="py-32 md:py-40 px-6 md:px-12 bg-surface-container-low relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(226, 195, 132, 0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        {/* Ambient Top Glow */}
        <div className="bg-glow-blob w-[600px] h-[300px] top-0 left-1/2 -translate-x-1/2 opacity-20"></div>

        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10 space-y-8 md:space-y-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[2.5rem] leading-[1.1] md:text-display-sm text-white tracking-tight text-glow-primary">{headline}</h2>
          
          {subtext && (
            <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light max-w-2xl mx-auto">
              {subtext}
            </p>
          )}

          <div className={`flex flex-col md:flex-row justify-center gap-4 md:gap-6 pt-4 md:pt-8 ${hideSecondary ? 'w-full max-w-sm mx-auto' : 'xl:px-20'}`}>
            <Link href={ctaHref}>
              <button className="btn-base btn-primary text-sm md:text-lg uppercase tracking-widest px-8 md:px-12 py-4 md:py-6 w-full md:w-auto shadow-[0_0_40px_rgba(226,195,132,0.4)] group">
                {ctaText}
              </button>
            </Link>
            {!hideSecondary && (
              <Link href={secondaryCtaHref}>
                <button className="btn-base btn-secondary text-sm md:text-lg uppercase tracking-widest px-8 md:px-12 py-4 md:py-6 w-full md:w-auto">
                  {secondaryCtaText}
                </button>
              </Link>
            )}
          </div>
        </motion.div>
      </section>
    </>
  );
}
