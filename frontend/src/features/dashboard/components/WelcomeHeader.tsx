// src/features/dashboard/components/WelcomeHeader.tsx
// Matches the "Welcome back, Anita Verma 👋 / Here's your health overview" header
// visible at the top of the dashboard in the reference screenshot.

import { useAuthStore } from '@/store/auth.store';
import { formatDate } from '@/lib/utils/date';
import Button from '@/components/ui/Button';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WelcomeHeader() {
  const { patient } = useAuthStore();

  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="flex items-start justify-between gap-4 mb-5">
      <div>
        <h1 className="text-[22px] font-bold text-slate-900 leading-tight">
          Welcome back,{' '}
          <span className="text-blue-600">{patient?.firstName ?? 'there'}</span> 👋
        </h1>
        <p className="mt-1 text-[13px] text-slate-500">
          Here's your health overview for {formatDate(new Date().toISOString())}
        </p>
      </div>
      <Link to="/portal/appointments/book" className="hidden sm:block shrink-0">
        <Button variant="primary" size="sm" leftIcon={<Calendar className="h-3.5 w-3.5" />}>
          Book Appointment
        </Button>
      </Link>
    </div>
  );
}
