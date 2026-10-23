/**
 * =========================================================================
 * NOIR STUDIO — SERVICES ARCHITECTURE (CONCISE CAPABILITIES)
 * =========================================================================
 * Clean, compact representation of the agency's 8 core capabilities.
 */

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  valueProposition: string;
}

export const servicesList: ServiceItem[] = [
  {
    id: 'social-media',
    title: 'Social Media Marketing & Management',
    category: 'Growth & Social',
    valueProposition:
      'Turn social channels into active client-acquisition pipelines through strategic content calendars, platform-native creative, and community management.',
  },
  {
    id: 'web-dev',
    title: 'Website Design & Development',
    category: 'Digital Engineering',
    valueProposition:
      'Bespoke, high-speed web flagships and portfolio platforms engineered with modern frameworks for sub-1.2s mobile performance and high inquiry conversions.',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design & Visual Identity',
    category: 'Creative Direction',
    valueProposition:
      'Distinctive typography, logotypes, color systems, and marketing collateral that establish instant authority and command commercial pricing power.',
  },
  {
    id: 'seo',
    title: 'SEO & Search Visibility',
    category: 'Search Growth',
    valueProposition:
      'Data-backed technical optimization, high-intent keyword capture, and Schema structured data that position your business at the top of Google searches.',
  },
  {
    id: 'paid-ads',
    title: 'Paid Advertising (Meta, Google, TikTok)',
    category: 'Performance Marketing',
    valueProposition:
      'Targeted ad campaigns designed for qualified commercial leads and measurable return on ad spend, eliminating wasted ad budgets.',
  },
  {
    id: 'brand-strategy',
    title: 'Brand Strategy & Consulting',
    category: 'Strategic Advisory',
    valueProposition:
      'Clarity on audience positioning, competitive differentiation, and go-to-market execution so your brand message cuts through noisy markets.',
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    category: 'Brand Storytelling',
    valueProposition:
      'High-impact visual narratives, copywriting, and multimedia assets designed to engage audiences and communicate your brand value effortlessly.',
  },
  {
    id: 'photo-video',
    title: 'Photography & Videography',
    category: 'Visual Production',
    valueProposition:
      'Commercial photography direction, cinematic short-form video reels, and brand films produced with studio lighting and professional color grading.',
  },
];
