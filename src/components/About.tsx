"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Sparkles,
  UserCheck,
  Globe,
  MapPin,
  Mail,
  Zap,
  Target,
  TrendingUp,
  Bot,
  ArrowRight
} from 'lucide-react';

const leadershipTeam = [
  {
    name: "Charan",
    title: "M.C.A",
    role: "Business Analyst & Test Engineer",
    description: "Specializes in process audit, business workflow mapping, requirements specification, and automated software testing.",
    specialties: ["Workflow analysis", "Test automation", "Process mapping", "Quality assurance"]
  },
  {
    name: "Krishna",
    title: "B.Tech",
    role: "Database Administrator & DevOps Engineer",
    description: "Specializes in enterprise database architecture, real-time event synchronization, cloud infrastructure, and CI/CD pipelines.",
    specialties: ["Database architecture", "DevOps & CI/CD", "Cloud infrastructure", "System integration"]
  }
];

const valuePillars = [
  { icon: Zap, label: "Faster execution", description: "Streamline operational processing cycles from hours to sub-seconds." },
  { icon: Target, label: "Precision accuracy", description: "Eliminate manual data entry errors with strict schema validation." },
  { icon: TrendingUp, label: "Scalable throughput", description: "Handle exponential business growth without additional operational headcount." },
  { icon: Bot, label: "Intelligent pipelines", description: "Resilient automated engines with automated fallback and retry mechanisms." }
];

export default function About() {
  return (
    <section id="about" className="py-space-12 bg-bg-white border-b border-border-medium">
      <div className="max-w-7xl mx-auto px-space-6 sm:px-space-8">

        {/* Section Header */}
        <div className="text-left mb-space-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-space-2">
            Company
          </div>
          <h2 className="text-2xl sm:text-lg font-bold text-dark tracking-tight">
            About Autom Mate.
          </h2>
          <p className="text-base text-secondary mt-space-3 max-w-2xl">
            We build custom ERP systems, desktop and mobile applications, web portals, and process automation to eliminate manual operational friction.
          </p>
        </div>

        {/* Mission & Approach */}
        <div className="grid gap-space-8 sm:grid-cols-2 items-start mb-space-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="card-token p-space-6"
          >
            <div className="inline-flex items-center gap-space-2 px-space-3 py-space-1 rounded-sm bg-bg-light border border-border-light text-primary text-xs font-medium mb-space-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our mission</span>
            </div>

            <h3 className="text-base font-bold text-dark mb-space-3">
              Eliminate manual business overhead & repetitive tasks
            </h3>

            <p className="text-sm text-secondary leading-relaxed mb-space-3">
              Every business has repetitive spreadsheet tasks, disconnected tools, and manual processes that waste valuable staff time. We build custom ERP systems, desktop/mobile applications, and automated workflows to transform manual friction into streamlined software.
            </p>

            <p className="text-sm text-secondary leading-relaxed">
              Our engineering team focuses on understanding your operational workflows before engineering custom software solutions that integrate seamlessly with your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="card-token p-space-6"
          >
            <div className="inline-flex items-center gap-space-2 px-space-3 py-space-1 rounded-sm bg-bg-light border border-border-light text-primary text-xs font-medium mb-space-4">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Our methodology</span>
            </div>

            <h3 className="text-base font-bold text-dark mb-space-3">
              Client-focused custom software development
            </h3>

            <div className="space-y-space-3">
              <div className="flex items-center gap-space-2 text-sm text-secondary">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Process audit & requirements specification</span>
              </div>
              <div className="flex items-center gap-space-2 text-sm text-secondary">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Custom ERP & desktop/mobile software architecture</span>
              </div>
              <div className="flex items-center gap-space-2 text-sm text-secondary">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Quality testing, WhatsApp AI & system integration</span>
              </div>
              <div className="flex items-center gap-space-2 text-sm text-secondary">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Deployment, team onboarding & continuous support</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Value Pillars */}
        <div className="mb-space-12">
          <div className="text-left mb-space-6">
            <h3 className="text-lg font-bold text-dark">
              Core value pillars
            </h3>
          </div>

          <div className="grid gap-space-6 sm:grid-cols-2 lg:grid-cols-4">
            {valuePillars.map((pillar, idx) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="card-token p-space-6"
              >
                <div className="w-10 h-10 mb-space-4 rounded-sm bg-bg-light border border-border-medium flex items-center justify-center">
                  <pillar.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-dark text-base mb-space-2">{pillar.label}</h4>
                <p className="text-sm text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-space-12">
          <div className="text-left mb-space-6">
            <h3 className="text-lg font-bold text-dark">
              Leadership & engineering team
            </h3>
          </div>

          <div className="grid gap-space-6 sm:grid-cols-2">
            {leadershipTeam.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="card-token p-space-6"
              >
                <div className="flex items-center gap-space-3 mb-space-4">
                  <div className="w-10 h-10 rounded-sm bg-bg-light border border-border-medium flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-base">{member.name} <span className="text-xs font-mono text-secondary font-normal">({member.title})</span></h4>
                    <p className="text-xs text-primary font-medium">{member.role}</p>
                  </div>
                </div>

                <p className="text-sm text-secondary leading-relaxed mb-space-4">
                  {member.description}
                </p>

                <div className="flex flex-wrap gap-space-2">
                  {member.specialties.map((specialty) => (
                    <span key={specialty} className="px-space-3 py-space-1 rounded-sm bg-bg-light border border-border-light text-dark text-xs font-medium">
                      {specialty}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Info Card */}
        <div className="card-token p-space-8 bg-bg-light border-border-medium flex flex-col sm:flex-row items-center justify-between gap-space-6">
          <div className="space-y-space-2 text-left">
            <h3 className="text-base font-bold text-dark">
              Ready to automate your business software & operations?
            </h3>
            <div className="flex flex-wrap gap-space-4 text-xs text-secondary pt-space-1 min-w-0">
              <div className="flex items-start gap-space-2 min-w-0">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href="mailto:contact@automatebusinesssolutions.de5.net" className="hover:underline break-all">contact@automatebusinesssolutions.de5.net</a>
              </div>
              <div className="flex items-start gap-space-2 min-w-0">
                <Globe className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href="https://automatebusinesssolutions.de5.net" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">automatebusinesssolutions.de5.net</a>
              </div>
              <div className="flex items-center gap-space-2 min-w-0">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>Andhra Pradesh, India</span>
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="btn-primary text-sm shrink-0"
          >
            <span>Schedule consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}