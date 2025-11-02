import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = 'About | ATM Franchise';
  }, []);

  return (
    <main className="min-h-[60vh]">
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-semibold text-slate-900">About Us</h1>
          <p className="mt-4 text-slate-700">
            We help entrepreneurs and businesses launch profitable ATM franchises with trusted networks across India. Our approach is simple: credibility first, outcomes always. From location assessment and partner selection to deployment and ongoing support, we streamline the entire journey.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">What we do</h2>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>Evaluate locations and expected transaction volumes</li>
                <li>Recommend the right partner: EPS, India1, Findi, or Hitachi</li>
                <li>Coordinate documentation and site readiness</li>
                <li>Assist with cash management and reconciliations setup</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Why it works</h2>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>Aligned with top national networks</li>
                <li>Transparent commercials and SLAs</li>
                <li>Hands-on support during and after deployment</li>
                <li>Focus on long-term ROI and uptime</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
