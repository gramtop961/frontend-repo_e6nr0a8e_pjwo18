import { useEffect } from 'react';

export default function Hitachi() {
  useEffect(() => {
    document.title = 'Hitachi ATM Franchise | Plans & Details';
  }, []);

  const plans = [
    { name: 'Starter', price: '₹3–4L', features: ['Deployment & branding', 'Advanced security baseline', 'Standard SLA & monitoring'] },
    { name: 'Growth', price: '₹4.5–6L', features: ['All Starter features', 'Priority support channels', 'Quarterly optimization reviews'] },
    { name: 'Pro', price: '₹6.5L+', features: ['All Growth features', 'Premium sites pipeline', 'Security & compliance advisory'] },
  ];

  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-semibold text-slate-900">Hitachi Payment Services</h1>
        <p className="mt-2 text-slate-700 max-w-3xl">A trusted global brand offering advanced security and operational excellence across the ATM ecosystem.
        </p>

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

        <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-slate-800">
          <p className="text-sm"><span className="font-medium">Security:</span> Hitachi brings enhanced compliance and fraud risk management practices to protect your investment.</p>
        </div>
      </div>
    </main>
  );
}
