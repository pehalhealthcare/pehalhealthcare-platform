// src/pages/public/components/TrustSecurity.tsx
// Trust & Security section of PehalHealthcare landing page matching reference design.

import { useNavigate } from 'react-router-dom';
import {
  Shield,
  ShieldCheck,
  Lock,
  Cloud,
  UserCheck,
  ClipboardList,
  Fingerprint,
  Database,
  Activity,
  Network,
  Smartphone,
  Key,
  CloudSun,
  ArrowRight,
} from 'lucide-react';
import Button from '@/components/ui/Button';

// SVG assets
import securityInfographicSvg from '@/assets/images/pehalhealthcare_security_infographic.svg';
import isoIcon from '@/assets/icons/iso_icon.svg';
import hipaaIcon from '@/assets/icons/hipaa_icon_transparent.svg';

export default function TrustSecurity() {
  const navigate = useNavigate();

  const securityCommitments = [
    {
      icon: Lock,
      iconBg: 'bg-emerald-50 text-[#00A86B]',
      title: '256-bit Encryption',
      description:
        'All data is encrypted using bank-grade 256-bit SSL/TLS encryption in transit and at rest.',
    },
    {
      icon: Cloud,
      iconBg: 'bg-blue-50 text-[#1877F2]',
      title: 'Secure Cloud Storage',
      description:
        'Data is stored on secure, redundant cloud infrastructure with automated backups and disaster recovery.',
    },
    {
      icon: UserCheck,
      iconBg: 'bg-purple-50 text-[#8B5CF6]',
      title: 'Role Based Access',
      description:
        'Granular access control ensures data is accessible only to authorized users based on roles.',
    },
    {
      icon: ClipboardList,
      iconBg: 'bg-amber-50 text-[#D97706]',
      title: 'Audit Trails',
      description:
        'Every action is tracked with detailed audit logs for transparency and accountability.',
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-teal-50 text-[#0D9488]',
      title: 'Consent Management',
      description:
        'Patient consent is captured digitally and managed securely at every step.',
    },
    {
      icon: Fingerprint,
      iconBg: 'bg-violet-50 text-[#7C3AED]',
      title: 'Multi-Factor Authentication',
      description:
        'Additional layer of security with OTP, authenticator and biometric login.',
    },
    {
      icon: Database,
      iconBg: 'bg-blue-50 text-[#1877F2]',
      title: 'Data Backup & Recovery',
      description:
        'Automated backups and instant recovery to ensure zero data loss.',
    },
    {
      icon: Activity,
      iconBg: 'bg-emerald-50 text-[#059669]',
      title: 'Continuous Monitoring & Alerts',
      description:
        '24/7 system monitoring to detect, prevent and respond to threats.',
    },
    {
      icon: Network,
      iconBg: 'bg-indigo-50 text-[#6366F1]',
      title: 'Network Security',
      description:
        'Firewalls, intrusion detection and advanced threat protection for a secure network environment.',
    },
    {
      icon: Smartphone,
      iconBg: 'bg-sky-50 text-[#0284C7]',
      title: 'Device & Session Security',
      description:
        'Secure sessions with auto logout, device tracking and suspicious activity detection.',
    },
    {
      icon: Lock,
      iconBg: 'bg-orange-50 text-[#EA580C]',
      title: 'Data Privacy',
      description:
        'We follow global data privacy standards to ensure your information remains private and confidential.',
    },
    {
      icon: Key,
      iconBg: 'bg-teal-50 text-[#0D9488]',
      title: 'Secure Access Sharing',
      description:
        'Share medical records securely with time-bound access and permissions.',
    },
  ];

  return (
    <section id="trust-security" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
        {/* ── Top Hero Two-Column (Left Headline + Right 3D Security Shield Infographic) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Headline & Intro */}
          <div className="lg:col-span-6 space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#E8F8F0] border border-[#BDE8D2] text-[#00A86B] text-[12px] font-bold tracking-wider uppercase">
              <Shield className="w-3.5 h-3.5" />
              <span>Trust & Security</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#0f172a] tracking-tight leading-[1.12]">
              Built for Healthcare. <br />
              <span className="text-[#1877F2]">Designed</span>{' '}
              <span className="text-[#00A86B]">for Trust.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-xl font-normal">
              At PehalHealthcare, security is not just a feature, it's our promise. Your data is protected with enterprise-grade security at every layer.
            </p>
          </div>

          {/* Right Security Infographic Visual */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-[620px]">
              <img
                src={securityInfographicSvg}
                alt="PehalHealthcare Enterprise Security Architecture Infographic"
                className="w-full h-auto block drop-shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* ── Middle: Our Security Commitment (12 Grid Cards) ── */}
        <div className="bg-[#F8FAFC]/80 border border-slate-200/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs">
          {/* Section Subheading */}
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Our Security Commitment
            </h3>
            <div className="w-12 h-1 bg-[#00A86B] rounded-full mx-auto mt-2.5" />
          </div>

          {/* 12 Cards Grid (6x2 on large screens, 3x4 on tablets, 1 on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
            {securityCommitments.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 rounded-xl p-4 sm:p-5 flex flex-col justify-start hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mb-3.5 group-hover:scale-105 transition-transform ${item.iconBg}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-[13.5px] font-bold text-slate-900 leading-snug mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-[11.5px] text-slate-500 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Globally Aligned, Compliant, Certified Bar ── */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Title */}
            <div className="lg:col-span-3 space-y-1.5">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug tracking-tight">
                Globally Aligned. <br />
                <span className="text-[#1877F2]">Compliant.</span>{' '}
                <span className="text-[#00A86B]">Certified.</span>
              </h3>
              <p className="text-[12px] text-slate-500 leading-relaxed">
                We adhere to international standards to ensure the highest level of security and compliance.
              </p>
            </div>

            {/* Right 5 Compliance Badges */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* ISO 27001 */}
              <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50 flex items-center gap-3">
                <img src={isoIcon} alt="ISO 27001 Certified" className="w-10 h-10 object-contain shrink-0" />
                <div>
                  <div className="text-[12px] font-bold text-slate-900 leading-tight">ISO 27001:2013</div>
                  <div className="text-[10px] text-slate-500 leading-tight mt-0.5">Information Security Management System</div>
                </div>
              </div>

              {/* HIPAA Compliant */}
              <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50 flex items-center gap-3">
                <img src={hipaaIcon} alt="HIPAA Compliant" className="w-10 h-10 object-contain shrink-0" />
                <div>
                  <div className="text-[12px] font-bold text-slate-900 leading-tight">HIPAA Compliant</div>
                  <div className="text-[10px] text-slate-500 leading-tight mt-0.5">Health Insurance Portability and Accountability Act</div>
                </div>
              </div>

              {/* SOC 2 Type II */}
              <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg border-2 border-[#00A86B] text-[#00A86B] flex flex-col items-center justify-center font-bold shrink-0 text-[9px] leading-none">
                  <span>SOC 2</span>
                  <span className="text-[7px]">TYPE II</span>
                </div>
                <div>
                  <div className="text-[12px] font-bold text-slate-900 leading-tight">SOC 2 Type II</div>
                  <div className="text-[10px] text-slate-500 leading-tight mt-0.5">Security, Availability & Confidentiality</div>
                </div>
              </div>

              {/* GDPR Compliant */}
              <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-blue-300 text-[#1877F2] flex items-center justify-center shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-slate-900 leading-tight">GDPR Compliant</div>
                  <div className="text-[10px] text-slate-500 leading-tight mt-0.5">General Data Protection Regulation</div>
                </div>
              </div>

              {/* Cloud Security Alliance */}
              <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1877F2] flex items-center justify-center shrink-0">
                  <CloudSun className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-slate-900 leading-tight">Cloud Security Alliance</div>
                  <div className="text-[10px] text-slate-500 leading-tight mt-0.5">CSA STAR Certified Cloud Security</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Banner: Your Trust. Our Responsibility. + CTA ── */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] text-[#00A86B] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[14px] font-bold text-slate-900 leading-snug">
                Your Trust. Our Responsibility.
              </div>
              <div className="text-[12px] text-slate-500 leading-snug font-normal">
                We are committed to protecting your health data with unmatched security, transparency and compliance.
              </div>
            </div>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={() => {
              const contactSec = document.getElementById('contact');
              if (contactSec) {
                contactSec.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate('/contact');
              }
            }}
            className="px-6 py-2.5 font-bold shadow-sm shadow-blue-500/25 whitespace-nowrap flex items-center gap-2"
          >
            <span>Know More About Security</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
