"use client";

import React from 'react';
import Logo from './Logo';
import { ShieldCheck, Mail, MapPin, Globe } from 'lucide-react';

const links = [
  { name: 'Solutions', href: '#solutions' },
  { name: 'Services', href: '#services' },
  { name: 'Automation showcase', href: '#showcase' },
  { name: 'About us', href: '#about' },
  { name: 'Contact us', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-bg-white border-t border-secondary/30">
      <div className="max-w-7xl mx-auto px-space-6 sm:px-space-8 py-space-12 relative z-10">
        <div className="grid gap-space-8 sm:grid-cols-2 lg:grid-cols-4 text-left">

          {/* Logo & Tagline */}
          <div className="space-y-space-3">
            <div className="bg-bg-white p-space-2 rounded-sm inline-block">
              <Logo size="md" />
            </div>
            <p className="text-sm text-secondary leading-relaxed">
              Autom Mate engineers custom ERP systems, native Windows & mobile applications, web portals, WhatsApp AI chatbots, and process automation to eliminate manual business work.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-space-3">
            <h3 className="font-semibold text-bg-white text-base">Navigation</h3>
            <nav className="flex flex-col space-y-space-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-secondary hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-space-3">
            <h3 className="font-semibold text-bg-white text-base">Contact</h3>
            <div className="space-y-space-2 text-sm text-secondary">
              <div className="flex items-center gap-space-2">
                <Globe className="w-4 h-4 text-accent shrink-0" />
                <a href="https://automatebusinesssolutions.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">automatebusinesssolutions.vercel.app</a>
              </div>
              <div className="flex items-center gap-space-2">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>abs.innovates@gmail.com</span>
              </div>
              <div className="flex items-center gap-space-2">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>Andhra Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Certifications & Quality */}
          <div className="space-y-space-3">
            <h3 className="font-semibold text-bg-white text-base">Quality & standards</h3>
            <div className="space-y-space-2 text-sm text-secondary">
              <div className="flex items-center gap-space-2">
                <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                <span>Enterprise grade security</span>
              </div>
              <div className="flex items-center gap-space-2">
                <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                <span>Custom database architecture</span>
              </div>
              <div className="flex items-center gap-space-2">
                <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                <span>24/7 background automation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-space-10 pt-space-6 border-t border-secondary/30 flex flex-col sm:flex-row items-center justify-between text-xs text-secondary gap-space-4">
          <p>
            © {new Date().getFullYear()} Autom Mate. All rights reserved.
          </p>
          <div className="flex items-center space-x-space-4">
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#solutions" className="hover:text-primary transition-colors">Solutions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}