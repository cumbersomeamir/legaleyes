import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              How we protect and handle your data. Your privacy is our priority.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80"
              alt="Privacy Protection"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <div className="mb-12">
              <p className="text-white/60 mb-6 font-sans">
                Last updated: December 2024
              </p>
              <h2 className="text-4xl font-serif mb-6">Our Commitment to Privacy</h2>
              <p className="text-lg text-white/80 mb-8 font-sans">
                LegalEyes is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service. We understand that legal data is sensitive, and we treat it with the utmost care and respect.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 mb-12">
              <h3 className="text-3xl font-serif mb-4">Information We Collect</h3>
              <p className="text-white/80 mb-6 font-sans">
                We collect information that you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Account information (name, email address, company name)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Documents and content you upload to the platform</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Usage data and analytics information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Communication data when you contact us</span>
                </li>
              </ul>
              <p className="text-white/80 font-sans">
                We also automatically collect certain information when you use our service, including IP address, browser type, device information, and usage patterns. This information helps us improve our service and provide better support.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 mb-12">
              <h3 className="text-3xl font-serif mb-4">How We Use Your Information</h3>
              <p className="text-white/80 mb-6 font-sans">
                We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you. Specifically, we use your information to:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Provide and deliver the services you request</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Process transactions and send related information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Send technical notices, updates, and support messages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Respond to your comments and questions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Monitor and analyze usage patterns to improve our service</span>
                </li>
              </ul>
              <p className="text-white/80 font-sans">
                We do not sell your personal information to third parties. We may share information with service providers who assist us in operating our service, but only to the extent necessary to provide those services.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 mb-12">
              <h3 className="text-3xl font-serif mb-4">Data Security</h3>
              <p className="text-white/80 mb-6 font-sans">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Encryption of data in transit and at rest</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Regular security audits and penetration testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Access controls and authentication requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Employee training on data protection</span>
                </li>
              </ul>
              <p className="text-white/80 font-sans">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 mb-12">
              <Image
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80"
                alt="Data Protection"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 mb-12">
              <h3 className="text-3xl font-serif mb-4">Your Rights</h3>
              <p className="text-white/80 mb-6 font-sans">
                You have the right to access, update, or delete your personal information at any time. You may also opt out of certain communications from us. Depending on your location, you may have additional rights under applicable data protection laws, including:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Right to access your personal data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Right to rectification of inaccurate data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Right to erasure (&quot;right to be forgotten&quot;)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Right to restrict processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Right to data portability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Right to object to processing</span>
                </li>
              </ul>
              <p className="text-white/80 font-sans">
                To exercise these rights, please contact us using the information provided at the end of this policy. We will respond to your request within 30 days.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 mb-12">
              <h3 className="text-3xl font-serif mb-4">Data Retention</h3>
              <p className="text-white/80 mb-6 font-sans">
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes described in this policy, unless a longer retention period is required or permitted by law.
              </p>
              <p className="text-white/80 font-sans">
                When you delete your account, we will delete or anonymize your personal information, except where we are required to retain it for legal, regulatory, or legitimate business purposes.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-serif mb-4">Changes to This Policy</h3>
              <p className="text-white/80 mb-6 font-sans">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
              <p className="text-white/80 font-sans">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif mb-6">
            Questions About Privacy?
          </h2>
          <p className="text-xl text-white/70 mb-10 font-sans">
            If you have questions about our privacy practices or wish to exercise your rights, please contact us.
          </p>
          <Link
            href="/request-demo"
            className="inline-block bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors text-lg font-sans"
          >
            Contact Privacy Team
          </Link>
        </div>
      </section>
    </div>
  );
}
