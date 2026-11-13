import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../utils/i18n';

interface FaqSectionProps {
  currentLang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-sec" className="flex flex-col gap-2.5">
      <div className="flex items-center gap-2">
        <HelpCircle className="w-4 h-4 text-teal-700" />
        <h2 className="text-base sm:text-lg font-black text-slate-900">
          {t.faqTitle}
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        {t.faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all shadow-2xs"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full text-start p-3 sm:p-3.5 flex items-center justify-between gap-2 cursor-pointer font-bold text-xs sm:text-sm text-slate-800 hover:text-teal-800 transition-colors"
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-teal-600' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-3 pb-3 sm:px-3.5 sm:pb-3.5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
