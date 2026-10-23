import React from 'react';
import { contactConfig } from '../config/contact';
import { CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="section"
      style={{
        backgroundColor: 'var(--bg-canvas)',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            backgroundColor: 'var(--bg-card)',
            border: '1.5px solid var(--border-subtle)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'clamp(2.5rem, 5vw, 4.5rem)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          {/* Eyebrow */}
          <div className="section-badge" style={{ marginBottom: '1.25rem' }}>
            <Sparkles size={14} />
            <span>YOUR TRUSTED STRATEGIC PARTNER</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              marginBottom: '3rem',
            }}
          >
            {/* Left Story Column */}
            <div>
              <h2
                style={{
                  fontSize: 'clamp(2.1rem, 4.2vw, 3.1rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.12,
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                }}
              >
                Design Backed by Purpose. Code Backed by Performance.
              </h2>

              <p
                style={{
                  fontSize: '1.08rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '1.25rem',
                }}
              >
                {contactConfig.brandName} operates as an elite digital studio bridging uncompromising creative direction with disciplined technical execution. We partner with ambitious enterprises and emerging founders across Ethiopia and internationally who want their brands to command commercial authority.
              </p>

              <p
                style={{
                  fontSize: '0.98rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                }}
              >
                We intentionally eliminate bureaucratic agency bloat. Every project is led by senior craftspeople dedicated to measurable brand distinction, sub-second web experiences, and visual storytelling that converts.
              </p>
            </div>

            {/* Right Highlight Box (PTGR Navy Accent Box) */}
            <div
              style={{
                backgroundColor: 'var(--ptgr-navy-primary)',
                backgroundImage: 'radial-gradient(circle at 90% 10%, #1D4B7F 0%, #0E2744 80%)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#93C5FD',
                    fontWeight: 700,
                    display: 'block',
                    marginBottom: '0.75rem',
                  }}
                >
                  Operating Philosophy
                </span>

                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    marginBottom: '1rem',
                    color: '#FFFFFF',
                    lineHeight: 1.25,
                  }}
                >
                  Direct senior partnership with zero middlemen.
                </h3>

                <p
                  style={{
                    fontSize: '0.94rem',
                    color: '#CBD5E1',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem',
                    fontWeight: 300,
                  }}
                >
                  You work directly with the creative directors and engineers building your assets. From initial sketches to final deployment, precision and speed remain paramount.
                </p>
              </div>

              {/* Quick Metrics */}
              <div
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                  paddingTop: '1.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}
              >
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#FFFFFF' }}>100%</div>
                  <div style={{ fontSize: '0.76rem', color: '#94A3B8', fontFamily: 'var(--font-mono)' }}>IP Handover</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#FFFFFF' }}>&lt;1.2s</div>
                  <div style={{ fontSize: '0.76rem', color: '#94A3B8', fontFamily: 'var(--font-mono)' }}>Load Speed</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#FFFFFF' }}>4K+</div>
                  <div style={{ fontSize: '0.76rem', color: '#94A3B8', fontFamily: 'var(--font-mono)' }}>Video Fidelity</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Core Pillars */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.75rem',
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '2.5rem',
            }}
          >
            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'rgba(22, 57, 98, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: 'var(--ptgr-navy-primary)',
                }}
              >
                <CheckCircle2 size={18} />
              </div>
              <div>
                <strong style={{ fontSize: '1rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.35rem' }}>
                  Creative Thinking
                </strong>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Original identity systems, refined typography, and layout pacing that command real market pricing power.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#10B981',
                }}
              >
                <Zap size={18} />
              </div>
              <div>
                <strong style={{ fontSize: '1rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.35rem' }}>
                  High-Speed Engineering
                </strong>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Sub-1.2s mobile loading, zero bloat, and modern accessible web architectures ready to scale.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'rgba(138, 21, 21, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: 'var(--ptgr-crimson)',
                }}
              >
                <ShieldCheck size={18} />
              </div>
              <div>
                <strong style={{ fontSize: '1rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.35rem' }}>
                  100% Client Ownership
                </strong>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Full intellectual property, production source files, and web code belong completely to your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
