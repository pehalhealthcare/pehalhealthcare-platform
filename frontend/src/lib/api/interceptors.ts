// src/lib/api/interceptors.ts
// Axios request & response interceptors.
// Kept separate from client.ts for testability.

import type {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
import storage from '@/lib/storage/storage';
import ENDPOINTS from './endpoints';

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value: string) => void;
  reject: (reason: unknown) => void;
}> = [];

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token as string);
    }
  });
  failedQueue = [];
};

export function attachRequestInterceptor(axiosInstance: AxiosInstance): void {
  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = storage.getToken();
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: AxiosError) => Promise.reject(error),
  );
}

export function attachResponseInterceptor(axiosInstance: AxiosInstance): void {
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as InternalAxiosRequestConfig & {
        _retry?: boolean;
      };

      // ── 401: attempt token refresh ──────────────────────────────────────
      if (error.response?.status === 401 && !originalRequest._retry) {
        const refreshToken = storage.getRefreshToken();

        // No refresh token → log out immediately
        if (!refreshToken) {
          storage.clearAuth();
          window.location.href = '/login';
          return Promise.reject(error);
        }

        if (isRefreshing) {
          // Queue concurrent requests while refresh is in flight
          return new Promise<string>((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          }).then((token) => {
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${token}`;
            }
            return axiosInstance(originalRequest);
          });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          const { data } = await axiosInstance.post<{
            accessToken: string;
            refreshToken: string;
          }>(ENDPOINTS.AUTH.REFRESH_TOKEN, { refreshToken });

          storage.setToken(data.accessToken);
          storage.setRefreshToken(data.refreshToken);

          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
          }

          processQueue(null, data.accessToken);
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          processQueue(refreshError, null);
          storage.clearAuth();
          window.location.href = '/login';
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject(error);
    },
  );
}
