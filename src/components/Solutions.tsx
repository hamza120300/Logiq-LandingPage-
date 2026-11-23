import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectorIcon } from './SectorIcons';

interface SolutionsProps {
  onSelectSector: (sectorId: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onSelectSector }) => {
  const { t, dir } = useLanguage();
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="solutions" className="relative py-24 bg-[#07151E] overflow-hidden">
      {/* Background radial ambiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#0A6F7A]/15 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E2436] border border-[#0A6F7A]/40 text-[#34D6BA] text-xs font-semibold uppercase tracking-wider mb-4">
            {t.solutions.badge}
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {t.solutions.title}{' '}
            <span className="text-[#2BB8B3] drop-shadow-[0_0_25px_rgba(43,184,179,0.5)]">
              {t.solutions.titleHighlight}
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.solutions.subtitle}
          </p>
        </div>

        {/* 6 Commercial Sector Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.solutions.items.map((item) => {
            const isHovered = activeCard === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative rounded-2xl p-6 sm:p-7 bg-[#0B1C2E]/90 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isHovered
                    ? 'border-[#2BB8B3] bg-[#0E2436] shadow-[0_10px_35px_rgba(43,184,179,0.25)] -translate-y-1.5'
                    : 'border-[#0A6F7A]/30 hover:border-[#0A6F7A]/60 shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
                }`}
                onClick={() => onSelectSector(item.id)}
              >
                {/* Glow accent corner */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-[#34D6BA]/10 rounded-full blur-2xl transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div>
                  {/* Top: Sector Icon & Title */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 rounded-2xl bg-[#07151E] border border-[#0A6F7A]/40 flex items-center justify-center group-hover:scale-105 group-hover:border-[#34D6BA]/50 transition-all duration-300 shadow-inner">
                      <SectorIcon
                        type={item.id as 'pharmacy' | 'warehouse' | 'retail' | 'cafe' | 'gaming' | 'center'}
                        className="w-12 h-12 sm:w-14 sm:h-14"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#34D6BA] transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#2BB8B3] font-medium mt-0.5">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2 mb-6">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#0A6F7A]/30 border border-[#34D6BA]/60 flex items-center justify-center text-[#34D6BA]">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#2BB8B3] group-hover:text-[#34D6BA]">
                  <span>{dir === 'rtl' ? 'اكتشف إمكانيات النظام' : 'Explore Platform Features'}</span>
                  <span className="transform transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-x-1 rtl:group-hover:-translate-x-1">
                    {dir === 'rtl' ? '←' : '→'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
