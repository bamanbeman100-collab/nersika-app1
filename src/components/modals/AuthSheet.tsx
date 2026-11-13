import React, { useState } from 'react';
import { X, User, KeyRound, Clock, LogOut } from 'lucide-react';
import { Language, NursingRequest, TourismRequest } from '../../types';
import { translations } from '../../utils/i18n';
import { validateIranianPhone } from '../../utils/validation';
import { formatToman } from '../../utils/pricing';

interface AuthSheetProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  isLoggedIn: boolean;
  userPhone: string;
  userName: string;
  onLogin: (phone: string, name: string) => void;
  onLogout: () => void;
  orders: NursingRequest[];
  tourismOrders: TourismRequest[];
}

export const AuthSheet: React.FC<AuthSheetProps> = ({
  isOpen,
  onClose,
  currentLang,
  isLoggedIn,
  userPhone,
  userName,
  onLogin,
  onLogout,
  orders,
  tourismOrders,
}) => {
  const t = translations[currentLang];

  const [phoneInput, setPhoneInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [otpStep, setOtpStep] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!validateIranianPhone(phoneInput)) {
      setErrorMsg(t.errPhoneInvalid);
      return;
    }
    setOtpStep(true);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpCode || otpCode.length < 4) {
      setErrorMsg('Please enter a 4-digit verification code (Use 1234 for test)');
      return;
    }
    onLogin(phoneInput, nameInput || t.userGreeting);
    setOtpStep(false);
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
              <User className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-black text-sm sm:text-base text-slate-900">
                {isLoggedIn ? t.authModalTitleLoggedIn : t.authModalTitle}
              </h3>
              <span className="text-[11px] text-teal-700 font-semibold block">
                {t.authModalSub}
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

        {!isLoggedIn ? (
          <div>
            {!otpStep ? (
              <form onSubmit={handleSendOtp} className="space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed mb-2">
                  {t.authLoginDesc}
                </p>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.yourNameOptional}
                  </label>
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder={t.yourNamePlaceholder}
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
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    placeholder="09120000000"
                    required
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-teal-500 focus:outline-hidden transition-all font-mono"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-teal-700 hover:bg-teal-800 text-white shadow-md transition-all active:scale-98 flex items-center justify-center gap-2"
                >
                  <KeyRound className="w-4 h-4" />
                  <span>{t.sendOtpBtn}</span>
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-3">
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-3 text-xs text-teal-800">
                  {t.otpNotice}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.otpCodeLabel} *
                  </label>
                  <input
                    type="text"
                    dir="ltr"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    placeholder="1234"
                    maxLength={6}
                    required
                    className="w-full text-center tracking-widest text-lg font-bold py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-teal-500 focus:outline-hidden transition-all font-mono"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setOtpStep(false)}
                    className="flex-1 py-2 px-3 rounded-xl font-semibold text-xs text-slate-600 bg-slate-100 hover:bg-slate-200"
                  >
                    {t.changePhoneBtn}
                  </button>
                  <button
                    type="submit"
                    className="flex-2 py-2 px-3 rounded-xl font-bold text-xs bg-teal-700 hover:bg-teal-800 text-white shadow-md"
                  >
                    {t.verifyLoginBtn}
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-teal-700 text-white flex items-center justify-center font-bold text-sm">
                  {userName ? userName[0] : 'U'}
                </div>
                <div>
                  <span className="font-bold text-xs sm:text-sm text-slate-900 block leading-tight">
                    {userName || t.userGreeting}
                  </span>
                  <span dir="ltr" className="text-[11px] font-mono text-slate-500 block mt-0.5">
                    {userPhone}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={onLogout}
                className="text-xs text-rose-600 hover:text-rose-700 font-bold flex items-center gap-1 bg-rose-50 hover:bg-rose-100 px-2.5 py-1.5 rounded-lg transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>{t.logoutBtn}</span>
              </button>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-xs sm:text-sm text-slate-800">
                  {t.activeOrdersTitle} ({orders.length + tourismOrders.length})
                </h4>
              </div>

              {orders.length === 0 && tourismOrders.length === 0 ? (
                <div className="bg-slate-50 border border-dashed border-slate-200 rounded-xl p-5 text-center text-xs text-slate-500">
                  <Clock className="w-6 h-6 text-slate-400 mx-auto mb-1.5 opacity-70" />
                  <span>{t.noOrdersDesc}</span>
                </div>
              ) : (
                <div className="space-y-2">
                  {orders.map((ord) => (
                    <div
                      key={ord.id}
                      className="bg-white border border-slate-200 rounded-xl p-3 text-xs shadow-2xs hover:border-teal-300 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-1 mb-1.5">
                        <span className="font-bold text-slate-900">{ord.serviceName}</span>
                        <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                          {t.statusReviewing}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 space-y-0.5">
                        <div>{ord.requesterName} ({ord.location})</div>
                        <div className="flex items-center justify-between pt-1 border-t border-slate-100 mt-1">
                          <span className="font-semibold text-teal-800">
                            {formatToman(ord.estimatedPrice, currentLang)}
                          </span>
                          <span className="text-slate-400 text-[10px]">{ord.createdAt}</span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {tourismOrders.map((tOrd) => (
                    <div
                      key={tOrd.id}
                      className="bg-blue-50/50 border border-blue-200 rounded-xl p-3 text-xs shadow-2xs"
                    >
                      <div className="flex items-start justify-between gap-1 mb-1.5">
                        <span className="font-bold text-blue-900">{tOrd.specialty}</span>
                        <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full">
                          {t.statusIpd}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-600">
                        <div>{tOrd.patientName} ({tOrd.country})</div>
                        <div className="text-[10px] text-slate-400 mt-1">{tOrd.createdAt}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
