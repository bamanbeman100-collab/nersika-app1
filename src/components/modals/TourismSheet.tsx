import React, { useState, useEffect } from 'react';
import { X, Plane, Send, ShieldCheck, Mail } from 'lucide-react';
import { Language, TourismRequest } from '../../types';
import { translations } from '../../utils/i18n';
import { validateInternationalPhone, validateRequired } from '../../utils/validation';
import { sendFormToEmail } from '../../utils/api';

interface TourismSheetProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onSubmit: (request: Omit<TourismRequest, 'id' | 'status' | 'createdAt'>) => void;
}

export const TourismSheet: React.FC<TourismSheetProps> = ({
  isOpen,
  onClose,
  currentLang,
  onSubmit,
}) => {
  const t = translations[currentLang];

  const [patientName, setPatientName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [country, setCountry] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (t.countries.length > 0 && !country) {
      setCountry(t.countries[0]);
    }
    if (t.specialties.length > 0 && !specialty) {
      setSpecialty(t.specialties[0].title);
    }
  }, [t, country, specialty]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!validateRequired(patientName)) {
      setErrorMsg(t.errNameRequired);
      return;
    }
    if (!validateInternationalPhone(whatsapp)) {
      setErrorMsg(t.errWhatsappInvalid);
      return;
    }

    setIsSubmitting(true);

    const payload = {
      patientName,
      whatsapp,
      country: country || t.countries[0],
      specialty: specialty || t.specialties[0]?.title,
      notes,
    };

    // Forward form to info@nersika.com
    await sendFormToEmail('tourism_request', payload);

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
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
              <Plane className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-black text-sm sm:text-base text-slate-900">
                {t.tourismModalTitle}
              </h3>
              <span className="text-[11px] text-blue-700 font-semibold block">
                {t.tourismModalSub}
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
        <div className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-800 text-[11px] px-3 py-1.5 rounded-xl font-bold mb-3">
          <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span>{t.emailSentBadge}: <b>info@nersika.com</b></span>
        </div>

        {errorMsg && (
          <div className="bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl p-2.5 mb-3 font-medium">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t.patientNameLabel} *
            </label>
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder={t.patientNamePlaceholder}
              required
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:outline-hidden transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t.whatsappLabel} *
              </label>
              <input
                type="tel"
                dir="ltr"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="+964 780 000 0000"
                required
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:outline-hidden transition-all font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t.countryLabel} *
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:outline-hidden transition-all cursor-pointer"
              >
                {t.countries.map((cntry) => (
                  <option key={cntry} value={cntry}>
                    {cntry}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t.medicalSpecialtyLabel} *
            </label>
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:outline-hidden transition-all cursor-pointer"
            >
              {t.specialties.map((spec) => (
                <option key={spec.id} value={spec.title}>
                  {spec.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t.notesLabel}
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t.tourismNotesPlaceholder}
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:outline-hidden transition-all resize-none"
            />
          </div>

          <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-3 flex items-start gap-2 text-xs text-blue-900">
            <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
            <span>{t.ipdNotice}</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all active:scale-98 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? t.submittingText : t.submitTourismBtn}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
