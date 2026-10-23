import React from 'react';
import { contactConfig, getWhatsAppUrl } from '../config/contact';
import { MessageSquare, Mail } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const whatsAppUrl = getWhatsAppUrl();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#071220',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        paddingTop: '5rem',
        paddingBottom: '3rem',
        color: '#FFFFFF',
      }}
    >
      <div className="container">
        {/* Main Footer Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3.5rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--ptgr-crimson)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontWeight: 900,
                  fontSize: '0.9rem',
                }}
              >
                B
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.35rem',
                  letterSpacing: '-0.03em',
                  color: '#FFFFFF',
                }}
              >
                BRANDLIFT
              </span>
            </div>

            <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: 1.65, maxWidth: '340px' }}>
              {contactConfig.agencyDescriptor}. Engineering high-impact brand identities, cinematic video, and sub-second web platforms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#93C5FD',
                marginBottom: '1.25rem',
                fontWeight: 700,
              }}
            >
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem' }}>
              <button
                onClick={() => scrollTo('work')}
                style={{
                  textAlign: 'left',
                  color: '#CBD5E1',
                  cursor: 'pointer',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
              >
                Selected Portfolio
              </button>
              <button
                onClick={() => scrollTo('services')}
                style={{
                  textAlign: 'left',
                  color: '#CBD5E1',
                  cursor: 'pointer',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
              >
                Core Disciplines
              </button>
              <button
                onClick={() => scrollTo('about')}
                style={{
                  textAlign: 'left',
                  color: '#CBD5E1',
                  cursor: 'pointer',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
              >
                About The Studio
              </button>
              <button
                onClick={() => scrollTo('contact')}
                style={{
                  textAlign: 'left',
                  color: '#CBD5E1',
                  cursor: 'pointer',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
              >
                Start A Conversation
              </button>
            </div>
          </div>

          {/* Contact Direct */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#93C5FD',
                marginBottom: '1.25rem',
                fontWeight: 700,
              }}
            >
              Direct Connect
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.92rem' }}>
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  color: '#25D366',
                  fontWeight: 600,
                }}
              >
                <MessageSquare size={17} />
                <span>WhatsApp: {contactConfig.whatsappDisplay || '0937117765'}</span>
              </a>

              {contactConfig.email && (
                <a
                  href={`mailto:${contactConfig.email}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.55rem',
                    color: '#CBD5E1',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
                >
                  <Mail size={17} />
                  <span>{contactConfig.email}</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.82rem',
            color: '#8FA4BF',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <div>
            © {CURRENT_YEAR} {contactConfig.brandName}. All rights reserved.
          </div>
          <div>
            {contactConfig.headquarters} • Global Delivery
          </div>
        </div>
      </div>
    </footer>
  );
};
