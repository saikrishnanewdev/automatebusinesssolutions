"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Layout,
  Code2,
  Zap,
  CheckCircle2
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Understand',
    subtitle: 'Process Audit & Discovery',
    desc: 'We analyze your current daily operations, Excel sheets, manual communications, and software tools to pinpoint exact bottlenecks and repetitive tasks.',
    icon: Search,
    details: ['Map manual workflows', 'Calculate potential time savings', 'Define security & permissions']
  },
  {
    number: '02',
    title: 'Design',
    subtitle: 'System Architecture & UX',
    desc: 'We design the exact software flow, database schema, user interface, and integration points to ensure intuitive adoption for your team.',
    icon: Layout,
    details: ['Workflow diagramming', 'Database & API mapping', 'User interface prototypes']
  },
  {
    number: '03',
    title: 'Build',
    subtitle: 'Development & Integration',
    desc: 'We develop, test, and integrate your custom solution with existing tools (WhatsApp, Excel, ERP, Databases, Payment Gateways).',
    icon: Code2,
    details: ['Clean TypeScript code', 'Rigorous error handling', 'Live staging & testing']
  },
  {
    number: '04',
    title: 'Automate',
    subtitle: 'Deployment & Scaling',
    desc: 'Your business process runs seamlessly in the background with zero manual friction. Your team receives full training and ongoing support.',
    icon: Zap,
    details: ['Zero downtime launch', 'Staff training session', 'Continuous monitoring']
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#020B19] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#06245A] border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            Clear & Predictable Execution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            FROM IDEA TO <span className="text-amber-500">AUTOMATION</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal">
            A proven 4-step engineering methodology to digitize and automate your business operations.
          </p>
        </div>

        {/* 4-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting Line behind cards on desktop */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-amber-500/80 via-amber-400 to-emerald-400 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative z-10 rounded-2xl bg-[#031638] border border-amber-500/20 p-6 flex flex-col justify-between hover:border-amber-500/50 hover:bg-[#06245A]/50 transition-all duration-300 shadow-xl backdrop-blur-md group"
              >
                <div className="space-y-4">
                  {/* Top Badge & Step Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 font-black flex items-center justify-center text-lg shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black font-mono text-slate-700 group-hover:text-amber-400 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-white group-hover:text-amber-400 transition-colors">
                      {step.title}
                    </h3>
                    <div className="text-xs font-mono text-amber-400 font-semibold mt-0.5">
                      {step.subtitle}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>

                  {/* Deliverables Bullet list */}
                  <div className="pt-4 border-t border-slate-800 space-y-1.5">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}