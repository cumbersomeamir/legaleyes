import Link from 'next/link';
import Image from 'next/image';

export default function MicrosoftIntegrationPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Microsoft Integration
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Legal intelligence for contract review, drafting, emails, and documents in Word, Outlook, and SharePoint. Work with LegalEyes directly within your Microsoft Office applications.
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
              alt="Microsoft Office Integration"
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
                Seamless Microsoft Office Integration
              </h2>
              <p className="text-lg text-white/70 mb-6 font-sans">
                LegalEyes integrates directly into Microsoft Word, Outlook, and SharePoint, bringing AI-powered legal intelligence to where you already work. No need to switch between applications or copy-paste content - access LegalEyes capabilities without leaving your familiar Microsoft Office environment.
              </p>
              <p className="text-lg text-white/70 mb-6 font-sans">
                Our Microsoft add-ins are designed specifically for legal professionals, understanding legal document structures, terminology, and workflows. Whether you&apos;re drafting a contract in Word, reviewing an email in Outlook, or managing documents in SharePoint, LegalEyes is there to assist.
              </p>
              <p className="text-lg text-white/70 mb-8 font-sans">
                The integration maintains all security and compliance features of the LegalEyes platform, ensuring your documents and communications remain protected while benefiting from AI-powered assistance.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Native add-ins for Word, Outlook, and SharePoint</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Real-time AI assistance while you work</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Enterprise security and compliance maintained</span>
                </li>
              </ul>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                alt="Microsoft Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Word Integration */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Microsoft Word Integration</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              AI-powered legal assistance directly in Microsoft Word
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
                alt="Word Document Editing"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-4xl font-serif mb-6">Contract Drafting & Review</h3>
              <p className="text-lg text-white/70 mb-4 font-sans">
                The LegalEyes Word add-in provides powerful capabilities for contract drafting and review:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">AI-powered suggestions for contract language and clauses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Real-time analysis of contract terms and risk identification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Comparison with standard templates and identification of deviations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Automatic generation of contract sections based on transaction type</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Citation and legal research directly within the document</span>
                </li>
              </ul>
              <p className="text-lg text-white/70 font-sans">
                Attorneys can draft contracts faster while ensuring consistency with firm standards and identifying potential issues before they become problems.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif mb-4">Document Analysis</h3>
              <p className="text-white/70 font-sans">
                Analyze any Word document for key terms, risks, missing clauses, and compliance issues. Get instant insights without leaving your document.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif mb-4">Template Generation</h3>
              <p className="text-white/70 font-sans">
                Generate documents from templates with AI assistance. The add-in can populate templates with client-specific information and suggest appropriate clauses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outlook Integration */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Microsoft Outlook Integration</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              AI-powered email analysis and drafting assistance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-serif mb-6">Email Analysis & Drafting</h3>
              <p className="text-lg text-white/70 mb-4 font-sans">
                The LegalEyes Outlook add-in helps legal professionals manage email more effectively:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Analyze incoming emails for legal issues, deadlines, and action items</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">AI-powered email drafting with tone and style suggestions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Extract key information from email threads and attachments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Automatic categorization and prioritization of legal emails</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Integration with matter management systems for automatic filing</span>
                </li>
              </ul>
              <p className="text-lg text-white/70 font-sans">
                Legal teams report significant time savings on email management, with the add-in helping prioritize important communications and ensuring nothing critical is missed.
              </p>
            </div>
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80"
                alt="Outlook Email"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SharePoint Integration */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">SharePoint Integration</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Enhanced document management and collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
                alt="SharePoint Collaboration"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-4xl font-serif mb-6">Document Management & Collaboration</h3>
              <p className="text-lg text-white/70 mb-4 font-sans">
                LegalEyes enhances SharePoint with legal-specific capabilities:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Automatic document analysis and metadata extraction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">AI-powered document search and discovery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Version comparison and change analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Integration with LegalEyes Vault for enhanced document management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Collaborative document review with AI-powered suggestions</span>
                </li>
              </ul>
              <p className="text-lg text-white/70 font-sans">
                Firms using SharePoint for document management can now leverage LegalEyes AI capabilities without migrating to a new system, enhancing their existing infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-serif mb-8 text-center">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="text-4xl font-serif mb-4 text-white">Word</div>
                <p className="text-white/70 font-sans">2016, 2019, 2021, Microsoft 365</p>
              </div>
              <div className="text-center bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="text-4xl font-serif mb-4 text-white">Outlook</div>
                <p className="text-white/70 font-sans">2016, 2019, 2021, Microsoft 365</p>
              </div>
              <div className="text-center bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="text-4xl font-serif mb-4 text-white">SharePoint</div>
                <p className="text-white/70 font-sans">Online, 2019, 2022</p>
              </div>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80"
                alt="Microsoft Integration"
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
              <h2 className="text-5xl font-serif mb-8">Security & Compliance</h2>
              <p className="text-lg text-white/70 mb-6 font-sans">
                All Microsoft integrations maintain the same enterprise-grade security and compliance standards as the LegalEyes platform. Documents processed through Office add-ins are encrypted, access is logged, and all data handling complies with legal industry requirements.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif mb-3">Data Protection</h3>
                  <p className="text-white/70 font-sans">
                    Documents and data processed through Office add-ins are encrypted in transit and at rest. No data is stored locally on your device unless you explicitly choose to do so.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-3">Access Controls</h3>
                  <p className="text-white/70 font-sans">
                    Integration respects your firm&apos;s access control policies. Users can only access features and data they&apos;re authorized to use, with all access logged for audit purposes.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-3">Compliance</h3>
                  <p className="text-white/70 font-sans">
                    All integrations comply with SOC 2 Type II, GDPR, CCPA, and other relevant regulations. Data residency options are available to meet jurisdictional requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80"
                alt="Security"
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
            Work with LegalEyes in Microsoft Office
          </h2>
          <p className="text-xl text-white/70 mb-10 font-sans">
            See how Microsoft integration can enhance your legal practice. Request a demo to explore the add-ins.
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
