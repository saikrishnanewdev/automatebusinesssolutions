"use client";

import React from 'react';
import Logo from './Logo';
import { ShieldCheck, Cpu } from 'lucide-react';

const links = [
  { name: 'Services', href: '#services' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Process', href: '#process' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact Us', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#020B19] border-t border-amber-500/20 py-12 text-slate-400 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Logo & Tagline */}
          <div className="space-y-2 text-center md:text-left">
            <Logo size="md" showTagline={true} />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-slate-300">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2 text-slate-400">
            <Cpu className="w-4 h-4 text-amber-500" />
            <span>© 2026 AUTOMATE BUSINESS SOLUTIONS. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> High-Performance Automation Software
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}