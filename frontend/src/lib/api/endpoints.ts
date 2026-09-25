// src/lib/api/endpoints.ts
// Centralised API endpoint definitions.
// ⚠ Endpoints marked [PROPOSED] do not yet have a confirmed backend contract.
// They represent the frontend API surface and must be verified against the
// backend OpenAPI spec before integration.

const ENDPOINTS = {
  // ── Auth ──────────────────────────────────────────────────────────────────
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH_TOKEN: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',     // [PROPOSED]
    RESET_PASSWORD: '/auth/reset-password',        // [PROPOSED]
    VERIFY_OTP: '/auth/verify-otp',               // [PROPOSED]
    RESEND_OTP: '/auth/resend-otp',               // [PROPOSED]
  },

  // ── Patient Profile ───────────────────────────────────────────────────────
  PATIENT: {
    ME: '/patients/me',
    UPDATE_PROFILE: '/patients/me',
    UPLOAD_AVATAR: '/patients/me/avatar',          // [PROPOSED]
  },

  // ── Dashboard ─────────────────────────────────────────────────────────────
  DASHBOARD: {
    SUMMARY: '/dashboard/summary',                 // [PROPOSED]
    HEALTH_SCORE: '/dashboard/health-score',       // [PROPOSED]
    MEDICINE_REMINDERS: '/dashboard/reminders',    // [PROPOSED]
  },

  // ── Appointments ──────────────────────────────────────────────────────────
  APPOINTMENTS: {
    LIST: '/appointments',
    BOOK: '/appointments',
    GET: (id: string) => `/appointments/${id}`,
    CANCEL: (id: string) => `/appointments/${id}/cancel`,
    RESCHEDULE: (id: string) => `/appointments/${id}/reschedule`,  // [PROPOSED]
    UPCOMING: '/appointments/upcoming',            // [PROPOSED]
    DOCTORS_AVAILABILITY: '/appointments/availability', // [PROPOSED]
  },

  // ── EMR ───────────────────────────────────────────────────────────────────
  EMR: {
    LIST: '/emr/documents',
    UPLOAD: '/emr/documents',
    GET: (id: string) => `/emr/documents/${id}`,
    DELETE: (id: string) => `/emr/documents/${id}`,
    DOWNLOAD: (id: string) => `/emr/documents/${id}/download`,
    SHARE: (id: string) => `/emr/documents/${id}/share`,           // [PROPOSED]
    ACCESS_HISTORY: (id: string) => `/emr/documents/${id}/access`, // [PROPOSED]
  },

  // ── Prescriptions ─────────────────────────────────────────────────────────
  PRESCRIPTIONS: {
    LIST: '/prescriptions',
    GET: (id: string) => `/prescriptions/${id}`,
    DOWNLOAD: (id: string) => `/prescriptions/${id}/download`,     // [PROPOSED]
  },

  // ── Lab Reports ───────────────────────────────────────────────────────────
  LAB_REPORTS: {
    LIST: '/lab-reports',
    GET: (id: string) => `/lab-reports/${id}`,
    DOWNLOAD: (id: string) => `/lab-reports/${id}/download`,       // [PROPOSED]
  },

  // ── Radiology ─────────────────────────────────────────────────────────────
  RADIOLOGY: {
    LIST: '/radiology',
    GET: (id: string) => `/radiology/${id}`,
    DOWNLOAD: (id: string) => `/radiology/${id}/download`,         // [PROPOSED]
  },

  // ── Teleconsultation ──────────────────────────────────────────────────────
  TELECONSULTATION: {
    GET_SESSION: (appointmentId: string) => `/teleconsultation/${appointmentId}/session`, // [PROPOSED]
  },

  // ── Health Timeline ───────────────────────────────────────────────────────
  HEALTH_TIMELINE: {
    LIST: '/health-timeline',                                       // [PROPOSED]
  },

  // ── Family ────────────────────────────────────────────────────────────────
  FAMILY: {
    LIST: '/family-members',
    ADD: '/family-members',
    GET: (id: string) => `/family-members/${id}`,
    UPDATE: (id: string) => `/family-members/${id}`,
    REMOVE: (id: string) => `/family-members/${id}`,
  },

  // ── Insurance ─────────────────────────────────────────────────────────────
  INSURANCE: {
    LIST: '/insurance',                                             // [PROPOSED]
    ADD: '/insurance',                                              // [PROPOSED]
    GET: (id: string) => `/insurance/${id}`,                        // [PROPOSED]
    UPDATE: (id: string) => `/insurance/${id}`,                     // [PROPOSED]
    DELETE: (id: string) => `/insurance/${id}`,                     // [PROPOSED]
  },

  // ── Payments ──────────────────────────────────────────────────────────────
  PAYMENTS: {
    LIST: '/payments',                                              // [PROPOSED]
    GET: (id: string) => `/payments/${id}`,                         // [PROPOSED]
    INITIATE: '/payments/initiate',                                 // [PROPOSED]
    INVOICE: (id: string) => `/payments/${id}/invoice`,             // [PROPOSED]
  },

  // ── Emergency Card ────────────────────────────────────────────────────────
  EMERGENCY_CARD: {
    GET: '/emergency-card',                                         // [PROPOSED]
    UPDATE: '/emergency-card',                                      // [PROPOSED]
  },

  // ── Notifications ─────────────────────────────────────────────────────────
  NOTIFICATIONS: {
    LIST: '/notifications',
    MARK_READ: (id: string) => `/notifications/${id}/read`,
    MARK_ALL_READ: '/notifications/read-all',
    DELETE: (id: string) => `/notifications/${id}`,
    PREFERENCES: '/notifications/preferences',                      // [PROPOSED]
  },

  // ── Support ───────────────────────────────────────────────────────────────
  SUPPORT: {
    TICKETS: '/support/tickets',                                    // [PROPOSED]
    CREATE_TICKET: '/support/tickets',                              // [PROPOSED]
    GET_TICKET: (id: string) => `/support/tickets/${id}`,           // [PROPOSED]
    FAQ: '/support/faq',                                            // [PROPOSED]
  },
} as const;

export default ENDPOINTS;
