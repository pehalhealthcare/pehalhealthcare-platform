// src/components/common/PatientAvatar.tsx

import { clsx } from 'clsx';

interface PatientAvatarProps {
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeMap = {
  xs: 'h-6 w-6 text-xs',
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
  xl: 'h-16 w-16 text-lg',
};

function getInitials(firstName?: string, lastName?: string): string {
  const f = firstName?.[0]?.toUpperCase() ?? '';
  const l = lastName?.[0]?.toUpperCase() ?? '';
  return f + l || '?';
}

export default function PatientAvatar({
  firstName,
  lastName,
  imageUrl,
  size = 'md',
  className,
}: PatientAvatarProps) {
  const initials = getInitials(firstName, lastName);

  if (imageUrl) {
    return (
      <img
        src={imageUrl}
        alt={`${firstName ?? ''} ${lastName ?? ''}`.trim()}
        className={clsx(
          'rounded-full object-cover bg-slate-100 shrink-0',
          sizeMap[size],
          className,
        )}
      />
    );
  }

  return (
    <div
      className={clsx(
        'rounded-full bg-blue-100 text-blue-700 font-semibold',
        'flex items-center justify-center shrink-0 select-none',
        sizeMap[size],
        className,
      )}
      aria-label={`${firstName ?? ''} ${lastName ?? ''}`.trim()}
    >
      {initials}
    </div>
  );
}
