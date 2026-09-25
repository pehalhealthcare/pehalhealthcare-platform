// src/features/dashboard/components/HealthScoreCard.tsx
// Matches the Health Score card from the reference screenshot:
// circular donut chart, "82 /100", "Good — Keep it up!" label.

import { Activity } from 'lucide-react';
import type { HealthScore } from '../dashboard.types';
import { getHealthScoreColor } from '../dashboard.utils';
import { DashboardCardSkeleton } from '@/components/ui/Skeleton';
import EmptyState from '@/components/ui/EmptyState';

interface Props {
  healthScore: HealthScore | null;
  isLoading: boolean;
}

function getArcColor(score: number) {
  if (score >= 80) return '#16a34a';
  if (score >= 60) return '#f59e0b';
  return '#ef4444';
}

function getScoreBg(score: number) {
  if (score >= 80) return 'bg-emerald-50 border-emerald-100 text-emerald-700';
  if (score >= 60) return 'bg-amber-50 border-amber-100 text-amber-700';
  return 'bg-red-50 border-red-100 text-red-700';
}

export default function HealthScoreCard({ healthScore, isLoading }: Props) {
  if (isLoading) return <DashboardCardSkeleton />;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="h-7 w-7 rounded-lg bg-emerald-50 flex items-center justify-center">
          <Activity className="h-3.5 w-3.5 text-emerald-600" />
        </div>
        <h2 className="text-[13px] font-semibold text-slate-900">Health Score</h2>
      </div>

      {!healthScore ? (
        <EmptyState
          icon={Activity}
          title="Score not available"
          description="Complete your health profile to see your score."
          compact
        />
      ) : (
        <div className="flex flex-col items-center gap-4 flex-1 justify-center">
          {/* Donut chart — matches reference "82 /100" design */}
          <div className="relative flex items-center justify-center">
            <svg className="h-28 w-28 -rotate-90" viewBox="0 0 36 36">
              {/* Track */}
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none" stroke="#e2e8f0" strokeWidth="2.5"
              />
              {/* Fill */}
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke={getArcColor(healthScore.score)}
                strokeWidth="2.5"
                strokeDasharray={`${healthScore.score}, 100`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-[26px] font-bold leading-none ${getHealthScoreColor(healthScore.score)}`}>
                {healthScore.score}
              </span>
              <span className="text-[10px] text-slate-400 font-medium">/100</span>
            </div>
          </div>

          {/* Label — matches "Good — Keep it up!" from screenshot */}
          <div className={`rounded-lg border px-3 py-1.5 text-center ${getScoreBg(healthScore.score)}`}>
            <p className="text-[12px] font-semibold">{healthScore.label}</p>
            <p className="text-[11px] opacity-75 mt-0.5">Keep it up!</p>
          </div>

          {/* Breakdown bars */}
          {healthScore.breakdown && healthScore.breakdown.length > 0 && (
            <div className="w-full space-y-2.5">
              {healthScore.breakdown.map((item) => (
                <div key={item.category}>
                  <div className="flex justify-between text-[11px] text-slate-600 mb-1">
                    <span>{item.category}</span>
                    <span className="font-medium">{item.score}/{item.maxScore}</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-100">
                    <div
                      className="h-1.5 rounded-full bg-blue-500 transition-all duration-700"
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
