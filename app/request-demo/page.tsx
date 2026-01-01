'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function RequestDemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/request-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit demo request');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Request a Demo
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              See how LegalEyes can transform your legal practice. Schedule a personalized demonstration with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
              alt="Request a Demo"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-5xl font-serif mb-8">What to Expect</h2>
              <p className="text-lg text-white/70 mb-6 font-sans">
                During your demo, you&apos;ll see LegalEyes in action with real-world examples relevant to your practice. Our team will:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Show you how LegalEyes works with your specific use cases</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Answer your questions about features, security, and implementation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Discuss pricing and implementation options</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Provide a customized demonstration tailored to your needs</span>
                </li>
              </ul>
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
                  alt="Demo Experience"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&q=80"
                      alt="Success"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <svg className="w-16 h-16 text-white mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h2 className="text-3xl font-serif mb-4">Thank You!</h2>
                  <p className="text-white/70 mb-6 font-sans">
                    We&apos;ve received your demo request. Our team will contact you within 24 hours to schedule your personalized demonstration.
                  </p>
                  <p className="text-white/70 font-sans">
                    In the meantime, feel free to explore our resources and learn more about LegalEyes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <p className="text-red-400 text-sm font-sans">{error}</p>
                    </div>
                  )}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2 font-sans">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      disabled={isLoading}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-white/20 text-white placeholder-white/40 font-sans disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="John Doe"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2 font-sans">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      disabled={isLoading}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-white/20 text-white placeholder-white/40 font-sans disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="john.doe@lawfirm.com"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2 font-sans">
                      Company/Organization *
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      disabled={isLoading}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-white/20 text-white placeholder-white/40 font-sans disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Law Firm Name"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2 font-sans">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      disabled={isLoading}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-white/20 text-white placeholder-white/40 font-sans disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-white/80 mb-2 font-sans">
                      Your Role
                    </label>
                    <select
                      id="role"
                      disabled={isLoading}
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-white/20 text-white font-sans disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Select your role</option>
                      <option value="attorney">Attorney</option>
                      <option value="partner">Partner</option>
                      <option value="associate">Associate</option>
                      <option value="general-counsel">General Counsel</option>
                      <option value="in-house-counsel">In-House Counsel</option>
                      <option value="legal-operations">Legal Operations</option>
                      <option value="it-admin">IT Administrator</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2 font-sans">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      disabled={isLoading}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-white/20 text-white placeholder-white/40 font-sans disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell us about your specific needs or questions..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors font-sans disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Request Demo'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Why Schedule a Demo?</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              See how LegalEyes can address your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"
                  alt="Personalized Demo"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-3">Personalized Experience</h3>
              <p className="text-white/70 font-sans">
                See LegalEyes demonstrated with examples relevant to your practice area and use cases.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80"
                  alt="Expert Guidance"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-3">Expert Guidance</h3>
              <p className="text-white/70 font-sans">
                Get answers to your questions from our team of legal and AI experts.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80"
                  alt="Implementation Planning"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-3">Implementation Planning</h3>
              <p className="text-white/70 font-sans">
                Discuss how LegalEyes can be integrated into your existing workflows and technology stack.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
