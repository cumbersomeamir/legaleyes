import Link from 'next/link';

export default function CompanyPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Company
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              Building the future of legal practice with AI.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-3xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About LegalEyes</h2>
            <p className="text-lg text-gray-600 mb-6">
              LegalEyes is transforming the legal industry by providing professional-class AI tools designed specifically for legal practice. We combine deep legal domain expertise with cutting-edge artificial intelligence to help law firms and legal teams work smarter, faster, and more effectively.
            </p>
            <p className="text-lg text-white/70 mb-6 font-sans">
              Our mission is to democratize access to advanced legal technology, enabling firms of all sizes to deliver exceptional client service while improving efficiency and reducing costs.
            </p>
            <h3 className="text-3xl font-serif mb-6 mt-12">Our Values</h3>
            <ul className="space-y-4 text-white/70 font-sans">
              <li className="flex items-start">
                <span className="text-white/60 mr-3">•</span>
                <span><strong className="text-white">Excellence:</strong> We strive for excellence in everything we do, from product development to customer support.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white/60 mr-3">•</span>
                <span><strong className="text-white">Innovation:</strong> We continuously push the boundaries of what's possible with AI in legal practice.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white/60 mr-3">•</span>
                <span><strong className="text-white">Security:</strong> We prioritize the security and confidentiality of our clients' data above all else.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white/60 mr-3">•</span>
                <span><strong className="text-white">Partnership:</strong> We work closely with our clients as partners, not just vendors.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="company-careers" className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif mb-4">Join Our Team</h2>
            <p className="text-xl text-white/70 font-sans">
              We're building the future of legal technology. Join us.
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/careers"
              className="inline-block bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors font-sans"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

