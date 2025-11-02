import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const partners = [
  {
    key: 'eps',
    name: 'EPS (Electronic Payment Services)',
    to: '/partners/eps',
    gradient: 'from-blue-500 to-indigo-600',
    perks: ['Strong uptime', 'National coverage', 'Robust backend'],
  },
  {
    key: 'india1',
    name: 'India1 Payments',
    to: '/partners/india1',
    gradient: 'from-emerald-500 to-teal-600',
    perks: ['Rural & semi-urban focus', 'High penetration', 'Steady volumes'],
  },
  {
    key: 'findi',
    name: 'Findi (Formerly AGS)',
    to: '/partners/findi',
    gradient: 'from-rose-500 to-pink-600',
    perks: ['Enterprise tech', 'Scalable operations', 'Great analytics'],
  },
  {
    key: 'hitachi',
    name: 'Hitachi Payment Services',
    to: '/partners/hitachi',
    gradient: 'from-amber-500 to-orange-600',
    perks: ['Global brand', 'Advanced security', 'Trusted service'],
  },
];

export default function Franchise() {
  useEffect(() => {
    document.title = 'Franchise | Plans & Partners';
  }, []);

  return (
    <main>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold text-slate-900">Start your ATM Franchise</h1>
          <p className="mt-2 text-slate-700 max-w-3xl">Compare partner networks and choose what fits your location and ROI expectations. Click a card to explore detailed plans and commercials.</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((p) => (
              <Link key={p.key} to={p.to} className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${p.gradient} text-white grid place-items-center font-bold`}>{p.name.split(' ')[0][0]}</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.name}</h3>
                <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc pl-5">
                  {p.perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
                <div className="mt-4 inline-flex items-center text-sm font-medium text-blue-700">View details →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
