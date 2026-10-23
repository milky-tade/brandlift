/**
 * =========================================================================
 * BRANDLIFT — PORTFOLIO PROJECT DATA & ASSET REPOSITORY
 * =========================================================================
 *
 * Configured with user graphics, video reels, and client web platforms.
 */

export type ProjectCategory = 'Graphic Design' | 'Video' | 'Websites';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  deliverable: string;
  client?: string;
  isConcept?: boolean;
  featured?: boolean;
  mediaType: 'image' | 'video' | 'website';
  thumbnailUrl?: string;
  fullImageUrl?: string;
  videoUrl?: string;
  projectUrl?: string; // Rendered only when provided
  tags: string[];
  accentColor: string;
  aspectRatio?: '16/9' | '9/16' | '4/3' | '1/1' | '3/4';
}

export const projectCategories: ('All Work' | ProjectCategory)[] = [
  'All Work',
  'Graphic Design',
  'Video',
  'Websites',
];

export const projects: ProjectItem[] = [
  // =========================================================================
  // 1. GRAPHIC DESIGN PROJECTS (FROM /assets/projects/graphics/)
  // =========================================================================
  {
    id: 'tj-afro-brochure',
    title: 'TJ Afro Corporate Brochure',
    category: 'Graphic Design',
    description:
      'Comprehensive marketing brochure and corporate presentation layout crafted for high-impact physical print, executive storytelling, and brand credibility.',
    deliverable: 'Corporate Brochure & Print Identity',
    client: 'TJ Afro',
    isConcept: false,
    featured: true,
    mediaType: 'image',
    thumbnailUrl: '/assets/projects/graphics/tj-afro-brochure.png',
    fullImageUrl: '/assets/projects/graphics/tj-afro-brochure.png',
    tags: ['Brochure Design', 'Print Collateral', 'Corporate Identity'],
    accentColor: '#8B5CF6',
    aspectRatio: '4/3',
  },
  {
    id: 'edi-poster',
    title: 'EDI Brand & Event Poster',
    category: 'Graphic Design',
    description:
      'High-impact visual poster and promotional graphic identity engineered with modern Swiss grid alignment, bold typographic pacing, and commanding color contrast.',
    deliverable: 'Promotional Brand Poster & Visual Key Visual',
    client: 'EDI Events & Brand',
    isConcept: false,
    featured: false,
    mediaType: 'image',
    thumbnailUrl: '/assets/projects/graphics/edi-poster.png',
    fullImageUrl: '/assets/projects/graphics/edi-poster.png',
    tags: ['Poster Design', 'Visual Identity', 'Typography', 'Key Visual'],
    accentColor: '#10B981',
    aspectRatio: '3/4',
  },
  {
    id: 'elite-poster-2',
    title: 'Elite Brand Campaign Poster',
    category: 'Graphic Design',
    description:
      'Dynamic commercial campaign poster and creative direction showcasing brand positioning, structured compositional hierarchy, and print-ready production.',
    deliverable: 'Commercial Campaign Poster & Art Direction',
    client: 'Elite Brand',
    isConcept: false,
    featured: false,
    mediaType: 'image',
    thumbnailUrl: '/assets/projects/graphics/elite-poster-2.png',
    fullImageUrl: '/assets/projects/graphics/elite-poster-2.png',
    tags: ['Campaign Poster', 'Art Direction', 'Commercial Print'],
    accentColor: '#EC4899',
    aspectRatio: '3/4',
  },

  // =========================================================================
  // 2. VIDEO PRODUCTION & REELS (FROM /assets/projects/)
  // =========================================================================
  {
    id: 'mediassist-video',
    title: 'MediAssist Healthcare Platform',
    category: 'Video',
    description:
      'Dynamic commercial product video and explainer reel showcasing the MediAssist digital healthcare and patient management system.',
    deliverable: 'Commercial Video & Product Showcase Reel',
    client: 'MediAssist',
    isConcept: false,
    featured: false,
    mediaType: 'video',
    thumbnailUrl: '/assets/projects/mediassist-thumb.jpg',
    videoUrl: '/assets/projects/MediAssist.mp4',
    tags: ['Video Production', 'Product Reel', 'Healthcare Tech'],
    accentColor: '#3B82F6',
    aspectRatio: '9/16',
  },
  {
    id: 'germany-commercial',
    title: 'Destination Germany',
    category: 'Video',
    description:
      'Cinematic promotional video spotlighting European travel, education, and visa pathways with high-energy motion editing and visual storytelling.',
    deliverable: 'Commercial Travel Video & Motion Story',
    client: 'Destination Germany',
    isConcept: false,
    featured: false,
    mediaType: 'video',
    thumbnailUrl: '/assets/projects/germany-thumb.jpg',
    videoUrl: '/assets/projects/Germany.mp4',
    tags: ['Commercial Video', 'Cinematography', 'Motion Story'],
    accentColor: '#10B981',
    aspectRatio: '9/16',
  },
  {
    id: 'globe-11-film',
    title: 'Global Horizons: Brand Film',
    category: 'Video',
    description:
      'High-production brand film integrating 3D globe animation, international network visual effects, and fluid cinematic transitions.',
    deliverable: 'Cinematic Brand Film & 3D Globe Visuals',
    client: 'Global Network Co.',
    isConcept: false,
    featured: false,
    mediaType: 'video',
    thumbnailUrl: '/assets/projects/globe-11-thumb.jpg',
    videoUrl: '/assets/projects/globe-11.mp4',
    tags: ['3D Motion', 'Brand Film', 'Visual Effects'],
    accentColor: '#6366F1',
    aspectRatio: '9/16',
  },
  {
    id: 'globe-6-motion',
    title: 'Worldwide Connectivity',
    category: 'Video',
    description:
      'Kinetic motion graphic reel highlighting global trade corridors, cross-border infrastructure, and modern logistics connectivity.',
    deliverable: 'Kinetic Motion Graphic Reel',
    client: 'World Trade & Logistics',
    isConcept: false,
    featured: false,
    mediaType: 'video',
    thumbnailUrl: '/assets/projects/globe-6-thumb.jpg',
    videoUrl: '/assets/projects/globe-6.mp4',
    tags: ['Motion Graphics', 'Reels', 'Kinetic Design'],
    accentColor: '#EC4899',
    aspectRatio: '9/16',
  },
  {
    id: 'studio-reel-0608',
    title: 'Studio Motion Spotlight: 0608',
    category: 'Video',
    description:
      'Fast-paced short-form commercial reel designed for social media feeds with tight rhythmic cutting, native sound design, and visual impact.',
    deliverable: 'Short-Form Commercial Reel & Sound Design',
    client: 'Studio 0608',
    isConcept: false,
    featured: false,
    mediaType: 'video',
    thumbnailUrl: '/assets/projects/0608-thumb.jpg',
    videoUrl: '/assets/projects/0608.mp4',
    tags: ['Short-Form Video', 'Social Reel', 'Sound Design'],
    accentColor: '#F59E0B',
    aspectRatio: '9/16',
  },

  // =========================================================================
  // 3. WEBSITES (CLIENT WORKS: JS-AFRO.COM & LEWEDAJO.COM)
  // =========================================================================
  {
    id: 'js-afro-web',
    title: 'JS Afro Corporate Web Platform',
    category: 'Websites',
    description:
      'Official web presence and digital corporate platform for JS Afro, engineered with responsive layout, high performance, and streamlined commercial inquiry conversion.',
    deliverable: 'Corporate Web Platform & Digital Presence',
    client: 'JS Afro',
    isConcept: false,
    featured: false,
    mediaType: 'website',
    projectUrl: 'https://js-afro.com',
    tags: ['Corporate Web', 'React / Next.js', 'High Speed', 'SEO'],
    accentColor: '#8B5CF6',
    aspectRatio: '16/9',
  },
  {
    id: 'lewedajo-web',
    title: 'Lewedajo Digital Platform',
    category: 'Websites',
    description:
      'Modern digital flagship and web platform engineered for Lewedajo, featuring sub-second loading speed, intuitive user experience, and mobile-first architecture.',
    deliverable: 'Custom Web Application & Digital Platform',
    client: 'Lewedajo',
    isConcept: false,
    featured: false,
    mediaType: 'website',
    projectUrl: 'https://lewedajo.com',
    tags: ['Web Development', 'Digital Platform', 'UI/UX', 'Mobile-First'],
    accentColor: '#10B981',
    aspectRatio: '16/9',
  },
];
