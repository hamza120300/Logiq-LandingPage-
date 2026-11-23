import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LogiqLogo } from './LogiqLogo';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#040C12] border-t border-[#0A6F7A]/20 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <LogiqLogo size="md" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E2436] border border-[#0A6F7A]/40 text-xs text-[#34D6BA]">
                <span className="w-2 h-2 rounded-full bg-[#34D6BA]" />
                Logiq POS & ERP System
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-[#34D6BA] transition-colors duration-200">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#34D6BA] transition-colors duration-200">
                  {t.nav.solutions}
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#34D6BA] transition-colors duration-200">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#34D6BA] transition-colors duration-200">
                  {t.nav.howItWorks}
                </a>
              </li>
              <li>
                <a href="#why-logiq" className="hover:text-[#34D6BA] transition-colors duration-200">
                  {t.nav.whyLogiq}
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions List */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.solutionsTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {t.solutions.items.map((item) => (
                <li key={item.id}>
                  <a href="#solutions" className="hover:text-[#34D6BA] transition-colors duration-200">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-slate-300">
                <span className="p-2 rounded-lg bg-[#0E2436] border border-[#0A6F7A]/30 text-[#34D6BA]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span dir="ltr">+20 100 000 0000</span>
              </li>

              <li className="flex items-center gap-3 text-slate-300">
                <span className="p-2 rounded-lg bg-[#0E2436] border border-[#0A6F7A]/30 text-[#34D6BA]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span>sales@logiq-eg.com</span>
              </li>

              <li className="flex items-center gap-3 text-slate-300">
                <span className="p-2 rounded-lg bg-[#0E2436] border border-[#0A6F7A]/30 text-[#34D6BA]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span>Cairo, Egypt</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
