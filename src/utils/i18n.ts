import { Language } from '../types';

export const isRTL = (lang: Language): boolean => lang === 'fa' || lang === 'ar';

export interface ServiceTranslation {
  title: string;
  desc: string;
  badge?: string;
  unit: string;
}

export interface StepTranslation {
  title: string;
  desc: string;
}

export interface FaqTranslation {
  q: string;
  a: string;
}

export interface SpecialtyTranslation {
  id: string;
  title: string;
}

export interface Translations {
  appName: string;
  appBadge: string;
  brandSlogan: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroDesc: string;
  heroBadge: string;
  supportCall: string;
  login: string;
  myAccount: string;
  quickSearchSelect: string;
  quickOptions: { value: string; label: string }[];
  requestBtn: string;
  urgentBtn: string;
  urgentSub: string;
  coopBtn: string;
  coopSub: string;
  emergencyAlert: string;
  call115: string;
  avgDispatchTime: string;
  openEstimatorLink: string;

  // Services
  servicesTitle: string;
  activeServicesCount: string;
  categories: { key: string; label: string }[];
  startingPricePrefix: string;
  services: Record<string, ServiceTranslation>;

  // Tourism
  healthTourismTitle: string;
  healthTourismBadge: string;
  healthTourismIPD: string;
  healthTourismDesc: string;
  tourismAdvantages: { title: string }[];
  prioritySpecialtiesLabel: string;
  specialties: SpecialtyTranslation[];
  healthTourismBtn: string;

  // Workflow
  howItWorksTitle: string;
  stepsCount: string;
  stepPrefix: string;
  ofSteps: string;
  steps: StepTranslation[];

  // FAQ
  faqTitle: string;
  faqs: FaqTranslation[];

  // Contact
  hqTitle: string;
  addressText: string;
  copyAddress: string;
  postalCodeLabel: string;
  copyPostal: string;
  phoneLandline: string;
  phoneMobile: string;
  copyBtn: string;
  copiedToast: string;

  // Bottom Nav
  tabHome: string;
  tabServices: string;
  tabUrgent: string;
  tabTourism: string;
  tabAccount: string;

  // Urgent Modal
  urgentModalTitle: string;
  urgentModalSub: string;
  serviceTypeLabel: string;
  serviceTypePlaceholder: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  mobileLabel: string;
  cityAreaLabel: string;
  cityAreaPlaceholder: string;
  shiftSelectLabel: string;
  shifts: { id: string; label: string }[];
  notesLabel: string;
  notesPlaceholder: string;
  estimateInitialLabel: string;
  insuranceDispatchIncluded: string;
  submitUrgentBtn: string;
  submittingText: string;
  urgentSuccessToast: string;
  emailSentBadge: string;

  // Tourism Modal
  tourismModalTitle: string;
  tourismModalSub: string;
  patientNameLabel: string;
  patientNamePlaceholder: string;
  whatsappLabel: string;
  countryLabel: string;
  countries: string[];
  medicalSpecialtyLabel: string;
  tourismNotesPlaceholder: string;
  ipdNotice: string;
  submitTourismBtn: string;
  tourismSuccessToast: string;

  // Nurse Modal
  nurseModalTitle: string;
  nurseModalSub: string;
  nurseCityPlaceholder: string;
  degreeLabel: string;
  degrees: string[];
  councilCodeLabel: string;
  councilCodePlaceholder: string;
  experienceLabel: string;
  experienceOptions: string[];
  nurseBenefitsTitle: string;
  nurseBenefitsText: string;
  submitNurseBtn: string;
  nurseSuccessToast: string;

  // Auth / Orders Modal
  authModalTitle: string;
  authModalTitleLoggedIn: string;
  authModalSub: string;
  authLoginDesc: string;
  yourNameOptional: string;
  yourNamePlaceholder: string;
  sendOtpBtn: string;
  otpNotice: string;
  otpCodeLabel: string;
  changePhoneBtn: string;
  verifyLoginBtn: string;
  userGreeting: string;
  logoutBtn: string;
  activeOrdersTitle: string;
  noOrdersDesc: string;
  statusReviewing: string;
  statusIpd: string;

  // Price Estimator Modal
  estimatorModalTitle: string;
  estimatorModalSub: string;
  selectServiceEstimateLabel: string;
  careDurationLabel: string;
  daysUnit: string;
  specialCareCheckbox: string;
  urgentDispatchCheckbox: string;
  finalEstimateLabel: string;
  invoiceGuaranteeNote: string;
  bookWithEstimateBtn: string;

  // Validation
  errServiceRequired: string;
  errNameRequired: string;
  errPhoneInvalid: string;
  errLocationRequired: string;
  errWhatsappInvalid: string;
  welcomeUser: string;
  logoutSuccess: string;
}

export const translations: Record<Language, Translations> = {
  fa: {
    appName: 'نرسیکا',
    appBadge: 'PRO',
    brandSlogan: 'مراقبت هوشمند، همراهی مطمئن',
    heroTitle: 'مراقبت هوشمند،',
    heroTitleHighlight: 'همراهی مطمئن',
    heroDesc: 'اعزام پرستار و مراقب احراز هویت‌شده به منزل و بیمارستان در سراسر کشور',
    heroBadge: 'پلتفرم تخصصی خدمات بالینی در محل',
    supportCall: 'پشتیبانی',
    login: 'ورود',
    myAccount: 'حساب من',
    quickSearchSelect: 'انتخاب نوع خدمت...',
    quickOptions: [
      { value: 'پرستار در منزل', label: 'پرستار در منزل' },
      { value: 'مراقبت از سالمند', label: 'مراقبت از سالمند' },
      { value: 'مراقبت پس از جراحی', label: 'مراقبت پس از جراحی' },
      { value: 'همراه بیمار در بیمارستان', label: 'همراه بیمار در بیمارستان' },
      { value: 'مراقبت از کودک', label: 'مراقبت از کودک' },
      { value: 'مراقبت شبانه و ۲۴ ساعته', label: 'مراقبت شبانه و ۲۴ ساعته' },
      { value: 'تزریقات و پانسمان در منزل', label: 'تزریقات و پانسمان در منزل' },
    ],
    requestBtn: 'درخواست',
    urgentBtn: 'ثبت فوری پرستار',
    urgentSub: 'اعزام سریع و هماهنگی',
    coopBtn: 'همکاری پرستاران',
    coopSub: 'ثبت‌نام و ارزیابی',
    emergencyAlert: 'در شرایط تهدیدکننده حیات با اورژانس تماس بگیرید.',
    call115: 'تماس ۱۱۵',
    avgDispatchTime: 'میانگین زمان اعزام: کمتر از ۴۵ دقیقه',
    openEstimatorLink: 'استعلام و محاسبه آنلاین هزینه',

    servicesTitle: 'خدمات پرستاری و مراقبت',
    activeServicesCount: '۱۰ خدمت فعال',
    categories: [
      { key: 'all', label: 'همه خدمات' },
      { key: 'home', label: 'منزل و سالمند' },
      { key: 'hospital', label: 'بیمارستان و همراه' },
      { key: 'specialized', label: 'بالینی و جراحی' },
      { key: 'shift', label: 'شبانه و ۲۴ ساعته' },
    ],
    startingPricePrefix: 'شروع تعرفه از:',
    services: {
      s1: { title: 'پرستار در منزل', desc: 'مراقبت تخصصی بالینی و پرستاری در محل سکونت بیمار', badge: 'محبوب‌ترین', unit: 'روزانه (۸ ساعته)' },
      s2: { title: 'پرستار در بیمارستان', desc: 'همراهی تخصصی بیمار در بخش‌های بستری و ویژه بیمارستان', badge: 'اعزام سریع', unit: 'شیفت ۱۲ ساعته' },
      s3: { title: 'مراقبت از سالمند', desc: 'همراهی، تغذیه، نظافت و پایش روزانه شاخص‌های سلامت سالمند', badge: 'کادر مجرب', unit: 'روزانه' },
      s4: { title: 'مراقبت پس از جراحی', desc: 'پانسمان استریل، کنترل درن‌ها، مدیریت درد و تسریع نقاهت', badge: 'تخصصی', unit: 'شیفت مراقبت' },
      s5: { title: 'بیماری‌های مزمن', desc: 'مدیریت دارویی و پایش دیابت، فشار خون و نارسایی قلبی', unit: 'موردی / روزانه' },
      s6: { title: 'بیماران کم‌تحرک', desc: 'تغییر پوزیشن منظم، پیشگیری از زخم بستر و فیزیوتراپی پایه', unit: 'شیفت کامل' },
      s7: { title: 'مراقبت از کودک', desc: 'مراقبت کودک و نوزاد توسط نیروی ارزیابی‌شده و دارای گواهی', unit: 'شیفت روزانه' },
      s8: { title: 'شبانه و ۲۴ ساعته', desc: 'اعزام پرستار شب‌بیدار و مراقبت شبانه‌روزی تمام وقت', badge: '۲۴ ساعته', unit: '۲۴ ساعت' },
      s9: { title: 'ساعتی و روزانه', desc: 'زمان‌بندی منعطف و موردی جهت تزریقات، سرم‌تراپی و سونداژ', unit: 'هر ۴ ساعت' },
      s10: { title: 'همراه بیمار', desc: 'همراهی در مراجعات تشخیصی، تصویربرداری، آزمایشگاه و مطب', unit: 'شیفت اداری' },
    },

    healthTourismTitle: 'گردشگری سلامت در ایران',
    healthTourismBadge: 'NERSIKA HEALTH TOURISM',
    healthTourismIPD: 'پذیرش بین‌المللی IPD',
    healthTourismDesc: 'ویژه بیماران داخلی و بین‌المللی: مشاوره پزشکی، برآورد هزینه، رزرو بیمارستان، اقامت، مترجم و ترانسفر فرودگاهی.',
    tourismAdvantages: [
      { title: 'پزشکان فوق‌تخصص' },
      { title: 'تا ۷۰٪ صرفه‌جویی' },
      { title: 'مترجم همزمان ۲۴/۷' },
      { title: 'هتل و ترانسفر VIP' },
    ],
    prioritySpecialtiesLabel: 'زمینه‌های تخصصی دارای اولویت:',
    specialties: [
      { id: 'cosmetic', title: 'جراحی زیبایی و ترمیمی (رینوپلاستی، لیپوماتیک)' },
      { id: 'cardiology', title: 'قلب و عروق و آنژیوگرافی' },
      { id: 'orthopedic', title: 'ارتوپدی و تعویض مفاصل زانو و ران' },
      { id: 'ivf', title: 'درمان ناباروری و لقاح آزمایشگاهی (IVF)' },
      { id: 'ophthalmology', title: 'چشم‌پزشکی، لیزیک و دندانپزشکی دیجیتال' },
      { id: 'general', title: 'سایر جراحی‌های عمومی و درمان‌های تخصصی' },
    ],
    healthTourismBtn: 'ثبت درخواست گردشگری سلامت',

    howItWorksTitle: 'مراحل دریافت خدمت',
    stepsCount: '۵ گام ساده',
    stepPrefix: 'گام',
    ofSteps: 'از ۵',
    steps: [
      { title: 'ثبت درخواست', desc: 'تکمیل مشخصات بیمار، تعیین شیفت کاری و موقعیت مکانی سکونت یا بیمارستان' },
      { title: 'بررسی و تطبیق بالینی', desc: 'بررسی نیازهای بیمار توسط کارشناس ارشد تریاژ و انتخاب مناسب‌ترین پرستار' },
      { title: 'پیشنهاد و تأیید پرونده', desc: 'مشاهده مشخصات، سوابق تحصیلی و رضایت بیماران قبلی و تأیید پرونده توسط شما' },
      { title: 'پرداخت امن و قرارداد', desc: 'پرداخت مستقیم از درگاه بانکی مجاز، صدور قرارداد قانونی و فاکتور بیمه تکمیلی' },
      { title: 'اعزام و شروع مراقبت', desc: 'ثبت الکترونیکی ورود، ثبت پرونده بالینی روزانه و امتیازدهی به عملکرد پرستار' },
    ],

    faqTitle: 'پرسش‌های متداول',
    faqs: [
      {
        q: 'درخواست فوری با اورژانس ۱۱۵ چه فرقی دارد؟',
        a: 'درخواست فوری نرسیکا برای اعزام سریع پرستار خصوصی به منزل یا بیمارستان جهت مراقبت، تزریق، پانسمان یا همراهی بیمار است. در شرایط تهدیدکننده حیات مانند ایست قلبی، تنگی نفس شدید یا تصادفات، باید بدون فوت وقت با اورژانس ۱۱۵ تماس گرفته شود.',
      },
      {
        q: 'اطلاعات پزشکی بیمار و حریم خصوصی چگونه حفظ می‌شود؟',
        a: 'کلیه پرونده‌ها طبق پروتکل محرمانگی پزشکی ثبت می‌شوند و پرستار فقط به اطلاعات تشخیصی و دستوری لازم جهت ایمنی مراقبت دسترسی دارد. هیچ اطلاعاتی در اختیار اشخاص ثالث قرار نمی‌گیرد.',
      },
      {
        q: 'پرستاران و مراقبان نرسیکا چگونه تأیید و احراز هویت می‌شوند؟',
        a: 'پرستاران نرسیکا طی یک فرآیند چندمرحله‌ای شامل استعلام مدرک دانشگاهی، شماره نظام پرستاری، گواهی عدم سوءپیشینه، بررسی سلامت روانی و آزمون عملی صلاحیت بالینی انتخاب و گزینش می‌شوند.',
      },
      {
        q: 'هزینه‌ها چگونه محاسبه می‌شود و آیا امکان قرارداد رسمی وجود دارد؟',
        a: 'تعرفه‌ها بر اساس جدول مصوب خدمات بالینی در منزل، نوع شیفت (ساعتی، روز، شب یا ۲۴ ساعته) و شرایط بیمار محاسبه می‌شود. پس از ثبت نهایی، قرارداد رسمی و فاکتور معتبر جهت ارائه به بیمه‌های تکمیلی صادر می‌گردد.',
      },
    ],

    hqTitle: 'دفتر مرکزی و پشتیبانی نرسیکا',
    addressText: 'تهران، دانشگاه صنعتی شریف، مرکز نوآوری انرژی',
    copyAddress: 'کپی آدرس',
    postalCodeLabel: 'کد پستی:',
    copyPostal: 'کپی کد',
    phoneLandline: 'تلفن ثابت:',
    phoneMobile: 'شماره همراه:',
    copyBtn: 'کپی',
    copiedToast: 'کپی شد:',

    tabHome: 'خانه',
    tabServices: 'خدمات',
    tabUrgent: 'ثبت فوری',
    tabTourism: 'گردشگری',
    tabAccount: 'حساب من',

    urgentModalTitle: 'ثبت فوری پرستار / مراقب',
    urgentModalSub: 'هماهنگی و اعزام سریع در کمتر از ۴۵ دقیقه',
    serviceTypeLabel: 'نوع خدمت مورد نیاز',
    serviceTypePlaceholder: 'مثلاً: پرستار در منزل، مراقبت از سالمند...',
    fullNameLabel: 'نام و نام خانوادگی درخواست‌کننده',
    fullNamePlaceholder: 'نام کامل خود را وارد کنید',
    mobileLabel: 'شماره موبایل',
    cityAreaLabel: 'شهر و محدوده سکونت / بیمارستان',
    cityAreaPlaceholder: 'مثلاً: تهران، سعادت‌آباد یا بیمارستان آتیه',
    shiftSelectLabel: 'شیفت مورد نیاز',
    shifts: [
      { id: 'daily', label: 'روزانه (۸-۱۲س)' },
      { id: 'night', label: 'شبانه (۱۲س)' },
      { id: '24h', label: '۲۴ ساعته' },
      { id: 'hourly', label: 'ساعتی / موردی' },
    ],
    notesLabel: 'توضیحات وضعیت بیمار (اختیاری)',
    notesPlaceholder: 'سابقه بیماری، داروهای خاص، نیاز به سونداژ، تعویض پانسمان و...',
    estimateInitialLabel: 'برآورد اولیه هزینه شیفت انتخابی:',
    insuranceDispatchIncluded: 'شامل بیمه و اعزام فوری',
    submitUrgentBtn: 'تأیید و ارسال درخواست فوری',
    submittingText: 'در حال ارسال و ثبت به info@nersika.com...',
    urgentSuccessToast: 'درخواست پرستار شما ثبت و به ایمیل info@nersika.com ارسال گردید.',
    emailSentBadge: 'ارسال همزمان به ایمیل info@nersika.com',

    tourismModalTitle: 'درخواست گردشگری سلامت',
    tourismModalSub: 'مشاوره پزشکی رایگان، برآورد هزینه و پکیج VIP',
    patientNameLabel: 'نام بیمار / همراه',
    patientNamePlaceholder: 'نام و نام خانوادگی بیمار',
    whatsappLabel: 'شماره واتساپ یا تماس بین‌الملل',
    countryLabel: 'کشور مبدأ / محل اقامت',
    countries: ['عراق (Iraq)', 'عمان (Oman)', 'امارات (UAE)', 'کویت (Kuwait)', 'ترکیه (Turkey)', 'آذربایجان (Azerbaijan)', 'روسیه (Russia)', 'سایر کشورها'],
    medicalSpecialtyLabel: 'تخصص درمانی مورد نظر',
    tourismNotesPlaceholder: 'ارسال مدارک، آزمایش‌ها، عکس‌ها و اولویت زمان سفر در واتساپ هماهنگ خواهد شد...',
    ipdNotice: 'کلیه خدمات با مجوز رسمی وزارت بهداشت و تحت نظارت مستقیم دپارتمان بیماران بین‌الملل (IPD) انجام می‌پذیرد.',
    submitTourismBtn: 'دریافت مشاوره و برآورد هزینه',
    tourismSuccessToast: 'درخواست گردشگری سلامت ثبت و به ایمیل info@nersika.com ارسال گردید.',

    nurseModalTitle: 'ثبت‌نام همکاری کادر درمان و پرستاران',
    nurseModalSub: 'استخدام و عضویت در بزرگترین شبکه خدمات بالینی',
    nurseCityPlaceholder: 'مثلاً: تهران، کرج، شیراز، مشهد...',
    degreeLabel: 'مدرک تحصیلی / تخصص',
    degrees: [
      'کارشناس پرستاری (BSN)',
      'کارشناس ارشد پرستاری (MSN - ویژه/داخلی جراحی)',
      'بهیار / کمک‌بهیار دارای دیپلم بهیاری',
      'کارشناس اتاق عمل و هوشبری',
      'مراقب سالمند و کودک دارای گواهی فنی‌حرفه‌ای',
    ],
    councilCodeLabel: 'شماره نظام پرستاری (اختیاری)',
    councilCodePlaceholder: 'مثلاً 123456',
    experienceLabel: 'سابقه کار بالینی',
    experienceOptions: ['کمتر از ۱ سال (شروع همکاری)', '۱ تا ۳ سال', '۳ تا ۵ سال', 'بیش از ۵ سال (ارشد بالینی)'],
    nurseBenefitsTitle: 'مزایای همکاری با نرسیکا:',
    nurseBenefitsText: 'تسویه روزانه و شفاف، پوشش کامل بیمه حوادث بالینی، انتخاب شیفت آزاد و پرونده‌های نزدیک به محل سکونت.',
    submitNurseBtn: 'شروع فرآیند ارزیابی و همکاری',
    nurseSuccessToast: 'اطلاعات همکاری ثبت و به ایمیل info@nersika.com ارسال گردید.',

    authModalTitle: 'ورود / عضویت سریع',
    authModalTitleLoggedIn: 'حساب کاربری و پیگیری سفارشات',
    authModalSub: 'سامانه هوشمند مانیتورینگ بالینی نرسیکا',
    authLoginDesc: 'برای مشاهده وضعیت اعزام پرستار، پیگیری قرارداد و فاکتورها، شماره موبایل خود را وارد نمایید.',
    yourNameOptional: 'نام شما (اختیاری)',
    yourNamePlaceholder: 'مثلاً: علی رضایی',
    sendOtpBtn: 'ارسال کد ورود یک‌بار مصرف',
    otpNotice: 'کد تأیید به شماره موبایل شما پیامک شد. (برای تست می‌توانید 1234 را وارد نمایید).',
    otpCodeLabel: 'کد تأیید پیامک‌شده',
    changePhoneBtn: 'تغییر شماره',
    verifyLoginBtn: 'تأیید و ورود به حساب',
    userGreeting: 'کاربر گرامی',
    logoutBtn: 'خروج',
    activeOrdersTitle: 'درخواست‌های فعال و سوابق',
    noOrdersDesc: 'هنوز درخواستی ثبت نکرده‌اید. با کلیک بر روی دکمه ثبت فوری، نخستین درخواست خود را ثبت نمایید.',
    statusReviewing: 'در حال بررسی و تطبیق',
    statusIpd: 'هماهنگی پرونده IPD',

    estimatorModalTitle: 'محاسبه‌گر شفاف هزینه پرستاری',
    estimatorModalSub: 'محاسبه شفاف و رسمی طبق تعرفه‌های مصوب وزارت بهداشت',
    selectServiceEstimateLabel: 'انتخاب خدمت بالینی یا مراقبتی:',
    careDurationLabel: 'مدت زمان مراقبت:',
    daysUnit: 'روز',
    specialCareCheckbox: 'مراقبت تخصصی / ویژه (گاواژ، سوند، زخم بستر)',
    urgentDispatchCheckbox: 'اعزام فوری و اورژانسی (کمتر از ۴۵ دقیقه)',
    finalEstimateLabel: 'برآورد نهایی هزینه:',
    invoiceGuaranteeNote: 'فاکتور رسمی جهت ارائه به کلیه شرکت‌های بیمه پایه و تکمیلی صادر می‌گردد.',
    bookWithEstimateBtn: 'ثبت درخواست با این برآورد',

    errServiceRequired: 'لطفاً نوع خدمت را مشخص کنید.',
    errNameRequired: 'لطفاً نام و نام خانوادگی را وارد کنید.',
    errPhoneInvalid: 'شماره موبایل نامعتبر است (مثال: 09121234567)',
    errLocationRequired: 'لطفاً شهر و محدوده سکونت یا نام بیمارستان را وارد کنید.',
    errWhatsappInvalid: 'شماره واتساپ یا تماس بین‌المللی نامعتبر است (مثال: +9647801234567)',
    welcomeUser: 'خوش آمدید،',
    logoutSuccess: 'با موفقیت از حساب کاربری خارج شدید.',
  },

  ar: {
    appName: 'نرسيكا',
    appBadge: 'PRO',
    brandSlogan: 'رعاية ذكية، رفقة موثوقة',
    heroTitle: 'رعاية ذكية،',
    heroTitleHighlight: 'رفقة موثوقة',
    heroDesc: 'إرسال ممرضين ومقدمي رعاية معتمدين إلى المنازل والمستشفيات في جميع أنحاء إيران',
    heroBadge: 'المنصة الطبية التخصصية للرعاية المنزلية',
    supportCall: 'الدعم',
    login: 'تسجيل الدخول',
    myAccount: 'حسابي',
    quickSearchSelect: 'اختر نوع الخدمة...',
    quickOptions: [
      { value: 'تمريض منزلي', label: 'تمريض منزلي' },
      { value: 'رعاية المسنين', label: 'رعاية المسنين' },
      { value: 'رعاية ما بعد الجراحة', label: 'رعاية ما بعد الجراحة' },
      { value: 'مرافق مريض في المستشفى', label: 'مرافق مريض في المستشفى' },
      { value: 'رعاية الأطفال', label: 'رعاية الأطفال' },
      { value: 'رعاية ليلية وعلى مدار 24 ساعة', label: 'رعاية ليلية وعلى مدار 24 ساعة' },
      { value: 'حقن وتضميد منزلي', label: 'حقن وتضميد منزلي' },
    ],
    requestBtn: 'طلب',
    urgentBtn: 'طلب تمريض فوري',
    urgentSub: 'إرسال سريع وتنسيق',
    coopBtn: 'انضمام الممرضين',
    coopSub: 'التسجيل والتقييم',
    emergencyAlert: 'في الحالات المهددة للحياة، اتصل بالإسعاف فوراً.',
    call115: 'اتصال 115',
    avgDispatchTime: 'متوسط وقت الوصول: أقل من 45 دقيقة',
    openEstimatorLink: 'حاسبة التكلفة الفورية والشفافة',

    servicesTitle: 'خدمات التمريض والرعاية',
    activeServicesCount: '١٠ خدمات نشطة',
    categories: [
      { key: 'all', label: 'جميع الخدمات' },
      { key: 'home', label: 'المنزل والمسنون' },
      { key: 'hospital', label: 'المستشفى والمرافق' },
      { key: 'specialized', label: 'العناية والجراحة' },
      { key: 'shift', label: 'ليلي و 24 ساعة' },
    ],
    startingPricePrefix: 'الأسعار تبدأ من:',
    services: {
      s1: { title: 'تمريض في المنزل', desc: 'رعاية تمريضية وسريرية تخصصية في مقر إقامة المريض', badge: 'الأكثر طلباً', unit: 'يومي (8 ساعات)' },
      s2: { title: 'تمريض في المستشفى', desc: 'مرافقة تخصصية للمريض في الأقسام العامة وغرف العناية', badge: 'إرسال فوري', unit: 'وردية 12 ساعة' },
      s3: { title: 'رعاية المسنين', desc: 'مرافقة يومية، تغذية، نظافة ومتابعة العلامات الحيوية', badge: 'طاقم خبير', unit: 'يومي' },
      s4: { title: 'رعاية ما بعد الجراحة', desc: 'تضميد معقم، إدارة الألم، ومتابعة فترة النقاهة', badge: 'تخصصي', unit: 'وردية الرعاية' },
      s5: { title: 'الأمراض المزمنة', desc: 'إدارة أدوية السكري والضغط وفشل القلب', unit: 'يومي / حسب الحاجة' },
      s6: { title: 'مرضى محدودي الحركة', desc: 'تغيير وضعية مستمر، وقاية من قرح الفراش وعلاج طبيعي', unit: 'وردية كاملة' },
      s7: { title: 'رعاية الأطفال', desc: 'رعاية الأطفال والرضع بواسطة كوادر مؤهلة ومرخصة', unit: 'وردية نهارية' },
      s8: { title: 'ليلي و24 ساعة', desc: 'ممرض مناوب ليلاً ورعاية متواصلة على مدار الساعة', badge: '24 ساعة', unit: '24 ساعة' },
      s9: { title: 'ساعي ويومي', desc: 'مواعيد مرنة للحقن والمحاليل وتركيب القساطر', unit: 'كل 4 ساعات' },
      s10: { title: 'مرافق مريض', desc: 'مرافقة في الفحوصات والعيادات والمختبرات الطبية', unit: 'وردية رسمية' },
    },

    healthTourismTitle: 'السياحة العلاجية في إيران',
    healthTourismBadge: 'NERSIKA HEALTH TOURISM',
    healthTourismIPD: 'قبول المرضى الدوليين IPD',
    healthTourismDesc: 'للمرضى الدوليين: استشارات طبية، تقدير التكاليف، حجز المستشفيات، الإقامة، الترجمة، والاستقبال في المطار.',
    tourismAdvantages: [
      { title: 'أطباء استشاريون' },
      { title: 'توفير يصل لـ 70%' },
      { title: 'مترجم مرافق 24/7' },
      { title: 'فنادق ونقل VIP' },
    ],
    prioritySpecialtiesLabel: 'التخصصات الطبية الأكثر طلباً:',
    specialties: [
      { id: 'cosmetic', title: 'جراحة التجميل والترميم (تجميل الأنف، نحت الجسم)' },
      { id: 'cardiology', title: 'أمراض وجراحة القلب والأوعية والقسطرة' },
      { id: 'orthopedic', title: 'جراحة العظام وتبديل مفاصل الركبة والحوض' },
      { id: 'ivf', title: 'علاج العقم وأطفال الأنابيب (IVF)' },
      { id: 'ophthalmology', title: 'طب وجراحة العيون، الليزك وطب الأسنان الرقمي' },
      { id: 'general', title: 'الجراحة العامة والعلاجات التخصصية الأخرى' },
    ],
    healthTourismBtn: 'طلب خدمة السياحة العلاجية',

    howItWorksTitle: 'مراحل الحصول على الخدمة',
    stepsCount: '٥ خطوات سهلة',
    stepPrefix: 'الخطوة',
    ofSteps: 'من 5',
    steps: [
      { title: 'تسجيل الطلب', desc: 'تعبئة بيانات المريض، تحديد الوردية والموقع في المنزل أو المستشفى' },
      { title: 'المطابقة السريرية', desc: 'مراجعة الحالة من قبل اختصاصي الفرز لاختيار أنسب ممرض' },
      { title: 'اقتراح وتأكيد الملف', desc: 'الاطلاع على سيرة الممرض وخبراته واعتمادك النهائي' },
      { title: 'الدفع الآمن والعقد', desc: 'دفع عبر البوابة الرسمية وإصدار العقد القانوني وفاتورة التأمين' },
      { title: 'بدء الرعاية السريرية', desc: 'تسجيل الحضور الإلكتروني، التقرير اليومي وتقييم الأداء' },
    ],

    faqTitle: 'الأسئلة الشائعة',
    faqs: [
      {
        q: 'ما الفرق بين الطلب الفوري وطوارئ الإسعاف 115؟',
        a: 'الطلب الفوري في نرسيكا مخصص لإرسال ممرض خاص سريعاً إلى المنزل أو المشفى للرعاية أو الحقن أو الضمادات. في الحالات الحرجة المهددة للحياة كالسكتات القلبية اتصل بالإسعاف 115 فوراً.',
      },
      {
        q: 'كيف يتم الحفاظ على سرية المعلومات الطبية؟',
        a: 'تُحفظ جميع الملفات وفق بروتوكولات الخصوصية الطبية، ولا يتاح للممرض سوى المعلومات الضرورية لسلامة الرعاية فقط.',
      },
      {
        q: 'كيف يتم اعتماد وتأهيل ممرضي نرسيكا؟',
        a: 'يخضع جميع الكوادر لفحص الشهادات الجامعية، رخصة مزاولة المهنة، السجل الجنائي واختبار الكفاءة السريرية المعتمد.',
      },
      {
        q: 'كيف تُحسب التكاليف وهل تتوفر عقود وفواتير رسمية؟',
        a: 'تُحسب الأسعار وفق جدول التعرفة المعتمد ونوع الوردية وحالة المريض، مع إصدار عقد إلكتروني وفواتير رسمية مقبولة لدى شركات التأمين.',
      },
    ],

    hqTitle: 'المكتب الرئيسي ومركز الدعم لنرسيكا',
    addressText: 'طهران، جامعة شريف التكنولوجية، مركز ابتكار الطاقة',
    copyAddress: 'نسخ العنوان',
    postalCodeLabel: 'الرمز البريدي:',
    copyPostal: 'نسخ الرمز',
    phoneLandline: 'الهاتف الثابت:',
    phoneMobile: 'رقم الجوال:',
    copyBtn: 'نسخ',
    copiedToast: 'تم النسخ:',

    tabHome: 'الرئيسية',
    tabServices: 'الخدمات',
    tabUrgent: 'طلب فوري',
    tabTourism: 'السياحة',
    tabAccount: 'حسابي',

    urgentModalTitle: 'طلب تمريض / رعاية فوري',
    urgentModalSub: 'تنسيق وإرسال الممرض خلال أقل من 45 دقيقة',
    serviceTypeLabel: 'نوع الخدمة المطلوبة',
    serviceTypePlaceholder: 'مثلاً: تمريض منزلي، رعاية مسنين...',
    fullNameLabel: 'الاسم الكامل لمقدم الطلب',
    fullNamePlaceholder: 'أدخل الاسم الثلاثي',
    mobileLabel: 'رقم الهاتف / الواتساب',
    cityAreaLabel: 'المدينة والمنطقة / المستشفى',
    cityAreaPlaceholder: 'مثلاً: طهران، سعادت آباد أو مستشفى آتیه',
    shiftSelectLabel: 'الوردية المطلوبة',
    shifts: [
      { id: 'daily', label: 'نهاري (8-12س)' },
      { id: 'night', label: 'ليلي (12س)' },
      { id: '24h', label: '24 ساعة متواصلة' },
      { id: 'hourly', label: 'بالساعة / مؤقت' },
    ],
    notesLabel: 'ملاحظات حول حالة المريض (اختياري)',
    notesPlaceholder: 'الأمراض المزمنة، الأدوية، القسطرة، تغيير الضمادات...',
    estimateInitialLabel: 'التكلفة التقديرية للوردية المختارة:',
    insuranceDispatchIncluded: 'شامل التأمين والإرسال السريع',
    submitUrgentBtn: 'تأكيد وإرسال الطلب الفوري',
    submittingText: 'جارٍ الحفظ والإرسال إلى info@nersika.com...',
    urgentSuccessToast: 'تم تسجيل طلبك وإرسال الإشعار إلى info@nersika.com',
    emailSentBadge: 'إشعار فوري إلى info@nersika.com',

    tourismModalTitle: 'طلب السياحة الصحية والعلاجية',
    tourismModalSub: 'استشارة طبية مجانية، تقدير تكاليف وباقة VIP',
    patientNameLabel: 'اسم المريض / المرافق',
    patientNamePlaceholder: 'الاسم الكامل للمريض',
    whatsappLabel: 'رقم الواتساب الدولي',
    countryLabel: 'دولة الإقامة',
    countries: ['العراق (Iraq)', 'عمان (Oman)', 'الإمارات (UAE)', 'الكويت (Kuwait)', 'تركيا (Turkey)', 'أذربيجان (Azerbaijan)', 'روسيا (Russia)', 'دول أخرى'],
    medicalSpecialtyLabel: 'التخصص الطبي المطلوب',
    tourismNotesPlaceholder: 'يرجى ذكر تفاصيل الحالة أو إرفاق التقارير والصور...',
    ipdNotice: 'تُقدم جميع الخدمات بإشراف وزارة الصحة وقسم المرضى الدوليين (IPD).',
    submitTourismBtn: 'طلب الاستشارة وتقدير التكلفة',
    tourismSuccessToast: 'تم استلام طلب السياحة العلاجية وإرساله إلى info@nersika.com',

    nurseModalTitle: 'تسجيل تعاون الممرضين والكوادر الطبية',
    nurseModalSub: 'التوظيف والانضمام لأكبر شبكة رعاية سريرية',
    nurseCityPlaceholder: 'مثلاً: طهران، كرج، شیراز، مشهد...',
    degreeLabel: 'المؤهل العلمي / التخصص',
    degrees: [
      'بكالوريوس تمريض (BSN)',
      'ماجستير تمريض (MSN - عناية مركزة/باطني جراحي)',
      'مساعد ممرض معتمد',
      'فني عمليات وتخدير',
      'مقدم رعاية مسنين وأطفال بشهادة مهنية',
    ],
    councilCodeLabel: 'رقم التسجيل في نقابة التمريض (اختياري)',
    councilCodePlaceholder: 'مثال: 123456',
    experienceLabel: 'سنوات الخبرة السريرية',
    experienceOptions: ['أقل من سنة', '1 إلى 3 سنوات', '3 إلى 5 سنوات', 'أكثر من 5 سنوات'],
    nurseBenefitsTitle: 'مزايا الانضمام إلى نرسيكا:',
    nurseBenefitsText: 'صرف مستحقات يومي وشفاف، تأمين شامل ضد حوادث العمل، وحرية اختيار الورديات.',
    submitNurseBtn: 'بدء إجراءات التقييم والتعاون',
    nurseSuccessToast: 'تم تسجيل بياناتك وإرسالها إلى info@nersika.com',

    authModalTitle: 'تسجيل الدخول السريع',
    authModalTitleLoggedIn: 'حسابي ومتابعة الطلبات',
    authModalSub: 'المنظومة الذكية للمتابعة السريرية من نرسيكا',
    authLoginDesc: 'لمتابعة حالة وصول الممرض والعقود والفواتير، أدخل رقم هاتفك.',
    yourNameOptional: 'اسمك (اختياري)',
    yourNamePlaceholder: 'مثال: أحمد علي',
    sendOtpBtn: 'إرسال رمز الدخول',
    otpNotice: 'تم إرسال رمز التحقق إلى رقم هاتفك (يمكنك إدخال 1234 للتجربة).',
    otpCodeLabel: 'رمز التحقق المستلم',
    changePhoneBtn: 'تغيير الرقم',
    verifyLoginBtn: 'تأكيد والدخول للحساب',
    userGreeting: 'مرحباً بك',
    logoutBtn: 'خروج',
    activeOrdersTitle: 'الطلبات النشطة وسجل الحجوزات',
    noOrdersDesc: 'لا توجد طلبات سابقة حتى الآن. يمكنك بدء طلبك الأول الآن.',
    statusReviewing: 'قيد المراجعة والمطابقة',
    statusIpd: 'تنسيق ملف IPD الدولي',

    estimatorModalTitle: 'حاسبة تكاليف التمريض الشفافة',
    estimatorModalSub: 'حساب رسمي شفاف وفق تعرفة وزارة الصحة المعتمدة',
    selectServiceEstimateLabel: 'اختر الخدمة التمريضية أو الرعائية:',
    careDurationLabel: 'مدة الرعاية المطلوبة:',
    daysUnit: 'يوم',
    specialCareCheckbox: 'عناية خاصة وتخصصية (تغذية أنبوبية، قسطرة، قرح فراش)',
    urgentDispatchCheckbox: 'إرسال فوري وعاجل (خلال أقل من 45 دقيقة)',
    finalEstimateLabel: 'التكلفة الإجمالية التقديرية:',
    invoiceGuaranteeNote: 'يتم إصدار فواتير رسمية معتمدة قابلة للتقديم لشركات التأمين.',
    bookWithEstimateBtn: 'تأكيد الحجز بهذا التقدير',

    errServiceRequired: 'يرجى تحديد نوع الخدمة.',
    errNameRequired: 'يرجى إدخال الاسم كاملاً.',
    errPhoneInvalid: 'رقم الهاتف غير صحيح.',
    errLocationRequired: 'يرجى إدخال المدينة والمنطقة أو المستشفى.',
    errWhatsappInvalid: 'رقم الواتساب الدولي غير صحيح.',
    welcomeUser: 'أهلاً بك،',
    logoutSuccess: 'تم تسجيل الخروج بنجاح.',
  },

  en: {
    appName: 'Nersika',
    appBadge: 'PRO',
    brandSlogan: 'Smart Care, Trusted Companionship',
    heroTitle: 'Smart Care,',
    heroTitleHighlight: 'Trusted Companionship',
    heroDesc: 'Verified nurses and certified caregivers dispatched to homes and hospitals nationwide',
    heroBadge: 'Specialized In-Home & Hospital Clinical Platform',
    supportCall: 'Support',
    login: 'Login',
    myAccount: 'My Account',
    quickSearchSelect: 'Select a clinical service...',
    quickOptions: [
      { value: 'Home Nursing', label: 'Home Nursing' },
      { value: 'Elderly Care', label: 'Elderly Care' },
      { value: 'Post-Surgery Care', label: 'Post-Surgery Care' },
      { value: 'Hospital Companion Nurse', label: 'Hospital Companion Nurse' },
      { value: 'Child & Infant Care', label: 'Child & Infant Care' },
      { value: 'Overnight & 24/7 Care', label: 'Overnight & 24/7 Care' },
      { value: 'Injections & Wound Dressing', label: 'Injections & Wound Dressing' },
    ],
    requestBtn: 'Request',
    urgentBtn: 'Urgent Nurse Request',
    urgentSub: 'Fast dispatch & coordination',
    coopBtn: 'Join as a Nurse',
    coopSub: 'Registration & vetting',
    emergencyAlert: 'For life-threatening emergencies, call emergency services immediately.',
    call115: 'Call 115',
    avgDispatchTime: 'Average dispatch time: Under 45 minutes',
    openEstimatorLink: 'Transparent Instant Cost Calculator',

    servicesTitle: 'Nursing & Care Services',
    activeServicesCount: '10 Active Services',
    categories: [
      { key: 'all', label: 'All Services' },
      { key: 'home', label: 'Home & Elderly' },
      { key: 'hospital', label: 'Hospital & Companion' },
      { key: 'specialized', label: 'Clinical & Surgery' },
      { key: 'shift', label: 'Night & 24/7' },
    ],
    startingPricePrefix: 'Starting from:',
    services: {
      s1: { title: 'Home Nursing', desc: 'Specialized clinical care & professional nursing at the patient residence', badge: 'Most Popular', unit: 'Daily (8 Hours)' },
      s2: { title: 'Hospital Companion Nurse', desc: 'Professional inpatient companion care in hospital rooms and ICU wards', badge: 'Fast Dispatch', unit: '12-Hour Shift' },
      s3: { title: 'Elderly Care', desc: 'Companionship, hygiene, feeding, medication, and daily vital sign tracking', badge: 'Vetted Staff', unit: 'Daily' },
      s4: { title: 'Post-Surgery Care', desc: 'Sterile wound dressing, surgical drain monitoring, and recovery acceleration', badge: 'Specialized', unit: 'Care Shift' },
      s5: { title: 'Chronic Disease Care', desc: 'Medication management for diabetes, hypertension, and cardiac conditions', unit: 'Per Visit / Daily' },
      s6: { title: 'Immobile Patient Care', desc: 'Regular repositioning, bedsore prevention, and basic physical therapy', unit: 'Full Shift' },
      s7: { title: 'Child & Infant Care', desc: 'Professional pediatric care by certified and vetted caregivers', unit: 'Day Shift' },
      s8: { title: 'Overnight & 24/7 Care', desc: 'Awake overnight private nurse and round-the-clock intensive care', badge: '24/7 Care', unit: '24 Hours' },
      s9: { title: 'Hourly & As-Needed', desc: 'Flexible visits for injections, IV drip therapy, and catheterization', unit: 'Every 4 Hours' },
      s10: { title: 'Patient Escort Companion', desc: 'Accompaniment to clinical appointments, imaging, labs, and clinics', unit: 'Office Shift' },
    },

    healthTourismTitle: 'Health Tourism in Iran',
    healthTourismBadge: 'NERSIKA HEALTH TOURISM',
    healthTourismIPD: 'International IPD Admission',
    healthTourismDesc: 'For domestic and international patients: Medical consults, cost estimation, premier hospital booking, accommodation, translation, and VIP airport transfer.',
    tourismAdvantages: [
      { title: 'Board-Certified Surgeons' },
      { title: 'Up to 70% Cost Savings' },
      { title: '24/7 Fluent Translators' },
      { title: 'VIP Hotel & Transfer' },
    ],
    prioritySpecialtiesLabel: 'High-Demand Medical Specialties:',
    specialties: [
      { id: 'cosmetic', title: 'Cosmetic & Plastic Surgery (Rhinoplasty, Liposuction)' },
      { id: 'cardiology', title: 'Cardiology, Angiography & Heart Surgery' },
      { id: 'orthopedic', title: 'Orthopedics & Joint Replacement (Knee/Hip)' },
      { id: 'ivf', title: 'Fertility Treatments & IVF' },
      { id: 'ophthalmology', title: 'Ophthalmology (LASIK) & Digital Dentistry' },
      { id: 'general', title: 'General Surgery & Specialized Therapies' },
    ],
    healthTourismBtn: 'Request Health Tourism',

    howItWorksTitle: 'How It Works',
    stepsCount: '5 Easy Steps',
    stepPrefix: 'Step',
    ofSteps: 'of 5',
    steps: [
      { title: 'Submit Request', desc: 'Complete patient details, care shift, and preferred home or hospital location' },
      { title: 'Clinical Triage', desc: 'Careful assessment by senior clinical triage to match the best qualified nurse' },
      { title: 'Profile Approval', desc: 'Review nurse qualifications, education, and patient ratings before confirmation' },
      { title: 'Secure Payment & Contract', desc: 'Payment through authorized channels, legal contract, and official insurance invoice' },
      { title: 'Care Commencement', desc: 'Electronic check-in, daily clinical logs, and continuous supervisory monitoring' },
    ],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'What is the difference between urgent requests and 115 emergency?',
        a: 'Nersika urgent dispatch sends a private nurse quickly for home or hospital clinical care, wound dressing, or companion care. For acute life-threatening emergencies (heart attack, severe trauma), call 115 emergency immediately.',
      },
      {
        q: 'How is patient medical privacy safeguarded?',
        a: 'All files are managed under strict healthcare confidentiality standards. Nurses receive only necessary clinical instructions required for patient safety.',
      },
      {
        q: 'How are Nersika nurses and caregivers vetted?',
        a: 'All practitioners undergo university diploma verification, Nursing Council credentials check, background checks, psychological evaluations, and practical clinical exams.',
      },
      {
        q: 'How are fees calculated and are formal insurance invoices provided?',
        a: 'Fees are calculated strictly according to approved clinical scales based on shift type and condition. Official invoices for supplemental insurance reimbursement are issued.',
      },
    ],

    hqTitle: 'Nersika Headquarters & Support Center',
    addressText: 'Tehran, Sharif University of Technology, Energy Innovation Center',
    copyAddress: 'Copy Address',
    postalCodeLabel: 'Postal Code:',
    copyPostal: 'Copy Code',
    phoneLandline: 'Landline:',
    phoneMobile: 'Mobile:',
    copyBtn: 'Copy',
    copiedToast: 'Copied:',

    tabHome: 'Home',
    tabServices: 'Services',
    tabUrgent: 'Urgent',
    tabTourism: 'Tourism',
    tabAccount: 'Account',

    urgentModalTitle: 'Urgent Nurse & Caregiver Request',
    urgentModalSub: 'Rapid coordination and dispatch in under 45 minutes',
    serviceTypeLabel: 'Required Service Type',
    serviceTypePlaceholder: 'e.g. Home Nursing, Elderly Care...',
    fullNameLabel: 'Requester Full Name',
    fullNamePlaceholder: 'Enter your full name',
    mobileLabel: 'Mobile Number',
    cityAreaLabel: 'City & District / Hospital',
    cityAreaPlaceholder: 'e.g. Tehran, Saadat Abad or Atieh Hospital',
    shiftSelectLabel: 'Care Shift',
    shifts: [
      { id: 'daily', label: 'Day (8-12h)' },
      { id: 'night', label: 'Night (12h)' },
      { id: '24h', label: '24/7 Full Care' },
      { id: 'hourly', label: 'Hourly' },
    ],
    notesLabel: 'Patient Condition & Instructions (Optional)',
    notesPlaceholder: 'Medical history, medications, catheter care, wound dressing...',
    estimateInitialLabel: 'Initial Estimated Cost for Shift:',
    insuranceDispatchIncluded: 'Includes insurance & urgent readiness',
    submitUrgentBtn: 'Confirm & Dispatch Nurse',
    submittingText: 'Sending & notifying info@nersika.com...',
    urgentSuccessToast: 'Nurse request registered and sent to info@nersika.com',
    emailSentBadge: 'Sent to info@nersika.com',

    tourismModalTitle: 'Health Tourism Request',
    tourismModalSub: 'Free medical consultation, cost quote & VIP package',
    patientNameLabel: 'Patient / Escort Full Name',
    patientNamePlaceholder: 'Enter patient full name',
    whatsappLabel: 'WhatsApp or International Phone',
    countryLabel: 'Country of Residence',
    countries: ['Iraq', 'Oman', 'UAE', 'Kuwait', 'Turkey', 'Azerbaijan', 'Russia', 'Other Countries'],
    medicalSpecialtyLabel: 'Desired Medical Specialty',
    tourismNotesPlaceholder: 'Medical reports, photos, and travel schedule will be coordinated via WhatsApp...',
    ipdNotice: 'All procedures are licensed by the Ministry of Health and supervised by the International Patients Department (IPD).',
    submitTourismBtn: 'Get Free Consultation & Quote',
    tourismSuccessToast: 'Health tourism request sent to info@nersika.com',

    nurseModalTitle: 'Nurse & Healthcare Staff Application',
    nurseModalSub: 'Join the premier nationwide clinical care network',
    nurseCityPlaceholder: 'e.g. Tehran, Karaj, Shiraz, Mashhad...',
    degreeLabel: 'Education Degree / Specialty',
    degrees: [
      'Bachelor of Science in Nursing (BSN)',
      'Master of Science in Nursing (MSN - ICU/Surgical)',
      'Certified Practical Nurse (LPN)',
      'Operating Room & Anesthesia Technician',
      'Vocational Certified Elderly & Child Caregiver',
    ],
    councilCodeLabel: 'Nursing Council Registration ID (Optional)',
    councilCodePlaceholder: 'e.g. 123456',
    experienceLabel: 'Clinical Work Experience',
    experienceOptions: ['Less than 1 year', '1 to 3 years', '3 to 5 years', 'More than 5 years (Senior)'],
    nurseBenefitsTitle: 'Benefits of Joining Nersika:',
    nurseBenefitsText: 'Daily transparent settlements, clinical liability insurance, flexible shift booking, and assignments near your home.',
    submitNurseBtn: 'Start Assessment & Application',
    nurseSuccessToast: 'Staff application sent to info@nersika.com',

    authModalTitle: 'Quick Sign In / Register',
    authModalTitleLoggedIn: 'My Profile & Bookings',
    authModalSub: 'Nersika Smart Clinical Monitoring Platform',
    authLoginDesc: 'Enter your phone number to track nurse dispatch, contracts, and official invoices.',
    yourNameOptional: 'Your Name (Optional)',
    yourNamePlaceholder: 'e.g. John Smith',
    sendOtpBtn: 'Send One-Time Login Code',
    otpNotice: 'Verification code sent to your phone (Use 1234 for testing).',
    otpCodeLabel: 'SMS Verification Code',
    changePhoneBtn: 'Change Phone',
    verifyLoginBtn: 'Verify & Sign In',
    userGreeting: 'Dear Customer',
    logoutBtn: 'Log Out',
    activeOrdersTitle: 'Active Requests & History',
    noOrdersDesc: 'No previous requests found. Click Urgent Request to make your first booking.',
    statusReviewing: 'Under Clinical Triage',
    statusIpd: 'IPD International Coordination',

    estimatorModalTitle: 'Transparent Pricing Calculator',
    estimatorModalSub: 'Official transparent estimate according to approved healthcare tariffs',
    selectServiceEstimateLabel: 'Select Clinical or Care Service:',
    careDurationLabel: 'Care Duration:',
    daysUnit: 'Day(s)',
    specialCareCheckbox: 'Specialized Care (G-tube, Catheter, Bedsore prevention)',
    urgentDispatchCheckbox: 'Urgent Dispatch (Under 45 minutes)',
    finalEstimateLabel: 'Estimated Total Cost:',
    invoiceGuaranteeNote: 'Official invoices issued for submission to insurance providers.',
    bookWithEstimateBtn: 'Book With This Estimate',

    errServiceRequired: 'Please specify the service type.',
    errNameRequired: 'Please enter your full name.',
    errPhoneInvalid: 'Please enter a valid phone number.',
    errLocationRequired: 'Please enter city and district or hospital.',
    errWhatsappInvalid: 'Please enter a valid WhatsApp or international phone number.',
    welcomeUser: 'Welcome,',
    logoutSuccess: 'You have logged out successfully.',
  },

  tr: {
    appName: 'Nersika',
    appBadge: 'PRO',
    brandSlogan: 'Akıllı Bakım, Güvenilir Refakat',
    heroTitle: 'Akıllı Bakım,',
    heroTitleHighlight: 'Güvenilir Refakat',
    heroDesc: 'Doğrulanmış ve lisanslı hemşireler ile bakıcıların ev ve hastanelere hızlı sevki',
    heroBadge: 'Uzman Klinik Evde Bakım Platformu',
    supportCall: 'Destek',
    login: 'Giriş',
    myAccount: 'Hesabım',
    quickSearchSelect: 'Hizmet seçin...',
    quickOptions: [
      { value: 'Evde Hemşire', label: 'Evde Hemşire' },
      { value: 'Yaşlı Bakımı', label: 'Yaşlı Bakımı' },
      { value: 'Ameliyat Sonrası Bakım', label: 'Ameliyat Sonrası Bakım' },
      { value: 'Hastanede Hasta Refakatçisi', label: 'Hastanede Hasta Refakatçisi' },
      { value: 'Çocuk ve Bebek Bakımı', label: 'Çocuk ve Bebek Bakımı' },
      { value: 'Gece ve 24 Saat Kesintisiz', label: 'Gece ve 24 Saat Kesintisiz' },
      { value: 'Evde Enjeksiyon ve Pansuman', label: 'Evde Enjeksiyon ve Pansuman' },
    ],
    requestBtn: 'Talep Et',
    urgentBtn: 'Acil Hemşire Talebi',
    urgentSub: 'Hızlı sevk ve koordinasyon',
    coopBtn: 'Hemşire Başvurusu',
    coopSub: 'Kayıt ve değerlendirme',
    emergencyAlert: 'Hayati tehlike arz eden acil durumlarda lütfen derhal 112/115 arayın.',
    call115: 'Ara: 115',
    avgDispatchTime: 'Ortalama intikal süresi: 45 dakikadan az',
    openEstimatorLink: 'Şeffaf Çevrimiçi Ücret Hesaplayıcı',

    servicesTitle: 'Hemşirelik ve Bakım Hizmetleri',
    activeServicesCount: '10 Aktif Hizmet',
    categories: [
      { key: 'all', label: 'Tüm Hizmetler' },
      { key: 'home', label: 'Ev ve Yaşlı' },
      { key: 'hospital', label: 'Hastane ve Refakat' },
      { key: 'specialized', label: 'Klinik ve Cerrahi' },
      { key: 'shift', label: 'Gece ve 24 Saat' },
    ],
    startingPricePrefix: 'Başlangıç ücreti:',
    services: {
      s1: { title: 'Evde Hemşire', desc: 'Hastanın ikametgahında uzman klinik ve hemşirelik bakımı', badge: 'En Popüler', unit: 'Günlük (8 Saat)' },
      s2: { title: 'Hastanede Refakatçi Hemşire', desc: 'Yatan hasta servislerinde ve yoğun bakımda uzman refakat', badge: 'Hızlı Sevk', unit: '12 Saatlik Vardiya' },
      s3: { title: 'Yaşlı Bakımı', desc: 'Günlük refakat, hijyen, beslenme ve yaşamsal bulgu takibi', badge: 'Uzman Kadro', unit: 'Günlük' },
      s4: { title: 'Ameliyat Sonrası Bakım', desc: 'Steril pansuman, dren takibi, ağrı yönetimi ve hızlı iyileşme', badge: 'Uzman', unit: 'Bakım Vardiyası' },
      s5: { title: 'Kronik Hastalık Bakımı', desc: 'Diyabet, tansiyon ve kalp hastalıkları için ilaç yönetimi', unit: 'Ziyaret Başına' },
      s6: { title: 'Hareketsiz Hasta Bakımı', desc: 'Düzenli pozisyon değişimi, yatak yarası önleme ve fizik tedavi', unit: 'Tam Vardiya' },
      s7: { title: 'Çocuk ve Bebek Bakımı', desc: 'Sertifikalı ve değerlendirilmiş uzman personelce çocuk bakımı', unit: 'Gündüz Vardiyası' },
      s8: { title: 'Gece ve 24 Saat', desc: 'Gece uyanık hemşire ve 24 saat kesintisiz özel bakım', badge: '24 Saat', unit: '24 Saat' },
      s9: { title: 'Saatlik ve İhtiyaç Halinde', desc: 'Enjeksiyon, serum ve sonda için esnek saatlik ziyaretler', unit: 'Her 4 Saat' },
      s10: { title: 'Hasta Refakatçisi', desc: 'Klinik, tahlil ve randevularda hastaya eşlik etme', unit: 'Mesai Vardiyası' },
    },

    healthTourismTitle: 'İran Sağlık Turizmi',
    healthTourismBadge: 'NERSIKA SAĞLIK TURİZMİ',
    healthTourismIPD: 'Uluslararası IPD Kabulü',
    healthTourismDesc: 'Uluslararası hastalar için: Tıbbi danışmanlık, maliyet tahmini, hastane rezervasyonu, konaklama, tercüman ve VIP transfer.',
    tourismAdvantages: [
      { title: 'Uzman Cerrahlar' },
      { title: '%70\'e Varan Tasarruf' },
      { title: '7/24 Rehber Tercüman' },
      { title: 'VIP Otel ve Transfer' },
    ],
    prioritySpecialtiesLabel: 'Öncelikli Tedavi Alanları:',
    specialties: [
      { id: 'cosmetic', title: 'Estetik ve Rekonstrüktif Cerrahi (Rinoplasti, Liposuction)' },
      { id: 'cardiology', title: 'Kardiyoloji, Anjiyografi ve Kalp Cerrahisi' },
      { id: 'orthopedic', title: 'Ortopedi ve Eklem Protezi (Diz/Kalça)' },
      { id: 'ivf', title: 'Tüp Bebek ve Kısırlık Tedavisi (IVF)' },
      { id: 'ophthalmology', title: 'Göz Cerrahisi (LASIK) ve Dijital Diş Hekimliği' },
      { id: 'general', title: 'Genel Cerrahi ve Diğer Uzmanlık Alanları' },
    ],
    healthTourismBtn: 'Sağlık Turizmi Talebi Gönder',

    howItWorksTitle: 'Hizmet Alma Aşamaları',
    stepsCount: '5 Kolay Adım',
    stepPrefix: 'Adım',
    ofSteps: '/ 5',
    steps: [
      { title: 'Talep Oluşturma', desc: 'Hasta bilgilerinin, çalışma vardiyasının ve konumun belirlenmesi' },
      { title: 'Klinik Değerlendirme', desc: 'Triyaj uzmanı tarafından hastaya en uygun hemşirenin seçilmesi' },
      { title: 'Profil Onayı', desc: 'Hemşirenin özgeçmişini ve referanslarını inceleyip onaylama' },
      { title: 'Güvenli Ödeme ve Sözleşme', desc: 'Yetkili kanal üzerinden ödeme, resmi sözleşme ve fatura temini' },
      { title: 'Bakımın Başlaması', desc: 'Elektronik giriş kaydı, günlük raporlama ve süpervizör takibi' },
    ],

    faqTitle: 'Sıkça Sorulan Sorular',
    faqs: [
      {
        q: 'Acil talep ile 115 acil servis arasındaki fark nedir?',
        a: 'Nersika acil talebi, evde veya hastanede özel hemşirelik, pansuman ve refakat için hızlı intikali sağlar. Kalp krizi gibi hayati tehlike durumlarında derhal acil servisi aramalısınız.',
      },
      {
        q: 'Hasta tıbbi mahremiyeti nasıl korunur?',
        a: 'Tüm kayıtlar tıbbi gizlilik protokollerine tabidir. Hemşire yalnızca güvenli bakım için gereken bilgilere erişebilir.',
      },
      {
        q: 'Nersika hemşireleri nasıl doğrulanır?',
        a: 'Üniversite diploması, hemşirelik lisansı, adli sicil kaydı ve klinik yeterlilik sınavları titizlikle kontrol edilir.',
      },
      {
        q: 'Ücretler nasıl hesaplanır ve resmi fatura verilir mi?',
        a: 'Onaylı sağlık tarifelerine göre vardiya ve hasta durumuna göre belirlenir. Sigorta için geçerli resmi fatura düzenlenir.',
      },
    ],

    hqTitle: 'Nersika Merkez Ofisi ve Destek Merkezi',
    addressText: 'Tahran, Şerif Teknoloji Üniversitesi, Enerji İnovasyon Merkezi',
    copyAddress: 'Adresi Kopyala',
    postalCodeLabel: 'Posta Kodu:',
    copyPostal: 'Kodu Kopyala',
    phoneLandline: 'Sabit Hat:',
    phoneMobile: 'Cep Telefonu:',
    copyBtn: 'Kopyala',
    copiedToast: 'Kopyalandı:',

    tabHome: 'Ana Sayfa',
    tabServices: 'Hizmetler',
    tabUrgent: 'Acil Talep',
    tabTourism: 'Turizm',
    tabAccount: 'Hesabım',

    urgentModalTitle: 'Acil Hemşire ve Bakıcı Talebi',
    urgentModalSub: '45 dakikadan kısa sürede hızlı koordinasyon ve sevk',
    serviceTypeLabel: 'İhtiyaç Duyulan Hizmet Türü',
    serviceTypePlaceholder: 'Örn: Evde Hemşire, Yaşlı Bakımı...',
    fullNameLabel: 'Talep Edenin Adı ve Soyadı',
    fullNamePlaceholder: 'Tam adınızı giriniz',
    mobileLabel: 'Cep Telefonu Numarası',
    cityAreaLabel: 'Şehir ve Bölge / Hastane',
    cityAreaPlaceholder: 'Örn: Tahran, Saadat Abad veya Atieh Hastanesi',
    shiftSelectLabel: 'Vardiya Türü',
    shifts: [
      { id: 'daily', label: 'Gündüz (8-12s)' },
      { id: 'night', label: 'Gece (12s)' },
      { id: '24h', label: '24 Saat Kesintisiz' },
      { id: 'hourly', label: 'Saatlik' },
    ],
    notesLabel: 'Hasta Durumu ve Açıklamalar (İsteğe Bağlı)',
    notesPlaceholder: 'Hastalık geçmişi, ilaçlar, sonda, pansuman...',
    estimateInitialLabel: 'Seçilen Vardiya İçin Tahmini Ücret:',
    insuranceDispatchIncluded: 'Sigorta ve acil intikal dahildir',
    submitUrgentBtn: 'Acil Talebi Onayla ve Gönder',
    submittingText: 'info@nersika.com adresine iletiliyor...',
    urgentSuccessToast: 'Talebiniz kaydedildi ve info@nersika.com adresine iletildi.',
    emailSentBadge: 'info@nersika.com adresine iletildi',

    tourismModalTitle: 'Sağlık Turizmi Başvurusu',
    tourismModalSub: 'Ücretsiz tıbbi danışmanlık, fiyat teklifi ve VIP paket',
    patientNameLabel: 'Hasta / Refakatçi Adı Soyadı',
    patientNamePlaceholder: 'Hastanın tam adı',
    whatsappLabel: 'WhatsApp veya Telefon Numarası',
    countryLabel: 'İkamet Edilen Ülke',
    countries: ['Irak', 'Umman', 'BAE', 'Kuveyt', 'Türkiye', 'Azerbaycan', 'Rusya', 'Diğer Ülkeler'],
    medicalSpecialtyLabel: 'İlgilenilen Tedavi Branşı',
    tourismNotesPlaceholder: 'Tıbbi raporlar ve seyahat planı WhatsApp üzerinden organize edilecektir...',
    ipdNotice: 'Tüm işlemler Sağlık Bakanlığı onaylı ve IPD departmanı gözetimindedir.',
    submitTourismBtn: 'Ücretsiz Danışmanlık ve Fiyat Al',
    tourismSuccessToast: 'Sağlık turizmi başvurusu info@nersika.com adresine iletildi.',

    nurseModalTitle: 'Hemşire ve Sağlık Personeli Başvurusu',
    nurseModalSub: 'Ülke çapındaki en büyük klinik bakım ağına katılın',
    nurseCityPlaceholder: 'Örn: Tahran, Kerec, Şiraz, Meşhed...',
    degreeLabel: 'Mezuniyet / Uzmanlık',
    degrees: [
      'Hemşirelik Lisans (BSN)',
      'Hemşirelik Yüksek Lisans (MSN - Yoğun Bakım/Cerrahi)',
      'Sertifikalı Sağlık Memuru / Hemşire Yardımcısı',
      'Ameliyathane ve Anestezi Teknikeri',
      'Mesleki Sertifikalı Yaşlı ve Çocuk Bakıcısı',
    ],
    councilCodeLabel: 'Hemşirelik Lisans No (İsteğe bağlı)',
    councilCodePlaceholder: 'Örn: 123456',
    experienceLabel: 'Klinik İş Deneyimi',
    experienceOptions: ['1 yıldan az', '1 - 3 yıl', '3 - 5 yıl', '5 yıldan fazla (Kıdemli)'],
    nurseBenefitsTitle: 'Nersika ile Çalışmanın Avantajları:',
    nurseBenefitsText: 'Günlük ve şeffaf ödemeler, tam klinik mesleki sigortası ve ikametinize yakın esnek vardiyalar.',
    submitNurseBtn: 'Değerlendirme Sürecini Başlat',
    nurseSuccessToast: 'İş başvurunuz info@nersika.com adresine gönderildi.',

    authModalTitle: 'Hızlı Giriş / Kayıt',
    authModalTitleLoggedIn: 'Profilim ve Taleplerim',
    authModalSub: 'Nersika Akıllı Klinik Takip Platformu',
    authLoginDesc: 'Hemşire intikalini ve sözleşmelerinizi takip etmek için telefon numaranızı girin.',
    yourNameOptional: 'Adınız (İsteğe bağlı)',
    yourNamePlaceholder: 'Örn: Ali Yılmaz',
    sendOtpBtn: 'Tek Kullanımlık Şifre Gönder',
    otpNotice: 'Onay kodu telefonunuza gönderildi (Test için 1234 yazabilirsiniz).',
    otpCodeLabel: 'SMS Doğrulama Kodu',
    changePhoneBtn: 'Numarayı Değiştir',
    verifyLoginBtn: 'Onayla ve Giriş Yap',
    userGreeting: 'Değerli Kullanıcımız',
    logoutBtn: 'Çıkış Yap',
    activeOrdersTitle: 'Aktif Talepler ve Geçmiş',
    noOrdersDesc: 'Henüz kayıtlı bir talebiniz bulunmuyor.',
    statusReviewing: 'Triyaj ve Eşleştirme Aşamasında',
    statusIpd: 'Uluslararası IPD Koordinasyonu',

    estimatorModalTitle: 'Şeffaf Fiyat Hesaplayıcı',
    estimatorModalSub: 'Sağlık Bakanlığı onaylı resmi tarifelere göre şeffaf hesaplama',
    selectServiceEstimateLabel: 'Klinik veya Bakım Hizmeti Seçin:',
    careDurationLabel: 'Bakım Süresi:',
    daysUnit: 'Gün',
    specialCareCheckbox: 'Özel Klinik Bakım (Sonda, Beslenme tüpü, Yatak yarası)',
    urgentDispatchCheckbox: 'Acil Sevk (45 dakikadan az)',
    finalEstimateLabel: 'Toplam Tahmini Ücret:',
    invoiceGuaranteeNote: 'Tamamlayıcı sigortalara ibraz edilmek üzere resmi fatura düzenlenir.',
    bookWithEstimateBtn: 'Bu Tahmin ile Talep Oluştur',

    errServiceRequired: 'Lütfen hizmet türünü belirtin.',
    errNameRequired: 'Lütfen adınızı ve soyadınızı girin.',
    errPhoneInvalid: 'Lütfen geçerli bir telefon numarası girin.',
    errLocationRequired: 'Lütfen şehir ve bölgeyi girin.',
    errWhatsappInvalid: 'Geçerli bir WhatsApp numarası girin.',
    welcomeUser: 'Hoş geldiniz,',
    logoutSuccess: 'Başarıyla çıkış yapıldı.',
  },

  ru: {
    appName: 'Нерсика',
    appBadge: 'PRO',
    brandSlogan: 'Умный уход, надежная забота',
    heroTitle: 'Умный уход,',
    heroTitleHighlight: 'надежная забота',
    heroDesc: 'Выезд сертифицированных медсестер и сиделок на дом и в больницы по всей стране',
    heroBadge: 'Специализированная клиническая служба на дому',
    supportCall: 'Поддержка',
    login: 'Вход',
    myAccount: 'Мой профиль',
    quickSearchSelect: 'Выберите услугу...',
    quickOptions: [
      { value: 'Медсестра на дом', label: 'Медсестра на дом' },
      { value: 'Уход за пожилыми', label: 'Уход за пожилыми' },
      { value: 'Послеоперационный уход', label: 'Послеоперационный уход' },
      { value: 'Сиделка в стационаре', label: 'Сиделка в стационаре' },
      { value: 'Уход за детьми', label: 'Уход за детьми' },
      { value: 'Ночной и круглосуточный уход', label: 'Ночной и круглосуточный уход' },
      { value: 'Уколы и перевязки на дому', label: 'Уколы и перевязки на дому' },
    ],
    requestBtn: 'Заказать',
    urgentBtn: 'Срочный вызов медсестры',
    urgentSub: 'Быстрый выезд и координация',
    coopBtn: 'Работа для медсестер',
    coopSub: 'Регистрация и оценка',
    emergencyAlert: 'При состояниях, угрожающих жизни, немедленно вызывайте скорую помощь 112/115.',
    call115: 'Звонок 115',
    avgDispatchTime: 'Среднее время прибытия: менее 45 минут',
    openEstimatorLink: 'Прозрачный онлайн-расчет стоимости',

    servicesTitle: 'Услуги медсестер и ухода',
    activeServicesCount: '10 активных услуг',
    categories: [
      { key: 'all', label: 'Все услуги' },
      { key: 'home', label: 'Дом и пожилые' },
      { key: 'hospital', label: 'Больница и сиделки' },
      { key: 'specialized', label: 'Клинические и хирургия' },
      { key: 'shift', label: 'Ночные и 24ч' },
    ],
    startingPricePrefix: 'Стоимость от:',
    services: {
      s1: { title: 'Медсестра на дом', desc: 'Квалифицированный сестринский уход по месту жительства пациента', badge: 'Популярно', unit: 'День (8 часов)' },
      s2: { title: 'Медсестра в больницу', desc: 'Профессиональное сопровождение и уход в палатах и реанимации', badge: 'Срочно', unit: 'Смена 12 часов' },
      s3: { title: 'Уход за пожилыми', desc: 'Сопровождение, гигиена, питание и контроль показателей здоровья', badge: 'Опытный штат', unit: 'День' },
      s4: { title: 'Послеоперационный уход', desc: 'Стерильные перевязки, контроль дренажей и ускорение реабилитации', badge: 'Профи', unit: 'Смена ухода' },
      s5: { title: 'Хронические заболевания', desc: 'Медикаментозная терапия при диабете, давлении и сердечной недостаточности', unit: 'Визит / День' },
      s6: { title: 'Малоподвижные пациенты', desc: 'Смена положения тела, профилактика пролежней и ЛФК', unit: 'Полная смена' },
      s7: { title: 'Уход за детьми', desc: 'Забота о детях и младенцах квалифицированным проверенным персоналом', unit: 'Дневная смена' },
      s8: { title: 'Ночной и 24 часа', desc: 'Ночное дежурство медсестры и круглосуточный непрерывный присмотр', badge: '24/7', unit: '24 часа' },
      s9: { title: 'Почасовой уход', desc: 'Гибкие визиты для капельниц, инъекций и катетеризации', unit: 'Каждые 4 часа' },
      s10: { title: 'Сопровождающий', desc: 'Сопровождение на диагностику, анализы и в медицинские центры', unit: 'Смена' },
    },

    healthTourismTitle: 'Медицинский туризм в Иране',
    healthTourismBadge: 'NERSIKA HEALTH TOURISM',
    healthTourismIPD: 'Международный отдел IPD',
    healthTourismDesc: 'Для пациентов: консультация врачей, расчет стоимости, бронирование клиник, отелей, переводчик и трансфер.',
    tourismAdvantages: [
      { title: 'Ведущие хирурги' },
      { title: 'Экономия до 70%' },
      { title: 'Переводчик 24/7' },
      { title: 'Отель и трансфер VIP' },
    ],
    prioritySpecialtiesLabel: 'Приоритетные направления лечения:',
    specialties: [
      { id: 'cosmetic', title: 'Пластическая и эстетическая хирургия (ринопластика, липосакция)' },
      { id: 'cardiology', title: 'Кардиохирургия, коронарография и сосудистая терапия' },
      { id: 'orthopedic', title: 'Ортопедия и замена суставов (коленный/тазобедренный)' },
      { id: 'ivf', title: 'Лечение бесплодия и ЭКО (IVF)' },
      { id: 'ophthalmology', title: 'Офтальмология (LASIK) и цифровая стоматология' },
      { id: 'general', title: 'Общая хирургия и узкоспециализированное лечение' },
    ],
    healthTourismBtn: 'Оставить заявку на медтуризм',

    howItWorksTitle: 'Как это работает',
    stepsCount: '5 простых шагов',
    stepPrefix: 'Шаг',
    ofSteps: 'из 5',
    steps: [
      { title: 'Оформление заявки', desc: 'Указание данных пациента, графика смены и адреса на дому или в клинике' },
      { title: 'Клинический триаж', desc: 'Оценка состояния старшим специалистом и подбор идеальной медсестры' },
      { title: 'Согласование анкеты', desc: 'Ознакомление с квалификацией, опытом и подтверждение кандидатуры' },
      { title: 'Безопасная оплата', desc: 'Оплата через официальные шлюзы, договор и квитанция для страховой' },
      { title: 'Начало ухода', desc: 'Электронная отметка прибытия, журнал процедур и надзор супервайзера' },
    ],

    faqTitle: 'Часто задаваемые вопросы',
    faqs: [
      {
        q: 'В чем разница между срочным заказом и скорой 115?',
        a: 'Срочный вызов Нерсика оперативно направляет частную медсестру для ухода, процедур или перевязок. При острых жизнеугрожающих состояниях немедленно звоните 115.',
      },
      {
        q: 'Как соблюдается медицинская конфиденциальность?',
        a: 'Все данные пациентов защищены строгими протоколами. Медперсонал получает только необходимые врачебные назначения.',
      },
      {
        q: 'Как проверяются медсестры и сиделки Нерсика?',
        a: 'Все специалисты проходят проверку дипломов, аккредитации, справку о несудимости и практический экзамен.',
      },
      {
        q: 'Как рассчитывается стоимость и предоставляется ли чек?',
        a: 'Цены рассчитываются по утвержденным тарифам в зависимости от смены. Предоставляется официальный пакет документов для страховой.',
      },
    ],

    hqTitle: 'Главный офис и центр поддержки Нерсика',
    addressText: 'Тегеран, Технологический университет Шариф, Центр энергетических инноваций',
    copyAddress: 'Копировать адрес',
    postalCodeLabel: 'Почтовый индекс:',
    copyPostal: 'Копировать индекс',
    phoneLandline: 'Городской телефон:',
    phoneMobile: 'Мобильный телефон:',
    copyBtn: 'Копировать',
    copiedToast: 'Скопировано:',

    tabHome: 'Главная',
    tabServices: 'Услуги',
    tabUrgent: 'Срочно',
    tabTourism: 'Туризм',
    tabAccount: 'Профиль',

    urgentModalTitle: 'Срочный вызов медсестры / сиделки',
    urgentModalSub: 'Оперативная координация и выезд в течение 45 минут',
    serviceTypeLabel: 'Требуемая услуга',
    serviceTypePlaceholder: 'Например: медсестра на дом, уход за пожилыми...',
    fullNameLabel: 'ФИО заявителя',
    fullNamePlaceholder: 'Введите ваше полное имя',
    mobileLabel: 'Номер мобильного телефона',
    cityAreaLabel: 'Город и район / Название больницы',
    cityAreaPlaceholder: 'Например: Тегеран, Саадат Абад или больница Атие',
    shiftSelectLabel: 'Тип смены',
    shifts: [
      { id: 'daily', label: 'Дневная (8-12ч)' },
      { id: 'night', label: 'Ночная (12ч)' },
      { id: '24h', label: 'Круглосуточно' },
      { id: 'hourly', label: 'Почасовая' },
    ],
    notesLabel: 'Состояние пациента и назначения (необязательно)',
    notesPlaceholder: 'Диагноз, прием лекарств, капельницы, зонд, перевязки...',
    estimateInitialLabel: 'Предварительный расчет за выбранную смену:',
    insuranceDispatchIncluded: 'Включая страховку и срочный выезд',
    submitUrgentBtn: 'Подтвердить и отправить вызов',
    submittingText: 'Отправка на info@nersika.com...',
    urgentSuccessToast: 'Заявка зарегистрирована и отправлена на info@nersika.com',
    emailSentBadge: 'Отправка на info@nersika.com',

    tourismModalTitle: 'Заявка на медицинский туризм',
    tourismModalSub: 'Бесплатная консультация, расчет сметы и VIP-пакет',
    patientNameLabel: 'ФИО пациента / сопровождающего',
    patientNamePlaceholder: 'Введите имя пациента',
    whatsappLabel: 'WhatsApp или международный телефон',
    countryLabel: 'Страна проживания',
    countries: ['Ирак', 'Оман', 'ОАЭ', 'Кувейт', 'Турция', 'Азербайджан', 'Россия', 'Другие страны'],
    medicalSpecialtyLabel: 'Медицинское направление',
    tourismNotesPlaceholder: 'Медицинские выписки, снимки и даты поездки согласовываются в WhatsApp...',
    ipdNotice: 'Все медицинские услуги лицензированы Минздравом и курируются международным отделом IPD.',
    submitTourismBtn: 'Получить расчет и консультацию',
    tourismSuccessToast: 'Заявка на медтуризм отправлена на info@nersika.com',

    nurseModalTitle: 'Регистрация медицинского персонала',
    nurseModalSub: 'Трудоустройство в крупнейшей сети патронажного ухода',
    nurseCityPlaceholder: 'Например: Тегеран, Кередж, Шираз, Мешхед...',
    degreeLabel: 'Образование / Квалификация',
    degrees: [
      'Бакалавр сестринского дела (BSN)',
      'Магистр сестринского дела (MSN - ОРИТ/хирургия)',
      'Фельдшер / помощник медсестры',
      'Операционная медсестра / анестезист',
      'Сертифицированная сиделка по уходу',
    ],
    councilCodeLabel: 'Номер лицензии / сертификата (при наличии)',
    councilCodePlaceholder: 'Например: 123456',
    experienceLabel: 'Стаж клинической работы',
    experienceOptions: ['Менее 1 года', '1 - 3 года', '3 - 5 лет', 'Более 5 лет'],
    nurseBenefitsTitle: 'Преимущества работы в Нерсика:',
    nurseBenefitsText: 'Прозрачные ежедневные выплаты, полное страхование профответственности, гибкий график рядом с домом.',
    submitNurseBtn: 'Начать процесс оценки и оформления',
    nurseSuccessToast: 'Анкета специалиста отправлена на info@nersika.com',

    authModalTitle: 'Быстрый вход / Регистрация',
    authModalTitleLoggedIn: 'Личный кабинет и заявки',
    authModalSub: 'Интеллектуальная система клинического мониторинга Нерсика',
    authLoginDesc: 'Введите номер телефона для отслеживания прибытия медсестры, договоров и актов.',
    yourNameOptional: 'Ваше имя (необязательно)',
    yourNamePlaceholder: 'Например: Иван Петров',
    sendOtpBtn: 'Получить одноразовый код',
    otpNotice: 'Код подтверждения отправлен на телефон (для теста введите 1234).',
    otpCodeLabel: 'Код из SMS',
    changePhoneBtn: 'Изменить номер',
    verifyLoginBtn: 'Подтвердить и войти',
    userGreeting: 'Уважаемый клиент',
    logoutBtn: 'Выйти',
    activeOrdersTitle: 'Активные заявки и история',
    noOrdersDesc: 'У вас пока нет активных заявок. Нажмите "Срочный вызов" для оформления.',
    statusReviewing: 'На стадии клинического триажа',
    statusIpd: 'Оформление в международном отделе IPD',

    estimatorModalTitle: 'Прозрачный калькулятор стоимости',
    estimatorModalSub: 'Официальный расчет по тарифам Министерства здравоохранения',
    selectServiceEstimateLabel: 'Выберите требуемую услугу:',
    careDurationLabel: 'Длительность ухода:',
    daysUnit: 'дн.',
    specialCareCheckbox: 'Специализированный уход (зонд, катетер, пролежни)',
    urgentDispatchCheckbox: 'Срочный выезд (менее 45 минут)',
    finalEstimateLabel: 'Итоговая расчетная стоимость:',
    invoiceGuaranteeNote: 'Выдается полный пакет документов для страховой компании.',
    bookWithEstimateBtn: 'Оформить заявку по этому расчету',

    errServiceRequired: 'Пожалуйста, укажите требуемую услугу.',
    errNameRequired: 'Пожалуйста, укажите ФИО.',
    errPhoneInvalid: 'Укажите корректный номер телефона.',
    errLocationRequired: 'Пожалуйста, укажите город и район или клинику.',
    errWhatsappInvalid: 'Укажите корректный номер WhatsApp.',
    welcomeUser: 'Добро пожаловать,',
    logoutSuccess: 'Вы успешно вышли из профиля.',
  },
};
