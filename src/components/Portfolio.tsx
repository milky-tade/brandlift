import React, { useState } from 'react';
import { projects, projectCategories } from '../data/projects';
import type { ProjectItem, ProjectCategory } from '../data/projects';
import { Play, ExternalLink, ArrowUpRight, Eye } from 'lucide-react';

interface PortfolioProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'All Work' | ProjectCategory>('All Work');

  const filteredProjects =
    activeFilter === 'All Work'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Featured project for hero showcase card
  const featuredProject =
    activeFilter === 'All Work'
      ? projects.find((p) => p.featured) || projects[0]
      : null;

  const standardProjects =
    activeFilter === 'All Work' && featuredProject
      ? filteredProjects.filter((p) => p.id !== featuredProject.id)
      : filteredProjects;

  return (
    <section
      id="work"
      className="section"
      style={{
        backgroundColor: 'var(--bg-canvas)',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '840px' }}>
          <div className="section-badge">Selected Portfolio</div>
          <h2 className="section-title">
            Featured Creative & Digital Work
          </h2>
          <p className="section-subtitle">
            A curated monograph of visual identities, commercial print systems, cinematic short-form video reels, and high-performance digital platforms.
          </p>
        </div>

        {/* PTGR Style Filter Dock (Rounded Pill Container) */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '3rem' }}>
          <div
            style={{
              backgroundColor: 'var(--bg-pill-dock)',
              padding: '0.4rem',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--border-subtle)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              flexWrap: 'wrap',
              boxShadow: 'var(--shadow-sm)',
            }}
            role="tablist"
            aria-label="Filter projects by category"
          >
            {projectCategories.map((category) => {
              const isActive = activeFilter === category;
              const count =
                category === 'All Work'
                  ? projects.length
                  : projects.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  role="tab"
                  aria-selected={isActive}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.55rem',
                    padding: '0.65rem 1.4rem',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.88rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    backgroundColor: isActive ? 'var(--ptgr-navy-primary)' : 'transparent',
                    color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                    boxShadow: isActive ? '0 4px 14px rgba(22, 57, 98, 0.3)' : 'none',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-primary)';
                      e.currentTarget.style.backgroundColor = 'rgba(22, 57, 98, 0.08)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <span>{category}</span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '0.12rem 0.5rem',
                      borderRadius: 'var(--radius-pill)',
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.22)' : 'rgba(0, 0, 0, 0.07)',
                      color: isActive ? '#FFFFFF' : 'var(--text-muted)',
                      fontWeight: 600,
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* PTGR Featured Split Showcase Card (Shown on "All Work") */}
        {featuredProject && (
          <div
            className="card card-interactive"
            onClick={() => onSelectProject(featuredProject)}
            style={{
              marginBottom: '3.5rem',
              borderRadius: 'var(--radius-2xl)',
              padding: 'clamp(1.5rem, 3.5vw, 2.75rem)',
              backgroundColor: 'var(--bg-card)',
              border: '1.5px solid var(--border-subtle)',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 'clamp(2rem, 4vw, 3.5rem)',
                alignItems: 'center',
              }}
            >
              {/* Media Preview Box */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  backgroundColor: '#0E2744',
                  aspectRatio: '16/10',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <img
                  src={featuredProject.thumbnailUrl}
                  alt={featuredProject.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="featured-media-img"
                />

                {/* Overlay Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.4rem 0.95rem',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'rgba(11, 27, 48, 0.85)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                  }}
                >
                  <Eye size={13} color="#93C5FD" />
                  <span>Featured Work</span>
                </div>

                {/* Hover CTA Indicator */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.25rem',
                    right: '1.25rem',
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'var(--ptgr-crimson)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    boxShadow: '0 4px 14px rgba(138, 21, 21, 0.4)',
                  }}
                >
                  <ArrowUpRight size={22} />
                </div>
              </div>

              {/* Right Content */}
              <div>
                <div
                  style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--ptgr-crimson)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {featuredProject.category} • {featuredProject.client}
                </div>

                <h3
                  style={{
                    fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)',
                    fontWeight: 800,
                    marginBottom: '1rem',
                    lineHeight: 1.15,
                  }}
                >
                  {featuredProject.title}
                </h3>

                <p
                  style={{
                    fontSize: '1.05rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem',
                  }}
                >
                  {featuredProject.description}
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '2rem',
                  }}
                >
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '0.3rem 0.85rem',
                        borderRadius: 'var(--radius-pill)',
                        backgroundColor: 'var(--bg-surface-elevated)',
                        color: 'var(--text-muted)',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="btn btn-secondary"
                  style={{
                    pointerEvents: 'none', // Handled by outer card click
                  }}
                >
                  <span>VIEW FULL CASE ASSET</span>
                  <ArrowUpRight size={17} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PTGR 3-Column Media Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {standardProjects.map((project) => (
            <div
              key={project.id}
              className="card card-interactive ptgr-project-card"
              onClick={() => onSelectProject(project)}
              style={{
                borderRadius: 'var(--radius-xl)',
                padding: '1.25rem',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                overflow: 'hidden',
              }}
            >
              {/* Media Thumbnail Container with PTGR Diagonal Arrow Badge */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  backgroundColor: '#0E2744',
                  aspectRatio: project.aspectRatio === '9/16' ? '9/14' : '16/10',
                  marginBottom: '1.25rem',
                }}
              >
                {project.mediaType === 'image' && (
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 360ms ease',
                    }}
                    className="card-media-preview"
                  />
                )}

                {project.mediaType === 'video' && (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#091524',
                      position: 'relative',
                    }}
                  >
                    <img
                      src={project.thumbnailUrl}
                      alt={project.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 360ms ease',
                      }}
                      className="card-media-preview"
                    />
                    {/* Play Badge Icon */}
                    <div
                      style={{
                        position: 'absolute',
                        width: '56px',
                        height: '56px',
                        borderRadius: 'var(--radius-pill)',
                        backgroundColor: 'var(--ptgr-crimson)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        boxShadow: '0 6px 20px rgba(138, 21, 21, 0.5)',
                        transition: 'transform 200ms ease',
                        pointerEvents: 'none',
                      }}
                      className="card-play-button"
                    >
                      <Play size={24} fill="#FFFFFF" style={{ marginLeft: '3px' }} />
                    </div>
                  </div>
                )}

                {project.mediaType === 'website' && (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #0B1B30 0%, #163962 100%)',
                      color: '#FFFFFF',
                      padding: '2rem',
                      textAlign: 'center',
                    }}
                  >
                    <ExternalLink size={32} color="#93C5FD" style={{ marginBottom: '0.65rem' }} />
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.22rem', color: '#FFFFFF' }}>
                      {project.title}
                    </div>
                    {project.projectUrl && (
                      <div style={{ fontSize: '0.88rem', color: '#93C5FD', marginTop: '0.4rem', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                        {project.projectUrl.replace('https://', '')} ↗
                      </div>
                    )}
                  </div>
                )}

                {/* PTGR Diagonal Corner Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0.85rem',
                    right: '0.85rem',
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'rgba(11, 27, 48, 0.85)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    transition: 'transform 250ms ease, background-color 250ms ease',
                  }}
                  className="ptgr-arrow-badge"
                >
                  <ArrowUpRight size={18} />
                </div>

                {/* Category Pill Tag */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.85rem',
                    left: '0.85rem',
                    padding: '0.3rem 0.8rem',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'rgba(11, 27, 48, 0.85)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Card Meta Content */}
              <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    marginBottom: '0.5rem',
                    lineHeight: 1.25,
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                    marginBottom: '1rem',
                    flexGrow: 1,
                  }}
                >
                  {project.deliverable}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '0.2rem 0.65rem',
                        borderRadius: 'var(--radius-pill)',
                        backgroundColor: 'var(--bg-surface-elevated)',
                        color: 'var(--text-muted)',
                        fontSize: '0.74rem',
                        fontFamily: 'var(--font-mono)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ptgr-project-card:hover .card-media-preview {
          transform: scale(1.05);
        }
        .ptgr-project-card:hover .ptgr-arrow-badge {
          background-color: var(--ptgr-crimson) !important;
          transform: scale(1.1) rotate(45deg);
        }
        .ptgr-project-card:hover .card-play-button {
          transform: scale(1.12);
        }
      `}</style>
    </section>
  );
};
