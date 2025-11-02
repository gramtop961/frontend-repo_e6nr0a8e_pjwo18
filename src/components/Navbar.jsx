import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItemClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center font-bold">AF</div>
            <span className="font-semibold text-slate-900">ATM Franchise</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navItemClass} end>
              Home
            </NavLink>
            <NavLink to="/about" className={navItemClass}>
              About Us
            </NavLink>
            <NavLink to="/franchise" className={navItemClass}>
              Franchise
            </NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/franchise"
              className="hidden md:inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Get Started
            </Link>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200/70">
          <div className="px-4 py-3 space-y-1">
            <NavLink to="/" className={navItemClass} onClick={() => setOpen(false)} end>
              Home
            </NavLink>
            <NavLink to="/about" className={navItemClass} onClick={() => setOpen(false)}>
              About Us
            </NavLink>
            <NavLink to="/franchise" className={navItemClass} onClick={() => setOpen(false)}>
              Franchise
            </NavLink>
            <Link
              to="/franchise"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
