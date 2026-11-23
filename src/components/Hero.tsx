import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const { t, dir } = useLanguage();

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Radial Glows & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Core Teal Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#0A6F7A]/25 rounded-full blur-[140px]" />
        {/* Mint Secondary Accent Glow */}
        <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-[#34D6BA]/15 rounded-full blur-[100px]" />
        {/* Subtle Geometric Circuit Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(43,184,179,0.08)_1px,transparent_1px)] [background-size:28px_28px] opacity-70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Top Feature Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E2436]/80 border border-[#0A6F7A]/50 text-slate-200 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(10,111,122,0.25)] animate-pulse">
          <span className="w-2 h-2 rounded-full bg-[#34D6BA] shadow-[0_0_8px_#34D6BA]" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] max-w-5xl mx-auto">
          {t.hero.titlePart1}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BB8B3] via-[#34D6BA] to-[#2BB8B3] drop-shadow-[0_0_35px_rgba(43,184,179,0.4)]">
            {t.hero.titleHighlight}
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          {t.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#0A6F7A] via-[#1FA8A3] to-[#2BB8B3] hover:from-[#0B8593] hover:to-[#34D6BA] text-white font-bold text-base sm:text-lg shadow-[0_0_25px_rgba(43,184,179,0.4)] hover:shadow-[0_0_35px_rgba(52,214,186,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {t.hero.ctaPrimary}
          </button>

          <a
            href="#solutions"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0E2436]/90 hover:bg-[#122D42] text-slate-200 hover:text-white border border-[#0A6F7A]/40 hover:border-[#2BB8B3]/60 font-semibold text-base sm:text-lg transition-all duration-300 backdrop-blur-sm shadow-md"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        {/* Social Proof / Trust Line */}
        <p className="mt-6 text-xs sm:text-sm text-slate-400 font-medium">
          {t.hero.trustedBy}
        </p>

        {/* Live System Preview / Mockup Card */}
        <div className="mt-14 relative max-w-4xl mx-auto rounded-2xl p-1 bg-gradient-to-b from-[#0A6F7A]/40 via-[#0E2436]/60 to-transparent shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <div className="rounded-2xl bg-[#07151E] p-4 sm:p-6 border border-[#0A6F7A]/30 overflow-hidden text-left" dir={dir}>
            {/* Top Mock Window Bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-slate-400 font-mono ms-2">Logiq OS v2.0 • Live POS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#34D6BA] animate-ping" />
                <span className="text-xs text-[#34D6BA] font-semibold">Online & Synced</span>
              </div>
            </div>

            {/* Quick Metrics Bar in Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-5">
              <div className="bg-[#0B1C2E]/80 border border-[#0A6F7A]/20 rounded-xl p-3">
                <div className="text-xs text-slate-400">{dir === 'rtl' ? 'إجمالي مبيعات اليوم' : "Today's Revenue"}</div>
                <div className="text-lg sm:text-xl font-bold text-white mt-1">EGP 42,850</div>
                <div className="text-[11px] text-[#34D6BA] font-medium mt-0.5">↑ +18.4% vs yesterday</div>
              </div>
              <div className="bg-[#0B1C2E]/80 border border-[#0A6F7A]/20 rounded-xl p-3">
                <div className="text-xs text-slate-400">{dir === 'rtl' ? 'عدد الفواتير المنفذة' : 'Completed Invoices'}</div>
                <div className="text-lg sm:text-xl font-bold text-white mt-1">314</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Avg 1.2s per ticket</div>
              </div>
              <div className="bg-[#0B1C2E]/80 border border-[#0A6F7A]/20 rounded-xl p-3">
                <div className="text-xs text-slate-400">{dir === 'rtl' ? 'الأصناف في المخزن' : 'Active Stock Items'}</div>
                <div className="text-lg sm:text-xl font-bold text-[#2BB8B3] mt-1">1,480 SKU</div>
                <div className="text-[11px] text-emerald-400 mt-0.5">Zero shortages</div>
              </div>
              <div className="bg-[#0B1C2E]/80 border border-[#0A6F7A]/20 rounded-xl p-3">
                <div className="text-xs text-slate-400">{dir === 'rtl' ? 'حالة الوردية' : 'Shift Status'}</div>
                <div className="text-lg sm:text-xl font-bold text-[#34D6BA] mt-1">Morning Shift</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Cashier: Ahmed R.</div>
              </div>
            </div>

            {/* Visual representation of high-speed POS transaction row */}
            <div className="bg-[#0B1C2E]/50 rounded-xl p-3 border border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#0A6F7A]/30 text-[#34D6BA] font-mono">#INV-8921</span>
                <span className="font-medium text-white">{dir === 'rtl' ? 'فاتورة بيع مباشر • كاشير 1' : 'Direct POS Ticket • Counter 1'}</span>
              </div>
              <div className="flex items-center gap-3 font-mono">
                <span className="text-slate-400">Barcode: 6221049281</span>
                <span className="text-[#34D6BA] font-bold">EGP 385.00</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold">PAID</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Stat Strip */}
        <div className="mt-14 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#0A6F7A]/20">
          <div className="flex items-center justify-center gap-4">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#34D6BA] drop-shadow-[0_0_10px_rgba(52,214,186,0.3)]">
              {t.hero.stat1Number}
            </span>
            <span className="text-sm text-slate-300 font-medium text-start">
              {t.hero.stat1Label}
            </span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#2BB8B3] drop-shadow-[0_0_10px_rgba(43,184,179,0.3)]">
              {t.hero.stat2Number}
            </span>
            <span className="text-sm text-slate-300 font-medium text-start">
              {t.hero.stat2Label}
            </span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <span className="text-3xl sm:text-4xl font-extrabold text-white">
              {t.hero.stat3Number}
            </span>
            <span className="text-sm text-slate-300 font-medium text-start">
              {t.hero.stat3Label}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
