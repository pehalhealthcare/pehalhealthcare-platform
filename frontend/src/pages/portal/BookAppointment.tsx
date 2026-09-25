// src/pages/portal/BookAppointment.tsx
import PageHeader from '@/components/layout/PageHeader';
import { Calendar } from 'lucide-react';

export default function BookAppointment() {
  return (
    <div>
      <PageHeader title="Book Appointment" description="Search for doctors and schedule a consultation." />
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <p className="text-sm text-slate-500">Doctor search and appointment booking will be available once the backend API is connected.</p>
      </div>
    </div>
  );
}
