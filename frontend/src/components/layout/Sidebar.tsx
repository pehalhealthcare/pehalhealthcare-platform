// src/components/layout/Sidebar.tsx
// Matches the PehalHealthcare portal sidebar from the brand reference.

import { NavLink } from 'react-router-dom';
import { PanelLeftClose, PanelLeftOpen, LogOut, Plus } from 'lucide-react';
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
        'hidden md:flex flex-col h-screen sticky top-0 z-30',
        'bg-white border-r border-slate-200/80',
        'transition-[width] duration-300 ease-in-out overflow-hidden shrink-0',
        sidebarCollapsed ? 'w-[68px]' : 'w-[240px]',
      )}
    >
      {/* ── Logo ─────────────────────────────────────────────────────── */}
      <div
        className={clsx(
          'flex items-center gap-2.5 border-b border-slate-100 shrink-0',
          sidebarCollapsed ? 'h-16 justify-center px-0' : 'h-16 px-5',
        )}
      >
        {/* Cross icon — PehalHealthcare brand */}
        <div className="shrink-0 flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 shadow-md shadow-blue-200">
          <Plus className="h-5 w-5 text-white stroke-[2.5]" />
        </div>
        {!sidebarCollapsed && (
          <div className="leading-tight min-w-0">
            <span className="block text-[15px] font-bold text-slate-900 tracking-tight">
              Pehal<span className="text-blue-600">Healthcare</span>
            </span>
            <span className="block text-[10px] text-slate-400 font-medium tracking-wide">
              Technologies
            </span>
          </div>
        )}
      </div>

      {/* ── Main nav ────────────────────────────────────────────────── */}
      <nav className="flex-1 overflow-y-auto py-3 px-2.5 space-y-0.5">
        {NAV_ITEMS.map((item) => (
          <SidebarLink key={item.path} item={item} collapsed={sidebarCollapsed} />
        ))}
      </nav>

      {/* ── Bottom section ───────────────────────────────────────────── */}
      <div className="border-t border-slate-100 py-3 px-2.5 space-y-0.5 shrink-0">
        {NAV_BOTTOM_ITEMS.map((item) => (
          <SidebarLink key={item.path} item={item} collapsed={sidebarCollapsed} />
        ))}

        {/* Patient row */}
        <div
          className={clsx(
            'mt-2 pt-2 border-t border-slate-100',
            sidebarCollapsed
              ? 'flex justify-center py-2'
              : 'flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-slate-50 cursor-pointer',
          )}
        >
          <PatientAvatar
            firstName={patient?.firstName}
            lastName={patient?.lastName}
            imageUrl={patient?.profilePictureUrl}
            size="sm"
          />
          {!sidebarCollapsed && (
            <>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-semibold text-slate-900 truncate leading-tight">
                  {patient?.firstName} {patient?.lastName}
                </p>
                <p className="text-[11px] text-slate-400 truncate leading-tight">{patient?.email}</p>
              </div>
              <button
                onClick={logout}
                title="Sign out"
                className="shrink-0 p-1.5 rounded-md text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
              >
                <LogOut className="h-3.5 w-3.5" />
              </button>
            </>
          )}
        </div>

        {/* Collapse toggle */}
        <button
          onClick={toggleSidebar}
          title={sidebarCollapsed ? 'Expand' : 'Collapse sidebar'}
          className={clsx(
            'w-full flex items-center gap-2 rounded-lg px-2 py-1.5 text-[12px] font-medium',
            'text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors',
            sidebarCollapsed && 'justify-center',
          )}
        >
          {sidebarCollapsed
            ? <PanelLeftOpen className="h-4 w-4" />
            : <><PanelLeftClose className="h-4 w-4" /><span>Collapse</span></>
          }
        </button>
      </div>
    </aside>
  );
}

// ── Internal component ────────────────────────────────────────────────────────

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
          'flex items-center gap-3 rounded-lg px-2.5 py-2 text-[13px] font-medium',
          'transition-colors duration-150 whitespace-nowrap',
          collapsed && 'justify-center px-0 py-2.5',
          isActive
            ? 'bg-blue-50 text-blue-700'
            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800',
        )
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={clsx(
              'shrink-0 flex h-[30px] w-[30px] items-center justify-center rounded-lg',
              isActive ? 'bg-blue-100 text-blue-600' : 'text-slate-400',
            )}
          >
            <Icon style={{ height: '16px', width: '16px' }} />
          </span>
          {!collapsed && <span>{item.label}</span>}
        </>
      )}
    </NavLink>
  );
}
