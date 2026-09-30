"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-space-12 bg-dark text-bg-white border-b border-dark">
      <div className="max-w-7xl mx-auto px-space-6 sm:px-space-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 items-center">
          <div className="lg:col-span-8 text-left space-y-space-3">
            <div className="inline-flex items-center gap-space-2 px-space-3 py-space-1 rounded-sm bg-accent/20 text-accent text-xs font-mono">
              <Terminal className="w-3.5 h-3.5" />
              <span>Tailored business software</span>
            </div>
            <h2 className="text-2xl sm:text-lg font-bold tracking-tight leading-tight">
              Ready to eliminate manual work and build your custom ERP or app?
            </h2>
            <p className="text-base text-secondary max-w-xl">
              Connect with our software engineers for a free consultation and project scope blueprint.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-4">
            <a
              href="#contact"
              className="btn-primary w-full text-center"
            >
              <span>Request free consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="btn-secondary w-full text-center bg-transparent border-secondary/40 text-bg-white hover:border-bg-white hover:text-primary"
            >
              <span>Explore custom solutions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}