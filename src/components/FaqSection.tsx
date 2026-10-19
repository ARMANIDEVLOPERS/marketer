import React, { useState } from 'react';
import { FAQS } from '../data/marketingData';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-neutral-900 text-white border-b border-neutral-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400">
            <span>Direct Answers</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Frequently Asked Questions</span>
          </div>
          <h2 
            style={{ textWrap: 'balance' }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
          >
            Everything you need to know about working together.
          </h2>
          <p className="text-neutral-400 text-base max-w-xl mx-auto">
            Clear expectations, no ambiguous agency retainer traps, and strict focus on revenue return.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:text-emerald-400 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-neutral-850 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
