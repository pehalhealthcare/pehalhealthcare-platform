// src/pages/public/components/Footer.tsx
// Public footer for PehalHealthcare.

import { Link, useNavigate } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <>
      {/* ── CTA Banner ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#1877F2] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Ready to Take Full Control of Your Healthcare?
          </h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Join thousands of patients, doctors and hospitals managing records, prescriptions, and consultations seamlessly with PehalHealthcare.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate('/login')}
              className="w-full sm:w-auto text-base px-8 py-3.5 font-bold bg-white text-[#1877F2] hover:bg-blue-50 shadow-lg"
            >
              Sign In to Patient Portal <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/register')}
              className="w-full sm:w-auto text-base px-8 py-3.5 font-bold border-white/40 text-white hover:bg-white/10"
            >
              Create Free Account
            </Button>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer id="footer" className="bg-[#0b1120] text-slate-400 text-xs py-14 border-t border-slate-800">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand column */}
            <div className="space-y-3.5">
              <div className="flex items-center gap-3 text-white font-bold text-base">
                <svg className="w-7 h-7" viewBox="0 0 40 40" fill="none">
                  <rect x="15" y="4" width="10" height="32" rx="4" fill="#1877F2" />
                  <rect x="4" y="15" width="32" height="10" rx="4" fill="#00A86B" />
                  <rect x="15" y="15" width="10" height="10" fill="#0D5FC7" opacity="0.9" />
                </svg>
                <span>PehalHealthcare Technologies</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Transforming healthcare with integrated EMR architecture, teleconsultations, and national ABHA interoperability.
              </p>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-white font-bold text-sm mb-3.5">Solutions</h4>
              <ul className="space-y-2.5">
                <li><Link to="/login" className="hover:text-white transition-colors">Patient EMR Vault</Link></li>
                <li><Link to="/login" className="hover:text-white transition-colors">Doctor Teleconsultation</Link></li>
                <li><Link to="/login" className="hover:text-white transition-colors">Digital Prescriptions</Link></li>
                <li><Link to="/login" className="hover:text-white transition-colors">Emergency Health Card</Link></li>
                <li><Link to="/login" className="hover:text-white transition-colors">Family Health Management</Link></li>
              </ul>
            </div>

            {/* Quick Access */}
            <div>
              <h4 className="text-white font-bold text-sm mb-3.5">Account & Access</h4>
              <ul className="space-y-2.5">
                <li><Link to="/login" className="hover:text-white transition-colors">Patient Login</Link></li>
                <li><Link to="/register" className="hover:text-white transition-colors">Register as Patient</Link></li>
                <li><Link to="/register" className="hover:text-white transition-colors">Register as Doctor</Link></li>
                <li><Link to="/forgot-password" className="hover:text-white transition-colors">Reset Password</Link></li>
                <li><Link to="/verify-otp" className="hover:text-white transition-colors">OTP Verification</Link></li>
              </ul>
            </div>

            {/* Emergency Support */}
            <div>
              <h4 className="text-white font-bold text-sm mb-3.5">Emergency Support</h4>
              <p className="text-slate-400 leading-relaxed mb-3">
                In case of critical medical emergencies, please reach out to national emergency helplines immediately.
              </p>
              <div className="p-3.5 bg-rose-950/40 border border-rose-900/50 rounded-xl text-rose-300 font-bold flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                <span>National Emergency: 108 / 112</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
            <p>© {new Date().getFullYear()} PehalHealthcare Technologies Private Limited. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">HIPAA & ABHA Compliance</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
