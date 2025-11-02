import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-tr from-blue-600 to-cyan-500 text-white">
              <Shield size={18} />
            </span>
            <span>ATM Franchise</span>
          </div>
          <p className="mt-3 text-sm text-slate-600 max-w-sm">
            Helping entrepreneurs launch and scale ATM businesses with top-tier partners, nationwide support, and
            transparent operations.
          </p>
        </div>
        <div className="text-sm text-slate-700 space-y-2">
          <p className="font-semibold text-slate-900">Contact</p>
          <p className="flex items-center gap-2"><Mail size={16} /> hello@atmfranchise.co</p>
          <p className="flex items-center gap-2"><Phone size={16} /> +91 98765 43210</p>
          <p className="flex items-center gap-2"><MapPin size={16} /> Mumbai, India</p>
        </div>
        <div className="text-sm text-slate-700 space-y-2">
          <p className="font-semibold text-slate-900">Quick Links</p>
          <div className="grid grid-cols-2 gap-2">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#partners" className="hover:text-slate-900">Partners</a>
            <a href="#franchise" className="hover:text-slate-900">Franchise</a>
            <a href="#home" className="hover:text-slate-900">Home</a>
          </div>
        </div>
      </div>
      <div className="border-t border-black/5 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ATM Franchise. All rights reserved.
      </div>
    </footer>
  );
}
