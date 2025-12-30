import Link from 'next/link';
import Image from 'next/image';

export default function AssistantPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Assistant
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Ask questions, analyze documents, and draft faster with domain-specific AI that understands legal context.
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
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
              alt="AI Assistant for Legal Practice"
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
                Intelligent Legal Assistant Powered by AI
              </h2>
              <p className="text-lg text-white/70 mb-6 font-sans">
                LegalEyes Assistant is a sophisticated AI-powered tool designed specifically for legal professionals. Unlike generic AI assistants, our platform understands the nuances of legal practice, case law, regulations, and legal terminology.
              </p>
              <p className="text-lg text-white/70 mb-6 font-sans">
                Built on advanced large language models trained on millions of legal documents, court cases, statutes, and regulatory materials, LegalEyes Assistant provides accurate, context-aware responses that legal professionals can trust.
              </p>
              <p className="text-lg text-white/70 mb-8 font-sans">
                Whether you&apos;re researching a complex legal question, analyzing a contract, or drafting a brief, LegalEyes Assistant accelerates your work while maintaining the highest standards of accuracy and reliability.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Trained on comprehensive legal databases including case law, statutes, and regulations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Real-time access to current legal precedents and regulatory updates</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Enterprise-grade security with SOC 2 Type II certification</span>
                </li>
              </ul>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&q=80"
                alt="Legal Research and Analysis"
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
            <h2 className="text-5xl font-serif mb-6">Key Capabilities</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Comprehensive AI-powered tools designed for every aspect of legal practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Natural Language Queries</h3>
              <p className="text-white/70 mb-4 font-sans">
                Ask complex legal questions in plain English. The assistant understands context, legal terminology, and can handle multi-part questions that require analysis across different areas of law.
              </p>
              <p className="text-white/70 font-sans">
                Example queries include: &quot;What are the key considerations for enforcing a non-compete agreement in California?&quot; or &quot;Compare the disclosure requirements for public companies under SEC regulations versus state securities laws.&quot;
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Document Analysis</h3>
              <p className="text-white/70 mb-4 font-sans">
                Upload contracts, agreements, briefs, or any legal document for comprehensive analysis. The assistant identifies key terms, potential risks, missing clauses, and provides detailed summaries.
              </p>
              <p className="text-white/70 font-sans">
                Advanced features include clause-by-clause analysis, comparison with standard templates, identification of unusual terms, and suggestions for improvements or modifications based on best practices.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Intelligent Drafting</h3>
              <p className="text-white/70 mb-4 font-sans">
                Generate first drafts of legal documents including contracts, memos, briefs, and correspondence. The assistant incorporates your firm&apos;s preferred language, standard clauses, and formatting requirements.
              </p>
              <p className="text-white/70 font-sans">
                The drafting feature learns from your previous documents to maintain consistency with your firm&apos;s style and preferences. You can specify requirements, and the assistant will generate drafts that require minimal editing.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Citation & Research</h3>
              <p className="text-white/70 mb-4 font-sans">
                Access comprehensive legal research capabilities with proper citations. The assistant can find relevant case law, statutes, regulations, and secondary sources, providing citations in your preferred format (Bluebook, ALWD, etc.).
              </p>
              <p className="text-white/70 font-sans">
                Research results include brief summaries, key holdings, and relevance rankings. The assistant can also identify conflicting authorities and help you distinguish between cases to strengthen your arguments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases with Images */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">How Legal Teams Use Assistant</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Real-world applications across different practice areas and firm sizes
            </p>
          </div>

          <div className="space-y-24">
            {/* Use Case 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 order-2 lg:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
                  alt="Contract Review and Analysis"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl font-serif mb-6">Contract Review & Analysis</h3>
                <p className="text-lg text-white/70 mb-4 font-sans">
                  Legal teams use Assistant to review contracts at unprecedented speed. Upload a contract, and within seconds, receive a comprehensive analysis including:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Identification of all key terms and obligations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Risk assessment and flagging of unusual or problematic clauses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Comparison with industry standards and best practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Suggestions for modifications or additional protective clauses</span>
                  </li>
                </ul>
                <p className="text-lg text-white/70 font-sans">
                  One AmLaw 100 firm reported reducing contract review time by 70% while improving consistency and catching issues that might have been missed in manual review.
                </p>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-serif mb-6">Legal Research & Case Law Analysis</h3>
                <p className="text-lg text-white/70 mb-4 font-sans">
                  Assistant transforms legal research by providing instant access to relevant case law, statutes, and regulations. Lawyers can:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Ask complex research questions and receive comprehensive answers with citations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Analyze case law to identify patterns, trends, and key holdings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Compare different jurisdictions&apos; approaches to similar legal issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Stay updated on recent developments and changes in the law</span>
                  </li>
                </ul>
                <p className="text-lg text-white/70 font-sans">
                  A boutique litigation firm credits Assistant with helping them compete effectively against larger firms by providing research capabilities that previously required extensive paralegal support.
                </p>
              </div>
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80"
                  alt="Legal Research"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 order-2 lg:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=1200&q=80"
                  alt="Document Drafting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl font-serif mb-6">Document Drafting & Generation</h3>
                <p className="text-lg text-white/70 mb-4 font-sans">
                  Generate first drafts of legal documents quickly and accurately. Assistant understands context and can create:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Contracts and agreements tailored to specific transaction types</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Legal memos and briefs with proper structure and citations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Client correspondence and status updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Compliance documents and regulatory filings</span>
                  </li>
                </ul>
                <p className="text-lg text-white/70 font-sans">
                  In-house legal teams report saving 15-20 hours per week on routine drafting tasks, allowing them to focus on strategic legal work and business partnership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-serif mb-8 text-center">Technical Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-serif mb-4 text-white">99.9%</div>
                <p className="text-white/70 font-sans">Uptime SLA</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-serif mb-4 text-white">&lt;2s</div>
                <p className="text-white/70 font-sans">Average Response Time</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-serif mb-4 text-white">50M+</div>
                <p className="text-white/70 font-sans">Legal Documents Trained On</p>
              </div>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80"
                alt="AI Technology"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-serif mb-8">Enterprise Security & Compliance</h2>
              <p className="text-lg text-white/70 mb-6 font-sans">
                LegalEyes Assistant is built with security and compliance as foundational principles. We understand that legal data is among the most sensitive information, and we protect it accordingly.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif mb-3">SOC 2 Type II Certified</h3>
                  <p className="text-white/70 font-sans">
                    Our platform undergoes regular independent audits to ensure we meet the highest standards for security, availability, processing integrity, confidentiality, and privacy.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-3">End-to-End Encryption</h3>
                  <p className="text-white/70 font-sans">
                    All data in transit and at rest is encrypted using industry-standard protocols. Your documents and queries are protected with AES-256 encryption.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-3">Compliance Ready</h3>
                  <p className="text-white/70 font-sans">
                    LegalEyes complies with GDPR, CCPA, HIPAA (for applicable use cases), and other major data protection regulations. We offer data residency options and can accommodate specific compliance requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80"
                alt="Security and Compliance"
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
            Experience the Power of LegalEyes Assistant
          </h2>
          <p className="text-xl text-white/70 mb-10 font-sans">
            See how AI can transform your legal practice. Request a demo to see Assistant in action.
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
