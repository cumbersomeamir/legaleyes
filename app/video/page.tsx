import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as genMeta } from '../lib/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = genMeta({
  title: 'Video',
  description: 'Watch tutorials, demos, and customer stories. Learn how LegalEyes can transform your legal practice.',
  path: '/video',
});

export default function VideoPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Video
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Watch tutorials, demos, and customer stories. Learn how LegalEyes can transform your legal practice.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
              alt="Video Content"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Categories */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Video Library</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Explore our collection of videos covering product features, tutorials, and customer success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative w-full h-64 bg-white/5 rounded-lg mb-6 overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                  alt="Product Demo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-2">Product Demo</h3>
              <p className="text-white/70 font-sans">
                See LegalEyes in action with a comprehensive product demonstration covering all major features.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative w-full h-64 bg-white/5 rounded-lg mb-6 overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                  alt="Getting Started"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-2">Getting Started</h3>
              <p className="text-white/70 font-sans">
                Learn how to get started with LegalEyes, from account setup to your first AI-powered legal task.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative w-full h-64 bg-white/5 rounded-lg mb-6 overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
                <Image
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
                  alt="Customer Story"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-2">Customer Story</h3>
              <p className="text-white/70 font-sans">
                Hear from law firms and legal teams about how LegalEyes has transformed their practice.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative w-full h-64 bg-white/5 rounded-lg mb-6 overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                  alt="Advanced Features"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-2">Advanced Features</h3>
              <p className="text-white/70 font-sans">
                Deep dive into advanced features including custom workflows, API integration, and enterprise capabilities.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative w-full h-64 bg-white/5 rounded-lg mb-6 overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Best Practices"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-2">Best Practices</h3>
              <p className="text-white/70 font-sans">
                Learn best practices for using AI in legal practice, from document review to legal research.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative w-full h-64 bg-white/5 rounded-lg mb-6 overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Security & Compliance"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-2">Security & Compliance</h3>
              <p className="text-white/70 font-sans">
                Understand LegalEyes&apos; security architecture, compliance certifications, and data protection measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif mb-6">
            See LegalEyes in Action
          </h2>
          <p className="text-xl text-white/70 mb-10 font-sans">
            Request a personalized demo to see how LegalEyes can transform your legal practice.
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
