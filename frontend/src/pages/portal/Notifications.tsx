// src/pages/portal/Notifications.tsx
import PageHeader from '@/components/layout/PageHeader';
import EmptyState from '@/components/ui/EmptyState';
import { Bell } from 'lucide-react';

export default function Notifications() {
  return (
    <div>
      <PageHeader title="Notifications" description="Stay up to date with your health updates and reminders." />
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <EmptyState icon={Bell} title="No notifications" description="You're all caught up! New notifications will appear here." />
      </div>
    </div>
  );
}
