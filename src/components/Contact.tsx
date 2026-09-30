"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  CheckCircle2,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowRight,
  User,
  Building,
  Layers,
  MessageSquare
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
    serviceType: 'Custom ERP Systems',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || `Submission failed: ${response.statusText || response.status}`);
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Form Submission Error:", err);
      setError(err.message || "Unable to submit form. Please check your network connection or try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      businessName: '',
      email: '',
      phone: '',
      serviceType: 'Custom ERP Systems',
      message: ''
    });
    setError(null);
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-space-12 bg-bg-light border-b border-border-medium">
      <div className="max-w-7xl mx-auto px-space-6 sm:px-space-8">

        {/* Section Header */}
        <div className="text-left mb-space-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-space-2">
            Get in touch
          </div>
          <h2 className="text-2xl sm:text-lg font-bold text-dark tracking-tight">
            Schedule a technical consultation.
          </h2>
          <p className="text-base text-secondary mt-space-3 max-w-2xl">
            Discuss your system architecture with our software engineering team and receive a custom implementation plan.
          </p>
        </div>

        {submitted ? (
          <div className="card-token p-space-8 text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center w-12 h-12 mb-space-4 rounded-full bg-primary/10 text-primary mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-dark mb-space-2">
              Consultation request received!
            </h3>
            <p className="text-sm text-secondary leading-relaxed max-w-md mx-auto mb-space-6">
              Thank you. Our software architects will review your project requirements and contact you within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="btn-secondary text-sm"
            >
              <span>Submit another request</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="grid gap-space-8 lg:grid-cols-12">
            {/* Contact Info Side */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-5 space-y-space-6"
            >
              <div className="card-token p-space-6 space-y-space-4">
                <div className="inline-flex items-center gap-space-2 px-space-3 py-space-1 rounded-sm bg-bg-light border border-border-light text-primary text-xs font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Project timeline</span>
                </div>

                <h3 className="text-base font-bold text-dark">
                  Fast-track delivery process
                </h3>

                <div className="space-y-space-3 text-sm text-secondary">
                  <div className="flex items-center gap-space-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Business discovery & process audit</span>
                  </div>
                  <div className="flex items-center gap-space-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Custom ERP & app architecture design</span>
                  </div>
                  <div className="flex items-center gap-space-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>WhatsApp AI & software build sprint</span>
                  </div>
                  <div className="flex items-center gap-space-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Deployment, team onboarding & 24/7 SLA support</span>
                  </div>
                </div>
              </div>

              <div className="card-token p-space-6 space-y-space-3 text-sm text-secondary">
                <div className="flex items-center gap-space-3">
                  <Globe className="w-4 h-4 text-primary shrink-0" />
                  <a href="https://automatebusinesssolutions.de5.net" target="_blank" rel="noopener noreferrer" className="font-medium text-dark hover:underline">
                    automatebusinesssolutions.de5.net
                  </a>
                </div>
                <div className="flex items-center gap-space-3">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <a href="mailto:contact@automatebusinesssolutions.de5.net" className="font-medium text-dark hover:underline">
                    contact@automatebusinesssolutions.de5.net
                  </a>
                </div>
                <div className="flex items-center gap-space-3">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-medium text-dark">Andhra Pradesh, India</span>
                </div>
              </div>

            </motion.div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <form onSubmit={handleSubmit} className="card-token p-space-6 space-y-space-4">
                <div className="grid gap-space-4 sm:grid-cols-2">
                  <div className="space-y-space-1">
                    <label className="text-xs font-semibold text-dark flex items-center gap-space-1.5">
                      <User className="w-3.5 h-3.5 text-primary" /> Full name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-space-4 py-space-3 rounded-sm bg-bg-white border border-border-medium text-dark placeholder:text-secondary text-sm focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div className="space-y-space-1">
                    <label className="text-xs font-semibold text-dark flex items-center gap-space-1.5">
                      <Building className="w-3.5 h-3.5 text-primary" /> Company name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. FinTech Innovations"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-space-4 py-space-3 rounded-sm bg-bg-white border border-border-medium text-dark placeholder:text-secondary text-sm focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div className="space-y-space-1">
                    <label className="text-xs font-semibold text-dark flex items-center gap-space-1.5">
                      <Mail className="w-3.5 h-3.5 text-primary" /> Work email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@fintech.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-space-4 py-space-3 rounded-sm bg-bg-white border border-border-medium text-dark placeholder:text-secondary text-sm focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div className="space-y-space-1">
                    <label className="text-xs font-semibold text-dark flex items-center gap-space-1.5">
                      <Phone className="w-3.5 h-3.5 text-primary" /> Phone number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-space-4 py-space-3 rounded-sm bg-bg-white border border-border-medium text-dark placeholder:text-secondary text-sm focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-space-1">
                  <label className="text-xs font-semibold text-dark flex items-center gap-space-1.5">
                    <Layers className="w-3.5 h-3.5 text-primary" /> Solution category *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-space-4 py-space-3 rounded-sm bg-bg-white border border-border-medium text-dark text-sm focus:border-primary focus:outline-none cursor-pointer"
                  >
                    <option value="Custom ERP Systems">Custom ERP Systems</option>
                    <option value="Custom Windows Applications">Custom Windows Applications</option>
                    <option value="Custom Mobile Applications">Custom Mobile Applications (iOS & Android)</option>
                    <option value="Custom Web Applications">Custom Web Applications & Portals</option>
                    <option value="WhatsApp AI Automation">WhatsApp AI & Lead Automation</option>
                    <option value="Process Automation">Universal Manual Process Automation</option>
                  </select>
                </div>

                <div className="space-y-space-1">
                  <label className="text-xs font-semibold text-dark flex items-center gap-space-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-primary" /> Project scope & requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your current manual tasks, software needs, or automation goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-space-4 py-space-3 rounded-sm bg-bg-white border border-border-medium text-dark placeholder:text-secondary text-sm focus:border-primary focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full cursor-pointer"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-space-2">
                      <span className="w-4 h-4 border-2 border-bg-white border-t-transparent rounded-full animate-spin" />
                      Submitting request...
                    </span>
                  ) : (
                    <>
                      <span>Request consultation</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {error && (
                  <div className="p-space-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-sm font-mono text-center">
                    {error}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}