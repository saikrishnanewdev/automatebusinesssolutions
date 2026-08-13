"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  CheckCircle2,
  Activity,
  Database,
  Sparkles,
  Bot,
  ShieldCheck,
  BarChart2
} from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#031638] relative overflow-hidden border-t border-amber-500/10">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06245A] border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest">
              Our Purpose & Philosophy
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              WE DON&apos;T JUST BUILD SOFTWARE.{' '}
              <span className="text-amber-500">
                WE SOLVE BUSINESS PROBLEMS.
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Every business has repetitive tasks, disconnected systems, spreadsheets, manual reports, and processes that consume valuable time.
            </p>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              We identify those manual friction points and transform them into simple, bulletproof digital solutions and automated workflows. You save time, eliminate human errors, and focus on expanding your core business.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-2 text-sm text-slate-200 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Tailored to Your Operations</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-200 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>High-Speed Next.js Architecture</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-200 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>End-to-End System Sync</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-200 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Continuous Reliability</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual: High-Tech Automation Dashboard Preview Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="rounded-2xl bg-[#020B19] border border-amber-500/30 p-6 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-xl">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-slate-400 ml-2">Automate Command Center v4.2</span>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-500/30 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 animate-pulse" /> SYSTEM OPTIMAL
                </span>
              </div>

              {/* Dashboard Metrics Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#031638] p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Workflows Executed</div>
                  <div className="text-xl font-black text-amber-400 font-mono">142,890</div>
                </div>
                <div className="bg-[#031638] p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Avg Sync Speed</div>
                  <div className="text-xl font-black text-emerald-400 font-mono">18 ms</div>
                </div>
                <div className="bg-[#031638] p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Manual Hours Saved</div>
                  <div className="text-xl font-black text-white font-mono">1,240 hrs</div>
                </div>
              </div>

              {/* Live Event Stream Mock */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono text-amber-400/90 font-bold uppercase tracking-wider flex items-center justify-between">
                  <span>LIVE AUTOMATION EVENT STREAM</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                
                <div className="p-3 rounded-lg bg-[#06245A]/40 border border-slate-800 text-xs font-mono text-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-amber-400" />
                    <span>WhatsApp Lead captured → Parsed → Added to CRM</span>
                  </div>
                  <span className="text-slate-400 text-[10px]">Just now</span>
                </div>

                <div className="p-3 rounded-lg bg-[#06245A]/40 border border-slate-800 text-xs font-mono text-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-emerald-400" />
                    <span>Excel Sales Report generated & emailed to Execs</span>
                  </div>
                  <span className="text-slate-400 text-[10px]">2 min ago</span>
                </div>

                <div className="p-3 rounded-lg bg-[#06245A]/40 border border-slate-800 text-xs font-mono text-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-amber-400" />
                    <span>Inventory synced across WhatsApp & Portal</span>
                  </div>
                  <span className="text-slate-400 text-[10px]">5 min ago</span>
                </div>
              </div>

              {/* Security Banner */}
              <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" /> Enterprise Encryption Standard
                </span>
                <span className="text-white font-bold">AUTOMATE BUSINESS SOLUTIONS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}