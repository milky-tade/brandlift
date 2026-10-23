import React, { useState } from 'react';
import { getWhatsAppUrl } from '../config/contact';
import { MessageSquare, X } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  const handleClick = () => {
    const url = getWhatsAppUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '8px',
      }}
    >
      {!tooltipDismissed && (
        <div
          style={{
            backgroundColor: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-medium)',
            padding: '0.5rem 0.85rem',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-md)',
            fontSize: '0.8rem',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            maxWidth: '220px',
            animation: 'fadeIn 0.3s ease',
          }}
        >
          <span>Chat directly on WhatsApp</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setTooltipDismissed(true);
            }}
            style={{
              cursor: 'pointer',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label="Dismiss WhatsApp hint"
          >
            <X size={12} />
          </button>
        </div>
      )}

      <button
        onClick={handleClick}
        style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 24px rgba(37, 211, 102, 0.45)',
          cursor: 'pointer',
          transition: 'transform var(--transition-fast)',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageSquare size={26} />
      </button>
    </div>
  );
};
