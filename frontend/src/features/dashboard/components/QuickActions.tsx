// src/features/dashboard/components/QuickActions.tsx
// Matches the quick action shortcuts visible in the reference portal screenshot.

import { Calendar, Upload, AlertCircle, Video, FlaskConical, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

interface QuickAction {
  id: string;
  label: string;
  icon: React.ElementType;
  to: string;
  iconColor: string;
  iconBg: string;
}

const ACTIONS: QuickAction[] = [
  {
    id: 'book',
    label: 'Book Appointment',
    icon: Calendar,
    to: '/portal/appointments/book',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50 group-hover:bg-blue-100',
  },
  {
    id: 'upload',
    label: 'Upload Report',
    icon: Upload,
    to: '/portal/emr',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50 group-hover:bg-emerald-100',
  },
  {
    id: 'lab',
    label: 'Lab Reports',
    icon: FlaskConical,
    to: '/portal/lab-reports',
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-50 group-hover:bg-violet-100',
  },
  {
    id: 'tele',
    label: 'Teleconsult',
    icon: Video,
    to: '/portal/teleconsultation',
    iconColor: 'text-cyan-600',
    iconBg: 'bg-cyan-50 group-hover:bg-cyan-100',
  },
  {
    id: 'rx',
    label: 'Prescriptions',
    icon: FileText,
    to: '/portal/prescriptions',
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50 group-hover:bg-amber-100',
  },
  {
    id: 'emergency',
    label: 'Emergency Card',
    icon: AlertCircle,
    to: '/portal/emergency-card',
    iconColor: 'text-red-600',
    iconBg: 'bg-red-50 group-hover:bg-red-100',
  },
];

export default function QuickActions() {
  return (
    <div className="mb-4">
      <h2 className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider mb-3">
        Quick Actions
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {ACTIONS.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.id}
              to={action.to}
              className="group flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 text-center hover:border-blue-200 hover:shadow-sm transition-all duration-150"
            >
              <div
                className={clsx(
                  'h-10 w-10 rounded-xl flex items-center justify-center transition-colors',
                  action.iconBg,
                )}
              >
                <Icon className={clsx('h-5 w-5', action.iconColor)} />
              </div>
              <span className="text-[11px] font-medium text-slate-600 leading-tight text-center">
                {action.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
