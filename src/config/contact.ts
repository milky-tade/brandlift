/**
 * =========================================================================
 * BRANDLIFT — CONTACT & BRAND CONFIGURATION
 * =========================================================================
 * Centralized settings for agency identity and direct contact integrations.
 */

export interface ContactConfig {
  brandName: string;
  agencyDescriptor: string;
  headquarters: string;
  whatsappNumber: string; // International format without spaces, '+' or '-' (e.g., '251937117765')
  whatsappDisplay?: string;
  whatsappDefaultMessage: string;
  email: string;
  socials: {
    instagram: string;
    linkedin: string;
    twitter: string;
    tiktok: string;
    behance: string;
  };
}

export const contactConfig: ContactConfig = {
  brandName: 'Brandlift',
  agencyDescriptor: 'Strategic Digital Craft & Creative Engineering',
  headquarters: 'Addis Ababa, Ethiopia & Global Remote',

  // WhatsApp Configuration (0937117765 / +251 937 117 765)
  whatsappNumber: '251937117765',
  whatsappDisplay: '+251 937 117 765',
  whatsappDefaultMessage: "Hello Brandlift, I'd like to discuss a project with your team.",

  // Primary Contact Email
  email: 'milkiyastadesetoli@gmail.com',

  socials: {
    instagram: '',
    linkedin: '',
    twitter: '',
    tiktok: '',
    behance: '',
  },
};

/**
 * Helper to generate a valid WhatsApp click-to-chat URL (wa.me)
 */
export const getWhatsAppUrl = (customMessage?: string): string => {
  const number = contactConfig.whatsappNumber;
  const message = customMessage || contactConfig.whatsappDefaultMessage;
  return `https://wa.me/${encodeURIComponent(number)}?text=${encodeURIComponent(message)}`;
};
