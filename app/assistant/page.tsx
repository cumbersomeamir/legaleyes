import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as genMeta } from '../lib/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = genMeta({
  title: 'Assistant',
  description: 'Ask questions, analyze documents, and draft faster with domain-specific AI that understands legal context, terminology, and the complexities of legal practice.',
  path: '/assistant',
});

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
              Ask questions, analyze documents, and draft faster with domain-specific AI that understands legal context, terminology, and the complexities of legal practice.
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
                Intelligent Legal Assistant Powered by Advanced AI
              </h2>
              <p className="text-lg text-white/70 mb-6 font-sans">
                LegalEyes Assistant represents a breakthrough in legal technology, combining the power of large language models with deep legal domain expertise. Unlike generic AI assistants that struggle with legal terminology and context, our Assistant is specifically trained on millions of legal documents, court cases, statutes, regulations, and legal treatises.
              </p>
              <p className="text-lg text-white/70 mb-6 font-sans">
                Built on advanced transformer architectures and fine-tuned on comprehensive legal corpora, LegalEyes Assistant understands the nuances of legal practice. It recognizes legal concepts, understands case law relationships, interprets statutory language, and can navigate complex regulatory frameworks across multiple jurisdictions.
              </p>
              <p className="text-lg text-white/70 mb-6 font-sans">
                The Assistant continuously learns from legal developments, with regular updates incorporating new cases, regulations, and legal scholarship. This ensures that the advice and analysis you receive reflect the current state of the law, not outdated information from when the model was initially trained.
              </p>
              <p className="text-lg text-white/70 mb-8 font-sans">
                Whether you&apos;re researching a complex legal question, analyzing a contract, drafting a brief, or preparing for a deposition, LegalEyes Assistant accelerates your work while maintaining the highest standards of accuracy, reliability, and legal rigor.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Trained on 50+ million legal documents including case law, statutes, regulations, and legal scholarship</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Real-time access to current legal precedents, regulatory updates, and case law developments</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Enterprise-grade security with SOC 2 Type II certification and end-to-end encryption</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Multi-jurisdictional understanding across federal, state, and international legal systems</span>
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

      {/* Key Features - Expanded */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Comprehensive AI Capabilities</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Advanced AI-powered tools designed for every aspect of legal practice, from research to drafting to analysis
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
                Ask complex legal questions in plain English, and the Assistant understands context, legal terminology, and can handle multi-part questions that require analysis across different areas of law. The system doesn&apos;t require you to know specific legal terms or case names - you can describe your situation in everyday language.
              </p>
              <p className="text-white/70 mb-4 font-sans">
                Example queries include: &quot;What are the key considerations for enforcing a non-compete agreement in California?&quot; or &quot;Compare the disclosure requirements for public companies under SEC regulations versus state securities laws.&quot; The Assistant can also handle follow-up questions, refining its answers based on your feedback and additional context.
              </p>
              <p className="text-white/70 font-sans">
                Advanced capabilities include multi-step reasoning (breaking down complex questions into sub-questions), comparative analysis (comparing legal approaches across jurisdictions), and hypothetical scenario analysis (exploring how the law would apply to different fact patterns).
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Advanced Document Analysis</h3>
              <p className="text-white/70 mb-4 font-sans">
                Upload contracts, agreements, briefs, pleadings, or any legal document for comprehensive analysis. The Assistant identifies key terms, potential risks, missing clauses, inconsistencies, and provides detailed summaries with actionable insights. It can analyze documents ranging from simple one-page agreements to complex multi-hundred-page transaction documents.
              </p>
              <p className="text-white/70 mb-4 font-sans">
                Advanced features include clause-by-clause analysis, comparison with standard templates and industry best practices, identification of unusual or problematic terms, risk scoring, and suggestions for improvements or modifications. The system can also identify potential conflicts between different clauses within the same document.
              </p>
              <p className="text-white/70 font-sans">
                For litigation documents, the Assistant can identify legal theories, assess argument strength, flag potential weaknesses, and suggest additional authorities or arguments. For transactional documents, it can identify deal terms, obligations, rights, and potential risks.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Intelligent Document Drafting</h3>
              <p className="text-white/70 mb-4 font-sans">
                Generate first drafts of legal documents including contracts, memos, briefs, correspondence, and compliance documents. The Assistant incorporates your firm&apos;s preferred language, standard clauses, formatting requirements, and can adapt to different document styles and conventions.
              </p>
              <p className="text-white/70 mb-4 font-sans">
                The drafting feature learns from your previous documents to maintain consistency with your firm&apos;s style and preferences. You can specify requirements, provide context, and the Assistant will generate drafts that require minimal editing. It can also incorporate specific clauses, terms, or language you want included.
              </p>
              <p className="text-white/70 font-sans">
                For complex documents, the Assistant can generate outlines first, allowing you to review the structure before full drafting. It can also draft individual sections on demand, enabling collaborative document development where you draft some sections and the Assistant drafts others.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Comprehensive Citation & Research</h3>
              <p className="text-white/70 mb-4 font-sans">
                Access comprehensive legal research capabilities with proper citations. The Assistant can find relevant case law, statutes, regulations, and secondary sources, providing citations in your preferred format (Bluebook, ALWD, state-specific formats, etc.). It understands citation rules and can format citations correctly.
              </p>
              <p className="text-white/70 mb-4 font-sans">
                Research results include brief summaries, key holdings, relevance rankings, and explanations of why each source is relevant to your query. The Assistant can also identify conflicting authorities, help you distinguish between cases, and suggest how to use cases to strengthen your arguments.
              </p>
              <p className="text-white/70 font-sans">
                The system tracks how cases have been cited, allowing you to see if a case has been overruled, distinguished, or followed. It can also identify trends in how courts are ruling on similar issues, helping you understand the direction of the law.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Legal Issue Spotting & Risk Analysis</h3>
              <p className="text-white/70 mb-4 font-sans">
                The Assistant can identify potential legal issues, risks, and areas of concern in documents, transactions, or fact patterns. It flags issues that might require attention, suggests questions to ask, and provides guidance on how to address identified risks.
              </p>
              <p className="text-white/70 mb-4 font-sans">
                For contracts, it can identify missing provisions, unusual terms, potential ambiguities, and terms that might create risks or liabilities. For litigation matters, it can identify potential defenses, weaknesses in arguments, and areas where additional evidence might be needed.
              </p>
              <p className="text-white/70 font-sans">
                The risk analysis includes severity ratings, helping you prioritize which issues need immediate attention versus those that are lower priority. It also provides context about why something might be a risk, helping you make informed decisions.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Client Communication & Explanation</h3>
              <p className="text-white/70 mb-4 font-sans">
                Help explain complex legal concepts to clients in plain language. The Assistant can translate legal jargon into understandable explanations, helping clients understand their rights, obligations, risks, and options. This improves client communication and helps clients make informed decisions.
              </p>
              <p className="text-white/70 mb-4 font-sans">
                The system can generate client memos, status updates, and explanations tailored to the client&apos;s level of legal sophistication. It can also prepare Q&A documents anticipating common client questions and providing clear, accurate answers.
              </p>
              <p className="text-white/70 font-sans">
                For in-house counsel, the Assistant can help explain legal issues to business stakeholders, translating legal requirements into business implications and helping facilitate decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Use Cases with Images */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">How Legal Teams Use Assistant</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Real-world applications across different practice areas, firm sizes, and legal contexts
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
                  Legal teams use Assistant to review contracts at unprecedented speed while maintaining thoroughness. Upload a contract, and within seconds, receive a comprehensive analysis including:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Complete identification of all key terms, obligations, rights, and restrictions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Risk assessment with severity ratings and flagging of unusual or problematic clauses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Comparison with industry standards, market norms, and best practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Identification of missing provisions that are typically included in similar agreements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Suggestions for modifications, additional protective clauses, or alternative language</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Summary of financial terms, deadlines, termination rights, and other critical provisions</span>
                  </li>
                </ul>
                <p className="text-lg text-white/70 mb-4 font-sans">
                  One AmLaw 100 firm reported reducing contract review time by 70% while improving consistency and catching issues that might have been missed in manual review. The firm&apos;s transactional team can now review more deals in less time, enabling them to take on additional work without increasing headcount.
                </p>
                <p className="text-lg text-white/70 font-sans">
                  For high-volume contract review scenarios, such as vendor agreements or commercial leases, the Assistant can process dozens of contracts simultaneously, generating comparative analyses and identifying patterns across multiple agreements.
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
                    <span className="text-white/80 font-sans">Ask complex research questions and receive comprehensive answers with proper citations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Analyze case law to identify patterns, trends, and key holdings across multiple jurisdictions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Compare different jurisdictions&apos; approaches to similar legal issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Stay updated on recent developments and changes in the law</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Identify conflicting authorities and understand how to distinguish or reconcile them</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Trace the evolution of legal doctrines over time</span>
                  </li>
                </ul>
                <p className="text-lg text-white/70 mb-4 font-sans">
                  A boutique litigation firm credits Assistant with helping them compete effectively against larger firms by providing research capabilities that previously required extensive paralegal support. The firm&apos;s attorneys can now conduct comprehensive research in hours instead of days, enabling faster case preparation and more thorough legal analysis.
                </p>
                <p className="text-lg text-white/70 font-sans">
                  For appellate work, the Assistant can help identify all relevant authorities, analyze how courts have interpreted key precedents, and suggest arguments based on recent developments in the law. This enables attorneys to build stronger cases and identify opportunities that might otherwise be missed.
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
                    <span className="text-white/80 font-sans">Contracts and agreements tailored to specific transaction types and jurisdictions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Legal memos and briefs with proper structure, citations, and legal analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Client correspondence, status updates, and engagement letters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Compliance documents, regulatory filings, and policy documents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Pleadings, motions, and other litigation documents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Due diligence reports, closing checklists, and transaction documents</span>
                  </li>
                </ul>
                <p className="text-lg text-white/70 mb-4 font-sans">
                  In-house legal teams report saving 15-20 hours per week on routine drafting tasks, allowing them to focus on strategic legal work and business partnership. The Assistant can handle everything from simple form letters to complex multi-section agreements, adapting to your firm&apos;s style and requirements.
                </p>
                <p className="text-lg text-white/70 font-sans">
                  For repetitive documents, the Assistant can learn your templates and preferences, generating documents that require minimal editing. For unique documents, it can incorporate your specifications and generate drafts that serve as strong starting points for further refinement.
                </p>
              </div>
            </div>

            {/* Use Case 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-serif mb-6">Due Diligence & Transaction Support</h3>
                <p className="text-lg text-white/70 mb-4 font-sans">
                  Transactional attorneys use Assistant to accelerate due diligence and transaction support:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Analyze hundreds of contracts to identify key terms, risks, and obligations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Generate due diligence reports summarizing findings across document sets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Identify deal breakers, unusual terms, and areas requiring negotiation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Draft disclosure schedules, closing documents, and transaction agreements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Research regulatory requirements and compliance obligations</span>
                  </li>
                </ul>
                <p className="text-lg text-white/70 font-sans">
                  M&A teams report completing due diligence in half the time while improving thoroughness. The Assistant helps identify issues earlier in the process, enabling better deal structuring and risk management.
                </p>
              </div>
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
                  alt="Due Diligence"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Use Case 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 order-2 lg:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                  alt="Litigation Support"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl font-serif mb-6">Litigation Support & Case Preparation</h3>
                <p className="text-lg text-white/70 mb-4 font-sans">
                  Litigation teams leverage Assistant for comprehensive case preparation:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Research case law and develop legal theories</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Draft briefs, motions, and pleadings with proper citations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Analyze opposing counsel&apos;s arguments and identify weaknesses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Prepare deposition outlines and witness examination strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Generate case summaries and status reports for clients</span>
                  </li>
                </ul>
                <p className="text-lg text-white/70 font-sans">
                  Litigation attorneys report that Assistant helps them prepare more thoroughly for hearings and trials, identify stronger arguments, and respond more quickly to opposing motions. The time savings enable them to take on more cases or provide more thorough representation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-serif mb-8 text-center">Technical Excellence & Performance</h2>
            <p className="text-xl text-white/70 mb-12 text-center font-sans">
              Built on cutting-edge AI technology with enterprise-grade reliability
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="text-5xl font-serif mb-4 text-white">99.9%</div>
                <p className="text-white/70 font-sans mb-2">Uptime SLA</p>
                <p className="text-sm text-white/50 font-sans">Guaranteed availability with redundant infrastructure</p>
              </div>
              <div className="text-center bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="text-5xl font-serif mb-4 text-white">&lt;2s</div>
                <p className="text-white/70 font-sans mb-2">Average Response Time</p>
                <p className="text-sm text-white/50 font-sans">Fast answers even for complex queries</p>
              </div>
              <div className="text-center bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="text-5xl font-serif mb-4 text-white">50M+</div>
                <p className="text-white/70 font-sans mb-2">Legal Documents Trained On</p>
                <p className="text-sm text-white/50 font-sans">Comprehensive legal knowledge base</p>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 mb-12">
              <h3 className="text-3xl font-serif mb-6">AI Architecture & Training</h3>
              <p className="text-lg text-white/70 mb-4 font-sans">
                LegalEyes Assistant is built on state-of-the-art large language models specifically fine-tuned for legal applications. Our training process involves multiple stages:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans"><strong>Pre-training:</strong> Models are trained on billions of tokens from legal documents, case law, statutes, regulations, and legal scholarship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans"><strong>Fine-tuning:</strong> Specialized training on legal tasks including contract analysis, legal research, and document drafting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans"><strong>Reinforcement Learning:</strong> Models are refined based on feedback from legal professionals to improve accuracy and relevance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans"><strong>Continuous Updates:</strong> Regular retraining incorporates new legal developments, ensuring the Assistant stays current</span>
                </li>
              </ul>
              <p className="text-lg text-white/70 font-sans">
                The models are optimized for legal reasoning, understanding complex legal concepts, and generating accurate, well-cited legal content. They understand legal hierarchies, can distinguish between binding and persuasive authority, and recognize when legal questions require multi-step analysis.
              </p>
            </div>

            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10 mb-12">
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80"
                alt="AI Technology"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Accuracy & Reliability</h3>
                <p className="text-white/70 font-sans">
                  Our models achieve high accuracy rates on legal tasks, with continuous monitoring and improvement. We track accuracy metrics across different legal domains and use cases, ensuring consistent performance.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Scalability</h3>
                <p className="text-white/70 font-sans">
                  Built on cloud infrastructure that scales automatically to handle peak loads. Whether you&apos;re a solo practitioner or a large firm, the Assistant performs consistently.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Multi-Language Support</h3>
                <p className="text-white/70 font-sans">
                  Support for multiple languages enables international law firms and cross-border transactions. The Assistant understands legal concepts across different legal systems.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Customization</h3>
                <p className="text-white/70 font-sans">
                  Fine-tune the Assistant to your firm&apos;s specific needs, practice areas, and preferences. Custom models can be trained on your firm&apos;s documents and knowledge base.
                </p>
              </div>
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
                LegalEyes Assistant is built with security and compliance as foundational principles. We understand that legal data is among the most sensitive information, and we protect it accordingly with industry-leading security measures.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif mb-3">SOC 2 Type II Certified</h3>
                  <p className="text-white/70 font-sans">
                    Our platform undergoes regular independent audits to ensure we meet the highest standards for security, availability, processing integrity, confidentiality, and privacy. We maintain SOC 2 Type II certification, demonstrating our ongoing commitment to security excellence.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-3">End-to-End Encryption</h3>
                  <p className="text-white/70 font-sans">
                    All data in transit and at rest is encrypted using industry-standard protocols. Your documents and queries are protected with AES-256 encryption, and we use TLS 1.3 for all network communications. Encryption keys are managed through a secure key management system with regular rotation.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-3">Compliance Ready</h3>
                  <p className="text-white/70 font-sans">
                    LegalEyes complies with GDPR, CCPA, HIPAA (for applicable use cases), and other major data protection regulations. We offer data residency options and can accommodate specific compliance requirements. Our compliance team works with enterprise customers to ensure all regulatory requirements are met.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-3">Access Controls & Audit Trails</h3>
                  <p className="text-white/70 font-sans">
                    Granular role-based access control ensures users can only access data they&apos;re authorized to view. Comprehensive audit trails log all access and actions, providing complete visibility into system usage. Multi-factor authentication is required for all accounts.
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

      {/* Integration Capabilities */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Seamless Integration</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Assistant integrates with your existing legal technology stack
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-serif mb-4">Microsoft Office Integration</h3>
              <p className="text-white/70 mb-4 font-sans">
                Use Assistant directly within Microsoft Word, Outlook, and SharePoint. Access AI capabilities without leaving your familiar Office applications. The integration includes:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Word add-in for document analysis and drafting assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Outlook integration for email analysis and drafting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">SharePoint integration for document management workflows</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-serif mb-4">Practice Management Systems</h3>
              <p className="text-white/70 mb-4 font-sans">
                Integrate with leading practice management systems including Clio, MyCase, TimeSolv, and others. Access Assistant capabilities from within your practice management workflow.
              </p>
              <p className="text-white/70 font-sans">
                Integration enables automatic document analysis, matter-based research, and seamless workflow between your practice management system and LegalEyes Assistant.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-serif mb-4">API & Webhooks</h3>
              <p className="text-white/70 mb-4 font-sans">
                Comprehensive REST API allows you to integrate Assistant with any system. Build custom integrations, automate workflows, and embed AI capabilities into your applications.
              </p>
              <p className="text-white/70 font-sans">
                Webhooks enable real-time notifications when documents are analyzed, research is completed, or drafts are generated. This enables seamless integration with your existing tools and workflows.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-3xl font-serif mb-4">Document Management Systems</h3>
              <p className="text-white/70 mb-4 font-sans">
                Integrate with NetDocuments, iManage, Worldox, and other document management systems. Analyze documents directly from your DMS and save results back seamlessly.
              </p>
              <p className="text-white/70 font-sans">
                The integration maintains document security and access controls, ensuring that Assistant respects your existing security policies and permissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Plans */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-serif mb-8 text-center">Flexible Pricing Plans</h2>
            <p className="text-xl text-white/70 mb-12 text-center font-sans">
              Choose the plan that fits your practice size and needs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-4">Solo Practitioner</h3>
                <div className="text-4xl font-serif mb-4">$299<span className="text-lg text-white/60">/month</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white/60 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80 font-sans text-sm">Unlimited queries and document analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white/60 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80 font-sans text-sm">Standard document drafting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white/60 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80 font-sans text-sm">Email support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-8 rounded-2xl border-2 border-white/20">
                <div className="bg-white/10 px-3 py-1 rounded-full text-sm font-sans mb-4 inline-block">Most Popular</div>
                <h3 className="text-2xl font-serif mb-4">Small to Mid-Size Firm</h3>
                <div className="text-4xl font-serif mb-4">$999<span className="text-lg text-white/60">/month</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white/60 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80 font-sans text-sm">Everything in Solo, plus:</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white/60 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80 font-sans text-sm">Team collaboration features</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white/60 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80 font-sans text-sm">Custom model training</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white/60 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80 font-sans text-sm">Priority support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-4">Enterprise</h3>
                <div className="text-4xl font-serif mb-4">Custom</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white/60 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80 font-sans text-sm">Everything in Small/Mid-Size, plus:</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white/60 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80 font-sans text-sm">Dedicated infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white/60 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80 font-sans text-sm">On-premises deployment options</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white/60 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80 font-sans text-sm">24/7 dedicated support</span>
                  </li>
                </ul>
              </div>
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
            See how AI can transform your legal practice. Request a demo to see Assistant in action with your own documents and use cases.
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
