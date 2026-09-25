// src/components/layout/PortalLayout.tsx
// Root layout for authenticated portal pages.
// Composes Sidebar + Topbar + MobileNavbar.

import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { X, Heart } from 'lucide-react';
import { clsx } from 'clsx';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import MobileNavbar from './MobileNavbar';
import { ALL_NAV_ITEMS } from '@/config/navigation';
import { useAuthStore } from '@/store/auth.store';

export default function PortalLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { logout } = useAuthStore();

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Desktop sidebar */}
      <Sidebar />

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setDrawerOpen(false)}
          />

          {/* Drawer panel */}
          <aside className="relative w-72 bg-white h-full flex flex-col shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600">
                  <Heart className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="font-bold text-slate-900">
                  Pehal<span className="text-blue-600">Health</span>
                </span>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Nav */}
            <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
              {ALL_NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setDrawerOpen(false)}
                    className={({ isActive }) =>
                      clsx(
                        'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium',
                        'transition-colors duration-150',
                        isActive
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
                      )
                    }
                  >
                    <Icon className="h-4.5 w-4.5 shrink-0" style={{ height: '18px', width: '18px' }} />
                    {item.label}
                  </NavLink>
                );
              })}
            </nav>

            {/* Logout */}
            <div className="border-t border-slate-200 p-4">
              <button
                onClick={() => { logout(); setDrawerOpen(false); }}
                className="w-full text-left text-sm text-red-600 font-medium hover:text-red-700"
              >
                Sign out
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Topbar onMenuClick={() => setDrawerOpen(true)} />

        <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
            <Outlet />
          </div>
        </main>

        <MobileNavbar />
      </div>
    </div>
  );
}
