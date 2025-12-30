import Link from 'next/link';
import Image from 'next/image';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Careers
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Join us in building the future of legal technology. Help transform how legal professionals work.
            </p>
            <Link
              href="/request-demo"
              className="inline-block bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors font-sans"
            >
              View Open Positions
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
              alt="Careers at LegalEyes"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-5xl font-serif mb-8">Why Join LegalEyes</h2>
              <p className="text-lg text-white/70 mb-6 font-sans">
                We&apos;re building the future of legal technology, and we need talented people to help us get there. At LegalEyes, you&apos;ll work on cutting-edge AI problems, collaborate with legal professionals, and make a real impact on how legal work gets done.
              </p>
              <p className="text-lg text-white/70 mb-6 font-sans">
                We offer competitive compensation, comprehensive benefits, flexible work arrangements, and opportunities for growth. But more importantly, we offer the chance to work on meaningful problems that matter.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Work on cutting-edge AI and legal technology</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Competitive compensation and equity</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Comprehensive health and wellness benefits</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Flexible work arrangements and remote options</span>
                </li>
              </ul>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Open Positions</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Join our team and help build the future of legal technology
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors bg-white/5">
              <div className="flex items-start gap-6">
                <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=80"
                    alt="AI Engineer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-serif mb-2">Senior AI Engineer</h2>
                  <p className="text-white/60 mb-4 font-sans">San Francisco, CA / Remote</p>
                  <p className="text-white/70 mb-4 font-sans">
                    We&apos;re looking for an experienced AI engineer to help build and improve our legal AI models. You&apos;ll work on cutting-edge NLP and machine learning problems in the legal domain, collaborating with legal professionals to understand requirements and build solutions.
                  </p>
                  <Link href="/request-demo" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                    Apply <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors bg-white/5">
              <div className="flex items-start gap-6">
                <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&q=80"
                    alt="Product Manager"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-serif mb-2">Product Manager</h2>
                  <p className="text-white/60 mb-4 font-sans">San Francisco, CA / Remote</p>
                  <p className="text-white/70 mb-4 font-sans">
                    Lead product development for LegalEyes, working closely with legal professionals to understand their needs and translate them into great products. You&apos;ll own product strategy, roadmap, and execution for key product areas.
                  </p>
                  <Link href="/request-demo" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                    Apply <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors bg-white/5">
              <div className="flex items-start gap-6">
                <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=200&q=80"
                    alt="Customer Success"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-serif mb-2">Customer Success Manager</h2>
                  <p className="text-white/60 mb-4 font-sans">San Francisco, CA / Remote</p>
                  <p className="text-white/70 mb-4 font-sans">
                    Help our customers succeed with LegalEyes. You&apos;ll work directly with law firms and legal teams to ensure they get maximum value from our platform, providing training, support, and strategic guidance.
                  </p>
                  <Link href="/request-demo" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                    Apply <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif mb-6">
            Don&apos;t See a Role That Fits?
          </h2>
          <p className="text-xl text-white/70 mb-10 font-sans">
            We&apos;re always looking for talented people. Send us your resume and we&apos;ll keep you in mind for future opportunities.
          </p>
          <Link
            href="/request-demo"
            className="inline-block bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors text-lg font-sans"
          >
            Submit General Application
          </Link>
        </div>
      </section>
    </div>
  );
}
