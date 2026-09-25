// src/components/layout/PortalLayout.tsx

import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { X, Plus } from 'lucide-react';
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
    <div className="flex h-screen bg-[#f5f7fb] overflow-hidden">
      {/* Desktop sidebar */}
      <Sidebar />

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            onClick={() => setDrawerOpen(false)}
          />
          <aside className="relative w-72 bg-white h-full flex flex-col shadow-2xl">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 shadow-md shadow-blue-200">
                  <Plus className="h-4 w-4 text-white stroke-[2.5]" />
                </div>
                <div className="leading-tight">
                  <span className="block text-[14px] font-bold text-slate-900">
                    Pehal<span className="text-blue-600">Healthcare</span>
                  </span>
                  <span className="block text-[10px] text-slate-400 font-medium">Technologies</span>
                </div>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Drawer nav */}
            <nav className="flex-1 overflow-y-auto py-3 px-3 space-y-0.5">
              {ALL_NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setDrawerOpen(false)}
                    className={({ isActive }) =>
                      clsx(
                        'flex items-center gap-3 rounded-lg px-2.5 py-2.5 text-[13px] font-medium',
                        'transition-colors duration-150',
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
                            'flex h-[28px] w-[28px] items-center justify-center rounded-lg shrink-0',
                            isActive ? 'bg-blue-100 text-blue-600' : 'text-slate-400',
                          )}
                        >
                          <Icon style={{ height: '15px', width: '15px' }} />
                        </span>
                        {item.label}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </nav>

            <div className="border-t border-slate-100 p-4">
              <button
                onClick={() => { logout(); setDrawerOpen(false); }}
                className="text-sm text-red-500 font-medium hover:text-red-600"
              >
                Sign out
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Topbar onMenuClick={() => setDrawerOpen(true)} />

        <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-5">
            <Outlet />
          </div>
        </main>

        <MobileNavbar />
      </div>
    </div>
  );
}
