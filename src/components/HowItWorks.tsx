import React from 'react';
import { Compass, Sliders, Rocket, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from './SectionHeader';

export const HowItWorks: React.FC = () => {
  const { t, dir } = useLanguage();

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-6 h-6 text-[#34D6BA]" />;
      case 1:
        return <Sliders className="w-6 h-6 text-[#2BB8B3]" />;
      case 2:
        return <Rocket className="w-6 h-6 text-[#34D6BA]" />;
      default:
        return <Check className="w-6 h-6 text-[#34D6BA]" />;
    }
  };

  return (
    <section id="how-it-works" className="relative py-24 bg-[#07151E] overflow-hidden scroll-mt-24">
      {/* Background radial ambiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0A6F7A]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.howItWorks.badge}
          title={t.howItWorks.title}
          highlight={t.howItWorks.titleHighlight}
          subtitle={t.howItWorks.subtitle}
        />

        {/* 3 Step Cards with anchored connecting bar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line on desktop anchored at the exact height of the badges */}
          <div
            className="hidden md:block absolute top-10 start-16 end-16 h-0.5 bg-gradient-to-r from-[#0A6F7A]/30 via-[#34D6BA]/50 to-[#0A6F7A]/30 pointer-events-none z-0"
            aria-hidden="true"
          />

          {t.howItWorks.steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative z-10 rounded-2xl p-8 bg-[#0B1C2E]/90 border border-[#0A6F7A]/30 hover:border-[#34D6BA]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Header Row: Number Badge & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0A6F7A] to-[#2BB8B3] flex items-center justify-center text-white font-black font-mono text-xl shadow-[0_0_20px_rgba(43,184,179,0.35)] group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <div className="p-3 rounded-xl bg-[#07151E] border border-[#0A6F7A]/40 flex items-center justify-center">
                    {getStepIcon(idx)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#34D6BA] transition-colors duration-200">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                  {step.description}
                </p>
              </div>

              {/* Step Detail Footer */}
              <div className="pt-4 border-t border-[#0A6F7A]/25 flex items-center justify-between text-xs text-[#2BB8B3] font-semibold">
                <span>{step.detail}</span>
                <span className="font-mono text-slate-400">
                  {dir === 'rtl' ? `المرحلة 0${idx + 1}` : `Phase 0${idx + 1}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
