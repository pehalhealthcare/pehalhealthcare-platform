// src/lib/api/client.ts
// Central Axios instance — the ONLY place where Axios is configured.
// Feature API services import `apiClient`; they never create their own instances.

import axios from 'axios';
import { env } from '@/config/environment';
import { attachRequestInterceptor, attachResponseInterceptor } from './interceptors';

const apiClient = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: 30_000, // 30 s
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Attach interceptors
attachRequestInterceptor(apiClient);
attachResponseInterceptor(apiClient);

export default apiClient;

// ── Typed helpers ────────────────────────────────────────────────────────────

/** GET with typed response */
export const get = <T>(url: string, params?: Record<string, unknown>) =>
  apiClient.get<T>(url, { params }).then((r) => r.data);

/** POST with typed body and response */
export const post = <T>(url: string, data?: unknown) =>
  apiClient.post<T>(url, data).then((r) => r.data);

/** PUT with typed body and response */
export const put = <T>(url: string, data?: unknown) =>
  apiClient.put<T>(url, data).then((r) => r.data);

/** PATCH with typed body and response */
export const patch = <T>(url: string, data?: unknown) =>
  apiClient.patch<T>(url, data).then((r) => r.data);

/** DELETE with typed response */
export const del = <T>(url: string) =>
  apiClient.delete<T>(url).then((r) => r.data);

/** Multipart/form-data file upload */
export const upload = <T>(url: string, formData: FormData) =>
  apiClient
    .post<T>(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((r) => r.data);
