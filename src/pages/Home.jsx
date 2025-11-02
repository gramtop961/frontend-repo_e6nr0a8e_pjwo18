import Hero from '../components/Hero';
import PartnersGrid from '../components/PartnersGrid';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'ATM Franchise | Modern, Credible, High-ROI';
  }, []);

  return (
    <main>
      <Hero />

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-3">
          {[
            { title: 'Pan-India Coverage', text: 'Access networks with strong urban and semi-urban presence for consistent transactions.' },
            { title: 'Fast, Transparent Onboarding', text: 'Clear documentation, vetted locations, and predictable go-live timelines.' },
            { title: 'Reliable Support', text: 'End-to-end assistance, uptime monitoring, cash management guidance, and reconciliations.' }
          ].map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{b.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <PartnersGrid />
    </main>
  );
}
