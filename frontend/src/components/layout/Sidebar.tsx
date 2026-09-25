// src/components/layout/Sidebar.tsx

import { NavLink } from 'react-router-dom';
import { PanelLeftClose, PanelLeftOpen, Heart, LogOut } from 'lucide-react';
import { clsx } from 'clsx';
import { NAV_ITEMS, NAV_BOTTOM_ITEMS } from '@/config/navigation';
import { useUIStore } from '@/store/ui.store';
import { useAuthStore } from '@/store/auth.store';
import PatientAvatar from '@/components/common/PatientAvatar';

export default function Sidebar() {
  const { sidebarCollapsed, toggleSidebar } = useUIStore();
  const { patient, logout } = useAuthStore();

  return (
    <aside
      className={clsx(
        'hidden md:flex flex-col h-screen sticky top-0',
        'bg-white border-r border-slate-200',
        'transition-[width] duration-300 ease-in-out overflow-hidden',
        sidebarCollapsed ? 'w-[68px]' : 'w-[240px]',
      )}
    >
      {/* Logo */}
      <div
        className={clsx(
          'flex items-center gap-2.5 px-4 py-5 border-b border-slate-100',
          sidebarCollapsed && 'justify-center px-0',
        )}
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600">
          <Heart className="h-4 w-4 text-white" />
        </div>
        {!sidebarCollapsed && (
          <span className="font-bold text-slate-900 text-base leading-tight">
            Pehal<span className="text-blue-600">Health</span>
          </span>
        )}
      </div>

      {/* Nav items */}
      <nav className="flex-1 overflow-y-auto py-4 space-y-0.5 px-2">
        {NAV_ITEMS.map((item) => (
          <SidebarLink key={item.path} item={item} collapsed={sidebarCollapsed} />
        ))}
      </nav>

      {/* Bottom items */}
      <div className="border-t border-slate-100 py-3 px-2 space-y-0.5">
        {NAV_BOTTOM_ITEMS.map((item) => (
          <SidebarLink key={item.path} item={item} collapsed={sidebarCollapsed} />
        ))}

        {/* Patient info + logout */}
        <div
          className={clsx(
            'mt-2 pt-2 border-t border-slate-100',
            sidebarCollapsed ? 'flex justify-center' : 'flex items-center gap-2 px-2 py-2',
          )}
        >
          <PatientAvatar
            firstName={patient?.firstName}
            lastName={patient?.lastName}
            imageUrl={patient?.profilePictureUrl}
            size="sm"
          />
          {!sidebarCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-slate-900 truncate">
                {patient?.firstName} {patient?.lastName}
              </p>
              <p className="text-xs text-slate-500 truncate">{patient?.email}</p>
            </div>
          )}
          {!sidebarCollapsed && (
            <button
              onClick={logout}
              title="Logout"
              className="p-1.5 rounded-md text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Collapse toggle */}
        <button
          onClick={toggleSidebar}
          title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className={clsx(
            'w-full flex items-center gap-2 px-2 py-1.5 rounded-lg',
            'text-xs text-slate-500 hover:bg-slate-100 hover:text-slate-700',
            'transition-colors duration-150',
            sidebarCollapsed && 'justify-center',
          )}
        >
          {sidebarCollapsed ? (
            <PanelLeftOpen className="h-4 w-4" />
          ) : (
            <>
              <PanelLeftClose className="h-4 w-4" />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}

// ── Internal ──────────────────────────────────────────────────────────────────

interface SidebarLinkProps {
  item: { label: string; path: string; icon: React.ElementType };
  collapsed: boolean;
}

function SidebarLink({ item, collapsed }: SidebarLinkProps) {
  const Icon = item.icon;
  return (
    <NavLink
      to={item.path}
      title={collapsed ? item.label : undefined}
      className={({ isActive }) =>
        clsx(
          'flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium',
          'transition-colors duration-150',
          collapsed && 'justify-center px-0',
          isActive
            ? 'bg-blue-50 text-blue-700'
            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
        )
      }
    >
      <Icon className="h-4.5 w-4.5 shrink-0" style={{ height: '18px', width: '18px' }} />
      {!collapsed && <span>{item.label}</span>}
    </NavLink>
  );
}
