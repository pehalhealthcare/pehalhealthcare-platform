// src/pages/portal/Teleconsultation.tsx
import PageHeader from '@/components/layout/PageHeader';
import EmptyState from '@/components/ui/EmptyState';
import { Video } from 'lucide-react';
import { useParams } from 'react-router-dom';

export default function Teleconsultation() {
  const { appointmentId } = useParams<{ appointmentId?: string }>();

  return (
    <div>
      <PageHeader title="Teleconsultation" description={appointmentId ? `Session for appointment #${appointmentId}` : 'Join a video consultation with your doctor.'} />
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        {appointmentId ? (
          <p className="text-sm text-slate-600">Connecting to teleconsultation session… (backend integration required)</p>
        ) : (
          <EmptyState icon={Video} title="No active session" description="Your teleconsultation sessions will appear here." />
        )}
      </div>
    </div>
  );
}
