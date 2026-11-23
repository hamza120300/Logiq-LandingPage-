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
      className="fixed bottom-6 end-6 z-40 animate-fadeIn"
      dir={dir}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={lang === 'ar' ? 'تواصل معنا عبر واتساب' : 'Chat with us on WhatsApp'}
        className="group flex items-center gap-3 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-[0_0_25px_rgba(37,211,102,0.4)] transition-all transform hover:scale-105 active:scale-95 focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        <span className="hidden sm:inline font-bold">
          {lang === 'ar' ? 'تحدث معنا واتساب' : 'Chat on WhatsApp'}
        </span>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>
      </a>
    </aside>
  );
};
