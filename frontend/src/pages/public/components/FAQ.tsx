// src/pages/public/components/FAQ.tsx
// Expandable FAQ accordion component.

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'Is the PehalHealthcare Patient Portal free to use?',
      a: 'Yes, basic patient registration, EMR storage, family profile linking, and digital emergency card generation are completely free for all patients. Teleconsultation fees depend on the consulting specialist.',
    },
    {
      q: 'How secure is my personal health information?',
      a: 'Your health records are protected with bank-grade 256-bit AES encryption at rest and in transit. We comply with Ayushman Bharat Digital Mission (ABDM) standards and strict medical data privacy laws.',
    },
    {
      q: 'Can I connect my government ABHA (Health ID) number?',
      a: 'Yes! PehalHealthcare seamlessly integrates with the ABHA ecosystem, enabling interoperable record exchange across participating hospitals, clinics, and diagnostic labs nationwide.',
    },
    {
      q: 'How does the Emergency Health Card work?',
      a: 'Your digital Emergency Card creates a secure, scannable QR code that allows emergency responders to view critical life-saving data (blood type, allergies, primary contacts) even when your phone is locked.',
    },
    {
      q: 'Can I manage health records for my parents and children?',
      a: 'Yes! Our Family Health module allows you to create separate sub-profiles for your family members and manage their appointments, lab reports, and medications from one place.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1877F2] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Got Questions? We Have Answers
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden transition-all shadow-xs hover:border-blue-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-90 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
