// src/features/dashboard/components/WelcomeHeader.tsx

import { useAuthStore } from '@/store/auth.store';
import { formatDate } from '@/lib/utils/date';

export default function WelcomeHeader() {
  const { patient } = useAuthStore();
  const now = new Date();
  const hour = now.getHours();
  const greeting =
    hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-slate-900">
        {greeting}, {patient?.firstName ?? 'there'} 👋
      </h1>
      <p className="mt-0.5 text-sm text-slate-500">
        Today is {formatDate(now.toISOString())} — here's your health overview.
      </p>
    </div>
  );
}
