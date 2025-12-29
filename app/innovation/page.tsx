import Link from 'next/link';
import Image from 'next/image';

export default function InnovationPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Innovation
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Drive transformation by embedding your firm's unique expertise, elevating client service, and demonstrating measurable impact with AI-powered innovation.
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
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
              alt="Innovation in Legal Practice"
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
                Transform Your Firm with AI Innovation
              </h2>
              <p className="text-lg text-white/70 mb-6 font-sans">
                LegalEyes Innovation solutions empower law firm innovation teams to drive transformation across their organizations. By embedding your firm's unique expertise, knowledge, and best practices into AI-powered tools, you can scale your firm's capabilities and deliver exceptional client service.
              </p>
              <p className="text-lg text-white/70 mb-6 font-sans">
                Our Innovation platform enables you to train custom AI models on your firm's documents, precedents, and knowledge base. This creates AI assistants that understand your firm's specific approach, terminology, and standards, ensuring consistency and quality across all work.
              </p>
              <p className="text-lg text-white/70 mb-8 font-sans">
                Innovation teams use LegalEyes to demonstrate measurable impact, improve efficiency, enhance client satisfaction, and position their firms as leaders in legal technology adoption. With comprehensive analytics and reporting, you can track ROI and make data-driven decisions about technology investments.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Custom AI model training with firm-specific knowledge</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Comprehensive impact measurement and analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Strategic transformation consulting and support</span>
                </li>
              </ul>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                alt="Legal Innovation"
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
            <h2 className="text-5xl font-serif mb-6">Innovation Capabilities</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Comprehensive tools for driving firmwide transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Custom Model Training</h3>
              <p className="text-white/70 mb-4 font-sans">
                Train AI models on your firm's documents, precedents, templates, and knowledge base. The system learns your firm's writing style, preferred language, standard clauses, and best practices.
              </p>
              <p className="text-white/70 font-sans">
                Custom models ensure that AI-generated content matches your firm's standards and maintains consistency across all work. This is particularly valuable for firms with unique approaches or specialized practices.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Impact Measurement</h3>
              <p className="text-white/70 mb-4 font-sans">
                Comprehensive analytics and reporting to measure the impact of AI adoption. Track metrics including time savings, cost reduction, quality improvements, and client satisfaction.
              </p>
              <p className="text-white/70 font-sans">
                Detailed dashboards show usage patterns, adoption rates, and ROI. Use this data to demonstrate value to firm leadership, justify investments, and identify areas for improvement.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Change Management</h3>
              <p className="text-white/70 mb-4 font-sans">
                Comprehensive change management support including training programs, adoption strategies, and best practices. Help your firm successfully adopt AI technology with minimal disruption.
              </p>
              <p className="text-white/70 font-sans">
                Our team works with innovation teams to develop rollout plans, create training materials, and provide ongoing support. We understand that technology adoption requires more than just software - it requires cultural change.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Strategic Consulting</h3>
              <p className="text-white/70 mb-4 font-sans">
                Strategic consulting to help innovation teams develop AI strategies, identify use cases, and prioritize initiatives. Our experts understand legal practice and can help you make informed decisions.
              </p>
              <p className="text-white/70 font-sans">
                From initial assessment through implementation and optimization, we provide guidance to ensure your AI initiatives align with firm strategy and deliver maximum value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Innovation Success Stories</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              How innovation teams are transforming their firms
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 order-2 lg:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
                  alt="Firm Transformation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl font-serif mb-6">AmLaw 100 Firm Transformation</h3>
                <p className="text-lg text-white/70 mb-4 font-sans">
                  A leading AmLaw 100 firm's innovation team used LegalEyes to transform their practice:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Trained custom AI models on 50,000+ firm documents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Achieved 60% reduction in document drafting time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Improved consistency across practice groups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Demonstrated $2M+ annual cost savings</span>
                  </li>
                </ul>
                <p className="text-lg text-white/70 font-sans">
                  The innovation team was able to demonstrate clear ROI to firm leadership, leading to expanded AI initiatives and recognition as an industry leader in legal technology.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-serif mb-6">Boutique Firm Competitive Advantage</h3>
                <p className="text-lg text-white/70 mb-4 font-sans">
                  A boutique litigation firm used LegalEyes Innovation to compete with larger firms:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Created specialized AI tools for their practice areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Improved research capabilities to match larger firms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Enhanced client service with faster response times</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/60 mr-3 font-sans">•</span>
                    <span className="text-white/80 font-sans">Won competitive pitches against larger competitors</span>
                  </li>
                </ul>
                <p className="text-lg text-white/70 font-sans">
                  The firm's innovation team positioned AI adoption as a competitive differentiator, helping them win new business and retain existing clients.
                </p>
              </div>
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80"
                  alt="Competitive Advantage"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-serif mb-8 text-center">Implementation Process</h2>
            <div className="space-y-8 mb-12">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">1. Assessment & Strategy</h3>
                <p className="text-white/70 font-sans">
                  We work with your innovation team to assess current capabilities, identify opportunities, and develop a comprehensive AI strategy aligned with firm goals.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">2. Custom Model Training</h3>
                <p className="text-white/70 font-sans">
                  Train custom AI models on your firm's documents and knowledge base. Our team works with you to ensure models capture your firm's unique expertise and standards.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">3. Pilot Programs</h3>
                <p className="text-white/70 font-sans">
                  Launch pilot programs with select practice groups or use cases. Gather feedback, measure impact, and refine the implementation before firmwide rollout.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">4. Firmwide Rollout</h3>
                <p className="text-white/70 font-sans">
                  Execute firmwide rollout with comprehensive training, change management, and ongoing support. Monitor adoption and impact to ensure success.
                </p>
              </div>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                alt="Implementation"
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
            Drive Innovation at Your Firm
          </h2>
          <p className="text-xl text-white/70 mb-10 font-sans">
            See how LegalEyes Innovation can transform your firm. Request a demo to learn more.
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
