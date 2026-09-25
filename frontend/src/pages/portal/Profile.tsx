// src/pages/portal/Profile.tsx
import PageHeader from '@/components/layout/PageHeader';
import { useAuthStore } from '@/store/auth.store';
import PatientAvatar from '@/components/common/PatientAvatar';
import { formatDate } from '@/lib/utils/date';
import Button from '@/components/ui/Button';
import { Edit2 } from 'lucide-react';

function Field({ label, value }: { label: string; value?: string | null }) {
  return (
    <div>
      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-0.5">{label}</p>
      <p className="text-sm text-slate-900">{value ?? <span className="text-slate-400">Not set</span>}</p>
    </div>
  );
}

export default function Profile() {
  const { patient } = useAuthStore();

  return (
    <div>
      <PageHeader title="Profile" description="Manage your personal and medical information." actions={<Button variant="outline" leftIcon={<Edit2 className="h-4 w-4" />}>Edit Profile</Button>} />

      <div className="bg-white rounded-xl border border-slate-200 p-6 max-w-2xl">
        {/* Avatar + name */}
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
          <PatientAvatar firstName={patient?.firstName} lastName={patient?.lastName} imageUrl={patient?.profilePictureUrl} size="xl" />
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              {patient ? `${patient.firstName} ${patient.lastName}` : '—'}
            </h2>
            <p className="text-sm text-slate-500">{patient?.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Phone" value={patient?.phone} />
          <Field label="Date of Birth" value={patient?.dateOfBirth ? formatDate(patient.dateOfBirth) : null} />
          <Field label="Gender" value={patient?.gender ? patient.gender.charAt(0).toUpperCase() + patient.gender.slice(1) : null} />
          <Field label="Blood Group" value={patient?.bloodGroup} />
        </div>
      </div>
    </div>
  );
}
