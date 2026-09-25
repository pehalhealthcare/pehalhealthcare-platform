// src/types/lab-report.ts

export type LabReportStatus = 'pending' | 'processing' | 'completed' | 'cancelled';

export interface LabReport {
  id: string;
  patientId: string;
  doctorId?: string;
  doctor?: {
    firstName: string;
    lastName: string;
    specialization: string;
  };
  labName: string;
  reportName: string;
  testType: string;
  status: LabReportStatus;
  collectedAt?: string;
  reportedAt?: string;
  documentUrl?: string;
  parameters?: LabParameter[];
  notes?: string;
  createdAt: string;
}

export interface LabParameter {
  name: string;
  value: string;
  unit?: string;
  referenceRange?: string;
  isAbnormal?: boolean;
}
