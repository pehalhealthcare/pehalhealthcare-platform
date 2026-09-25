// src/pages/public/components/Main.tsx
// Hero / Main section of PehalHealthcare landing page matching IMAGE 2 with refined spacing & animated scroll.

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Shield,
  User,
  Stethoscope,
  Building2,
  Play,
  ChevronDown,
  CheckCircle2,
  X,
} from 'lucide-react';

// SVG assets from images folder
import dashboardSvg from '@/assets/images/pehalhealthcare_dashboard.svg';
import phoneSvg from '@/assets/images/pehalhealthcare_emr_phone.svg';

// SVG assets from icons folder
import secureEmrVaultIcon from '@/assets/icons/secure_emr_vault_icon.svg';
import smartAppointmentsIcon from '@/assets/icons/smart_appointments_icon.svg';
import digitalPrescriptionsIcon from '@/assets/icons/digital_prescriptions_icon.svg';
import teleConsultationsIcon from '@/assets/icons/tele_consultations_icon.svg';
import healthAnalyticsIcon from '@/assets/icons/health_analytics_icon.svg';
import isoIcon from '@/assets/icons/iso_icon.svg';
import hipaaIcon from '@/assets/icons/hipaa_icon_transparent.svg';
import secureCloudIcon from '@/assets/icons/secure_cloud_icon.svg';

export default function Main() {
  const navigate = useNavigate();
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const handleScrollDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const nextSection = document.getElementById('features');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white pt-6 pb-12 lg:pt-10 lg:pb-14 min-h-[calc(100vh-80px)] flex flex-col justify-between">
      {/* ── Background Organic Blob Shape (Behind Visual on Right) ────── */}
      <div className="absolute right-0 top-0 w-full lg:w-[58%] h-full pointer-events-none z-[1] overflow-hidden">
        <svg
          viewBox="0 0 900 800"
          className="w-full h-full object-cover opacity-80 translate-x-8 lg:translate-x-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 280 0 C 140 160, 40 300, 90 480 C 140 660, 30 760, 0 800 L 900 800 L 900 0 Z"
            fill="#EDF5FF"
          />
        </svg>
      </div>

      {/* ── Main Two-Column Hero Container ────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full relative z-[2] my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* ── Left Column (approx 48% width on desktop) ─────────────── */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            {/* 1. Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#1877F2] text-[13px] font-semibold w-fit mb-5 sm:mb-6 shadow-xs">
              <Shield className="w-4 h-4 text-[#1877F2] shrink-0" />
              <span>One Platform. Complete Healthcare.</span>
            </div>

            {/* 2. Main Headline (with 24–28px spacing below) */}
            <h1 className="text-4xl sm:text-5xl lg:text-[48px] xl:text-[54px] font-black text-[#0f172a] tracking-tight leading-[1.08] mb-6 sm:mb-7">
              India’s Integrated <br />
              <span className="text-[#1877F2]">Healthcare Technology</span> <br />
              Platform
            </h1>

            {/* 3. Subtitle / Paragraph (with 32–40px spacing below) */}
            <p className="text-[15px] sm:text-base lg:text-[17px] text-slate-600 leading-relaxed max-w-xl font-normal mb-8 sm:mb-9 lg:mb-10">
              A secure digital ecosystem for Patients, Doctors and Businesses to manage EMR, appointments, prescriptions, diagnostics and more – all in one place.
            </p>

            {/* 4. 5 Feature Highlight Icons (with 28–36px spacing below) */}
            <div className="grid grid-cols-5 gap-2 sm:gap-3 max-w-xl mb-8 sm:mb-9">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img
                    src={secureEmrVaultIcon}
                    alt="Secure EMR Vault"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[11px] sm:text-[12px] font-semibold text-slate-800 leading-tight mt-2 sm:mt-2.5">
                  Secure EMR <br /> Vault
                </span>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img
                    src={smartAppointmentsIcon}
                    alt="Smart Appointments"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[11px] sm:text-[12px] font-semibold text-slate-800 leading-tight mt-2 sm:mt-2.5">
                  Smart <br /> Appointments
                </span>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img
                    src={digitalPrescriptionsIcon}
                    alt="Digital Prescriptions"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[11px] sm:text-[12px] font-semibold text-slate-800 leading-tight mt-2 sm:mt-2.5">
                  Digital <br /> Prescriptions
                </span>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img
                    src={teleConsultationsIcon}
                    alt="Tele Consultations"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[11px] sm:text-[12px] font-semibold text-slate-800 leading-tight mt-2 sm:mt-2.5">
                  Tele <br /> Consultations
                </span>
              </div>

              {/* Feature 5 */}
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img
                    src={healthAnalyticsIcon}
                    alt="Health Analytics"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[11px] sm:text-[12px] font-semibold text-slate-800 leading-tight mt-2 sm:mt-2.5">
                  Health <br /> Analytics
                </span>
              </div>
            </div>

            {/* 5. 4 Action / CTA Registration Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2.5 max-w-[620px]">
              {/* Button 1: Register as Patient */}
              <button
                type="button"
                onClick={() => navigate('/register')}
                className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-[#1877F2] hover:bg-[#1466D2] text-white shadow-sm transition-all text-left group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-[12px] sm:text-[13px] font-bold block leading-snug">
                    Register as Patient
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-blue-100 block font-normal leading-tight">
                    Manage your health
                  </span>
                </div>
              </button>

              {/* Button 2: Register as Doctor */}
              <button
                type="button"
                onClick={() => navigate('/register')}
                className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-[#00A86B] hover:bg-[#00945e] text-white shadow-sm transition-all text-left group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <Stethoscope className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-[12px] sm:text-[13px] font-bold block leading-snug">
                    Register as Doctor
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-emerald-100 block font-normal leading-tight">
                    Grow your practice
                  </span>
                </div>
              </button>

              {/* Button 3: Register as Business */}
              <button
                type="button"
                onClick={() => navigate('/register')}
                className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-[#6C38FF] hover:bg-[#5b2de3] text-white shadow-sm transition-all text-left group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-[12px] sm:text-[13px] font-bold block leading-snug">
                    Register as Business
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-purple-100 block font-normal leading-tight">
                    Simplify healthcare
                  </span>
                </div>
              </button>

              {/* Button 4: Book Demo */}
              <button
                type="button"
                onClick={() => setDemoModalOpen(true)}
                className="flex items-center justify-center gap-2 p-2.5 sm:p-3 rounded-xl bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-900 shadow-xs transition-all text-left group cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                  <Play className="w-3.5 h-3.5 text-[#1877F2] fill-[#1877F2] ml-0.5" />
                </div>
                <div className="text-[12px] sm:text-[13px] font-bold leading-tight">
                  Book <br /> Demo
                </div>
              </button>
            </div>

            {/* 6. Trust Statement & Certifications (with 36–48px spacing above) */}
            <div className="mt-9 sm:mt-11 space-y-3">
              <p className="text-[12px] sm:text-[13px] font-medium text-slate-700">
                Trusted by 25,000+ Doctors, 100,000+ Patients and 500+ Healthcare Businesses
              </p>

              <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                {/* ISO 27001 */}
                <div className="flex items-center gap-2">
                  <img
                    src={isoIcon}
                    alt="ISO 27001 Certified"
                    className="h-7 sm:h-8 w-auto object-contain"
                  />
                  <div>
                    <span className="text-[12px] font-bold text-slate-900 block leading-tight">
                      27001
                    </span>
                    <span className="text-[10px] text-slate-500 block leading-tight">
                      Certified
                    </span>
                  </div>
                </div>

                {/* HIPAA Compliant */}
                <div className="flex items-center gap-2">
                  <img
                    src={hipaaIcon}
                    alt="HIPAA Compliant"
                    className="h-7 sm:h-8 w-auto object-contain"
                  />
                  <div>
                    <span className="text-[12px] font-bold text-slate-900 block leading-tight">
                      HIPAA
                    </span>
                    <span className="text-[10px] text-slate-500 block leading-tight">
                      Compliant
                    </span>
                  </div>
                </div>

                {/* Secure Cloud */}
                <div className="flex items-center gap-2">
                  <img
                    src={secureCloudIcon}
                    alt="Secure Cloud Infrastructure"
                    className="h-7 sm:h-8 w-auto object-contain"
                  />
                  <div>
                    <span className="text-[12px] font-bold text-slate-900 block leading-tight">
                      Secure Cloud
                    </span>
                    <span className="text-[10px] text-slate-500 block leading-tight">
                      Infrastructure
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column (Product Visual Composition: approx 52% width) ─ */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[580px] lg:max-w-[620px] xl:max-w-[650px] pt-4 pb-6 pr-2 sm:pr-6">
              {/* Primary Visual: Dashboard SVG */}
              <div className="relative z-[2] w-[88%] sm:w-[86%] rounded-2xl overflow-hidden shadow-[0_12px_40px_-6px_rgba(24,119,242,0.12),0_8px_24px_-4px_rgba(0,0,0,0.06)] border border-slate-200/80 bg-white">
                <img
                  src={dashboardSvg}
                  alt="PehalHealthcare Platform Dashboard"
                  className="w-full h-auto block"
                />
              </div>

              {/* Secondary Overlapping Visual: Phone SVG */}
              <div className="absolute right-0 top-1/2 -translate-y-[48%] w-[33%] sm:w-[32%] max-w-[215px] z-[3] drop-shadow-[-10px_16px_28px_rgba(0,0,0,0.16)] transition-transform duration-300 hover:scale-[1.03]">
                <img
                  src={phoneSvg}
                  alt="PehalHealthcare Mobile EMR App"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Decorative Dotted Wave & Animated Scroll Down ───────── */}
      <div className="relative w-full mt-6 z-[2]">
        {/* Dotted Sine Waves Vector matching IMAGE 2 */}
        <div className="absolute inset-x-0 bottom-0 w-full h-16 pointer-events-none opacity-35 overflow-hidden">
          <svg
            viewBox="0 0 1440 80"
            className="w-full h-full object-cover"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 50 C 200 20, 400 70, 600 40 C 800 10, 1000 60, 1200 35 C 1300 22, 1380 45, 1440 40"
              stroke="#1877F2"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
            <path
              d="M 0 40 C 240 65, 480 20, 720 50 C 960 80, 1200 25, 1440 50"
              stroke="#1877F2"
              strokeWidth="1.5"
              strokeDasharray="3 5"
            />
            <path
              d="M 0 60 C 300 30, 600 65, 900 35 C 1100 15, 1300 55, 1440 45"
              stroke="#1877F2"
              strokeWidth="1"
              strokeDasharray="2 6"
            />
          </svg>
        </div>

        {/* Scroll Down Button with Automatic Pulse & Bounce Animation */}
        <div className="relative z-10 flex flex-col items-center justify-center pb-2">
          <a
            href="#ecosystem"
            onClick={handleScrollDown}
            className="group inline-flex flex-col items-center gap-1.5 text-[12px] font-semibold text-slate-500 hover:text-[#1877F2] transition-colors cursor-pointer"
          >
            <span className="ph-scroll-text-pulse select-none">Scroll Down</span>
            <div className="w-7 h-7 rounded-full border border-blue-400 text-[#1877F2] flex items-center justify-center group-hover:border-[#1877F2] group-hover:bg-blue-50 transition-all shadow-xs ph-scroll-arrow-bounce">
              <ChevronDown className="w-4 h-4" />
            </div>
          </a>
        </div>
      </div>

      {/* ── Interactive Demo Modal ──────────────────────────────────────── */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
            <button
              type="button"
              onClick={() => setDemoModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1877F2] flex items-center justify-center">
                <Play className="w-5 h-5 fill-[#1877F2]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Experience PehalHealthcare</h3>
                <p className="text-xs text-slate-500">Interactive live walkthrough</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-5 leading-relaxed">
              Explore the full features of the patient portal including EMR storage, instant teleconsultations, and family health management.
            </p>

            <div className="space-y-2.5 mb-6 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero installation required — works directly in browser</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Full sample EMR timeline, prescriptions & vitals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Doctor teleconsultation room demo</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setDemoModalOpen(false);
                  navigate('/login');
                }}
                className="flex-1 py-3 rounded-xl bg-[#1877F2] text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:bg-blue-600 transition-colors cursor-pointer"
              >
                Launch Demo Portal
              </button>
              <button
                type="button"
                onClick={() => setDemoModalOpen(false)}
                className="px-4 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
