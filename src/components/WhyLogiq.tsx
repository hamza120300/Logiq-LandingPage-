import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const WhyLogiq: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="why-logiq" className="relative py-24 bg-[#05131A] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E2436] border border-[#0A6F7A]/40 text-[#2BB8B3] text-xs font-semibold uppercase tracking-wider mb-4">
            {t.whyLogiq.badge}
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {t.whyLogiq.title}{' '}
            <span className="text-[#34D6BA] drop-shadow-[0_0_25px_rgba(52,214,186,0.5)]">
              {t.whyLogiq.titleHighlight}
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.whyLogiq.subtitle}
          </p>
        </div>

        {/* 4 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.whyLogiq.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-7 bg-[#0B1C2E]/80 border border-[#0A6F7A]/30 hover:border-[#2BB8B3]/60 transition-all duration-300 shadow-lg flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Metric Counter Badge */}
                <div className="inline-flex items-baseline gap-2 mb-4 px-3.5 py-1.5 rounded-lg bg-[#07151E] border border-[#0A6F7A]/40">
                  <span className="text-2xl font-extrabold text-[#34D6BA] font-mono">
                    {pillar.metric}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {pillar.metricLabel}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#34D6BA] transition-colors duration-200">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Decorative Accent Line */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-[#2BB8B3] font-semibold tracking-wide">
                  Logiq Standard Architecture
                </span>
                <span className="w-2 h-2 rounded-full bg-[#34D6BA]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
