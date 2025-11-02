import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden pt-16">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1E8kzE7j3kJ6pU3w/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay that doesn't block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
              <Shield size={14} /> Trusted ATM Franchise Network
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Grow with India’s Leading ATM Partners
            </h1>
            <p className="text-slate-600 text-lg max-w-prose">
              Start and scale your ATM business with established brands like EPS, India1, Findi, and Hitachi. We handle
              onboarding, compliance, and support so you can focus on returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#franchise"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 text-white px-6 py-3 font-semibold hover:opacity-90"
              >
                Start a Franchise <ArrowRight size={18} />
              </a>
              <a
                href="#partners"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-50"
              >
                Explore Partners
              </a>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-1 text-amber-500">
                <Star size={16} /> <Star size={16} /> <Star size={16} /> <Star size={16} /> <Star size={16} />
              </div>
              <p className="text-sm text-slate-600">Rated 4.9/5 by franchise owners</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">Why Franchise With Us</h3>
              <ul className="space-y-3 text-slate-600">
                <li>• Pan-India deployment with top-tier partners</li>
                <li>• Transparent ROI, site selection guidance</li>
                <li>• Managed compliance, cash loading, and uptime</li>
                <li>• Dedicated support and performance tracking</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
