import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, X, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LogiqLogo } from './LogiqLogo';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const { t, dir } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
        onClose();
      }, 1400);
    }, 700);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-title"
      aria-describedby="login-subtitle"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        className="relative z-10 w-full max-w-md rounded-3xl bg-[#0B1C2E] border border-[#0A6F7A]/50 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(10,111,122,0.3)] text-start"
        onClick={(e) => e.stopPropagation()}
        dir={dir}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 end-5 p-2 rounded-full bg-[#07151E] text-slate-400 hover:text-white border border-[#0A6F7A]/30 hover:border-[#34D6BA]/50 transition-colors focus-visible:ring-2 focus-visible:ring-[#34D6BA]"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header & Logo */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <LogiqLogo size="md" />
          </div>
          <h3 id="login-title" className="text-2xl font-bold text-white tracking-tight">
            {t.loginModal.title}
          </h3>
          <p id="login-subtitle" className="text-xs sm:text-sm text-slate-400 mt-1.5">
            {t.loginModal.subtitle}
          </p>
        </div>

        {/* Success Alert */}
        {successMessage ? (
          <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm font-medium text-center mb-4 animate-fadeIn flex flex-col items-center gap-2">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 animate-bounce" />
            <span>{dir === 'rtl' ? 'تم تسجيل الدخول بنجاح! جاري التوجيه للوحة التحكم...' : 'Login successful! Redirecting to dashboard...'}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="login-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                {t.loginModal.emailLabel}
              </label>
              <div className="relative">
                <input
                  id="login-email"
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.loginModal.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#07151E] border border-[#0A6F7A]/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#34D6BA] focus:ring-1 focus:ring-[#34D6BA] transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="login-password" className="block text-xs font-semibold text-slate-300 mb-1.5">
                {t.loginModal.passwordLabel}
              </label>
              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t.loginModal.passwordPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#07151E] border border-[#0A6F7A]/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#34D6BA] focus:ring-1 focus:ring-[#34D6BA] transition-all pe-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute inset-y-0 end-0 pe-4 flex items-center text-slate-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-[#0A6F7A] text-[#2BB8B3] focus:ring-[#34D6BA] bg-[#07151E]"
                />
                <span>{t.loginModal.rememberMe}</span>
              </label>

              <button
                type="button"
                className="text-[#34D6BA] hover:underline font-medium"
              >
                {t.loginModal.forgotPassword}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="shine-effect w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0A6F7A] via-[#1FA8A3] to-[#2BB8B3] hover:from-[#0B8593] hover:to-[#34D6BA] text-white font-bold text-sm shadow-[0_0_20px_rgba(43,184,179,0.35)] transition-all duration-300 disabled:opacity-50 mt-2 focus-visible:ring-2 focus-visible:ring-[#34D6BA]"
            >
              {isLoading ? t.loginModal.loggingIn : t.loginModal.submitBtn}
            </button>
          </form>
        )}

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-[#0A6F7A]/30 text-center text-xs text-slate-400">
          <p>
            {t.loginModal.noAccount}{' '}
            <button
              onClick={() => {
                onClose();
              }}
              className="text-[#34D6BA] hover:underline font-bold"
            >
              {t.loginModal.contactSales}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
