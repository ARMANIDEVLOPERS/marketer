import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
          className="text-xl font-bold tracking-tight text-white hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="font-extrabold tracking-tighter text-emerald-400">EV</span>
          <span>Elena Vance Growth</span>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <button 
            onClick={() => scrollTo('services')} 
            className="hover:text-white transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0"
          >
            Services
          </button>
          <button 
            onClick={() => scrollTo('portfolio')} 
            className="hover:text-white transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0"
          >
            Portfolio
          </button>
          <button 
            onClick={() => scrollTo('calculator')} 
            className="hover:text-white transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0"
          >
            ROI Estimator
          </button>
          <button 
            onClick={() => scrollTo('testimonials')} 
            className="hover:text-white transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollTo('about')} 
            className="hover:text-white transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0"
          >
            About
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 rounded-lg hover:bg-emerald-300 active:scale-98 transition-all whitespace-nowrap shrink-0 shadow-sm"
          >
            <span>Request Free Audit</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-800 bg-neutral-900 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-base font-medium text-neutral-300">
            <button 
              onClick={() => scrollTo('services')} 
              className="text-left py-2 hover:text-white transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollTo('portfolio')} 
              className="text-left py-2 hover:text-white transition-colors"
            >
              Portfolio & Results
            </button>
            <button 
              onClick={() => scrollTo('calculator')} 
              className="text-left py-2 hover:text-white transition-colors"
            >
              ROI & Speed Estimator
            </button>
            <button 
              onClick={() => scrollTo('testimonials')} 
              className="text-left py-2 hover:text-white transition-colors"
            >
              Client Testimonials
            </button>
            <button 
              onClick={() => scrollTo('about')} 
              className="text-left py-2 hover:text-white transition-colors"
            >
              About Elena
            </button>
          </div>
          <div className="pt-4 border-t border-neutral-800">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAudit(); }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-colors"
            >
              <span>Request Free Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
