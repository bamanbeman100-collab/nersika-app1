import React, { useState } from 'react';
import { X, Stethoscope, Award, FileCheck2 } from 'lucide-react';
import { Language, NurseApplication } from '../../types';
import { translations } from '../../utils/i18n';
import { validateIranianPhone, validateRequired } from '../../utils/validation';

interface NurseCooperationSheetProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onSubmit: (app: Omit<NurseApplication, 'id' | 'status' | 'createdAt'>) => void;
}

export const NurseCooperationSheet: React.FC<NurseCooperationSheetProps> = ({
  isOpen,
  onClose,
  currentLang,
  onSubmit,
}) => {
  const t = translations[currentLang];

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [degree, setDegree] = useState('کارشناس پرستاری');
  const [medicalCouncilCode, setMedicalCouncilCode] = useState('');
  const [city, setCity] = useState('تهران');
  const [experienceYears, setExperienceYears] = useState('۳ تا ۵ سال');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!validateRequired(fullName)) {
      setErrorMsg('لطفاً نام و نام خانوادگی را وارد کنید.');
      return;
    }
    if (!validateIranianPhone(phone)) {
      setErrorMsg('شماره موبایل نامعتبر است (مثال: 09121234567).');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      onSubmit({
        fullName,
        phone,
        degree,
        medicalCouncilCode,
        city,
        experienceYears,
      });
      setIsSubmitting(false);
      onClose();
    }, 400);
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
              <Stethoscope className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-black text-sm sm:text-base text-slate-900">
                {t.nurseFormTitle}
              </h3>
              <span className="text-[11px] text-teal-700 font-semibold block">
                استخدام و عضویت در بزرگترین شبکه خدمات بالینی
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

        {errorMsg && (
          <div className="bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl p-2.5 mb-3 font-medium">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t.fullName} *
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="نام و نام خانوادگی کامل"
              required
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-teal-500 focus:outline-hidden transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t.mobileNumber} *
              </label>
              <input
                type="tel"
                dir="ltr"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="09120000000"
                required
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-teal-500 focus:outline-hidden transition-all font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                شهر محل فعالیت *
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="مثلاً: تهران، کرج، شیراز، مشهد..."
                required
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-teal-500 focus:outline-hidden transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t.degreeLabel} *
            </label>
            <select
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-teal-500 focus:outline-hidden transition-all cursor-pointer"
            >
              <option value="کارشناس پرستاری">کارشناس پرستاری (BSN)</option>
              <option value="کارشناس ارشد پرستاری">کارشناس ارشد پرستاری (MSN - ویژه/داخلی جراحی)</option>
              <option value="بهیار / کمک‌بهیار">بهیار / کمک‌بهیار دارای دیپلم بهیاری</option>
              <option value="کارشناس اتاق عمل و هوشبری">کارشناس اتاق عمل و هوشبری</option>
              <option value="مراقب سالمند و کودک دارای گواهی">مراقب سالمند و کودک دارای گواهی فنی‌حرفه‌ای</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t.nurseCouncilCode}
              </label>
              <input
                type="text"
                dir="ltr"
                value={medicalCouncilCode}
                onChange={(e) => setMedicalCouncilCode(e.target.value)}
                placeholder="مثلاً 123456"
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-teal-500 focus:outline-hidden transition-all font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                سابقه کار بالینی
              </label>
              <select
                value={experienceYears}
                onChange={(e) => setExperienceYears(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-teal-500 focus:outline-hidden transition-all cursor-pointer"
              >
                <option value="کمتر از ۱ سال">کمتر از ۱ سال (شروع همکاری)</option>
                <option value="۱ تا ۳ سال">۱ تا ۳ سال</option>
                <option value="۳ تا ۵ سال">۳ تا ۵ سال</option>
                <option value="بیش از ۵ سال">بیش از ۵ سال (ارشد بالینی)</option>
              </select>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 leading-relaxed flex items-start gap-2">
            <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">مزایای همکاری با نرسیکا:</span>
              تسویه روزانه و شفاف، پوشش کامل بیمه حوادث بالینی، انتخاب شیفت آزاد و پرونده‌های نزدیک به محل سکونت.
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-teal-700 hover:bg-teal-800 text-white shadow-md transition-all active:scale-98 flex items-center justify-center gap-2"
          >
            <FileCheck2 className="w-4 h-4" />
            <span>{isSubmitting ? 'در حال ثبت پرونده...' : t.submitNurse}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
