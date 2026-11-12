import React from 'react';
import { MapPin, Phone, Smartphone, Copy, Check } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../utils/i18n';

interface ContactCardProps {
  currentLang: Language;
  onCopyText: (text: string, label: string) => void;
}

export const ContactCard: React.FC<ContactCardProps> = ({ currentLang, onCopyText }) => {
  const t = translations[currentLang];
  const addressText = 'تهران، دانشگاه صنعتی شریف، مرکز نوآوری انرژی';
  const postalCode = '1458889694';

  return (
    <section id="contact-sec" className="rounded-2xl bg-slate-900 text-slate-100 p-4 sm:p-5 shadow-lg border border-slate-800">
      <div className="flex items-center gap-2 font-black text-sm sm:text-base text-white mb-3">
        <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
        <span>{t.hqTitle}</span>
      </div>

      <div className="flex flex-col divide-y divide-slate-800 text-xs">
        {/* Address */}
        <div className="py-2.5 flex items-center justify-between gap-2">
          <span className="text-slate-300 leading-relaxed text-[11px] sm:text-xs">
            {addressText}
          </span>
          <button
            type="button"
            onClick={() => onCopyText(addressText, t.copyAddress)}
            className="flex-none bg-teal-600/90 hover:bg-teal-500 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 transition-all active:scale-95"
          >
            <Copy className="w-3 h-3" />
            <span>{t.copyAddress}</span>
          </button>
        </div>

        {/* Postal Code */}
        <div className="py-2.5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-slate-300">
            <span className="text-slate-400">کد پستی:</span>
            <span dir="ltr" className="font-mono font-bold text-white tracking-wider">
              {postalCode}
            </span>
          </div>
          <button
            type="button"
            onClick={() => onCopyText(postalCode, t.copyPostal)}
            className="flex-none bg-teal-600/90 hover:bg-teal-500 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 transition-all active:scale-95"
          >
            <Copy className="w-3 h-3" />
            <span>{t.copyPostal}</span>
          </button>
        </div>

        {/* Landline */}
        <div className="py-2.5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{t.phoneLandline}</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="tel:02128424742"
              dir="ltr"
              className="font-mono font-black text-amber-400 hover:text-amber-300 text-xs sm:text-sm tracking-wider"
            >
              02128424742
            </a>
            <button
              type="button"
              onClick={() => onCopyText('02128424742', t.phoneLandline)}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-2 py-0.5 rounded text-[10px] font-bold"
            >
              کپی
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className="pt-2.5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Smartphone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>{t.phoneMobile}</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="tel:09194968979"
              dir="ltr"
              className="font-mono font-black text-emerald-400 hover:text-emerald-300 text-xs sm:text-sm tracking-wider"
            >
              09194968979
            </a>
            <button
              type="button"
              onClick={() => onCopyText('09194968979', t.phoneMobile)}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-2 py-0.5 rounded text-[10px] font-bold"
            >
              کپی
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
