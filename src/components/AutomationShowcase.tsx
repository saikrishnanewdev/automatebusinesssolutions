'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  Bot,
  Database,
  Building2,
  BellCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const workflowSteps = [
  {
    step: '01',
    title: 'Customer message / form ingress',
    desc: 'Customer reaches out on WhatsApp or submits an enquiry on your web portal.',
    icon: MessageSquare,
  },
  {
    step: '02',
    title: 'AI chatbot intent extraction',
    desc: 'Intelligent AI parses customer requests, qualifies leads, and extracts contact details.',
    icon: Bot,
  },
  {
    step: '03',
    title: 'ERP & inventory database query',
    desc: 'System checks real-time product stock, pricing rules, or scheduling availability instantly.',
    icon: Database,
  },
  {
    step: '04',
    title: 'Automated CRM & ERP update',
    desc: 'Centralized ERP updates customer records and logs sales pipeline status automatically.',
    icon: Building2,
  },
  {
    step: '05',
    title: 'WhatsApp dispatch & alert',
    desc: 'Instant personalized response sent to customer on WhatsApp and notification dispatched to team.',
    icon: BellCheck,
  }
];

export default function AutomationShowcase() {
  return (
    <section id="showcase" className="py-space-12 bg-bg-white border-b border-border-medium">
      <div className="max-w-7xl mx-auto px-space-6 sm:px-space-8">

        {/* Section Header */}
        <div className="text-left mb-space-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-space-2">
            Automation Engine
          </div>
          <h2 className="text-2xl sm:text-lg font-bold text-dark tracking-tight">
            WhatsApp AI & automated workflow in action.
          </h2>
          <p className="text-base text-secondary mt-space-3 max-w-2xl">
            See how custom software connects your messaging, ERP database, and internal workflows into an automated 24/7 system.
          </p>
        </div>

        {/* Workflow Steps Grid */}
        <div className="grid gap-space-6 sm:grid-cols-2 lg:grid-cols-3">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card-token p-space-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-space-4">
                  <div className="w-10 h-10 rounded-sm bg-bg-light border border-border-medium flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-mono text-secondary px-space-2 py-space-1 rounded-sm bg-bg-light border border-border-light">
                    Step {step.step}
                  </span>
                </div>

                <h3 className="font-semibold text-dark text-base mb-space-2">
                  {step.title}
                </h3>

                <p className="text-sm text-secondary leading-relaxed mb-space-4">
                  {step.desc}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-secondary pt-space-4 border-t border-border-light">
                <span className="font-medium text-dark">Automated</span>
                <span className="flex items-center gap-space-1 text-primary">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Zero manual effort</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-space-10 pt-space-6 border-t border-border-light flex flex-col sm:flex-row items-center justify-between gap-space-4">
          <div className="text-left">
            <h4 className="text-base font-semibold text-dark">Want a WhatsApp bot or ERP workflow for your business?</h4>
            <p className="text-sm text-secondary">We build and deploy customized AI workflows tailored to your business needs.</p>
          </div>
          <a
            href="#contact"
            className="btn-primary shrink-0"
          >
            <span>Get custom workflow demo</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}