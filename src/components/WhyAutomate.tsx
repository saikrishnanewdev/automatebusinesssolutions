"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Clock,
  ShieldAlert,
  Zap,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

const values = [
  {
    title: 'Less Manual Work',
    metric: '85%+',
    subtitle: 'Reduction in repetitive tasks',
    icon: Clock,
    description: 'Free your staff from copy-pasting, manual data entry, and tedious spreadsheet formatting so they can focus on high-value work.'
  },
  {
    title: 'Fewer Errors',
    metric: '99.9%',
    subtitle: 'Data accuracy & precision',
    icon: ShieldAlert,
    description: 'Human fatigue leads to typos, missed follow-ups, and bad data. Automated workflow software executes exact rules consistently every time.'
  },
  {
    title: 'Faster Operations',
    metric: 'Instant',
    subtitle: '24/7 background execution',
    icon: Zap,
    description: 'Workflows process in seconds, even overnight or on weekends. Customer leads are captured and processed immediately.'
  },
  {
    title: 'More Business Growth',
    metric: '10x',
    subtitle: 'Operational scaling potential',
    icon: TrendingUp,
    description: 'Scale your business volume without linearly increasing staff headcount or overhead cost. Software scales effortlessly.'
  }
];

export default function WhyAutomate() {
  return (
    <section className="py-24 bg-[#031638] relative overflow-hidden border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#06245A] border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            Strategic ROI & Value
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            WHY <span className="text-amber-500">AUTOMATE?</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal">
            Transform manual bottlenecks into automated software engines that scale effortlessly with your business.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl bg-[#020B19]/90 border border-amber-500/20 p-6 flex flex-col justify-between hover:border-amber-500/50 hover:bg-[#06245A]/40 transition-all duration-300 shadow-xl backdrop-blur-md group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-[#06245A] border border-amber-500/30 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-amber-400 tracking-tight font-mono">
                      {item.metric}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-amber-400/90 font-semibold mt-0.5">
                      {item.subtitle}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal pt-2 border-t border-slate-800">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" /> Guaranteed System Efficiency
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}