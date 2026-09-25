// src/pages/portal/Appointments.tsx
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmptyState from '@/components/ui/EmptyState';

export default function Appointments() {
  return (
    <div>
      <PageHeader
        title="Appointments"
        description="View and manage your upcoming and past appointments."
        actions={
          <Link to="/portal/appointments/book">
            <Button variant="primary" leftIcon={<Calendar className="h-4 w-4" />}>
              Book Appointment
            </Button>
          </Link>
        }
      />
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <EmptyState
          icon={Calendar}
          title="No appointments found"
          description="Book your first appointment with a specialist."
          actionLabel="Book now"
          onAction={() => { window.location.href = '/portal/appointments/book'; }}
        />
      </div>
    </div>
  );
}
