import { useEffect } from 'react';

export default function Findi() {
  useEffect(() => {
    document.title = 'Findi ATM Franchise | Plans & Details';
  }, []);

  const plans = [
    { name: 'Starter', price: '₹2.5–3.5L', features: ['Site readiness & branding', 'Enterprise security stack', 'Standard SLA & monitoring'] },
    { name: 'Growth', price: '₹4–5.5L', features: ['All Starter features', 'Priority service levels', 'Monthly performance reviews'] },
    { name: 'Pro', price: '₹6L+', features: ['All Growth features', 'Advanced analytics suite', 'Portfolio expansion roadmap'] },
  ];

  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-semibold text-slate-900">Findi (Formerly AGS)</h1>
        <p className="mt-2 text-slate-700 max-w-3xl">Findi combines enterprise-grade technology with scalable services, making it ideal for investors seeking robust operations and insights.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
              <p className="mt-1 text-sm text-slate-600">Estimated CAPEX: {p.price}</p>
              <ul className="mt-4 text-sm text-slate-700 space-y-1 list-disc pl-5">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-rose-200 bg-rose-50 p-6 text-slate-800">
          <p className="text-sm"><span className="font-medium">Insight:</span> Enterprise tools help optimize uptime and predict cash loads to maximize throughput.</p>
        </div>
      </div>
    </main>
  );
}
