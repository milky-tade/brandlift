import React from 'react';
import { servicesList } from '../data/services';
import {
  Share2,
  Code2,
  Palette,
  Search,
  TrendingUp,
  Compass,
  Video,
  Camera,
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'social-media': <Share2 size={24} color="#3B82F6" />,
    'web-dev': <Code2 size={24} color="#60A5FA" />,
    'graphic-design': <Palette size={24} color="var(--ptgr-crimson)" />,
    seo: <Search size={24} color="#10B981" />,
    'paid-ads': <TrendingUp size={24} color="#F59E0B" />,
    'brand-strategy': <Compass size={24} color="#8B5CF6" />,
    'content-creation': <Video size={24} color="#EC4899" />,
    'photo-video': <Camera size={24} color="#06B6D4" />,
  };

  return (
    <section
      id="services"
      className="section"
      style={{
        backgroundColor: '#0E223B',
        backgroundImage: 'radial-gradient(circle at 80% 20%, #163962 0%, #0E223B 70%)',
        color: '#FFFFFF',
        borderTop: '1px solid rgba(255, 255, 255, 0.12)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center" style={{ maxWidth: '820px', margin: '0 auto 4rem' }}>
          <div
            className="section-badge"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              color: '#93C5FD',
            }}
          >
            Core Disciplines
          </div>
          <h2
            className="section-title"
            style={{
              textTransform: 'uppercase',
              color: '#FFFFFF',
              letterSpacing: '-0.025em',
            }}
          >
            What We Engineer & Deliver
          </h2>
          <p
            className="section-subtitle"
            style={{
              color: '#94A3B8',
              fontWeight: 300,
            }}
          >
            Disciplined creative, technical, and strategic services designed to elevate commercial positioning and accelerate client acquisition.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="card card-interactive ptgr-service-card"
              style={{
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(15, 36, 62, 0.85)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                transition: 'all var(--transition-base)',
              }}
            >
              <div>
                {/* Header row with Icon and Arrow */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {iconMap[service.id]}
                  </div>

                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#93C5FD',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {service.category}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.22rem',
                    fontWeight: 800,
                    marginBottom: '0.75rem',
                    color: '#FFFFFF',
                    lineHeight: 1.25,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.92rem',
                    color: '#CBD5E1',
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  {service.valueProposition}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ptgr-service-card:hover {
          border-color: rgba(255, 255, 255, 0.28) !important;
          background-color: rgba(22, 57, 98, 0.95) !important;
          transform: translateY(-4px);
        }
      `}</style>
    </section>
  );
};
