import React from 'react';
import { Clock, Zap, CheckCheck, Headphones } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from './SectionHeader';

export const WhyLogiq: React.FC = () => {
  const { t } = useLanguage();

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Clock className="w-5 h-5 text-[#34D6BA]" />;
      case 1:
        return <Zap className="w-5 h-5 text-[#2BB8B3]" />;
      case 2:
        return <CheckCheck className="w-5 h-5 text-[#34D6BA]" />;
      case 3:
        return <Headphones className="w-5 h-5 text-[#2BB8B3]" />;
      default:
        return <Zap className="w-5 h-5 text-[#34D6BA]" />;
    }
  };

  return (
    <section id="why-logiq" className="relative py-24 bg-[#05131A] overflow-hidden scroll-mt-24">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 end-10 w-[550px] h-[550px] bg-[#0A6F7A]/12 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.whyLogiq.badge}
          title={t.whyLogiq.title}
          highlight={t.whyLogiq.titleHighlight}
          subtitle={t.whyLogiq.subtitle}
        />

        {/* 4 Value Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.whyLogiq.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-7 bg-[#0B1C2E]/80 border border-[#0A6F7A]/30 hover:border-[#2BB8B3]/60 transition-all duration-300 shadow-lg flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Metric Counter Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-baseline gap-2 px-3.5 py-1.5 rounded-xl bg-[#07151E] border border-[#0A6F7A]/40">
                    <span className="text-2xl font-black text-[#34D6BA] font-mono">
                      {pillar.metric}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {pillar.metricLabel}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#07151E] border border-[#0A6F7A]/30">
                    {getPillarIcon(idx)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#34D6BA] transition-colors duration-200">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Localized Architecture Badge Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-[#2BB8B3] font-semibold tracking-wide">
                  {t.whyLogiq.architectureBadge}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#34D6BA] shadow-[0_0_8px_#34D6BA]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
