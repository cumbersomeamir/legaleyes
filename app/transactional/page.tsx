import Link from 'next/link';

export default function TransactionalPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Transactional Work
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Accelerate due diligence, contract analysis, and review with precision and control.
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

      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-serif mb-8">
                Accelerate Transactional Work
              </h2>
              <p className="text-lg text-white/70 mb-8 font-sans">
                LegalEyes transforms transactional legal work by automating due diligence, contract review, and analysis, enabling your team to handle more deals with greater accuracy.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Automated due diligence review</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Contract analysis and risk identification</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Bulk document processing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Deal timeline and milestone tracking</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-2xl p-12 aspect-square flex items-center justify-center border border-white/10">
              <div className="text-center">
                <div className="w-32 h-32 bg-white/10 rounded-lg mx-auto mb-6"></div>
                <p className="text-white/50 font-sans">Transactional Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
