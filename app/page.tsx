import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Announcement Banner */}
      <div className="bg-[#1a1a1a] border-b border-white/10 py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog/shared-spaces" className="flex items-center justify-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
            <span>Introducing Shared Spaces. Read the announcement</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-8xl font-normal mb-6 sm:mb-8 leading-[1.1] tracking-tight">
            Professional Class AI
            <br />
            for Legal Practice
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/70 mb-8 sm:mb-12 max-w-3xl mx-auto font-sans px-4">
            Domain-specific AI for law firms, professional service providers, and the Fortune 500.
          </p>
          <Link
            href="/request-demo"
            className="inline-block bg-white text-[#0a0a0a] px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium hover:bg-white/90 transition-colors text-base sm:text-lg font-sans min-h-[44px] flex items-center justify-center"
          >
            Request a Demo
          </Link>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-32 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Assistant */}
            <div className="group cursor-pointer">
              <Link href="/assistant">
                <div className="relative h-64 rounded-lg mb-6 overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
                  <Image
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                    alt="Assistant"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <h3 className="text-2xl font-serif mb-3">Assistant</h3>
              <p className="text-white/70 mb-4 font-sans">
                Ask questions, analyze documents, and draft faster with domain-specific AI.
              </p>
              <Link href="/assistant" className="text-white/80 hover:text-white font-sans inline-flex items-center gap-2">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Vault */}
            <div className="group cursor-pointer">
              <Link href="/vault">
                <div className="relative h-64 rounded-lg mb-6 overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
            <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                    alt="Vault"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <h3 className="text-2xl font-serif mb-3">Vault</h3>
              <p className="text-white/70 mb-4 font-sans">
                Securely store, organize, and bulk-analyze legal documents.
              </p>
              <Link href="/vault" className="text-white/80 hover:text-white font-sans inline-flex items-center gap-2">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Knowledge */}
            <div className="group cursor-pointer">
              <Link href="/knowledge">
                <div className="relative h-64 rounded-lg mb-6 overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
                  <Image
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80"
                    alt="Knowledge"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <h3 className="text-2xl font-serif mb-3">Knowledge</h3>
              <p className="text-white/70 mb-4 font-sans">
                Research complex legal, regulatory, and tax questions across domains.
              </p>
              <Link href="/knowledge" className="text-white/80 hover:text-white font-sans inline-flex items-center gap-2">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Workflow */}
            <div className="group cursor-pointer">
              <Link href="/workflow">
                <div className="relative h-64 rounded-lg mb-6 overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                    alt="Workflow"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <h3 className="text-2xl font-serif mb-3">Workflow</h3>
              <p className="text-white/70 mb-4 font-sans">
                Run pre-built workflows or build your own, tailored to your firm&apos;s needs.
              </p>
              <Link href="/workflow" className="text-white/80 hover:text-white font-sans inline-flex items-center gap-2">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Microsoft Integration */}
            <div className="group cursor-pointer">
              <Link href="/microsoft-integration">
                <div className="relative h-64 rounded-lg mb-6 overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                    alt="Microsoft Integration"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <h3 className="text-2xl font-serif mb-3">Microsoft Integration</h3>
              <p className="text-white/70 mb-4 font-sans">
                Legal intelligence for contract review, drafting, emails, and documents in Word, Outlook, and SharePoint.
              </p>
              <Link href="/microsoft-integration" className="text-white/80 hover:text-white font-sans inline-flex items-center gap-2">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Partnership */}
            <div className="group cursor-pointer">
              <Link href="/partnership">
                <div className="relative h-64 rounded-lg mb-6 overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
                  <Image
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                    alt="Partnership"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <h3 className="text-2xl font-serif mb-3">Partnership</h3>
              <p className="text-white/70 mb-4 font-sans">
                Explore our product and go-to-market partners pushing the boundaries of what&apos;s possible for our joint customers.
              </p>
              <Link href="/partnership" className="text-white/80 hover:text-white font-sans inline-flex items-center gap-2">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-32 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-serif mb-16 text-center">How Lawyers Use LegalEyes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-serif mb-4">In-House Counsel</h3>
              <p className="text-white/70 mb-6 font-sans">
                Streamline high-volume work across practice areas to free up time for strategic guidance.
              </p>
              <Link href="/in-house" className="text-white/80 hover:text-white font-sans inline-flex items-center gap-2">
                Solution for In-House Team
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-4">Innovation Team</h3>
              <p className="text-white/70 mb-6 font-sans">
                Drive transformation by embedding your firm&apos;s unique expertise, elevating client service, and showing impact.
              </p>
              <Link href="/innovation" className="text-white/80 hover:text-white font-sans inline-flex items-center gap-2">
                Solution for Innovation Team
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-4">Transactional Work</h3>
              <p className="text-white/70 mb-6 font-sans">
                Make due diligence, contract review, and analysis faster, more accurate, and less manual.
              </p>
              <Link href="/transactional" className="text-white/80 hover:text-white font-sans inline-flex items-center gap-2">
                Solution for Transactional Team
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-4">Litigation Work</h3>
              <p className="text-white/70 mb-6 font-sans">
                Cut manual effort, focus on strategy, and deliver stronger outcomes.
              </p>
              <Link href="/litigation" className="text-white/80 hover:text-white font-sans inline-flex items-center gap-2">
                Solution for Litigation Team
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif mb-6">
            Unlock Professional Class AI for Your Firm
          </h2>
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
