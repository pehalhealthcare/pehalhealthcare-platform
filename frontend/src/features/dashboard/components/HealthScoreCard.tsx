// src/features/dashboard/components/HealthScoreCard.tsx

import { Activity } from 'lucide-react';
import type { HealthScore } from '../dashboard.types';
import { getHealthScoreColor, getHealthScoreBg } from '../dashboard.utils';
import { CardSkeleton } from '@/components/ui/Skeleton';
import EmptyState from '@/components/ui/EmptyState';

interface Props {
  healthScore: HealthScore | null;
  isLoading: boolean;
}

export default function HealthScoreCard({ healthScore, isLoading }: Props) {
  if (isLoading) return <CardSkeleton />;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 h-full">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="h-4 w-4 text-blue-600" />
        <h2 className="text-sm font-semibold text-slate-900">Health Score</h2>
      </div>

      {!healthScore ? (
        <EmptyState
          icon={Activity}
          title="Score not available"
          description="Complete your health profile to see your score."
        />
      ) : (
        <div className="flex flex-col items-center gap-4">
          {/* Circular score */}
          <div className="relative flex items-center justify-center">
            <svg className="h-24 w-24 -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke={healthScore.score >= 80 ? '#10b981' : healthScore.score >= 60 ? '#f59e0b' : '#ef4444'}
                strokeWidth="3"
                strokeDasharray={`${healthScore.score}, 100`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className={`text-2xl font-bold ${getHealthScoreColor(healthScore.score)}`}>
                {healthScore.score}
              </span>
              <span className="text-[10px] text-slate-500 font-medium">/ 100</span>
            </div>
          </div>

          <div className="text-center">
            <p className={`text-sm font-semibold ${getHealthScoreColor(healthScore.score)}`}>
              {healthScore.label}
            </p>
          </div>

          {/* Breakdown */}
          {healthScore.breakdown && healthScore.breakdown.length > 0 && (
            <div className="w-full space-y-2 mt-1">
              {healthScore.breakdown.map((item) => (
                <div key={item.category}>
                  <div className="flex justify-between text-xs text-slate-600 mb-1">
                    <span>{item.category}</span>
                    <span>{item.score}/{item.maxScore}</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-100">
                    <div
                      className="h-1.5 rounded-full bg-blue-500 transition-all"
                      style={{ width: `${(item.score / item.maxScore) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
