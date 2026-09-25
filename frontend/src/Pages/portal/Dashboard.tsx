// src/pages/portal/Dashboard.tsx

import { AlertTriangle } from 'lucide-react';
import { useDashboardSummary } from '@/features/dashboard/dashboard.hooks';
import WelcomeHeader from '@/features/dashboard/components/WelcomeHeader';
import UpcomingAppointment from '@/features/dashboard/components/UpcomingAppointment';
import RecentReports from '@/features/dashboard/components/RecentReports';
import HealthScoreCard from '@/features/dashboard/components/HealthScoreCard';
import MedicineReminder from '@/features/dashboard/components/MedicineReminder';
import FamilyMembersCard from '@/features/dashboard/components/FamilyMembersCard';
import QuickActions from '@/features/dashboard/components/QuickActions';

export default function Dashboard() {
  const { data, isLoading, isError, error } = useDashboardSummary();

  return (
    <div>
      <WelcomeHeader />

      {/* API Error banner */}
      {isError && (
        <div className="mb-4 flex items-center gap-2 rounded-lg bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-800">
          <AlertTriangle className="h-4 w-4 shrink-0" />
          <span>
            {(error as { message?: string })?.message ?? 'Failed to load dashboard data. Some sections may be unavailable.'}
          </span>
        </div>
      )}

      {/* Quick actions */}
      <QuickActions />

      {/* Main grid */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {/* Upcoming appointment — spans 2 cols on xl */}
        <div className="xl:col-span-2">
          <UpcomingAppointment
            appointments={data?.upcomingAppointments ?? []}
            isLoading={isLoading}
          />
        </div>

        {/* Health score */}
        <HealthScoreCard
          healthScore={data?.healthScore ?? null}
          isLoading={isLoading}
        />

        {/* Recent reports */}
        <RecentReports
          documents={data?.recentDocuments ?? []}
          isLoading={isLoading}
        />

        {/* Medicine reminders */}
        <MedicineReminder
          reminders={data?.medicineReminders ?? []}
          isLoading={isLoading}
        />

        {/* Family members */}
        <FamilyMembersCard
          members={data?.familyMembers ?? []}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
