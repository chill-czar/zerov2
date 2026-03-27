"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BarChart2, ShieldCheck } from 'lucide-react';
import PixelBlast from '~/components/PixelBlast';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden bg-background pt-24 md:pt-32 pb-20">
      {/* Interactive Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <PixelBlast
          variant="diamond"
          pixelSize={5}
          color="#e2c384"
          patternScale={6}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples={true}
          rippleSpeed={0.3}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Hero Core (Center Aligned) */}
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center relative z-10 space-y-8 md:space-y-12">
        
        {/* Ambient Top Glow */}
        <div className="bg-glow-blob w-[600px] h-[300px] top-[-100px] left-1/2 -translate-x-1/2 opacity-20"></div>

        <motion.div 
          className="space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-label text-primary uppercase tracking-widest">Architectural Monolith v2.0</span>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-[3.5rem] md:text-display-lg lg:text-[6.5rem] text-white leading-[1.05] tracking-tighter text-glow-primary">
            You don&apos;t have a <br className="hidden md:block" />
            <span className="bg-linear-to-br from-[#f6e1b5] via-primary to-[#b89b58] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(226,195,132,0.5)]">visibility</span> problem.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-secondary-fixed-dim font-light tracking-tight max-w-3xl mx-auto leading-relaxed">
            You have a fragmentation problem. Stop reacting to legacy spreadsheets and start commanding your real estate portfolio with absolute certainty.
          </motion.p>
          
          <motion.div variants={itemVariants} className="pt-8 md:pt-12 flex flex-col md:flex-row justify-center items-center gap-6">
            <Link href="/contact">
              <button className="btn-base btn-primary text-base md:text-lg uppercase tracking-widest px-10 py-5 w-full md:w-auto shadow-[0_0_40px_rgba(226,195,132,0.4)] group">
                See How ZERO Works
              </button>
            </Link>
            <Link href="/how-it-works">
              <button className="btn-base btn-secondary text-base md:text-lg uppercase tracking-widest px-10 py-5 w-full md:w-auto">
                Book Executive Briefing
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Cockpit Graphic Mockup */}
        <motion.div 
          className="w-full max-w-6xl mt-16 md:mt-24 relative"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, type: "spring", stiffness: 30 }}
        >
          {/* Core Graphic Glow */}
          <div className="bg-glow-blob w-[80%] h-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
          
          <div className="relative glass-panel border border-outline-variant/50 rounded-2xl w-full aspect-[21/9] overflow-hidden group hover:border-primary/50 transition-colors duration-700 shadow-[0_20px_80px_rgba(0,0,0,0.8)]">
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-surface/90 flex flex-col justify-end p-8 md:p-12 z-10">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl md:text-3xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors text-glow-primary">Unified Truth Engine</h3>
                  <p className="text-on-surface-variant max-w-lg text-sm md:text-base">Real-time telemetry executing across all 40+ departments simultaneously with zero manual intervention.</p>
                </div>
                <div className="hidden md:flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest border border-outline-variant flex justify-center items-center backdrop-blur-xl">
                    <BarChart2 size={20} className="text-primary" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest border border-outline-variant flex justify-center items-center backdrop-blur-xl">
                    <ShieldCheck size={20} className="text-primary" />
                  </div>
                </div>
              </div>
            </div>
            {/* Minimalist Dashboard Lines decorative background */}
            <div className="absolute inset-x-0 top-0 h-full opacity-20 pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(rgba(226, 195, 132, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(226, 195, 132, 0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
