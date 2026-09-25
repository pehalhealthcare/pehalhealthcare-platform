// src/lib/utils/file.ts

import { MAX_FILE_SIZE_MB, ALLOWED_DOCUMENT_TYPES } from '@/config/constants';

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function isFileSizeValid(file: File): boolean {
  return file.size <= MAX_FILE_SIZE_MB * 1024 * 1024;
}

export function isFileTypeAllowed(file: File): boolean {
  return ALLOWED_DOCUMENT_TYPES.includes(file.type);
}

export function getFileExtension(fileName: string): string {
  return fileName.split('.').pop()?.toLowerCase() ?? '';
}
