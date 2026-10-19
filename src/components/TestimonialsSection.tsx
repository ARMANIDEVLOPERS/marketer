import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/marketingData';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredTestimonials = TESTIMONIALS.filter(item => {
    if (filter === 'all') return true;
    return item.serviceCategory.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <section id="testimonials" className="py-24 bg-neutral-900 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400">
              <span>Client Endorsements</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Attributable Proof</span>
            </div>
            <h2 
              style={{ textWrap: 'balance' }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
            >
              Feedback from founders & growth leaders.
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              Every quote is backed by verified campaign analytics, revenue jumps, and speed improvements.
            </p>
          </div>

          {/* Service Filter Tabs */}
          <div className="inline-flex items-center gap-1.5 p-1 bg-neutral-950 border border-neutral-800 rounded-xl shrink-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                filter === 'all'
                  ? 'bg-neutral-800 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Reviews
            </button>
            <button
              onClick={() => setFilter('facebook')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                filter === 'facebook'
                  ? 'bg-neutral-800 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Paid Social
            </button>
            <button
              onClick={() => setFilter('seo')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                filter === 'seo'
                  ? 'bg-neutral-800 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Technical SEO
            </button>
            <button
              onClick={() => setFilter('speed')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                filter === 'speed'
                  ? 'bg-neutral-800 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Site Boosting
            </button>
          </div>
        </div>

        {/* Testimonials 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between bg-neutral-950 border border-neutral-800 rounded-2xl p-7 sm:p-8 hover:border-neutral-700 transition-all relative group"
            >
              <div>
                {/* Header of review: Stars + Verified + Outcome Highlight */}
                <div className="flex items-center justify-between pb-5 border-b border-neutral-850 mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs text-neutral-400 ml-2 font-mono">5.0 / 5.0</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Client Result</span>
                  </div>
                </div>

                {/* Highlight metric strip - clean styling */}
                <div className="text-xs font-mono font-semibold text-emerald-300 bg-neutral-900/80 px-3.5 py-2 rounded-lg border border-neutral-800 mb-5">
                  <span className="text-neutral-500 font-sans">Outcome:</span> {item.highlightMetric}
                </div>

                {/* Quote */}
                <blockquote className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                  "{item.quote}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-6 border-t border-neutral-850">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-sm text-emerald-400 font-mono">
                    {item.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">
                      {item.author}
                    </div>
                    <div className="text-xs text-neutral-400">
                      {item.role} · {item.company}
                    </div>
                  </div>
                </div>

                {/* Unboxed category label */}
                <div className="text-[11px] text-neutral-500 font-mono">
                  {item.serviceCategory}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
