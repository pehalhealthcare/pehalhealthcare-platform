// src/pages/public/components/HealthcareEcosystem.tsx
// Healthcare Ecosystem section connecting all stakeholders on PehalHealthcare Platform.

import { useNavigate } from 'react-router-dom';
import {
  Users,
  Stethoscope,
  Building2,
  FlaskConical,
  Pill,
  Briefcase,
  ShieldCheck,
  GraduationCap,
  ArrowRight,
  Lock,
  Cloud,
  BarChart2,
  Smartphone,
  Headphones,
} from 'lucide-react';

// Central diagram SVG asset
import ecosystemSvg from '@/assets/images/pehalhealthcare_ecosystem_transparent.svg';

export default function HealthcareEcosystem() {
  const navigate = useNavigate();

  const leftStakeholders = [
    {
      icon: Users,
      iconBg: 'bg-blue-50 text-[#1877F2]',
      title: 'Patients',
      description: 'Manage health records, book appointments, access care anytime, anywhere.',
      route: '/login',
    },
    {
      icon: Stethoscope,
      iconBg: 'bg-emerald-50 text-[#00A86B]',
      title: 'Doctors',
      description: 'Digitize practice, manage patients, prescriptions and consultations efficiently.',
      route: '/register',
    },
    {
      icon: Building2,
      iconBg: 'bg-purple-50 text-[#6C38FF]',
      title: 'Clinics & Hospitals',
      description: 'Streamline workflows, manage OPD, IPD, billing and patient records seamlessly.',
      route: '/register',
    },
    {
      icon: FlaskConical,
      iconBg: 'bg-amber-50 text-[#D97706]',
      title: 'Labs & Diagnostics',
      description: 'Integrate lab operations, reports and inventory with real-time accuracy.',
      route: '/register',
    },
  ];

  const rightStakeholders = [
    {
      icon: Pill,
      iconBg: 'bg-rose-50 text-[#E11D48]',
      title: 'Pharmacies',
      description: 'Manage medicines, inventory and e-prescriptions in real-time.',
      route: '/register',
    },
    {
      icon: Briefcase,
      iconBg: 'bg-orange-50 text-[#EA580C]',
      title: 'Corporates',
      description: 'Streamline employee health, wellness programs and compliance management.',
      route: '/register',
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-teal-50 text-[#0D9488]',
      title: 'Insurance Partners',
      description: 'Verify, process and manage claims smoothly with digital documentation.',
      route: '/register',
    },
    {
      icon: GraduationCap,
      iconBg: 'bg-blue-50 text-[#2563EB]',
      title: 'Schools & Institutions',
      description: 'Manage student health records, checkups and wellness programs.',
      route: '/register',
    },
  ];

  const bottomHighlights = [
    {
      icon: Lock,
      title: 'Secure & Compliant',
      description: 'HIPAA-style security with end-to-end encryption',
    },
    {
      icon: Cloud,
      title: 'Unified Platform',
      description: 'All stakeholders connected on one intelligent platform',
    },
    {
      icon: BarChart2,
      title: 'Real-time Insights',
      description: 'Actionable analytics for better health outcomes',
    },
    {
      icon: Smartphone,
      title: 'Access Anywhere',
      description: 'Web & mobile access anytime, anywhere',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated support for all users',
    },
  ];

  return (
    <section id="ecosystem" className="py-20 bg-white border-t border-slate-100 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* ── Section Header ────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#E8F8F0] border border-[#BDE8D2] text-[#00A86B] text-[12px] font-bold tracking-wider uppercase mb-4">
            Our Healthcare Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3.5">
            One Platform. Entire <span className="text-[#00A86B]">Healthcare Ecosystem</span>.
          </h2>
          <p className="text-[15px] sm:text-base lg:text-[17px] text-slate-600 leading-relaxed font-normal">
            PehalHealthcare Technologies connects every stakeholder in healthcare on a single, secure and intelligent platform.
          </p>
        </div>

        {/* ── 3-Column Stakeholders & Diagram Grid ──────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center mb-14">
          {/* Left Column (4 Stakeholders) */}
          <div className="lg:col-span-3 space-y-4">
            {leftStakeholders.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  onClick={() => navigate(item.route)}
                  className="bg-white border border-slate-200/90 rounded-2xl p-4.5 flex items-center justify-between gap-3 hover:shadow-md hover:border-blue-300 transition-all group cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${item.iconBg}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-[14px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[11px] sm:text-[12px] text-slate-500 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              );
            })}
          </div>

          {/* Center Column (Ecosystem Diagram Visual) */}
          <div className="lg:col-span-6 flex items-center justify-center p-2 relative">
            <img
              src={ecosystemSvg}
              alt="PehalHealthcare Technologies Connected Ecosystem"
              className="w-full max-w-[560px] h-auto object-contain transition-transform duration-300 hover:scale-[1.01]"
            />
          </div>

          {/* Right Column (4 Stakeholders) */}
          <div className="lg:col-span-3 space-y-4">
            {rightStakeholders.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  onClick={() => navigate(item.route)}
                  className="bg-white border border-slate-200/90 rounded-2xl p-4.5 flex items-center justify-between gap-3 hover:shadow-md hover:border-blue-300 transition-all group cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${item.iconBg}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-[14px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[11px] sm:text-[12px] text-slate-500 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Bottom Feature Highlights Card (5 Items) ─────────────────── */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
            {bottomHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-start gap-3 ${
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
                    <p className="text-[11px] text-slate-500 leading-snug">
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
