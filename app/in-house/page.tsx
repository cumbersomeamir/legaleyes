import Link from 'next/link';
import Image from 'next/image';

export default function InHousePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              In-House Counsel
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Streamline high-volume work across practice areas to free up time for strategic guidance and business partnership.
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
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
              alt="In-House Legal Team"
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
                Solutions for In-House Legal Teams
              </h2>
              <p className="text-lg text-white/70 mb-6 font-sans">
                LegalEyes empowers in-house legal teams to manage high-volume, routine work efficiently, freeing attorneys to focus on strategic initiatives, business partnership, and high-value matters. Our platform is designed specifically for the unique challenges faced by corporate legal departments.
              </p>
              <p className="text-lg text-white/70 mb-6 font-sans">
                In-house teams face constant pressure to do more with less - managing contracts, compliance, policy work, and business support with limited resources. LegalEyes automates routine tasks, standardizes processes, and provides AI-powered assistance that scales with your team's needs.
              </p>
              <p className="text-lg text-white/70 mb-8 font-sans">
                From contract review and management to compliance monitoring, policy creation, and business advisory support, LegalEyes helps in-house teams deliver exceptional value to their organizations while maintaining quality and reducing costs.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Automated contract review and lifecycle management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Compliance monitoring and regulatory tracking</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Policy and procedure management automation</span>
                </li>
              </ul>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
                alt="Corporate Legal"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">In-House Legal Solutions</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Comprehensive tools designed for corporate legal departments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Contract Management</h3>
              <p className="text-white/70 mb-4 font-sans">
                Automate contract review, negotiation, and lifecycle management. LegalEyes can review contracts at scale, identify standard and non-standard terms, flag risks, and suggest modifications based on your company's policies and risk tolerance.
              </p>
              <p className="text-white/70 font-sans">
                The system tracks contract renewals, expirations, and obligations, ensuring nothing falls through the cracks. Integration with contract management systems provides seamless workflow automation.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Compliance Management</h3>
              <p className="text-white/70 mb-4 font-sans">
                Monitor regulatory changes, track compliance obligations, and automate compliance reporting. LegalEyes tracks regulations relevant to your industry and jurisdiction, alerting you to changes that may affect your business.
              </p>
              <p className="text-white/70 font-sans">
                Automated compliance checklists, policy gap analysis, and regulatory reporting help ensure your organization stays compliant while reducing manual effort and risk of oversight.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Policy & Procedure Management</h3>
              <p className="text-white/70 mb-4 font-sans">
                Create, update, and manage company policies and procedures with AI assistance. LegalEyes can draft policy documents, ensure consistency across policies, identify gaps, and suggest updates based on regulatory changes.
              </p>
              <p className="text-white/70 font-sans">
                Version control, approval workflows, and distribution tracking ensure policies are current, properly approved, and communicated to relevant stakeholders.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Business Advisory Support</h3>
              <p className="text-white/70 mb-4 font-sans">
                Free up time for strategic business support by automating routine legal work. LegalEyes handles high-volume tasks, allowing in-house counsel to focus on strategic initiatives, M&A support, risk management, and business partnership.
              </p>
              <p className="text-white/70 font-sans">
                Quick legal research, document analysis, and risk assessment tools enable faster response times to business requests, improving your value as a strategic partner to the organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">In-House Use Cases</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              How corporate legal teams use LegalEyes to transform their practice
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 order-2 lg:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
                  alt="Contract Review"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl font-serif mb-6">High-Volume Contract Review</h3>
                <p className="text-lg text-white/70 mb-4 font-sans">
                  A Fortune 500 company's legal department processes thousands of contracts monthly:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Automated review of vendor agreements, NDAs, and service contracts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Risk identification and flagging of non-standard terms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Reduced contract review time from days to hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Freed up 40% of legal team time for strategic work</span>
                  </li>
                </ul>
                <p className="text-lg text-white/70 font-sans">
                  The legal team can now focus on high-value contracts and strategic initiatives while routine contracts are handled efficiently by AI.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-serif mb-6">Regulatory Compliance Monitoring</h3>
                <p className="text-lg text-white/70 mb-4 font-sans">
                  A financial services company uses LegalEyes for compliance management:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Automated tracking of SEC, FINRA, and state regulatory changes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Impact analysis of regulatory changes on company policies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Automated compliance reporting and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Reduced compliance review time by 70%</span>
                  </li>
                </ul>
                <p className="text-lg text-white/70 font-sans">
                  The compliance team stays ahead of regulatory changes and can proactively address requirements rather than reactively responding to issues.
                </p>
              </div>
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80"
                  alt="Compliance"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-serif mb-8 text-center">Key Benefits for In-House Teams</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Time Savings</h3>
                <p className="text-white/70 font-sans">
                  Automate routine tasks to free up 30-50% of legal team time for strategic work and business partnership.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Cost Reduction</h3>
                <p className="text-white/70 font-sans">
                  Reduce reliance on outside counsel for routine matters, saving significant legal spend while maintaining quality.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Consistency</h3>
                <p className="text-white/70 font-sans">
                  Ensure consistent application of company policies, risk standards, and legal standards across all work.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Scalability</h3>
                <p className="text-white/70 font-sans">
                  Handle increasing volumes of work without proportional increases in headcount or outside counsel spend.
                </p>
              </div>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
                alt="In-House Benefits"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif mb-6">
            Transform Your In-House Legal Team
          </h2>
          <p className="text-xl text-white/70 mb-10 font-sans">
            See how LegalEyes can help your in-house team work more efficiently and strategically. Request a demo.
          </p>
          <Link
            href="/request-demo"
            className="inline-block bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors text-lg font-sans"
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
