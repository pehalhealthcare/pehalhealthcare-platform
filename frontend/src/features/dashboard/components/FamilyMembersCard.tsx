// src/features/dashboard/components/FamilyMembersCard.tsx

import { Users, Plus, ChevronRight, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { FamilyMember } from '@/types/patient';
import PatientAvatar from '@/components/common/PatientAvatar';
import EmptyState from '@/components/ui/EmptyState';
import { DashboardCardSkeleton } from '@/components/ui/Skeleton';

interface Props {
  members: FamilyMember[];
  isLoading: boolean;
}

export default function FamilyMembersCard({ members, isLoading }: Props) {
  if (isLoading) return <DashboardCardSkeleton />;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-orange-50 flex items-center justify-center">
            <Users className="h-3.5 w-3.5 text-orange-500" />
          </div>
          <h2 className="text-[13px] font-semibold text-slate-900">Family Members</h2>
        </div>
        <Link
          to="/portal/family"
          className="text-[11px] text-blue-600 hover:text-blue-700 flex items-center gap-0.5 font-medium"
        >
          Manage <ChevronRight className="h-3 w-3" />
        </Link>
      </div>

      {members.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center py-4 gap-3">
          <EmptyState
            icon={Users}
            title="No family members"
            description="Add family members to manage their healthcare."
            compact
          />
          <Link
            to="/portal/family"
            className="flex items-center gap-1.5 text-[12px] font-semibold text-blue-600 border border-blue-200 rounded-lg px-3 py-1.5 hover:bg-blue-50 transition-colors"
          >
            <UserPlus className="h-3.5 w-3.5" /> Add Member
          </Link>
        </div>
      ) : (
        <div className="space-y-1 flex-1">
          {members.slice(0, 4).map((m) => (
            <div
              key={m.id}
              className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-slate-50 transition-colors"
            >
              <PatientAvatar
                firstName={m.firstName}
                lastName={m.lastName}
                imageUrl={m.profilePictureUrl}
                size="sm"
              />
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-semibold text-slate-900 truncate">
                  {m.firstName} {m.lastName}
                </p>
                <p className="text-[11px] text-slate-400 capitalize">{m.relationship}</p>
              </div>
            </div>
          ))}

          {members.length < 4 && (
            <Link
              to="/portal/family"
              className="flex items-center gap-2 rounded-lg px-2 py-2 text-[12px] text-blue-600 hover:bg-blue-50 transition-colors font-medium"
            >
              <Plus className="h-3.5 w-3.5" /> Add family member
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
