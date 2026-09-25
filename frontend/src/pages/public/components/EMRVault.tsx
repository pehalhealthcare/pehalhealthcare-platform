// src/pages/public/components/EMRVault.tsx
// EMR Vault section of PehalHealthcare landing page matching reference design.

import {
  Lock,
  FileText,
  FlaskConical,
  Scan,
  Activity,
  Syringe,
  ShieldCheck,
  Award,
  Cloud,
  Users,
  FileCheck,
  Database,
  HeartPulse,
} from 'lucide-react';

// SVG assets from images folder
import emrDashboardSvg from '@/assets/images/pehalhealthcare_emr_dashboard.svg';

export default function EMRVault() {
  const documentCategories = [
    {
      icon: FileText,
      iconColor: 'bg-purple-50 text-[#8B5CF6]',
      title: 'Prescriptions',
      status: 'Unlimited',
    },
    {
      icon: FlaskConical,
      iconColor: 'bg-emerald-50 text-[#00A86B]',
      title: 'Lab Reports',
      status: 'Unlimited',
    },
    {
      icon: Scan,
      iconColor: 'bg-blue-50 text-[#1877F2]',
      title: 'Radiology (X-Ray)',
      status: 'Unlimited',
    },
    {
      icon: Activity,
      iconColor: 'bg-blue-50 text-[#2563EB]',
      title: 'MRI / CT Scan',
      status: 'Unlimited',
    },
    {
      icon: Syringe,
      iconColor: 'bg-sky-50 text-[#0284C7]',
      title: 'Vaccination',
      status: 'Unlimited',
    },
    {
      icon: ShieldCheck,
      iconColor: 'bg-blue-50 text-[#1D4ED8]',
      title: 'Insurance',
      status: 'Unlimited',
    },
    {
      icon: FileText,
      iconColor: 'bg-rose-50 text-[#E11D48]',
      title: 'Discharge Summary',
      status: 'Unlimited',
    },
    {
      icon: Award,
      iconColor: 'bg-purple-50 text-[#7C3AED]',
      title: 'Health Certificates',
      status: 'Unlimited',
    },
  ];

  const securityPillars = [
    {
      icon: Lock,
      title: '256-bit Encryption',
      description: 'Bank-grade security for your data',
    },
    {
      icon: Cloud,
      title: 'Secure Cloud Storage',
      description: 'Redundant and reliable cloud infrastructure',
    },
    {
      icon: Users,
      title: 'Role-Based Access',
      description: 'Granular access control for data privacy',
    },
    {
      icon: FileCheck,
      title: 'Audit Trail',
      description: 'Track who accessed and when',
    },
    {
      icon: Database,
      title: 'Data Backup',
      description: 'Automated backup & disaster recovery',
    },
    {
      icon: HeartPulse,
      title: 'HIPAA Style Compliance',
      description: 'Following global healthcare data standards',
    },
  ];

  return (
    <section id="emr" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* ── Top Grid (Left Features + Right Product Dashboard) ────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-16">
          {/* Left Column (Details, 8 Category Cards, Control Banner) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1877F2] text-[12px] font-bold tracking-wider uppercase mb-1">
              <Lock className="w-3.5 h-3.5" />
              <span>EMR VAULT</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#0f172a] tracking-tight leading-[1.12]">
              Lifetime Medical Record <br />
              Storage with <span className="text-[#00A86B]">EMR Vault</span>
            </h2>

            {/* Description */}
            <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed max-w-lg font-normal">
              Store, access and share your medical records securely anytime, anywhere. Your health history, protected for life.
            </p>

            {/* Sub-heading */}
            <div>
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight mb-3">
                Store All Your Medical Documents
              </h3>

              {/* 8 Document Category Cards (4x2 Grid) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-lg">
                {documentCategories.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200/90 rounded-2xl p-3 text-center flex flex-col items-center justify-center hover:border-blue-300 hover:shadow-xs transition-all"
                    >
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 ${item.iconColor}`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] sm:text-[12px] font-bold text-slate-900 leading-tight block mb-0.5">
                        {item.title}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium block">
                        {item.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Control Banner */}
            <div className="bg-[#E8F8F0] border border-[#BDE8D2] rounded-2xl p-3.5 flex items-center gap-3.5 max-w-lg">
              <div className="w-8 h-8 rounded-full bg-white text-[#00A86B] flex items-center justify-center shrink-0 shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[13px] font-bold text-slate-900 leading-tight">
                  Your Health Data. Your Control.
                </h4>
                <p className="text-[11px] text-slate-600 leading-tight mt-0.5">
                  You decide who can access, view or share your records.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (EMR Dashboard Visual) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_12px_40px_-8px_rgba(24,119,242,0.12),0_8px_24px_-4px_rgba(0,0,0,0.06)] border border-slate-200/80 bg-white">
              <img
                src={emrDashboardSvg}
                alt="PehalHealthcare EMR Vault Dashboard"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        {/* ── Bottom Security Section ("Built with Enterprise-Grade Security") ── */}
        <div className="bg-[#F4F7FE] border border-[#F0F5FD] rounded-2xl p-6 sm:p-8 shadow-xs">
          <h3 className="text-center text-lg sm:text-xl font-bold text-slate-900 mb-8">
            Built with Enterprise-Grade Security
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-slate-200/60">
            {securityPillars.map((item, idx) => {
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
