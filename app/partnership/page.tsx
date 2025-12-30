import Link from 'next/link';
import Image from 'next/image';

export default function PartnershipPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Partnership
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Partner with LegalEyes to deliver cutting-edge AI solutions to your clients and grow your practice with innovative technology.
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
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
              alt="Partnership"
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
                Partner with LegalEyes
              </h2>
              <p className="text-lg text-white/70 mb-6 font-sans">
                LegalEyes partners with law firms, legal technology companies, and professional service providers to deliver AI-powered solutions that transform legal practice. Our partnership program offers exclusive benefits, dedicated support, and opportunities to grow your business with cutting-edge technology.
              </p>
              <p className="text-lg text-white/70 mb-6 font-sans">
                Whether you&apos;re a law firm looking to offer AI services to clients, a legal tech company seeking to integrate AI capabilities, or a professional services firm expanding into legal technology, LegalEyes provides the platform, support, and expertise you need to succeed.
              </p>
              <p className="text-lg text-white/70 mb-8 font-sans">
                Our partners benefit from competitive pricing, co-marketing opportunities, dedicated account management, and access to our product roadmap. We work closely with partners to ensure mutual success and deliver exceptional value to joint customers.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Exclusive partner pricing and revenue sharing opportunities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Dedicated partner support team and account management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Co-marketing and joint go-to-market initiatives</span>
                </li>
              </ul>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
                alt="Business Partnership"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Partnership Programs</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Choose the partnership model that fits your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Law Firm Partners</h3>
              <p className="text-white/70 mb-4 font-sans">
                Law firms can partner with LegalEyes to offer AI-powered legal services to their clients. This partnership model enables firms to:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Offer cutting-edge AI services as part of your practice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Differentiate your firm with innovative technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Access partner pricing and revenue sharing opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Receive dedicated training and support for your team</span>
                </li>
              </ul>
              <p className="text-white/70 font-sans">
                Law firm partners report increased client satisfaction, improved efficiency, and new revenue opportunities from offering AI-enhanced legal services.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Technology Partners</h3>
              <p className="text-white/70 mb-4 font-sans">
                Legal technology companies can integrate LegalEyes capabilities into their platforms through our API and integration partnerships:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Comprehensive API access for platform integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">White-label options for branded solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Technical support and integration assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Co-development opportunities for new features</span>
                </li>
              </ul>
              <p className="text-white/70 font-sans">
                Technology partners leverage LegalEyes AI to enhance their platforms, providing customers with advanced legal AI capabilities without building the technology themselves.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Reseller Partners</h3>
              <p className="text-white/70 mb-4 font-sans">
                Reseller partners can offer LegalEyes solutions to their clients with attractive margins and comprehensive support:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Competitive reseller pricing and margins</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Sales and marketing materials and support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Dedicated partner portal and resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Lead sharing and co-selling opportunities</span>
                </li>
              </ul>
              <p className="text-white/70 font-sans">
                Reseller partners expand their service offerings while LegalEyes handles product development, infrastructure, and support, creating a win-win partnership model.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Strategic Partners</h3>
              <p className="text-white/70 mb-4 font-sans">
                Strategic partnerships for joint product development, market expansion, and innovation:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Joint product development initiatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Market expansion into new geographies or industries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Innovation labs and research collaborations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white/60 mr-3 font-sans">•</span>
                  <span className="text-white/80 font-sans">Shared resources and expertise</span>
                </li>
              </ul>
              <p className="text-white/70 font-sans">
                Strategic partners work closely with LegalEyes to push the boundaries of legal AI, develop new capabilities, and expand into new markets together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Partner Benefits</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Comprehensive support and resources to ensure your partnership success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif mb-3">Training & Certification</h3>
              <p className="text-white/70 font-sans">
                Comprehensive training programs for your team, including product training, sales training, and technical certification. Become a certified LegalEyes partner.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif mb-3">Marketing Support</h3>
              <p className="text-white/70 font-sans">
                Access to marketing materials, case studies, webinars, and co-marketing opportunities. Joint marketing initiatives to grow both businesses.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif mb-3">Dedicated Support</h3>
              <p className="text-white/70 font-sans">
                Dedicated partner account manager, priority technical support, and access to partner-only resources and documentation.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif mb-3">Product Roadmap Access</h3>
              <p className="text-white/70 font-sans">
                Early access to new features, input into product development, and visibility into the LegalEyes product roadmap.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif mb-3">Revenue Opportunities</h3>
              <p className="text-white/70 font-sans">
                Competitive partner pricing, revenue sharing models, and opportunities to generate new revenue streams through LegalEyes solutions.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif mb-3">Partner Portal</h3>
              <p className="text-white/70 font-sans">
                Exclusive partner portal with resources, documentation, training materials, and tools to manage your partnership.
              </p>
            </div>
          </div>

          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
              alt="Partnership Success"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Partner Success Stories</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              See how our partners are transforming legal practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif mb-4">Mid-Size Law Firm</h3>
              <p className="text-white/70 mb-4 font-sans">
                &quot;Partnering with LegalEyes has transformed our practice. We can now offer AI-powered services that were previously only available to large firms. Our clients are impressed, and we&apos;ve seen a 40% increase in client satisfaction.&quot;
              </p>
              <p className="text-sm text-white/50 font-sans">— Managing Partner, 50-attorney firm</p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif mb-4">Legal Technology Company</h3>
              <p className="text-white/70 mb-4 font-sans">
                &quot;Integrating LegalEyes into our platform was seamless. The API is well-documented, and the support team was excellent. Our customers love the new AI capabilities, and it&apos;s become a key differentiator for us.&quot;
              </p>
              <p className="text-sm text-white/50 font-sans">— CTO, Legal Tech Platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif mb-6">
            Become a LegalEyes Partner
          </h2>
          <p className="text-xl text-white/70 mb-10 font-sans">
            Join our partner program and help transform legal practice. Contact us to learn more about partnership opportunities.
          </p>
          <Link
            href="/request-demo"
            className="inline-block bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors text-lg font-sans"
          >
            Request Partnership Information
          </Link>
        </div>
      </section>
    </div>
  );
}
