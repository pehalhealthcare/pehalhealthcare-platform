// src/config/navigation.ts
// Single source of truth for all navigation items.
// Reused by Sidebar, MobileNavbar, and any drawer component.

import {
  LayoutDashboard,
  Calendar,
  FolderOpen,
  FileText,
  FlaskConical,
  Scan,
  Video,
  Activity,
  Users,
  Shield,
  CreditCard,
  AlertCircle,
  Bell,
  User,
  HelpCircle,
  type LucideIcon,
} from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
  icon: LucideIcon;
  /** True for items in the bottom section of the sidebar */
  isBottom?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard',       path: '/portal/dashboard',        icon: LayoutDashboard },
  { label: 'Appointments',    path: '/portal/appointments',     icon: Calendar },
  { label: 'My EMR',          path: '/portal/emr',              icon: FolderOpen },
  { label: 'Prescriptions',   path: '/portal/prescriptions',    icon: FileText },
  { label: 'Lab Reports',     path: '/portal/lab-reports',      icon: FlaskConical },
  { label: 'Radiology',       path: '/portal/radiology',        icon: Scan },
  { label: 'Teleconsultation',path: '/portal/teleconsultation', icon: Video },
  { label: 'Health Timeline', path: '/portal/health-timeline',  icon: Activity },
  { label: 'Family',          path: '/portal/family',           icon: Users },
  { label: 'Insurance',       path: '/portal/insurance',        icon: Shield },
  { label: 'Payments',        path: '/portal/payments',         icon: CreditCard },
  { label: 'Emergency Card',  path: '/portal/emergency-card',   icon: AlertCircle },
];

export const NAV_BOTTOM_ITEMS: NavItem[] = [
  { label: 'Notifications',   path: '/portal/notifications',    icon: Bell,       isBottom: true },
  { label: 'Profile',         path: '/portal/profile',          icon: User,       isBottom: true },
  { label: 'Support',         path: '/portal/support',          icon: HelpCircle, isBottom: true },
];

/** All nav items flattened — used by mobile nav (shows subset) */
export const ALL_NAV_ITEMS: NavItem[] = [...NAV_ITEMS, ...NAV_BOTTOM_ITEMS];

/** Items shown in the mobile bottom navigation bar (max 5) */
export const MOBILE_NAV_ITEMS: NavItem[] = [
  NAV_ITEMS[0], // Dashboard
  NAV_ITEMS[1], // Appointments
  NAV_ITEMS[2], // My EMR
  NAV_BOTTOM_ITEMS[0], // Notifications
  NAV_BOTTOM_ITEMS[1], // Profile
];
