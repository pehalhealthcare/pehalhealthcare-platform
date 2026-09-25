// src/features/dashboard/components/RecentReports.tsx

import { FileText, ChevronRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { EMRDocument } from '@/types/emr';
import { formatDate } from '@/lib/utils/date';
import { CardSkeleton } from '@/components/ui/Skeleton';
import EmptyState from '@/components/ui/EmptyState';
import Badge from '@/components/ui/Badge';

interface Props {
  documents: EMRDocument[];
  isLoading: boolean;
}

const categoryLabel: Record<string, string> = {
  lab_report: 'Lab',
  radiology: 'Radiology',
  prescription: 'Prescription',
  discharge_summary: 'Discharge',
  other: 'Document',
};

export default function RecentReports({ documents, isLoading }: Props) {
  if (isLoading) return <CardSkeleton />;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-blue-600" />
          <h2 className="text-sm font-semibold text-slate-900">Recent Reports</h2>
        </div>
        <Link to="/portal/emr" className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-0.5">
          View all <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {documents.length === 0 ? (
        <EmptyState icon={FileText} title="No reports yet" description="Your medical documents will appear here." />
      ) : (
        <div className="space-y-2">
          {documents.slice(0, 4).map((doc) => (
            <div
              key={doc.id}
              className="flex items-center gap-3 rounded-lg p-2.5 hover:bg-slate-50 transition-colors"
            >
              <div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <FileText className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-slate-900 truncate">{doc.title}</p>
                <p className="text-xs text-slate-500">{formatDate(doc.createdAt)}</p>
              </div>
              <Badge variant="primary">
                {categoryLabel[doc.category] ?? 'Document'}
              </Badge>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
