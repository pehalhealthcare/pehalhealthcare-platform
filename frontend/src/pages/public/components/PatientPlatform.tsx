// src/pages/public/components/PatientPlatform.tsx
// Patient Platform section of PehalHealthcare landing page matching reference design.

import { useNavigate } from 'react-router-dom';
import {
  FolderLock,
  CalendarCheck,
  Pill,
  HeartPulse,
  ShieldCheck,
  Users,
  Smartphone,
  Headphones,
  Calendar,
} from 'lucide-react';
import Button from '@/components/ui/Button';

// SVG asset from images folder
import patientDashboardSvg from '@/assets/images/pehalhealthcare_patient_dashboard.svg';

export default function PatientPlatform() {
  const navigate = useNavigate();

  const patientFeatures = [
    {
      icon: FolderLock,
      iconBg: 'bg-blue-50 text-[#1877F2]',
      title: 'Access & Store All Records',
      description: 'Securely store and access all your medical records in one place.',
    },
    {
      icon: CalendarCheck,
      iconBg: 'bg-emerald-50 text-[#00A86B]',
      title: 'Manage Appointments',
      description: 'Book, reschedule and track your appointments with ease.',
    },
    {
      icon: Pill,
      iconBg: 'bg-purple-50 text-[#8B5CF6]',
      title: 'Medicine Reminders',
      description: 'Get timely reminders for your medications and refills.',
    },
    {
      icon: HeartPulse,
      iconBg: 'bg-orange-50 text-[#EA580C]',
      title: 'Track Your Health',
      description: 'Monitor your health metrics and stay informed.',
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-teal-50 text-[#0D9488]',
      title: 'Secure & Private',
      description: 'Your data is encrypted and accessible only to you.',
    },
  ];

  const bottomPillars = [
    {
      icon: Calendar,
      title: 'Your Data, Your Control',
      description: 'You decide who can access your health information.',
    },
    {
      icon: Users,
      title: 'Share Securely',
      description: 'Share records with doctors or family with your consent.',
    },
    {
      icon: Smartphone,
      title: 'Access Anywhere',
      description: 'Access your records anytime on web or mobile.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'We are here to help you anytime you need.',
    },
    {
      icon: ShieldCheck,
      title: '100% Secure',
      description: 'Enterprise-grade security to protect your data.',
    },
  ];

  return (
    <section id="patient-platform" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* ── Main Two-Column Grid (Left Features + Right Patient Dashboard) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-16">
          {/* Left Column (Pill Badge, Heading, 5 Feature Items, CTAs) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#E8F8F0] border border-[#BDE8D2] text-[#00A86B] text-[12px] font-bold tracking-wider uppercase mb-1">
              Patient Platform
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0f172a] tracking-tight leading-[1.12]">
              Your Complete <br />
              <span className="text-[#1877F2]">Digital Health Locker</span>
            </h2>

            {/* Description */}
            <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed max-w-lg font-normal">
              Access your health records, manage appointments, get reminders and take control of your health – anytime, anywhere.
            </p>

            {/* 5 Vertical Feature Items */}
            <div className="space-y-4 pt-1">
              {patientFeatures.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${item.iconBg}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-[14px] font-bold text-slate-900 leading-tight mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-[12px] text-slate-500 leading-snug font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Button
                variant="primary"
                size="md"
                onClick={() => navigate('/register')}
                className="px-6 py-2.5 font-bold shadow-sm shadow-blue-500/25"
              >
                Register as Patient
              </Button>
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="px-6 py-2.5 rounded-lg border border-blue-400 text-sm font-semibold text-[#1877F2] hover:bg-blue-50/80 transition-colors cursor-pointer"
              >
                Explore All Features
              </button>
            </div>
          </div>

          {/* Right Column (Patient Dashboard SVG Visual) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_12px_40px_-8px_rgba(24,119,242,0.12),0_8px_24px_-4px_rgba(0,0,0,0.06)] border border-slate-200/80 bg-white">
              <img
                src={patientDashboardSvg}
                alt="PehalHealthcare Patient Portal Dashboard"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        {/* ── Bottom Feature Highlights Bar (5 Pillars) ────────────────── */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
            {bottomPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-start gap-3.5 ${
                    idx > 0 ? 'lg:pl-5 pt-4 sm:pt-0' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1877F2] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-slate-900 leading-tight mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
