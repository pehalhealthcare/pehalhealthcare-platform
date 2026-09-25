// src/pages/portal/LabReports.tsx
import PageHeader from '@/components/layout/PageHeader';
import EmptyState from '@/components/ui/EmptyState';
import { FlaskConical } from 'lucide-react';

export default function LabReports() {
  return (
    <div>
      <PageHeader title="Lab Reports" description="Access your diagnostic and lab test results." />
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <EmptyState icon={FlaskConical} title="No lab reports found" description="Your lab results will appear here once available." />
      </div>
    </div>
  );
}
