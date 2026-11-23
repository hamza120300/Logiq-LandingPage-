import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LogiqLogo } from './LogiqLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSector?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, defaultSector }) => {
  const { dir } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState(defaultSector || 'retail');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div
        className="relative z-10 w-full max-w-lg rounded-3xl bg-[#0B1C2E] border border-[#0A6F7A]/50 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(10,111,122,0.25)] text-left"
        dir={dir}
      >
        <button
          onClick={onClose}
          className="absolute top-5 end-5 p-2 rounded-full bg-[#07151E] text-slate-400 hover:text-white border border-[#0A6F7A]/30 hover:border-[#34D6BA]/50 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <LogiqLogo size="md" />
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            {dir === 'rtl' ? 'طلب عرض توضيحي واستشارة مجانية' : 'Request a Free Demo & Consultation'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1.5">
            {dir === 'rtl'
              ? 'اترك بياناتك وسيتواصل معك مستشار لوجيك التقني خلال ساعة واحدة'
              : 'Leave your details and a Logiq product specialist will contact you within 1 hour'}
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center animate-fadeIn">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-base font-bold text-white">
              {dir === 'rtl' ? 'تم استلام طلبك بنجاح!' : 'Request Received Successfully!'}
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              {dir === 'rtl' ? 'سيتواصل معك فريق لوجيك فوراً عبر الواتساب أو الهاتف.' : 'Our team will reach out via phone or WhatsApp shortly.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {dir === 'rtl' ? 'الاسم بالكامل' : 'Full Name'}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={dir === 'rtl' ? 'مثال: أحمد محمد' : 'e.g. John Doe'}
                className="w-full px-4 py-3 rounded-xl bg-[#07151E] border border-[#0A6F7A]/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#34D6BA] focus:ring-1 focus:ring-[#34D6BA]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {dir === 'rtl' ? 'رقم الهاتف / الواتساب' : 'Phone / WhatsApp Number'}
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+20 100 000 0000"
                className="w-full px-4 py-3 rounded-xl bg-[#07151E] border border-[#0A6F7A]/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#34D6BA] focus:ring-1 focus:ring-[#34D6BA]"
                dir="ltr"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {dir === 'rtl' ? 'نوع النشاط التجاري' : 'Business Sector'}
              </label>
              <select
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#07151E] border border-[#0A6F7A]/40 text-white text-sm focus:outline-none focus:border-[#34D6BA]"
              >
                <option value="retail">{dir === 'rtl' ? 'محل تجاري / سوبر ماركت / ملابس' : 'Retail / Supermarket / Clothing'}</option>
                <option value="pharmacy">{dir === 'rtl' ? 'صيدلية ومستلزمات طبية' : 'Pharmacy & Medical'}</option>
                <option value="warehouse">{dir === 'rtl' ? 'مخزن وتجارة جملة' : 'Warehouse & Wholesale'}</option>
                <option value="cafe">{dir === 'rtl' ? 'كافيه أو مطعم' : 'Café or Restaurant'}</option>
                <option value="gaming">{dir === 'rtl' ? 'بلايستيشن ولاونج ترفيهي' : 'PlayStation & Gaming Lounge'}</option>
                <option value="center">{dir === 'rtl' ? 'سنتر تعليمي أو أكاديمية' : 'Educational Center or Academy'}</option>
                <option value="other">{dir === 'rtl' ? 'نشاط تجاري آخر' : 'Other Business'}</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-[#0A6F7A] to-[#2BB8B3] hover:from-[#0B8593] hover:to-[#34D6BA] text-white font-bold text-sm shadow-[0_0_20px_rgba(43,184,179,0.35)] transition-all duration-300"
            >
              {dir === 'rtl' ? 'إرسال الطلب الآن' : 'Submit Request'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
