import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const partners = [
  {
    key: 'eps',
    name: 'EPS (Electronic Payment Services)',
    to: '/partners/eps',
    gradient: 'from-blue-500 to-indigo-600',
    blurb: 'Large footprint, reliable uptime, nationwide reach.'
  },
  {
    key: 'india1',
    name: 'India1 Payments',
    to: '/partners/india1',
    gradient: 'from-emerald-500 to-teal-600',
    blurb: 'Strong presence in semi-urban and rural markets.'
  },
  {
    key: 'findi',
    name: 'Findi (Formerly AGS)',
    to: '/partners/findi',
    gradient: 'from-rose-500 to-pink-600',
    blurb: 'Enterprise-grade tech and robust services.'
  },
  {
    key: 'hitachi',
    name: 'Hitachi Payment Services',
    to: '/partners/hitachi',
    gradient: 'from-amber-500 to-orange-600',
    blurb: 'Trusted global brand with advanced security.'
  }
];

export default function PartnersGrid({ title = 'Trusted Partner Networks' }) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">{title}</h2>
            <p className="mt-2 text-slate-600 max-w-3xl">Choose from industry-leading networks. We help you pick the right partner based on your location, footfall potential, and ROI goals.</p>
          </div>
          <Link to="/franchise" className="hidden sm:inline-flex rounded-md border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50">Compare Plans</Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((p, idx) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group"
            >
              <Link
                to={p.to}
                className="block h-full rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${p.gradient} text-white grid place-items-center font-bold`}>{p.name.split(' ')[0][0]}</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-blue-600">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.blurb}</p>
                <div className="mt-4 inline-flex items-center text-sm font-medium text-blue-700">
                  Learn more →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
