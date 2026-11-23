import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, Send, Building, Phone, User, MessageSquare, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LogiqLogo } from './LogiqLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSector?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, defaultSector }) => {
  const { t, dir } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState(defaultSector || 'retail');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const sectorOptions = [
    { id: 'retail', ar: 'محل تجاري / سوبر ماركت', en: 'Retail & Supermarket', color: '#2BB8B3' },
    { id: 'pharmacy', ar: 'صيدلية ومستلزمات طبية', en: 'Pharmacy & Medical', color: '#34D6BA' },
    { id: 'warehouse', ar: 'مخزن وتجارة جملة', en: 'Warehouse & Wholesale', color: '#F59E0B' },
    { id: 'cafe', ar: 'كافيه أو مطعم', en: 'Café or Restaurant', color: '#F43F5E' },
    { id: 'gaming', ar: 'بلايستيشن ولاونج', en: 'PlayStation & Lounge', color: '#A855F7' },
    { id: 'center', ar: 'سنتر تعليمي وأكاديمية', en: 'Education Center', color: '#10B981' },
    { id: 'other', ar: 'نشاط تجاري آخر', en: 'Other Business Type', color: '#94A3B8' },
  ];

  const selectedOption = sectorOptions.find((opt) => opt.id === businessType) || sectorOptions[0];

  // Synchronize defaultSector whenever modal opens or selected sector changes
  useEffect(() => {
    if (defaultSector) {
      setBusinessType(defaultSector);
    }
  }, [defaultSector, isOpen]);

  // Click outside listener for custom dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  // Auto-scroll when opened so the whole list is 100% visible
  useEffect(() => {
    if (dropdownOpen && dropdownRef.current) {
      dropdownRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [dropdownOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (dropdownOpen) {
          setDropdownOpen(false);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, dropdownOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    }, 800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative z-10 w-full max-w-lg rounded-3xl bg-[#0B1C2E] border border-[#0A6F7A]/50 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(10,111,122,0.3)] text-start max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        dir={dir}
      >
        <button
          onClick={onClose}
          className="absolute top-5 end-5 p-2 rounded-full bg-[#07151E] text-slate-400 hover:text-white border border-[#0A6F7A]/30 hover:border-[#34D6BA]/50 transition-colors focus-visible:ring-2 focus-visible:ring-[#34D6BA]"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <LogiqLogo size="md" />
          </div>
          <h3 id="contact-title" className="text-2xl font-bold text-white tracking-tight">
            {t.contactModal.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1.5 max-w-md mx-auto">
            {t.contactModal.subtitle}
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center animate-fadeIn flex flex-col items-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-3 animate-bounce" />
            <h4 className="text-lg font-bold text-white mb-1">
              {t.contactModal.successTitle}
            </h4>
            <p className="text-xs text-slate-300 max-w-sm">
              {t.contactModal.successMessage}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#2BB8B3]" />
                <span>{t.contactModal.nameLabel}</span>
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.contactModal.namePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-[#07151E] border border-[#0A6F7A]/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#34D6BA] focus:ring-1 focus:ring-[#34D6BA] transition-all"
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#2BB8B3]" />
                <span>{t.contactModal.phoneLabel}</span>
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.contactModal.phonePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-[#07151E] border border-[#0A6F7A]/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#34D6BA] focus:ring-1 focus:ring-[#34D6BA] transition-all"
              />
            </div>

            {/* In-Flow Custom Business Category Dropdown */}
            <div>
              <label htmlFor="contact-activity" className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#2BB8B3]" />
                <span>{t.contactModal.activityLabel}</span>
              </label>

              {/* Trigger Button */}
              <button
                ref={triggerRef}
                type="button"
                id="contact-activity"
                aria-haspopup="listbox"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`w-full px-4 py-3.5 rounded-xl bg-[#07151E] border text-sm flex items-center justify-between transition-all focus:outline-none focus:ring-1 focus:ring-[#34D6BA] ${
                  dropdownOpen
                    ? 'border-[#34D6BA] shadow-[0_0_15px_rgba(52,214,186,0.25)]'
                    : 'border-[#0A6F7A]/40 hover:border-[#2BB8B3]/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: selectedOption.color,
                      boxShadow: `0 0 10px ${selectedOption.color}80`,
                    }}
                  />
                  <span className="font-semibold text-white">
                    {dir === 'rtl' ? selectedOption.ar : selectedOption.en}
                  </span>
                </div>

                {/* Arrow with generous padding & smooth rotation */}
                <div className="flex items-center ps-4 pe-1">
                  <div
                    className={`p-1.5 rounded-lg bg-[#0E2436] border border-[#0A6F7A]/50 transition-all duration-200 ${
                      dropdownOpen
                        ? 'rotate-180 text-[#34D6BA] border-[#34D6BA]/60 bg-[#0A6F7A]/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {/* In-Flow Dropdown Options Grid: Never cut off by modal bounds! */}
              {dropdownOpen && (
                <div
                  ref={dropdownRef}
                  role="listbox"
                  aria-labelledby="contact-activity"
                  className="mt-2.5 rounded-2xl bg-[#07151E] border border-[#0A6F7A]/60 p-2 grid grid-cols-1 sm:grid-cols-2 gap-1.5 animate-fadeIn shadow-inner"
                >
                  {sectorOptions.map((opt) => {
                    const isSelected = businessType === opt.id;
                    return (
                      <button
                        key={opt.id}
                        role="option"
                        aria-selected={isSelected}
                        type="button"
                        onClick={() => {
                          setBusinessType(opt.id);
                          setDropdownOpen(false);
                        }}
                        className={`w-full px-3 py-2.5 rounded-xl flex items-center justify-between text-start text-xs sm:text-sm transition-all ${
                          isSelected
                            ? 'bg-[#0A6F7A]/40 text-white font-bold border border-[#2BB8B3]/70 shadow-[0_0_12px_rgba(43,184,179,0.3)]'
                            : 'text-slate-300 hover:text-white hover:bg-[#0B1C2E] border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <span
                            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                            style={{
                              backgroundColor: opt.color,
                              boxShadow: isSelected ? `0 0 8px ${opt.color}` : 'none',
                            }}
                          />
                          <span className="truncate">
                            {dir === 'rtl' ? opt.ar : opt.en}
                          </span>
                        </div>

                        {isSelected && (
                          <div className="flex items-center ps-2">
                            <span className="w-4 h-4 rounded-full bg-[#34D6BA]/20 border border-[#34D6BA]/40 flex items-center justify-center text-[#34D6BA]">
                              <Check className="w-2.5 h-2.5" />
                            </span>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="contact-notes" className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#2BB8B3]" />
                <span>{t.contactModal.notesLabel}</span>
              </label>
              <textarea
                id="contact-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={t.contactModal.notesPlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-[#07151E] border border-[#0A6F7A]/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#34D6BA] focus:ring-1 focus:ring-[#34D6BA] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="shine-effect w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-[#0A6F7A] via-[#1FA8A3] to-[#2BB8B3] hover:from-[#0B8593] hover:to-[#34D6BA] text-white font-bold text-sm shadow-[0_0_20px_rgba(43,184,179,0.35)] transition-all duration-300 flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#34D6BA] disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isLoading ? t.contactModal.submitting : t.contactModal.submitBtn}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
