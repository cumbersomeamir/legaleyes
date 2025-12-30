import Link from 'next/link';
import Image from 'next/image';

export default function KnowledgePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Knowledge
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Research complex legal, regulatory, and tax questions across domains with AI-powered insights and comprehensive legal knowledge bases.
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
              alt="Legal Knowledge Base"
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
                Comprehensive Legal Knowledge Base
              </h2>
              <p className="text-lg text-white/70 mb-6 font-sans">
                LegalEyes Knowledge provides access to one of the most comprehensive legal knowledge bases available. Our platform aggregates and organizes legal information from thousands of sources, including case law databases, statutory codes, regulatory materials, tax codes, and secondary legal sources.
              </p>
              <p className="text-lg text-white/70 mb-6 font-sans">
                Unlike traditional legal research tools that require you to know exactly what you&apos;re looking for, Knowledge uses AI to understand your question&apos;s intent and context, returning relevant results even when you&apos;re exploring unfamiliar areas of law.
              </p>
              <p className="text-lg text-white/70 mb-8 font-sans">
                The knowledge base is continuously updated with new cases, regulations, and legal developments, ensuring you always have access to the most current legal information. Our AI models are trained on millions of legal documents, enabling them to provide nuanced, context-aware answers to complex legal questions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Access to federal and state case law from all 50 states</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Comprehensive regulatory databases including SEC, IRS, and agency regulations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Real-time updates as new cases and regulations are published</span>
                </li>
              </ul>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&q=80"
                alt="Legal Research"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Capabilities */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Advanced Research Capabilities</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Powerful tools for comprehensive legal research across multiple domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Case Law Research</h3>
              <p className="text-white/70 mb-4 font-sans">
                Search millions of federal and state court decisions with natural language queries. Find relevant cases by legal issue, jurisdiction, court level, or any combination of factors. The system understands legal concepts and can find cases even when you describe the issue in plain language.
              </p>
              <p className="text-white/70 font-sans">
                Advanced features include citation analysis (see how cases have been cited), case comparison (identify similarities and differences), and trend analysis (understand how the law has evolved over time).
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Statutory & Regulatory Research</h3>
              <p className="text-white/70 mb-4 font-sans">
                Access comprehensive databases of federal and state statutes, codes, and regulations. Search by topic, jurisdiction, or specific code section. The system tracks amendments and updates, showing you the current version and historical changes.
              </p>
              <p className="text-white/70 font-sans">
                Regulatory research includes access to agency regulations, administrative decisions, guidance documents, and regulatory history. Understand not just what the regulation says, but how it&apos;s been interpreted and applied.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Tax Code & Financial Regulations</h3>
              <p className="text-white/70 mb-4 font-sans">
                Comprehensive access to federal and state tax codes, IRS regulations, revenue rulings, private letter rulings, and tax court decisions. Research complex tax questions with confidence, understanding not just the code but how it&apos;s been interpreted.
              </p>
              <p className="text-white/70 font-sans">
                Financial regulations coverage includes SEC rules, FINRA regulations, banking regulations, and other financial services regulations. Stay current with regulatory changes and understand their implications for your clients.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Secondary Sources & Analysis</h3>
              <p className="text-white/70 mb-4 font-sans">
                Access to leading legal treatises, law review articles, practice guides, and legal analysis. These secondary sources provide context, interpretation, and practical guidance that complements primary legal sources.
              </p>
              <p className="text-white/70 font-sans">
                The system can synthesize information from multiple sources, providing comprehensive answers that combine case law, statutes, regulations, and expert analysis. This saves hours of research time while ensuring you have a complete understanding of the legal landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Research Scenarios</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              How legal professionals use Knowledge for complex research tasks
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
                  alt="Complex Legal Research"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-4xl font-serif mb-6">Multi-Jurisdictional Research</h3>
                <p className="text-lg text-white/70 mb-4 font-sans">
                  When working on matters spanning multiple jurisdictions, Knowledge enables you to:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Compare how different states or federal circuits have addressed similar legal issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Identify conflicts between jurisdictions and understand their implications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Research choice of law questions and jurisdictional requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Understand regulatory differences across jurisdictions</span>
                  </li>
                </ul>
                <p className="text-lg text-white/70 font-sans">
                  A corporate law firm handling a multi-state transaction used Knowledge to research employment law requirements across 12 states, completing in hours what would have taken days with traditional research methods.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-serif mb-6">Regulatory Compliance Research</h3>
                <p className="text-lg text-white/70 mb-4 font-sans">
                  For in-house counsel and compliance teams, Knowledge provides:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Comprehensive regulatory databases with real-time updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Tracking of regulatory changes and their effective dates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Analysis of how regulations apply to specific business scenarios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Access to agency guidance and interpretive materials</span>
                  </li>
                </ul>
                <p className="text-lg text-white/70 font-sans">
                  A Fortune 500 company&apos;s legal department uses Knowledge to stay current on regulatory changes affecting their industry, enabling proactive compliance rather than reactive responses.
                </p>
              </div>
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80"
                  alt="Regulatory Compliance"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-serif mb-8 text-center">Comprehensive Data Sources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Case Law</h3>
                <p className="text-white/70 font-sans">
                  Federal cases from all circuits, Supreme Court decisions, state cases from all 50 states, and specialized court decisions (Tax Court, Bankruptcy Court, etc.).
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Statutes & Codes</h3>
                <p className="text-white/70 font-sans">
                  Federal statutes, United States Code, Code of Federal Regulations, state codes from all 50 states, and municipal codes for major cities.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Regulations</h3>
                <p className="text-white/70 font-sans">
                  Federal agency regulations (SEC, IRS, FDA, EPA, etc.), state agency regulations, and administrative decisions and guidance.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Secondary Sources</h3>
                <p className="text-white/70 font-sans">
                  Legal treatises, law review articles, practice guides, legal encyclopedias, and expert commentary and analysis.
                </p>
              </div>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&q=80"
                alt="Legal Databases"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-serif mb-8 text-center">How Knowledge Works</h2>
            <p className="text-xl text-white/70 mb-12 text-center font-sans">
              Advanced AI technology for comprehensive legal research
            </p>

            <div className="space-y-8 mb-12">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-3xl font-serif mb-4">Query Understanding</h3>
                <p className="text-white/70 mb-4 font-sans">
                  When you ask a question, Knowledge first understands the legal context and intent behind your query. It identifies the relevant legal domains, jurisdictions, and types of sources needed to answer your question comprehensively.
                </p>
                <p className="text-white/70 font-sans">
                  The system recognizes legal concepts even when expressed in plain language, understands multi-part questions, and can handle complex queries that require analysis across multiple areas of law.
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-3xl font-serif mb-4">Source Retrieval & Ranking</h3>
                <p className="text-white/70 mb-4 font-sans">
                  Knowledge searches across its comprehensive legal database, retrieving relevant cases, statutes, regulations, and secondary sources. Results are ranked by relevance, recency, and authority, ensuring the most important sources appear first.
                </p>
                <p className="text-white/70 font-sans">
                  The ranking algorithm considers factors such as how directly a source addresses your question, the authority of the source, how recently it was decided or published, and how frequently it has been cited or relied upon.
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-3xl font-serif mb-4">Synthesis & Analysis</h3>
                <p className="text-white/70 mb-4 font-sans">
                  The system synthesizes information from multiple sources, providing comprehensive answers that combine case law, statutes, regulations, and expert analysis. It identifies patterns, trends, and key principles across sources.
                </p>
                <p className="text-white/70 font-sans">
                  Knowledge can identify conflicts between sources, distinguish between cases, and explain how different authorities relate to each other. It provides context and analysis, not just citations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Tools */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Advanced Research Tools</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Powerful features for efficient and thorough legal research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-serif mb-4">Citation Analysis</h3>
              <p className="text-white/70 mb-4 font-sans">
                See how cases have been cited over time. Understand whether a case has been followed, distinguished, overruled, or criticized. Track the evolution of legal doctrines through citation patterns.
              </p>
              <p className="text-white/70 font-sans">
                Citation analysis helps you understand the current state of the law and identify which cases remain good authority. It also helps you find related cases and understand how courts have applied legal principles.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-serif mb-4">Case Comparison</h3>
              <p className="text-white/70 mb-4 font-sans">
                Compare multiple cases side-by-side to identify similarities, differences, and key distinctions. Understand how courts have applied similar legal principles to different fact patterns.
              </p>
              <p className="text-white/70 font-sans">
                Case comparison helps you distinguish cases, understand how to apply precedents, and identify arguments for why your case is similar to or different from existing authorities.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-serif mb-4">Trend Analysis</h3>
              <p className="text-white/70 mb-4 font-sans">
                Understand how the law has evolved over time. Identify trends in how courts are ruling on similar issues, see shifts in legal doctrine, and understand the direction of the law.
              </p>
              <p className="text-white/70 font-sans">
                Trend analysis helps you anticipate how courts might rule on new issues, understand the trajectory of legal developments, and identify emerging areas of law.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-serif mb-4">Jurisdictional Comparison</h3>
              <p className="text-white/70 mb-4 font-sans">
                Compare how different jurisdictions have addressed similar legal issues. Understand jurisdictional differences, identify conflicts, and see how different courts have interpreted similar laws.
              </p>
              <p className="text-white/70 font-sans">
                Jurisdictional comparison is invaluable for multi-state practice, choice of law questions, and understanding how legal principles apply across different jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Research Scenarios */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">More Research Scenarios</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Additional ways legal professionals use Knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif mb-4">Appellate Brief Writing</h3>
              <p className="text-white/70 font-sans">
                Research comprehensive authorities for appellate briefs. Find all relevant cases, identify the strongest precedents, understand how courts have applied legal principles, and develop persuasive arguments based on comprehensive research.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif mb-4">Legislative & Regulatory Analysis</h3>
              <p className="text-white/70 font-sans">
                Understand new legislation and regulations. Research how similar laws have been interpreted, identify potential issues, and understand the implications of new legal requirements for your clients.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif mb-4">Client Advisory Research</h3>
              <p className="text-white/70 font-sans">
                Quickly research legal questions from clients. Provide comprehensive, well-researched answers with proper citations, helping clients understand their legal position and options.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif mb-4">Expert Witness Preparation</h3>
              <p className="text-white/70 font-sans">
                Research authorities and precedents to prepare expert witnesses. Understand how courts have evaluated similar expert testimony, identify relevant cases, and develop strategies for presenting expert evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif mb-6">
            Access Comprehensive Legal Knowledge
          </h2>
          <p className="text-xl text-white/70 mb-10 font-sans">
            Experience the power of AI-powered legal research. Request a demo to see Knowledge in action with your own research questions.
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
