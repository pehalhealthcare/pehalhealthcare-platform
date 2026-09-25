// src/components/ui/Dropdown.tsx

import { useState, useRef, useEffect, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

export interface DropdownOption<T = string> {
  label: string;
  value: T;
  icon?: ReactNode;
  disabled?: boolean;
}

interface DropdownProps<T = string> {
  options: DropdownOption<T>[];
  value?: T;
  onChange: (value: T) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export default function Dropdown<T = string>({
  options,
  value,
  onChange,
  placeholder = 'Select…',
  label,
  disabled = false,
  className,
}: DropdownProps<T>) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className={clsx('relative', className)}>
      {label && (
        <label className="block mb-1.5 text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <button
        type="button"
        onClick={() => !disabled && setOpen((o) => !o)}
        disabled={disabled}
        className={clsx(
          'w-full flex items-center justify-between px-3 py-2 rounded-lg border text-sm',
          'bg-white transition-colors duration-150',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
          disabled
            ? 'border-slate-200 text-slate-400 cursor-not-allowed bg-slate-50'
            : 'border-slate-300 text-slate-900 hover:border-slate-400 cursor-pointer',
        )}
      >
        <span className={!selected ? 'text-slate-400' : ''}>
          {selected ? (
            <span className="flex items-center gap-2">
              {selected.icon}
              {selected.label}
            </span>
          ) : (
            placeholder
          )}
        </span>
        <ChevronDown
          className={clsx(
            'h-4 w-4 text-slate-400 transition-transform duration-200',
            open && 'rotate-180',
          )}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-30 mt-1 w-full rounded-lg border border-slate-200 bg-white shadow-lg py-1 max-h-56 overflow-y-auto"
        >
          {options.map((opt) => (
            <li
              key={String(opt.value)}
              role="option"
              aria-selected={opt.value === value}
              onClick={() => {
                if (!opt.disabled) {
                  onChange(opt.value);
                  setOpen(false);
                }
              }}
              className={clsx(
                'flex items-center gap-2 px-3 py-2 text-sm cursor-pointer',
                opt.disabled
                  ? 'text-slate-400 cursor-not-allowed'
                  : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700',
                opt.value === value && 'bg-blue-50 text-blue-700 font-medium',
              )}
            >
              {opt.icon}
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
