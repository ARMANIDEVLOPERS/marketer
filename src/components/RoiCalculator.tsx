import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, TrendingUp, Zap, DollarSign } from 'lucide-react';

interface RoiCalculatorProps {
  onApplyEstimates: (details: {
    monthlyVisitors: number;
    aov: number;
    adSpend: number;
    projectedUplift: number;
  }) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onApplyEstimates }) => {
  const [visitors, setVisitors] = useState<number>(25000);
  const [aov, setAov] = useState<number>(85);
  const [currentConvRate, setCurrentConvRate] = useState<number>(1.6);
  const [adSpend, setAdSpend] = useState<number>(6000);

  // Computations
  const calculations = useMemo(() => {
    // Current revenue: visitors * (conversion rate / 100) * AOV
    const currentOrders = Math.round(visitors * (currentConvRate / 100));
    const currentRevenue = Math.round(currentOrders * aov);

    // Meta Ads Revenue with optimized 4.2x ROAS
    const projectedMetaRevenue = Math.round(adSpend * 4.2);

    // Speed boosting & CRO: every 1.5s reduction yields ~+26% relative conversion increase
    const boostedConvRate = (currentConvRate * 1.28).toFixed(2);
    const boostedOrders = Math.round(visitors * (parseFloat(boostedConvRate) / 100));
    const speedBoostRevenueGain = Math.round((boostedOrders - currentOrders) * aov);

    // SEO compounding organic traffic estimate (approx +150% in 6 months)
    const projectedSeoVisitors = Math.round(visitors * 1.85);
    const seoNewOrders = Math.round((projectedSeoVisitors - visitors) * (parseFloat(boostedConvRate) / 100));
    const seoRevenueGain = Math.round(seoNewOrders * aov);

    const totalEstimatedMonthlyUpside = speedBoostRevenueGain + projectedMetaRevenue - adSpend;

    return {
      currentOrders,
      currentRevenue,
      projectedMetaRevenue,
      boostedConvRate,
      speedBoostRevenueGain,
      projectedSeoVisitors,
      seoRevenueGain,
      totalEstimatedMonthlyUpside,
    };
  }, [visitors, aov, currentConvRate, adSpend]);

  const handleApply = () => {
    onApplyEstimates({
      monthlyVisitors: visitors,
      aov,
      adSpend,
      projectedUplift: calculations.totalEstimatedMonthlyUpside,
    });
  };

  return (
    <section id="calculator" className="py-24 bg-neutral-950 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400">
            <span>Interactive Modeling</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Real Growth Economics</span>
          </div>
          <h2 
            style={{ textWrap: 'balance' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
          >
            Estimate your monthly revenue expansion.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            See the combined compounding impact of high-ROAS Facebook & Instagram campaigns alongside website speed boosting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-7">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <span className="text-sm font-semibold text-white flex items-center gap-2">
                <Calculator className="w-4 h-4 text-emerald-400" />
                Store & Campaign Parameters
              </span>
              <span className="text-xs text-neutral-400">Adjust sliders below</span>
            </div>

            {/* Slider 1: Monthly Visitors */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <label htmlFor="visitors-input" className="text-neutral-300 font-medium">Monthly Store/Site Visitors</label>
                <span className="font-mono font-bold text-emerald-400 tabular-nums">
                  {visitors.toLocaleString()} visits
                </span>
              </div>
              <input
                id="visitors-input"
                type="range"
                min="5000"
                max="250000"
                step="5000"
                value={visitors}
                onChange={(e) => setVisitors(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                <span>5,000</span>
                <span>125,000</span>
                <span>250,000+</span>
              </div>
            </div>

            {/* Slider 2: Average Order Value */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <label htmlFor="aov-input" className="text-neutral-300 font-medium">Average Order Value (AOV / Deal)</label>
                <span className="font-mono font-bold text-emerald-400 tabular-nums">
                  ${aov}
                </span>
              </div>
              <input
                id="aov-input"
                type="range"
                min="25"
                max="350"
                step="5"
                value={aov}
                onChange={(e) => setAov(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                <span>$25</span>
                <span>$175</span>
                <span>$350+</span>
              </div>
            </div>

            {/* Slider 3: Current Conversion Rate */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <label htmlFor="cvr-input" className="text-neutral-300 font-medium">Current Conversion Rate</label>
                <span className="font-mono font-bold text-sky-400 tabular-nums">
                  {currentConvRate.toFixed(1)}%
                </span>
              </div>
              <input
                id="cvr-input"
                type="range"
                min="0.5"
                max="4.5"
                step="0.1"
                value={currentConvRate}
                onChange={(e) => setCurrentConvRate(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                <span>0.5% (Underperforming)</span>
                <span>2.0% (Average)</span>
                <span>4.5% (High)</span>
              </div>
            </div>

            {/* Slider 4: Monthly Meta Ad Spend */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <label htmlFor="adspend-input" className="text-neutral-300 font-medium">Monthly Meta Ad Spend (FB / IG)</label>
                <span className="font-mono font-bold text-amber-400 tabular-nums">
                  ${adSpend.toLocaleString()} / mo
                </span>
              </div>
              <input
                id="adspend-input"
                type="range"
                min="1000"
                max="50000"
                step="1000"
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                <span>$1,000</span>
                <span>$25,000</span>
                <span>$50,000+</span>
              </div>
            </div>
          </div>

          {/* Projections Output Card */}
          <div className="lg:col-span-6 bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Compounded Monthly Impact
              </span>
              <span className="text-xs font-mono text-emerald-400">Based on 4.2x Benchmark ROAS</span>
            </div>

            {/* Big summary figure */}
            <div className="bg-neutral-950 p-6 rounded-xl border border-neutral-800">
              <div className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1">
                Estimated Net Monthly Revenue Expansion
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono tabular-nums">
                +${calculations.totalEstimatedMonthlyUpside.toLocaleString()}
                <span className="text-sm font-normal text-neutral-400 ml-2">/ month</span>
              </div>
              <p className="text-xs text-neutral-500 mt-2">
                Combines high-converting Meta creative acquisition + reduced bounce rate revenue retention.
              </p>
            </div>

            {/* Breakdown rows */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between p-3.5 bg-neutral-950/60 rounded-lg border border-neutral-850">
                <div className="flex items-center gap-2.5">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  <span className="text-neutral-300">Target Meta Ads Return (4.2x ROAS)</span>
                </div>
                <span className="font-mono font-bold text-white tabular-nums">
                  ${calculations.projectedMetaRevenue.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between p-3.5 bg-neutral-950/60 rounded-lg border border-neutral-850">
                <div className="flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <div>
                    <span className="text-neutral-300">Website Speed & CRO Boost</span>
                    <span className="text-xs text-neutral-500 block">
                      Lift to {calculations.boostedConvRate}% CVR from sub-1.2s load
                    </span>
                  </div>
                </div>
                <span className="font-mono font-bold text-emerald-400 tabular-nums">
                  +${calculations.speedBoostRevenueGain.toLocaleString()} / mo
                </span>
              </div>

              <div className="flex items-center justify-between p-3.5 bg-neutral-950/60 rounded-lg border border-neutral-850">
                <div className="flex items-center gap-2.5">
                  <TrendingUp className="w-4 h-4 text-sky-400" />
                  <div>
                    <span className="text-neutral-300">Organic SEO compounding</span>
                    <span className="text-xs text-neutral-500 block">
                      Estimated to reach {calculations.projectedSeoVisitors.toLocaleString()} visits
                    </span>
                  </div>
                </div>
                <span className="font-mono font-bold text-sky-400 tabular-nums">
                  +${calculations.seoRevenueGain.toLocaleString()} / mo
                </span>
              </div>
            </div>

            <button
              onClick={handleApply}
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg active:scale-98 transition-all shadow-md whitespace-nowrap shrink-0"
            >
              <span>Apply These Projections To My Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
