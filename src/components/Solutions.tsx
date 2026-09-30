"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Monitor,
  Smartphone,
  MessageSquare,
  Globe,
  FileSpreadsheet,
  ArrowRight
} from 'lucide-react';

const solutions = [
  {
    title: 'Custom ERP & business management',
    icon: Building2,
    desc: 'Unify sales, inventory, accounting, HR, and reporting into a single custom ERP system tailored to your exact business operations.',
    benefit: 'Eliminate duplicate software subscriptions & manual re-entry'
  },
  {
    title: 'Custom Windows desktop software',
    icon: Monitor,
    desc: 'Native Windows desktop applications built for high-speed offline operations, device hardware connectivity, and deep desktop performance.',
    benefit: 'Sub-millisecond processing speed on Windows PCs'
  },
  {
    title: 'Custom iOS & Android mobile apps',
    icon: Smartphone,
    desc: 'Custom cross-platform mobile apps for field teams, delivery drivers, inventory scanning, and executive approval flows.',
    benefit: 'Empower your mobile workforce with real-time sync'
  },
  {
    title: 'Custom web portals & SaaS platforms',
    icon: Globe,
    desc: 'Secure customer management portals, vendor ordering systems, and web dashboards accessible from any modern browser.',
    benefit: 'Instant 24/7 web access for clients & employees'
  },
  {
    title: 'WhatsApp AI lead & support automation',
    icon: MessageSquare,
    desc: 'Automated 24/7 WhatsApp AI chatbots that capture incoming leads, answer customer FAQs, and dispatch automated status alerts.',
    benefit: 'Zero missed sales opportunities 24 hours a day'
  },
  {
    title: 'Any manual work & Excel automation',
    icon: FileSpreadsheet,
    desc: 'Automate repetitive spreadsheet data entry, file format conversions, report generation, and manual cross-system copy-pasting.',
    benefit: 'Reclaim 100% of time spent on tedious manual tasks'
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-space-12 bg-bg-light border-b border-border-medium">
      <div className="max-w-7xl mx-auto px-space-6 sm:px-space-8">

        {/* Section Header */}
        <div className="text-left mb-space-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-space-2">
            Tailored Systems
          </div>
          <h2 className="text-2xl sm:text-lg font-bold text-dark tracking-tight">
            Tailored business software & process automation.
          </h2>
          <p className="text-base text-secondary mt-space-3 max-w-2xl">
            We design custom software engines tailored to solve specific operational bottlenecks in your day-to-day business.
          </p>
        </div>

        {/* Grid of Solution Cards */}
        <div className="grid gap-space-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card-token p-space-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-space-3 mb-space-4">
                  <div className="w-10 h-10 rounded-sm bg-bg-light border border-border-medium flex items-center justify-center shrink-0">
                    <solution.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-dark text-base">{solution.title}</h3>
                </div>

                <p className="text-sm text-secondary leading-relaxed mb-space-4">
                  {solution.desc}
                </p>
              </div>

              <div>
                <div className="p-space-3 text-xs text-dark bg-bg-light border border-border-light rounded-sm font-medium mb-space-4">
                  <strong className="text-primary font-semibold">Impact:</strong> {solution.benefit}
                </div>

                <a
                  href="#contact"
                  className="w-full btn-secondary text-sm"
                >
                  <span>Request custom proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}