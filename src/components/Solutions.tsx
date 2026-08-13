"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  ShoppingCart,
  Headphones,
  BarChart3,
  QrCode,
  Building2,
  ArrowRight
} from 'lucide-react';

const solutions = [
  {
    title: 'Sales & Lead Automation',
    icon: TrendingUp,
    flow: ['New Lead', 'CRM Sync', 'Instant Follow-up', 'Closed Deal'],
    desc: 'Never lose a lead again. Automatically capture leads from forms & WhatsApp, route to sales reps, and trigger instant follow-ups.'
  },
  {
    title: 'Order & Inventory Automation',
    icon: ShoppingCart,
    flow: ['Online Order', 'Payment Gateway', 'Inventory Update', 'Auto Invoice'],
    desc: 'Connect your store or sales portal directly to your warehouse stock, billing, and logistics without manual entry.'
  },
  {
    title: 'Automated Customer Support',
    icon: Headphones,
    flow: ['WhatsApp Msg', 'Bot Routing', 'Ticket Created', 'Notification'],
    desc: 'Respond to customer inquiries 24/7. Auto-answer common questions and route complex requests to your team.'
  },
  {
    title: 'Automated Reporting & Analytics',
    icon: BarChart3,
    flow: ['Raw Data', 'Auto Processing', 'Live Dashboard', 'Smart Decision'],
    desc: 'Replace tedious weekly reporting. Extract data from multiple sources and build live executive dashboards automatically.'
  },
  {
    title: 'Attendance & Access Control',
    icon: QrCode,
    flow: ['Face / QR Code', 'Timestamp', 'Central Database', 'Payroll Report'],
    desc: 'Streamline staff check-ins with fast face or QR scanners synchronized directly with your HR and payroll database.'
  },
  {
    title: 'Business Operations Workflow',
    icon: Building2,
    flow: ['Employee Request', 'Approval Flow', 'Action Execution', 'Log Archive'],
    desc: 'Digitize internal approvals, purchase requests, task routing, and operational handoffs into clean automated pipelines.'
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-[#031638] relative overflow-hidden border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#06245A] border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            Tailored Software Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            BUILT FOR <span className="text-amber-500">REAL BUSINESS PROBLEMS</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We design custom software engines specifically tailored to solve bottlenecks in your day-to-day business operations.
          </p>
        </div>

        {/* Grid of Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl bg-[#020B19]/80 border border-amber-500/15 p-6 sm:p-7 flex flex-col justify-between hover:border-amber-500/40 hover:bg-[#06245A]/30 transition-all duration-300 shadow-xl backdrop-blur-md group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-[#06245A] border border-amber-500/30 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-slate-800 text-slate-400 uppercase">
                      USE CASE #{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>

                  {/* Flow Diagram Bar */}
                  <div className="pt-4 border-t border-slate-800/80 space-y-2">
                    <div className="text-[11px] font-mono font-semibold text-amber-400 uppercase tracking-wider">
                      AUTOMATED FLOW
                    </div>
                    <div className="flex items-center flex-wrap gap-1 text-[11px] font-mono font-semibold text-slate-300 bg-[#031638] p-2.5 rounded-lg border border-slate-800">
                      {item.flow.map((step, sIdx) => (
                        <React.Fragment key={sIdx}>
                          <span className="text-white">{step}</span>
                          {sIdx < item.flow.length - 1 && (
                            <ArrowRight className="w-3 h-3 text-amber-400 shrink-0" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 flex items-center justify-between text-xs font-bold text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Request standard demo</span>
                  <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}