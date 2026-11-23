import React from 'react';
import { Star, Quote, Building2, TrendingUp, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from './SectionHeader';

export const SocialProof: React.FC = () => {
  const { t, dir } = useLanguage();

  const clientBrands = [
    { name: 'صيدليات الأمل', enName: 'Al-Amal Pharmacy' },
    { name: 'كافيهات أورورا', enName: 'Aurora Specialty Coffee' },
    { name: 'مخازن الشروق للتوزيع', enName: 'Al-Shorouk Distribution' },
    { name: 'سوبرماركت المدينة', enName: 'Al-Madina Market' },
    { name: 'لاونج أرينا جيمينج', enName: 'Arena Gaming Lounge' },
    { name: 'أكاديمية فيوتشر سنتر', enName: 'Future Academy Center' },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#07151E] relative overflow-hidden border-t border-[#0A6F7A]/20 scroll-mt-24">
      {/* Background Glow */}
      <div className="absolute top-1/2 start-1/4 -translate-y-1/2 w-96 h-96 bg-[#0A6F7A]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={t.socialProof.badge}
          title={t.socialProof.title}
          highlight={t.socialProof.titleHighlight}
          subtitle={t.socialProof.subtitle}
        />

        {/* Metrics Banner */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#0B1C2E]/70 border border-[#0A6F7A]/30 backdrop-blur-sm flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#0A6F7A]/20 border border-[#2BB8B3]/30 flex items-center justify-center text-[#34D6BA]">
              <Building2 className="w-7 h-7" />
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white">{t.socialProof.clientsCount}</div>
              <div className="text-sm text-slate-400">{t.socialProof.clientsLabel}</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B1C2E]/70 border border-[#0A6F7A]/30 backdrop-blur-sm flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#0A6F7A]/20 border border-[#2BB8B3]/30 flex items-center justify-center text-[#34D6BA]">
              <TrendingUp className="w-7 h-7" />
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white">{t.socialProof.transactionsVolume}</div>
              <div className="text-sm text-slate-400">{t.socialProof.volumeLabel}</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B1C2E]/70 border border-[#0A6F7A]/30 backdrop-blur-sm flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#0A6F7A]/20 border border-[#2BB8B3]/30 flex items-center justify-center text-[#34D6BA]">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white">{t.socialProof.uptime}</div>
              <div className="text-sm text-slate-400">{t.socialProof.uptimeLabel}</div>
            </div>
          </div>
        </div>

        {/* Client Marquee Strip */}
        <div className="mt-12 py-6 border-y border-[#0A6F7A]/20 overflow-hidden relative">
          <div className="absolute inset-y-0 start-0 w-24 bg-gradient-to-r from-[#07151E] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 end-0 w-24 bg-gradient-to-l from-[#07151E] to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee flex gap-12 items-center">
            {[...clientBrands, ...clientBrands, ...clientBrands].map((b, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-5 py-2.5 rounded-lg bg-[#0B1C2E]/40 border border-[#0A6F7A]/20 text-slate-300 font-semibold text-sm whitespace-nowrap hover:text-white hover:border-[#2BB8B3]/40 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-[#2BB8B3]" />
                <span>{dir === 'rtl' ? b.name : b.enName}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.socialProof.testimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative p-7 rounded-2xl bg-gradient-to-b from-[#0B1C2E] to-[#07151E] border border-[#0A6F7A]/30 hover:border-[#2BB8B3]/60 transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_25px_rgba(0,0,0,0.3)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#0A6F7A]/40" />
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#0A6F7A]/20 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-sm">{item.name}</h4>
                  <p className="text-xs text-[#2BB8B3]">{item.role} — {item.business}</p>
                </div>
                <span className="text-xs text-slate-400 px-2 py-1 rounded bg-[#07151E] border border-slate-800">
                  {item.city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
