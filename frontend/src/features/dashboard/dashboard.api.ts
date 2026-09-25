// src/features/dashboard/dashboard.api.ts

import { get } from '@/lib/api/client';
import ENDPOINTS from '@/lib/api/endpoints';
import type { ApiResponse } from '@/types/api';
import type { DashboardSummary } from './dashboard.types';

export const dashboardApi = {
  getSummary: () =>
    get<ApiResponse<DashboardSummary>>(ENDPOINTS.DASHBOARD.SUMMARY),
};
