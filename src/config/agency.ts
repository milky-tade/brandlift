export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  problemSolved: string;
  deliverables: string[];
  techStack: string[];
  businessValue: string;
  idealFor: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  tagline: string;
  isConcept: boolean;
  featured: boolean;
  year: string;
  summary: string;
  challenge: string;
  strategy: string;
  execution: string;
  deliverables: string[];
  outcomes: { label: string; value: string; note: string }[];
  tags: string[];
  accentColor: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  idealClient: string;
  priceNote: string;
  startingPrice: string;
  billingFrequency: string;
  deliverables: string[];
  serviceLimits: string[];
  ctaText: string;
  popular?: boolean;
}

export interface AgencyConfig {
  brand: {
    name: string;
    legalName: string;
    tagline: string;
    subheadline: string;
    mission: string;
    foundingYear: number;
    headquarters: string;
    presence: string;
  };
  contact: {
    email: string;
    phoneDisplay: string;
    whatsappNumber: string; // international digits only for api.whatsapp.com
    whatsappPrefillMessage: string;
    address: string;
    workingHours: string;
    expectedResponseTime: string;
  };
  socials: {
    linkedin: string;
    instagram: string;
    twitter: string;
    behance: string;
    github: string;
  };
  services: ServiceItem[];
  caseStudies: CaseStudy[];
  pricing: {
    disclaimer: string;
    packages: PricingPackage[];
    addOns: { title: string; price: string; description: string }[];
  };
  testimonials: {
    quote: string;
    author: string;
    role: string;
    company: string;
    market: 'Ethiopia' | 'International';
    rating: number;
  }[];
  faqs: { question: string; answer: string }[];
}

export const agencyConfig: AgencyConfig = {
  brand: {
    name: 'NOIR Studio',
    legalName: 'NOIR Digital Studio PLC (Demo)',
    tagline: 'Strategic Digital Craft for Ambitious Brands',
    subheadline:
      'We engineer bespoke web platforms, distinctive brand identities, and high-conversion digital marketing systems for leading Ethiopian and international enterprises.',
    mission:
      'To bridge world-class creative engineering with measurable commercial growth, delivering digital assets that position our partners at the absolute vanguard of their industries.',
    foundingYear: 2024,
    headquarters: 'Bole Sub-City, Addis Ababa, Ethiopia',
    presence: 'Addis Ababa & Global Remote',
  },
  contact: {
    email: 'milkiyastadesetoli@gmail.com',
    phoneDisplay: '+251 93 711 7765',
    whatsappNumber: '251937117765',
    whatsappPrefillMessage: 'Hello Brandlift, I would like to discuss a project regarding',
    address: 'Bole Road, Addis Ababa, Ethiopia',
    workingHours: 'Monday – Friday: 9:00 AM – 6:00 PM EAT (UTC+3)',
    expectedResponseTime: 'Within 24 business hours',
  },
  socials: {
    linkedin: 'https://linkedin.com/company/noir-studio-placeholder',
    instagram: 'https://instagram.com/noirstudio.agency',
    twitter: 'https://x.com/noirstudio_demo',
    behance: 'https://behance.net/noirstudio-demo',
    github: 'https://github.com/noir-studio-demo',
  },
  services: [
    {
      id: 'web-dev',
      title: 'Website Design & Development',
      category: 'Engineering & UI/UX',
      shortDescription:
        'Custom high-performance web platforms, portfolio showcases, and web applications built with meticulous craft and zero bloated templates.',
      problemSolved:
        'Clunky, slow, generic websites that fail to convert visitors, damage brand credibility, and fall apart on mobile devices.',
      deliverables: [
        'Custom UI/UX Architecture & Figma Prototypes',
        'Mobile-First Responsive Engineering (React, Vite, Next.js)',
        'Core Web Vitals Performance Optimization (< 1.5s LCP)',
        'Technical SEO Foundation & Schema.org Structured Data',
        'Headless CMS or Easy Content Management Integration',
        'Cross-Browser & WCAG 2.2 Accessibility Auditing',
      ],
      techStack: ['React', 'TypeScript', 'Vite', 'Tailwind/Vanilla CSS', 'Node.js', 'Cloudflare Pages'],
      businessValue:
        'Dramatically elevates perceived brand value, improves organic search visibility, and turns passive visitors into high-intent inbound inquiries.',
      idealFor: 'Startups, B2B companies, luxury brands, and organizations ready for a top-tier digital flagship.',
    },
    {
      id: 'social-media',
      title: 'Social Media Marketing & Management',
      category: 'Growth & Content',
      shortDescription:
        'Strategic content planning, native editorial creative, and active community engagement across Telegram, LinkedIn, Instagram, and TikTok.',
      problemSolved:
        'Inconsistent posting, low engagement, uninspired generic templates, and campaigns that fail to drive real commercial intent.',
      deliverables: [
        'Channel Audit & Competitor Positioning Strategy',
        'Monthly Editorial Content Calendar & Visual Asset Production',
        'Platform-Native Copywriting in English & Amharic (where relevant)',
        'Active Community Management & Inbound Inquiry Triage',
        'Influencer & Partnership Outreach Protocols',
        'Monthly Analytics & Conversion Attribution Reporting',
      ],
      techStack: ['Figma', 'Adobe Premiere', 'Canva Pro', 'Telegram Business', 'Meta Business Suite'],
      businessValue:
        'Builds a defensible community of loyal brand advocates and provides a consistent pipeline of warm commercial leads.',
      idealFor: 'Consumer brands, professional services, hospitality, and tech products expanding regional reach.',
    },
    {
      id: 'branding',
      title: 'Graphic Design & Brand Identity',
      category: 'Creative Direction',
      shortDescription:
        'Comprehensive visual identity systems, typographic marks, design guidelines, and marketing collateral designed to endure.',
      problemSolved:
        'Fragmented visual appearance, outdated logos, and a lack of coherent design guidelines that confuse prospective clients.',
      deliverables: [
        'Primary & Secondary Typographic Wordmarks / Marks',
        'Curated Color Systems & Typography Hierarchy',
        'Comprehensive Brand Guidelines Book (PDF & Digital)',
        'Social Media Asset Templates & Marketing Collateral',
        'Packaging, Stationery & Pitch Deck Design',
        'Vector Asset Suite (SVG, EPS, High-Res PNG)',
      ],
      techStack: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Glyphs'],
      businessValue:
        'Commands premium pricing power and ensures immediate recognition across all physical and digital touchpoints.',
      idealFor: 'New ventures launching from scratch or established enterprises undergoing a strategic repositioning.',
    },
    {
      id: 'seo',
      title: 'Search Engine Optimization (SEO)',
      category: 'Search & Visibility',
      shortDescription:
        'Data-backed technical SEO, high-intent keyword research, content architecture, and local search authority that captures organic demand.',
      problemSolved:
        'Zero organic visibility on Google, reliance solely on costly ads, and competitors ranking for your highest-value search keywords.',
      deliverables: [
        'Deep Technical Crawl, Architecture & Indexing Audit',
        'High-Intent Commercial Keyword & Search Intent Research',
        'On-Page Optimization (Meta, Headings, Schema JSON-LD)',
        'Content Gap Analysis & Topic Cluster Architecture',
        'Google Business Profile & Local Search Map Optimization',
        'Quarterly Growth & Keyword Rank Tracking Dashboards',
      ],
      techStack: ['Google Search Console', 'Ahrefs / SEMrush', 'Screaming Frog', 'Schema.org'],
      businessValue:
        'Generates compounding organic customer acquisition at near-zero incremental marginal cost over time.',
      idealFor: 'B2B service providers, exporters, real estate, software companies, and local commerce in Addis Ababa.',
    },
    {
      id: 'paid-ads',
      title: 'Paid Advertising (Meta, Google, TikTok)',
      category: 'Performance Marketing',
      shortDescription:
        'Targeted performance advertising engineered for qualified customer acquisition, tested creative variations, and transparent ROI.',
      problemSolved:
        'Wasted ad budgets on "boosted posts" with no tracking, low conversion rates, and negative return on advertising spend.',
      deliverables: [
        'Conversion Tracking, Meta Pixel & Google Tag Manager Setup',
        'Audience Segmentation & Custom/Lookalike Modeling',
        'Ad Creative Ideation, Copywriting & Dynamic Variations',
        'A/B Split Testing (Hook, Angle, Offer, Landing Page)',
        'Weekly Budget Allocation & Bid Strategy Management',
        'Clear ROAS (Return On Ad Spend) & Cost Per Lead Dashboards',
      ],
      techStack: ['Meta Ads Manager', 'Google Ads', 'TikTok Ads Manager', 'Google Analytics 4'],
      businessValue:
        'Scales predictable, measurable revenue by targeting prospects actively searching for or receptive to your solution.',
      idealFor: 'E-commerce, B2B lead generation, events, and venture-backed startups looking to scale customer growth.',
    },
    {
      id: 'strategy',
      title: 'Brand Strategy & Strategic Consulting',
      category: 'Consulting & Strategy',
      shortDescription:
        'Rigorous market positioning, competitive differentiation, audience profiling, and digital roadmaps that clarify where to play and how to win.',
      problemSolved:
        'Unclear value proposition, copying competitors, diluted brand messaging, and internal misalignment on company direction.',
      deliverables: [
        'Stakeholder Discovery Workshops & Audience Deep-Dives',
        'Competitive Landscape & Gap Mapping',
        'Core Brand Positioning, Purpose, and Value Proposition',
        'Brand Voice, Tone, and Messaging Playbook',
        'Go-to-Market (GTM) Digital Strategy Roadmap',
        'Quarterly Strategic Growth Milestones',
      ],
      techStack: ['Miro', 'Notion', 'Google Workspace', 'Quantitative Audience Surveys'],
      businessValue:
        'Eliminates wasted marketing spending by aligning every design, copy, and engineering effort with strategic business goals.',
      idealFor: 'Founders, executive leadership, and companies launching major new initiatives or entering new markets.',
    },
    {
      id: 'content-production',
      title: 'Content Creation, Photography & Video',
      category: 'Creative Production',
      shortDescription:
        'High-production visual storytelling, commercial photography direction, short-form reels/TikToks, and premium brand films.',
      problemSolved:
        'Stale stock photos, unengaging mobile video clips, and visual assets that undermine a premium product or service reputation.',
      deliverables: [
        'Creative Concepting, Moodboards & Storyboarding',
        'On-Location or Studio Commercial Photography Direction',
        'Short-Form Video Production (Reels, TikToks, YouTube Shorts)',
        'Professional Post-Production, Color Grading & Sound Design',
        'Multi-Platform Aspect Ratio Formatting (9:16, 1:1, 16:9)',
        'Modular Content Bank for Ongoing Social Campaigns',
      ],
      techStack: ['Sony Alpha / Blackmagic Cameras', 'DaVinci Resolve', 'Adobe Premiere Pro', 'Lightroom'],
      businessValue:
        'Instantly captures audience attention on crowded feeds and creates an unmistakably premium, authentic brand aesthetic.',
      idealFor: 'Hospitality, real estate, lifestyle, apparel, food & beverage, and corporate executive profiles.',
    },
  ],
  caseStudies: [
    {
      id: 'aura-living',
      title: 'Aura Living',
      client: 'Aura Home & Architecture (Concept Prototype)',
      category: 'Web Development & UI/UX',
      tagline: 'An editorial digital flagship for an East African modern architecture & design house',
      isConcept: true,
      featured: true,
      year: '2025',
      summary:
        'A bespoke e-commerce and portfolio flagship engineered to showcase bespoke furniture and architectural residences with fluid 60fps micro-interactions.',
      challenge:
        'Traditional furniture and architecture portfolios rely on heavy catalog PDFs or sluggish off-the-shelf templates that fail to convey spatial craftsmanship and material luxury on mobile devices.',
      strategy:
        'We devised an editorial grid system inspired by high-end architectural monographs. High-res imagery is progressively loaded via WebP with responsive art direction, while typographic scale creates quiet luxury.',
      execution:
        'Built with React, TypeScript, and hardware-accelerated CSS transforms. Features a custom interactive material selector, fluid viewport-based typography, and sub-1.2s page loads across 3G mobile connections in Addis Ababa.',
      deliverables: [
        'Interactive Architectural Showcase Platform',
        'Custom Material Configurator & Inquiry Engine',
        'Bilingual English / Amharic Architectural Monograph',
        'Mobile-Optimized Core Web Vitals (99/100 Mobile Score)',
      ],
      outcomes: [
        { label: 'Avg. Session Duration', value: '3m 42s', note: '+140% vs standard portfolio benchmark' },
        { label: 'Mobile Page Speed', value: '1.1s LCP', note: 'Tested across regional LTE networks' },
        { label: 'Inquiry Completion Rate', value: '8.4%', note: 'Qualified high-ticket consultation requests' },
      ],
      tags: ['React', 'TypeScript', 'Luxury Design', 'Headless', 'High Performance'],
      accentColor: '#8B5CF6',
    },
    {
      id: 'zoma-fintech',
      title: 'Zoma Financial',
      client: 'Zoma Capital Technologies (Commercial Demonstration)',
      category: 'Brand Strategy & Web Platform',
      tagline: 'Modernizing pan-African business remittances and enterprise treasury management',
      isConcept: true,
      featured: true,
      year: '2025',
      summary:
        'A comprehensive corporate identity and high-trust digital portal designed to communicate institutional-grade security for cross-border African commerce.',
      challenge:
        'Fintech interfaces in emerging markets often look either overly complex or like generic Western Silicon Valley clones, lacking regional cultural resonance and regulatory clarity.',
      strategy:
        'We created a visual language rooted in Ethiopian geometric precision (inspired by sacred geometric motifs) rendered with sleek dark-mode glassmorphism and clear compliance disclosures.',
      execution:
        'Developed an interactive transaction calculator, compliance documentation portal, and executive demo booking pipeline with integrated timezone and regional currency converters (ETB, KES, USD, EUR).',
      deliverables: [
        'Complete Corporate Brand System & Guidelines',
        'Enterprise Marketing Website & Documentation Hub',
        'Dynamic FX & Remittance Simulation Component',
        'Investor Pitch Deck & Corporate Presentation Suite',
      ],
      outcomes: [
        { label: 'Demo Booking Conversion', value: '11.2%', note: 'From enterprise institutional traffic' },
        { label: 'Brand Recall Lift', value: '3.1x', note: 'In regional fintech focus groups' },
        { label: 'Accessibility Rating', value: 'WCAG AA', note: '100% compliant keyboard & screen reader test' },
      ],
      tags: ['Fintech', 'Identity System', 'Security UI', 'B2B SaaS'],
      accentColor: '#3B82F6',
    },
    {
      id: 'habesha-roast',
      title: 'Habesha Roast Co.',
      client: 'Habesha Specialty Coffee Exporters (Concept)',
      category: 'Social Media & Content Creation',
      tagline: 'Scaling single-origin Yirgacheffe and Sidama coffees to global specialty subscribers',
      isConcept: true,
      featured: true,
      year: '2025',
      summary:
        'A brand storytelling and social media growth campaign celebrating Ethiopian coffee heritage through documentary-style visual content and direct-to-consumer subscription funnels.',
      challenge:
        'While Ethiopia produces the world’s most celebrated coffees, export brands struggle to build direct consumer relationships online, forfeiting brand margin to foreign third-party roasters.',
      strategy:
        'We developed an "Origin-First" content strategy featuring farm-level micro-stories, sensory tasting reels, and brewing guides tailored for European and North American coffee enthusiasts.',
      execution:
        'Produced 24 short-form documentary reels, high-resolution visual recipe cards, and coordinated a cross-platform campaign across Instagram and TikTok, backed by targeted Meta ads in key diaspora regions.',
      deliverables: [
        'Comprehensive Social Media Content Calendar (3 Months)',
        '24 Modular Short-Form Video Assets with Native Audio',
        'Direct-to-Consumer Subscription Landing Page Prototype',
        'Tasting Notes Sensory Grid & Packaging Redesign',
      ],
      outcomes: [
        { label: 'Organic Video Views', value: '480K+', note: 'Combined across TikTok and Instagram' },
        { label: 'Subscriber Waitlist', value: '2,850+', note: 'Verified email subscribers prior to batch drop' },
        { label: 'Engagement Rate', value: '6.8%', note: '3x higher than specialty food industry average' },
      ],
      tags: ['Content Strategy', 'Social Media', 'Reels Production', 'E-Commerce'],
      accentColor: '#F59E0B',
    },
    {
      id: 'nexus-logistics',
      title: 'Nexus Freight & Supply',
      client: 'Nexus Supply Chain Solutions (Commercial Demo)',
      category: 'Technical SEO & Web Platform',
      tagline: 'Dominating B2B freight and multimodal transport keywords along the Addis–Djibouti corridor',
      isConcept: true,
      featured: false,
      year: '2024',
      summary:
        'A technical SEO overhaul and responsive freight portal built to capture high-value corporate logistics contracts across the Horn of Africa.',
      challenge:
        'The client’s previous website had zero search presence for core industrial keywords like "freight forwarding Djibouti Addis" and lost mobile quote requests due to broken forms.',
      strategy:
        'We architected a programmatic SEO infrastructure with dedicated landing pages for trade corridors, multimodal customs clearance, and cold-chain warehousing, combined with rapid quote forms.',
      execution:
        'Cleaned up technical indexing errors, implemented Schema.org LogisticsService structured data, optimized server response times to 80ms, and integrated multi-channel WhatsApp quote routing.',
      deliverables: [
        'Technical SEO Architecture & Structured Data Deployment',
        'Corridor-Specific High-Intent Service Landing Pages',
        'Instant Cargo Quote Request Form with WhatsApp Dispatch',
        'Google Business Profile & Local Search Map Optimization',
      ],
      outcomes: [
        { label: 'Search Impressions', value: '+320%', note: 'Across commercial search queries in 90 days' },
        { label: 'Top 3 Keyword Rankings', value: '18 Terms', note: 'Including primary corridor freight terms' },
        { label: 'Inbound Quote Leads', value: '45 / mo', note: 'Direct enterprise freight inquiries' },
      ],
      tags: ['Technical SEO', 'Schema.org', 'B2B Portal', 'Lead Generation'],
      accentColor: '#10B981',
    },
    {
      id: 'solaria-health',
      title: 'Solaria Health & Wellness',
      client: 'Solaria Diagnostic Centers (Demonstration Case)',
      category: 'Paid Advertising & Acquisition',
      tagline: 'A patient acquisition and appointment booking engine with zero wasted ad spend',
      isConcept: true,
      featured: false,
      year: '2025',
      summary:
        'A multi-channel Meta & Google Ads performance system engineered to drive scheduled diagnostic health checkups with rigorous conversion tracking.',
      challenge:
        'Healthcare advertising requires strict adherence to privacy compliance, high audience trust, and low friction appointment confirmation without overwhelming clinic phone staff.',
      strategy:
        'We designed intent-driven Google Search campaigns targeting urgent diagnostic terms and localized Meta campaigns highlighting preventative family health packages with direct WhatsApp booking.',
      execution:
        'Built dedicated, high-speed landing pages with friction-free booking calendars, integrated WhatsApp click-to-chat with automated preliminary triage, and set up custom offline conversion attribution.',
      deliverables: [
        'Google Search & Meta Ad Campaign Architecture',
        'High-Converting Mobile Appointment Landing Pages',
        'WhatsApp Business Automated Intake Script Integration',
        'Full-Funnel ROAS & Cost-Per-Acquisition Dashboard',
      ],
      outcomes: [
        { label: 'Cost Per Booking', value: '-42%', note: 'Reduction compared to previous ad spend' },
        { label: 'WhatsApp Intake Rate', value: '78%', note: 'Of total inquiries initiated through direct chat' },
        { label: 'Monthly Confirmed Visits', value: '260+', note: 'Directly attributed to paid campaigns' },
      ],
      tags: ['Paid Advertising', 'Google Ads', 'Meta Ads', 'WhatsApp Conversion'],
      accentColor: '#EC4899',
    },
    {
      id: 'kaviar-studio',
      title: 'Kaviar Creative',
      client: 'Kaviar High-Fashion House (Concept Project)',
      category: 'Graphic Design & Brand Identity',
      tagline: 'Timeless typographic identity and luxury editorial system for an avant-garde fashion atelier',
      isConcept: true,
      featured: false,
      year: '2024',
      summary:
        'An experimental luxury brand identity system featuring custom display typography, tactile packaging mockups, and a minimalist digital showcase.',
      challenge:
        'High-fashion branding demands extreme restraint. Any unnecessary ornament breaks the aura of exclusivity, while poor typographic details immediately betray low craftsmanship.',
      strategy:
        'We designed a bespoke high-contrast serif logotype paired with stark architectural spacing, monochromatic textures, and an editorial lookbook grid that lets garments speak.',
      execution:
        'Created physical packaging specifications, cotton-rag hang tags, foil-stamped stationery mockups, and a responsive web lookbook featuring seamless fullscreen runway video backgrounds.',
      deliverables: [
        'Bespoke Wordmark & Monogram Identity Suite',
        'Packaging, Hangtag & Garment Label Design Specs',
        'Digital Editorial Lookbook & Exhibition Invite System',
        '120-Page Comprehensive Brand Standards Monograph',
      ],
      outcomes: [
        { label: 'Press Feature Inquiries', value: '14 Outlets', note: 'Within 30 days of concept debut' },
        { label: 'Aesthetic Alignment', value: '100%', note: 'Unanimous creative direction signoff' },
        { label: 'Asset Reusability', value: '3+ Years', note: 'Timeless identity unaffected by seasonal trends' },
      ],
      tags: ['Branding', 'Luxury Typography', 'Packaging Design', 'Art Direction'],
      accentColor: '#A855F7',
    },
  ],
  pricing: {
    disclaimer:
      'Every brand is unique. Below are our structured starter scopes designed for clear deliverables. All engagements can be tailored with bespoke requirements during our discovery session.',
    packages: [
      {
        id: 'pkg-social',
        name: 'Social Media Growth',
        badge: 'Monthly Retainer',
        idealClient: 'Emerging & established businesses looking to establish consistent, high-aesthetic presence',
        priceNote: 'Transparent scope, billed monthly with 30-day flexibility',
        startingPrice: '$450',
        billingFrequency: '/ month (or ETB equivalent)',
        deliverables: [
          '12 Custom-Designed Visual Posts & Carousel Sets',
          '4 Platform-Native Short Video Concepts / Reels',
          'Complete Monthly Content Calendar & Copywriting',
          'Community Management & Inbound Message Routing',
          'Monthly Performance Analytics & Growth Report',
          'Dedicated Account Manager via WhatsApp & Slack',
        ],
        serviceLimits: ['Targeted for up to 2 social channels', 'Ad spend budget managed separately'],
        ctaText: 'Select Social Growth',
      },
      {
        id: 'pkg-digital-growth',
        name: 'Full Digital Growth',
        badge: 'Most Popular',
        popular: true,
        idealClient: 'High-growth brands ready to scale customer acquisition across both content and paid ads',
        priceNote: 'Comprehensive organic + paid performance engine',
        startingPrice: '$950',
        billingFrequency: '/ month (or ETB equivalent)',
        deliverables: [
          'Full Social Media Management (16 posts + 8 reels/mo)',
          'Meta & Google Ads Campaign Management & Optimization',
          'Creative Ad Variations (Hooks, Angles, Copy Testing)',
          'On-Page & Technical SEO Monitoring & Fixes',
          'Conversion Tracking & Attribution Dashboard',
          'Bi-Weekly Strategy & Sprint Alignment Calls',
        ],
        serviceLimits: ['Includes management fee for up to $4,000/mo ad spend', 'Covers up to 3 active channels'],
        ctaText: 'Start Digital Growth',
      },
      {
        id: 'pkg-web-launch',
        name: 'Brand & Web Launch',
        badge: 'One-Time Project',
        idealClient: 'Startups, ventures, and companies needing a world-class digital flagship and visual identity',
        priceNote: 'Turnkey delivery typically completed in 3 to 5 weeks',
        startingPrice: '$2,400',
        billingFrequency: 'one-time investment (or ETB equivalent)',
        deliverables: [
          'Complete Brand Identity System (Wordmark, Palette, Typography)',
          'Custom Responsive Website (Up to 7 Core Pages + CMS)',
          'Interactive UI/UX Prototypes & Design Tokens',
          'Sub-1.5s Core Web Vitals Performance Engineering',
          'Technical SEO Setup & Schema.org Structured Data',
          'WhatsApp, Email & CRM Lead Capture Integrations',
          '30 Days Post-Launch Warranty & Handover Training',
        ],
        serviceLimits: ['Fixed-scope delivery with 2 rounds of milestone revisions', 'Domain & hosting costs separate'],
        ctaText: 'Build Your Flagship',
      },
      {
        id: 'pkg-custom',
        name: 'Enterprise Strategic Partner',
        badge: 'Custom Scope',
        idealClient: 'Mid-sized to large organizations requiring a dedicated, multidisciplinary agency squad',
        priceNote: 'Tailored specifically around your strategic milestones',
        startingPrice: 'Custom',
        billingFrequency: 'tailored monthly or project scope',
        deliverables: [
          'Dedicated Senior Creative Director & Technical Lead',
          'Continuous Web Engineering & Feature Development',
          'Omnichannel Paid Advertising & High-Scale Media Buying',
          'Full-Service Commercial Photography & Video Production',
          'Quarterly Brand Strategy & Executive Positioning Reviews',
          'Priority 4-Hour Support SLA & Direct Executive Access',
        ],
        serviceLimits: ['Customized to exact enterprise governance needs', 'Multi-country & multi-language support available'],
        ctaText: 'Request Custom Proposal',
      },
    ],
    addOns: [
      {
        title: 'Brand Identity Monograph',
        price: 'From $800',
        description: 'Comprehensive 80+ page brand guidelines book covering print, physical signage, and digital design tokens.',
      },
      {
        title: 'Commercial On-Site Photo & Video Shoot',
        price: 'From $600 / day',
        description: 'Full-day creative production in Addis Ababa including crew, lighting, audio, and post-production color grading.',
      },
      {
        title: 'Multilingual Site Localization (Amharic / French)',
        price: 'From $450',
        description: 'Full linguistic translation, cultural copy adaptation, and bidirectional typography optimization.',
      },
      {
        title: 'Technical SEO Migration & Remediation',
        price: 'From $550',
        description: 'Comprehensive redirection matrix, backlink recovery, and Core Web Vitals speed repair for existing sites.',
      },
    ],
  },
  testimonials: [
    {
      quote:
        'NOIR Studio took our fragmented digital footprint and turned it into an unmistakable luxury presence. Their understanding of both Ethiopian business dynamics and international design standards is rare and invaluable.',
      author: 'Eleni Gebre-Meskel',
      role: 'Managing Director',
      company: 'Highland Heritage Living',
      market: 'Ethiopia',
      rating: 5,
    },
    {
      quote:
        'The speed and engineering precision they brought to our web platform launch exceeded our expectations. The site loaded in under a second across mobile networks and our consultation inquiries doubled in the first month.',
      author: 'Marcus Vance',
      role: 'Co-Founder & VP of Product',
      company: 'Aura Logistics Tech',
      market: 'International',
      rating: 5,
    },
    {
      quote:
        'Working with NOIR Studio felt like having our own in-house creative department. No fluffy marketing talk—just honest strategic advice, impeccable design craft, and transparent weekly reporting.',
      author: 'Dawit Tadesse',
      role: 'Head of Marketing',
      company: 'Fintech Horison PLC',
      market: 'Ethiopia',
      rating: 5,
    },
  ],
  faqs: [
    {
      question: 'How do you handle projects for both Ethiopian and international clients?',
      answer:
        'Our studio is based in Addis Ababa with team members who have worked with global brands. For Ethiopian clients, we support local payment methods (Telebirr, CBE Birr, direct commercial bank wire) and bilingual English/Amharic communications. For international clients, we work across major time zones (EAT / UTC+3, easily aligning with Europe, Middle East, and US East Coast), accept international wire transfers and card payments, and adhere to global engineering and design standards.',
    },
    {
      question: 'What is your typical project timeline from kickoff to launch?',
      answer:
        'A comprehensive Brand & Web Launch typically takes 3 to 5 weeks from discovery to deployment. Social media retainers and paid advertising campaigns can be onboarded and active within 5 to 7 business days following strategic alignment.',
    },
    {
      question: 'Do you guarantee number 1 rankings on Google or specific sales figures?',
      answer:
        'No ethical agency guarantees #1 Google rankings or exact revenue figures, as search algorithms and market conditions fluctuate. What we guarantee is rigorous, best-in-class technical SEO, data-backed ad targeting, exceptional conversion-focused design, and transparent weekly/monthly performance reporting without vanity metrics.',
    },
    {
      question: 'Can we start with a smaller project before committing to a larger retainer?',
      answer:
        'Yes. Many clients begin with a focused brand audit, a high-converting landing page, or a one-month initial pilot before transitioning into an ongoing growth partnership. We believe in earning long-term trust through demonstrated results.',
    },
    {
      question: 'Who owns the intellectual property and code upon project completion?',
      answer:
        'You do. Upon full settlement of project invoices, 100% of the design assets, source code, Figma files, photography rights, and advertising account data belong entirely to your company. We do not lock our clients in.',
    },
  ],
};
