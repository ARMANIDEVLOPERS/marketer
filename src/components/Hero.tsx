import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenAudit: () => void;
  onViewPortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit, onViewPortfolio }) => {
  return (
    <section id="hero" className="relative bg-neutral-950 text-white pt-12 pb-20 overflow-hidden border-b border-neutral-800">
      {/* Subtle radial ambient background accent */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Top Kicker - Zero pill: clean unboxed text with typographic dot */}
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-6">
          <span>Performance Marketing</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>Technical SEO</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>Core Web Vitals CRO</span>
        </div>

        {/* 2-Column Split Hero with balanced headline and high-impact visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <h1 
              style={{ textWrap: 'balance' }} 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
            >
              Scaling products on <span className="text-emerald-400">Facebook & Instagram</span> with high-ROAS ads and organic SEO dominance.
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl font-normal">
              I help e-commerce brands and modern businesses build profitable paid acquisition machines, climb to Page 1 of Google, and boost website load speed to turn clicks into buyers.
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-sm text-neutral-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Advantage+ Catalog Scaling</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Intent-Driven Search SEO</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>90+ Core Web Vitals Guaranteed</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenAudit}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg active:scale-98 transition-all shadow-md whitespace-nowrap shrink-0"
              >
                <span>Claim Free 30-Min Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onViewPortfolio}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>View Verified Case Studies</span>
              </button>
            </div>

            <div className="text-xs text-neutral-400 pt-1">
              <span>No automated robot reports. Every audit is personally analyzed with actionable revenue fixes.</span>
            </div>
          </div>

          {/* Hero Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
              <img
                src="/src/assets/images/hero_growth_marketer_1792425645929.jpg"
                alt="Digital marketing strategy and performance studio workspace"
                className="w-full aspect-[16/10] sm:aspect-[16/10] lg:aspect-square object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback container in case of network issue
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Subtle glass overlay tag - clean unboxed editorial styling */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-neutral-950/85 backdrop-blur-md rounded-xl border border-neutral-800 text-xs text-neutral-300 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">Live Campaign Optimization</div>
                  <div className="text-neutral-400">Meta CAPI & Google Search Console sync</div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-400 font-mono font-bold tabular-nums">4.4x Avg ROAS</div>
                  <div className="text-neutral-400">Across 65+ stores</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proof of Rigor Strip - Full Width Row Below Split */}
        <div className="border-t border-neutral-800/80 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="border-l-0 pl-0">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                $14.2M+
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 mt-1">
                Tracked E-Commerce Revenue
              </div>
              <div className="text-xs text-neutral-500 mt-0.5">
                Generated via Meta Ads funnels
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-400 font-mono tabular-nums tracking-tight">
                4.4x
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 mt-1">
                Average Portfolio ROAS
              </div>
              <div className="text-xs text-neutral-500 mt-0.5">
                Blended return on Meta spend
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                +285%
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 mt-1">
                Avg Organic Search Lift
              </div>
              <div className="text-xs text-neutral-500 mt-0.5">
                High commercial intent keywords
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-400 font-mono tabular-nums tracking-tight">
                96<span className="text-base text-neutral-500 font-normal">/100</span>
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 mt-1">
                Core Web Vitals Benchmark
              </div>
              <div className="text-xs text-neutral-500 mt-0.5">
                Sub-1.2s mobile load guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
