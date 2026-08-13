"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Zap,
  Database,
  Bot,
  FileSpreadsheet,
  MessageSquare,
  CheckCircle2,
  Cpu,
  Sparkles,
  Globe,
  TrendingUp,
  Layers
} from 'lucide-react';

const enginePresets = [
  {
    id: 'whatsapp',
    title: 'Lead & WhatsApp Flow',
    input: 'WhatsApp Inquiry',
    inputIcon: MessageSquare,
    engineAction: 'AI Natural Processing & Routing',
    result: 'CRM Contact Created & Alert Sent',
    tag: 'Instant Lead Capture'
  },
  {
    id: 'excel',
    title: 'Excel & Data Reports',
    input: 'Raw Excel Sheet',
    inputIcon: FileSpreadsheet,
    engineAction: 'Auto Data Cleanse & Aggregation',
    result: 'Live Executive Dashboard',
    tag: 'Zero Manual Work'
  },
  {
    id: 'crm',
    title: 'Order & Billing Sync',
    input: 'Online Customer Order',
    inputIcon: Globe,
    engineAction: 'ERP & Payment Gateway Sync',
    result: 'Automated Invoice & Inventory',
    tag: '100% Error-Free'
  }
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const activePreset = enginePresets[activeTab];
  const InputIcon = activePreset.inputIcon;

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#020B19] bg-tech-grid overflow-hidden">
      {/* Ambient Radial Gradient Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#06245A]/50 via-amber-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06245A]/80 border border-amber-500/30 backdrop-blur-md shadow-inner shadow-amber-500/10">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                Automate Business Solutions • We Automate. You Grow.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              AUTOMATE YOUR BUSINESS.{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                GROW WITHOUT LIMITS.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              We build smart apps, powerful automations, business systems, integrations, and digital solutions that eliminate repetitive work and help your business run smarter.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              >
                <span>Start Automating</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#06245A]/40 border border-slate-700/80 hover:border-amber-500/50 text-slate-200 hover:text-white font-semibold text-base backdrop-blur-sm hover:bg-[#06245A]/80 transition-all duration-200"
              >
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-slate-400 text-xs font-medium">
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Custom Workflow Engines</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Seamless API & ERP Sync</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Zero Downtime Setup</span>
              </div>
            </div>
          </motion.div>

          {/* Right Automation Engine Graphic Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Floating Floating Tech Badges around visualizer */}
            <div className="absolute -top-6 -left-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#06245A]/90 border border-amber-500/30 text-amber-400 text-xs font-semibold shadow-lg backdrop-blur-md animate-bounce">
              <Cpu className="w-4 h-4" />
              <span>AI Automation Engine Active</span>
            </div>

            <div className="absolute -bottom-4 -right-2 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#031638]/90 border border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-lg backdrop-blur-md">
              <TrendingUp className="w-4 h-4" />
              <span>99.9% Manual Time Saved</span>
            </div>

            {/* Main Interactive Card Container */}
            <div className="relative rounded-2xl bg-[#031638]/80 border border-amber-500/20 p-5 sm:p-7 shadow-2xl backdrop-blur-xl space-y-6">

              {/* Header Selector Tabs */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 flex-wrap gap-2">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-200">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>Interactive Engine Demo</span>
                </div>
                <div className="flex gap-1 bg-[#020B19] p-1 rounded-lg border border-slate-800">
                  {enginePresets.map((preset, idx) => (
                    <button
                      key={preset.id}
                      onClick={() => setActiveTab(idx)}
                      className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${activeTab === idx
                        ? 'bg-amber-500 text-slate-950 shadow-md'
                        : 'text-slate-400 hover:text-white'
                        }`}
                    >
                      {preset.id.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Workflow Flow Nodes Graphic */}
              <div className="space-y-4 relative py-2">
                {/* Input Node */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#06245A]/50 border border-slate-700/60 text-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-slate-800 text-amber-400">
                      <InputIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono uppercase">Input Channel</div>
                      <div className="text-sm font-bold text-white">{activePreset.input}</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-amber-500/20 text-amber-400 rounded border border-amber-500/30">
                    RAW DATA
                  </span>
                </div>

                {/* Animated Pulsing Connector Line */}
                <div className="flex justify-center my-1 relative">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-amber-500 via-amber-400 to-amber-500 relative">
                    <motion.div
                      animate={{ y: [0, 24, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 -left-1 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-md shadow-amber-400"
                    />
                  </div>
                </div>

                {/* Central Engine Node */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#06245A] to-[#0B3B8C] border-2 border-amber-500/50 shadow-lg shadow-amber-500/10 text-white flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-amber-500 text-slate-950 font-black">
                      <Zap className="w-6 h-6 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-[11px] text-amber-300 font-mono tracking-wider uppercase font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3" /> AUTOMATE ENGINE
                      </div>
                      <div className="text-base font-extrabold text-white">{activePreset.engineAction}</div>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-xs px-2.5 py-1 bg-amber-400/20 text-amber-300 rounded-full font-mono border border-amber-400/30">
                    PROCESSING
                  </span>
                </div>

                {/* Animated Pulsing Connector Line */}
                <div className="flex justify-center my-1 relative">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-amber-500 via-emerald-400 to-emerald-500 relative">
                    <motion.div
                      animate={{ y: [0, 24, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 -left-1 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-md shadow-emerald-400"
                    />
                  </div>
                </div>

                {/* Output Result Node */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-emerald-400/80 font-mono uppercase">Automated Result</div>
                      <div className="text-sm font-bold text-white">{activePreset.result}</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-bold bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    DONE
                  </span>
                </div>
              </div>

              {/* Integrated Systems Icons Bar */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>CONNECTED TECH:</span>
                <div className="flex gap-2 text-slate-300 font-semibold">
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">API</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">CRM</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">WhatsApp</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">Excel</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">AI</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}