// src/pages/portal/Radiology.tsx
import PageHeader from '@/components/layout/PageHeader';
import EmptyState from '@/components/ui/EmptyState';
import { Scan } from 'lucide-react';

export default function Radiology() {
  return (
    <div>
      <PageHeader title="Radiology" description="View your X-rays, MRI, CT scan, and other imaging reports." />
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <EmptyState icon={Scan} title="No radiology reports" description="Your imaging reports will appear here." />
      </div>
    </div>
  );
}
