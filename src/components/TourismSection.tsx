import React from 'react';
import { Plane, Globe, Stethoscope, Sparkles, Hotel } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../utils/i18n';

interface TourismSectionProps {
  currentLang: Language;
  onOpenTourismModal: () => void;
}

export const TourismSection: React.FC<TourismSectionProps> = ({
  currentLang,
  onOpenTourismModal,
}) => {
  const t = translations[currentLang];

  const icons = [
    <Stethoscope key="1" className="w-4 h-4" />,
    <Sparkles key="2" className="w-4 h-4" />,
    <Globe key="3" className="w-4 h-4" />,
    <Hotel key="4" className="w-4 h-4" />,
  ];

  return (
    <section
      id="tourism-sec"
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 border border-blue-200/80 p-4 sm:p-5 shadow-sm"
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="text-[10px] font-extrabold tracking-wider bg-blue-600 text-white px-2.5 py-0.5 rounded-full uppercase shadow-xs">
          {t.healthTourismBadge}
        </span>
        <div className="flex items-center gap-1 text-[11px] font-bold text-blue-700">
          <Globe className="w-3.5 h-3.5" />
          <span>{t.healthTourismIPD}</span>
        </div>
      </div>

      <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1.5 flex items-center gap-1.5">
        <span>✈️</span>
        <span>{t.healthTourismTitle}</span>
      </h3>

      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
        {t.healthTourismDesc}
      </p>

      {/* Feature highlights grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {t.tourismAdvantages.map((adv, idx) => (
          <div key={idx} className="bg-white/80 backdrop-blur-xs rounded-xl p-2 border border-blue-100 flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              {icons[idx] || <Globe className="w-4 h-4" />}
            </div>
            <span className="text-[11px] font-bold text-slate-800 leading-tight">
              {adv.title}
            </span>
          </div>
        ))}
      </div>

      {/* Specialties list pills */}
      <div className="mb-4">
        <span className="text-[11px] font-bold text-slate-500 block mb-1.5">
          {t.prioritySpecialtiesLabel}
        </span>
        <div className="flex flex-wrap gap-1.5">
          {t.specialties.map((spec) => (
            <span
              key={spec.id}
              className="text-[11px] font-medium bg-white text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs"
            >
              {spec.title}
            </span>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={onOpenTourismModal}
        className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 transition-all active:scale-98 shadow-md"
      >
        <Plane className="w-4 h-4" />
        <span>{t.healthTourismBtn}</span>
      </button>
    </section>
  );
};
