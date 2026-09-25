// src/features/dashboard/components/UpcomingAppointment.tsx
// Matches the "Upcoming Appointment" card from the reference screenshot:
// date + time, doctor name, specialisation, "View Details" button.

import { Calendar, Clock, MapPin, Video, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import type { Appointment } from '@/types/appointment';
import { formatDate, formatTime } from '@/lib/utils/date';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import EmptyState from '@/components/ui/EmptyState';
import { DashboardCardSkeleton } from '@/components/ui/Skeleton';

interface Props {
  appointments: Appointment[];
  isLoading: boolean;
}

export default function UpcomingAppointment({ appointments, isLoading }: Props) {
  if (isLoading) return <DashboardCardSkeleton />;

  const next = appointments[0];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-blue-50 flex items-center justify-center">
            <Calendar className="h-3.5 w-3.5 text-blue-600" />
          </div>
          <h2 className="text-[13px] font-semibold text-slate-900">Upcoming Appointment</h2>
        </div>
        <Link
          to="/portal/appointments"
          className="text-[11px] text-blue-600 hover:text-blue-700 flex items-center gap-0.5 font-medium"
        >
          View all <ChevronRight className="h-3 w-3" />
        </Link>
      </div>

      {!next ? (
        <EmptyState
          icon={Calendar}
          title="No upcoming appointments"
          description="Book an appointment with a specialist today."
          actionLabel="Book now"
          onAction={() => { window.location.href = '/portal/appointments/book'; }}
          compact
        />
      ) : (
        <div className="flex flex-col gap-4 flex-1">
          {/* Date highlight — matches the reference "12 May 2024, 10:00 AM" style */}
          <div className="flex items-center gap-2 text-[12px] text-slate-600 bg-blue-50 rounded-lg px-3 py-2">
            <Clock className="h-3.5 w-3.5 text-blue-500 shrink-0" />
            <span className="font-semibold text-blue-700">
              {formatDate(next.scheduledAt)}, {formatTime(next.scheduledAt)}
            </span>
          </div>

          {/* Doctor info */}
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-[13px] font-bold shrink-0 shadow-sm">
              {next.doctor.firstName[0]}{next.doctor.lastName[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-slate-900">
                Dr. {next.doctor.firstName} {next.doctor.lastName}
              </p>
              <p className="text-[12px] text-slate-500">{next.doctor.specialization}</p>
            </div>
            <Badge variant={next.status === 'confirmed' ? 'success' : 'primary'}>
              {next.status}
            </Badge>
          </div>

          {/* Type */}
          <div className="flex items-center gap-1.5 text-[12px] text-slate-500">
            {next.type === 'teleconsultation'
              ? <><Video className="h-3.5 w-3.5 text-blue-500" /><span>Video consultation</span></>
              : <><MapPin className="h-3.5 w-3.5 text-slate-400" /><span>{next.hospitalName ?? 'In-person'}</span></>
            }
          </div>

          {/* CTA — matches "View Details" button in screenshot */}
          <Link
            to={`/portal/appointments`}
            className="mt-auto inline-flex items-center gap-1.5 text-[12px] font-semibold text-blue-600 hover:text-blue-700 border border-blue-200 rounded-lg px-3 py-2 hover:bg-blue-50 transition-colors self-start"
          >
            View Details <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
