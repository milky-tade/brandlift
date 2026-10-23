import React from 'react';
import { getWhatsAppUrl } from '../config/contact';
import { ArrowDown, MessageSquare, ShieldCheck, Zap, Award, Globe } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork }) => {
  const whatsAppUrl = getWhatsAppUrl("Hello Brandlift, I'd like to start a project with your team.");

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        backgroundColor: '#0B1B30',
        backgroundImage: 'radial-gradient(ellipse at 50% 20%, #163962 0%, #0B1B30 70%)',
        paddingTop: 'clamp(4.5rem, 9vw, 8rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8.5rem)',
        overflow: 'hidden',
        color: '#FFFFFF',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* Background Architectural Subtle Grid (PTGR Precision Vibe) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          {/* Eyebrow Badge (PTGR Pill Style) */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.45rem 1.25rem',
              borderRadius: 'var(--radius-pill)',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              color: '#93C5FD',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '2rem',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--ptgr-crimson)',
                boxShadow: '0 0 8px var(--ptgr-crimson)',
              }}
            />
            <span>STRATEGIC DIGITAL CRAFT & BRAND ENGINEERING</span>
          </div>

          {/* PTGR Main Statement: Bold Uppercase Triple Punctuated (like INVEST. SECURE. EDUCATE.) */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6.2vw, 4.75rem)',
              fontWeight: 900,
              letterSpacing: '-0.035em',
              lineHeight: 1.08,
              textTransform: 'uppercase',
              marginBottom: '1rem',
              color: '#FFFFFF',
            }}
          >
            STRATEGY. DESIGN. ENGINEERING.
          </h1>

          {/* Sub-headline: Punchy Value Prop */}
          <div
            style={{
              fontSize: 'clamp(1.35rem, 2.8vw, 2.1rem)',
              fontWeight: 700,
              color: '#E2E8F0',
              letterSpacing: '-0.02em',
              marginBottom: '1.6rem',
            }}
          >
            We Make Brands Impossible To Ignore.
          </div>

          {/* PTGR Light Subtitle Copy */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              fontWeight: 300,
              color: '#94A3B8',
              maxWidth: '720px',
              margin: '0 auto 2.8rem',
              lineHeight: 1.7,
            }}
          >
            Empowering forward-thinking companies with world-class visual identity systems, cinematic video storytelling, and custom web platforms engineered for speed and conversion.
          </p>

          {/* Dual PTGR Pill Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.15rem',
              flexWrap: 'wrap',
              marginBottom: '4.5rem',
            }}
          >
            {/* Primary Crimson CTA Pill */}
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{ minWidth: '220px' }}
            >
              <MessageSquare size={18} />
              <span>Contact On WhatsApp</span>
            </a>

            {/* Secondary Outline Pill with Smooth Scroll */}
            <button
              onClick={onExploreWork}
              className="btn btn-outline btn-lg"
              style={{ minWidth: '220px' }}
            >
              <span>EXPLORE SELECTED WORK</span>
              <ArrowDown size={17} />
            </button>
          </div>

          {/* PTGR Trust Bar / Highlight Metrics */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.25rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              paddingTop: '2.5rem',
              textAlign: 'left',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#93C5FD',
                  flexShrink: 0,
                }}
              >
                <Award size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#FFFFFF' }}>100% Bespoke</div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Zero generic templates</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#93C5FD',
                  flexShrink: 0,
                }}
              >
                <Zap size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#FFFFFF' }}>Sub-1.2s Speed</div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Modern high-perf code</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#93C5FD',
                  flexShrink: 0,
                }}
              >
                <ShieldCheck size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#FFFFFF' }}>Full IP Handover</div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Complete asset ownership</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#93C5FD',
                  flexShrink: 0,
                }}
              >
                <Globe size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#FFFFFF' }}>Addis & Global</div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Seamless delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
