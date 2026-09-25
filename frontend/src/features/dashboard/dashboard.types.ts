// src/features/dashboard/dashboard.types.ts

import type { Appointment } from '@/types/appointment';
import type { EMRDocument } from '@/types/emr';
import type { FamilyMember } from '@/types/patient';

export interface DashboardSummary {
  upcomingAppointments: Appointment[];
  recentDocuments: EMRDocument[];
  familyMembers: FamilyMember[];
  healthScore: HealthScore | null;
  medicineReminders: MedicineReminder[];
  unreadNotifications: number;
}

export interface HealthScore {
  score: number; // 0–100
  label: string;
  lastUpdated: string;
  breakdown?: HealthScoreBreakdown[];
}

export interface HealthScoreBreakdown {
  category: string;
  score: number;
  maxScore: number;
}

export interface MedicineReminder {
  id: string;
  medicineName: string;
  dosage: string;
  frequency: string;
  nextDoseAt: string;
  prescriptionId?: string;
  isTaken?: boolean;
}
