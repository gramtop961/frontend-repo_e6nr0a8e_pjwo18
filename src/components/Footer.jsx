export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/70 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center font-bold">AF</div>
            <span className="font-semibold text-slate-900">ATM Franchise</span>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            A modern, credible partner to launch and grow your ATM franchise with trusted networks and transparent plans.
          </p>
        </div>
        <div className="text-sm text-slate-700 space-y-2">
          <p className="font-semibold text-slate-900">Company</p>
          <p>About</p>
          <p>Franchise</p>
          <p>Contact</p>
        </div>
        <div className="text-sm text-slate-700 space-y-2">
          <p className="font-semibold text-slate-900">Legal</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Disclaimer</p>
        </div>
      </div>
      <div className="border-t border-slate-200/70 py-4">
        <p className="text-center text-xs text-slate-500">© {new Date().getFullYear()} ATM Franchise. All rights reserved.</p>
      </div>
    </footer>
  );
}
