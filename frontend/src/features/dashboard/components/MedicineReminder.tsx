// src/features/dashboard/components/MedicineReminder.tsx

import { Pill, Clock, Check } from 'lucide-react';
import type { MedicineReminder as MedicineReminderType } from '../dashboard.types';
import { formatTime, isToday } from '@/lib/utils/date';
import { CardSkeleton } from '@/components/ui/Skeleton';
import EmptyState from '@/components/ui/EmptyState';

interface Props {
  reminders: MedicineReminderType[];
  isLoading: boolean;
}

export default function MedicineReminder({ reminders, isLoading }: Props) {
  if (isLoading) return <CardSkeleton />;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 h-full">
      <div className="flex items-center gap-2 mb-4">
        <Pill className="h-4 w-4 text-blue-600" />
        <h2 className="text-sm font-semibold text-slate-900">Medicine Reminders</h2>
      </div>

      {reminders.length === 0 ? (
        <EmptyState icon={Pill} title="No active medicines" description="Your medicine schedule will appear here." />
      ) : (
        <div className="space-y-2">
          {reminders.map((r) => (
            <div
              key={r.id}
              className="flex items-center gap-3 rounded-lg border border-slate-100 p-3"
            >
              <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${r.isTaken ? 'bg-emerald-100' : 'bg-blue-50'}`}>
                {r.isTaken
                  ? <Check className="h-4 w-4 text-emerald-600" />
                  : <Pill className="h-4 w-4 text-blue-600" />
                }
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-slate-900 truncate">{r.medicineName}</p>
                <p className="text-xs text-slate-500">{r.dosage} · {r.frequency}</p>
              </div>
              <div className="text-right shrink-0">
                <div className="flex items-center gap-1 text-xs text-slate-600">
                  <Clock className="h-3 w-3" />
                  {formatTime(r.nextDoseAt)}
                </div>
                {isToday(r.nextDoseAt) && !r.isTaken && (
                  <span className="text-[10px] text-amber-600 font-medium">Today</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
