// src/pages/public/components/Footer.tsx
// Public CTA and Footer for PehalHealthcare matching reference design.

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  Cloud,
  Users,
  TrendingUp,
  Play,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import Button from '@/components/ui/Button';

// SVG assets
import doctorMobileCutoutSvg from '@/assets/images/pehalhealthcare_doctor_mobile_cutout.svg';
import pehalLogo from '@/assets/pehal_logo.svg';

export default function Footer() {
  const navigate = useNavigate();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const ctaBadges = [
    { icon: ShieldCheck, text: 'Secure & Compliant' },
    { icon: Cloud, text: 'Scalable & Reliable' },
    { icon: Users, text: 'Built for All Stakeholders' },
    { icon: TrendingUp, text: 'Better Insights, Better Decisions' },
  ];

  const solutionLinks = [
    { label: 'For Patients', href: '/login' },
    { label: 'For Doctors', href: '/register' },
    { label: 'For Businesses', href: '/register' },
    { label: 'EMR Vault', href: '#emr' },
    { label: 'Teleconsultation', href: '/login' },
    { label: 'Health Records', href: '/login' },
    { label: 'Analytics & Reports', href: '/register' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Partners', href: '#partners' },
    { label: 'Success Stories', href: '#stories' },
    { label: 'News & Updates', href: '#news' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const resourceLinks = [
    { label: 'Help Center', href: '#help' },
    { label: 'User Guides', href: '#guides' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Data Security', href: '#security' },
    { label: 'Compliance', href: '#compliance' },
    { label: 'Sitemap', href: '#sitemap' },
  ];

  return (
    <footer id="footer" className="w-full bg-white">
      {/* ── Top CTA Showcase Section ────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#F0F7FF] to-white border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              {/* Pill Badge */}
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#E8F8F0] border border-[#BDE8D2] text-[#00A86B] text-[12px] font-bold tracking-wider uppercase">
                Ready to Transform Healthcare?
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0f172a] tracking-tight leading-[1.12]">
                Let's build a healthier <br />
                tomorrow.{' '}
                <span className="text-[#1877F2]">Together.</span>
              </h2>

              {/* Description */}
              <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed max-w-xl font-normal">
                Join thousands of patients, doctors and organizations using PehalHealthcare Technologies to deliver better care, improve efficiency and drive better outcomes.
              </p>

              {/* 4 Feature Badges in 2x2 or 4x1 grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1 max-w-xl">
                {ctaBadges.map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1877F2] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[13px] font-bold text-slate-800 leading-tight">
                        {badge.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => navigate('/register')}
                  className="px-6 py-3 font-bold shadow-sm shadow-blue-500/25 flex items-center gap-2"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-4 h-4" />
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
                  className="px-6 py-3 rounded-lg border border-blue-400 text-sm font-semibold text-[#1877F2] hover:bg-blue-50/80 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Book a Demo</span>
                </button>
              </div>

              {/* Guarantee / Free Trial Subtext */}
              <div className="flex items-center gap-2 text-[13px] text-slate-600 font-medium pt-1">
                <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0" />
                <span>14-Day Free Trial • No Credit Card Required</span>
              </div>
            </div>

            {/* Right Visual (Doctor + Mobile Cutout SVG) */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[620px]">
                <img
                  src={doctorMobileCutoutSvg}
                  alt="PehalHealthcare Doctor and Mobile App Interface"
                  className="w-full h-auto block drop-shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Dark Footer ────────────────────────────────────────────── */}
      <div className="bg-[#03152B] text-slate-300 text-xs pt-16 pb-8 border-t border-slate-800/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-14">
            {/* Column 1: Brand & Contact Info (span 3.5) */}
            <div className="lg:col-span-4 space-y-4">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-9 h-9 flex items-center justify-center">
                  <img
                    src={pehalLogo}
                    alt="PehalHealthcare Logo"
                    className="w-9 h-9 object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[19px] font-bold tracking-tight text-white leading-tight">
                    Pehal<span className="text-[#00A86B]">Healthcare</span>
                  </span>
                  <span className="text-[11px] font-medium text-slate-400 tracking-wide">
                    Technologies
                  </span>
                </div>
              </Link>

              <p className="text-slate-400 text-[12.5px] leading-relaxed max-w-sm">
                Empowering healthcare for everyone with secure, intelligent and scalable digital health solutions.
              </p>

              {/* Contact Items */}
              <div className="space-y-2.5 pt-2 text-[12px] text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  <a href="tel:+919876543210" className="hover:text-white transition-colors">
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <a href="mailto:info@pehalhealthcare.com" className="hover:text-white transition-colors">
                    info@pehalhealthcare.com
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span className="leading-snug text-slate-400">
                    D-123, Sector 63, Noida, <br />
                    Uttar Pradesh - 201301, India
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2: Solutions (span 2) */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold text-sm mb-4">Solutions</h4>
              <ul className="space-y-2.5 text-[12.5px]">
                {solutionLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.href} className="text-slate-400 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company (span 2) */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold text-sm mb-4">Company</h4>
              <ul className="space-y-2.5 text-[12.5px]">
                {companyLinks.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href} className="text-slate-400 hover:text-white transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Resources (span 2) */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold text-sm mb-4">Resources</h4>
              <ul className="space-y-2.5 text-[12.5px]">
                {resourceLinks.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href} className="text-slate-400 hover:text-white transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Stay Updated & Social (span 2) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-white font-bold text-sm">Stay Updated</h4>
              <p className="text-slate-400 text-[11.5px] leading-relaxed">
                Subscribe to our newsletter for the latest updates, insights and resources.
              </p>

              {/* Newsletter Form */}
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-800/90 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-hidden focus:border-blue-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 px-3 rounded-lg bg-[#1877F2] hover:bg-blue-600 text-white font-bold text-xs transition-colors cursor-pointer"
                  >
                    {subscribed ? 'Subscribed!' : 'Subscribe'}
                  </button>
                </div>
              </form>

              {/* Follow Us */}
              <div className="pt-2">
                <div className="text-[12px] font-bold text-white mb-2.5">Follow Us</div>
                <div className="flex items-center gap-2 text-slate-400">
                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="w-8 h-8 rounded-full border border-slate-700 bg-slate-800/60 flex items-center justify-center hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-8 h-8 rounded-full border border-slate-700 bg-slate-800/60 flex items-center justify-center hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45 1.45 1.45 0 0 0-1.45-1.45 1.45 1.45 0 0 0-1.45 1.45c0 .8.65 1.45 1.45 1.45m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                    </svg>
                  </a>
                  {/* Twitter / X */}
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                    className="w-8 h-8 rounded-full border border-slate-700 bg-slate-800/60 flex items-center justify-center hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="w-8 h-8 rounded-full border border-slate-700 bg-slate-800/60 flex items-center justify-center hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-8 h-8 rounded-full border border-slate-700 bg-slate-800/60 flex items-center justify-center hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Subfooter Bottom Bar ────────────────────────────────────── */}
          <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-[11.5px]">
            <p>© 2024 PehalHealthcare Technologies Pvt. Ltd. All rights reserved.</p>
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>ISO 27001:2013 Certified</span>
              </div>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">HIPAA Compliant</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">GDPR Ready</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
