import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface CTASectionProps {
  onOpenContact: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenContact }) => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-24 bg-[#07151E] overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glow Container */}
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[#0B1C2E] via-[#0E2436] to-[#0A6F7A]/30 border border-[#0A6F7A]/50 shadow-[0_0_50px_rgba(10,111,122,0.3)] text-center overflow-hidden">
          {/* Subtle light bursts */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#34D6BA]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#0A6F7A]/40 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07151E] border border-[#34D6BA]/40 text-[#34D6BA] text-xs font-semibold uppercase tracking-wider mb-6">
            {t.cta.badge}
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            {t.cta.title}
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.cta.subtitle}
          </p>

          {/* Dual Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#0A6F7A] to-[#2BB8B3] hover:from-[#0B8593] hover:to-[#34D6BA] text-white font-bold text-base sm:text-lg shadow-[0_0_30px_rgba(43,184,179,0.4)] hover:shadow-[0_0_45px_rgba(52,214,186,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {t.cta.btnPrimary}
            </button>

            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#07151E]/90 hover:bg-[#0E2436] text-slate-200 hover:text-white border border-[#0A6F7A]/50 hover:border-[#34D6BA]/60 font-semibold text-base sm:text-lg transition-all duration-300"
            >
              {t.cta.btnSecondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
