// src/lib/auth/session.ts
// Session management helpers — built on top of the storage layer.

import storage from '@/lib/storage/storage';
import type { AuthResponse } from './auth';

export const session = {
  /** Persist tokens and user after successful login/register */
  persist: (authResponse: AuthResponse): void => {
    storage.setToken(authResponse.accessToken);
    storage.setRefreshToken(authResponse.refreshToken);
    storage.setUser(authResponse.patient);
  },

  /** Clear all auth data on logout */
  clear: (): void => {
    storage.clearAuth();
  },

  isAuthenticated: (): boolean => !!storage.getToken(),

  getToken: () => storage.getToken(),

  getCurrentUser: () => storage.getUser(),
};
