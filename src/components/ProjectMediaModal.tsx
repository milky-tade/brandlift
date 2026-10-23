import React, { useEffect } from 'react';
import type { ProjectItem } from '../data/projects';
import { getWhatsAppUrl } from '../config/contact';
import { X, ExternalLink, MessageSquare, Sparkles, Play } from 'lucide-react';

interface ProjectMediaModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectMediaModal: React.FC<ProjectMediaModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const whatsAppUrl = getWhatsAppUrl(
    `Hello Brandlift, I saw your work on "${project.title}" and would like to discuss a similar project.`
  );

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        backgroundColor: 'rgba(7, 18, 32, 0.96)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(1rem, 3vw, 2.5rem)',
        overflowY: 'auto',
        isolation: 'isolate',
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        style={{
          width: '100%',
          maxWidth: '960px',
          backgroundColor: 'var(--bg-surface)',
          border: '1.5px solid var(--border-medium)',
          borderRadius: 'var(--radius-2xl)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.75)',
          overflow: 'hidden',
          position: 'relative',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          transform: 'translateZ(0)',
          WebkitTransform: 'translateZ(0)',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-in"
      >
        {/* Modal Top Header */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--bg-surface-elevated)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                padding: '0.3rem 0.85rem',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'var(--ptgr-navy-primary)',
                color: '#FFFFFF',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {project.category}
            </span>
            {project.client && (
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                {project.client}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
            }}
            aria-label="Close project preview"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div style={{ padding: 'clamp(1.5rem, 3.5vw, 2.25rem)', overflowY: 'auto' }}>
          {/* Media Player / Display Box */}
          <div
            style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              backgroundColor: '#050D18',
              border: '1px solid var(--border-subtle)',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '340px',
              position: 'relative',
              contain: 'paint layout',
              transform: 'translateZ(0)',
              WebkitTransform: 'translateZ(0)',
            }}
          >
            {project.mediaType === 'video' && project.videoUrl ? (
              <video
                key={project.id}
                poster={project.thumbnailUrl}
                controls
                autoPlay
                playsInline
                preload="auto"
                controlsList="nodownload"
                style={{
                  width: '100%',
                  maxHeight: '560px',
                  objectFit: 'contain',
                  display: 'block',
                  backgroundColor: '#000000',
                  borderRadius: 'var(--radius-xl)',
                  transform: 'translateZ(0)',
                  WebkitTransform: 'translateZ(0)',
                  willChange: 'transform',
                  backfaceVisibility: 'hidden',
                }}
              >
                <source src={project.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : project.fullImageUrl || project.thumbnailUrl ? (
              <img
                key={project.id}
                src={project.fullImageUrl || project.thumbnailUrl}
                alt={project.title}
                style={{
                  width: '100%',
                  maxHeight: '560px',
                  objectFit: 'contain',
                  display: 'block',
                  backgroundColor: '#081424',
                }}
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  minHeight: '340px',
                  padding: '3rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #0B1B30 0%, #163962 100%)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  <Sparkles size={36} color="#93C5FD" />
                </div>
                <h4 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                  {project.title}
                </h4>
                <p style={{ color: '#CBD5E1', fontSize: '0.92rem', maxWidth: '440px', fontFamily: 'var(--font-mono)' }}>
                  {project.deliverable}
                </p>
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ marginTop: '1.5rem' }}
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Title & Narrative */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h2 id="modal-project-title" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.3rem)', fontWeight: 800, marginBottom: '0.65rem' }}>
              {project.title}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.65 }}>
              {project.description}
            </p>
          </div>

          {/* Deliverable & Client attribution */}
          <div
            style={{
              padding: '1.2rem',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '1.75rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: '1rem',
              fontSize: '0.88rem',
            }}
          >
            <div>
              <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.74rem', textTransform: 'uppercase', display: 'block' }}>
                Deliverable
              </span>
              <strong style={{ color: 'var(--text-primary)' }}>{project.deliverable}</strong>
            </div>
            {project.client && (
              <div>
                <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.74rem', textTransform: 'uppercase', display: 'block' }}>
                  Client / Partner
                </span>
                <strong style={{ color: 'var(--text-primary)' }}>{project.client}</strong>
              </div>
            )}
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {project.tags.map((t) => (
              <span
                key={t}
                style={{
                  padding: '0.3rem 0.75rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.76rem',
                  fontFamily: 'var(--font-mono)',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div
            style={{
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '1.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <span>Visit Live Platform</span>
                  <ExternalLink size={15} />
                </a>
              )}

              {project.mediaType === 'video' && project.videoUrl && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <Play size={14} />
                  <span>Open Video In New Tab</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>

            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageSquare size={16} />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
