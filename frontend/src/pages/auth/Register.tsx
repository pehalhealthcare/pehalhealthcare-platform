// src/pages/auth/Register.tsx

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Mail, Lock, User, Phone } from 'lucide-react';
import { useAuthStore } from '@/store/auth.store';
import { authService } from '@/lib/auth/auth';
import { isValidEmail, isValidIndianPhone, isStrongPassword } from '@/lib/utils/validation';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other' | '';
}

export default function Register() {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    dateOfBirth: '',
    gender: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState | 'general', string>>>({});
  const [isLoading, setIsLoading] = useState(false);

  const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = (): boolean => {
    const e: typeof errors = {};
    if (!form.firstName.trim()) e.firstName = 'First name is required';
    if (!form.lastName.trim()) e.lastName = 'Last name is required';
    if (!form.email) e.email = 'Email is required';
    else if (!isValidEmail(form.email)) e.email = 'Enter a valid email';
    if (!form.phone) e.phone = 'Phone is required';
    else if (!isValidIndianPhone(form.phone)) e.phone = 'Enter a valid 10-digit phone';
    if (!form.password) e.password = 'Password is required';
    else if (!isStrongPassword(form.password)) e.password = 'Min 8 chars with uppercase, lowercase, and number';
    if (!form.dateOfBirth) e.dateOfBirth = 'Date of birth is required';
    if (!form.gender) e.gender = 'Please select a gender';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    try {
      const authResponse = await authService.register({
        ...form,
        gender: form.gender as 'male' | 'female' | 'other',
      });
      login(authResponse);
      navigate('/verify-otp');
    } catch (err: unknown) {
      const axiosError = err as { response?: { data?: { message?: string } } };
      setErrors({ general: axiosError.response?.data?.message ?? 'Registration failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 flex items-center justify-center p-4 py-10">
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
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-900">Create account</h1>
            <p className="mt-1 text-sm text-slate-500">Join the PehalHealthcare patient portal</p>
          </div>

          {errors.general && (
            <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
              {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid grid-cols-2 gap-3">
              <Input id="reg-fname" label="First name" value={form.firstName} onChange={update('firstName')} error={errors.firstName} required leftIcon={<User className="h-4 w-4" />} />
              <Input id="reg-lname" label="Last name" value={form.lastName} onChange={update('lastName')} error={errors.lastName} required />
            </div>
            <Input id="reg-email" label="Email" type="email" value={form.email} onChange={update('email')} error={errors.email} required leftIcon={<Mail className="h-4 w-4" />} placeholder="you@example.com" />
            <Input id="reg-phone" label="Phone number" type="tel" value={form.phone} onChange={update('phone')} error={errors.phone} required leftIcon={<Phone className="h-4 w-4" />} placeholder="10-digit number" />
            <Input id="reg-dob" label="Date of birth" type="date" value={form.dateOfBirth} onChange={update('dateOfBirth')} error={errors.dateOfBirth} required />

            <div className="flex flex-col gap-1.5">
              <label htmlFor="reg-gender" className="text-sm font-medium text-slate-700">
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                id="reg-gender"
                value={form.gender}
                onChange={update('gender')}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <p className="text-xs text-red-600">{errors.gender}</p>}
            </div>

            <Input id="reg-password" label="Password" type="password" value={form.password} onChange={update('password')} error={errors.password} required leftIcon={<Lock className="h-4 w-4" />} hint="Min 8 chars with uppercase, lowercase, and number" />

            <Button type="submit" fullWidth isLoading={isLoading} size="lg">Create account</Button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-700">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
