import React from 'react';
import { Building2, BadgeCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const partners = [
  {
    name: 'EPS',
    blurb: 'Electronic Payment Services — Large-scale ATM deployment across India with robust uptime.',
  },
  {
    name: 'India1 Payments',
    blurb: 'One of the largest white-label ATM networks focused on semi-urban and rural reach.',
  },
  {
    name: 'Findi',
    blurb: 'Innovative fintech-driven ATM solutions with strong service backbone.',
  },
  {
    name: 'Hitachi Payment Services',
    blurb: 'Trusted technology and managed services powering ATMs nationwide.',
  },
];

export default function PartnersGrid() {
  return (
    <section id="partners" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Trusted Partners</h2>
            <p className="text-slate-600 mt-2 max-w-prose">
              We collaborate with leading ATM networks to ensure reliability, scale, and solid returns.
            </p>
          </div>
          <a
            href="#franchise"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 font-medium text-slate-900 hover:bg-slate-50"
          >
            Become a Partner
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((p, idx) => (
            <motion.a
              key={p.name}
              href="#franchise"
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-5 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.05 * idx }}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-tr from-blue-600 to-cyan-500 text-white">
                  <Building2 size={18} />
                </span>
                <BadgeCheck className="text-emerald-500" size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.blurb}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-900">
                Learn more <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
