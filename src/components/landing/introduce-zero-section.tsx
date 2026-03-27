"use client";

import { motion } from 'framer-motion';
import { GitBranch, Eye, Shield } from 'lucide-react';

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
      <section className="py-24 md:py-40 px-6 md:px-12 overflow-hidden relative bg-surface">
        {/* Glow */}
        <div className="bg-glow-blob w-[600px] h-[600px] top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-20"></div>
        <div className="bg-glow-blob w-[400px] h-[400px] bottom-0 right-10 translate-y-1/2 opacity-20"></div>

        <motion.div 
          className="absolute -right-20 top-10 md:top-20 opacity-5 md:opacity-10 pointer-events-none"
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <span className="text-[10rem] md:text-[20rem] font-display font-bold leading-none tracking-tighter text-white">ZERO</span>
        </motion.div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2 
            className="text-[3.5rem] md:text-[6rem] text-primary tracking-tighter leading-[0.9] max-w-4xl text-glow-primary"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            ZERO Replaces Fragmentation With Structure.
          </motion.h2>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 md:px-12 bg-surface-container-low section-recessed rounded-none">
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={cardVariants} className="col-span-full mb-8 md:mb-12">
            <h3 className="text-label text-secondary-fixed-dim">The Foundation</h3>
            <p className="text-[2rem] leading-tight md:text-display-sm text-white mt-4">The Real Estate PMO Operating System.</p>
          </motion.div>
          
          <motion.div variants={cardVariants} className="card-elevated hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(226,195,132,0.15)] transition-all cursor-default group">
            <GitBranch className="text-primary w-10 h-10 mb-6 md:mb-8 transition-transform group-hover:scale-110" />
            <h4 className="text-lg md:text-xl font-display font-bold text-white mb-3 md:mb-4 uppercase">Data Sovereignty</h4>
            <p className="text-on-surface-variant leading-relaxed font-body text-sm md:text-base">A unified architectural core that owns the truth of every asset across the lifecycle.</p>
          </motion.div>
          
          <motion.div variants={cardVariants} className="card-elevated hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(226,195,132,0.15)] transition-all cursor-default group">
            <Eye className="text-primary w-10 h-10 mb-6 md:mb-8 transition-transform group-hover:scale-110" />
            <h4 className="text-lg md:text-xl font-display font-bold text-white mb-3 md:mb-4 uppercase">Radical Visibility</h4>
            <p className="text-on-surface-variant leading-relaxed font-body text-sm md:text-base">Real-time telemetry from procurement to leasing. Zero latency between action and insight.</p>
          </motion.div>
          
          <motion.div variants={cardVariants} className="card-elevated hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(226,195,132,0.15)] transition-all cursor-default group">
            <Shield className="text-primary w-10 h-10 mb-6 md:mb-8 transition-transform group-hover:scale-110" />
            <h4 className="text-lg md:text-xl font-display font-bold text-white mb-3 md:mb-4 uppercase">Institutional Rigor</h4>
            <p className="text-on-surface-variant leading-relaxed font-body text-sm md:text-base">Automated governance that prevents variance before it hits the bottom line.</p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
