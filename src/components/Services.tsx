"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Workflow,
  FileSpreadsheet,
  GitMerge,
  Globe,
  Settings,
  ArrowUpRight,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    id: 'apps',
    icon: Smartphone,
    title: 'App Development',
    description: 'Custom business applications designed around the exact way your business actually works.',
    examples: ['Web Applications', 'Mobile Apps', 'Business Portals', 'Internal Management Tools']
  },
  {
    id: 'automation',
    icon: Workflow,
    title: 'Business Automation',
    description: 'Eliminate repetitive tasks and connect your business processes with intelligent automated workflows.',
    examples: ['Workflow Automation', 'Data Processing', 'Instant Alerts', 'Approval Workflows']
  },
  {
    id: 'excel',
    icon: FileSpreadsheet,
    title: 'Excel Solutions',
    description: 'Turn complicated, slow Excel processes into powerful, automated business software tools.',
    examples: ['Automated Reports', 'Executive Dashboards', 'Bulk Data Processing', 'Business Calculators']
  },
  {
    id: 'integration',
    icon: GitMerge,
    title: 'System Integration',
    description: 'Connect all the disconnected software systems your business already uses every single day.',
    examples: ['API Connections', 'Payment Gateways', 'WhatsApp Integration', 'CRM & ERP Sync']
  },
  {
    id: 'websites',
    icon: Globe,
    title: 'Landing Pages & Websites',
    description: 'Fast, modern, high-converting websites and landing pages built to turn visitors into paying clients.',
    examples: ['High-Converting Pages', 'Fast Next.js Apps', 'SEO Optimization', 'Lead Capture Forms']
  },
  {
    id: 'systems',
    icon: Settings,
    title: 'Custom Business Systems',
    description: 'Replace manual processes and fragmented tools with a unified system built specifically for you.',
    examples: ['Custom Operating Systems', 'Attendance Systems', 'Order Fulfillment Engines', 'Client Management']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#020B19] relative overflow-hidden">
      {/* Glowing background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#06245A]/40 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#06245A] border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            WHAT WE <span className="text-amber-500">AUTOMATE</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            From simple business tasks to complete digital systems, we turn manual processes into automated workflows.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl bg-[#031638]/70 border border-amber-500/15 p-8 transition-all duration-300 hover:border-amber-500/50 hover:bg-[#06245A]/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between backdrop-blur-md"
              >
                {/* Card Glow Pill */}
                <div className="absolute top-0 right-8 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 bg-amber-500 text-slate-950 text-xs font-bold rounded-full shadow-md flex items-center gap-1">
                    Explore <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>

                <div className="space-y-5">
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-[#06245A] border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300 shadow-lg shadow-amber-500/5">
                    <IconComponent className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Example Bullets */}
                  <div className="pt-4 border-t border-slate-800 space-y-2">
                    <div className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider">
                      EXAMPLES & USE CASES
                    </div>
                    <ul className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-300">
                      {service.examples.map((ex, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span className="truncate">{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="pt-6 mt-6 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-amber-400 transition-colors">
                  <span>Automate this workflow</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}