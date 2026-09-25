// src/pages/portal/EmergencyCard.tsx
import PageHeader from '@/components/layout/PageHeader';
import { AlertCircle, Heart, Phone } from 'lucide-react';
import { useAuthStore } from '@/store/auth.store';
import Badge from '@/components/ui/Badge';

export default function EmergencyCard() {
  const { patient } = useAuthStore();

  return (
    <div>
      <PageHeader title="Emergency Card" description="Your critical health information for emergencies." />

      <div className="bg-white rounded-xl border border-red-200 p-6 max-w-md">
        {/* Card header */}
        <div className="flex items-center gap-2 mb-5">
          <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
            <AlertCircle className="h-4.5 w-4.5 text-red-600" style={{ height: '18px', width: '18px' }} />
          </div>
          <span className="font-bold text-red-700 text-sm">Emergency Medical Card</span>
        </div>

        {/* Patient info */}
        <div className="space-y-3">
          <div>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Patient Name</p>
            <p className="text-base font-bold text-slate-900">
              {patient ? `${patient.firstName} ${patient.lastName}` : '—'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Blood Group</p>
              <p className="text-sm font-bold text-red-600">{patient?.bloodGroup ?? 'Not set'}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Gender</p>
              <p className="text-sm font-semibold text-slate-900 capitalize">{patient?.gender ?? '—'}</p>
            </div>
          </div>

          <div>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">Emergency Contact</p>
            {patient?.emergencyContact ? (
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-slate-400" />
                <span className="text-sm text-slate-900">{patient.emergencyContact.name} — {patient.emergencyContact.phone}</span>
              </div>
            ) : (
              <span className="text-sm text-slate-400">Not set — add in your profile</span>
            )}
          </div>
        </div>

        <p className="mt-5 text-xs text-slate-400">
          Complete your emergency card by updating your profile. Medical conditions, allergies and medications will be displayed once backend integration is complete.
        </p>
      </div>
    </div>
  );
}
