"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Factory,
  GraduationCap,
  Truck,
  Hotel,
  Store,
  Briefcase,
  HardHat,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const industries = [
  { title: 'Retail & E-commerce', icon: ShoppingBag, desc: 'Inventory sync, automated invoicing, customer loyalty, WhatsApp orders.' },
  { title: 'Manufacturing', icon: Factory, desc: 'Production tracking, raw material automated alerts, machinery logs.' },
  { title: 'Education & Training', icon: GraduationCap, desc: 'Student enrollment portals, fee tracking, automatic notification alerts.' },
  { title: 'Logistics & Fleet', icon: Truck, desc: 'Dispatch tracking, automated SMS updates, proof of delivery integration.' },
  { title: 'Hospitality & Services', icon: Hotel, desc: 'Reservation sync, guest check-in automation, feedback collection.' },
  { title: 'Small & Medium Businesses', icon: Store, desc: 'Replacing Excel confusion with custom web portals and workflow software.' },
  { title: 'Professional Services', icon: Briefcase, desc: 'Client portals, invoice automation, automated document parsing.' },
  { title: 'Construction & Real Estate', icon: HardHat, desc: 'Site daily progress logs, attendance tracking, supplier purchase flow.' },
];

export default function Industries() {
  return (
    <section className="py-24 bg-[#020B19] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06245A] border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            Versatile Sector Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            WE AUTOMATE <span className="text-amber-500">ACROSS INDUSTRIES</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Regardless of your industry, if your business has manual repetitive tasks, we build software to automate them.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-xl bg-[#031638]/70 border border-slate-800 p-6 flex flex-col justify-between hover:border-amber-500/40 hover:bg-[#06245A]/40 transition-all duration-300 shadow-md group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#06245A] border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {ind.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Enquiry Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-[#06245A] via-[#031638] to-[#06245A] border border-amber-500/30 p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div className="space-y-2">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-400 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Custom Business Workflow?</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              Have a different business? Let&apos;s automate it.
            </h3>
            <p className="text-slate-300 text-sm max-w-xl font-normal">
              Every organization has unique manual processes. Tell us what your team does manually, and we will build software to handle it automatically.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-colors group"
          >
            <span>Talk to an Automation Architect</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}