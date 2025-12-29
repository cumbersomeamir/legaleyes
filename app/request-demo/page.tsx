'use client';

import { useState } from 'react';

export default function RequestDemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="pt-32 pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl sm:text-7xl font-serif mb-6 text-center">
            Request a Demo
          </h1>
          <p className="text-xl sm:text-2xl text-white/70 mb-12 text-center font-sans">
            See how LegalEyes can transform your legal practice.
          </p>

          {submitted ? (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <svg className="w-16 h-16 text-white mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h2 className="text-2xl font-serif mb-2">Thank You!</h2>
              <p className="text-white/70 font-sans">We'll be in touch soon to schedule your demo.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2 font-sans">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-white/20 text-white placeholder-white/40 font-sans"
                />
              </div>
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
                <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2 font-sans">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-white/20 text-white placeholder-white/40 font-sans"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2 font-sans">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-white/20 text-white placeholder-white/40 font-sans"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors font-sans"
              >
                Request Demo
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
