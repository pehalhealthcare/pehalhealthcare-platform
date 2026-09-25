// src/lib/auth/auth.ts
// Auth API service — wraps auth endpoints

import { post } from '@/lib/api/client';
import ENDPOINTS from '@/lib/api/endpoints';
import type { Patient } from '@/types/patient';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  patient: Patient;
}

export interface OtpVerifyPayload {
  phone: string;
  otp: string;
}

export const authService = {
  login: (payload: LoginPayload) =>
    post<AuthResponse>(ENDPOINTS.AUTH.LOGIN, payload),

  register: (payload: RegisterPayload) =>
    post<AuthResponse>(ENDPOINTS.AUTH.REGISTER, payload),

  logout: () => post<void>(ENDPOINTS.AUTH.LOGOUT),

  forgotPassword: (email: string) =>
    post<{ message: string }>(ENDPOINTS.AUTH.FORGOT_PASSWORD, { email }),

  verifyOtp: (payload: OtpVerifyPayload) =>
    post<AuthResponse>(ENDPOINTS.AUTH.VERIFY_OTP, payload),

  resendOtp: (phone: string) =>
    post<{ message: string }>(ENDPOINTS.AUTH.RESEND_OTP, { phone }),
};
