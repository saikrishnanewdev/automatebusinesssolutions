"use client";

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Solutions', href: '#solutions' },
  { name: 'Services', href: '#services' },
  { name: 'Architecture', href: '#showcase' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-white/95 backdrop-blur-md border-b border-border-medium shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-space-6 sm:px-space-8 flex items-center justify-between h-20">
        <a href="#hero" className="flex items-center space-x-space-2 group transition-transform duration-200 hover:scale-[1.01]">
          <Logo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-space-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-dark hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center space-x-space-4">
          <a
            href="#contact"
            className="btn-primary"
          >
            <span>Request demo</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-space-2 rounded-sm bg-bg-white border border-border-medium text-dark hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-dark" />}
        </button>
      </div>

      {/* Mobile Animated Menu Drawer */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : -10 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden fixed top-20 left-0 right-0 z-40 bg-bg-white border-b border-border-medium p-space-6 shadow-lg ${
          mobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="space-y-space-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-space-4 py-space-3 rounded-sm text-sm font-medium text-dark hover:text-primary hover:bg-bg-light transition-colors"
            >
              <span>{link.name}</span>
              <ArrowRight className="w-4 h-4 text-primary" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full btn-primary mt-space-4"
          >
            <span>Request demo</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </header>
  );
}