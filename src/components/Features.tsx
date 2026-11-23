import React from 'react';
import { Smile, Layers, BarChart3, ShieldCheck, TrendingUp, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from './SectionHeader';

export const Features: React.FC = () => {
  const { t } = useLanguage();

  const getFeatureIcon = (id: string) => {
    switch (id) {
      case 'easy-to-use':
        return <Smile className="w-7 h-7 text-[#34D6BA]" />;
      case 'powerful-management':
        return <Layers className="w-7 h-7 text-[#2BB8B3]" />;
      case 'real-time-insights':
        return <BarChart3 className="w-7 h-7 text-[#34D6BA]" />;
      case 'secure-reliable':
        return <ShieldCheck className="w-7 h-7 text-[#2BB8B3]" />;
      case 'scalable':
        return <TrendingUp className="w-7 h-7 text-[#34D6BA]" />;
      case 'modern-tech':
        return <Cpu className="w-7 h-7 text-[#2BB8B3]" />;
      default:
        return <Layers className="w-7 h-7 text-[#2BB8B3]" />;
    }
  };

  return (
    <section id="features" className="relative py-24 bg-[#05131A] overflow-hidden scroll-mt-24">
      {/* Background soft glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 start-10 w-[500px] h-[500px] bg-[#0A6F7A]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 end-10 w-[500px] h-[500px] bg-[#34D6BA]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.features.badge}
          title={t.features.title}
          highlight={t.features.titleHighlight}
          subtitle={t.features.subtitle}
        />

        {/* Feature Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.features.items.map((feat, idx) => {
            const isFeatured = idx === 0 || idx === 3;
            return (
              <div
                key={feat.id}
                className={`relative rounded-2xl p-7 bg-[#0B1C2E]/80 hover:bg-[#0E2436] border border-[#0A6F7A]/30 hover:border-[#2BB8B3]/60 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(43,184,179,0.2)] hover:-translate-y-1 group flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-1 lg:col-span-1 bg-gradient-to-b from-[#0B1C2E] to-[#0E2436]' : ''
                }`}
              >
                <div>
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#07151E] border border-[#0A6F7A]/40 flex items-center justify-center group-hover:scale-110 group-hover:border-[#34D6BA]/60 transition-all duration-300 shadow-inner">
                      {getFeatureIcon(feat.id)}
                    </div>
                    {feat.badge && (
                      <span className="text-[11px] font-bold text-[#34D6BA] px-3 py-1 rounded-full bg-[#0A6F7A]/20 border border-[#2BB8B3]/30">
                        {feat.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#34D6BA] transition-colors duration-200">
                    {feat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-6 pt-4 border-t border-[#0A6F7A]/20 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[11px]">0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2BB8B3] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
