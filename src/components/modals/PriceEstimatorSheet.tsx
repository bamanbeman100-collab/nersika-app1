import React, { useState } from 'react';
import { X, Calculator, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { Language } from '../../types';
import { translations } from '../../utils/i18n';
import { calculateServiceCost, formatToman } from '../../utils/pricing';
import { SERVICES_LIST } from '../../data/servicesData';

interface PriceEstimatorSheetProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onBookWithEstimate: (serviceName: string, shift: 'daily' | 'night' | '24h' | 'hourly', days: number) => void;
}

export const PriceEstimatorSheet: React.FC<PriceEstimatorSheetProps> = ({
  isOpen,
  onClose,
  currentLang,
  onBookWithEstimate,
}) => {
  const t = translations[currentLang];

  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES_LIST[0].id);
  const [shift, setShift] = useState<'daily' | 'night' | '24h' | 'hourly'>('daily');
  const [daysCount, setDaysCount] = useState<number>(1);
  const [isUrgent, setIsUrgent] = useState(false);
  const [needsSpecialCare, setNeedsSpecialCare] = useState(false);

  if (!isOpen) return null;

  const currentService = SERVICES_LIST.find((s) => s.id === selectedServiceId) || SERVICES_LIST[0];

  const totalCost = calculateServiceCost({
    basePrice: currentService.basePrice,
    shift,
    daysCount,
    isUrgent,
    needsSpecialCare,
  });

  const handleBookNow = () => {
    onBookWithEstimate(currentService.titleKey, shift, daysCount);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/60 backdrop-blur-xs transition-opacity p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[540px] bg-white rounded-t-3xl sm:rounded-2xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 shadow-2xl animate-in slide-in-from-bottom duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-3 sm:hidden" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-black text-sm sm:text-base text-slate-900">
                {t.calculatorTitle}
              </h3>
              <span className="text-[11px] text-teal-700 font-semibold block">
                محاسبه شفاف و رسمی طبق تعرفه‌های مصوب وزارت بهداشت
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3.5">
          {/* Service Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              انتخاب خدمت بالینی یا مراقبتی:
            </label>
            <select
              value={selectedServiceId}
              onChange={(e) => setSelectedServiceId(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-teal-500 focus:outline-hidden transition-all cursor-pointer font-medium"
            >
              {SERVICES_LIST.map((srv) => (
                <option key={srv.id} value={srv.id}>
                  {srv.icon} {srv.titleKey} - پایه: {formatToman(srv.basePrice, currentLang)}
                </option>
              ))}
            </select>
          </div>

          {/* Shift selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t.shiftSelect}:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {[
                { id: 'daily', label: 'روزانه (۸-۱۲س)' },
                { id: 'night', label: 'شبانه (+۲۵٪)' },
                { id: '24h', label: '۲۴ ساعته' },
                { id: 'hourly', label: 'ساعتی' },
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setShift(s.id as any)}
                  className={`py-1.5 px-2 rounded-xl text-xs font-bold border transition-all ${
                    shift === s.id
                      ? 'bg-teal-700 text-white border-teal-700 shadow-xs'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Days count slider / buttons */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1">
              <span>مدت زمان مراقبت:</span>
              <span className="text-teal-800 font-extrabold">{daysCount} روز</span>
            </div>
            <div className="flex items-center gap-1.5">
              {[1, 3, 7, 14, 30].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setDaysCount(num)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                    daysCount === num
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {num} روز
                </button>
              ))}
            </div>
          </div>

          {/* Special conditions toggles */}
          <div className="space-y-2 pt-1">
            <label className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer">
              <span className="text-xs font-bold text-slate-800">
                مراقبت تخصصی / ویژه (گاواژ، سوند، زخم بستر)
              </span>
              <input
                type="checkbox"
                checked={needsSpecialCare}
                onChange={(e) => setNeedsSpecialCare(e.target.checked)}
                className="w-4 h-4 accent-teal-600 cursor-pointer rounded-sm"
              />
            </label>

            <label className="flex items-center justify-between p-2.5 bg-rose-50/70 rounded-xl border border-rose-200 cursor-pointer">
              <span className="text-xs font-bold text-rose-900">
                اعزام فوری و اورژانسی (کمتر از ۴۵ دقیقه)
              </span>
              <input
                type="checkbox"
                checked={isUrgent}
                onChange={(e) => setIsUrgent(e.target.checked)}
                className="w-4 h-4 accent-rose-600 cursor-pointer rounded-sm"
              />
            </label>
          </div>

          {/* Result card */}
          <div className="bg-gradient-to-br from-teal-900 to-slate-900 text-white rounded-2xl p-4 shadow-md">
            <div className="flex items-center justify-between text-xs text-teal-200 mb-1">
              <span>برآورد نهایی هزینه:</span>
              <span className="text-[10px] bg-teal-500/30 text-teal-300 px-2 py-0.5 rounded-full border border-teal-400/20">
                شامل بیمه و پشتیبانی کامل
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-white my-1">
              {formatToman(totalCost, currentLang)}
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
              فاکتور رسمی جهت ارائه به کلیه شرکت‌های بیمه پایه و تکمیلی صادر می‌گردد.
            </p>

            <button
              type="button"
              onClick={handleBookNow}
              className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-md transition-all active:scale-98 flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>ثبت درخواست با این برآورد</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
