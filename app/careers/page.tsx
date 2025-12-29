import Link from 'next/link';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Careers
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Join us in building the future of legal technology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 max-w-4xl">
            <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
              <h2 className="text-3xl font-serif mb-2">Senior AI Engineer</h2>
              <p className="text-white/60 mb-4 font-sans">San Francisco, CA / Remote</p>
              <p className="text-white/70 mb-4 font-sans">
                We're looking for an experienced AI engineer to help build and improve our legal AI models. You'll work on cutting-edge NLP and machine learning problems in the legal domain.
              </p>
              <Link href="/request-demo" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                Apply <span>→</span>
              </Link>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
              <h2 className="text-3xl font-serif mb-2">Product Manager</h2>
              <p className="text-white/60 mb-4 font-sans">San Francisco, CA / Remote</p>
              <p className="text-white/70 mb-4 font-sans">
                Lead product development for LegalEyes, working closely with legal professionals to understand their needs and translate them into great products.
              </p>
              <Link href="/request-demo" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                Apply <span>→</span>
              </Link>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
              <h2 className="text-3xl font-serif mb-2">Customer Success Manager</h2>
              <p className="text-white/60 mb-4 font-sans">San Francisco, CA / Remote</p>
              <p className="text-white/70 mb-4 font-sans">
                Help our customers succeed with LegalEyes. You'll work directly with law firms and legal teams to ensure they get maximum value from our platform.
              </p>
              <Link href="/request-demo" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                Apply <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
