"use client";

import React from 'react';
import { motion } from 'framer-motion';

const founders = [
  {
    name: 'Sai Krishna',
    qualification: 'B.Tech',
    role: 'DevOps Engineer',
    initials: 'SK',
  },
  {
    name: 'Charan',
    qualification: 'M.C.A.',
    role: 'Business Analyst',
    initials: 'C',
  },
];

export default function Founders() {
  return (
    <section id="founders" className="py-space-12 bg-bg-light border-b border-border-medium scroll-mt-24">
      <div className="max-w-7xl mx-auto px-space-6 sm:px-space-8">
        <div className="text-left mb-space-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-space-2">
            Meet the founders
          </div>
          <h2 className="text-2xl sm:text-lg font-bold text-dark tracking-tight">
            The people behind Automate.
          </h2>
          <p className="text-base text-secondary mt-space-3 max-w-2xl">
            The two founders who design, build, and run the software we deliver.
          </p>
        </div>

        {/* Two cards side by side on every screen, each a compact horizontal row */}
        <div className="grid grid-cols-2 gap-space-4 sm:gap-space-6">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card-token p-space-4 sm:p-space-6"
            >
              <div className="flex items-center gap-space-3 sm:gap-space-4">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-dark text-bg-white flex items-center justify-center shrink-0 text-sm sm:text-lg font-bold">
                  {founder.initials}
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-dark text-sm sm:text-base truncate">
                    {founder.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary truncate">{founder.role}</p>
                  <p className="text-xs text-accent font-medium mt-0.5">
                    {founder.qualification} &middot; Co-founder
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
