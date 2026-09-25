// src/pages/portal/Support.tsx
import PageHeader from '@/components/layout/PageHeader';
import { HelpCircle, MessageSquare, Phone, Mail } from 'lucide-react';
import Button from '@/components/ui/Button';

interface SupportOptionProps {
  icon: React.ElementType;
  title: string;
  description: string;
  actionLabel: string;
  onClick?: () => void;
}

function SupportOption({ icon: Icon, title, description, actionLabel, onClick }: SupportOptionProps) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 hover:border-blue-200 transition-colors">
      <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-blue-600" />
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-slate-900 mb-0.5">{title}</h3>
        <p className="text-xs text-slate-500 mb-3">{description}</p>
        <Button variant="outline" size="sm" onClick={onClick}>{actionLabel}</Button>
      </div>
    </div>
  );
}

export default function Support() {
  return (
    <div>
      <PageHeader title="Support" description="Get help with your account and healthcare queries." />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        <SupportOption icon={MessageSquare} title="Chat Support" description="Chat with our support team in real time." actionLabel="Start Chat" />
        <SupportOption icon={Phone} title="Call Us" description="Speak directly with a support representative." actionLabel="View number" />
        <SupportOption icon={Mail} title="Email Support" description="Send us your query and we'll respond within 24 hours." actionLabel="Send email" />
        <SupportOption icon={HelpCircle} title="Help Centre" description="Browse FAQs and guides to find quick answers." actionLabel="Browse FAQs" />
      </div>
    </div>
  );
}
