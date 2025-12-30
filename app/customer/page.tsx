import Link from 'next/link';
import Image from 'next/image';

export default function CustomerPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Customer Success
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              See how leading law firms and legal teams are transforming their practice with LegalEyes.
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
              alt="Customer Success"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Customer Stories</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Hear from legal professionals who are transforming their practice with LegalEyes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80"
                  alt="AmLaw 100 Firm"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-4">AmLaw 100 Firm</h3>
              <p className="text-white/70 mb-4 font-sans">
                &quot;LegalEyes has transformed how we handle document review. We&apos;ve reduced review time by 60% while improving accuracy. The AI assistant helps our attorneys work more efficiently and focus on high-value strategic work.&quot;
              </p>
              <p className="text-sm text-white/50 font-sans">— Partner, Major Law Firm</p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
                  alt="In-House Legal Team"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-4">In-House Legal Team</h3>
              <p className="text-white/70 mb-4 font-sans">
                &quot;The AI assistant helps us answer complex legal questions quickly, allowing us to be more strategic partners to the business. We&apos;ve freed up 40% of our time for high-value work while maintaining quality.&quot;
              </p>
              <p className="text-sm text-white/50 font-sans">— General Counsel, Fortune 500</p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80"
                  alt="Boutique Firm"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-4">Boutique Firm</h3>
              <p className="text-white/70 mb-4 font-sans">
                &quot;LegalEyes levels the playing field. We can now compete with larger firms on complex matters thanks to AI-powered research and drafting. It&apos;s been a game-changer for our practice.&quot;
              </p>
              <p className="text-sm text-white/50 font-sans">— Managing Partner, Boutique Firm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Proven Results</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Real impact from real customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-serif mb-4 text-white">60%</div>
              <p className="text-white/70 font-sans">Average time savings on document review</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-serif mb-4 text-white">50%</div>
              <p className="text-white/70 font-sans">Reduction in research time</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-serif mb-4 text-white">40%</div>
              <p className="text-white/70 font-sans">Time freed for strategic work</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-serif mb-4 text-white">95%</div>
              <p className="text-white/70 font-sans">Customer satisfaction rate</p>
            </div>
          </div>

          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
              alt="Customer Success Metrics"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif mb-6">
            Join Leading Legal Teams
          </h2>
          <p className="text-xl text-white/70 mb-10 font-sans">
            See how LegalEyes can transform your practice. Request a demo to learn more.
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
