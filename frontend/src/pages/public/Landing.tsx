// src/pages/public/Landing.tsx
// Modular Landing Page for PehalHealthcare Platform.

import Header from './components/Header';
import Main from './components/Main';
import HealthcareEcosystem from './components/HealthcareEcosystem';
import Features from './components/Features';
import EMRVault from './components/EMRVault';
import PatientPlatform from './components/PatientPlatform';
import DoctorPlatform from './components/DoctorPlatform';
import BusinessPlatform from './components/BusinessPlatform';
import TrustSecurity from './components/TrustSecurity';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-100 selection:text-blue-900 font-sans">
      {/* ── Top Header Navigation ─────────────────────────────────────── */}
      <Header />

      {/* ── Hero / Main Section with SVG Mockups & CTAs ───────────────── */}
      <Main />

      {/* ── Healthcare Ecosystem Section (All Stakeholders & Diagram) ─── */}
      <HealthcareEcosystem />

      {/* ── Key Feature Suite ─────────────────────────────────────────── */}
      <Features />

      {/* ── Electronic Medical Records & Security ─────────────────────── */}
      <EMRVault />

      {/* ── Patient Platform & Digital Health Locker ──────────────────── */}
      <PatientPlatform />

      {/* ── Doctor Platform & Practice Management ────────────────────── */}
      <DoctorPlatform />

      {/* ── Business Platform & Corporate Health Management ─────────── */}
      <BusinessPlatform />

      {/* ── Trust & Security Infographic & Commitments ───────────────── */}
      <TrustSecurity />

      {/* ── 3-Step How It Works Guide ─────────────────────────────────── */}
      <HowItWorks />

      {/* ── Frequently Asked Questions ────────────────────────────────── */}
      <FAQ />

      {/* ── Final Call to Action & Footer ─────────────────────────────── */}
      <Footer />
    </div>
  );
}
