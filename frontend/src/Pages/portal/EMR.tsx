// src/pages/portal/EMR.tsx
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';
import EmptyState from '@/components/ui/EmptyState';
import { FolderOpen, Upload } from 'lucide-react';

export default function EMR() {
  return (
    <div>
      <PageHeader
        title="My EMR"
        description="Your electronic medical records — organised, secure, shareable."
        actions={
          <Button variant="primary" leftIcon={<Upload className="h-4 w-4" />}>
            Upload Document
          </Button>
        }
      />
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <EmptyState
          icon={FolderOpen}
          title="No documents yet"
          description="Upload your medical documents to get started."
          actionLabel="Upload now"
          onAction={() => {}}
        />
      </div>
    </div>
  );
}
