import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LogiqLogo } from './LogiqLogo';

interface NavbarProps {
  onOpenLogin: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLogin, onOpenContact }) => {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#solutions', label: t.nav.solutions },
    { href: '#features', label: t.nav.features },
    { href: '#how-it-works', label: t.nav.howItWorks },
    { href: '#why-logiq', label: t.nav.whyLogiq },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07151E]/90 backdrop-blur-md border-b border-[#0A6F7A]/30 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <LogiqLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-[#34D6BA] transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0E2436] hover:bg-[#0A6F7A]/30 border border-[#0A6F7A]/40 text-xs font-semibold text-slate-200 hover:text-[#34D6BA] transition-all duration-200 shadow-sm"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
            </button>

            {/* Login Button */}
            <button
              onClick={onOpenLogin}
              className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-white transition-colors duration-200"
            >
              {t.nav.login}
            </button>

            {/* Primary Get Started CTA */}
            <button
              onClick={onOpenContact}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0A6F7A] to-[#2BB8B3] hover:from-[#0B8593] hover:to-[#34D6BA] text-white text-sm font-semibold shadow-[0_0_20px_rgba(43,184,179,0.35)] hover:shadow-[0_0_30px_rgba(52,214,186,0.5)] transition-all duration-300 transform active:scale-95"
            >
              <span className="relative z-10">{t.nav.getStarted}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Mobile Lang Button */}
            <button
              onClick={toggleLang}
              className="px-2.5 py-1 rounded-full bg-[#0E2436] border border-[#0A6F7A]/40 text-xs font-bold text-slate-200"
            >
              {lang === 'ar' ? 'EN' : 'عربي'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0E2436] text-slate-300 hover:text-white border border-[#0A6F7A]/30 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07151E]/95 backdrop-blur-xl border-b border-[#0A6F7A]/30 px-6 pt-4 pb-6 space-y-4 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-[#34D6BA] py-2 border-b border-slate-800/60"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-2.5 rounded-xl bg-[#0E2436] border border-[#0A6F7A]/40 text-sm font-semibold text-slate-200 text-center"
            >
              {t.nav.login}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0A6F7A] to-[#2BB8B3] text-white text-sm font-bold text-center shadow-lg"
            >
              {t.nav.getStarted}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
