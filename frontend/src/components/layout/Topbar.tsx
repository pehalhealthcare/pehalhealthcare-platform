// src/components/layout/Topbar.tsx
// Matches the PehalHealthcare portal topbar from the reference screenshot.
// On mobile shows a hamburger. On desktop it is minimal — the welcome text
// lives on the Dashboard page itself, per the reference design.

import { Menu, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NotificationBell from '@/components/common/NotificationBell';
import PatientAvatar from '@/components/common/PatientAvatar';
import { useAuthStore } from '@/store/auth.store';

interface TopbarProps {
  onMenuClick?: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  const { patient } = useAuthStore();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-20 flex h-14 items-center justify-between bg-white border-b border-slate-200/80 px-4 md:px-6 gap-3">
      {/* Left — hamburger (mobile only) */}
      <button
        onClick={onMenuClick}
        className="md:hidden p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors shrink-0"
        aria-label="Open navigation"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Centre — search bar (desktop) */}
      <div className="hidden md:flex flex-1 max-w-sm">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
          <input
            type="search"
            placeholder="Search…"
            className="w-full rounded-lg border border-slate-200 bg-slate-50 pl-8 pr-3 py-1.5 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Right — notification + avatar */}
      <div className="flex items-center gap-1 ml-auto">
        <NotificationBell onClick={() => navigate('/portal/notifications')} />

        <button
          onClick={() => navigate('/portal/profile')}
          className="flex items-center gap-2 ml-1 rounded-lg pl-1 pr-2 py-1 hover:bg-slate-100 transition-colors"
          aria-label="View profile"
        >
          <PatientAvatar
            firstName={patient?.firstName}
            lastName={patient?.lastName}
            imageUrl={patient?.profilePictureUrl}
            size="sm"
          />
          <div className="hidden sm:block text-left">
            <p className="text-[12px] font-semibold text-slate-800 leading-tight">
              {patient?.firstName} {patient?.lastName}
            </p>
            <p className="text-[10px] text-slate-400 leading-tight">Patient</p>
          </div>
        </button>
      </div>
    </header>
  );
}
