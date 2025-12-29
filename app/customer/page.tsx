import Link from 'next/link';

export default function CustomerPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Customer Success
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              See how leading law firms and legal teams are transforming their practice with LegalEyes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif mb-4">AmLaw 100 Firm</h3>
              <p className="text-white/70 mb-4 font-sans">
                "LegalEyes has transformed how we handle document review. We've reduced review time by 60% while improving accuracy."
              </p>
              <p className="text-sm text-white/50 font-sans">— Partner, Major Law Firm</p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif mb-4">In-House Legal Team</h3>
              <p className="text-white/70 mb-4 font-sans">
                "The AI assistant helps us answer complex legal questions quickly, allowing us to be more strategic partners to the business."
              </p>
              <p className="text-sm text-white/50 font-sans">— General Counsel, Fortune 500</p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif mb-4">Boutique Firm</h3>
              <p className="text-white/70 mb-4 font-sans">
                "LegalEyes levels the playing field. We can now compete with larger firms on complex matters thanks to AI-powered research and drafting."
              </p>
              <p className="text-sm text-white/50 font-sans">— Managing Partner, Boutique Firm</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif mb-6">
            Join Leading Legal Teams
          </h2>
          <p className="text-xl text-white/70 mb-10 font-sans">
            See how LegalEyes can transform your practice
          </p>
          <Link
            href="/request-demo"
            className="inline-block bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors font-sans"
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
