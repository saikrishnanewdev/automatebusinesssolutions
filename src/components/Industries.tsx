"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Factory,
  Truck,
  Briefcase,
  Building,
  Store,
  ArrowRight
} from 'lucide-react';

const industries = [
  { title: 'Retail & E-commerce', icon: ShoppingBag, desc: 'Custom ERP inventory sync, POS integration, and automated invoicing.' },
  { title: 'Manufacturing & Production', icon: Factory, desc: 'Production tracking, machinery maintenance alerts, and raw material logs.' },
  { title: 'Logistics & Supply Chain', icon: Truck, desc: 'Fleet dispatch software, mobile driver apps, and real-time package tracking.' },
  { title: 'Professional & Business Services', icon: Briefcase, desc: 'Client management portals, document automation, and automated billing.' },
  { title: 'Construction & Real Estate', icon: Building, desc: 'Project site logs, mobile attendance apps, and vendor invoice tracking.' },
  { title: 'Small & Medium Enterprises', icon: Store, desc: 'Custom Windows desktop applications and web portals replacing Excel chaos.' }
];

export default function Industries() {
  return (
    <section className="py-space-12 bg-bg-white border-b border-border-medium">
      <div className="max-w-7xl mx-auto px-space-6 sm:px-space-8">

        {/* Section Header */}
        <div className="text-left mb-space-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-space-2">
            Industries
          </div>
          <h2 className="text-2xl sm:text-lg font-bold text-dark tracking-tight">
            Industries we automate.
          </h2>
          <p className="text-base text-secondary mt-space-3 max-w-2xl">
            Regardless of your industry, if your business has manual repetitive tasks or fragmented software, we build custom software to automate it.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid gap-space-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card-token p-space-6"
            >
              <div className="flex items-center gap-space-3 mb-space-3">
                <div className="w-10 h-10 rounded-sm bg-bg-light border border-border-medium flex items-center justify-center shrink-0">
                  <industry.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-dark text-base">{industry.title}</h3>
              </div>
              <p className="text-sm text-secondary leading-relaxed">{industry.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Custom Enquiry */}
        <div className="mt-space-10 pt-space-6 border-t border-border-light flex flex-col sm:flex-row items-center justify-between gap-space-4">
          <p className="text-sm text-secondary">
            Have a unique business workflow? We engineer custom ERPs and software tailored to your specific process.
          </p>
          <a
            href="#contact"
            className="btn-primary text-sm shrink-0"
          >
            <span>Consult our engineers</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}