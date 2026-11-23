import React, { useState, useEffect } from 'react';
import { Play, Sparkles, ArrowRight, ArrowLeft, Activity, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CountUp } from './CountUp';
import { VideoModal } from './VideoModal';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const { t, dir } = useLanguage();
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [liveTransactions, setLiveTransactions] = useState([
    { id: 1042, time: '12:44:10', item: t.hero.mockup.sampleItem1, amount: 245, method: 'Visa / POS' },
    { id: 1041, time: '12:43:55', item: t.hero.mockup.sampleItem2, amount: 110, method: 'Cash' },
    { id: 1040, time: '12:43:18', item: t.hero.mockup.sampleItem3, amount: 620, method: 'InstaPay' },
  ]);
  const [ticketCount, setTicketCount] = useState(314);

  // Periodically slide in a new simulated transaction
  useEffect(() => {
    const items = [
      t.hero.mockup.sampleItem1,
      t.hero.mockup.sampleItem2,
      t.hero.mockup.sampleItem3,
    ];
    const methods = ['Visa', 'Cash', 'InstaPay', 'Meeza'];

    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      const randomItem = items[Math.floor(Math.random() * items.length)];
      const randomMethod = methods[Math.floor(Math.random() * methods.length)];
      const randomAmount = Math.floor(Math.random() * 450) + 75;

      setLiveTransactions((prev) => [
        {
          id: prev[0].id + 1,
          time: timeStr,
          item: randomItem,
          amount: randomAmount,
          method: randomMethod,
        },
        prev[0],
        prev[1],
      ]);

      setTicketCount((c) => c + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, [t.hero.mockup]);

  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <>
      <section id="home" className="relative min-h-[94vh] flex items-center justify-center pt-32 pb-20 overflow-hidden scroll-mt-24">
        {/* Background Radial Glows & Drifting Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Drifting Ambient Orb 1 */}
          <div className="animate-float-slow absolute top-1/4 start-1/4 w-[600px] h-[450px] bg-[#0A6F7A]/25 rounded-full blur-[150px]" />
          {/* Drifting Ambient Orb 2 */}
          <div className="animate-float-reverse absolute top-1/3 end-1/4 w-[400px] h-[400px] bg-[#34D6BA]/18 rounded-full blur-[130px]" />
          {/* Subtle Geometric Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(43,184,179,0.08)_1px,transparent_1px)] [background-size:28px_28px] opacity-70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          {/* Top Feature Pill Badge (Subtle dot pulse only) */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E2436]/90 border border-[#0A6F7A]/60 text-slate-200 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(10,111,122,0.3)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D6BA] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34D6BA]" />
            </span>
            <span>{t.hero.badge}</span>
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.12] max-w-5xl mx-auto">
            {t.hero.titlePart1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BB8B3] via-[#34D6BA] to-[#2BB8B3] drop-shadow-[0_0_35px_rgba(43,184,179,0.45)]">
              {t.hero.titleHighlight}
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons + Video Demo Trigger */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <button
              onClick={onOpenContact}
              className="shine-effect w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#0A6F7A] via-[#1FA8A3] to-[#2BB8B3] hover:from-[#0B8593] hover:to-[#34D6BA] text-white font-bold text-base sm:text-lg shadow-[0_0_25px_rgba(43,184,179,0.4)] hover:shadow-[0_0_35px_rgba(52,214,186,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[#34D6BA]"
            >
              <span className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                {t.hero.ctaPrimary}
              </span>
            </button>

            <button
              onClick={() => setVideoModalOpen(true)}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#0E2436]/90 hover:bg-[#122D42] text-slate-200 hover:text-white border border-[#0A6F7A]/50 hover:border-[#2BB8B3]/80 font-semibold text-base sm:text-lg transition-all duration-300 backdrop-blur-sm shadow-md flex items-center justify-center gap-2.5 focus-visible:ring-2 focus-visible:ring-[#34D6BA]"
            >
              <span className="w-7 h-7 rounded-full bg-[#0A6F7A]/40 border border-[#34D6BA]/50 flex items-center justify-center text-[#34D6BA]">
                <Play className="w-3.5 h-3.5 fill-[#34D6BA] ms-0.5" />
              </span>
              <span>{t.hero.watchDemo}</span>
            </button>

            <a
              href="#solutions"
              className="w-full sm:w-auto px-6 py-4 rounded-xl text-slate-300 hover:text-[#34D6BA] font-semibold text-base flex items-center justify-center gap-1.5 transition-colors group"
            >
              <span>{t.hero.ctaSecondary}</span>
              <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </a>
          </div>

          {/* Social Proof Line */}
          <p className="mt-8 text-xs sm:text-sm text-slate-400 font-medium flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34D6BA]" />
            {t.hero.trustedBy}
          </p>

          {/* Live System Preview / Interactive Mockup Card */}
          <div className="mt-14 relative max-w-4xl mx-auto rounded-2xl p-1 bg-gradient-to-b from-[#0A6F7A]/50 via-[#0E2436]/70 to-transparent shadow-[0_20px_70px_rgba(0,0,0,0.7)]">
            <div className="rounded-2xl bg-[#07151E] p-4 sm:p-6 border border-[#0A6F7A]/40 overflow-hidden text-start" dir={dir}>
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-slate-400 font-mono ms-2">
                    Logiq POS • {t.hero.mockup.terminalTitle}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D6BA] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34D6BA]" />
                  </span>
                  <span className="text-xs text-[#34D6BA] font-semibold">
                    {t.hero.mockup.onlineStatus}
                  </span>
                </div>
              </div>

              {/* Quick Metrics Bar in Preview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-5">
                <div className="bg-[#0B1C2E]/90 border border-[#0A6F7A]/30 rounded-xl p-3 relative overflow-hidden">
                  <div className="text-xs text-slate-400">{t.hero.mockup.todaySales}</div>
                  <div className="text-xl sm:text-2xl font-black text-white mt-1">
                    <CountUp end={42850} suffix={` ${t.hero.mockup.currency}`} />
                  </div>
                  <div className="text-[11px] text-[#34D6BA] font-semibold mt-0.5 flex items-center gap-1">
                    <Activity className="w-3 h-3" />
                    <span>+18.4%</span>
                  </div>
                </div>

                <div className="bg-[#0B1C2E]/90 border border-[#0A6F7A]/30 rounded-xl p-3">
                  <div className="text-xs text-slate-400">{t.hero.mockup.cashier}</div>
                  <div className="text-xl sm:text-2xl font-black text-white mt-1">
                    {ticketCount}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{t.hero.mockup.avgSpeed}</div>
                </div>

                <div className="bg-[#0B1C2E]/90 border border-[#0A6F7A]/30 rounded-xl p-3">
                  <div className="text-xs text-slate-400">{dir === 'rtl' ? 'الأصناف النشطة' : 'Active Items'}</div>
                  <div className="text-xl sm:text-2xl font-black text-[#2BB8B3] mt-1">1,480 SKU</div>
                  <div className="text-[11px] text-emerald-400 mt-0.5 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>{dir === 'rtl' ? 'مطابقة 100%' : '100% Synced'}</span>
                  </div>
                </div>

                <div className="bg-[#0B1C2E]/90 border border-[#0A6F7A]/30 rounded-xl p-3">
                  <div className="text-xs text-slate-400">{dir === 'rtl' ? 'سرعة النظام' : 'Engine Latency'}</div>
                  <div className="text-xl sm:text-2xl font-black text-[#34D6BA] mt-1">12 ms</div>
                  <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-[#34D6BA]" />
                    <span>{t.hero.mockup.liveIndicator}</span>
                  </div>
                </div>
              </div>

              {/* Live Sliding Transactions List */}
              <div className="bg-[#0B1C2E]/90 border border-[#0A6F7A]/30 rounded-xl p-3 sm:p-4">
                <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-3">
                  <span>{t.hero.mockup.recentTransactions}</span>
                  <span className="text-[#34D6BA] flex items-center gap-1 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#34D6BA] animate-pulse" />
                    {t.hero.mockup.liveIndicator}
                  </span>
                </div>

                <div className="space-y-2">
                  {liveTransactions.map((tx) => (
                    <div
                      key={tx.id}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-[#07151E] border border-slate-800/80 hover:border-[#0A6F7A]/50 transition-all text-xs animate-fadeIn"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-slate-400">#{tx.id}</span>
                        <span className="text-white font-medium">{tx.item}</span>
                        <span className="hidden sm:inline text-slate-400 font-mono text-[11px]">{tx.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-slate-400 text-[11px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                          {tx.method}
                        </span>
                        <span className="font-bold text-white">
                          {tx.amount} {t.hero.mockup.currency}
                        </span>
                        <span className="text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2 py-0.5 rounded text-[11px] font-semibold">
                          {t.hero.mockup.paid}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 3-Stat Metric Strip */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-5 rounded-2xl bg-[#0B1C2E]/70 border border-[#0A6F7A]/30 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2BB8B3] to-[#34D6BA]">
                {t.hero.stat1Number}
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                {t.hero.stat1Label}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B1C2E]/70 border border-[#0A6F7A]/30 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2BB8B3] to-[#34D6BA]">
                {t.hero.stat2Number}
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                {t.hero.stat2Label}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B1C2E]/70 border border-[#0A6F7A]/30 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2BB8B3] to-[#34D6BA]">
                {t.hero.stat3Number}
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                {t.hero.stat3Label}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 60-Second Video Demo Modal */}
      <VideoModal isOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)} />
    </>
  );
};
