import React from 'react';
import { Phone, User, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations, isRTL } from '../utils/i18n';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenAuth: () => void;
  isLoggedIn: boolean;
  userName?: string;
}

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'fa', label: 'فارسی', flag: '🇮🇷' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
];

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onOpenAuth,
  isLoggedIn,
  userName,
}) => {
  const t = translations[currentLang];
  const rtl = isRTL(currentLang);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs px-3 sm:px-4 py-2.5">
      <div className="flex items-center justify-between gap-2">
        {/* Brand */}
        <div
          className="flex items-center gap-2.5 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-slate-900 flex items-center justify-center text-white shadow-xs shrink-0 p-1">
            <ShieldCheck className="w-6 h-6 text-teal-300" />
          </div>
          <div>
            <div className="font-black text-slate-900 text-lg sm:text-xl tracking-tight leading-tight flex items-center gap-1.5">
              <span>{t.appName}</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                {t.appBadge}
              </span>
            </div>
            <div className="text-[11px] font-semibold text-teal-700 leading-none mt-0.5">
              {t.brandSlogan}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href="tel:02128424742"
            className="inline-flex items-center gap-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-full px-3 py-1.5 text-xs font-bold transition-all shrink-0 active:scale-95"
            aria-label={t.supportCall}
          >
            <Phone className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
            <span className="hidden xs:inline">{t.supportCall}</span>
            <span className="font-mono text-[11px]" dir="ltr">02128424742</span>
          </a>

          <button
            type="button"
            onClick={onOpenAuth}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full transition-all shrink-0 border active:scale-95 ${
              isLoggedIn
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                : 'bg-teal-50 hover:bg-teal-100 text-teal-800 border-teal-200'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>{isLoggedIn ? (userName || t.myAccount) : t.login}</span>
          </button>
        </div>
      </div>

      {/* Language Bar with Horizontal Scroll */}
      <div
        className="flex items-center gap-1.5 overflow-x-auto pt-2 mt-2 border-t border-dashed border-slate-200 no-scrollbar"
        aria-label="Language Selector"
      >
        {LANGUAGES.map((lang) => {
          const isActive = currentLang === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => onLanguageChange(lang.code)}
              className={`flex-none px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all flex items-center gap-1 ${
                isActive
                  ? 'bg-slate-900 text-white shadow-xs font-bold scale-[1.02]'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
