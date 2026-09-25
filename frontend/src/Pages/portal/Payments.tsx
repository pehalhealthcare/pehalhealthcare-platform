// src/pages/portal/Payments.tsx
import PageHeader from '@/components/layout/PageHeader';
import EmptyState from '@/components/ui/EmptyState';
import { CreditCard } from 'lucide-react';

export default function Payments() {
  return (
    <div>
      <PageHeader title="Payments" description="View your billing history and pending payments." />
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <EmptyState icon={CreditCard} title="No payment records" description="Your billing history will appear here." />
      </div>
    </div>
  );
}
