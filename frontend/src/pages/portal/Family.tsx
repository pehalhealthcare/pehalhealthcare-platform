// src/pages/portal/Family.tsx
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';
import EmptyState from '@/components/ui/EmptyState';
import { Users, Plus } from 'lucide-react';

export default function Family() {
  return (
    <div>
      <PageHeader
        title="Family Members"
        description="Manage health records for your family."
        actions={<Button variant="primary" leftIcon={<Plus className="h-4 w-4" />}>Add Member</Button>}
      />
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <EmptyState icon={Users} title="No family members added" description="Add your family members to manage their health together." actionLabel="Add member" onAction={() => {}} />
      </div>
    </div>
  );
}
