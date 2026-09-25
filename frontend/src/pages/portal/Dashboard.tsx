// src/pages/portal/Dashboard.tsx
// Layout matches the reference screenshot: 2-col grid (appointment + health score),
// then recent reports spanning both, then medicine reminders + family members.

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
    <div className="ph-fade-in">
      {/* Welcome header */}
      <WelcomeHeader />

      {/* API error banner */}
      {isError && (
        <div className="mb-4 flex items-center gap-2 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-[12px] text-amber-800">
          <AlertTriangle className="h-4 w-4 shrink-0 text-amber-500" />
          <span>
            {(error as { message?: string })?.message ??
              'Could not load dashboard data. Sections below will update when the backend is connected.'}
          </span>
        </div>
      )}

      {/* Quick actions */}
      <QuickActions />

      {/*
        Dashboard grid — matches reference screenshot layout:
        Left col (2/3): Upcoming Appointment + Recent Reports stacked
        Right col (1/3): Health Score
        Bottom row: Medicine Reminders + Family Members
      */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* ── Left column ─────────────────────────── */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <UpcomingAppointment
            appointments={data?.upcomingAppointments ?? []}
            isLoading={isLoading}
          />
          <RecentReports
            documents={data?.recentDocuments ?? []}
            isLoading={isLoading}
          />
        </div>

        {/* ── Right column ─────────────────────────── */}
        <div className="flex flex-col gap-4">
          <HealthScoreCard
            healthScore={data?.healthScore ?? null}
            isLoading={isLoading}
          />
          <FamilyMembersCard
            members={data?.familyMembers ?? []}
            isLoading={isLoading}
          />
        </div>

      </div>

      {/* Medicine reminders — full width */}
      <div className="mt-4">
        <MedicineReminder
          reminders={data?.medicineReminders ?? []}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
