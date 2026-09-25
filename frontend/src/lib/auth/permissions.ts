// src/lib/auth/permissions.ts
// Frontend permission helpers — NOTE: authoritative authorization
// must always be enforced on the backend. These helpers are for
// UI-level conditional rendering only.

export type PatientRole = 'patient' | 'admin';

export const permissions = {
  canUploadDocuments: (_role: PatientRole): boolean => true,
  canShareDocuments: (_role: PatientRole): boolean => true,
  canViewFamilyMembers: (_role: PatientRole): boolean => true,
  canBookAppointments: (_role: PatientRole): boolean => true,
};
