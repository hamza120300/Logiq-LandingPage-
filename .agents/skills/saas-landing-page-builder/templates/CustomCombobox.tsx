import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ChevronDown, Check, Search, PlusCircle, Sparkles } from 'lucide-react';

export interface CategoryOption {
  id: string;
  ar: string;
  en: string;
  color: string;
}

interface CustomComboboxProps {
  label: string;
  icon?: React.ReactNode;
  options: CategoryOption[];
  selectedId: string;
  onSelect: (id: string, customText?: string) => void;
  dir?: 'rtl' | 'ltr';
  customPlaceholder?: string;
}

export const CustomCombobox: React.FC<CustomComboboxProps> = ({
  label,
  icon,
  options,
  selectedId,
  onSelect,
  dir = 'rtl',
  customPlaceholder = 'Specify your custom business activity...',
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [customText, setCustomText] = useState('');

  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const selectedOption =
    options.find((opt) => opt.id === selectedId) ||
    (selectedId === 'custom'
      ? { id: 'custom', ar: customText || 'نشاط مخصص', en: customText || 'Custom Activity', color: '#34D6BA' }
      : options[0]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  // Filter options
  const filteredOptions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return options;
    return options.filter((opt) => opt.ar.toLowerCase().includes(q) || opt.en.toLowerCase().includes(q));
  }, [searchQuery, options]);

  const isCustomOrOther = selectedId === 'other' || selectedId === 'custom';

  return (
    <div className="relative text-start" dir={dir}>
      <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
        {icon}
        <span>{label}</span>
      </label>

      {/* Trigger Button with Ample Arrow Spacing */}
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={dropdownOpen}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className={`w-full px-4 py-3.5 rounded-xl bg-[#07151E] border text-sm flex items-center justify-between transition-all focus:outline-none focus:ring-1 focus:ring-[#34D6BA] ${
          dropdownOpen ? 'border-[#34D6BA] shadow-[0_0_15px_rgba(52,214,186,0.25)]' : 'border-[#0A6F7A]/40 hover:border-[#2BB8B3]/60'
        }`}
      >
        <div className="flex items-center gap-3">
          <span
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: selectedOption?.color || '#2BB8B3', boxShadow: `0 0 10px ${selectedOption?.color}80` }}
          />
          <span className="font-semibold text-white">
            {selectedId === 'custom' && customText ? customText : dir === 'rtl' ? selectedOption?.ar : selectedOption?.en}
          </span>
        </div>

        <div className="flex items-center ps-4 pe-1">
          <div
            className={`p-1.5 rounded-lg bg-[#0E2436] border border-[#0A6F7A]/50 transition-all duration-200 ${
              dropdownOpen ? 'rotate-180 text-[#34D6BA] border-[#34D6BA]/60 bg-[#0A6F7A]/30' : 'text-slate-400 hover:text-white'
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
          className="mt-2.5 rounded-2xl bg-[#07151E] border border-[#0A6F7A]/60 p-3 space-y-2.5 animate-fadeIn shadow-inner"
        >
          {/* Live Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute top-1/2 start-3 -translate-y-1/2 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={dir === 'rtl' ? 'ابحث في الأنشطة أو اكتب فكرتك...' : 'Search activities or type custom idea...'}
              className="w-full ps-9 pe-3 py-2 rounded-xl bg-[#0B1C2E] border border-[#0A6F7A]/40 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#34D6BA] focus:ring-1 focus:ring-[#34D6BA]"
            />
          </div>

          {/* 2-Column Options List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-56 overflow-y-auto pe-1">
            {filteredOptions.map((opt) => {
              const isSelected = selectedId === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    onSelect(opt.id);
                    setDropdownOpen(false);
                  }}
                  className={`w-full px-3 py-2.5 rounded-xl flex items-center justify-between text-start text-xs sm:text-sm transition-all ${
                    isSelected
                      ? 'bg-[#0A6F7A]/40 text-white font-bold border border-[#2BB8B3]/70 shadow-[0_0_12px_rgba(43,184,179,0.3)]'
                      : 'text-slate-300 hover:text-white hover:bg-[#0B1C2E] border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: opt.color }} />
                    <span className="truncate">{dir === 'rtl' ? opt.ar : opt.en}</span>
                  </div>
                  {isSelected && (
                    <span className="w-4 h-4 rounded-full bg-[#34D6BA]/20 border border-[#34D6BA]/40 flex items-center justify-center text-[#34D6BA]">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Create Custom Option from search query */}
          {searchQuery.trim() && (
            <button
              type="button"
              onClick={() => {
                setCustomText(searchQuery.trim());
                onSelect('custom', searchQuery.trim());
                setDropdownOpen(false);
              }}
              className="w-full mt-1 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-[#0A6F7A]/30 to-[#2BB8B3]/20 border border-[#34D6BA]/50 text-white text-xs flex items-center justify-between hover:bg-[#0A6F7A]/50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <PlusCircle className="w-4 h-4 text-[#34D6BA]" />
                <span>{dir === 'rtl' ? `استخدام "${searchQuery.trim()}" كنشاط مخصص` : `Use "${searchQuery.trim()}" as custom activity`}</span>
              </div>
              <span className="text-[11px] text-[#34D6BA] font-bold">{dir === 'rtl' ? 'تحديد' : 'Select'}</span>
            </button>
          )}
        </div>
      )}

      {/* Custom Text Input if Other/Custom is Selected */}
      {isCustomOrOther && (
        <div className="mt-2.5 p-3.5 rounded-2xl bg-[#0B1C2E] border border-[#34D6BA]/40 animate-fadeIn">
          <label className="block text-xs font-semibold text-[#34D6BA] mb-1.5 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{dir === 'rtl' ? 'اكتب تفاصيل نشاطك التجاري أو فكرتك:' : 'Describe your custom business or idea:'}</span>
          </label>
          <input
            type="text"
            required
            value={customText}
            onChange={(e) => {
              setCustomText(e.target.value);
              onSelect(selectedId, e.target.value);
            }}
            placeholder={customPlaceholder}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#07151E] border border-[#0A6F7A]/50 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#34D6BA] focus:ring-1 focus:ring-[#34D6BA] transition-all"
          />
        </div>
      )}
    </div>
  );
};
