/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { RoiCalculator } from './components/RoiCalculator';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Facebook & Instagram Ads Scaling');
  const [contactNotes, setContactNotes] = useState<string>('');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToContact();
  };

  const handleSelectCaseStudy = (caseTitle: string) => {
    setContactNotes(`Interested in strategy and deliverables similar to: "${caseTitle}"`);
    scrollToContact();
  };

  const handleApplyRoiEstimates = (details: {
    monthlyVisitors: number;
    aov: number;
    adSpend: number;
    projectedUplift: number;
  }) => {
    const note = `[ROI Model Applied]\nMonthly Traffic: ${details.monthlyVisitors.toLocaleString()} visits\nAverage Order Value: $${details.aov}\nPlanned Meta Ad Spend: $${details.adSpend.toLocaleString()}/mo\nProjected Monthly Upside: +$${details.projectedUplift.toLocaleString()}/mo`;
    setContactNotes(note);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-emerald-400 selection:text-neutral-950">
      {/* Top Bar strictly following 3-zone contract */}
      <Navbar onOpenAudit={scrollToContact} />

      <main>
        {/* Hero with value proposition, 16:9 imagery, and quantitative proof strip */}
        <Hero
          onOpenAudit={scrollToContact}
          onViewPortfolio={scrollToPortfolio}
        />

        {/* Core Services: Facebook & Instagram Ads, SEO, Website Boosting */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Portfolio & Case Studies with interactive filter tabs and detailed case breakdown */}
        <PortfolioSection onContactClient={handleSelectCaseStudy} />

        {/* Interactive Growth & Speed ROI Estimator */}
        <RoiCalculator onApplyEstimates={handleApplyRoiEstimates} />

        {/* Client Testimonials with quantifiable outcome markers */}
        <TestimonialsSection />

        {/* Marketer Profile & Proven Methodology */}
        <AboutSection />

        {/* Interactive FAQs */}
        <FaqSection />

        {/* Validated Contact & Free Growth Audit Request Form */}
        <ContactSection
          initialService={selectedService}
          initialNotes={contactNotes}
        />
      </main>

      {/* Quiet Footer */}
      <Footer />
    </div>
  );
}
