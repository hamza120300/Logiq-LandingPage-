import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FloatingWhatsApp: React.FC = () => {
  const { lang, dir } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  const whatsappMessage =
    lang === 'ar'
      ? 'مرحباً، أود الاستفسار عن منظومة Logiq لإدارة الأعمال ونقاط البيع.'
      : 'Hello, I would like to inquire about Logiq POS and business solutions.';

  const whatsappUrl = `https://wa.me/201000000000?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <aside
      aria-label="WhatsApp quick support"
      className="fixed bottom-5 end-5 z-40 animate-fadeIn"
      dir={dir}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={lang === 'ar' ? 'تواصل معنا عبر واتساب' : 'Chat with us on WhatsApp'}
        className="group relative flex items-center justify-center gap-2.5 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-[0_0_25px_rgba(37,211,102,0.45)] transition-all transform hover:scale-105 active:scale-95 focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366] flex-shrink-0" />
        <span className="hidden sm:inline font-bold">
          {lang === 'ar' ? 'تحدث معنا واتساب' : 'Chat on WhatsApp'}
        </span>
        {/* Glowing notification badge in corner */}
        <span className="absolute -top-1 -end-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
      </a>
    </aside>
  );
};
