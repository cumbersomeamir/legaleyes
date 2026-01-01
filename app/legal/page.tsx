import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as genMeta } from '../lib/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = genMeta({
  title: 'Legal',
  description: 'Terms of service and legal information. Understand your rights and our obligations.',
  path: '/legal',
});

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Legal
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Terms of service and legal information. Understand your rights and our obligations.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
              alt="Legal Information"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <div className="mb-12">
              <h2 className="text-4xl font-serif mb-6">Terms of Service</h2>
              <p className="text-white/60 mb-6 font-sans">
                Last updated: December 2024
              </p>
              <p className="text-lg text-white/80 mb-8 font-sans">
                Please read these Terms of Service carefully before using LegalEyes. By accessing or using our service, you agree to be bound by these terms. If you do not agree to these terms, you may not use our service.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 mb-12">
              <h3 className="text-3xl font-serif mb-4">1. Acceptance of Terms</h3>
              <p className="text-white/80 mb-6 font-sans">
                By accessing and using LegalEyes, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-white/80 font-sans">
                These Terms of Service constitute a legally binding agreement between you and LegalEyes Corporation. Your use of the service indicates your acceptance of these terms.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 mb-12">
              <h3 className="text-3xl font-serif mb-4">2. Use License</h3>
              <p className="text-white/80 mb-6 font-sans">
                Permission is granted to temporarily use LegalEyes for personal and commercial use. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Modify or copy the materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Use the materials for any commercial purpose or for any public display</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Attempt to reverse engineer any software contained in LegalEyes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Remove any copyright or other proprietary notations from the materials</span>
                </li>
              </ul>
              <p className="text-white/80 font-sans">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by LegalEyes at any time.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 mb-12">
              <h3 className="text-3xl font-serif mb-4">3. User Account</h3>
              <p className="text-white/80 mb-6 font-sans">
                You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
              </p>
              <p className="text-white/80 mb-6 font-sans">
                You must immediately notify LegalEyes of any unauthorized use of your account or any other breach of security. LegalEyes will not be liable for any loss or damage arising from your failure to comply with this section.
              </p>
              <p className="text-white/80 font-sans">
                You may not use another person&apos;s account without permission. You may not create an account for anyone other than yourself without permission.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 mb-12">
              <h3 className="text-3xl font-serif mb-4">4. Service Availability</h3>
              <p className="text-white/80 mb-6 font-sans">
                LegalEyes strives to provide continuous availability of the service. However, we do not guarantee that the service will be available at all times. The service may be unavailable due to maintenance, updates, or circumstances beyond our control.
              </p>
              <p className="text-white/80 font-sans">
                We reserve the right to modify, suspend, or discontinue the service (or any part thereof) at any time with or without notice. You agree that LegalEyes will not be liable to you or to any third party for any modification, suspension, or discontinuance of the service.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 mb-12">
              <h3 className="text-3xl font-serif mb-4">5. Intellectual Property</h3>
              <p className="text-white/80 mb-6 font-sans">
                The service and its original content, features, and functionality are and will remain the exclusive property of LegalEyes and its licensors. The service is protected by copyright, trademark, and other laws.
              </p>
              <p className="text-white/80 font-sans">
                LegalEyes trademarks and trade dress may not be used in connection with any product or service without the prior written consent of LegalEyes.
              </p>
            </div>

            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 mb-12">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
                alt="Legal Terms"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 mb-12">
              <h3 className="text-3xl font-serif mb-4">6. Limitation of Liability</h3>
              <p className="text-white/80 mb-6 font-sans">
                In no event shall LegalEyes or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on LegalEyes&apos; website, even if LegalEyes or a LegalEyes authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              <p className="text-white/80 font-sans">
                Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-serif mb-4">7. Changes to Terms</h3>
              <p className="text-white/80 mb-6 font-sans">
                LegalEyes reserves the right, at its sole discretion, to modify or replace these Terms of Service at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p className="text-white/80 font-sans">
                What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif mb-6">
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-white/70 mb-10 font-sans">
            If you have questions about these terms, please contact our legal team.
          </p>
          <Link
            href="/request-demo"
            className="inline-block bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors text-lg font-sans"
          >
            Contact Legal Team
          </Link>
        </div>
      </section>
    </div>
  );
}
