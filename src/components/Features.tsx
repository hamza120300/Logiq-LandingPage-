import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Features: React.FC = () => {
  const { t } = useLanguage();

  // Distinctive SVG iconography matching enterprise SaaS aesthetics
  const getIcon = (id: string) => {
    switch (id) {
      case 'easy':
        return (
          <svg className="w-6 h-6 text-[#34D6BA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'management':
        return (
          <svg className="w-6 h-6 text-[#2BB8B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        );
      case 'insights':
        return (
          <svg className="w-6 h-6 text-[#34D6BA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'security':
        return (
          <svg className="w-6 h-6 text-[#2BB8B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'scalable':
        return (
          <svg className="w-6 h-6 text-[#34D6BA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
      case 'offline':
        return (
          <svg className="w-6 h-6 text-[#2BB8B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="features" className="relative py-24 bg-[#05131A] overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#0A6F7A]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#34D6BA]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E2436] border border-[#0A6F7A]/40 text-[#2BB8B3] text-xs font-semibold uppercase tracking-wider mb-4">
            {t.features.badge}
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {t.features.title}{' '}
            <span className="text-[#34D6BA] drop-shadow-[0_0_25px_rgba(52,214,186,0.5)]">
              {t.features.titleHighlight}
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.features.subtitle}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.features.items.map((feat) => (
            <div
              key={feat.id}
              className="relative rounded-2xl p-7 bg-[#0B1C2E]/70 hover:bg-[#0E2436] border border-[#0A6F7A]/25 hover:border-[#2BB8B3]/50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_10px_30px_rgba(43,184,179,0.2)] group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-[#07151E] border border-[#0A6F7A]/40 flex items-center justify-center mb-5 group-hover:border-[#34D6BA]/60 group-hover:scale-110 transition-all duration-300 shadow-inner">
                {getIcon(feat.id)}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-[#34D6BA] transition-colors duration-200">
                {feat.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
