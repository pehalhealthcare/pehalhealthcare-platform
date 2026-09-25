// src/features/dashboard/components/UpcomingAppointment.tsx

import { Calendar, Video, MapPin, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import type { Appointment } from '@/types/appointment';
import { formatDate, formatTime } from '@/lib/utils/date';
import Badge from '@/components/ui/Badge';
import EmptyState from '@/components/ui/EmptyState';
import { CardSkeleton } from '@/components/ui/Skeleton';

interface Props {
  appointments: Appointment[];
  isLoading: boolean;
}

export default function UpcomingAppointment({ appointments, isLoading }: Props) {
  if (isLoading) return <CardSkeleton />;

  const next = appointments[0];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-blue-600" />
          <h2 className="text-sm font-semibold text-slate-900">Upcoming Appointment</h2>
        </div>
        <Link to="/portal/appointments" className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-0.5">
          View all <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {!next ? (
        <EmptyState
          icon={Calendar}
          title="No upcoming appointments"
          description="Book an appointment with your doctor."
          actionLabel="Book now"
          onAction={() => { window.location.href = '/portal/appointments/book'; }}
        />
      ) : (
        <div className="flex flex-col gap-3">
          {/* Doctor info */}
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-700 font-semibold text-sm">
              {next.doctor.firstName[0]}{next.doctor.lastName[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900">
                Dr. {next.doctor.firstName} {next.doctor.lastName}
              </p>
              <p className="text-xs text-slate-500 truncate">{next.doctor.specialization}</p>
            </div>
            <Badge variant={next.status === 'confirmed' ? 'success' : 'primary'}>
              {next.status}
            </Badge>
          </div>

          {/* Time & type */}
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              {formatDate(next.scheduledAt)}, {formatTime(next.scheduledAt)}
            </span>
            <span className={clsx(
              'flex items-center gap-1',
              next.type === 'teleconsultation' ? 'text-blue-600' : 'text-slate-600',
            )}>
              {next.type === 'teleconsultation'
                ? <><Video className="h-3.5 w-3.5" /> Video call</>
                : <><MapPin className="h-3.5 w-3.5" /> {next.hospitalName ?? 'In-person'}</>
              }
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
