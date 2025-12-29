import Link from 'next/link';

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Guide
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Comprehensive guides to help you get the most out of LegalEyes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 max-w-4xl">
            <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
              <h2 className="text-3xl font-serif mb-3">Getting Started with LegalEyes</h2>
              <p className="text-white/70 mb-4 font-sans">
                A comprehensive guide to setting up your LegalEyes account and getting started with the platform.
              </p>
              <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                Read guide <span>→</span>
              </Link>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
              <h2 className="text-3xl font-serif mb-3">Using AI Assistant for Legal Research</h2>
              <p className="text-white/70 mb-4 font-sans">
                Learn how to effectively use the AI Assistant for legal research, document analysis, and drafting.
              </p>
              <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                Read guide <span>→</span>
              </Link>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
              <h2 className="text-3xl font-serif mb-3">Best Practices for Document Management</h2>
              <p className="text-white/70 mb-4 font-sans">
                Tips and best practices for organizing and managing documents in Vault.
              </p>
              <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                Read guide <span>→</span>
              </Link>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
              <h2 className="text-3xl font-serif mb-3">Building Custom Workflows</h2>
              <p className="text-white/70 mb-4 font-sans">
                A step-by-step guide to creating custom workflows tailored to your firm's needs.
              </p>
              <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                Read guide <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
