"use client";
import { motion } from "framer-motion";

export function RealTimeVisibilitySection() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-surface relative overflow-hidden">
      <div className="bg-glow-blob w-[500px] h-[500px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-10"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10 space-y-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[3rem] md:text-[6rem] leading-[0.9] text-white tracking-tighter text-glow-primary">
            Built for Real-Time <br/> Decision Making
          </h2>
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-8 text-xl md:text-2xl text-secondary-fixed-dim font-light"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>No manual reporting</p>
          <span className="hidden md:block text-primary/30">•</span>
          <p>No delayed updates</p>
          <span className="hidden md:block text-primary/30">•</span>
          <p>No fragmented insights</p>
        </motion.div>

        <motion.div 
          className="mt-12 pt-12 border-t border-outline-variant/30 w-full max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-2xl md:text-3xl text-white font-body">
            What you see reflects what is happening — <span className="text-primary italic">now.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
