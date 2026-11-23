import React from 'react';

interface SectorIconProps {
  type: 'pharmacy' | 'warehouse' | 'retail' | 'cafe' | 'gaming' | 'center';
  className?: string;
}

export const SectorIcon: React.FC<SectorIconProps> = ({ type, className = 'w-16 h-16' }) => {
  switch (type) {
    case 'pharmacy':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="pillGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4B72" />
              <stop offset="100%" stopColor="#FF1E56" />
            </linearGradient>
            <linearGradient id="pillGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD166" />
              <stop offset="100%" stopColor="#FF9F1C" />
            </linearGradient>
            <filter id="pillShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#FF1E56" floodOpacity="0.3" />
            </filter>
          </defs>
          <g transform="rotate(-40 50 50)" filter="url(#pillShadow)">
            {/* Top half */}
            <path d="M50 20 C64 20 74 30 74 44 L74 50 L26 50 L26 44 C26 30 36 20 50 20 Z" fill="url(#pillGrad1)" />
            {/* Bottom half */}
            <path d="M26 50 L74 50 L74 56 C74 70 64 80 50 80 C36 80 26 70 26 56 Z" fill="url(#pillGrad2)" />
            {/* Highlight bubble */}
            <ellipse cx="60" cy="34" rx="4" ry="6" fill="#FFFFFF" opacity="0.65" transform="rotate(-15 60 34)" />
          </g>
        </svg>
      );

    case 'warehouse':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="boxTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2A670" />
              <stop offset="100%" stopColor="#C68953" />
            </linearGradient>
            <linearGradient id="boxLeft" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#B37440" />
              <stop offset="100%" stopColor="#8F5425" />
            </linearGradient>
            <linearGradient id="boxRight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9E6230" />
              <stop offset="100%" stopColor="#753F18" />
            </linearGradient>
          </defs>
          {/* Top face */}
          <polygon points="50,18 82,34 50,50 18,34" fill="url(#boxTop)" />
          {/* Left face */}
          <polygon points="18,34 50,50 50,82 18,66" fill="url(#boxLeft)" />
          {/* Right face */}
          <polygon points="50,50 82,34 82,66 50,82" fill="url(#boxRight)" />
          {/* Packaging Tape */}
          <polygon points="46,18 54,22 54,82 46,78" fill="#D49A62" opacity="0.75" />
          <polygon points="32,25 40,29 68,43 60,39" fill="#D49A62" opacity="0.6" />
        </svg>
      );

    case 'retail':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="storeRoof" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF5C7A" />
              <stop offset="100%" stopColor="#E02E4E" />
            </linearGradient>
          </defs>
          {/* Sign board 24H */}
          <rect x="34" y="16" width="32" height="13" rx="3" fill="#1E293B" stroke="#818CF8" strokeWidth="1.5" />
          <text x="50" y="26" textAnchor="middle" fill="#A5B4FC" fontSize="8" fontWeight="bold" fontFamily="sans-serif">24 H</text>
          {/* Awning */}
          <path d="M18 32 L82 32 L86 44 L14 44 Z" fill="url(#storeRoof)" />
          {/* Awning stripes */}
          <path d="M25 32 L27 44 M38 32 L40 44 M50 32 L50 44 M62 32 L60 44 M75 32 L73 44" stroke="#FFF" strokeWidth="2.5" opacity="0.4" />
          {/* Store body */}
          <rect x="20" y="44" width="60" height="38" fill="#334155" />
          {/* Glass window */}
          <rect x="52" y="52" width="22" height="22" rx="2" fill="#38BDF8" opacity="0.8" />
          <line x1="52" y1="63" x2="74" y2="63" stroke="#0F172A" strokeWidth="1.5" />
          {/* Door */}
          <rect x="26" y="52" width="18" height="30" rx="2" fill="#0EA5E9" />
          <rect x="36" y="65" width="2" height="5" rx="1" fill="#FFF" />
        </svg>
      );

    case 'cafe':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="coffeeDark" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#5C3D2E" />
              <stop offset="100%" stopColor="#2E170E" />
            </radialGradient>
          </defs>
          {/* Saucer */}
          <ellipse cx="50" cy="74" rx="36" ry="10" fill="#CBD5E1" />
          <ellipse cx="50" cy="72" rx="30" ry="7" fill="#E2E8F0" />
          {/* Cup body */}
          <path d="M26 38 C26 66 40 70 50 70 C60 70 74 66 74 38 Z" fill="#F8FAFC" />
          {/* Cup handle */}
          <path d="M72 42 C82 42 84 58 72 60" stroke="#F8FAFC" strokeWidth="5" strokeLinecap="round" fill="none" />
          {/* Coffee surface */}
          <ellipse cx="50" cy="38" rx="22" ry="7" fill="url(#coffeeDark)" />
          <ellipse cx="50" cy="38" rx="19" ry="5" fill="#4A2810" opacity="0.6" />
          {/* Steam wisps */}
          <path d="M42 28 C40 22 46 18 44 12" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <path d="M52 26 C50 20 56 16 54 10" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <path d="M60 28 C58 22 64 18 62 12" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        </svg>
      );

    case 'gaming':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="controllerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#6D28D9" />
            </linearGradient>
          </defs>
          {/* Gamepad body */}
          <path
            d="M24 38 C28 26 72 26 76 38 C84 50 88 74 76 80 C68 84 62 70 50 70 C38 70 32 84 24 80 C12 74 16 50 24 38 Z"
            fill="url(#controllerGrad)"
          />
          {/* D-Pad (Left) */}
          <rect x="30" y="44" width="12" height="4" rx="1" fill="#EDE9FE" />
          <rect x="34" y="40" width="4" height="12" rx="1" fill="#EDE9FE" />
          {/* Action Buttons (Right) */}
          <circle cx="66" cy="42" r="2.2" fill="#34D399" />
          <circle cx="72" cy="46" r="2.2" fill="#F87171" />
          <circle cx="66" cy="50" r="2.2" fill="#60A5FA" />
          <circle cx="60" cy="46" r="2.2" fill="#FBBF24" />
          {/* Thumbsticks */}
          <circle cx="42" cy="58" r="5" fill="#4C1D95" stroke="#C4B5FD" strokeWidth="1.5" />
          <circle cx="58" cy="58" r="5" fill="#4C1D95" stroke="#C4B5FD" strokeWidth="1.5" />
        </svg>
      );

    case 'center':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Book 1 (Blue) */}
          <g transform="translate(42, 34) rotate(0)">
            <rect x="0" y="0" width="34" height="44" rx="3" fill="#0284C7" />
            <rect x="0" y="0" width="5" height="44" rx="2" fill="#0369A1" />
            <rect x="4" y="4" width="28" height="36" fill="#F8FAFC" />
            <line x1="8" y1="12" x2="26" y2="12" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="8" y1="18" x2="22" y2="18" stroke="#94A3B8" strokeWidth="1.5" />
          </g>
          {/* Book 2 (Red) */}
          <g transform="translate(30, 26) rotate(-8)">
            <rect x="0" y="0" width="34" height="44" rx="3" fill="#E11D48" />
            <rect x="0" y="0" width="5" height="44" rx="2" fill="#BE123C" />
            <rect x="4" y="4" width="28" height="36" fill="#FFF1F2" />
            <line x1="8" y1="12" x2="24" y2="12" stroke="#FDA4AF" strokeWidth="1.5" />
          </g>
          {/* Book 3 (Lime/Green) */}
          <g transform="translate(18, 20) rotate(-16)">
            <rect x="0" y="0" width="34" height="44" rx="3" fill="#10B981" />
            <rect x="0" y="0" width="5" height="44" rx="2" fill="#059669" />
            <rect x="4" y="4" width="28" height="36" fill="#ECFDF5" />
            <line x1="8" y1="12" x2="24" y2="12" stroke="#6EE7B7" strokeWidth="1.5" />
          </g>
        </svg>
      );
  }
};
