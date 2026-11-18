"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Building2, Code2 } from 'lucide-react';

const clients = [
  { name: 'Wall Creations', note: 'Custom Windows Application', link: null as string | null },
  { name: 'Syam Institutions', note: 'Windows application for exam papers correction', link: null as string | null },
  { name: 'Transocean', note: 'Application Support', link: null as string | null },
  { name: 'GLR Cameras', note: 'Mobile applications', link: null as string | null },
  { name: 'Karthikeya Constructions', note: 'Website', link: 'https://client-five-zeta-57.vercel.app/' },
];

export default function Clients() {
  return (
    <section id="clients" className="py-space-12 bg-bg-light border-b border-border-medium">
      <div className="max-w-7xl mx-auto px-space-6 sm:px-space-8">
        <div className="text-left mb-space-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-space-2">
            Our clients
          </div>
          <h2 className="text-2xl sm:text-lg font-bold text-dark tracking-tight">
            Businesses we&apos;ve built software for.
          </h2>
          <p className="text-base text-secondary mt-space-3 max-w-2xl">
            A few of the teams who trust Automate with their systems — see more
            of our work on GitHub.
          </p>
        </div>

        <div className="grid gap-space-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card-token p-space-6"
            >
              <div className="flex items-center gap-space-3 mb-space-3">
                <div className="w-10 h-10 rounded-sm bg-bg-light border border-border-medium flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-dark text-base">{client.name}</h3>
              </div>
              {client.note && (
                <p className="text-sm text-secondary leading-relaxed mb-space-4">{client.note}</p>
              )}
              {client.link && (
                <a
                  href={client.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-space-2 text-sm font-medium text-primary hover:text-dark transition-colors"
                >
                  <span>View website</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}

          <motion.a
            href="https://github.com/saikrishnanewdev"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="card-token p-space-6 flex flex-col justify-center hover:border-primary transition-colors"
          >
            <div className="flex items-center gap-space-3 mb-space-3">
              <div className="w-10 h-10 rounded-sm bg-bg-light border border-border-medium flex items-center justify-center shrink-0">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-dark text-base">More on GitHub</h3>
            </div>
            <p className="text-sm text-secondary leading-relaxed mb-space-4">
              Browse our projects and code at github.com/saikrishnanewdev.
            </p>
            <span className="flex items-center gap-space-2 text-sm font-medium text-primary">
              <span>View our projects on GitHub</span>
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
