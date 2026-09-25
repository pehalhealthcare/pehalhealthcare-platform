// src/components/layout/MobileNavbar.tsx

import { NavLink } from 'react-router-dom';
import { clsx } from 'clsx';
import { MOBILE_NAV_ITEMS } from '@/config/navigation';

export default function MobileNavbar() {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 flex items-stretch border-t border-slate-200 bg-white"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {MOBILE_NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              clsx(
                'flex-1 flex flex-col items-center justify-center gap-0.5 py-2',
                'text-[10px] font-medium transition-colors duration-150',
                isActive ? 'text-blue-600' : 'text-slate-400',
              )
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={clsx(
                    'rounded-lg p-1.5 transition-colors',
                    isActive ? 'bg-blue-50' : '',
                  )}
                >
                  <Icon style={{ height: '18px', width: '18px' }} />
                </div>
                <span>{item.label}</span>
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}
