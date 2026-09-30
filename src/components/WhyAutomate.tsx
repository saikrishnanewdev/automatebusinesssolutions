"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Clock,
  ShieldCheck,
  Zap,
  TrendingUp
} from 'lucide-react';

const values = [
  {
    title: 'Reduced manual labor',
    metric: '85%+',
    description: 'Eliminate repetitive Excel copy-pasting, data entry, and manual background operations.',
    icon: Clock
  },
  {
    title: 'Data accuracy',
    metric: '99.99%',
    description: 'Automated rules execute precise operations consistently across every database record.',
    icon: ShieldCheck
  },
  {
    title: 'Processing speed',
    metric: 'Instant',
    description: 'Sub-second response times across WhatsApp leads, ERP updates, and desktop apps.',
    icon: Zap
  },
  {
    title: 'Operational scaling',
    metric: '10x',
    description: 'Scale business operations and customer responses without expanding headcount.',
    icon: TrendingUp
  }
];

export default function WhyAutomate() {
  return (
    <section className="py-space-12 bg-bg-white border-b border-border-medium">
      <div className="max-w-7xl mx-auto px-space-6 sm:px-space-8">

        {/* Section Header */}
        <div className="text-left mb-space-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-space-2">
            Metrics
          </div>
          <h2 className="text-2xl sm:text-lg font-bold text-dark tracking-tight">
            Quantifiable value of Autom Mate.
          </h2>
          <p className="text-base text-secondary mt-space-3 max-w-2xl">
            Key operational metrics achieved when implementing custom software and automated workflows.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-space-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card-token p-space-6 text-left"
            >
              <div className="flex items-center justify-between mb-space-4">
                <div className="w-10 h-10 rounded-sm bg-bg-light border border-border-medium flex items-center justify-center">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-body-lg font-bold text-dark">{value.metric}</span>
              </div>

              <h3 className="font-semibold text-dark text-base mb-space-2">{value.title}</h3>

              <p className="text-sm text-secondary leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}