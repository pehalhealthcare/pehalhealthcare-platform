// src/pages/public/components/DoctorPlatform.tsx
// Doctor Platform section of PehalHealthcare landing page matching reference design.

import { useNavigate } from 'react-router-dom';
import {
  CalendarCheck,
  Users,
  FileSignature,
  Video,
  BarChart3,
  ShieldCheck,
  Cloud,
  Smartphone,
  Clock,
  TrendingUp,
  Headphones,
} from 'lucide-react';
import Button from '@/components/ui/Button';

// SVG asset from images folder
import doctorDashboardSvg from '@/assets/images/pehalhealthcare_doctor_dashboard_with_logo.svg';

export default function DoctorPlatform() {
  const navigate = useNavigate();

  const doctorFeatures = [
    {
      icon: CalendarCheck,
      iconBg: 'bg-blue-50 text-[#1877F2]',
      title: 'Smart Appointment Management',
      description: 'Manage your schedule, reduce no-shows and optimize your time.',
    },
    {
      icon: Users,
      iconBg: 'bg-emerald-50 text-[#00A86B]',
      title: 'Complete Patient Records',
      description: 'Access patient history, reports, prescriptions and notes in one place.',
    },
    {
      icon: FileSignature,
      iconBg: 'bg-purple-50 text-[#8B5CF6]',
      title: 'Digital Prescription',
      description: 'Create, send and share e-prescriptions instantly with your patients.',
    },
    {
      icon: Video,
      iconBg: 'bg-orange-50 text-[#EA580C]',
      title: 'Teleconsultation',
      description: 'Consult with patients securely from anywhere, anytime.',
    },
    {
      icon: BarChart3,
      iconBg: 'bg-teal-50 text-[#0D9488]',
      title: 'Practice Analytics',
      description: 'Track performance, revenue and patient engagement with actionable insights.',
    },
  ];

  const bottomPillars = [
    {
      icon: ShieldCheck,
      title: 'Secure & Compliant',
      description: 'Your data and patient privacy are our top priority.',
    },
    {
      icon: Cloud,
      title: 'Access Anywhere',
      description: 'Work from clinic, home or on the go.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Manage your practice from your mobile.',
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Automate tasks and focus on your patients.',
    },
    {
      icon: TrendingUp,
      title: 'Grow Your Practice',
      description: 'Better patient experience drives more growth.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'We are here to help you anytime.',
    },
  ];

  return (
    <section id="doctor-platform" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* ── Main Two-Column Grid (Left Features + Right Doctor Dashboard) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-16">
          {/* Left Column (Pill Badge, Heading, 5 Feature Items, CTAs) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#E8F8F0] border border-[#BDE8D2] text-[#00A86B] text-[12px] font-bold tracking-wider uppercase mb-1">
              Doctor Platform
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0f172a] tracking-tight leading-[1.12]">
              Digitize. Organize. <br />
              <span className="text-[#1877F2]">Grow</span>{' '}
              <span className="text-[#00A86B]">Your Practice.</span>
            </h2>

            {/* Description */}
            <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed max-w-lg font-normal">
              Everything you need to manage patients, consultations, prescriptions and follow-ups – all in one intelligent platform.
            </p>

            {/* 5 Vertical Feature Items */}
            <div className="space-y-4 pt-1">
              {doctorFeatures.map((item, idx) => {
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
                Register as Doctor
              </Button>
              <button
                type="button"
                onClick={() => {
                  const contactSec = document.getElementById('contact');
                  if (contactSec) {
                    contactSec.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/contact');
                  }
                }}
                className="px-6 py-2.5 rounded-lg border border-blue-400 text-sm font-semibold text-[#1877F2] hover:bg-blue-50/80 transition-colors cursor-pointer"
              >
                Book a Demo
              </button>
            </div>
          </div>

          {/* Right Column (Doctor Dashboard SVG Visual) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_12px_40px_-8px_rgba(24,119,242,0.12),0_8px_24px_-4px_rgba(0,0,0,0.06)] border border-slate-200/80 bg-white">
              <img
                src={doctorDashboardSvg}
                alt="PehalHealthcare Doctor Portal Dashboard"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        {/* ── Bottom Feature Highlights Bar (6 Pillars) ────────────────── */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
            {bottomPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-start gap-3.5 ${
                    idx > 0 ? 'lg:pl-4 pt-4 sm:pt-0' : ''
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
