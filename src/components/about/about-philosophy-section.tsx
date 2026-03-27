"use client";
import { motion } from "framer-motion";

export function AboutPhilosophySection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-surface-container-lowest border-y border-outline-variant/30">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="text-primary font-label uppercase tracking-widest text-sm block">Philosophy</span>
          <h2 className="text-[3rem] md:text-display-sm text-white tracking-tight leading-tight">
            Structure Over Chaos
          </h2>
          <div className="space-y-6 text-xl md:text-2xl text-secondary-fixed-dim font-light leading-relaxed max-w-2xl pl-8 border-l-2 border-primary/30 py-2">
            <p>Real estate development is one of the most complex industries in the world.</p>
            <p>Yet most developers still manage their portfolios the way they did twenty years ago.</p>
            <p>Spreadsheets. Disconnected systems. Manual reports.</p>
          </div>
          <p className="text-2xl md:text-3xl text-white font-body pt-8">
            ZERO was built to change that.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 pt-16 border-t border-outline-variant/30"
        >
          <h2 className="text-[2.5rem] md:text-4xl text-white tracking-tight">Not Another Tool</h2>
          <div className="space-y-4 text-xl md:text-2xl text-secondary-fixed-dim font-light max-w-2xl leading-relaxed">
            <p>ZERO is not another project management tool.</p>
            <p>It is an operating system — designed to bring portfolio-level structure to real estate organizations that operate in complexity.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
