import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import PartnersGrid from './components/PartnersGrid.jsx';
import Footer from './components/Footer.jsx';

function SectionAbout() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-sm">
          <h2 className="text-3xl font-extrabold text-slate-900">About Us</h2>
          <p className="mt-3 text-slate-600">
            We connect investors with India’s most reliable ATM operators. From site selection and installation to cash
            management and compliance, our team ensures a seamless journey with clear visibility into performance and ROI.
          </p>
          <p className="mt-3 text-slate-600">
            Our partner ecosystem spans EPS, India1 Payments, Findi, and Hitachi Payment Services — bringing nationwide
            coverage and decades of operating experience.
          </p>
        </div>
        <div className="rounded-2xl border border-black/10 bg-gradient-to-tr from-blue-50 to-cyan-50 p-8">
          <ul className="grid grid-cols-2 gap-6 text-slate-800">
            <li className="space-y-1">
              <p className="text-3xl font-extrabold">5000+</p>
              <p className="text-sm text-slate-600">ATMs Supported</p>
            </li>
            <li className="space-y-1">
              <p className="text-3xl font-extrabold">28</p>
              <p className="text-sm text-slate-600">States Covered</p>
            </li>
            <li className="space-y-1">
              <p className="text-3xl font-extrabold">99.5%</p>
              <p className="text-sm text-slate-600">Average Uptime</p>
            </li>
            <li className="space-y-1">
              <p className="text-3xl font-extrabold">24x7</p>
              <p className="text-sm text-slate-600">Support</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function SectionFranchise() {
  return (
    <section id="franchise" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-sm">
          <h2 className="text-3xl font-extrabold text-slate-900">Start Your Franchise</h2>
          <p className="mt-2 text-slate-600 max-w-prose">
            Share your interest and location. We’ll assess feasibility, recommend partners, and guide you through the
            onboarding steps.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 grid md:grid-cols-3 gap-3"
          >
            <input
              type="text"
              required
              placeholder="Full name"
              className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900/10"
            />
            <input
              type="email"
              required
              placeholder="Email address"
              className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900/10"
            />
            <input
              type="text"
              required
              placeholder="City / State"
              className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900/10"
            />
            <button
              type="submit"
              className="md:col-span-3 inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 font-semibold hover:opacity-90"
            >
              Submit Interest
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <SectionAbout />
        <PartnersGrid />
        <SectionFranchise />
      </main>
      <Footer />
    </div>
  );
}
