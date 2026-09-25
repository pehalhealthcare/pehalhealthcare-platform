// src/config/constants.ts

export const APP_NAME = 'PehalHealthcare';
export const TOKEN_KEY = 'ph_access_token';
export const REFRESH_TOKEN_KEY = 'ph_refresh_token';
export const USER_KEY = 'ph_user';

// Pagination defaults
export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_PAGE = 1;

// Date formats
export const DATE_FORMAT = 'dd MMM yyyy';
export const DATETIME_FORMAT = 'dd MMM yyyy, hh:mm a';
export const TIME_FORMAT = 'hh:mm a';

// File upload limits
export const MAX_FILE_SIZE_MB = 25;
export const ALLOWED_DOCUMENT_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/heic',
];
