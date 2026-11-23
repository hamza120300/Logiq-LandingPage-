import React from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectorIcon } from './SectorIcons';
import { SectionHeader } from './SectionHeader';

interface SolutionsProps {
  onSelectSector: (sectorId: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onSelectSector }) => {
  const { t, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section id="solutions" className="relative py-24 bg-[#07151E] overflow-hidden scroll-mt-24">
      {/* Background radial ambiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#0A6F7A]/15 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.solutions.badge}
          title={t.solutions.title}
          highlight={t.solutions.titleHighlight}
          subtitle={t.solutions.subtitle}
        />

        {/* 6 Commercial Sector Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.solutions.items.map((item) => {
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectSector(item.id)}
                className="group relative rounded-2xl p-6 sm:p-7 bg-[#0B1C2E]/90 border border-[#0A6F7A]/30 hover:border-[#2BB8B3] hover:bg-[#0E2436] transition-all duration-300 flex flex-col justify-between text-start cursor-pointer hover:-translate-y-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(43,184,179,0.25)] focus-visible:ring-2 focus-visible:ring-[#34D6BA] focus-visible:outline-none"
              >
                {/* Glow accent corner matching sector accent */}
                <div
                  className="absolute top-0 end-0 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: `${item.accentColor}25` }}
                />

                <div>
                  {/* Top: Sector Icon & Title */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="p-3 rounded-2xl bg-[#07151E] border border-[#0A6F7A]/40 flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-inner"
                      style={{ borderColor: `${item.accentColor}60` }}
                    >
                      <SectorIcon
                        type={item.id as 'pharmacy' | 'warehouse' | 'retail' | 'cafe' | 'gaming' | 'center'}
                        className="w-12 h-12 sm:w-14 sm:h-14"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#34D6BA] transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p
                        className="text-xs sm:text-sm font-semibold mt-0.5"
                        style={{ color: item.accentColor }}
                      >
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 mb-6">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: item.accentColor }}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-[#0A6F7A]/25 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#2BB8B3] group-hover:text-[#34D6BA]">
                  <span>{t.solutions.cardCta}</span>
                  <ArrowIcon className="w-4 h-4 transition-transform duration-200 ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
