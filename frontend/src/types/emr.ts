// src/types/emr.ts

export type EMRCategory =
  | 'prescription'
  | 'lab_report'
  | 'radiology'
  | 'discharge_summary'
  | 'surgery'
  | 'vaccination'
  | 'allergy'
  | 'chronic_disease'
  | 'insurance'
  | 'emergency_profile'
  | 'other';

export interface EMRDocument {
  id: string;
  patientId: string;
  category: EMRCategory;
  title: string;
  description?: string;
  documentUrl?: string;
  thumbnailUrl?: string;
  mimeType?: string;
  fileSizeBytes?: number;
  uploadedBy: 'patient' | 'doctor' | 'lab' | 'hospital';
  uploadedById?: string;
  doctorName?: string;
  hospitalName?: string;
  recordedAt?: string;
  expiresAt?: string;
  tags?: string[];
  accessHistory?: DocumentAccess[];
  sharedWith?: DocumentShare[];
  createdAt: string;
  updatedAt: string;
}

export interface DocumentAccess {
  accessedBy: string;
  accessedByType: 'patient' | 'doctor' | 'hospital' | 'lab';
  accessedAt: string;
  action: 'view' | 'download' | 'share';
}

export interface DocumentShare {
  sharedWithId: string;
  sharedWithName: string;
  sharedWithType: 'doctor' | 'hospital' | 'lab';
  sharedAt: string;
  expiresAt?: string;
  consentGiven: boolean;
}

export interface UploadDocumentPayload {
  category: EMRCategory;
  title: string;
  description?: string;
  recordedAt?: string;
  file: File;
}

export interface EMRFilters {
  category?: EMRCategory;
  search?: string;
  from?: string;
  to?: string;
  uploadedBy?: EMRDocument['uploadedBy'];
}
