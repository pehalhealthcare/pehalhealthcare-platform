// src/store/patient.store.ts
// Patient context state — selected family member context, etc.

import { create } from 'zustand';
import type { FamilyMember } from '@/types/patient';

interface PatientState {
  /** When booking for a family member, this is set */
  selectedFamilyMemberId: string | null;
  setSelectedFamilyMember: (member: FamilyMember | null) => void;
}

export const usePatientStore = create<PatientState>()((set) => ({
  selectedFamilyMemberId: null,
  setSelectedFamilyMember: (member) =>
    set({ selectedFamilyMemberId: member?.id ?? null }),
}));
