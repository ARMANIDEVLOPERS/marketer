import React from 'react';
import { MARKETER_INFO } from '../data/marketingData';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 py-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-neutral-850">
          <div>
            <div className="text-xl font-bold tracking-tight text-white mb-2 flex items-center gap-2">
              <span className="font-extrabold text-emerald-400">EV</span>
              <span>Elena Vance Growth</span>
            </div>
            <p className="text-sm text-neutral-400 max-w-md">
              Specialized performance marketing for product brands: Meta Ads (Facebook & Instagram), technical SEO, and Core Web Vitals website boosting.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-300">
            <button 
              onClick={() => scrollTo('services')} 
              className="hover:text-white transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollTo('portfolio')} 
              className="hover:text-white transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollTo('calculator')} 
              className="hover:text-white transition-colors"
            >
              ROI Estimator
            </button>
            <button 
              onClick={() => scrollTo('testimonials')} 
              className="hover:text-white transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollTo('about')} 
              className="hover:text-white transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollTo('contact')} 
              className="hover:text-white transition-colors"
            >
              Free Audit
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {currentYear} Elena Vance Growth & Performance Consulting. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Direct: {MARKETER_INFO.email}</span>
            <span aria-hidden="true">·</span>
            <span>Worldwide Remote</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
