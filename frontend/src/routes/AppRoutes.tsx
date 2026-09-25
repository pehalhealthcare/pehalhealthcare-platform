// src/routes/AppRoutes.tsx
// Central route configuration.

import { Routes, Route, Navigate } from 'react-router-dom';

// Guards
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';

// Layout
import PortalLayout from '@/components/layout/PortalLayout';

// Auth pages
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import VerifyOTP from '@/pages/auth/VerifyOTP';

// Portal pages
import Dashboard from '@/pages/portal/Dashboard';
import Appointments from '@/pages/portal/Appointments';
import BookAppointment from '@/pages/portal/BookAppointment';
import EMR from '@/pages/portal/EMR';
import Prescriptions from '@/pages/portal/Prescriptions';
import LabReports from '@/pages/portal/LabReports';
import Radiology from '@/pages/portal/Radiology';
import Teleconsultation from '@/pages/portal/Teleconsultation';
import HealthTimeline from '@/pages/portal/HealthTimeline';
import Family from '@/pages/portal/Family';
import Insurance from '@/pages/portal/Insurance';
import Payments from '@/pages/portal/Payments';
import EmergencyCard from '@/pages/portal/EmergencyCard';
import Notifications from '@/pages/portal/Notifications';
import Profile from '@/pages/portal/Profile';
import Support from '@/pages/portal/Support';

// Public Landing page
import Landing from '@/pages/public/Landing';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Landing Page (Unprotected) */}
      <Route path="/" element={<Landing />} />

      {/* Auth routes — redirect away if already logged in */}
      <Route element={<AuthRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
      </Route>

      {/* Protected portal routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/portal" element={<PortalLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="appointments/book" element={<BookAppointment />} />
          <Route path="emr" element={<EMR />} />
          <Route path="prescriptions" element={<Prescriptions />} />
          <Route path="lab-reports" element={<LabReports />} />
          <Route path="radiology" element={<Radiology />} />
          <Route path="teleconsultation/:appointmentId?" element={<Teleconsultation />} />
          <Route path="health-timeline" element={<HealthTimeline />} />
          <Route path="family" element={<Family />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="payments" element={<Payments />} />
          <Route path="emergency-card" element={<EmergencyCard />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
