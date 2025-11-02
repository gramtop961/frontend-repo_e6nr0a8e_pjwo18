import { useEffect } from 'react';

export default function India1() {
  useEffect(() => {
    document.title = 'India1 ATM Franchise | Plans & Details';
  }, []);

  const plans = [
    { name: 'Starter', price: '₹2–3L', features: ['Rural/semi-urban focus', 'Site evaluation & setup', 'Standard SLA & monitoring'] },
    { name: 'Growth', price: '₹3.5–5L', features: ['All Starter features', 'Improved service coverage', 'Footfall growth playbook'] },
    { name: 'Pro', price: '₹5.5L+', features: ['All Growth features', 'Multi-site expansion support', 'Data-led optimization insights'] },
  ];

  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-semibold text-slate-900">India1 Payments</h1>
        <p className="mt-2 text-slate-700 max-w-3xl">India1 is known for a strong footprint in rural and semi-urban locations, delivering steady transaction volumes and reliable operations.</p>

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

        <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-slate-800">
          <p className="text-sm"><span className="font-medium">Tip:</span> We analyze local cash demand and competing ATMs to position your site for consistent usage.</p>
        </div>
      </div>
    </main>
  );
}
