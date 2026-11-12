import React, { useState } from 'react';
import { Search, Siren, Stethoscope, AlertTriangle, Calculator, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../utils/i18n';

interface HeroSearchProps {
  currentLang: Language;
  onSelectServiceAndOpen: (serviceName: string) => void;
  onOpenUrgent: () => void;
  onOpenNurseCoop: () => void;
  onOpenEstimator: () => void;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({
  currentLang,
  onSelectServiceAndOpen,
  onOpenUrgent,
  onOpenNurseCoop,
  onOpenEstimator,
}) => {
  const t = translations[currentLang];
  const [selectedService, setSelectedService] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSelectServiceAndOpen(selectedService || 'پرستار در منزل');
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Hero Gradient Card */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-[#163b6d] to-teal-800 text-white p-4 sm:p-5 shadow-lg">
        {/* Subtle decorative glow circles */}
        <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-teal-400/20 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-blue-500/20 blur-xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-xs text-teal-300 text-[11px] font-semibold mb-2.5 border border-white/15">
            <Sparkles className="w-3 h-3 text-teal-300" />
            <span>پلتفرم تخصصی خدمات بالینی در محل</span>
          </div>

          <h1 className="text-xl sm:text-2xl font-black leading-snug mb-1.5">
            {t.heroTitle} <span className="text-teal-300">{t.heroTitleHighlight}</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed mb-4">
            {t.heroDesc}
          </p>

          {/* Quick Search Bar */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-1.5 bg-white p-1.5 rounded-xl shadow-md text-slate-800"
          >
            <div className="flex items-center gap-1.5 flex-1 px-2">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <select
                aria-label={t.quickSearchSelect}
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm text-slate-800 font-medium py-1.5 outline-hidden cursor-pointer"
              >
                <option value="">{t.quickSearchSelect}</option>
                <option value="پرستار در منزل">پرستار در منزل</option>
                <option value="مراقبت از سالمند">مراقبت از سالمند</option>
                <option value="مراقبت پس از جراحی">مراقبت پس از جراحی</option>
                <option value="همراه بیمار در بیمارستان">همراه بیمار در بیمارستان</option>
                <option value="مراقبت از کودک">مراقبت از کودک</option>
                <option value="مراقبت شبانه">مراقبت شبانه و ۲۴ ساعته</option>
                <option value="تزریقات و پانسمان در منزل">تزریقات و پانسمان در منزل</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-lg transition-all active:scale-95 shrink-0 flex items-center gap-1 shadow-xs"
            >
              <span>{t.requestBtn}</span>
            </button>
          </form>

          {/* Price Estimator Button Pill */}
          <div className="mt-3 flex items-center justify-between text-[11px] text-teal-100/90 pt-2 border-t border-white/10">
            <span>میانگین زمان اعزام: کمتر از ۴۵ دقیقه</span>
            <button
              type="button"
              onClick={onOpenEstimator}
              className="inline-flex items-center gap-1 text-teal-200 hover:text-white underline underline-offset-4 font-semibold active:opacity-75"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>استعلام و محاسبه آنلاین هزینه</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quick Action Grid */}
      <div className="grid grid-cols-2 gap-2.5">
        <button
          type="button"
          onClick={onOpenUrgent}
          className="flex items-center gap-2.5 bg-rose-50 hover:bg-rose-100/80 border border-rose-200 rounded-2xl p-3 text-start transition-all active:scale-97 shadow-xs group"
        >
          <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
            <Siren className="w-5 h-5 animate-bounce" />
          </div>
          <div className="min-w-0">
            <span className="block font-black text-xs sm:text-sm text-rose-800 leading-tight">
              {t.urgentBtn}
            </span>
            <span className="block text-[10px] sm:text-[11px] text-rose-600/90 truncate mt-0.5">
              {t.urgentSub}
            </span>
          </div>
        </button>

        <button
          type="button"
          onClick={onOpenNurseCoop}
          className="flex items-center gap-2.5 bg-amber-50 hover:bg-amber-100/80 border border-amber-200 rounded-2xl p-3 text-start transition-all active:scale-97 shadow-xs group"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
            <Stethoscope className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="block font-black text-xs sm:text-sm text-slate-900 leading-tight">
              {t.coopBtn}
            </span>
            <span className="block text-[10px] sm:text-[11px] text-slate-600 truncate mt-0.5">
              {t.coopSub}
            </span>
          </div>
        </button>
      </div>

      {/* Emergency Strip (115 Alert) */}
      <div className="flex items-center justify-between gap-2 bg-rose-50 border border-rose-200 text-rose-900 rounded-xl px-3 py-2 text-xs">
        <div className="flex items-center gap-2 min-w-0">
          <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
          <span className="text-[11px] sm:text-xs font-medium truncate">
            {t.emergencyAlert}
          </span>
        </div>
        <a
          href="tel:115"
          className="bg-rose-600 hover:bg-rose-700 text-white text-[11px] font-black px-2.5 py-1 rounded-lg shrink-0 transition-all active:scale-95"
        >
          {t.call115}
        </a>
      </div>
    </div>
  );
};
