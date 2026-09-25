// src/pages/portal/HealthTimeline.tsx
import PageHeader from '@/components/layout/PageHeader';
import EmptyState from '@/components/ui/EmptyState';
import { Activity } from 'lucide-react';

export default function HealthTimeline() {
  return (
    <div>
      <PageHeader title="Health Timeline" description="A chronological view of all your health events." />
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <EmptyState icon={Activity} title="Timeline empty" description="Your health events will be shown here as they are recorded." />
      </div>
    </div>
  );
}
