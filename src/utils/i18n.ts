import { Language } from '../types';

export const isRTL = (lang: Language): boolean => lang === 'fa' || lang === 'ar';

export interface Translations {
  appName: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroDesc: string;
  supportCall: string;
  login: string;
  myAccount: string;
  quickSearchSelect: string;
  requestBtn: string;
  urgentBtn: string;
  urgentSub: string;
  coopBtn: string;
  coopSub: string;
  emergencyAlert: string;
  call115: string;
  servicesTitle: string;
  activeServicesCount: string;
  healthTourismTitle: string;
  healthTourismBadge: string;
  healthTourismDesc: string;
  healthTourismBtn: string;
  howItWorksTitle: string;
  stepsCount: string;
  faqTitle: string;
  hqTitle: string;
  copyAddress: string;
  copyPostal: string;
  phoneLandline: string;
  phoneMobile: string;
  copiedToast: string;
  // Tabs
  tabHome: string;
  tabServices: string;
  tabUrgent: string;
  tabTourism: string;
  tabAccount: string;
  // Forms & Modals
  close: string;
  serviceType: string;
  fullName: string;
  mobileNumber: string;
  cityArea: string;
  patientStatusNotes: string;
  submitUrgent: string;
  tourismFormTitle: string;
  patientName: string;
  whatsappContact: string;
  medicalSpecialty: string;
  submitTourism: string;
  nurseFormTitle: string;
  degreeLabel: string;
  nurseCouncilCode: string;
  submitNurse: string;
  priceEstimate: string;
  calculatorTitle: string;
  shiftSelect: string;
  shiftDaily: string;
  shiftNight: string;
  shift24h: string;
  shiftHourly: string;
  daysLabel: string;
}

export const translations: Record<Language, Translations> = {
  fa: {
    appName: 'نرسیکا',
    heroTitle: 'مراقبت هوشمند،',
    heroTitleHighlight: 'همراهی مطمئن',
    heroDesc: 'اعزام پرستار و مراقب احراز هویت‌شده به منزل و بیمارستان در سراسر کشور',
    supportCall: 'پشتیبانی',
    login: 'ورود',
    myAccount: 'حساب من',
    quickSearchSelect: 'انتخاب نوع خدمت...',
    requestBtn: 'درخواست',
    urgentBtn: 'ثبت فوری پرستار',
    urgentSub: 'اعزام سریع و هماهنگی',
    coopBtn: 'همکاری پرستاران',
    coopSub: 'ثبت‌نام و ارزیابی',
    emergencyAlert: 'در شرایط تهدیدکننده حیات با اورژانس تماس بگیرید.',
    call115: 'تماس ۱۱۵',
    servicesTitle: 'خدمات پرستاری و مراقبت',
    activeServicesCount: '۱۰ خدمت فعال',
    healthTourismTitle: 'گردشگری سلامت در ایران',
    healthTourismBadge: 'NERSIKA HEALTH TOURISM',
    healthTourismDesc: 'ویژه بیماران داخلی و بین‌المللی: مشاوره پزشکی، برآورد هزینه، رزرو بیمارستان، اقامت، مترجم و ترانسفر فرودگاهی.',
    healthTourismBtn: 'ثبت درخواست گردشگری سلامت',
    howItWorksTitle: 'مراحل دریافت خدمت',
    stepsCount: '۵ گام ساده',
    faqTitle: 'پرسش‌های متداول',
    hqTitle: 'دفتر مرکزی و پشتیبانی نرسیکا',
    copyAddress: 'کپی آدرس',
    copyPostal: 'کپی کد',
    phoneLandline: 'تلفن ثابت:',
    phoneMobile: 'شماره همراه:',
    copiedToast: 'کپی شد:',
    tabHome: 'خانه',
    tabServices: 'خدمات',
    tabUrgent: 'ثبت فوری',
    tabTourism: 'گردشگری',
    tabAccount: 'حساب من',
    close: 'بستن',
    serviceType: 'نوع خدمت مورد نیاز',
    fullName: 'نام و نام خانوادگی درخواست‌کننده',
    mobileNumber: 'شماره موبایل',
    cityArea: 'شهر و محدوده سکونت / بیمارستان',
    patientStatusNotes: 'توضیحات وضعیت بیمار (اختیاری)',
    submitUrgent: 'تأیید و ارسال درخواست فوری',
    tourismFormTitle: 'درخواست گردشگری سلامت',
    patientName: 'نام بیمار / همراه',
    whatsappContact: 'شماره واتساپ یا تماس بین‌الملل',
    medicalSpecialty: 'تخصص درمانی مورد نظر',
    submitTourism: 'دریافت مشاوره و برآورد هزینه',
    nurseFormTitle: 'ثبت‌نام همکاری کادر درمان و پرستاران',
    degreeLabel: 'مدرک تحصیلی / تخصص',
    nurseCouncilCode: 'شماره نظام پرستاری (اختیاری)',
    submitNurse: 'شروع فرآیند ارزیابی و همکاری',
    priceEstimate: 'برآورد هزینه تقریبی:',
    calculatorTitle: 'محاسبه‌گر شفاف هزینه پرستاری',
    shiftSelect: 'شیفت مورد نیاز',
    shiftDaily: 'روزانه (۸ الی ۱۲ ساعت)',
    shiftNight: 'شبانه (۱۲ ساعت شب)',
    shift24h: 'شبانه‌روزی (۲۴ ساعته)',
    shiftHourly: 'ساعتی و موردی',
    daysLabel: 'تعداد روزها',
  },
  ar: {
    appName: 'نرسيكا',
    heroTitle: 'رعاية ذكية،',
    heroTitleHighlight: 'رفقة موثوقة',
    heroDesc: 'إرسال ممرضين ومقدمي رعاية معتمدين إلى المنازل والمستشفيات في جميع أنحاء إيران',
    supportCall: 'الدعم',
    login: 'تسجيل الدخول',
    myAccount: 'حسابي',
    quickSearchSelect: 'اختر نوع الخدمة...',
    requestBtn: 'طلب',
    urgentBtn: 'طلب تمريض فوري',
    urgentSub: 'إرسال سريع وتنسيق',
    coopBtn: 'انضمام الممرضين',
    coopSub: 'التسجيل والتقييم',
    emergencyAlert: 'في الحالات المهددة للحياة، اتصل بالإسعاف فوراً.',
    call115: 'اتصال 115',
    servicesTitle: 'خدمات التمريض والرعاية',
    activeServicesCount: '١٠ خدمات نشطة',
    healthTourismTitle: 'السياحة العلاجية في إيران',
    healthTourismBadge: 'سياحة نرسيكا العلاجية',
    healthTourismDesc: 'للمرضى الدوليين: استشارات طبية، تقدير التكاليف، حجز المستشفيات، الإقامة، الترجمة، والاستقبال في المطار.',
    healthTourismBtn: 'طلب خدمة السياحة العلاجية',
    howItWorksTitle: 'مراحل الحصول على الخدمة',
    stepsCount: '٥ خطوات سهلة',
    faqTitle: 'الأسئلة الشائعة',
    hqTitle: 'المكتب الرئيسي والدعم',
    copyAddress: 'نسخ العنوان',
    copyPostal: 'نسخ الرمز',
    phoneLandline: 'الهاتف الثابت:',
    phoneMobile: 'الجوال:',
    copiedToast: 'تم النسخ:',
    tabHome: 'الرئيسية',
    tabServices: 'الخدمات',
    tabUrgent: 'طلب فوري',
    tabTourism: 'السياحة',
    tabAccount: 'حسابي',
    close: 'إغلاق',
    serviceType: 'نوع الخدمة المطلوبة',
    fullName: 'الاسم واللقب',
    mobileNumber: 'رقم الهاتف / الواتساب',
    cityArea: 'المدينة / المستشفى',
    patientStatusNotes: 'ملاحظات حول حالة المريض',
    submitUrgent: 'تأكيد وإرسال الطلب الفوري',
    tourismFormTitle: 'طلب السياحة الصحية والعلاجية',
    patientName: 'اسم المريض / المرافق',
    whatsappContact: 'رقم الواتساب الدولي',
    medicalSpecialty: 'التخصص الطبي المطلوب',
    submitTourism: 'طلب الاستشارة وتقدير التكلفة',
    nurseFormTitle: 'تسجيل تعاون الممرضين',
    degreeLabel: 'المؤهل العلمي / التخصص',
    nurseCouncilCode: 'رقم التسجيل المهني',
    submitNurse: 'بدء إجراءات التقييم والتعاون',
    priceEstimate: 'التكلفة التقديرية:',
    calculatorTitle: 'حاسبة تكاليف التمريض',
    shiftSelect: 'الوردية المطلوبة',
    shiftDaily: 'نهاري (8-12 ساعة)',
    shiftNight: 'ليلي (12 ساعة)',
    shift24h: 'على مدار 24 ساعة',
    shiftHourly: 'بالساعة',
    daysLabel: 'عدد الأيام',
  },
  en: {
    appName: 'Nersika',
    heroTitle: 'Smart Care,',
    heroTitleHighlight: 'Trusted Companionship',
    heroDesc: 'Verified nurses and caregivers dispatched to homes and hospitals nationwide',
    supportCall: 'Support',
    login: 'Login',
    myAccount: 'My Account',
    quickSearchSelect: 'Select a service...',
    requestBtn: 'Request',
    urgentBtn: 'Urgent Nurse Request',
    urgentSub: 'Fast dispatch & coordination',
    coopBtn: 'Join as a Nurse',
    coopSub: 'Registration & vetting',
    emergencyAlert: 'For life-threatening emergencies, call emergency services immediately.',
    call115: 'Call 115',
    servicesTitle: 'Nursing & Care Services',
    activeServicesCount: '10 Active Services',
    healthTourismTitle: 'Health Tourism in Iran',
    healthTourismBadge: 'NERSIKA HEALTH TOURISM',
    healthTourismDesc: 'For domestic and international patients: Medical consults, cost estimation, premier hospital booking, accommodation, translation, and VIP airport transfer.',
    healthTourismBtn: 'Request Health Tourism',
    howItWorksTitle: 'How It Works',
    stepsCount: '5 Easy Steps',
    faqTitle: 'Frequently Asked Questions',
    hqTitle: 'Nersika HQ & Support Center',
    copyAddress: 'Copy Address',
    copyPostal: 'Copy Postal Code',
    phoneLandline: 'Landline:',
    phoneMobile: 'Mobile:',
    copiedToast: 'Copied:',
    tabHome: 'Home',
    tabServices: 'Services',
    tabUrgent: 'Urgent',
    tabTourism: 'Tourism',
    tabAccount: 'Account',
    close: 'Close',
    serviceType: 'Required Service Type',
    fullName: 'Full Name',
    mobileNumber: 'Mobile Number',
    cityArea: 'City & District / Hospital',
    patientStatusNotes: 'Patient condition / instructions (optional)',
    submitUrgent: 'Confirm & Dispatch Nurse',
    tourismFormTitle: 'Health Tourism Request',
    patientName: 'Patient / Escort Name',
    whatsappContact: 'WhatsApp or International Phone',
    medicalSpecialty: 'Desired Medical Specialty',
    submitTourism: 'Get Free Consultation & Quote',
    nurseFormTitle: 'Nurse & Caregiver Registration',
    degreeLabel: 'Education Degree / Specialty',
    nurseCouncilCode: 'Medical / Nursing Council ID (optional)',
    submitNurse: 'Begin Assessment & Application',
    priceEstimate: 'Estimated Cost:',
    calculatorTitle: 'Transparent Pricing Calculator',
    shiftSelect: 'Shift Type',
    shiftDaily: 'Day Shift (8-12 Hours)',
    shiftNight: 'Night Shift (12 Hours)',
    shift24h: '24/7 Full Day Care',
    shiftHourly: 'Hourly / As Needed',
    daysLabel: 'Number of Days',
  },
  tr: {
    appName: 'Nersika',
    heroTitle: 'Akıllı Bakım,',
    heroTitleHighlight: 'Güvenilir Refakat',
    heroDesc: 'Doğrulanmış hemşire ve hasta bakıcıların ev ve hastanelere hızlı sevki',
    supportCall: 'Destek',
    login: 'Giriş',
    myAccount: 'Hesabım',
    quickSearchSelect: 'Hizmet seçin...',
    requestBtn: 'Talep Et',
    urgentBtn: 'Acil Hemşire Talebi',
    urgentSub: 'Hızlı sevk ve koordinasyon',
    coopBtn: 'Hemşire Başvurusu',
    coopSub: 'Kayıt ve değerlendirme',
    emergencyAlert: 'Hayati tehlike arz eden durumlarda lütfen acil servisi arayın.',
    call115: 'Ara: 115',
    servicesTitle: 'Hemşirelik ve Bakım Hizmetleri',
    activeServicesCount: '10 Aktif Hizmet',
    healthTourismTitle: 'İran Sağlık Turizmi',
    healthTourismBadge: 'NERSIKA SAĞLIK TURİZMİ',
    healthTourismDesc: 'Uluslararası hastalar için: Tıbbi danışmanlık, maliyet tahmini, hastane rezervasyonu, konaklama, tercüman ve VIP transfer.',
    healthTourismBtn: 'Sağlık Turizmi Talebi Gönder',
    howItWorksTitle: 'Hizmet Alma Aşamaları',
    stepsCount: '5 Kolay Adım',
    faqTitle: 'Sıkça Sorulan Sorular',
    hqTitle: 'Nersika Merkez Ofisi ve Destek',
    copyAddress: 'Adresi Kopyala',
    copyPostal: 'Kodu Kopyala',
    phoneLandline: 'Sabit Hat:',
    phoneMobile: 'Cep Telefonu:',
    copiedToast: 'Kopyalandı:',
    tabHome: 'Ana Sayfa',
    tabServices: 'Hizmetler',
    tabUrgent: 'Acil Talep',
    tabTourism: 'Turizm',
    tabAccount: 'Hesabım',
    close: 'Kapat',
    serviceType: 'İhtiyaç Duyulan Hizmet',
    fullName: 'Ad ve Soyad',
    mobileNumber: 'Cep Telefonu',
    cityArea: 'Şehir / Hastane',
    patientStatusNotes: 'Hasta durumu açıklaması',
    submitUrgent: 'Acil Talebi Onayla ve Gönder',
    tourismFormTitle: 'Sağlık Turizmi Başvurusu',
    patientName: 'Hasta / Refakatçi Adı',
    whatsappContact: 'WhatsApp veya Telefon',
    medicalSpecialty: 'Tedavi Branşı',
    submitTourism: 'Ücretsiz Danışmanlık ve Fiyat Al',
    nurseFormTitle: 'Hemşire İşbirliği Başvurusu',
    degreeLabel: 'Mezuniyet / Uzmanlık',
    nurseCouncilCode: 'Hemşirelik Lisans No',
    submitNurse: 'Değerlendirme Sürecini Başlat',
    priceEstimate: 'Tahmini Ücret:',
    calculatorTitle: 'Şeffaf Fiyat Hesaplayıcı',
    shiftSelect: 'Vardiya Türü',
    shiftDaily: 'Gündüz (8-12 Saat)',
    shiftNight: 'Gece (12 Saat)',
    shift24h: '24 Saat Kesintisiz',
    shiftHourly: 'Saatlik / İhtiyaç Halinde',
    daysLabel: 'Gün Sayısı',
  },
  ru: {
    appName: 'Нерсика',
    heroTitle: 'Умный уход,',
    heroTitleHighlight: 'Надежная забота',
    heroDesc: 'Выезд сертифицированных медсестер и сиделок на дом и в больницы по всей стране',
    supportCall: 'Поддержка',
    login: 'Вход',
    myAccount: 'Мой аккаунт',
    quickSearchSelect: 'Выберите услугу...',
    requestBtn: 'Заказать',
    urgentBtn: 'Срочный вызов медсестры',
    urgentSub: 'Быстрый выезд и координация',
    coopBtn: 'Работа для медсестер',
    coopSub: 'Регистрация и оценка',
    emergencyAlert: 'При угрозе жизни немедленно вызывайте скорую помощь.',
    call115: 'Звонок 115',
    servicesTitle: 'Услуги медсестер и ухода',
    activeServicesCount: '10 активных услуг',
    healthTourismTitle: 'Медицинский туризм в Иране',
    healthTourismBadge: 'NERSIKA HEALTH TOURISM',
    healthTourismDesc: 'Для пациентов: консультация врачей, расчет стоимости, бронирование клиник, отелей, переводчик и трансфер.',
    healthTourismBtn: 'Оставить заявку на медтуризм',
    howItWorksTitle: 'Как это работает',
    stepsCount: '5 простых шагов',
    faqTitle: 'Часто задаваемые вопросы',
    hqTitle: 'Главный офис и поддержка Нерсика',
    copyAddress: 'Копировать адрес',
    copyPostal: 'Копировать индекс',
    phoneLandline: 'Городской телефон:',
    phoneMobile: 'Мобильный:',
    copiedToast: 'Скопировано:',
    tabHome: 'Главная',
    tabServices: 'Услуги',
    tabUrgent: 'Срочно',
    tabTourism: 'Туризм',
    tabAccount: 'Профиль',
    close: 'Закрыть',
    serviceType: 'Требуемая услуга',
    fullName: 'ФИО заявителя',
    mobileNumber: 'Номер телефона',
    cityArea: 'Город и район / Больница',
    patientStatusNotes: 'Состояние пациента и пожелания',
    submitUrgent: 'Подтвердить и вызвать медсестру',
    tourismFormTitle: 'Заявка на медицинский туризм',
    patientName: 'Имя пациента / сопровождающего',
    whatsappContact: 'WhatsApp или телефон',
    medicalSpecialty: 'Медицинское направление',
    submitTourism: 'Получить консультацию и расчет',
    nurseFormTitle: 'Регистрация медицинского персонала',
    degreeLabel: 'Образование / Квалификация',
    nurseCouncilCode: 'Номер сертификата / лицензии',
    submitNurse: 'Начать процесс оценки',
    priceEstimate: 'Ориентировочная стоимость:',
    calculatorTitle: 'Калькулятор стоимости услуг',
    shiftSelect: 'Тип смены',
    shiftDaily: 'Дневная (8-12 часов)',
    shiftNight: 'Ночная (12 часов)',
    shift24h: 'Круглосуточно (24 часа)',
    shiftHourly: 'Почасовая',
    daysLabel: 'Количество дней',
  },
};
