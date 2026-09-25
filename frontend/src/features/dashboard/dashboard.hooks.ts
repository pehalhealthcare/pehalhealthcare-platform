// src/features/dashboard/dashboard.hooks.ts

import { useQuery } from '@tanstack/react-query';
import { dashboardApi } from './dashboard.api';

export const DASHBOARD_QUERY_KEY = ['dashboard', 'summary'] as const;

export function useDashboardSummary() {
  return useQuery({
    queryKey: DASHBOARD_QUERY_KEY,
    queryFn: dashboardApi.getSummary,
    staleTime: 60_000, // 1 minute
    select: (res) => res.data,
  });
}
