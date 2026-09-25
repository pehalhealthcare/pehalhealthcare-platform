// src/pages/portal/Insurance.tsx
import PageHeader from '@/components/layout/PageHeader';
import EmptyState from '@/components/ui/EmptyState';
import { Shield } from 'lucide-react';

export default function Insurance() {
  return (
    <div>
      <PageHeader title="Insurance" description="View and manage your health insurance policies." />
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <EmptyState icon={Shield} title="No insurance added" description="Add your health insurance details here." />
      </div>
    </div>
  );
}
