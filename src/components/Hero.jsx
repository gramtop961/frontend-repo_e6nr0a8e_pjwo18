import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[520px] sm:h-[600px] lg:h-[680px]">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>

      <div className="absolute inset-0 flex items-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-lg border border-white/60"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">
              Build a credible ATM Franchise with trusted partners
            </h1>
            <p className="mt-3 text-slate-700 max-w-2xl">
              Partner with leading networks like EPS, India1, Findi, and Hitachi. Transparent plans, modern onboarding, and ongoing support.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/franchise" className="inline-flex items-center rounded-md bg-blue-600 text-white px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-blue-700">
                Explore Franchise
              </Link>
              <Link to="/about" className="inline-flex items-center rounded-md border border-slate-300 text-slate-800 px-5 py-2.5 text-sm font-medium hover:bg-slate-50">
                Why Choose Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
