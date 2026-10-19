import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/marketingData';
import { CaseStudy } from '../types';
import { ArrowUpRight, X, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

interface PortfolioSectionProps {
  onContactClient: (caseTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onContactClient }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'social_ads' | 'seo' | 'speed_cro'>('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const filteredStudies = CASE_STUDIES.filter(study => {
    if (activeFilter === 'all') return true;
    return study.category === activeFilter;
  });

  return (
    <section id="portfolio" className="py-24 bg-neutral-950 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400">
              <span>Verified Portfolio</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Client Case Studies</span>
            </div>
            <h2 
              style={{ textWrap: 'balance' }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
            >
              Documented growth, transparent metrics.
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              Explore concrete examples of Facebook & Instagram ad scaling, organic search rank domination, and website speed overhauls.
            </p>
          </div>

          {/* Interactive Filter Tabs - Functional segmented buttons */}
          <div className="inline-flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-xl shrink-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeFilter === 'all'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Work
            </button>
            <button
              onClick={() => setActiveFilter('social_ads')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeFilter === 'social_ads'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Facebook & IG Ads
            </button>
            <button
              onClick={() => setActiveFilter('seo')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeFilter === 'seo'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              SEO & Rankings
            </button>
            <button
              onClick={() => setActiveFilter('speed_cro')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeFilter === 'speed_cro'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Website Speed & CRO
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <article
              key={study.id}
              className="flex flex-col justify-between bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all group"
            >
              <div>
                {/* Visual Media with fallback */}
                <div className="relative aspect-[16/10] bg-neutral-950 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none" />
                  
                  {/* Clean unboxed category kicker on top of image */}
                  <div className="absolute top-4 left-4 bg-neutral-950/80 backdrop-blur-md px-3 py-1 rounded-md text-xs font-medium text-emerald-400 border border-neutral-800">
                    {study.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Unboxed Metadata */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <span>{study.client}</span>
                    <span aria-hidden="true">·</span>
                    <span>{study.industry}</span>
                    <span aria-hidden="true">·</span>
                    <span>{study.timeline}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                    {study.title}
                  </h3>

                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {study.summary}
                  </p>

                  {/* Quantitative Metric Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {study.results.slice(0, 2).map((res, idx) => (
                      <div key={idx} className="bg-neutral-950 p-3 rounded-xl border border-neutral-850">
                        <div className="text-xl sm:text-2xl font-mono font-extrabold text-emerald-400 tabular-nums">
                          {res.value}
                        </div>
                        <div className="text-xs font-medium text-neutral-300">
                          {res.label}
                        </div>
                        <div className="text-[11px] text-neutral-500 truncate">
                          {res.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={() => setSelectedCase(study)}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-200 bg-neutral-850 hover:bg-neutral-800 border border-neutral-750 hover:border-emerald-400/40 rounded-lg transition-colors"
                >
                  <span>Explore In-Depth Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for detailed case study inspection */}
        {selectedCase && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/80 backdrop-blur-sm"
            onClick={() => setSelectedCase(null)}
          >
            <div 
              className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-800">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
                    <span>{selectedCase.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedCase.client}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedCase.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
                  aria-label="Close case study modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Full Metrics 4-Grid */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  Key Quantitative Results
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {selectedCase.results.map((res, i) => (
                    <div key={i} className="bg-neutral-950 p-3.5 rounded-xl border border-neutral-800">
                      <div className="text-2xl font-mono font-extrabold text-emerald-400 tabular-nums">
                        {res.value}
                      </div>
                      <div className="text-xs font-semibold text-white mt-1">
                        {res.label}
                      </div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">
                        {res.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-4">
                <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-850">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">
                    The Business Challenge
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {selectedCase.challenge}
                  </p>
                </div>

                <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-850">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                    The Growth Strategy & Implementation
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {selectedCase.solution}
                  </p>
                </div>
              </div>

              {/* Services Used */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Tactics & Capabilities Executed
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedCase.servicesUsed.map((s, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-neutral-950 border border-neutral-800 rounded-md text-xs text-neutral-300 font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-neutral-400">
                  Want identical performance frameworks applied to your brand?
                </span>
                <button
                  onClick={() => {
                    const title = selectedCase.title;
                    setSelectedCase(null);
                    onContactClient(title);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  Request Similar Strategy Plan
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
