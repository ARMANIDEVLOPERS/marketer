import React from 'react';
import { Share2, Search, Zap, Check, ArrowRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/marketingData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Share2 className="w-6 h-6 text-emerald-400" />;
      case '02':
        return <Search className="w-6 h-6 text-sky-400" />;
      case '03':
        return <Zap className="w-6 h-6 text-amber-400" />;
      default:
        return <Share2 className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-neutral-900 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400">
            <span>Core Capabilities</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Outcome-Driven Growth</span>
          </div>
          <h2 
            style={{ textWrap: 'balance' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
          >
            Three interconnected engines built to acquire customers and maximize profit.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Instead of fragmented freelancers who pass the blame, you get a cohesive growth engineer who aligns paid social ads with top-ranking organic search and a lightning-fast site that converts.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, index) => {
            const isMarquee = index === 0;
            return (
              <div
                key={service.number}
                className="flex flex-col justify-between bg-neutral-950 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-all group"
              >
                <div>
                  {/* Top bar with human editorial numbering */}
                  <div className="flex items-center justify-between pb-6 border-b border-neutral-800/80 mb-6">
                    <span className="font-mono text-sm font-semibold text-neutral-500">
                      {service.number}.
                    </span>
                    <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:scale-105 transition-transform">
                      {getIcon(service.number)}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-emerald-400/90 text-sm font-medium mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Key Deliverables
                    </div>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-800/80">
                  <div className="text-xs text-neutral-400 mb-4 bg-neutral-900/60 p-3 rounded-lg border border-neutral-800">
                    <span className="font-semibold text-neutral-200">Standard Result:</span> {service.metricsAchieved}
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-emerald-400/50 rounded-lg transition-colors group-hover:bg-neutral-850"
                  >
                    <span>Consult on {service.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Platforms & Tools verification strip */}
        <div className="mt-16 pt-10 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-6 text-neutral-400 text-xs">
          <div className="font-semibold text-neutral-300">Verified Platform Stacks & Certifications:</div>
          <div className="flex flex-wrap items-center gap-6 font-mono">
            <span>Meta Ads Manager</span>
            <span aria-hidden="true" className="text-neutral-700">/</span>
            <span>Instagram Shopping</span>
            <span aria-hidden="true" className="text-neutral-700">/</span>
            <span>Google Search Console</span>
            <span aria-hidden="true" className="text-neutral-700">/</span>
            <span>Ahrefs & Semrush</span>
            <span aria-hidden="true" className="text-neutral-700">/</span>
            <span>Lighthouse Core Web Vitals</span>
            <span aria-hidden="true" className="text-neutral-700">/</span>
            <span>Shopify Plus & Liquid</span>
          </div>
        </div>
      </div>
    </section>
  );
};
