import React from 'react';
import { Home, Stethoscope, Siren, Plane, User } from 'lucide-react';
import { TabType, Language } from '../types';
import { translations } from '../utils/i18n';

interface BottomNavProps {
  currentTab: TabType;
  onTabChange: (tab: TabType) => void;
  onOpenUrgent: () => void;
  currentLang: Language;
  pendingOrdersCount?: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentTab,
  onTabChange,
  onOpenUrgent,
  currentLang,
  pendingOrdersCount = 0,
}) => {
  const t = translations[currentLang];

  return (
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[540px] md:max-w-[960px] bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1.5 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
      style={{ paddingBottom: 'calc(6px + var(--safe-b))' }}
      aria-label="App Bottom Navigation"
    >
      <div className="grid grid-cols-5 items-center">
        {/* Tab 1: Home */}
        <button
          type="button"
          onClick={() => onTabChange('home')}
          className={`flex flex-col items-center justify-center gap-0.5 py-1 text-[11px] font-bold transition-colors ${
            currentTab === 'home' ? 'text-teal-700' : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <Home className="w-5 h-5" />
          <span>{t.tabHome}</span>
        </button>

        {/* Tab 2: Services */}
        <button
          type="button"
          onClick={() => onTabChange('services')}
          className={`flex flex-col items-center justify-center gap-0.5 py-1 text-[11px] font-bold transition-colors ${
            currentTab === 'services' ? 'text-teal-700' : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <Stethoscope className="w-5 h-5" />
          <span>{t.tabServices}</span>
        </button>

        {/* Center Raised Action Button */}
        <button
          type="button"
          onClick={onOpenUrgent}
          className="relative -top-4 flex flex-col items-center justify-center group focus:outline-hidden"
          aria-label={t.urgentBtn}
        >
          <div className="w-13 h-13 rounded-full bg-gradient-to-tr from-rose-700 to-rose-500 text-white flex items-center justify-center shadow-lg shadow-rose-600/30 border-3 border-white group-hover:scale-105 active:scale-95 transition-transform">
            <Siren className="w-6 h-6 animate-pulse" />
          </div>
          <span className="text-[10px] font-black text-rose-600 mt-0.5 leading-none">
            {t.tabUrgent}
          </span>
        </button>

        {/* Tab 4: Tourism */}
        <button
          type="button"
          onClick={() => onTabChange('tourism')}
          className={`flex flex-col items-center justify-center gap-0.5 py-1 text-[11px] font-bold transition-colors ${
            currentTab === 'tourism' ? 'text-teal-700' : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <Plane className="w-5 h-5" />
          <span>{t.tabTourism}</span>
        </button>

        {/* Tab 5: Account */}
        <button
          type="button"
          onClick={() => onTabChange('account')}
          className={`relative flex flex-col items-center justify-center gap-0.5 py-1 text-[11px] font-bold transition-colors ${
            currentTab === 'account' ? 'text-teal-700' : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <User className="w-5 h-5" />
          <span>{t.tabAccount}</span>
          {pendingOrdersCount > 0 && (
            <span className="absolute top-0 right-4 w-4 h-4 bg-teal-600 text-white rounded-full text-[9px] flex items-center justify-center font-bold">
              {pendingOrdersCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};
