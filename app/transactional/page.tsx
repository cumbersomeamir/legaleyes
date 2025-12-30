import Link from 'next/link';
import Image from 'next/image';

export default function TransactionalPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Transactional Work
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Accelerate due diligence, contract analysis, and review with precision and control. Handle more deals with greater accuracy and speed.
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
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
              alt="Transactional Legal Work"
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
                Accelerate Transactional Work
              </h2>
              <p className="text-lg text-white/70 mb-6 font-sans">
                LegalEyes transforms transactional legal work by automating due diligence, contract review, and analysis. Our AI-powered platform enables transactional teams to handle more deals with greater accuracy, speed, and consistency.
              </p>
              <p className="text-lg text-white/70 mb-6 font-sans">
                From M&A transactions to commercial agreements, joint ventures, and financing deals, LegalEyes streamlines every aspect of transactional work. The platform understands deal structures, identifies risks, and helps teams focus on strategic negotiation rather than manual document review.
              </p>
              <p className="text-lg text-white/70 mb-8 font-sans">
                Transactional teams using LegalEyes report significant time savings, improved deal quality, and the ability to handle larger deal volumes without proportional increases in headcount or outside counsel spend.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Automated due diligence review and analysis</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Contract analysis and risk identification</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Bulk document processing and extraction</span>
                </li>
              </ul>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
                alt="Due Diligence"
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
            <h2 className="text-5xl font-serif mb-6">Transactional Capabilities</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Comprehensive tools for every aspect of transactional legal work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Due Diligence Automation</h3>
              <p className="text-white/70 mb-4 font-sans">
                Process thousands of documents in hours instead of weeks. LegalEyes automatically reviews contracts, identifies key terms, extracts obligations, and flags risks across entire document sets.
              </p>
              <p className="text-white/70 font-sans">
                The system can analyze employment agreements, commercial contracts, real estate documents, IP agreements, and more, providing comprehensive due diligence reports that highlight issues requiring attention.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Contract Risk Analysis</h3>
              <p className="text-white/70 mb-4 font-sans">
                Identify risks, unusual terms, and potential deal breakers automatically. LegalEyes compares contracts against standard templates, flags deviations, and assesses risk levels based on your firm&apos;s criteria.
              </p>
              <p className="text-white/70 font-sans">
                Risk analysis includes financial terms, termination rights, change of control provisions, indemnification clauses, and other critical deal terms that could impact transaction value or structure.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Deal Timeline Management</h3>
              <p className="text-white/70 mb-4 font-sans">
                Track deal milestones, deadlines, and action items automatically. LegalEyes extracts key dates from documents, creates timeline visualizations, and sends reminders for critical deadlines.
              </p>
              <p className="text-white/70 font-sans">
                Integration with calendar systems and project management tools ensures all team members stay aligned on deal progress and upcoming milestones.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Document Generation</h3>
              <p className="text-white/70 mb-4 font-sans">
                Generate transaction documents from templates with deal-specific terms automatically populated. LegalEyes can create purchase agreements, disclosure schedules, closing documents, and more.
              </p>
              <p className="text-white/70 font-sans">
                The system ensures consistency across documents, reduces errors, and accelerates document preparation, enabling faster deal execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Transactional Use Cases</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              How transactional teams use LegalEyes to accelerate deals
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 order-2 lg:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
                  alt="M&A Transaction"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl font-serif mb-6">M&A Due Diligence</h3>
                <p className="text-lg text-white/70 mb-4 font-sans">
                  A leading M&A firm uses LegalEyes for comprehensive due diligence:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Process 5,000+ documents in 2 days instead of 6 weeks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Automated extraction of key terms and obligations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Risk identification and prioritization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Comprehensive due diligence reports generated automatically</span>
                  </li>
                </ul>
                <p className="text-lg text-white/70 font-sans">
                  The firm can now handle larger deals, complete due diligence faster, and identify issues earlier in the process, leading to better deal outcomes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-serif mb-6">Commercial Contract Review</h3>
                <p className="text-lg text-white/70 mb-4 font-sans">
                  A corporate legal department processes hundreds of commercial contracts monthly:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Automated review of vendor agreements and service contracts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Standard vs. non-standard term identification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Risk scoring and prioritization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Reduced contract review time by 75%</span>
                  </li>
                </ul>
                <p className="text-lg text-white/70 font-sans">
                  The legal team can focus on high-risk contracts while routine agreements are processed efficiently, improving business velocity.
                </p>
              </div>
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80"
                  alt="Contract Review"
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
            <h2 className="text-5xl font-serif mb-8 text-center">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Faster Deal Execution</h3>
                <p className="text-white/70 font-sans">
                  Complete due diligence and document review in days instead of weeks, enabling faster deal execution and competitive advantage.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Improved Deal Quality</h3>
                <p className="text-white/70 font-sans">
                  Comprehensive analysis ensures no issues are missed, leading to better-informed decisions and stronger deal outcomes.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Cost Efficiency</h3>
                <p className="text-white/70 font-sans">
                  Reduce reliance on outside counsel for routine review work, saving significant legal spend while maintaining quality.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Scalability</h3>
                <p className="text-white/70 font-sans">
                  Handle larger deal volumes and more complex transactions without proportional increases in team size or costs.
                </p>
              </div>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
                alt="Transactional Benefits"
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
            Accelerate Your Transactional Work
          </h2>
          <p className="text-xl text-white/70 mb-10 font-sans">
            See how LegalEyes can transform your transactional practice. Request a demo.
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
