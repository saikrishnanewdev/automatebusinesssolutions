"use client";

import React from 'react';
import { Building2, Monitor, Smartphone, Globe, MessageSquare, Workflow, Zap } from 'lucide-react';

const items = [
  { label: 'Custom ERP Systems', icon: Building2 },
  { label: 'Windows Applications', icon: Monitor },
  { label: 'iOS & Android Apps', icon: Smartphone },
  { label: 'Web Portals & SaaS', icon: Globe },
  { label: 'WhatsApp AI Chatbots', icon: MessageSquare },
  { label: 'Excel & Data Automation', icon: Workflow },
  { label: 'Zero Manual Work', icon: Zap },
];

export default function TrustMarquee() {
  return (
    <section className="bg-bg-white border-y border-border-medium py-space-6">
      <div className="max-w-7xl mx-auto px-space-6 sm:px-space-8">
        <div className="flex flex-wrap items-center justify-center gap-space-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-space-2 px-space-4 py-space-3 rounded-sm border border-border-light bg-bg-light hover:border-primary transition-colors duration-200"
            >
              <item.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-dark">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}