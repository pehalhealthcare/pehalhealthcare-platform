// src/config/environment.ts
// Centralised environment variable access — always use this file,
// never import.meta.env directly in feature code.

export const env = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL as string,
  appName: (import.meta.env.VITE_APP_NAME as string) ?? 'PehalHealthcare',
  appVersion: (import.meta.env.VITE_APP_VERSION as string) ?? '1.0.0',
} as const;
