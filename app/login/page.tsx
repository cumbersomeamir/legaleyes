'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section with Image */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 mb-12">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
                alt="Login to LegalEyes"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-5xl sm:text-6xl font-serif mb-4">Login</h1>
                  <p className="text-xl text-white/80 font-sans">Access your LegalEyes account</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Login Form Section */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10 order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
                alt="Secure Login"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-4xl font-serif mb-2">Sign In</h2>
                <p className="text-white/70 mb-8 font-sans">Sign in to your LegalEyes account to access your workspace</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2 font-sans">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-white/20 text-white placeholder-white/40 font-sans"
                      placeholder="your.email@lawfirm.com"
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
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 rounded border-white/20 bg-white/5 text-white focus:ring-white/20" />
                      <span className="text-sm text-white/70 font-sans">Remember me</span>
                    </label>
                    <Link href="#" className="text-sm text-white/80 hover:text-white font-sans">
                      Forgot password?
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors font-sans"
                  >
                    Sign In
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-center text-white/70 mb-4 font-sans">
                    Don&apos;t have an account?
                  </p>
                  <Link 
                    href="/request-demo" 
                    className="block w-full text-center bg-white/5 border border-white/10 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors font-sans"
                  >
                    Request a Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Secure Access</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Your account is protected with enterprise-grade security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Encrypted</h3>
              <p className="text-white/70 font-sans text-sm">
                All data encrypted in transit and at rest
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Multi-Factor Auth</h3>
              <p className="text-white/70 font-sans text-sm">
                Optional MFA for enhanced security
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">SOC 2 Certified</h3>
              <p className="text-white/70 font-sans text-sm">
                Industry-leading security standards
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
