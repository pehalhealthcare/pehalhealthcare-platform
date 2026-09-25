// src/pages/public/components/Header.tsx
// Top navigation bar for PehalHealthcare landing page matching reference design.

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

import pehalLogo from '../../../assets/pehal_logo.svg'

export default function Header() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    { label: 'Home', href: '/', active: true },
    {
      label: 'Solutions',
      hasDropdown: true,
      items: [
        { label: 'Patient Portal', href: '/login' },
        { label: 'Doctor EMR & Clinic', href: '/register' },
        { label: 'Hospital & Lab Management', href: '/register' },
        { label: 'Pharmacy Integration', href: '/register' },
      ],
    },
    {
      label: 'For Patients',
      hasDropdown: true,
      items: [
        { label: 'My Health Records (EMR)', href: '/login' },
        { label: 'Book Teleconsultation', href: '/login' },
        { label: 'Digital Prescriptions', href: '/login' },
        { label: 'Emergency Health Card', href: '/login' },
        { label: 'Family Health Profiles', href: '/login' },
      ],
    },
    {
      label: 'For Doctors',
      hasDropdown: true,
      items: [
        { label: 'Smart OPD & Rx Writer', href: '/register' },
        { label: 'Video Consultations', href: '/register' },
        { label: 'Patient Timeline & History', href: '/register' },
        { label: 'Practice Analytics', href: '/register' },
      ],
    },
    {
      label: 'For Businesses',
      hasDropdown: true,
      items: [
        { label: 'Hospital Information System (HIS)', href: '/register' },
        { label: 'Diagnostic Labs (LIMS)', href: '/register' },
        { label: 'Corporate Health & Wellness', href: '/register' },
        { label: 'Insurance & TPA Claims', href: '/register' },
      ],
    },
    { label: 'EMR Vault', href: '#emr' },
    {
      label: 'Resources',
      hasDropdown: true,
      items: [
        { label: 'ABHA & ABDM Guide', href: '#security' },
        { label: 'Security & Compliance', href: '#security' },
        { label: 'User Documentation', href: '#faq' },
        { label: 'Developer APIs', href: '#faq' },
      ],
    },
    { label: 'Contact Us', href: '#footer' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo matching the reference brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center">
            {/* Pehal Cross Emblem: Blue vertical with Green horizontal/overlap */}
          <img 
            src={pehalLogo} 
            alt="pehalLogo"
            className="w-9 h-9 transform group-hover:scale-105 transition-transform" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[20px] font-bold tracking-tight text-[#0f172a] leading-tight">
              Pehal<span className="text-[#00A86B]">Healthcare</span>
            </span>
            <span className="text-[11px] font-medium text-slate-500 tracking-wide">
              Technologies
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-7 text-[14px] font-medium text-slate-700">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group py-2"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
            >
              {link.hasDropdown ? (
                <button
                  type="button"
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <span>{link.label}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:rotate-180" />
                </button>
              ) : (
                <a
                  href={link.href}
                  className={`relative block hover:text-blue-600 transition-colors ${
                    link.active ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {link.active && (
                    <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-blue-600 rounded-full" />
                  )}
                </a>
              )}

              {/* Dropdown Menu */}
              {link.hasDropdown && activeDropdown === link.label && (
                <div className="absolute top-full left-0 w-60 bg-white border border-slate-100 rounded-xl shadow-xl py-2 px-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {link.items?.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block px-3.5 py-2 text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 rounded-lg transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3.5">
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="px-6 py-2.5 rounded-lg border border-slate-300 text-[14px] font-semibold text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition-all shadow-xs cursor-pointer"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => navigate('/register')}
            className="px-6 py-2.5 rounded-lg bg-[#1877F2] hover:bg-[#1466D2] text-[14px] font-semibold text-white transition-all shadow-sm shadow-blue-500/25 cursor-pointer"
          >
            Register
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="xl:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <div key={link.label}>
              <a
                href={link.href || '#'}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-slate-800 hover:text-blue-600"
              >
                {link.label}
              </a>
            </div>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/login');
              }}
              className="w-full py-2.5 rounded-lg border border-slate-300 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/register');
              }}
              className="w-full py-2.5 rounded-lg bg-[#1877F2] text-sm font-semibold text-white"
            >
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
