// src/features/dashboard/components/QuickActions.tsx

import { Calendar, Upload, AlertCircle, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

interface QuickAction {
  id: string;
  label: string;
  icon: React.ElementType;
  to: string;
  color: string;
  bg: string;
}

const ACTIONS: QuickAction[] = [
  { id: 'book', label: 'Book Appointment', icon: Calendar, to: '/portal/appointments/book', color: 'text-blue-700', bg: 'bg-blue-50 hover:bg-blue-100' },
  { id: 'upload', label: 'Upload Report', icon: Upload, to: '/portal/emr', color: 'text-emerald-700', bg: 'bg-emerald-50 hover:bg-emerald-100' },
  { id: 'emergency', label: 'Emergency Card', icon: AlertCircle, to: '/portal/emergency-card', color: 'text-red-700', bg: 'bg-red-50 hover:bg-red-100' },
  { id: 'tele', label: 'Teleconsult', icon: Video, to: '/portal/teleconsultation', color: 'text-violet-700', bg: 'bg-violet-50 hover:bg-violet-100' },
];

export default function QuickActions() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <h2 className="text-sm font-semibold text-slate-900 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {ACTIONS.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.id}
              to={action.to}
              className={clsx(
                'flex flex-col items-center gap-2 rounded-xl p-4 text-center transition-colors duration-150',
                action.bg,
              )}
            >
              <div className={clsx('h-9 w-9 rounded-xl flex items-center justify-center', action.bg)}>
                <Icon className={clsx('h-5 w-5', action.color)} />
              </div>
              <span className={clsx('text-xs font-semibold', action.color)}>{action.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
