export type Language = 'fa' | 'ar' | 'en' | 'tr' | 'ru';

export type TabType = 'home' | 'services' | 'urgent' | 'tourism' | 'account';

export interface ServiceItem {
  id: string;
  icon: string;
  category: 'home' | 'hospital' | 'specialized' | 'shift';
  basePrice: number; // in Tomans
}

export interface NursingRequest {
  id: string;
  serviceName: string;
  requesterName: string;
  phone: string;
  location: string;
  shift: 'hourly' | 'daily' | 'night' | '24h';
  notes: string;
  estimatedPrice: number;
  status: 'pending' | 'matching' | 'nurse_assigned' | 'active' | 'completed';
  assignedNurseName?: string;
  nursePhone?: string;
  createdAt: string;
}

export interface TourismRequest {
  id: string;
  patientName: string;
  whatsapp: string;
  country: string;
  specialty: string;
  notes: string;
  status: 'received' | 'consultation' | 'scheduled';
  createdAt: string;
}

export interface NurseApplication {
  id: string;
  fullName: string;
  phone: string;
  degree: string;
  medicalCouncilCode?: string;
  city: string;
  experienceYears: string;
  status: 'submitted' | 'under_review';
  createdAt: string;
}
