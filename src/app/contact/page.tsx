"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 md:px-12 bg-surface pt-32 pb-20 overflow-hidden">
        <div className="bg-glow-blob w-[600px] h-[400px] top-1/4 left-1/2 -translate-x-1/2 opacity-20"></div>
        <motion.div
          className="max-w-4xl text-center relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-label uppercase tracking-widest text-sm md:text-base mb-6 block">Request Access</span>
          <h1 className="text-[3.5rem] md:text-display-lg lg:text-[6rem] text-white leading-tight tracking-tighter text-glow-primary mb-8">
            See How ZERO Works
          </h1>
          <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light tracking-tight max-w-3xl mx-auto leading-relaxed mb-6">
            Experience how your portfolio becomes structured, visible, and controllable.
          </p>
          <p className="text-lg md:text-xl text-primary font-body max-w-2xl mx-auto">
            No commitment. <span className="text-white font-medium">No sales pressure.</span>
          </p>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface-container-lowest border-t border-outline-variant/30">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-8 py-16"
            >
              <div className="bg-glow-blob w-[400px] h-[200px] top-0 left-1/2 -translate-x-1/2 opacity-20 relative"></div>
              <h2 className="text-[2.5rem] md:text-4xl text-white tracking-tight text-glow-primary">Request Received</h2>
              <p className="text-xl text-secondary-fixed-dim font-light max-w-md mx-auto">
                We will be in touch with you shortly to walk through the ZERO platform.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-label text-primary uppercase tracking-widest mb-3 block">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-surface-container border border-outline-variant/50 p-4 text-white font-body text-lg focus:border-primary focus:outline-none transition-colors placeholder:text-on-surface-variant/40"
                    placeholder="Ahmad"
                  />
                </div>
                <div>
                  <label className="text-xs font-label text-primary uppercase tracking-widest mb-3 block">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-surface-container border border-outline-variant/50 p-4 text-white font-body text-lg focus:border-primary focus:outline-none transition-colors placeholder:text-on-surface-variant/40"
                    placeholder="Al-Sayed"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-label text-primary uppercase tracking-widest mb-3 block">Work Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-surface-container border border-outline-variant/50 p-4 text-white font-body text-lg focus:border-primary focus:outline-none transition-colors placeholder:text-on-surface-variant/40"
                  placeholder="name@company.com"
                />
              </div>

              <div>
                <label className="text-xs font-label text-primary uppercase tracking-widest mb-3 block">Role</label>
                <input
                  type="text"
                  className="w-full bg-surface-container border border-outline-variant/50 p-4 text-white font-body text-lg focus:border-primary focus:outline-none transition-colors placeholder:text-on-surface-variant/40"
                  placeholder="CEO, PMO Director, Asset Manager..."
                />
              </div>

              <div>
                <label className="text-xs font-label text-primary uppercase tracking-widest mb-3 block">Company</label>
                <input
                  type="text"
                  className="w-full bg-surface-container border border-outline-variant/50 p-4 text-white font-body text-lg focus:border-primary focus:outline-none transition-colors placeholder:text-on-surface-variant/40"
                  placeholder="Your organization"
                />
              </div>

              <div>
                <label className="text-xs font-label text-primary uppercase tracking-widest mb-3 block">How many projects in your portfolio?</label>
                <select className="w-full bg-surface-container border border-outline-variant/50 p-4 text-white font-body text-lg focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer">
                  <option value="">Select range</option>
                  <option value="1-5">1 – 5 projects</option>
                  <option value="6-15">6 – 15 projects</option>
                  <option value="16-50">16 – 50 projects</option>
                  <option value="50+">50+ projects</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn-base btn-primary text-sm md:text-lg uppercase tracking-widest py-5 mt-4 w-full shadow-[0_0_40px_rgba(226,195,132,0.35)] hover:shadow-[0_0_60px_rgba(226,195,132,0.5)] group"
              >
                Request Access
              </button>

              <p className="text-center text-xs text-on-surface-variant/50 font-label uppercase tracking-wider">
                No commitment. No sales pressure.
              </p>
            </motion.form>
          )}
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="py-16 px-6 md:px-12 bg-surface border-t border-outline-variant/30">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-start md:items-center text-center md:text-left">
          <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light flex-1">
            ZERO is designed for real estate organizations managing multiple projects across departments.
          </p>
          <p className="text-xl md:text-2xl text-primary font-body flex-1">
            One system. Complete visibility. Structural control.
          </p>
        </div>
      </section>
    </>
  );
}
