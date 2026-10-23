import React from 'react';
import { getWhatsAppUrl } from '../config/contact';
import { MessageSquare, ArrowUpRight } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  const whatsAppUrl = getWhatsAppUrl("Hello Brandlift, I have a project in mind and would like to discuss it.");

  return (
    <section
      id="contact"
      className="section"
      style={{
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        backgroundColor: 'var(--bg-canvas)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, #0B1B30 0%, #163962 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.15)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'clamp(3rem, 7vw, 5.5rem) clamp(1.5rem, 5vw, 4rem)',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(7, 18, 32, 0.5)',
            position: 'relative',
            color: '#FFFFFF',
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: '#93C5FD',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              fontWeight: 700,
              padding: '0.35rem 1rem',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              marginBottom: '1.75rem',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--ptgr-crimson)',
              }}
            />
            <span>START A CONVERSATION</span>
          </div>

          {/* Headline (Bold Uppercase PTGR Style) */}
          <h2
            style={{
              fontSize: 'clamp(2.3rem, 5.5vw, 3.8rem)',
              fontWeight: 900,
              letterSpacing: '-0.035em',
              lineHeight: 1.1,
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              color: '#FFFFFF',
            }}
          >
            Ready To Elevate Your Brand?
          </h2>

          {/* Supporting Copy */}
          <p
            style={{
              color: '#CBD5E1',
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              maxWidth: '660px',
              margin: '0 auto 2.75rem',
              lineHeight: 1.65,
              fontWeight: 300,
            }}
          >
            Tell us about your objectives, timeline, and vision. We will review your requirements and outline a tailored roadmap.
          </p>

          {/* WhatsApp Direct Action Pill */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{
                minWidth: '280px',
                fontSize: '1.02rem',
              }}
            >
              <MessageSquare size={19} />
              <span>Contact On WhatsApp</span>
              <ArrowUpRight size={18} />
            </a>
          </div>

          <p
            style={{
              fontSize: '0.82rem',
              color: '#94A3B8',
              fontFamily: 'var(--font-mono)',
              marginTop: '1.75rem',
            }}
          >
            Direct Senior Studio Communication • Rapid Response
          </p>
        </div>
      </div>
    </section>
  );
};
