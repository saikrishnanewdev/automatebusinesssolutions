"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Smartphone, MessageSquare, Cpu, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-bg-light overflow-hidden border-b border-border-medium">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#CFCFCF_1px,transparent_1px),linear-gradient(to_bottom,#CFCFCF_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-space-6 sm:px-space-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-10 items-center">
          
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-6 space-y-space-6 text-left">
            {/* Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-space-2 px-space-4 py-space-2 rounded-sm bg-bg-white border border-border-medium shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary" />
              <span className="text-xs font-medium text-dark">
                Custom software development & manual process automation
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-xl font-bold tracking-tight text-dark leading-tight"
            >
              Custom ERP systems, mobile apps & automated workflows.
            </motion.h1>

            {/* Body Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-secondary max-w-xl leading-relaxed"
            >
              Autom Mate engineers custom Windows desktop software, native iOS & Android applications, full-stack web portals, WhatsApp AI chatbots, and custom software that eliminates manual work in any business operation.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-4 pt-space-2"
            >
              <a href="#contact" className="btn-primary">
                <span>Request custom solution</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="#services" className="btn-secondary">
                <span>Explore our services</span>
              </a>
            </motion.div>

            {/* Core Capability Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-space-6 flex flex-wrap gap-space-4 text-xs text-secondary border-t border-border-light"
            >
              <div className="flex items-center gap-space-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Custom ERP Systems</span>
              </div>
              <div className="flex items-center gap-space-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Windows & Mobile Apps</span>
              </div>
              <div className="flex items-center gap-space-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>WhatsApp AI Automation</span>
              </div>
              <div className="flex items-center gap-space-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Zero Manual Work</span>
              </div>
            </motion.div>
          </div>

          {/* UI Mockup Showcase Image Card */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card-token p-space-3 bg-bg-white border-border-medium shadow-md rounded-sm"
            >
              <div className="flex items-center justify-between pb-space-3 px-space-2 border-b border-border-light mb-space-3 text-xs">
                <div className="flex items-center gap-space-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  <span className="text-dark font-medium ml-space-2">Autom Mate ERP & Systems Portal</span>
                </div>
                <span className="text-xs bg-bg-light border border-border-light text-primary px-space-2 py-space-1 rounded-sm font-medium">
                  Live preview
                </span>
              </div>

              {/* Main Image Container */}
              <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-border-light bg-bg-light">
                <Image
                  src="/images/erp_dashboard.jpg"
                  alt="Custom ERP Software Dashboard Mockup"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Quick Feature Badges below Image */}
              <div className="mt-space-3 pt-space-3 border-t border-border-light grid grid-cols-3 gap-space-2 text-center text-xs">
                <div className="p-space-2 bg-bg-light border border-border-light rounded-sm">
                  <Monitor className="w-4 h-4 text-primary mx-auto mb-1" />
                  <span className="text-dark font-medium">Windows & Web</span>
                </div>
                <div className="p-space-2 bg-bg-light border border-border-light rounded-sm">
                  <Smartphone className="w-4 h-4 text-primary mx-auto mb-1" />
                  <span className="text-dark font-medium">iOS & Android</span>
                </div>
                <div className="p-space-2 bg-bg-light border border-border-light rounded-sm">
                  <MessageSquare className="w-4 h-4 text-primary mx-auto mb-1" />
                  <span className="text-dark font-medium">WhatsApp AI</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}