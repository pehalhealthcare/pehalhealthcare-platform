// src/routes/AuthRoute.tsx
// Redirects authenticated users away from auth pages (/login, /register, etc.)

import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@/store/auth.store';

export default function AuthRoute() {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <Navigate to="/portal/dashboard" replace />;
  }

  return <Outlet />;
}
