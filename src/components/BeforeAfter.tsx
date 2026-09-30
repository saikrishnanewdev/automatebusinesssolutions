"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const beforeItems = [
  'Manual Excel updates & copy-pasting customer details everyday',
  'WhatsApp inquiries and leads missed or answered hours late',
  'Fragmented tools requiring repetitive data re-entry',
  'Manual paper & spreadsheet reporting taking staff hours',
  'Human calculation errors in billing, inventory, and payroll',
  'No real-time visibility into business operations or field staff'
];

const afterItems = [
  'Custom ERP system connecting inventory, billing, HR, and reports',
  'Automated 24/7 WhatsApp AI chatbots capturing & qualifying leads',
  'Custom Windows desktop & mobile apps for instant team access',
  'Real-time live executive dashboard generated automatically',
  '100% data precision & 24/7 background script execution',
  'Centralized secure database with zero manual data entry'
];

export default function BeforeAfter() {
  return (
    <section className="py-space-12 bg-bg-light border-b border-border-medium">
      <div className="max-w-7xl mx-auto px-space-6 sm:px-space-8">

        {/* Section Header */}
        <div className="text-left mb-space-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-space-2">
            Transformation
          </div>
          <h2 className="text-2xl sm:text-lg font-bold text-dark tracking-tight">
            Manual business operations vs. Autom Mate software.
          </h2>
          <p className="text-base text-secondary mt-space-3 max-w-2xl">
            See how replacing repetitive manual work with custom ERPs, native desktop/mobile apps, and WhatsApp automation elevates speed and productivity.
          </p>
        </div>

        {/* Transformation Comparison Cards */}
        <div className="grid gap-space-8 sm:grid-cols-2">
          {/* Legacy / Manual */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-space-6 rounded-sm border border-border-medium bg-bg-white"
          >
            <div className="flex items-center gap-space-3 mb-space-6 border-b border-border-light pb-space-4">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-dark text-base">Manual repetitive processes</h3>
                <p className="text-xs text-secondary">Slow, error-prone, and wasteful</p>
              </div>
            </div>

            <ul className="space-y-space-3 text-left">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-start gap-space-3 p-space-2 rounded-sm bg-bg-light border border-border-light text-sm text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-space-6 p-space-3 text-xs text-secondary bg-bg-light border border-border-light rounded-sm font-medium">
              Impact: High labor overhead, missed leads, and operational bottlenecks.
            </div>
          </motion.div>

          {/* Autom Mate */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-space-6 rounded-sm border border-primary/30 bg-bg-white shadow-sm"
          >
            <div className="flex items-center gap-space-3 mb-space-6 border-b border-border-light pb-space-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-dark text-base">Autom Mate custom software</h3>
                <p className="text-xs text-primary font-medium">Automated, streamlined, and scalable</p>
              </div>
            </div>

            <ul className="space-y-space-3 text-left">
              {afterItems.map((item, index) => (
                <li key={index} className="flex items-start gap-space-3 p-space-2 rounded-sm bg-bg-light border border-border-light text-sm text-dark font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-space-6 p-space-3 text-xs text-dark bg-bg-light border border-border-medium rounded-sm font-medium">
              Impact: 100% data precision, 24/7 lead automation, and zero manual friction.
            </div>

            <div className="mt-space-6">
              <a
                href="#contact"
                className="w-full btn-primary"
              >
                <span>Automate your business processes</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}