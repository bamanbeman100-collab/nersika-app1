import React from 'react';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'info' | 'error';
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success' }) => {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed top-16 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-slate-900/95 text-white px-4 py-2.5 rounded-full shadow-2xl text-xs sm:text-sm font-bold border border-slate-700/60 backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-200 pointer-events-none max-w-[90vw] text-center"
    >
      {type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
      {type === 'error' && <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />}
      {type === 'info' && <Info className="w-4 h-4 text-teal-400 shrink-0" />}
      <span className="truncate">{message}</span>
    </div>
  );
};
