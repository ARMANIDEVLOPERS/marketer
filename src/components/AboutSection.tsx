import React from 'react';
import { MARKETER_INFO } from '../data/marketingData';
import { Award, Zap, BarChart, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-950 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl">
              <img
                src="/src/assets/images/marketer_headshot_1792425644718.jpg"
                alt={MARKETER_INFO.name}
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-4 bg-neutral-950/85 backdrop-blur-md rounded-xl border border-neutral-800 text-xs text-neutral-300">
                <div className="font-bold text-white text-sm">{MARKETER_INFO.name}</div>
                <div className="text-emerald-400 font-mono mt-0.5">{MARKETER_INFO.role}</div>
                <div className="text-[11px] text-neutral-400 mt-1">{MARKETER_INFO.location}</div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400">
              <span>Meet The Strategist</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>8+ Years In Growth Engineering</span>
            </div>

            <h2 
              style={{ textWrap: 'balance' }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              "Growth isn't vanity metrics. It's the mathematical synergy between paid ads, search intent, and speed."
            </h2>

            <div className="space-y-4 text-neutral-300 text-base leading-relaxed">
              <p>
                I am Elena Vance, an independent growth consultant and technical performance marketer. Over the last 8 years, I've managed over $8.5M in Meta ad spend (Facebook & Instagram), ranked dozens of commercial domains to Page 1 on Google, and rebuilt slow websites into sub-second revenue machines.
              </p>
              <p>
                Traditional agencies split your budget across juniors, account managers, and disconnected departments. When Facebook ads fail, they blame your website; when SEO stalls, they blame Google. By uniting paid creative testing, architectural SEO, and code-level speed boosting into a single cohesive strategy, I eliminate the bottlenecks that waste ad dollars.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-1">
                  <BarChart className="w-4 h-4 text-emerald-400" />
                  <span>Meta Advantage+ & Creative Hooks</span>
                </div>
                <p className="text-xs text-neutral-400 leading-normal">
                  Testing frameworks that identify high-converting UGC reels and dynamic product catalogs at scale.
                </p>
              </div>

              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-1">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Sub-1.2s Site Speed & CRO</span>
                </div>
                <p className="text-xs text-neutral-400 leading-normal">
                  Eliminating render-blocking bloat so incoming ad traffic doesn't bounce before checkout.
                </p>
              </div>

              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-1">
                  <Award className="w-4 h-4 text-sky-400" />
                  <span>Intent-Driven Search Rankings</span>
                </div>
                <p className="text-xs text-neutral-400 leading-normal">
                  Topical clusters and structured data schemas that capture active commercial buyers on Google.
                </p>
              </div>

              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>First-Party Attribution (CAPI)</span>
                </div>
                <p className="text-xs text-neutral-400 leading-normal">
                  Server-side tracking resilient against iOS privacy drop-offs and ad blockers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
