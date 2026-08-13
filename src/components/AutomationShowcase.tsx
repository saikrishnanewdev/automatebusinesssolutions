'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  UserCheck,
  Send,
  Cpu,
  Database,
  BellCheck,
  CheckCircle2,
  Code,
  Sparkles
} from 'lucide-react';

const workflowSteps = [
  {
    step: '01',
    title: 'Customer Request',
    desc: 'Customer fills form or sends message on WhatsApp.',
    icon: UserCheck,
    snippet: `{\n  \"customer\": \"Acme Corp\",\n  \"service\": \"Order #9402\",\n  \"channel\": \"WhatsApp\"\n}`,
    badge: 'INPUT TRIGGER'
  },
  {
    step: '02',
    title: 'Data Ingestion',
    desc: 'API endpoint receives payload and parses data structure.',
    icon: Send,
    snippet: `POST /api/v1/webhook\nStatus: 200 OK\nPayload Validated`,
    badge: 'API GATEWAY'
  },
  {
    step: '03',
    title: 'Engine Processing',
    desc: 'Custom workflow rules apply, logic triggers automatically.',
    icon: Cpu,
    snippet: `AI Rules Execution:\n→ Calc Total Cost\n→ Assign Rep: Alex`,
    badge: 'WORKFLOW ENGINE'
  },
  {
    step: '04',
    title: 'Database Update',
    desc: 'Centralized database updates instantly without human error.',
    icon: Database,
    snippet: `UPDATE orders\nSET status = \"APPROVED\"\nWHERE id = 9402;`,
    badge: 'DATABASE SYNC'
  },
  {
    step: '05',
    title: 'Notification & Dashboard',
    desc: 'Customer gets confirmation & team dashboard displays live status.',
    icon: BellCheck,
    snippet: `Alert Sent to Admin\nSMS Sent to Client\nDashboard Live`,
    badge: 'RESULT DELIVERED'
  }
];

export default function AutomationShowcase() {
  const [selectedStep, setSelectedStep] = useState(2);

  return (
    <section className="py-24 bg-[#020B19] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06245A] border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Live System Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            SEE HOW <span className="text-amber-500">AUTOMATION WORKS</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A seamless 5-step automated workflow that executes in milliseconds, eliminating manual overhead.
          </p>
        </div>

        {/* Workflow Horizontal Node Flow (Desktop) */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative mb-12">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-800 -translate-y-1/2 z-0" />
          <div className="absolute top-1/2 left-0 w-4/5 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400 -translate-y-1/2 z-0 animate-pulse" />

          {workflowSteps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = selectedStep === idx;
            return (
              <div
                key={step.step}
                onClick={() => setSelectedStep(idx)}
                className={`relative z-10 cursor-pointer p-4 rounded-xl transition-all duration-300 ${isSelected
                  ? 'bg-[#06245A] border-2 border-amber-500 shadow-xl shadow-amber-500/20 scale-105'
                  : 'bg-[#031638]/80 border border-slate-800 hover:border-amber-500/40'
                  }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                    {step.step}
                  </span>
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-amber-400' : 'text-slate-400'}`} />
                </div>
                <h4 className="text-sm font-bold text-white mb-1 truncate">{step.title}</h4>
                <p className="text-[11px] text-slate-300 line-clamp-2">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Interactive Selected Node Detail Inspector */}
        <motion.div
          key={selectedStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl bg-[#031638] border border-amber-500/30 p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold border border-amber-500/30">
                <span>NODE {workflowSteps[selectedStep].step}</span> •
                <span>{workflowSteps[selectedStep].badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {workflowSteps[selectedStep].title}
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {workflowSteps[selectedStep].desc}
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Autonomous Trigger
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Instant Data Sync
                </span>
              </div>
            </div>

            {/* Code / UI Snippet Visualizer */}
            <div className="lg:col-span-6 rounded-xl bg-[#020B19] border border-slate-800 p-4 font-mono text-xs text-amber-400/90 space-y-2 shadow-inner">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-slate-500 text-[11px]">
                <span className="flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-amber-400" /> workflow_engine.ts
                </span>
                <span className="text-emerald-400 font-semibold">EXECUTION: 14ms</span>
              </div>
              <pre className="overflow-x-auto text-slate-200 py-2 leading-relaxed">
                <code>{workflowSteps[selectedStep].snippet}</code>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* Mobile Accordion Flow fallback */}
        <div className="lg:hidden mt-8 space-y-3">
          {workflowSteps.map((step, idx) => (
            <div
              key={step.step}
              onClick={() => setSelectedStep(idx)}
              className={`p-4 rounded-xl border transition-all ${selectedStep === idx ? 'bg-[#06245A] border-amber-500' : 'bg-[#031638] border-slate-800'}`}
            >
              <div className="flex items-center justify-between text-sm font-bold text-white">
                <span>{step.step}. {step.title}</span>
                <span className="text-xs text-amber-400 font-mono">{step.badge}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
