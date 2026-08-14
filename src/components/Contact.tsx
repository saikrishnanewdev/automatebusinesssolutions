"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  CheckCircle2,
  Sparkles,
  Building,
  Mail,
  Phone,
  User,
  MessageSquare,
  Layers
} from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    serviceType: 'Business Automation',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      // Fallback for simulation if webhook URL is not set
      console.warn("NEXT_PUBLIC_N8N_WEBHOOK_URL is not set. Simulating form submission.");
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1000);
      return;
    }

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Submission failed: ${response.statusText || response.status}`);
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("n8n Webhook Error:", err);
      setError("Unable to submit form. Please check your network connection or try again later.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id="contact" className="py-24 bg-[#031638] relative overflow-hidden border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Value Prop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#06245A] border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest">
              Direct Consultation
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              TELL US WHAT YOU&apos;RE DOING{' '}
              <span className="text-amber-500">MANUALLY.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Have a process that&apos;s wasting your team&apos;s time? Tell us about it. We will analyze your workflow and propose an automated software architecture.
            </p>

            <div className="p-6 rounded-2xl bg-[#020B19]/80 border border-amber-500/20 space-y-4 shadow-xl">
              <div className="flex items-center gap-3 text-amber-400 font-bold text-sm">
                <Sparkles className="w-5 h-5" />
                <span>What Happens Next?</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-medium">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Free 30-minute process & workflow audit</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Custom automation roadmap & architecture plan</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Transparent pricing & time-saving guarantees</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#06245A]/40 border border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>BUSINESS SOLUTIONS DEPLOYMENT</span>
              <span className="text-emerald-400 font-bold">READY TO CONSULT</span>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-[#020B19] border-2 border-amber-500/30 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Request Received!</h3>
                  <p className="text-slate-300 max-w-md mx-auto text-sm">
                    Thank you! Our automation engineers will review your manual process and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#06245A] border border-amber-500/30 text-amber-400 font-semibold text-xs uppercase tracking-wider hover:bg-amber-500 hover:text-slate-950 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-amber-400" /> Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#031638] border border-slate-800 focus:border-amber-500 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"
                      />
                    </div>

                    {/* Business Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-amber-400" /> Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Logistics Ltd"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#031638] border border-slate-800 focus:border-amber-500 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-amber-400" /> Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#031638] border border-slate-800 focus:border-amber-500 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-amber-400" /> Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +1 (555) 019-2834"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#031638] border border-slate-800 focus:border-amber-500 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Primary Area of Interest */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-amber-400" /> What do you want to automate? *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#031638] border border-slate-800 focus:border-amber-500 text-white text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all cursor-pointer"
                    >
                      <option value="Business Automation">Business Workflow Automation</option>
                      <option value="App Development">Custom Web / Mobile Application</option>
                      <option value="Excel Solutions">Excel Automation & Reporting</option>
                      <option value="System Integration">System Integration (API / CRM / WhatsApp)</option>
                      <option value="Custom Business Systems">Complete Custom Business System</option>
                      <option value="Landing Pages">High-Converting Website / Landing Page</option>
                    </select>
                  </div>

                  {/* Message Description */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-amber-400" /> Describe your manual process *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us step-by-step what your team currently does manually (e.g. 'We copy client details from WhatsApp into Excel sheets every evening...')."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#031638] border border-slate-800 focus:border-amber-500 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 py-4 px-8 rounded-xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        Processing Request...
                      </span>
                    ) : (
                      <>
                        <span>Let&apos;s Automate It</span>
                        <Send className="w-5 h-5 text-slate-950" />
                      </>
                    )}
                  </button>

                  {error && (
                    <div className="p-3 text-xs text-rose-400 bg-rose-950/40 border border-rose-500/30 rounded-xl text-center font-mono">
                      {error}
                    </div>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}