'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] pt-32">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h1 className="text-4xl font-serif mb-2">Login</h1>
          <p className="text-white/70 mb-8 font-sans">Sign in to your LegalEyes account</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2 font-sans">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-white/20 text-white placeholder-white/40 font-sans"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-2 font-sans">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-white/20 text-white placeholder-white/40 font-sans"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors font-sans"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/request-demo" className="text-white/80 hover:text-white font-medium font-sans">
              Don't have an account? Request a demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
