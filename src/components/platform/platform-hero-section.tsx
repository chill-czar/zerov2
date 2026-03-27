"use client";
import { motion } from "framer-motion";

export function PlatformHeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 md:px-12 bg-surface pt-32 pb-20 overflow-hidden">
      <div className="bg-glow-blob w-[600px] h-[400px] top-1/4 left-1/2 -translate-x-1/2 opacity-20"></div>
      
      <motion.div 
        className="max-w-4xl text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-primary font-label uppercase tracking-widest text-sm md:text-base mb-6 block">Core Definition</span>
        <h1 className="text-[3.5rem] md:text-display-lg lg:text-[6rem] text-white leading-tight tracking-tighter text-glow-primary mb-8">
          A Real Estate PMO <br className="hidden md:block"/> Operating System
        </h1>
        <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light tracking-tight max-w-3xl mx-auto leading-relaxed mb-6">
          ZERO brings structure to real estate portfolios by aligning projects, departments, and business performance in one system.
        </p>
        <p className="text-lg md:text-xl text-primary font-body max-w-2xl mx-auto">
          It is not built for tasks. <br className="md:hidden"/>
          <span className="text-white font-medium">It is built for control.</span>
        </p>
      </motion.div>
    </section>
  );
}
