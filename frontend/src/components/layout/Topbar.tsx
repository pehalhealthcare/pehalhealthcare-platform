// src/components/layout/Topbar.tsx

import { Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NotificationBell from '@/components/common/NotificationBell';
import PatientAvatar from '@/components/common/PatientAvatar';
import { useAuthStore } from '@/store/auth.store';

interface TopbarProps {
  /** On mobile, toggle the drawer */
  onMenuClick?: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  const { patient } = useAuthStore();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-slate-200 bg-white px-4 md:px-6">
      {/* Left — hamburger (mobile) */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="md:hidden p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Right — actions */}
      <div className="flex items-center gap-1">
        <NotificationBell
          onClick={() => navigate('/portal/notifications')}
        />

        <button
          onClick={() => navigate('/portal/profile')}
          className="ml-1 rounded-lg p-1 hover:bg-slate-100 transition-colors"
          aria-label="View profile"
        >
          <PatientAvatar
            firstName={patient?.firstName}
            lastName={patient?.lastName}
            imageUrl={patient?.profilePictureUrl}
            size="sm"
          />
        </button>
      </div>
    </header>
  );
}
