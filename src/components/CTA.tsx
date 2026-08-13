"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, MessageSquare } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-[#020B19] relative overflow-hidden">
      {/* Glowing radial backdrop */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06245A]/70 via-[#031638] to-[#06245A]/70 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-600/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[#031638]/90 border-2 border-amber-500/30 p-8 sm:p-14 shadow-2xl backdrop-blur-xl relative overflow-hidden space-y-8"
        >
          {/* Subtle animated node particle ring */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold uppercase tracking-widest">
            <Zap className="w-4 h-4 text-amber-400 animate-pulse" /> WE AUTOMATE. YOU GROW.
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            READY TO <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300 bg-clip-text text-transparent">AUTOMATE YOUR BUSINESS?</span>
          </h2>

          <p className="text-slate-200 text-lg sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            Tell us what you&apos;re doing manually. We&apos;ll show you what can be automated and how much time your team will save.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 active:scale-95 transition-all duration-200 group"
            >
              <MessageSquare className="w-5 h-5 text-slate-950" />
              <span>Start a Conversation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#06245A] border border-slate-700 hover:border-amber-500/40 text-slate-200 hover:text-white font-semibold text-base backdrop-blur-sm transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>View Services</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}