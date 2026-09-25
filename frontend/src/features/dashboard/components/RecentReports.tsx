// src/features/dashboard/components/RecentReports.tsx
// Matches the "Recent Reports" card from the reference screenshot:
// document name, date, "View" button for each item.

import { FileText, ChevronRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { EMRDocument } from '@/types/emr';
import { formatDate } from '@/lib/utils/date';
import { DashboardCardSkeleton } from '@/components/ui/Skeleton';
import EmptyState from '@/components/ui/EmptyState';

interface Props {
  documents: EMRDocument[];
  isLoading: boolean;
}

const CATEGORY_ICONS: Record<string, { label: string; color: string; bg: string }> = {
  lab_report:        { label: 'Lab', color: 'text-blue-600', bg: 'bg-blue-50' },
  radiology:         { label: 'Radiology', color: 'text-violet-600', bg: 'bg-violet-50' },
  prescription:      { label: 'Rx', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  discharge_summary: { label: 'Discharge', color: 'text-amber-600', bg: 'bg-amber-50' },
  other:             { label: 'Doc', color: 'text-slate-600', bg: 'bg-slate-50' },
};

export default function RecentReports({ documents, isLoading }: Props) {
  if (isLoading) return <DashboardCardSkeleton />;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-blue-50 flex items-center justify-center">
            <FileText className="h-3.5 w-3.5 text-blue-600" />
          </div>
          <h2 className="text-[13px] font-semibold text-slate-900">Recent Reports</h2>
        </div>
        <Link
          to="/portal/emr"
          className="text-[11px] text-blue-600 hover:text-blue-700 flex items-center gap-0.5 font-medium"
        >
          View all <ChevronRight className="h-3 w-3" />
        </Link>
      </div>

      {documents.length === 0 ? (
        <EmptyState icon={FileText} title="No reports yet" description="Your medical documents will appear here." compact />
      ) : (
        <div className="space-y-1 flex-1">
          {documents.slice(0, 5).map((doc) => {
            const meta = CATEGORY_ICONS[doc.category] ?? CATEGORY_ICONS.other;
            return (
              <div
                key={doc.id}
                className="flex items-center gap-3 rounded-lg px-2 py-2.5 hover:bg-slate-50 transition-colors"
              >
                {/* Icon */}
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${meta.bg}`}>
                  <FileText className={`h-4 w-4 ${meta.color}`} />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-semibold text-slate-900 truncate">{doc.title}</p>
                  <p className="text-[11px] text-slate-400">{formatDate(doc.createdAt)}</p>
                </div>

                {/* View button — matches "View" link in screenshot */}
                <Link
                  to="/portal/emr"
                  className="shrink-0 text-[11px] font-semibold text-blue-600 hover:text-blue-700 px-2 py-1 rounded-md hover:bg-blue-50 transition-colors"
                >
                  View
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
