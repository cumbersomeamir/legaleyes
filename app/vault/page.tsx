import Link from 'next/link';
import Image from 'next/image';

export default function VaultPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Vault
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Securely store, organize, and bulk-analyze legal documents with enterprise-grade security and AI-powered intelligence.
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
              alt="Secure Document Vault"
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
                Enterprise Document Management for Legal Teams
              </h2>
              <p className="text-lg text-white/70 mb-6 font-sans">
                LegalEyes Vault is a comprehensive document management system designed specifically for legal professionals. It combines enterprise-grade security with AI-powered organization and analysis capabilities, enabling law firms to manage vast document repositories efficiently and securely.
              </p>
              <p className="text-lg text-white/70 mb-6 font-sans">
                Unlike generic document storage solutions, Vault understands legal document types, relationships, and workflows. It automatically categorizes documents, extracts key information, and enables powerful search and analysis across your entire document library.
              </p>
              <p className="text-lg text-white/70 mb-8 font-sans">
                With support for millions of documents, advanced version control, and seamless integration with your existing legal tools, Vault becomes the central repository for all your firm&apos;s legal knowledge and documentation.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Unlimited document storage with scalable infrastructure</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">AI-powered automatic categorization and tagging</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Bulk analysis capabilities for due diligence and discovery</span>
                </li>
              </ul>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"
                alt="Document Organization"
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
            <h2 className="text-5xl font-serif mb-6">Comprehensive Document Management</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Everything you need to organize, secure, and analyze your legal documents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Enterprise Security</h3>
              <p className="text-white/70 mb-4 font-sans">
                Vault employs military-grade encryption for data at rest and in transit. All documents are encrypted using AES-256 encryption, and access is controlled through role-based permissions and multi-factor authentication.
              </p>
              <p className="text-white/70 font-sans">
                We maintain SOC 2 Type II certification and comply with GDPR, CCPA, and other data protection regulations. Regular security audits and penetration testing ensure your documents remain protected.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">AI-Powered Organization</h3>
              <p className="text-white/70 mb-4 font-sans">
                Our AI automatically analyzes and categorizes documents as they&apos;re uploaded. It identifies document types (contracts, briefs, memos, etc.), extracts key metadata, and suggests appropriate tags and folders.
              </p>
              <p className="text-white/70 font-sans">
                The system learns from your organization patterns and improves over time, making document management increasingly efficient. You can also create custom categorization rules based on your firm&apos;s specific needs.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Advanced Search & Discovery</h3>
              <p className="text-white/70 mb-4 font-sans">
                Search across millions of documents instantly using natural language queries. Vault&apos;s search understands legal terminology and can find documents by content, metadata, relationships, or any combination of criteria.
              </p>
              <p className="text-white/70 font-sans">
                Advanced features include semantic search (finding documents by meaning, not just keywords), similarity search (finding related documents), and saved search queries for frequently accessed information.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Bulk Analysis & Extraction</h3>
              <p className="text-white/70 mb-4 font-sans">
                Process thousands of documents simultaneously for due diligence, discovery, or compliance reviews. Vault can extract specific clauses, identify patterns, compare documents, and generate comprehensive reports.
              </p>
              <p className="text-white/70 font-sans">
                Use cases include M&A due diligence (analyzing hundreds of contracts), litigation discovery (processing thousands of emails and documents), and regulatory compliance reviews (identifying required clauses across document sets).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases with Images */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Real-World Applications</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              How legal teams use Vault to transform document management
            </p>
          </div>

          <div className="space-y-24">
            {/* Use Case 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 order-2 lg:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
                  alt="Due Diligence"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl font-serif mb-6">M&A Due Diligence</h3>
                <p className="text-lg text-white/70 mb-4 font-sans">
                  Transactional teams use Vault to manage and analyze thousands of documents during M&A transactions. The platform enables:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Centralized repository for all deal documents with secure access controls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Automated extraction of key terms from hundreds of contracts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Identification of unusual clauses, risks, and potential deal breakers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Generation of comprehensive due diligence reports</span>
                  </li>
                </ul>
                <p className="text-lg text-white/70 font-sans">
                  One AmLaw 50 firm reduced due diligence time from 6 weeks to 2 weeks while improving the thoroughness of their analysis, enabling them to close deals faster and more confidently.
                </p>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-serif mb-6">Litigation Discovery</h3>
                <p className="text-lg text-white/70 mb-4 font-sans">
                  Litigation teams leverage Vault&apos;s bulk analysis capabilities to process massive document sets during discovery:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Ingest and organize millions of documents from multiple sources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">AI-powered identification of privileged documents and attorney-client communications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Automatic redaction of sensitive information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Topic clustering and relationship mapping between documents</span>
                  </li>
                </ul>
                <p className="text-lg text-white/70 font-sans">
                  A major litigation firm handling a class action with over 2 million documents used Vault to reduce review costs by 60% while improving the quality and consistency of their document review process.
                </p>
              </div>
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80"
                  alt="Litigation Discovery"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 order-2 lg:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
                  alt="Knowledge Management"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl font-serif mb-6">Firm Knowledge Management</h3>
                <p className="text-lg text-white/70 mb-4 font-sans">
                  Law firms use Vault as their central knowledge repository, making institutional knowledge accessible to all attorneys:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Centralized storage of all firm documents, templates, and precedents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Easy discovery of similar past matters and relevant experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Version control and document history tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Collaborative workspaces for practice groups and matter teams</span>
                  </li>
                </ul>
                <p className="text-lg text-white/70 font-sans">
                  Boutique firms report that Vault helps them compete with larger firms by making their collective knowledge and experience easily accessible, enabling faster response times and better client service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-serif mb-8 text-center">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="text-4xl font-serif mb-4 text-white">Unlimited</div>
                <p className="text-white/70 font-sans">Document Storage</p>
              </div>
              <div className="text-center bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="text-4xl font-serif mb-4 text-white">100+</div>
                <p className="text-white/70 font-sans">File Formats Supported</p>
              </div>
              <div className="text-center bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="text-4xl font-serif mb-4 text-white">&lt;1s</div>
                <p className="text-white/70 font-sans">Search Response Time</p>
              </div>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80"
                alt="Technology Infrastructure"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integration & Workflow */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-serif mb-8">Seamless Integration</h2>
              <p className="text-lg text-white/70 mb-6 font-sans">
                Vault integrates seamlessly with your existing legal technology stack, including document management systems, practice management software, and Microsoft Office applications.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif mb-3">Microsoft Office Integration</h3>
                  <p className="text-white/70 font-sans">
                    Save documents directly to Vault from Word, Excel, and PowerPoint. Access Vault documents within Office applications and collaborate in real-time.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-3">API & Webhooks</h3>
                  <p className="text-white/70 font-sans">
                    Comprehensive REST API allows you to integrate Vault with any system. Webhooks enable real-time notifications when documents are added, modified, or analyzed.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-3">Bulk Upload Tools</h3>
                  <p className="text-white/70 font-sans">
                    Desktop and command-line tools for bulk uploading thousands of documents. Support for scheduled imports and automated workflows.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                alt="System Integration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-serif mb-8 text-center">Security & Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Data Encryption</h3>
                <p className="text-white/70 font-sans">
                  All documents encrypted with AES-256 at rest and TLS 1.3 in transit. Encryption keys are managed through a secure key management system with regular rotation.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Access Controls</h3>
                <p className="text-white/70 font-sans">
                  Granular role-based access control with support for matter-based permissions, document-level security, and audit trails for all access and modifications.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Compliance Certifications</h3>
                <p className="text-white/70 font-sans">
                  SOC 2 Type II certified, GDPR compliant, CCPA compliant, and supports HIPAA requirements for applicable use cases. Regular third-party security audits.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Data Residency</h3>
                <p className="text-white/70 font-sans">
                  Choose data residency options to meet jurisdictional requirements. Support for dedicated cloud instances and on-premises deployments for maximum control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif mb-6">
            Transform Your Document Management
          </h2>
          <p className="text-xl text-white/70 mb-10 font-sans">
            See how Vault can revolutionize how your firm manages and analyzes legal documents.
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
