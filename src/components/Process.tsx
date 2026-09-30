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
    title: 'Process audit & requirements',
    subtitle: 'Workflow & Requirements Analysis',
    desc: 'We analyze your manual operations, Excel workflows, and software requirements to define clear specs.',
    icon: Search,
    details: ['Map manual workflows', 'Audit database requirements', 'Calculate time savings']
  },
  {
    number: '02',
    title: 'Architecture & UI design',
    subtitle: 'System & Database Specification',
    desc: 'We design custom ERP software flows, database schemas, and responsive UI layouts for seamless adoption.',
    icon: Layout,
    details: ['Custom ERP workflow design', 'Database schema architecture', 'Desktop & Mobile UI prototyping']
  },
  {
    number: '03',
    title: 'Software build & integration',
    subtitle: 'Development & Quality Testing',
    desc: 'We develop clean Windows desktop software, mobile apps, web portals, or WhatsApp AI bots with automated testing.',
    icon: Code2,
    details: ['Clean code development', 'Automated QA testing', 'WhatsApp & API system integration']
  },
  {
    number: '04',
    title: 'Deployment, training & support',
    subtitle: 'Deployment & Ongoing Optimization',
    desc: 'Your custom software runs smoothly with zero manual friction. Team training and ongoing technical support included.',
    icon: Zap,
    details: ['Smooth deployment', 'Team training & onboarding', 'Ongoing technical support']
  }
];

export default function Process() {
  return (
    <section id="process" className="py-space-12 bg-bg-light border-b border-border-medium">
      <div className="max-w-7xl mx-auto px-space-6 sm:px-space-8">

        {/* Section Header */}
        <div className="text-left mb-space-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-space-2">
            Methodology
          </div>
          <h2 className="text-2xl sm:text-lg font-bold text-dark tracking-tight">
            Our 4-step engineering process.
          </h2>
          <p className="text-base text-secondary mt-space-3 max-w-2xl">
            A battle-tested software engineering process designed for seamless custom ERP, desktop/mobile app, and automated workflow deployment.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid gap-space-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
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
                  <span className="text-xs font-mono text-secondary px-space-2 py-space-1 bg-bg-light border border-border-light rounded-sm">
                    Phase {step.number}
                  </span>
                </div>

                <h3 className="font-semibold text-dark text-base mb-space-1">{step.title}</h3>
                <p className="text-xs font-medium text-primary mb-space-3">{step.subtitle}</p>

                <p className="text-sm text-secondary leading-relaxed mb-space-4">
                  {step.desc}
                </p>
              </div>

              <ul className="space-y-space-2 pt-space-4 border-t border-border-light text-xs text-secondary">
                {step.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center gap-space-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}