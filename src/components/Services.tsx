"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Building2,
  Monitor,
  Smartphone,
  Globe,
  MessageSquare,
  Workflow,
  ArrowUpRight
} from 'lucide-react';

const services = [
  {
    id: 'erp',
    icon: Building2,
    title: 'Custom ERP systems',
    description: 'Tailored enterprise platforms unifying inventory, billing, HR, supply chain, and live reporting into one database.',
    benefit: 'Eliminate fragmented tools & double data entry',
    image: '/images/erp_dashboard.jpg'
  },
  {
    id: 'windows',
    icon: Monitor,
    title: 'Custom Windows applications',
    description: 'High-performance desktop software for Windows with native hardware support, offline capability, and deep OS integration.',
    benefit: 'Lightning-fast native desktop performance',
    image: '/images/windows_apps.jpg'
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Custom mobile applications',
    description: 'Native iOS & Android mobile apps engineered for field operations, mobile sales, inventory tracking, and client portals.',
    benefit: 'Real-time mobile access for your team & clients',
    image: '/images/custom_apps.jpg'
  },
  {
    id: 'web',
    icon: Globe,
    title: 'Custom web applications',
    description: 'Scalable, modern web platforms and SaaS portals built for high security, speed, and seamless user experience.',
    benefit: 'Accessible from any browser anywhere',
    image: '/images/web_apps.jpg'
  },
  {
    id: 'whatsapp',
    icon: MessageSquare,
    title: 'WhatsApp AI & lead automation',
    description: '24/7 automated WhatsApp AI chatbots, lead capture engines, instant notification dispatches, and customer support workflows.',
    benefit: 'Capture & qualify 100% of leads 24/7',
    image: '/images/whatsapp_automation.jpg'
  },
  {
    id: 'manual',
    icon: Workflow,
    title: 'Universal manual process automation',
    description: 'Custom software scripts and background workers that eliminate Excel copy-pasting, report generation, and manual data tasks.',
    benefit: 'Save 20+ hours per week of manual labor',
    image: '/images/manual_automation.jpg'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-space-12 bg-bg-light border-b border-border-medium">
      <div className="max-w-7xl mx-auto px-space-6 sm:px-space-8">

        {/* Section Header */}
        <div className="text-left mb-space-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-space-2">
            Services & Solutions
          </div>
          <h2 className="text-2xl sm:text-lg font-bold text-dark tracking-tight">
            What we build & automate.
          </h2>
          <p className="text-base text-secondary mt-space-3 max-w-2xl">
            From complete custom ERP enterprise platforms to desktop, mobile, web, and automated WhatsApp AI workflows.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid gap-space-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="card-token p-space-6 flex flex-col justify-between"
            >
              <div>
                {/* Image Thumbnail */}
                <div className="relative w-full aspect-video rounded-sm overflow-hidden mb-space-4 border border-border-light bg-bg-light">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Icon & Title Header */}
                <div className="flex items-center gap-space-3 mb-space-3">
                  <div className="w-10 h-10 rounded-sm bg-bg-light border border-border-medium flex items-center justify-center shrink-0">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-dark">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-secondary mb-space-4 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div>
                {/* Benefit Badge */}
                <div className="inline-flex items-center gap-space-2 px-space-3 py-space-1.5 rounded-sm bg-bg-light border border-border-light text-dark text-xs font-medium mb-space-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{service.benefit}</span>
                </div>

                {/* Action Link */}
                <a
                  href="#contact"
                  className="flex items-center gap-space-2 text-sm font-medium text-primary hover:text-dark transition-colors"
                >
                  <span>Request custom demo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}