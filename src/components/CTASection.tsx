import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CTASectionProps {
  onOpenContact: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenContact }) => {
  const { t, lang } = useLanguage();

  const whatsappMessage =
    lang === 'ar'
      ? 'مرحباً، أود تجربة منظومة Logiq والحصول على عرض سعر مخصص لنشاطي.'
      : 'Hello, I would like to trial the Logiq system and request a custom quote.';

  const whatsappUrl = `https://wa.me/201000000000?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="relative py-24 bg-[#07151E] overflow-hidden scroll-mt-24">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glow Container */}
        <div className="relative rounded-3xl px-5 py-10 sm:p-14 bg-gradient-to-br from-[#0B1C2E] via-[#0E2436] to-[#0A6F7A]/30 border border-[#0A6F7A]/50 shadow-[0_0_60px_rgba(10,111,122,0.35)] text-center overflow-hidden">
          {/* Subtle light bursts */}
          <div className="absolute -top-24 -start-24 w-72 h-72 bg-[#34D6BA]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -end-24 w-72 h-72 bg-[#0A6F7A]/40 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07151E] border border-[#34D6BA]/40 text-[#34D6BA] text-xs font-semibold mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#34D6BA] animate-pulse" />
            <span>{t.cta.badge}</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            {t.cta.title}
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            {t.cta.subtitle}
          </p>

          {/* Dual Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <button
              onClick={onOpenContact}
              className="shine-effect w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#0A6F7A] via-[#1FA8A3] to-[#2BB8B3] hover:from-[#0B8593] hover:to-[#34D6BA] text-white font-bold text-base sm:text-lg shadow-[0_0_30px_rgba(43,184,179,0.4)] hover:shadow-[0_0_45px_rgba(52,214,186,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#34D6BA]"
            >
              <Sparkles className="w-5 h-5" />
              <span>{t.cta.btnPrimary}</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base sm:text-lg shadow-[0_0_30px_rgba(37,211,102,0.35)] hover:shadow-[0_0_45px_rgba(37,211,102,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 focus-visible:ring-2 focus-visible:ring-[#25D366]"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>{t.cta.btnWhatsapp}</span>
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-400 font-medium">
            {t.cta.whatsappNote}
          </p>
        </div>
      </div>
    </section>
  );
};
