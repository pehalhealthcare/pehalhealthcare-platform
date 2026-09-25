// src/lib/storage/storage.ts
// Typed local/session storage wrapper.

import { TOKEN_KEY, REFRESH_TOKEN_KEY, USER_KEY } from '@/config/constants';
import type { Patient } from '@/types/patient';

const storage = {
  // ── Access token ──────────────────────────────────────────────────────────
  getToken: (): string | null => localStorage.getItem(TOKEN_KEY),
  setToken: (token: string): void => { localStorage.setItem(TOKEN_KEY, token); },
  removeToken: (): void => { localStorage.removeItem(TOKEN_KEY); },

  // ── Refresh token ─────────────────────────────────────────────────────────
  getRefreshToken: (): string | null => localStorage.getItem(REFRESH_TOKEN_KEY),
  setRefreshToken: (token: string): void => { localStorage.setItem(REFRESH_TOKEN_KEY, token); },
  removeRefreshToken: (): void => { localStorage.removeItem(REFRESH_TOKEN_KEY); },

  // ── User profile ──────────────────────────────────────────────────────────
  getUser: (): Patient | null => {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return null;
    try { return JSON.parse(raw) as Patient; } catch { return null; }
  },
  setUser: (user: Patient): void => { localStorage.setItem(USER_KEY, JSON.stringify(user)); },
  removeUser: (): void => { localStorage.removeItem(USER_KEY); },

  // ── Clear all auth data ───────────────────────────────────────────────────
  clearAuth: (): void => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },
};

export default storage;
