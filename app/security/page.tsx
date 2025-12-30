import Link from 'next/link';
import Image from 'next/image';

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Security
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Enterprise-grade security to protect your most sensitive legal information. Built with security as a foundational principle.
            </p>
            <Link
              href="/request-demo"
              className="inline-block bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors font-sans"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80"
              alt="Enterprise Security"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-serif mb-8">
                Security First
              </h2>
              <p className="text-lg text-white/70 mb-6 font-sans">
                LegalEyes is built with security as a foundational principle. We understand that legal data is among the most sensitive information, and we protect it accordingly. Our security architecture is designed to meet and exceed the highest industry standards.
              </p>
              <p className="text-lg text-white/70 mb-6 font-sans">
                From encryption at rest and in transit to comprehensive access controls, regular security audits, and compliance certifications, every aspect of our platform is designed to protect your data. We undergo regular independent security assessments and maintain multiple compliance certifications.
              </p>
              <p className="text-lg text-white/70 mb-8 font-sans">
                Our security team works continuously to identify and address potential vulnerabilities, and we maintain a bug bounty program to encourage responsible disclosure of security issues. We believe that security is not a feature but a fundamental requirement.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">End-to-end encryption for all data</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">SOC 2 Type II certified</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Regular security audits and penetration testing</span>
                </li>
              </ul>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80"
                alt="Security Architecture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Security Features</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Comprehensive security measures to protect your data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Encryption</h3>
              <p className="text-white/70 mb-4 font-sans">
                All data is encrypted using industry-standard protocols. Data at rest is encrypted with AES-256 encryption, and data in transit is protected with TLS 1.3. Encryption keys are managed through a secure key management system with regular rotation.
              </p>
              <p className="text-white/70 font-sans">
                We use hardware security modules (HSMs) for key storage and management, ensuring that encryption keys are never exposed in plaintext and are protected by physical security measures.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Access Controls</h3>
              <p className="text-white/70 mb-4 font-sans">
                Comprehensive role-based access control (RBAC) ensures that users can only access data and features they&apos;re authorized to use. Access is logged and audited, providing complete visibility into who accessed what and when.
              </p>
              <p className="text-white/70 font-sans">
                Multi-factor authentication (MFA) is required for all accounts, and we support SSO integration for enterprise customers. Granular permissions can be set at the document, matter, and organization levels.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Compliance Certifications</h3>
              <p className="text-white/70 mb-4 font-sans">
                LegalEyes maintains SOC 2 Type II certification, demonstrating our commitment to security, availability, processing integrity, confidentiality, and privacy. We also comply with GDPR, CCPA, and other major data protection regulations.
              </p>
              <p className="text-white/70 font-sans">
                Regular third-party audits ensure we maintain the highest standards. We provide audit reports and compliance documentation to enterprise customers upon request.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Security Monitoring</h3>
              <p className="text-white/70 mb-4 font-sans">
                24/7 security monitoring and threat detection systems identify and respond to potential security incidents in real-time. Our security operations center (SOC) monitors for suspicious activity, unauthorized access attempts, and potential threats.
              </p>
              <p className="text-white/70 font-sans">
                Automated incident response procedures ensure rapid containment and remediation of any security issues. We maintain detailed security logs and provide security reports to customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Compliance & Certifications</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Meeting the highest standards for data protection and security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
              <h3 className="text-2xl font-serif mb-3">SOC 2 Type II</h3>
              <p className="text-white/70 font-sans">
                Certified for security, availability, processing integrity, confidentiality, and privacy.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
              <h3 className="text-2xl font-serif mb-3">GDPR Compliant</h3>
              <p className="text-white/70 font-sans">
                Full compliance with European General Data Protection Regulation requirements.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
              <h3 className="text-2xl font-serif mb-3">CCPA Compliant</h3>
              <p className="text-white/70 font-sans">
                Compliant with California Consumer Privacy Act requirements.
              </p>
            </div>
          </div>

          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80"
              alt="Compliance"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Data Residency */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10 order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
                alt="Data Residency"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl font-serif mb-8">Data Residency & Sovereignty</h2>
              <p className="text-lg text-white/70 mb-6 font-sans">
                We offer data residency options to meet jurisdictional requirements and data sovereignty needs. Choose where your data is stored and processed, with options for dedicated cloud instances and on-premises deployments.
              </p>
              <p className="text-lg text-white/70 mb-6 font-sans">
                For enterprise customers with specific compliance requirements, we can provide dedicated infrastructure, custom security configurations, and enhanced data residency controls.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Regional data centers in multiple jurisdictions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Dedicated cloud instances for maximum control</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">On-premises deployment options available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif mb-6">
            Enterprise-Grade Security
          </h2>
          <p className="text-xl text-white/70 mb-10 font-sans">
            Learn more about our security practices and compliance certifications. Request a security briefing.
          </p>
          <Link
            href="/request-demo"
            className="inline-block bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors text-lg font-sans"
          >
            Request Security Information
          </Link>
        </div>
      </section>
    </div>
  );
}
