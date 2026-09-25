// src/types/doctor.ts

export interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  specialization: string;
  qualifications: string[];
  profilePictureUrl?: string;
  registrationNumber: string;
  hospitalAffiliations?: HospitalAffiliation[];
  rating?: number;
  totalReviews?: number;
  consultationFee?: number;
  availableForTeleconsultation?: boolean;
}

export interface HospitalAffiliation {
  hospitalId: string;
  hospitalName: string;
  department: string;
}
