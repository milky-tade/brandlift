# NOIR Studio — Portfolio-First Digital Agency Landing Page

A minimal, portfolio-first landing page engineered for **NOIR Studio**, an independent digital creative agency serving Ethiopian and international clients.

Built with **React 19**, **TypeScript**, and **Vite** using a **Vanilla CSS design token system** adhering strictly to **WCAG 2.2 AA accessibility** and **sub-1.2s Core Web Vitals** performance.

---

## 💎 1. Overview & Architecture

- **Primary Objective**: Showcase real creative work and generate qualified client inquiries through WhatsApp.
- **Structure (Single-Page Flow)**:
  1. **Section A (Navigation)**: Compact wordmark, smooth scroll links (`Work`, `Services`, `About`), theme toggle (Dark/Light), and a prominent "Let's Talk" WhatsApp CTA.
  2. **Section B (Hero)**:
     - Eyebrow: `INDEPENDENT DIGITAL CREATIVE AGENCY`
     - Headline: `We make brands impossible to ignore.`
     - Supporting copy: `Strategy, design, and digital experiences that help ambitious businesses stand out and grow across Ethiopia and internationally.`
     - Primary CTA: `Explore Our Work` (smooth scrolls to `#work`)
     - Secondary CTA: `Start a Project` (direct WhatsApp link)
  3. **Section C (Featured Work / Portfolio)**: Central visual attraction featuring category filters (`All Work`, `Graphic Design`, `Video`, `Websites`, `Digital Marketing`), a prominent featured flagship, and interactive media inspection modals with native video controls and live site links.
  4. **Section D (Services)**: Compact, 8-capability overview with clear one-sentence client value propositions.
  5. **Section E (About)**: Concise, truthful agency introduction focusing on creative thinking, strategic execution, attention to detail, and 100% client code/IP ownership.
  6. **Section F (Final Call to Action)**:
     - Headline: `Have something good in mind? Let's make it real.`
     - Supporting copy: `Tell us what you're building, and let's explore how we can bring it to life.`
     - Primary CTA: `Start a Conversation on WhatsApp`
  7. **Section G (Footer)**: Wordmark, descriptor, navigation anchors, direct WhatsApp & email links, and dynamic copyright year.

---

## ⚙️ 2. Contact Configuration

All contact details and brand settings are managed in a single, documented file:

📁 **[`src/config/contact.ts`](file:///c:/Users/hp/Desktop/brandlift/src/config/contact.ts)**

```typescript
export const contactConfig = {
  brandName: 'NOIR Studio',
  agencyDescriptor: 'Independent Digital Creative Agency',
  headquarters: 'Addis Ababa, Ethiopia & Global Remote',

  // Replace with your real WhatsApp number (international digits, e.g., '251911000000')
  whatsappNumber: 'YOUR_WHATSAPP_NUMBER',
  whatsappDefaultMessage: "Hello NOIR Studio, I'd like to discuss a project.",

  email: 'hello@noirstudio.agency',

  socials: {
    instagram: 'https://instagram.com/noirstudio.agency',
    linkedin: 'https://linkedin.com/company/noirstudio-agency',
    twitter: 'https://x.com/noirstudio',
    tiktok: 'https://tiktok.com/@noirstudio.agency',
    behance: 'https://behance.net/noirstudio-agency',
  },
};
```

---

## 🎨 3. Adding or Replacing Portfolio Projects

All projects are defined in:

📁 **[`src/data/projects.ts`](file:///c:/Users/hp/Desktop/brandlift/src/data/projects.ts)**

### Step-by-Step Instructions:
1. Place your project image or video file inside `./public/assets/projects/` (e.g. `coffee-branding.jpg` or `reel.mp4`).
2. Add an object to the `projects` array in `src/data/projects.ts`:

```typescript
{
  id: 'my-new-project',
  title: 'My Project Name',
  category: 'Graphic Design', // 'Graphic Design' | 'Video' | 'Websites' | 'Digital Marketing'
  description: 'Two-sentence description of the challenge and outcome.',
  deliverable: 'Visual Identity & Packaging',
  client: 'Client Name (optional)',
  isConcept: false, // Set to true if speculative or concept demonstration
  featured: false,  // Set to true to highlight as top showcase
  mediaType: 'image', // 'image' | 'video' | 'website'
  thumbnailUrl: '/assets/projects/my-thumbnail.jpg',
  fullImageUrl: '/assets/projects/my-full-image.jpg', // For image enlargement lightbox
  videoUrl: '/assets/projects/my-video.mp4',          // For video projects
  projectUrl: 'https://client-site.com',             // ONLY if a real live site exists!
  tags: ['Branding', 'Typography'],
  accentColor: '#8B5CF6',
}
```

### Supported Asset Formats & Recommended Sizes:
- **Images**: WebP, JPG, or PNG.
  - Recommended dimensions: `1600 × 1000px` for standard projects, `1920 × 1080px` for featured items.
- **Videos / Reels**: MP4 (H.264/AAC).
  - Recommended dimensions: `1080 × 1920px` (9:16 vertical reels) or `1920 × 1080px` (16:9 widescreen). Keep file size under 15MB for fast mobile loading.

---

## 🚀 4. Local Development & Build Commands

Run commands from the project root (`c:\Users\hp\Desktop\brandlift`):

```powershell
# 1. Install dependencies
npm.cmd install

# 2. Run local development server
npm.cmd run dev
# Live at http://localhost:5173/

# 3. Check code quality & linter (0 errors, 0 warnings)
npm.cmd run lint

# 4. Production build (compiles to ./dist/ in ~1.5s)
npm.cmd run build
```

---

## 🌐 5. Deployment Guide (Zero Hosting Cost)

The site compiles into a lightweight static bundle (`./dist`) and can be hosted permanently for **$0/month**:

### Cloudflare Pages (Recommended)
1. Push this repository to GitHub or GitLab.
2. In the Cloudflare Dashboard, select **Workers & Pages > Create application > Pages > Connect to Git**.
3. Set:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
4. Click **Save and Deploy**. Your site receives free global CDN edge caching, automatic SSL, and DDoS mitigation.

---

## 📋 6. Launch Checklist & Placeholders

- [ ] Open `src/config/contact.ts` and set `whatsappNumber` to your real number (e.g., `251911000000`).
- [ ] Drop your own project images and videos into `public/assets/projects/`.
- [ ] Update `src/data/projects.ts` with your real project titles, descriptions, and tags.
- [ ] Run `npm run build` to verify production assets compile cleanly.
- [ ] Connect your custom domain (e.g. `noirstudio.agency`) in your Cloudflare or hosting DNS settings.
