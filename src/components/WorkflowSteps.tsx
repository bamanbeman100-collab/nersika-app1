import React from 'react';
import { Language } from '../types';
import { translations } from '../utils/i18n';

interface WorkflowStepsProps {
  currentLang: Language;
}

export const WorkflowSteps: React.FC<WorkflowStepsProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const stepIcons = ['📝', '🔍', '👤', '💳', '🩺'];

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
        {t.steps.map((step, idx) => (
          <div
            key={idx}
            className="flex-none w-[200px] sm:w-[220px] snap-start bg-white border border-slate-200 rounded-2xl p-3.5 flex flex-col justify-between shadow-2xs hover:border-teal-300 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-black flex items-center justify-center">
                  {idx + 1}
                </span>
                <span className="text-lg">{stepIcons[idx] || '✨'}</span>
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-slate-900 mb-1">
                {step.title}
              </h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-100 flex items-center gap-1 text-[10px] font-semibold text-teal-700">
              <span>{t.stepPrefix} {idx + 1} {t.ofSteps}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
