// src/pages/public/components/Features.tsx
// Core Features section of PehalHealthcare landing page matching reference design.

import { useNavigate } from 'react-router-dom';
import {
  Shield,
  Calendar,
  FileText,
  Video,
  FlaskConical,
  BarChart2,
  ShoppingCart,
  Briefcase,
  Cpu,
  Users,
  HeartPulse,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Cloud,
  FileCheck,
  Headphones,
} from 'lucide-react';

// SVG assets from icons folder
import secureEmrVaultIcon from '@/assets/icons/secure_emr_vault_icon.svg';
import smartAppointmentsIcon from '@/assets/icons/smart_appointments_icon.svg';
import digitalPrescriptionsIcon from '@/assets/icons/digital_prescriptions_icon.svg';
import teleConsultationsIcon from '@/assets/icons/tele_consultations_icon.svg';
import healthAnalyticsIcon from '@/assets/icons/health_analytics_icon.svg';

export default function Features() {
  const navigate = useNavigate();

  const coreFeatures = [
    // Row 1
    {
      svgIcon: secureEmrVaultIcon,
      icon: Shield,
      iconColor: 'bg-blue-50 text-[#1877F2]',
      title: 'Secure EMR Vault',
      description: 'Store, access and share medical records securely in encrypted digital vault.',
      route: '/login',
    },
    {
      svgIcon: smartAppointmentsIcon,
      icon: Calendar,
      iconColor: 'bg-emerald-50 text-[#00A86B]',
      title: 'Appointment Management',
      description: 'Book, manage and track appointments effortlessly for patients and providers.',
      route: '/login',
    },
    {
      svgIcon: digitalPrescriptionsIcon,
      icon: FileText,
      iconColor: 'bg-purple-50 text-[#8B5CF6]',
      title: 'Digital Prescription',
      description: 'Create, send and manage e-prescriptions with digital signature.',
      route: '/login',
    },
    {
      svgIcon: teleConsultationsIcon,
      icon: Video,
      iconColor: 'bg-rose-50 text-[#F43F5E]',
      title: 'Teleconsultation',
      description: 'Connect with patients anytime, anywhere through secure video consultations.',
      route: '/login',
    },

    // Row 2
    {
      icon: FlaskConical,
      iconColor: 'bg-amber-50 text-[#D97706]',
      title: 'Lab Integration',
      description: 'Integrate with labs to automate reports and improve accuracy.',
      route: '/login',
    },
    {
      svgIcon: healthAnalyticsIcon,
      icon: BarChart2,
      iconColor: 'bg-teal-50 text-[#0D9488]',
      title: 'Health Analytics',
      description: 'Actionable insights and dashboards to track health trends and performance.',
      route: '/login',
    },
    {
      icon: ShoppingCart,
      iconColor: 'bg-blue-50 text-[#2563EB]',
      title: 'Medical Marketplace',
      description: 'Buy medicines, book tests and access healthcare products.',
      route: '/login',
    },
    {
      icon: Briefcase,
      iconColor: 'bg-emerald-50 text-[#059669]',
      title: 'Corporate Wellness',
      description: 'Manage employee health, wellness programs and corporate checkups.',
      route: '/register',
    },

    // Row 3
    {
      icon: Cpu,
      iconColor: 'bg-purple-50 text-[#7C3AED]',
      title: 'AI Health Assistant',
      description: 'AI-powered assistant to help with symptoms, reports and health guidance.',
      route: '/login',
    },
    {
      icon: Users,
      iconColor: 'bg-rose-50 text-[#E11D48]',
      title: 'Family Health Management',
      description: "Manage your entire family's health records in one place.",
      route: '/login',
    },
    {
      icon: HeartPulse,
      iconColor: 'bg-red-50 text-[#DC2626]',
      title: 'Emergency Health Card',
      description: 'Instant access to critical health information during emergencies.',
      route: '/login',
    },
    {
      icon: ShieldCheck,
      iconColor: 'bg-blue-50 text-[#1D4ED8]',
      title: 'Insurance Management',
      description: 'Store policies, manage claims and track insurance documents.',
      route: '/login',
    },
  ];

  const bottomPillars = [
    {
      icon: CheckCircle2,
      iconBg: 'bg-emerald-50 text-[#00A86B]',
      title: '100% Secure',
      description: 'Bank-grade encryption & advanced security protocols',
    },
    {
      icon: Cloud,
      iconBg: 'bg-blue-50 text-[#1877F2]',
      title: 'Cloud Based',
      description: 'Access your data securely from anywhere, anytime',
    },
    {
      icon: Users,
      iconBg: 'bg-purple-50 text-[#7C3AED]',
      title: 'Role Based Access',
      description: 'Granular access control for complete data privacy',
    },
    {
      icon: FileCheck,
      iconBg: 'bg-amber-50 text-[#D97706]',
      title: 'Audit Trail',
      description: 'Track every activity with detailed audit logs',
    },
    {
      icon: Headphones,
      iconBg: 'bg-teal-50 text-[#0D9488]',
      title: '24/7 Support',
      description: 'Dedicated support team always here for you',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* ── Section Header ────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#E8F8F0] border border-[#BDE8D2] text-[#00A86B] text-[12px] font-bold tracking-wider uppercase mb-4">
            Core Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3.5">
            Everything Healthcare Needs. <span className="text-[#1877F2]">In One Platform.</span>
          </h2>
          <p className="text-[15px] sm:text-base lg:text-[17px] text-slate-600 leading-relaxed font-normal">
            PehalHealthcare Technologies offers a comprehensive suite of tools to simplify healthcare workflows and improve outcomes.
          </p>
        </div>

        {/* ── 12 Core Feature Cards Grid (4 Columns × 3 Rows) ───────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {coreFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => navigate(item.route)}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 hover:shadow-lg hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {item.svgIcon ? (
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center p-1 group-hover:scale-105 transition-transform">
                        <img
                          src={item.svgIcon}
                          alt={item.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.iconColor} group-hover:scale-105 transition-transform`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-[15px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-end">
                  <div className="w-7 h-7 rounded-full bg-slate-50 group-hover:bg-blue-50 border border-slate-200/60 group-hover:border-blue-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-all">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom Feature Highlights Card (5 Security/Platform Pillars) ── */}
        <div className="bg-[#F4F7FE] border border-[#F0F5FD] rounded-2xl p-5 sm:p-6 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-[#F0F5FD]">
            {bottomPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-start gap-3.5 ${
                    idx > 0 ? 'lg:pl-5 pt-4 sm:pt-0' : ''
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${item.iconBg}`}
                  >
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
