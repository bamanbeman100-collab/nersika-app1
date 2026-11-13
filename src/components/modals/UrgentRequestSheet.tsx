import React, { useState, useEffect } from 'react';
import { X, Siren, Mail } from 'lucide-react';
import { Language, NursingRequest } from '../../types';
import { translations } from '../../utils/i18n';
import { validateIranianPhone, validateRequired } from '../../utils/validation';
import { calculateServiceCost, formatToman } from '../../utils/pricing';
import { sendFormToEmail } from '../../utils/api';

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
  initialService = '',
  onSubmit,
}) => {
  const t = translations[currentLang];

  const [serviceName, setServiceName] = useState('');
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
    } else {
      setServiceName(t.quickOptions[0]?.label || 'Home Nursing');
    }
  }, [initialService, t]);

  if (!isOpen) return null;

  const estimatedPrice = calculateServiceCost({
    basePrice: 650000,
    shift: shift,
    isUrgent: true,
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!validateRequired(serviceName)) {
      setErrorMsg(t.errServiceRequired);
      return;
    }
    if (!validateRequired(requesterName)) {
      setErrorMsg(t.errNameRequired);
      return;
    }
    if (!validateIranianPhone(phone)) {
      setErrorMsg(t.errPhoneInvalid);
      return;
    }
    if (!validateRequired(location)) {
      setErrorMsg(t.errLocationRequired);
      return;
    }

    setIsSubmitting(true);

    const payload = {
      serviceName,
      requesterName,
      phone,
      location,
      shift,
      notes,
      estimatedPrice,
    };

    // Forward form to info@nersika.com via server
    await sendFormToEmail('urgent_nurse_request', payload);

    onSubmit(payload);
    setIsSubmitting(false);
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
            <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center">
              <Siren className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <h3 className="font-black text-sm sm:text-base text-slate-900">
                {t.urgentModalTitle}
              </h3>
              <span className="text-[11px] text-teal-700 font-semibold block">
                {t.urgentModalSub}
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

        {/* Target Email Dispatch Badge */}
        <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] px-3 py-1.5 rounded-xl font-bold mb-3">
          <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>{t.emailSentBadge}: <b>info@nersika.com</b></span>
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
              {t.serviceTypeLabel} *
            </label>
            <input
              type="text"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              placeholder={t.serviceTypePlaceholder}
              required
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-teal-500 focus:outline-hidden transition-all"
            />
          </div>

          {/* Full Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t.fullNameLabel} *
              </label>
              <input
                type="text"
                value={requesterName}
                onChange={(e) => setRequesterName(e.target.value)}
                placeholder={t.fullNamePlaceholder}
                required
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-teal-500 focus:outline-hidden transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t.mobileLabel} *
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
              {t.shiftSelectLabel} *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {t.shifts.map((s) => (
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
              {t.cityAreaLabel} *
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder={t.cityAreaPlaceholder}
              required
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-teal-500 focus:outline-hidden transition-all"
            />
          </div>

          {/* Patient notes */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t.notesLabel}
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t.notesPlaceholder}
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-teal-500 focus:outline-hidden transition-all resize-none"
            />
          </div>

          {/* Live Price Estimation Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between text-xs">
            <div>
              <span className="text-slate-500 block text-[11px]">
                {t.estimateInitialLabel}
              </span>
              <span className="font-extrabold text-teal-800 text-sm">
                {formatToman(estimatedPrice, currentLang)}
              </span>
            </div>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
              {t.insuranceDispatchIncluded}
            </span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-rose-600 hover:bg-rose-700 text-white shadow-md transition-all active:scale-98 flex items-center justify-center gap-2"
          >
            <Siren className="w-4 h-4" />
            <span>{isSubmitting ? t.submittingText : t.submitUrgentBtn}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
