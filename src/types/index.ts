export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: 'all' | 'social_ads' | 'seo' | 'speed_cro';
  categoryLabel: string;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
    detail: string;
  }[];
  timeline: string;
  servicesUsed: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  avatar?: string;
  rating: number;
  highlightMetric: string;
  serviceCategory: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  metricsAchieved: string;
}

export interface AuditFormData {
  fullName: string;
  email: string;
  websiteUrl: string;
  primaryGoal: string;
  monthlyBudget: string;
  currentChallenges: string;
}
