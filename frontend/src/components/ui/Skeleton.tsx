// src/components/ui/Skeleton.tsx

import { clsx } from 'clsx';

interface SkeletonProps {
  className?: string;
  /** Animate shimmer effect */
  animate?: boolean;
}

export default function Skeleton({ className, animate = true }: SkeletonProps) {
  return (
    <div
      className={clsx(
        'rounded-md bg-slate-200',
        animate && 'animate-pulse',
        className,
      )}
    />
  );
}

/** Pre-composed card skeleton */
export function CardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3">
      <Skeleton className="h-4 w-1/3" />
      <Skeleton className="h-3 w-2/3" />
      <Skeleton className="h-3 w-1/2" />
    </div>
  );
}

/** Pre-composed list item skeleton */
export function ListItemSkeleton() {
  return (
    <div className="flex items-center gap-3 p-4">
      <Skeleton className="h-10 w-10 rounded-full shrink-0" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-3.5 w-1/3" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  );
}
