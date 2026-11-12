import React from 'react';
import { Language } from '../types';
import { translations } from '../utils/i18n';

interface WorkflowStepsProps {
  currentLang: Language;
}

export const WorkflowSteps: React.FC<WorkflowStepsProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const steps = [
    {
      num: 1,
      title: 'ثبت درخواست',
      desc: 'تکمیل مشخصات بیمار، تعیین شیفت کاری و موقعیت مکانی سکونت یا بیمارستان',
      icon: '📝',
    },
    {
      num: 2,
      title: 'بررسی و تطبیق بالینی',
      desc: 'بررسی نیازهای بیمار توسط کارشناس ارشد تریاژ و انتخاب مناسب‌ترین پرستار',
      icon: '🔍',
    },
    {
      num: 3,
      title: 'پیشنهاد و تأیید پرونده',
      desc: 'مشاهده مشخصات، سوابق تحصیلی و رضایت بیماران قبلی و تأیید پرونده توسط شما',
      icon: '👤',
    },
    {
      num: 4,
      title: 'پرداخت امن و قرارداد',
      desc: 'پرداخت مستقیم از درگاه بانکی مجاز، صدور قرارداد قانونی و فاکتور بیمه تکمیلی',
      icon: '💳',
    },
    {
      num: 5,
      title: 'اعزام و شروع مراقبت',
      desc: 'ثبت الکترونیکی ورود، ثبت پرونده بالینی روزانه و امتیازدهی به عملکرد پرستار',
      icon: '🩺',
    },
  ];

  return (
    <section className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <h2 className="text-base sm:text-lg font-black text-slate-900">
          {t.howItWorksTitle}
        </h2>
        <span className="text-[11px] font-bold bg-teal-50 text-teal-700 border border-teal-200 px-2 py-0.5 rounded-full">
          {t.stepsCount}
        </span>
      </div>

      <div className="flex gap-2.5 overflow-x-auto pb-1.5 snap-x snap-mandatory no-scrollbar">
        {steps.map((step) => (
          <div
            key={step.num}
            className="flex-none w-[200px] sm:w-[220px] snap-start bg-white border border-slate-200 rounded-2xl p-3.5 flex flex-col justify-between shadow-2xs hover:border-teal-300 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-black flex items-center justify-center">
                  {step.num}
                </span>
                <span className="text-lg">{step.icon}</span>
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-slate-900 mb-1">
                {step.title}
              </h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-100 flex items-center gap-1 text-[10px] font-semibold text-teal-700">
              <span>گام {step.num} از ۵</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
