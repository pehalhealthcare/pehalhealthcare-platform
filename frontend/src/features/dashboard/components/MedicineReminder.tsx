// src/features/dashboard/components/MedicineReminder.tsx

import { Pill, Clock, Check, ChevronRight } from 'lucide-react';
import type { MedicineReminder as MedicineReminderType } from '../dashboard.types';
import { formatTime, isToday } from '@/lib/utils/date';
import { DashboardCardSkeleton } from '@/components/ui/Skeleton';
import EmptyState from '@/components/ui/EmptyState';

interface Props {
  reminders: MedicineReminderType[];
  isLoading: boolean;
}

export default function MedicineReminder({ reminders, isLoading }: Props) {
  if (isLoading) return <DashboardCardSkeleton />;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-violet-50 flex items-center justify-center">
            <Pill className="h-3.5 w-3.5 text-violet-600" />
          </div>
          <h2 className="text-[13px] font-semibold text-slate-900">Medicine Reminders</h2>
        </div>
        {reminders.length > 0 && (
          <span className="text-[11px] font-semibold text-violet-600 bg-violet-50 rounded-full px-2 py-0.5">
            {reminders.filter(r => !r.isTaken).length} pending
          </span>
        )}
      </div>

      {reminders.length === 0 ? (
        <EmptyState icon={Pill} title="No active medicines" description="Your medicine schedule will appear here." compact />
      ) : (
        <div className="space-y-2 flex-1">
          {reminders.map((r) => (
            <div
              key={r.id}
              className="flex items-center gap-3 rounded-xl border border-slate-100 px-3 py-2.5 hover:border-slate-200 transition-colors"
            >
              {/* Status icon */}
              <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${r.isTaken ? 'bg-emerald-100' : 'bg-violet-100'}`}>
                {r.isTaken
                  ? <Check className="h-4 w-4 text-emerald-600" />
                  : <Pill className="h-4 w-4 text-violet-600" />
                }
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-semibold text-slate-900 truncate">{r.medicineName}</p>
                <p className="text-[11px] text-slate-400">{r.dosage} · {r.frequency}</p>
              </div>

              {/* Time */}
              <div className="text-right shrink-0">
                <div className="flex items-center gap-1 text-[11px] text-slate-500">
                  <Clock className="h-3 w-3" />
                  <span>{formatTime(r.nextDoseAt)}</span>
                </div>
                {isToday(r.nextDoseAt) && !r.isTaken && (
                  <span className="text-[10px] font-semibold text-amber-600">Today</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
