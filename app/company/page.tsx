import Link from 'next/link';
import Image from 'next/image';

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Company
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Building the future of legal practice with AI. Transforming how legal professionals work.
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
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
              alt="LegalEyes Company"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-serif mb-8">About LegalEyes</h2>
              <p className="text-lg text-white/70 mb-6 font-sans">
                LegalEyes is transforming the legal industry by providing professional-class AI tools designed specifically for legal practice. We combine deep legal domain expertise with cutting-edge artificial intelligence to help law firms and legal teams work smarter, faster, and more effectively.
              </p>
              <p className="text-lg text-white/70 mb-6 font-sans">
                Founded by legal professionals and AI experts, LegalEyes understands the unique challenges and opportunities in legal practice. Our mission is to democratize access to advanced legal technology, enabling firms of all sizes to deliver exceptional client service while improving efficiency and reducing costs.
              </p>
              <p className="text-lg text-white/70 mb-8 font-sans">
                We believe that AI should augment, not replace, legal professionals. Our tools are designed to enhance attorney capabilities, allowing them to focus on high-value strategic work while AI handles routine tasks.
              </p>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Our Values</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Excellence</h3>
              <p className="text-white/70 font-sans">
                We strive for excellence in everything we do, from product development to customer support. We set high standards and continuously work to exceed them.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Innovation</h3>
              <p className="text-white/70 font-sans">
                We continuously push the boundaries of what&apos;s possible with AI in legal practice. Innovation is at the core of our product development and company culture.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Security</h3>
              <p className="text-white/70 font-sans">
                We prioritize the security and confidentiality of our clients&apos; data above all else. Security is not a feature but a fundamental requirement built into every aspect of our platform.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Partnership</h3>
              <p className="text-white/70 font-sans">
                We work closely with our clients as partners, not just vendors. Your success is our success, and we&apos;re committed to helping you achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Our Team</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Legal professionals, AI experts, and technologists working together to transform legal practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">Legal Experts</h3>
              <p className="text-white/70 font-sans">
                Attorneys and legal professionals with deep domain expertise
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">AI Researchers</h3>
              <p className="text-white/70 font-sans">
                Machine learning experts pushing the boundaries of legal AI
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">Engineers</h3>
              <p className="text-white/70 font-sans">
                Software engineers building robust, scalable platforms
              </p>
            </div>
          </div>

          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
              alt="Our Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif mb-6">Join Our Team</h2>
          <p className="text-xl text-white/70 mb-10 font-sans">
            We&apos;re building the future of legal technology. Join us in transforming how legal professionals work.
          </p>
          <Link
            href="/careers"
            className="inline-block bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors text-lg font-sans"
          >
            View Open Positions
          </Link>
        </div>
      </section>
    </div>
  );
}
