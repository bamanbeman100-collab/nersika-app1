import React, { useState, useEffect } from 'react';
import { X, Siren, Clock, MapPin, User, Phone, FileText, CheckCircle2 } from 'lucide-react';
import { Language, NursingRequest } from '../../types';
import { translations } from '../../utils/i18n';
import { validateIranianPhone, validateRequired } from '../../utils/validation';
import { calculateServiceCost, formatToman } from '../../utils/pricing';

interface UrgentRequestSheetProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialService?: string;
  onSubmit: (request: Omit<NursingRequest, 'id' | 'status' | 'createdAt'>) => void;
}

export const UrgentRequestSheet: React.FC<UrgentRequestSheetProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialService = 'پرستار در منزل',
  onSubmit,
}) => {
  const t = translations[currentLang];

  const [serviceName, setServiceName] = useState(initialService);
  const [requesterName, setRequesterName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [shift, setShift] = useState<'daily' | 'night' | '24h' | 'hourly'>('daily');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setServiceName(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  // Real-time calculated estimate
  const estimatedPrice = calculateServiceCost({
    basePrice: 650000,
    shift: shift,
    isUrgent: true,
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!validateRequired(serviceName)) {
      setErrorMsg('لطفاً نوع خدمت را مشخص کنید.');
      return;
    }
    if (!validateRequired(requesterName)) {
      setErrorMsg('لطفاً نام و نام خانوادگی را وارد کنید.');
      return;
    }
    if (!validateIranianPhone(phone)) {
      setErrorMsg('شماره موبایل وارد شده معتبر نیست (مثال: 09121234567)');
      return;
    }
    if (!validateRequired(location)) {
      setErrorMsg('لطفاً شهر و محدوده سکونت یا نام بیمارستان را وارد کنید.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      onSubmit({
        serviceName,
        requesterName,
        phone,
        location,
        shift,
        notes,
        estimatedPrice,
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
        {/* Top Handle for mobile */}
        <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-3 sm:hidden" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center">
              <Siren className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <h3 className="font-black text-sm sm:text-base text-slate-900">
                {t.urgentBtn}
              </h3>
              <span className="text-[11px] text-teal-700 font-semibold block">
                هماهنگی و اعزام سریع در کمتر از ۴۵ دقیقه
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

        <form onSubmit={handleFormSubmit} className="space-y-3">
          {/* Service Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t.serviceType} *
            </label>
            <input
              type="text"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              placeholder="مثلاً: پرستار در منزل، مراقبت از سالمند..."
              required
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-teal-500 focus:outline-hidden transition-all"
            />
          </div>

          {/* Full Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t.fullName} *
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={requesterName}
                  onChange={(e) => setRequesterName(e.target.value)}
                  placeholder="نام و نام خانوادگی"
                  required
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-teal-500 focus:outline-hidden transition-all"
                />
              </div>
            </div>

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
          </div>

          {/* Shift Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t.shiftSelect} *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {[
                { id: 'daily', label: 'روزانه (۸-۱۲س)' },
                { id: 'night', label: 'شبانه (۱۲س)' },
                { id: '24h', label: '۲۴ ساعته' },
                { id: 'hourly', label: 'ساعتی / موردی' },
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

          {/* Location */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t.cityArea} *
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="مثلاً: تهران، سعادت‌آباد یا بیمارستان آتیه"
              required
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-teal-500 focus:outline-hidden transition-all"
            />
          </div>

          {/* Patient notes */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t.patientStatusNotes}
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="سابقه بیماری، داروهای خاص، نیاز به سونداژ، تعویض پانسمان و..."
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-teal-500 focus:outline-hidden transition-all resize-none"
            />
          </div>

          {/* Live Price Estimation Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between text-xs">
            <div>
              <span className="text-slate-500 block text-[11px]">برآورد اولیه هزینه شیفت انتخابی:</span>
              <span className="font-extrabold text-teal-800 text-sm">
                {formatToman(estimatedPrice, currentLang)}
              </span>
            </div>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
              شامل بیمه و اعزام فوری
            </span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-rose-600 hover:bg-rose-700 text-white shadow-md transition-all active:scale-98 flex items-center justify-center gap-2"
          >
            <Siren className="w-4 h-4" />
            <span>{isSubmitting ? 'در حال ثبت پرونده...' : t.submitUrgent}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
