// src/pages/auth/VerifyOTP.tsx

import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { authService } from '@/lib/auth/auth';
import { useAuthStore } from '@/store/auth.store';
import Button from '@/components/ui/Button';

const OTP_LENGTH = 6;

export default function VerifyOTP() {
  const navigate = useNavigate();
  const { patient, login } = useAuthStore();
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const next = [...otp];
    next[index] = value;
    setOtp(next);
    if (value && index < OTP_LENGTH - 1) inputs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpStr = otp.join('');
    if (otpStr.length < OTP_LENGTH) { setError('Please enter the complete OTP'); return; }
    if (!patient?.phone) { setError('Phone number not found. Please register again.'); return; }

    setIsLoading(true);
    setError('');
    try {
      const authResponse = await authService.verifyOtp({ phone: patient.phone, otp: otpStr });
      login(authResponse);
      navigate('/portal/dashboard');
    } catch (err: unknown) {
      const axiosError = err as { response?: { data?: { message?: string } } };
      setError(axiosError.response?.data?.message ?? 'Invalid OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    if (!patient?.phone) return;
    try {
      await authService.resendOtp(patient.phone);
    } catch { /* fail silently */ }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-200">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900">
              Pehal<span className="text-blue-600">Health</span>
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-slate-900">Verify your number</h1>
            <p className="mt-1 text-sm text-slate-500">
              Enter the {OTP_LENGTH}-digit OTP sent to your phone.
            </p>
          </div>

          {error && (
            <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center gap-2">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => { inputs.current[i] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className="h-12 w-10 text-center text-lg font-bold rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-label={`OTP digit ${i + 1}`}
                />
              ))}
            </div>

            <Button type="submit" fullWidth isLoading={isLoading} size="lg">Verify OTP</Button>
          </form>

          <p className="mt-5 text-center text-sm text-slate-500">
            Didn't receive it?{' '}
            <button onClick={handleResend} className="font-semibold text-blue-600 hover:text-blue-700">
              Resend OTP
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
