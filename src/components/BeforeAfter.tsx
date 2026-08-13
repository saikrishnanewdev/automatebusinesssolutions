"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, AlertTriangle, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

const beforeItems = [
  'Manual Excel updates & copy-pasting everyday',
  'WhatsApp follow-ups missed or severely delayed',
  'Repetitive data entry across disconnected tools',
  'Manual reports taking hours of staff time',
  'Frequent human errors and lost sales opportunities',
  'Fragmented information stored in personal chat logs'
];

const afterItems = [
  'Automated real-time data sync across all platforms',
  'Instant automated WhatsApp responses & alerts',
  'Unified business system with zero manual re-entry',
  'Real-time live executive dashboard generated instantly',
  '100% data precision & 24/7 background execution',
  'Centralized secure database with clear approval flows'
];

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-[#031638] relative overflow-hidden border-t border-amber-500/10">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" /> Business Transformation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            STOP DOING MANUALLY WHAT SOFTWARE CAN DO{' '}
            <span className="text-amber-500 underline decoration-amber-500/40 decoration-wavy underline-offset-8">
              AUTOMATICALLY.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            See how replacing manual repetitive overhead with tailored software elevates speed, accuracy, and profitability.
          </p>
        </div>

        {/* Transformation Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* BEFORE CARD - Chaos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 rounded-2xl bg-gradient-to-b from-rose-950/20 via-[#020B19]/80 to-[#020B19] border border-rose-500/20 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative group hover:border-rose-500/40 transition-colors"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-rose-500/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-rose-400 font-bold uppercase tracking-wider">CURRENT STATUS</div>
                    <h3 className="text-2xl font-black text-rose-300">BEFORE AUTOMATION</h3>
                  </div>
                </div>
                <span className="px-3 py-1 bg-rose-500/10 text-rose-400 text-xs font-bold rounded-full border border-rose-500/30 uppercase">
                  CHAOS & DELAYS
                </span>
              </div>

              <ul className="space-y-3.5">
                {beforeItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 rounded-xl bg-rose-950/10 border border-rose-900/30 text-slate-300 text-sm font-medium">
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-500/10 text-xs text-rose-400/80 font-mono font-medium flex items-center justify-between">
              <span>RESULT: Wasted hours & human errors</span>
              <span className="font-bold text-rose-400">SLOW GROWTH</span>
            </div>
          </motion.div>

          {/* AFTER CARD - Control & Growth */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 rounded-2xl bg-gradient-to-b from-[#06245A]/40 via-[#031638] to-[#020B19] border-2 border-amber-500/40 p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-amber-500/10 relative group hover:border-amber-500 transition-colors"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-amber-500/30 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/20">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">WITH OUR SOFTWARE</div>
                    <h3 className="text-2xl font-black text-white">AFTER AUTOMATION</h3>
                  </div>
                </div>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full border border-amber-500/40 uppercase animate-pulse">
                  CONTROL & SPEED
                </span>
              </div>

              <ul className="space-y-3.5">
                {afterItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 rounded-xl bg-[#06245A]/50 border border-amber-500/20 text-slate-100 text-sm font-semibold shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-amber-500/20 text-xs text-amber-400 font-mono font-bold flex items-center justify-between">
              <span>RESULT: Maximum productivity & scale</span>
              <a href="#contact" className="flex items-center gap-1 text-white hover:text-amber-400 underline font-semibold transition-colors">
                <span>Transform Now</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}