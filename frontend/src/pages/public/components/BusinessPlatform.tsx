// src/pages/public/components/BusinessPlatform.tsx
// Business / Corporate Platform section of PehalHealthcare landing page matching reference design.

import { useNavigate } from 'react-router-dom';
import {
  Users,
  CalendarCheck,
  ClipboardCheck,
  TrendingUp,
  ShieldCheck,
  Cloud,
  IndianRupee,
  PieChart,
  Headphones,
} from 'lucide-react';
import Button from '@/components/ui/Button';

// SVG asset from images folder
import corporateDashboardSvg from '@/assets/images/pehalhealthcare_corporate_dashboard.svg';

export default function BusinessPlatform() {
  const navigate = useNavigate();

  const businessFeatures = [
    {
      icon: Users,
      iconBg: 'bg-emerald-50 text-[#00A86B]',
      title: 'Employee Health Management',
      description: 'Maintain digital health records, track health history and ensure employee well-being.',
    },
    {
      icon: CalendarCheck,
      iconBg: 'bg-blue-50 text-[#1877F2]',
      title: 'Health Checkups & Camps',
      description: 'Organize medical checkups, vaccination drives and wellness camps effortlessly.',
    },
    {
      icon: ClipboardCheck,
      iconBg: 'bg-purple-50 text-[#8B5CF6]',
      title: 'Compliance & Documentation',
      description: 'Stay compliant with automated reports, certificates and documentation.',
    },
    {
      icon: TrendingUp,
      iconBg: 'bg-orange-50 text-[#EA580C]',
      title: 'Analytics & Insights',
      description: 'Get actionable insights to improve productivity and reduce healthcare costs.',
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-teal-50 text-[#0D9488]',
      title: 'Secure & Confidential',
      description: 'Enterprise-grade security to protect employee data and ensure privacy.',
    },
  ];

  const bottomPillars = [
    {
      icon: ShieldCheck,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and role-based access control.',
    },
    {
      icon: Cloud,
      title: 'Scalable Solutions',
      description: "Designed to scale with your organization's growth.",
    },
    {
      icon: IndianRupee,
      title: 'Cost Effective',
      description: 'Reduce healthcare costs and improve ROI.',
    },
    {
      icon: PieChart,
      title: 'Data Driven Decisions',
      description: 'Make informed decisions with real-time analytics.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated support team whenever you need.',
    },
  ];

  return (
    <section id="business-platform" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* ── Main Two-Column Grid (Left Features + Right Corporate Dashboard) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-16">
          {/* Left Column (Pill Badge, Heading, 5 Feature Items, CTAs, Trust Banner) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#E8F8F0] border border-[#BDE8D2] text-[#00A86B] text-[12px] font-bold tracking-wider uppercase mb-1">
              Business Platform
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0f172a] tracking-tight leading-[1.12]">
              Corporate Healthcare. <br />
              <span className="text-[#00A86B]">Simplified.</span>{' '}
              <span className="text-[#1877F2]">Scalable.</span>{' '}
              <span className="text-[#7C3AED]">Secure.</span>
            </h2>

            {/* Description */}
            <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed max-w-lg font-normal">
              Manage employee health, wellness programs, medical checkups and compliance – all in one intelligent platform.
            </p>

            {/* 5 Vertical Feature Items */}
            <div className="space-y-4 pt-1">
              {businessFeatures.map((item, idx) => {
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
                Register Your Organization
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

            {/* Trust Badge Banner */}
            <div className="p-3.5 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7] flex items-center gap-3.5 max-w-md">
              <div className="w-9 h-9 rounded-lg bg-[#DCFCE7] text-[#00A86B] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-slate-900">
                  Trusted by 500+ Organizations
                </div>
                <div className="text-[12px] text-slate-600 font-normal">
                  From Startups to Enterprises. All on One Platform.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Corporate Dashboard SVG Visual) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_12px_40px_-8px_rgba(24,119,242,0.12),0_8px_24px_-4px_rgba(0,0,0,0.06)] border border-slate-200/80 bg-white">
              <img
                src={corporateDashboardSvg}
                alt="PehalHealthcare Corporate Platform Dashboard"
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
