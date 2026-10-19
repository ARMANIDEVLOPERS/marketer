import React, { useState, useEffect } from 'react';
import { Mail, Phone, Clock, ArrowRight, CheckCircle2, Copy, Check, Send } from 'lucide-react';
import { MARKETER_INFO } from '../data/marketingData';

interface ContactSectionProps {
  initialService?: string;
  initialNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService,
  initialNotes,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    websiteUrl: '',
    primaryGoal: initialService || 'Facebook & Instagram Ads Scaling',
    monthlyBudget: '$3,000 - $7,500 / mo',
    message: initialNotes || '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, primaryGoal: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialNotes) {
      setFormData(prev => ({
        ...prev,
        message: prev.message ? `${prev.message}\n\n${initialNotes}` : initialNotes,
      }));
    }
  }, [initialNotes]);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.websiteUrl.trim()) {
      errs.websiteUrl = 'Please enter your website or store URL';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Simulate realistic asynchronous network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 850);
  };

  const handleCopySummary = () => {
    const summary = `GROWTH AUDIT REQUEST\nName: ${formData.fullName}\nEmail: ${formData.email}\nWebsite: ${formData.websiteUrl}\nPrimary Goal: ${formData.primaryGoal}\nBudget: ${formData.monthlyBudget}\nNotes: ${formData.message}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      websiteUrl: '',
      primaryGoal: 'Facebook & Instagram Ads Scaling',
      monthlyBudget: '$3,000 - $7,500 / mo',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct info & value proposition */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400">
                <span>Direct Access</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span>Confidential Growth Audit</span>
              </div>
              <h2 
                style={{ textWrap: 'balance' }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
              >
                Let’s uncover your site’s true revenue ceiling.
              </h2>
              <p className="text-neutral-400 text-base leading-relaxed">
                Send your website or store link. I will personally review your Meta ad pixel health, audit your Google indexing bottlenecks, and benchmark your mobile page speed.
              </p>
            </div>

            {/* Audit Checklist */}
            <div className="space-y-3 bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                What you receive in your 30-min audit report:
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Meta Ads leak analysis: why CPAs are high or audience sets fatigue</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Top 5 commercial search intent keywords your competitors rank for</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Core Web Vitals speed diagnostic & mobile checkout friction fixes</span>
              </div>
            </div>

            {/* Direct Contact info */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct Email: </span>
                <a href={`mailto:${MARKETER_INFO.email}`} className="text-white hover:text-emerald-400 transition-colors font-mono">
                  {MARKETER_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Phone / WhatsApp: </span>
                <span className="text-white font-mono">{MARKETER_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Response SLA: Within 24 business hours guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">
                      Audit Request Received!
                    </h3>
                    <p className="text-sm text-neutral-300 max-w-md mx-auto">
                      Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. I have queued your audit for <span className="text-emerald-400 font-mono">{formData.websiteUrl}</span>.
                    </p>
                  </div>

                  {/* Submission details card */}
                  <div className="bg-neutral-950 p-5 rounded-xl border border-neutral-800 text-left text-xs space-y-2 max-w-md mx-auto font-mono">
                    <div className="flex justify-between text-neutral-400">
                      <span>Primary Goal:</span>
                      <span className="text-white">{formData.primaryGoal}</span>
                    </div>
                    <div className="flex justify-between text-neutral-400">
                      <span>Budget Tier:</span>
                      <span className="text-white">{formData.monthlyBudget}</span>
                    </div>
                    <div className="flex justify-between text-neutral-400">
                      <span>Delivery Target:</span>
                      <span className="text-emerald-400">Within 24 Hours</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-300 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>Copied to Clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Request Summary</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="pb-4 border-b border-neutral-800 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Request Your Growth & Speed Audit
                      </h3>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        No credit card required. 100% confidential.
                      </p>
                    </div>
                    <span className="text-xs font-mono text-emerald-400">
                      Step 1 of 1
                    </span>
                  </div>

                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Your Full Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="e.g. Alex Mercer"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        className={`w-full px-4 py-2.5 bg-neutral-950 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-colors ${
                          errors.fullName ? 'border-rose-500' : 'border-neutral-800 focus:border-emerald-400'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-rose-400 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Work Email <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="alex@yourbrand.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`w-full px-4 py-2.5 bg-neutral-950 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-colors ${
                          errors.email ? 'border-rose-500' : 'border-neutral-800 focus:border-emerald-400'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Website URL & Primary Goal */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="websiteUrl" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Store / Website URL <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="websiteUrl"
                        type="text"
                        placeholder="https://yourbrand.com"
                        value={formData.websiteUrl}
                        onChange={(e) => {
                          setFormData({ ...formData, websiteUrl: e.target.value });
                          if (errors.websiteUrl) setErrors({ ...errors, websiteUrl: '' });
                        }}
                        className={`w-full px-4 py-2.5 bg-neutral-950 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-colors ${
                          errors.websiteUrl ? 'border-rose-500' : 'border-neutral-800 focus:border-emerald-400'
                        }`}
                      />
                      {errors.websiteUrl && (
                        <p className="text-xs text-rose-400 mt-1">{errors.websiteUrl}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="primaryGoal" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Primary Service Focus
                      </label>
                      <select
                        id="primaryGoal"
                        value={formData.primaryGoal}
                        onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                        className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-colors"
                      >
                        <option value="Facebook & Instagram Ads Scaling">Facebook & Instagram Ads Scaling</option>
                        <option value="High-Intent Technical SEO">High-Intent Technical SEO</option>
                        <option value="Website Boosting & Core Web Vitals CRO">Website Boosting & Core Web Vitals CRO</option>
                        <option value="Full-Funnel Growth Suite (Ads + SEO + Speed)">Full-Funnel Growth Suite (Ads + SEO + Speed)</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Monthly Ad/Marketing Budget */}
                  <div>
                    <label htmlFor="monthlyBudget" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Estimated Monthly Marketing/Ad Spend
                    </label>
                    <select
                      id="monthlyBudget"
                      value={formData.monthlyBudget}
                      onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                      className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-colors"
                    >
                      <option value="$1,500 - $3,000 / mo">$1,500 - $3,000 / mo (Emerging)</option>
                      <option value="$3,000 - $7,500 / mo">$3,000 - $7,500 / mo (Scaling)</option>
                      <option value="$7,500 - $20,000 / mo">$7,500 - $20,000 / mo (Growth Stage)</option>
                      <option value="$20,000+ / mo">$20,000+ / mo (High Volume)</option>
                    </select>
                  </div>

                  {/* Row 4: Specific challenges / current bottleneck */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Current Bottleneck or Project Goals (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="e.g. Our Facebook ads CPAs spiked to $55, our mobile site scores 40 on PageSpeed, and we need to scale ahead of Q4..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 transition-all rounded-lg shadow-md disabled:opacity-70 whitespace-nowrap shrink-0"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin" />
                        <span>Analyzing Requirements...</span>
                      </div>
                    ) : (
                      <>
                        <span>Submit Free Audit Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
