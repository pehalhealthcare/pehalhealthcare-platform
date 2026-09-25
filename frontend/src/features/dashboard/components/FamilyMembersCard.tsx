// src/features/dashboard/components/FamilyMembersCard.tsx

import { Users, Plus, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { FamilyMember } from '@/types/patient';
import PatientAvatar from '@/components/common/PatientAvatar';
import EmptyState from '@/components/ui/EmptyState';
import { CardSkeleton } from '@/components/ui/Skeleton';

interface Props {
  members: FamilyMember[];
  isLoading: boolean;
}

export default function FamilyMembersCard({ members, isLoading }: Props) {
  if (isLoading) return <CardSkeleton />;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-blue-600" />
          <h2 className="text-sm font-semibold text-slate-900">Family Members</h2>
        </div>
        <Link to="/portal/family" className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-0.5">
          Manage <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {members.length === 0 ? (
        <EmptyState icon={Users} title="No family members" description="Add family members to manage their health." />
      ) : (
        <div className="space-y-2">
          {members.slice(0, 4).map((m) => (
            <div key={m.id} className="flex items-center gap-3 rounded-lg p-2 hover:bg-slate-50 transition-colors">
              <PatientAvatar firstName={m.firstName} lastName={m.lastName} imageUrl={m.profilePictureUrl} size="sm" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-slate-900 truncate">
                  {m.firstName} {m.lastName}
                </p>
                <p className="text-xs text-slate-500 capitalize">{m.relationship}</p>
              </div>
            </div>
          ))}

          {members.length < 4 && (
            <Link
              to="/portal/family"
              className="flex items-center gap-2 rounded-lg p-2 text-xs text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <Plus className="h-3.5 w-3.5" /> Add member
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
