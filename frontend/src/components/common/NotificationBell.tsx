// src/components/common/NotificationBell.tsx

import { Bell } from 'lucide-react';
import { clsx } from 'clsx';

interface NotificationBellProps {
  unreadCount?: number;
  onClick?: () => void;
  className?: string;
}

export default function NotificationBell({
  unreadCount = 0,
  onClick,
  className,
}: NotificationBellProps) {
  return (
    <button
      onClick={onClick}
      aria-label={`Notifications${unreadCount > 0 ? `, ${unreadCount} unread` : ''}`}
      className={clsx(
        'relative p-2 rounded-lg text-slate-500',
        'hover:bg-slate-100 hover:text-slate-700',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
        'transition-colors duration-150',
        className,
      )}
    >
      <Bell className="h-5 w-5" />
      {unreadCount > 0 && (
        <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold leading-none">
          {unreadCount > 9 ? '9+' : unreadCount}
        </span>
      )}
    </button>
  );
}
