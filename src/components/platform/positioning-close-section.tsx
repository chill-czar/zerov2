"use client";
import { motion } from "framer-motion";

export function PositioningCloseSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-4xl mx-auto text-center border-b border-outline-variant/30 pb-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[3rem] leading-[1.1] md:text-[5rem] text-primary tracking-tighter text-glow-primary mb-8">
            From Projects to <br className="hidden md:block"/>Portfolio Control
          </h2>
          <p className="text-xl md:text-3xl text-secondary-fixed-dim font-light leading-relaxed">
            ZERO transforms fragmented operations <br className="hidden md:block"/>into structured intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
