import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const HowItWorks: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="how-it-works" className="relative py-24 bg-[#07151E] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E2436] border border-[#0A6F7A]/40 text-[#34D6BA] text-xs font-semibold uppercase tracking-wider mb-4">
            {t.howItWorks.badge}
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {t.howItWorks.title}{' '}
            <span className="text-[#2BB8B3] drop-shadow-[0_0_25px_rgba(43,184,179,0.5)]">
              {t.howItWorks.titleHighlight}
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 3 Step Connected Cards */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-[#0A6F7A]/20 via-[#34D6BA]/40 to-[#0A6F7A]/20 -translate-y-12 z-0" />

          {t.howItWorks.steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative z-10 rounded-2xl p-8 bg-[#0B1C2E]/90 border border-[#0A6F7A]/30 hover:border-[#34D6BA]/60 transition-all duration-300 shadow-xl flex flex-col group hover:-translate-y-1"
            >
              {/* Number Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0A6F7A] to-[#2BB8B3] flex items-center justify-center text-white font-extrabold font-mono text-xl shadow-[0_0_20px_rgba(43,184,179,0.35)] group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <span className="text-xs font-mono font-semibold text-slate-500 uppercase">
                  {dir === 'rtl' ? `المرحلة ${idx + 1}` : `Phase ${idx + 1}`}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#34D6BA] transition-colors duration-200">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
