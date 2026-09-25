// src/pages/public/components/HowItWorks.tsx
// 3-step guide for patients to start using PehalHealthcare.

import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function HowItWorks() {
  const navigate = useNavigate();

  const steps = [
    {
      step: '01',
      title: 'Create Your Account',
      desc: 'Sign up in under 60 seconds with your mobile number, and optionally link your 14-digit National ABHA Health ID.',
    },
    {
      step: '02',
      title: 'Sync Records & Consult',
      desc: 'Upload past medical records or book verified doctor consultations with instant digital prescriptions & lab orders.',
    },
    {
      step: '03',
      title: 'Continuous Care & Wellness',
      desc: 'Monitor health score trends, track family vitals, receive refill alerts, and share records with 1-click clinical consent.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1877F2] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full">
            Effortless Onboarding
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-base text-slate-600 mt-3">
            No complicated paperwork. Instant access to your clinical documents in moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((st, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200/90 rounded-2xl p-8 shadow-xs relative overflow-hidden group hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="text-5xl font-black text-blue-100 mb-4 select-none group-hover:text-blue-200 transition-colors">
                {st.step}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{st.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/register')}
            className="px-8 py-3.5 font-bold shadow-md shadow-blue-500/20"
          >
            Create Free Patient Account
          </Button>
        </div>
      </div>
    </section>
  );
}
