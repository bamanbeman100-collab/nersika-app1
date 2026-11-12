import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSearch } from './components/HeroSearch';
import { ServicesGrid } from './components/ServicesGrid';
import { TourismSection } from './components/TourismSection';
import { WorkflowSteps } from './components/WorkflowSteps';
import { FaqSection } from './components/FaqSection';
import { ContactCard } from './components/ContactCard';
import { BottomNav } from './components/BottomNav';
import { Toast } from './components/Toast';
import { UrgentRequestSheet } from './components/modals/UrgentRequestSheet';
import { TourismSheet } from './components/modals/TourismSheet';
import { NurseCooperationSheet } from './components/modals/NurseCooperationSheet';
import { AuthSheet } from './components/modals/AuthSheet';
import { PriceEstimatorSheet } from './components/modals/PriceEstimatorSheet';

import {
  Language,
  TabType,
  ServiceItem,
  NursingRequest,
  TourismRequest,
  NurseApplication,
} from './types';
import { isRTL, translations } from './utils/i18n';

export default function App() {
  const [lang, setLang] = useState<Language>('fa');
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // User state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPhone, setUserPhone] = useState('09121234567');
  const [userName, setUserName] = useState('کاربر نرسیکا');

  // Orders & Requests state
  const [orders, setOrders] = useState<NursingRequest[]>([
    {
      id: 'req-101',
      serviceName: 'پرستار در منزل',
      requesterName: 'محمد احمدی',
      phone: '09121234567',
      location: 'تهران، سعادت‌آباد',
      shift: 'daily',
      notes: 'کنترل قند و فشار خون سالمند',
      estimatedPrice: 650000,
      status: 'matching',
      createdAt: 'امروز، ساعت ۱۰:۳۰',
    },
  ]);

  const [tourismOrders, setTourismOrders] = useState<TourismRequest[]>([]);
  const [nurseApps, setNurseApps] = useState<NurseApplication[]>([]);

  // Modals state
  const [isUrgentOpen, setIsUrgentOpen] = useState(false);
  const [selectedServiceForUrgent, setSelectedServiceForUrgent] = useState('پرستار در منزل');
  const [isTourismOpen, setIsTourismOpen] = useState(false);
  const [isNurseCoopOpen, setIsNurseCoopOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  // Sync RTL and lang attribute
  useEffect(() => {
    const rtl = isRTL(lang);
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg((prev) => (prev === msg ? null : prev));
    }, 3200);
  };

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    const langNames: Record<Language, string> = {
      fa: 'فارسی',
      ar: 'العربية',
      en: 'English',
      tr: 'Türkçe',
      ru: 'Русский',
    };
    showToast(`زبان برنامه تغییر کرد: ${langNames[newLang]}`);
  };

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(
      () => showToast(`کپی شد: ${text}`),
      () => showToast(`کپی شد: ${text}`)
    );
  };

  const handleSelectServiceFromGrid = (service: ServiceItem) => {
    setSelectedServiceForUrgent(service.titleKey);
    setIsUrgentOpen(true);
  };

  const handleSelectServiceAndOpen = (serviceName: string) => {
    setSelectedServiceForUrgent(serviceName);
    setIsUrgentOpen(true);
  };

  const handleBookWithEstimate = (
    serviceName: string,
    shift: 'daily' | 'night' | '24h' | 'hourly',
    days: number
  ) => {
    setSelectedServiceForUrgent(`${serviceName} (${days} روز)`);
    setIsUrgentOpen(true);
  };

  const handleUrgentSubmit = (data: Omit<NursingRequest, 'id' | 'status' | 'createdAt'>) => {
    const newRequest: NursingRequest = {
      ...data,
      id: `req-${Date.now().toString().slice(-4)}`,
      status: 'matching',
      createdAt: 'همین الان',
    };
    setOrders((prev) => [newRequest, ...prev]);
    setIsLoggedIn(true);
    setUserPhone(data.phone);
    setUserName(data.requesterName);
    showToast('درخواست پرستار شما با موفقیت ثبت شد. کارشناس تریاژ تا دقایقی دیگر تماس می‌گیرد.');
  };

  const handleTourismSubmit = (data: Omit<TourismRequest, 'id' | 'status' | 'createdAt'>) => {
    const newTourism: TourismRequest = {
      ...data,
      id: `tour-${Date.now().toString().slice(-4)}`,
      status: 'received',
      createdAt: 'همین الان',
    };
    setTourismOrders((prev) => [newTourism, ...prev]);
    showToast('درخواست گردشگری سلامت شما ثبت شد. تیم بین‌الملل با شما ارتباط برقرار خواهد کرد.');
  };

  const handleNurseSubmit = (data: Omit<NurseApplication, 'id' | 'status' | 'createdAt'>) => {
    const newApp: NurseApplication = {
      ...data,
      id: `nurse-${Date.now().toString().slice(-4)}`,
      status: 'under_review',
      createdAt: 'همین الان',
    };
    setNurseApps((prev) => [newApp, ...prev]);
    showToast('اطلاعات همکاری شما ثبت شد. لینک آزمون علمی و احراز هویت پیامک خواهد شد.');
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'services') {
      const el = document.getElementById('services-sec');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'tourism') {
      const el = document.getElementById('tourism-sec');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'account') {
      setIsAuthOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center selection:bg-teal-600 selection:text-white">
      {/* App Container / Mobile Shell */}
      <div className="w-full max-w-[540px] md:max-w-[960px] min-h-screen bg-slate-50 flex flex-col relative pb-28 shadow-2xl border-x border-slate-200">
        
        {/* App Bar / Header */}
        <Header
          currentLang={lang}
          onLanguageChange={handleLanguageChange}
          onOpenAuth={() => setIsAuthOpen(true)}
          isLoggedIn={isLoggedIn}
          userName={userName}
        />

        {/* Main Body */}
        <main className="p-3.5 sm:p-5 flex flex-col gap-5">
          {/* Hero Section & Quick Actions */}
          <HeroSearch
            currentLang={lang}
            onSelectServiceAndOpen={handleSelectServiceAndOpen}
            onOpenUrgent={() => {
              setSelectedServiceForUrgent('پرستار در منزل');
              setIsUrgentOpen(true);
            }}
            onOpenNurseCoop={() => setIsNurseCoopOpen(true)}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />

          {/* Banner 1: Fast Dispatch */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 bg-teal-900">
            <img
              src="/assets/banner-1.svg"
              alt="اعزام فوری پرستار نرسیکا"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>

          {/* Services Grid (10 active services) */}
          <ServicesGrid
            currentLang={lang}
            onSelectService={handleSelectServiceFromGrid}
          />

          {/* Health Tourism Section */}
          <TourismSection
            currentLang={lang}
            onOpenTourismModal={() => setIsTourismOpen(true)}
          />

          {/* 5-Step Workflow Cards */}
          <WorkflowSteps currentLang={lang} />

          {/* Banner 3: Trust & Quality Guarantee */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 bg-slate-900">
            <img
              src="/assets/banner-3.svg"
              alt="ضمانت کیفیت خدمات نرسیکا"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>

          {/* Frequently Asked Questions */}
          <FaqSection currentLang={lang} />

          {/* Contact & Support Card */}
          <ContactCard
            currentLang={lang}
            onCopyText={handleCopyText}
          />
        </main>

        {/* Bottom Navigation Tab Bar */}
        <BottomNav
          currentTab={activeTab}
          onTabChange={handleTabChange}
          onOpenUrgent={() => {
            setSelectedServiceForUrgent('پرستار در منزل');
            setIsUrgentOpen(true);
          }}
          currentLang={lang}
          pendingOrdersCount={orders.length}
        />

        {/* Modals & Bottom Sheets */}
        <UrgentRequestSheet
          isOpen={isUrgentOpen}
          onClose={() => setIsUrgentOpen(false)}
          currentLang={lang}
          initialService={selectedServiceForUrgent}
          onSubmit={handleUrgentSubmit}
        />

        <TourismSheet
          isOpen={isTourismOpen}
          onClose={() => setIsTourismOpen(false)}
          currentLang={lang}
          onSubmit={handleTourismSubmit}
        />

        <NurseCooperationSheet
          isOpen={isNurseCoopOpen}
          onClose={() => setIsNurseCoopOpen(false)}
          currentLang={lang}
          onSubmit={handleNurseSubmit}
        />

        <AuthSheet
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
          currentLang={lang}
          isLoggedIn={isLoggedIn}
          userPhone={userPhone}
          userName={userName}
          onLogin={(phone, name) => {
            setIsLoggedIn(true);
            setUserPhone(phone);
            setUserName(name);
            showToast(`خوش آمدید، ${name}`);
          }}
          onLogout={() => {
            setIsLoggedIn(false);
            showToast('با موفقیت از حساب کاربری خارج شدید.');
          }}
          orders={orders}
          tourismOrders={tourismOrders}
        />

        <PriceEstimatorSheet
          isOpen={isEstimatorOpen}
          onClose={() => setIsEstimatorOpen(false)}
          currentLang={lang}
          onBookWithEstimate={handleBookWithEstimate}
        />

        {/* Toast Feedback */}
        <Toast message={toastMsg} />
      </div>
    </div>
  );
}
