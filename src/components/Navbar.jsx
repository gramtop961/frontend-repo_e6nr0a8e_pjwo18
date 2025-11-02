import React from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#franchise', label: 'Franchise' },
    { href: '#partners', label: 'Partners' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-tr from-blue-600 to-cyan-500 text-white">
            <Rocket size={18} />
          </span>
          <span>ATM Franchise</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-slate-700 hover:text-slate-900 transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#franchise"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 hover:opacity-90"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-slate-700 hover:text-slate-900"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#franchise"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
