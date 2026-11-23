import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, LogIn, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LogiqLogo } from './LogiqLogo';

interface NavbarProps {
  onOpenLogin: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLogin, onOpenContact }) => {
  const { t, lang, toggleLang, dir } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section spy
  useEffect(() => {
    const sections = ['home', 'solutions', 'features', 'how-it-works', 'why-logiq', 'testimonials'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#home', id: 'home', label: t.nav.home },
    { href: '#solutions', id: 'solutions', label: t.nav.solutions },
    { href: '#features', id: 'features', label: t.nav.features },
    { href: '#how-it-works', id: 'how-it-works', label: t.nav.howItWorks },
    { href: '#why-logiq', id: 'why-logiq', label: t.nav.whyLogiq },
    { href: '#testimonials', id: 'testimonials', label: t.nav.testimonials },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#07151E]/92 backdrop-blur-md border-b border-[#0A6F7A]/30 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Scroll Progress Bar at very top */}
        <div
          className="absolute top-0 start-0 h-[2.5px] bg-gradient-to-r from-[#0A6F7A] via-[#2BB8B3] to-[#34D6BA] transition-all duration-150 ease-out z-50"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#home" aria-label="Logiq Home" className="flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-[#34D6BA] rounded-lg">
              <LogiqLogo size={scrolled ? 'sm' : 'md'} />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors duration-200 py-1 ${
                      isActive ? 'text-[#34D6BA] font-semibold' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#34D6BA] rounded-full shadow-[0_0_8px_#34D6BA]" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Controls */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Switcher */}
              <button
                onClick={toggleLang}
                aria-label={`Switch language to ${lang === 'ar' ? 'English' : 'Arabic'}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0E2436] hover:bg-[#0A6F7A]/30 border border-[#0A6F7A]/40 text-xs font-semibold text-slate-200 hover:text-[#34D6BA] transition-all duration-200 shadow-sm focus-visible:ring-2 focus-visible:ring-[#34D6BA]"
              >
                <Globe className="w-3.5 h-3.5 text-[#2BB8B3]" />
                <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
              </button>

              {/* Login Button */}
              <button
                onClick={onOpenLogin}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#34D6BA] rounded-lg"
              >
                <LogIn className="w-4 h-4 text-[#2BB8B3]" />
                <span>{t.nav.login}</span>
              </button>

              {/* Primary Get Started CTA */}
              <button
                onClick={onOpenContact}
                className="shine-effect relative group px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0A6F7A] to-[#2BB8B3] hover:from-[#0B8593] hover:to-[#34D6BA] text-white text-sm font-semibold shadow-[0_0_20px_rgba(43,184,179,0.35)] hover:shadow-[0_0_30px_rgba(52,214,186,0.5)] transition-all duration-300 transform active:scale-95 focus-visible:ring-2 focus-visible:ring-[#34D6BA]"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t.nav.getStarted}
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={toggleLang}
                aria-label="Toggle language"
                className="px-2.5 py-1 rounded-full bg-[#0E2436] border border-[#0A6F7A]/40 text-xs font-bold text-slate-200"
              >
                {lang === 'ar' ? 'EN' : 'عربي'}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-drawer"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                className="p-2 rounded-xl bg-[#0E2436] border border-[#0A6F7A]/40 text-slate-200 hover:text-[#34D6BA] focus-visible:ring-2 focus-visible:ring-[#34D6BA]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 lg:hidden bg-black/75 backdrop-blur-md animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
          dir={dir}
        >
          <div
            className="fixed top-16 inset-x-4 p-6 bg-[#0B1C2E] border border-[#0A6F7A]/40 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl bg-[#07151E] hover:bg-[#0A6F7A]/20 border border-[#0A6F7A]/20 text-slate-200 font-medium text-sm flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[#34D6BA]">→</span>
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-[#0A6F7A]/30 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full py-3 rounded-xl bg-[#07151E] border border-[#0A6F7A]/40 text-slate-200 font-semibold text-sm flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4 text-[#2BB8B3]" />
                {t.nav.login}
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0A6F7A] to-[#2BB8B3] text-white font-bold text-sm shadow-[0_0_20px_rgba(43,184,179,0.35)] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                {t.nav.getStarted}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
