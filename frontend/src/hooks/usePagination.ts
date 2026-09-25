// src/hooks/usePagination.ts

import { useState } from 'react';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/config/constants';

interface UsePaginationOptions {
  initialPage?: number;
  initialPageSize?: number;
}

export function usePagination({
  initialPage = DEFAULT_PAGE,
  initialPageSize = DEFAULT_PAGE_SIZE,
}: UsePaginationOptions = {}) {
  const [page, setPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const nextPage = () => setPage((p) => p + 1);
  const prevPage = () => setPage((p) => Math.max(1, p - 1));
  const goToPage = (p: number) => setPage(p);
  const reset = () => setPage(initialPage);

  return { page, pageSize, setPage, setPageSize, nextPage, prevPage, goToPage, reset };
}
