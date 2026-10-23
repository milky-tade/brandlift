import React, { useState, useEffect } from 'react';
import { contactConfig, getWhatsAppUrl } from '../config/contact';
import { useTheme } from '../context/useTheme';
import { Sun, Moon, Menu, X, MessageSquare } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsAppUrl = getWhatsAppUrl("Hello Brandlift, I'd like to discuss a project.");

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          width: '100%',
          transition: 'all 260ms cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: scrolled ? 'var(--nav-backdrop)' : 'rgba(11, 27, 48, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(255, 255, 255, 0.06)',
          boxShadow: scrolled ? '0 8px 30px rgba(7, 18, 32, 0.4)' : 'none',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '4.75rem',
          }}
        >
          {/* Logo / Wordmark (Swiss PTGR Corporate Style) */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
            aria-label={`${contactConfig.brandName} Home`}
          >
            {/* PTGR-style Swiss emblem box */}
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'var(--ptgr-crimson)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 10px var(--ptgr-crimson-glow)',
                color: '#FFFFFF',
                fontWeight: 900,
                fontSize: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              B
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
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
            </div>
          </a>

          {/* Desktop Navigation Links with PTGR Hover Underline */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2.25rem',
            }}
            className="desktop-nav"
          >
            <style>{`
              @media (min-width: 860px) {
                .desktop-nav { display: flex !important; }
              }
              .ptgr-nav-link {
                position: relative;
                font-family: var(--font-display);
                font-size: 0.88rem;
                font-weight: 600;
                color: rgba(255, 255, 255, 0.82);
                text-transform: uppercase;
                letter-spacing: 0.06em;
                padding: 0.5rem 0;
                transition: color 200ms ease;
                background: none;
                border: none;
                cursor: pointer;
              }
              .ptgr-nav-link:hover {
                color: #FFFFFF;
              }
              .ptgr-nav-link::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0%;
                height: 2px;
                background-color: var(--ptgr-crimson);
                transition: width 240ms cubic-bezier(0.16, 1, 0.3, 1);
              }
              .ptgr-nav-link:hover::after {
                width: 100%;
              }
            `}</style>

            <button onClick={() => scrollTo('work')} className="ptgr-nav-link">
              Portfolio
            </button>
            <button onClick={() => scrollTo('services')} className="ptgr-nav-link">
              Services
            </button>
            <button onClick={() => scrollTo('about')} className="ptgr-nav-link">
              About
            </button>
            <button onClick={() => scrollTo('contact')} className="ptgr-nav-link">
              Contact
            </button>
          </nav>

          {/* Right Header Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius-pill)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
                cursor: 'pointer',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              }}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* PTGR Signature Pill CTA: Crimson "Start Project" */}
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              style={{
                display: 'none',
              }}
              id="nav-cta-btn"
            >
              <MessageSquare size={15} />
              <span>START PROJECT</span>
            </a>
            <style>{`
              @media (min-width: 640px) {
                #nav-cta-btn { display: inline-flex !important; }
              }
            `}</style>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius-pill)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
                cursor: 'pointer',
              }}
              className="mobile-hamburger"
            >
              <style>{`
                @media (min-width: 860px) {
                  .mobile-hamburger { display: none !important; }
                }
              `}</style>
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (PTGR Dark Overlay Style) */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'fixed',
              top: '4.75rem',
              left: 0,
              width: '100%',
              backgroundColor: 'rgba(11, 27, 48, 0.98)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              zIndex: 49,
            }}
          >
            <button
              onClick={() => scrollTo('work')}
              style={{
                textAlign: 'left',
                fontSize: '1.15rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                color: '#FFFFFF',
                padding: '0.65rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => scrollTo('services')}
              style={{
                textAlign: 'left',
                fontSize: '1.15rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                color: '#FFFFFF',
                padding: '0.65rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              SERVICES
            </button>
            <button
              onClick={() => scrollTo('about')}
              style={{
                textAlign: 'left',
                fontSize: '1.15rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                color: '#FFFFFF',
                padding: '0.65rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollTo('contact')}
              style={{
                textAlign: 'left',
                fontSize: '1.15rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                color: '#FFFFFF',
                padding: '0.65rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              CONTACT
            </button>

            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: '0.5rem', width: '100%' }}
            >
              <MessageSquare size={18} />
              <span>START PROJECT (WHATSAPP)</span>
            </a>
          </div>
        )}
      </header>
    </>
  );
};
