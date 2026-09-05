"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Activity,
  Database,
  Sparkles,
  Bot,
  ShieldCheck,
  BarChart2,
  UserCheck,
  Mail,
  Globe,
  MapPin,
  Zap,
  Target,
  TrendingUp,
  Layers,
  Code2,
  FileSpreadsheet,
  Cpu,
  ArrowRight
} from 'lucide-react';

const leadershipTeam = [
  {
    name: "CHARAN",
    title: "M.C.A",
    role: "Business Analyst & Test Engineer",
    description: "Expert in translating complex business processes into streamlined automated workflows, requirement analysis, and end-to-end quality assurance.",
    specialties: ["Workflow Analysis", "Test Automation", "Process Mapping", "Quality Assurance"],
    badgeColor: "border-amber-500/40 bg-amber-500/10 text-amber-400"
  },
  {
    name: "KRISHNA",
    title: "B.Tech",
    role: "Database Administrator & DevOps Engineer",
    description: "Specialist in enterprise database architecture, real-time sync systems, high-availability infrastructure, and DevOps deployment pipelines.",
    specialties: ["DB Architecture", "DevOps & CI/CD", "Cloud Infrastructure", "System Integration"],
    badgeColor: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
  }
];

const mainServices = [
  { icon: Code2, title: "Apps Development", desc: "Custom web & mobile apps designed for your operational workflow." },
  { icon: Globe, title: "Landpage Design", desc: "High-converting, sleek landing pages tailored for business growth." },
  { icon: FileSpreadsheet, title: "Excel Works", desc: "Automated macros, custom reporting, and spreadsheet synchronization." },
  { icon: Layers, title: "Integration Works", desc: "Connecting APIs, WhatsApp Cloud, CRMs, and payment gateways." },
  { icon: Cpu, title: "System Work Automation", desc: "End-to-end digitizing of manual & repetitive tasks." }
];

const pillars = [
  { icon: Zap, label: "FASTER PROCESSES", color: "text-amber-400" },
  { icon: Target, label: "BETTER ACCURACY", color: "text-emerald-400" },
  { icon: TrendingUp, label: "HIGHER PRODUCTIVITY", color: "text-cyan-400" },
  { icon: Bot, label: "SMART AUTOMATION", color: "text-purple-400" }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#031638] relative overflow-hidden border-t border-amber-500/10">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* TOP SECTION: Purpose, Philosophy & Visual Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06245A] border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              WE AUTOMATE. YOU GROW.
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              WE DON&apos;T JUST BUILD SOFTWARE.{' '}
              <span className="text-amber-500 block mt-1">
                WE SOLVE BUSINESS PROBLEMS.
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Every business has repetitive tasks, disconnected systems, spreadsheets, manual reports, and processes that consume valuable time.
            </p>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              We identify those manual friction points and transform them into simple, bulletproof digital solutions and automated workflows. You save time, eliminate human errors, and focus on expanding your core business.
            </p>

            {/* Core Motto Tagline Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#06245A] to-[#020B19] border border-amber-500/30 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">Company Slogan</span>
                <span className="text-sm font-extrabold text-white">AUTOMATE TODAY, SCALE TOMORROW.</span>
              </div>
              <span className="px-3 py-1 text-[11px] font-bold font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 rounded-full shrink-0">
                100% Tailored
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-2.5 text-sm text-slate-200 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Tailored to Your Operations</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-200 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>High-Speed Next.js Architecture</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-200 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>End-to-End System Sync</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-200 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Continuous Reliability</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual: Command Center Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="rounded-2xl bg-[#020B19] border border-amber-500/30 p-6 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-xl">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-slate-400 ml-2">Automate Command Center v4.2</span>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-500/30 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 animate-pulse" /> SYSTEM OPTIMAL
                </span>
              </div>

              {/* Dashboard Metrics Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#031638] p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Workflows Executed</div>
                  <div className="text-xl font-black text-amber-400 font-mono">142,890</div>
                </div>
                <div className="bg-[#031638] p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Avg Sync Speed</div>
                  <div className="text-xl font-black text-emerald-400 font-mono">18 ms</div>
                </div>
                <div className="bg-[#031638] p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Manual Hours Saved</div>
                  <div className="text-xl font-black text-white font-mono">1,240 hrs</div>
                </div>
              </div>

              {/* Live Event Stream Mock */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono text-amber-400/90 font-bold uppercase tracking-wider flex items-center justify-between">
                  <span>LIVE AUTOMATION EVENT STREAM</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                
                <div className="p-3 rounded-lg bg-[#06245A]/40 border border-slate-800 text-xs font-mono text-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-amber-400" />
                    <span>WhatsApp Lead captured → Parsed → Added to CRM</span>
                  </div>
                  <span className="text-slate-400 text-[10px]">Just now</span>
                </div>

                <div className="p-3 rounded-lg bg-[#06245A]/40 border border-slate-800 text-xs font-mono text-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-emerald-400" />
                    <span>Excel Sales Report generated & emailed to Execs</span>
                  </div>
                  <span className="text-slate-400 text-[10px]">2 min ago</span>
                </div>

                <div className="p-3 rounded-lg bg-[#06245A]/40 border border-slate-800 text-xs font-mono text-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-amber-400" />
                    <span>Inventory synced across WhatsApp & Portal</span>
                  </div>
                  <span className="text-slate-400 text-[10px]">5 min ago</span>
                </div>
              </div>

              {/* Security Banner */}
              <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" /> Enterprise Encryption Standard
                </span>
                <span className="text-white font-bold">AUTOMATE BUSINESS SOLUTIONS</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Services Offered Bar */}
        <div className="space-y-6 pt-6 border-t border-slate-800/80">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              What We Build & Automate
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              ANY SYSTEM WORK – <span className="text-amber-500">WE CAN AUTOMATE</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {mainServices.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <motion.div
                  key={srv.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl bg-[#020B19] border border-amber-500/20 hover:border-amber-500/50 transition-all group space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#06245A] border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {srv.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {srv.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Leadership & Technical Experts Section */}
        <div className="space-y-10 pt-8 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#06245A] border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest">
              Leadership & Architecture
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Meet Our <span className="text-amber-500">Automation Engineers</span>
            </h3>
            <p className="text-slate-300 text-sm">
              Hands-on technical leadership ensuring every system we deploy is secure, scalable, and tailored to your exact business workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leadershipTeam.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="rounded-3xl bg-[#020B19] border-2 border-amber-500/30 p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between space-y-6 group hover:border-amber-500/60 transition-all"
              >
                {/* Header info */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#06245A] border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">
                        <UserCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xl font-extrabold text-white tracking-wide">
                            {member.name}
                          </h4>
                          <span className={`text-xs px-2.5 py-0.5 rounded-full font-mono font-bold border ${member.badgeColor}`}>
                            {member.title}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-amber-400 font-mono mt-0.5">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Specialty Chips */}
                <div className="space-y-2 pt-4 border-t border-slate-800">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-bold">
                    Key Expertise:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="px-2.5 py-1 rounded-md bg-[#06245A]/60 border border-slate-700 text-slate-300 text-xs font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Value Pillars Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#020B19] via-[#06245A] to-[#020B19] border border-amber-500/30 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {pillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div key={pillar.label} className="space-y-2 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#031638] border border-amber-500/30 flex items-center justify-center">
                    <IconComp className={`w-6 h-6 ${pillar.color}`} />
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-white font-mono tracking-wider">
                    {pillar.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Official Contact & Company Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-[#020B19] border-2 border-amber-500/30 p-8 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase">
                <ShieldCheck className="w-4 h-4" /> Verified Business Entity
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                AUTOMATE BUSINESS SOLUTIONS
              </h3>
              <p className="text-sm font-bold text-amber-400 tracking-wider uppercase font-mono">
                SMART SOLUTIONS. SEAMLESS AUTOMATION. BETTER BUSINESS.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm">
                <div className="flex items-center gap-3 text-slate-300 bg-[#031638] p-3 rounded-xl border border-slate-800">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">abs.innovates@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 bg-[#031638] p-3 rounded-xl border border-slate-800">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">automatebusinesssolutions@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 bg-[#031638] p-3 rounded-xl border border-slate-800">
                  <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                  <a 
                    href="https://automatebusinesssolutions.vercel.app" 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-amber-400 transition-colors truncate"
                  >
                    automatebusinesssolutions.vercel.app
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-300 bg-[#031638] p-3 rounded-xl border border-slate-800">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#06245A]/40 border border-amber-500/20 text-center space-y-4">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">Ready to Start?</span>
              <p className="text-xs text-slate-300">
                Get in touch directly with our leadership team for a custom workflow audit and technical consultation.
              </p>
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
              >
                <span>Consult Our Engineers</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}