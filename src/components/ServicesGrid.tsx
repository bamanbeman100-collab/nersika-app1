import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Filter } from 'lucide-react';
import { ServiceItem, Language } from '../types';
import { SERVICES_LIST } from '../data/servicesData';
import { translations, isRTL } from '../utils/i18n';
import { formatToman } from '../utils/pricing';

interface ServicesGridProps {
  currentLang: Language;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  currentLang,
  onSelectService,
}) => {
  const t = translations[currentLang];
  const rtl = isRTL(currentLang);
  const [filter, setFilter] = useState<'all' | 'home' | 'hospital' | 'specialized' | 'shift'>('all');

  const filteredServices = SERVICES_LIST.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const categories = [
    { key: 'all', label: 'همه خدمات' },
    { key: 'home', label: 'منزل و سالمند' },
    { key: 'hospital', label: 'بیمارستان و همراه' },
    { key: 'specialized', label: 'بالینی و جراحی' },
    { key: 'shift', label: 'شبانه و ۲۴ ساعته' },
  ];

  return (
    <section id="services-sec" className="flex flex-col gap-3">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-base sm:text-lg font-black text-slate-900">
            {t.servicesTitle}
          </h2>
          <span className="text-[11px] font-bold bg-teal-50 text-teal-700 border border-teal-200 px-2 py-0.5 rounded-full">
            {t.activeServicesCount}
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((cat) => {
          const isActive = filter === cat.key;
          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => setFilter(cat.key as any)}
              className={`flex-none px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Services Grid (2 cols mobile, 3-4 cols desktop) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            onClick={() => onSelectService(service)}
            className="group relative bg-white border border-slate-200 hover:border-teal-400 rounded-2xl p-3 sm:p-3.5 flex flex-col justify-between cursor-pointer transition-all hover:shadow-md active:scale-97"
          >
            {/* Top row with icon & badge */}
            <div>
              <div className="flex items-start justify-between gap-1.5 mb-2">
                <span className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                  {service.icon}
                </span>
                {service.badge && (
                  <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-md">
                    {service.badge}
                  </span>
                )}
              </div>

              <h3 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-1 mb-1">
                {service.titleKey}
              </h3>

              <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2 mb-2">
                {service.descKey}
              </p>
            </div>

            {/* Price & CTA */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between mt-auto">
              <div>
                <span className="text-[10px] text-slate-400 block leading-tight">شروع تعرفه از:</span>
                <span className="text-xs font-black text-teal-800">
                  {formatToman(service.basePrice, currentLang)}
                </span>
              </div>
              <div className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-teal-600 group-hover:text-white flex items-center justify-center text-slate-500 transition-colors">
                {rtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
