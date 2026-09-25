// src/pages/auth/ForgotPassword.tsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, ArrowLeft } from 'lucide-react';
import { authService } from '@/lib/auth/auth';
import { isValidEmail } from '@/lib/utils/validation';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { setError('Email is required'); return; }
    if (!isValidEmail(email)) { setError('Enter a valid email address'); return; }

    setIsLoading(true);
    setError('');
    try {
      await authService.forgotPassword(email);
      setSubmitted(true);
    } catch (err: unknown) {
      const axiosError = err as { response?: { data?: { message?: string } } };
      setError(axiosError.response?.data?.message ?? 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
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
          {submitted ? (
            <div className="text-center py-4">
              <div className="mb-4 flex justify-center">
                <div className="h-14 w-14 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Mail className="h-7 w-7 text-emerald-600" />
                </div>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Check your email</h2>
              <p className="text-sm text-slate-500 mb-6">
                We've sent password reset instructions to <strong>{email}</strong>.
              </p>
              <Link to="/login" className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center justify-center gap-1">
                <ArrowLeft className="h-4 w-4" /> Back to sign in
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-slate-900">Reset password</h1>
                <p className="mt-1 text-sm text-slate-500">Enter your email and we'll send reset instructions.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <Input id="forgot-email" label="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} error={error} required placeholder="you@example.com" leftIcon={<Mail className="h-4 w-4" />} />
                <Button type="submit" fullWidth isLoading={isLoading} size="lg">Send reset link</Button>
              </form>

              <div className="mt-5 text-center">
                <Link to="/login" className="text-sm text-slate-500 hover:text-slate-700 flex items-center justify-center gap-1">
                  <ArrowLeft className="h-3.5 w-3.5" /> Back to sign in
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
