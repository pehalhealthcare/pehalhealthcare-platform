// src/types/appointment.ts

export type AppointmentStatus =
  | 'scheduled'
  | 'confirmed'
  | 'in_progress'
  | 'completed'
  | 'cancelled'
  | 'no_show';

export type AppointmentType = 'in_person' | 'teleconsultation';

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  doctor: {
    id: string;
    firstName: string;
    lastName: string;
    specialization: string;
    profilePictureUrl?: string;
  };
  hospitalId?: string;
  hospitalName?: string;
  type: AppointmentType;
  status: AppointmentStatus;
  scheduledAt: string;
  durationMinutes: number;
  reason?: string;
  notes?: string;
  teleconsultationUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BookAppointmentPayload {
  doctorId: string;
  hospitalId?: string;
  type: AppointmentType;
  scheduledAt: string;
  durationMinutes?: number;
  reason?: string;
  familyMemberId?: string;
}
