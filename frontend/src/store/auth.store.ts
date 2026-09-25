// src/store/auth.store.ts
// Auth / session UI state — uses Zustand.
// ⚠ Do NOT store server-fetched medical data here; use TanStack Query for that.

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Patient } from '@/types/patient';
import { session } from '@/lib/auth/session';
import type { AuthResponse } from '@/lib/auth/auth';

interface AuthState {
  isAuthenticated: boolean;
  patient: Patient | null;
  // Actions
  login: (authResponse: AuthResponse) => void;
  logout: () => void;
  updatePatient: (patient: Patient) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: session.isAuthenticated(),
      patient: session.getCurrentUser(),

      login: (authResponse: AuthResponse) => {
        session.persist(authResponse);
        set({ isAuthenticated: true, patient: authResponse.patient });
      },

      logout: () => {
        session.clear();
        set({ isAuthenticated: false, patient: null });
      },

      updatePatient: (patient: Patient) => {
        set({ patient });
      },
    }),
    {
      name: 'ph_auth_state',
      // Only persist auth flag — sensitive tokens are in storage.ts, not here
      partialize: (state) => ({ isAuthenticated: state.isAuthenticated }),
    },
  ),
);
