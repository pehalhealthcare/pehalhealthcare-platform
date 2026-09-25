// src/types/prescription.ts

export interface Prescription {
  id: string;
  patientId: string;
  doctorId: string;
  appointmentId?: string;
  doctor: {
    firstName: string;
    lastName: string;
    specialization: string;
  };
  medications: Medication[];
  instructions?: string;
  validFrom: string;
  validUntil?: string;
  status: 'active' | 'expired' | 'dispensed';
  documentUrl?: string;
  createdAt: string;
}

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions?: string;
}
