"use client";

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function TopNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-surface/90 backdrop-blur-xl w-full px-6 md:px-12 py-6 max-w-[1920px] mx-auto sticky top-0 z-50 border-none shadow-ambient relative">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter text-primary font-display hover:text-primary-fixed transition-colors">
          ZERO PMO
        </Link>
        
        <div className="hidden lg:flex gap-8 items-center">
          <Link href="/platform" className="text-on-surface-variant hover:text-white transition-colors font-label text-sm">Platform</Link>
          <Link href="/how-it-works" className="text-on-surface-variant hover:text-white transition-colors font-label text-sm">How It Works</Link>
          <Link href="/solutions" className="text-on-surface-variant hover:text-white transition-colors font-label text-sm">Solutions</Link>
          <Link href="/case-studies" className="text-on-surface-variant hover:text-white transition-colors font-label text-sm">Case Studies</Link>
          <Link href="/insights" className="text-on-surface-variant hover:text-white transition-colors font-label text-sm">Insights</Link>
          <Link href="/about" className="text-on-surface-variant hover:text-white transition-colors font-label text-sm">About</Link>
          <Link href="/contact" className="text-on-surface-variant hover:text-white transition-colors font-label text-sm">Contact</Link>

          <Link href="/contact" className="ml-4">
            <button className="btn-base btn-primary text-sm uppercase tracking-widest py-2 px-6 shadow-[0_0_20px_rgba(226,195,132,0.3)] hover:shadow-[0_0_30px_rgba(226,195,132,0.5)]">
              Request Access
            </button>
          </Link>
        </div>

        <button 
          className="lg:hidden text-primary p-2 flex items-center justify-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown — absolutely positioned so it overlays content below */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-xl border-t border-outline-variant/30 flex flex-col gap-6 px-6 py-8 z-50 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          >
            <Link href="/platform" className="text-on-surface-variant hover:text-white font-label text-sm" onClick={() => setIsOpen(false)}>Platform</Link>
            <Link href="/how-it-works" className="text-on-surface-variant hover:text-white font-label text-sm" onClick={() => setIsOpen(false)}>How It Works</Link>
            <Link href="/solutions" className="text-on-surface-variant hover:text-white font-label text-sm" onClick={() => setIsOpen(false)}>Solutions</Link>
            <Link href="/case-studies" className="text-on-surface-variant hover:text-white font-label text-sm" onClick={() => setIsOpen(false)}>Case Studies</Link>
            <Link href="/insights" className="text-on-surface-variant hover:text-white font-label text-sm" onClick={() => setIsOpen(false)}>Insights</Link>
            <Link href="/about" className="text-on-surface-variant hover:text-white font-label text-sm" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/contact" className="text-on-surface-variant hover:text-white font-label text-sm" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button className="btn-base btn-primary text-sm uppercase tracking-wider py-3 mt-2 w-full">
                Request Access
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
