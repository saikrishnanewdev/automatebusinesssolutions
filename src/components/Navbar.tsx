"use client";

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-[#031638]/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-xl shadow-black/40'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#hero" className="group transition-transform duration-200 hover:scale-[1.02]">
          <Logo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#06245A]/40 border border-slate-800/80 px-4 py-1.5 rounded-full backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#contact"
            className="relative group overflow-hidden rounded-full p-[1px] font-semibold text-sm transition-transform active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 rounded-full transition-all duration-300 group-hover:opacity-100" />
            <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#031638] text-white transition-colors duration-300 group-hover:bg-[#06245A]">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 text-amber-400 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#06245A]/80 border border-amber-500/30 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6 text-amber-400" />}
        </button>
      </div>

      {/* Mobile Animated Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#031638]/95 backdrop-blur-xl border-b border-amber-500/30 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-[#06245A]/60 transition-colors border-l-2 border-transparent hover:border-amber-500"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/20 active:scale-98 transition-transform"
                >
                  <span>Start Automating</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}