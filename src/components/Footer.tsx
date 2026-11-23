import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LogiqLogo } from './LogiqLogo';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#040C12] border-t border-[#0A6F7A]/30 pt-16 pb-12 text-slate-400">
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
                Logiq POS & Cloud Architecture
              </span>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Logiq on Facebook"
                className="w-9 h-9 rounded-lg bg-[#0E2436] border border-[#0A6F7A]/30 hover:border-[#34D6BA] hover:text-[#34D6BA] flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Logiq on LinkedIn"
                className="w-9 h-9 rounded-lg bg-[#0E2436] border border-[#0A6F7A]/30 hover:border-[#34D6BA] hover:text-[#34D6BA] flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="https://wa.me/201000000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Logiq WhatsApp Support"
                className="w-9 h-9 rounded-lg bg-[#0E2436] border border-[#0A6F7A]/30 hover:border-[#25D366] hover:text-[#25D366] flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
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
              <li>
                <a href="#testimonials" className="hover:text-[#34D6BA] transition-colors duration-200">
                  {t.nav.testimonials}
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
                  <a href="#solutions" className="hover:text-[#34D6BA] transition-colors duration-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2BB8B3]" />
                    <span>{item.title}</span>
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
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={`tel:${t.footer.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-[#34D6BA] transition-colors group"
                >
                  <span className="p-2 rounded-lg bg-[#0E2436] border border-[#0A6F7A]/30 text-[#34D6BA] group-hover:border-[#34D6BA]">
                    <Phone className="w-4 h-4" />
                  </span>
                  <span dir="ltr" className="font-semibold">{t.footer.phone}</span>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${t.footer.email}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-[#34D6BA] transition-colors group"
                >
                  <span className="p-2 rounded-lg bg-[#0E2436] border border-[#0A6F7A]/30 text-[#34D6BA] group-hover:border-[#34D6BA]">
                    <Mail className="w-4 h-4" />
                  </span>
                  <span>{t.footer.email}</span>
                </a>
              </li>

              <li className="flex items-center gap-3 text-slate-300">
                <span className="p-2 rounded-lg bg-[#0E2436] border border-[#0A6F7A]/30 text-[#34D6BA]">
                  <MapPin className="w-4 h-4" />
                </span>
                <span>{t.footer.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#0A6F7A]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{t.footer.copyright}</p>
          <p className="text-slate-400">{t.footer.rightsReserved}</p>
        </div>
      </div>
    </footer>
  );
};
