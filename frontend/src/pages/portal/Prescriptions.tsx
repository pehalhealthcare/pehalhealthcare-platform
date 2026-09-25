// src/pages/portal/Prescriptions.tsx
import PageHeader from '@/components/layout/PageHeader';
import EmptyState from '@/components/ui/EmptyState';
import { FileText } from 'lucide-react';

export default function Prescriptions() {
  return (
    <div>
      <PageHeader title="Prescriptions" description="View your active and past prescriptions." />
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <EmptyState icon={FileText} title="No prescriptions found" description="Your prescriptions from doctors will appear here." />
      </div>
    </div>
  );
}
