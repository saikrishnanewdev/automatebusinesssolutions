"use client";

import React from 'react';
import { Sparkles, Code2, Workflow, Database, Cpu, Globe, Zap } from 'lucide-react';

const items = [
  { label: 'Custom Web & Mobile Apps', icon: Code2 },
  { label: 'Business Process Automation', icon: Workflow },
  { label: 'Excel & Data Solutions', icon: Database },
  { label: 'System & API Integrations', icon: Cpu },
  { label: 'High-Converting Landing Pages', icon: Globe },
  { label: 'Enterprise Workflow Systems', icon: Zap },
  { label: 'AI & Bot Solutions', icon: Sparkles },
];

export default function TrustMarquee() {
  return (
    <section className="relative bg-[#031638] border-y border-amber-500/20 py-4 overflow-hidden shadow-2xl select-none z-20">
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#031638] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#031638] to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-max animate-marquee space-x-8 items-center">
        {/* Repeated twice for seamless marquee loop */}
        {[...items, ...items, ...items].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#06245A]/40 border border-slate-800 text-slate-300 text-sm font-semibold tracking-wide hover:border-amber-500/40 transition-colors whitespace-nowrap group"
            >
              <Icon className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-white transition-colors">{item.label}</span>
              <span className="text-amber-500/40 font-bold ml-3">•</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}