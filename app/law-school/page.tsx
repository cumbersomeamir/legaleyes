import Link from 'next/link';
import Image from 'next/image';

export default function LawSchoolPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Law School
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Empowering the next generation of legal professionals with AI. Prepare your students for the future of legal practice.
            </p>
            <Link
              href="/request-demo"
              className="inline-block bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors font-sans"
            >
              Request Information
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1920&q=80"
              alt="Law School Education"
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
                LegalEyes for Law Schools
              </h2>
              <p className="text-lg text-white/70 mb-6 font-sans">
                Prepare your students for the future of legal practice with access to professional-grade AI tools. LegalEyes offers special programs for law schools to help students learn how to work effectively with AI in legal practice.
              </p>
              <p className="text-lg text-white/70 mb-6 font-sans">
                Our law school program provides educational licenses, curriculum resources, training materials, and hands-on experience with the same AI tools used by leading law firms. Students learn not just about AI, but how to use it effectively in their future legal careers.
              </p>
              <p className="text-lg text-white/70 mb-8 font-sans">
                We work with law schools to integrate AI education into the curriculum, providing workshops, guest lectures, and research collaboration opportunities. Our goal is to ensure the next generation of lawyers is prepared for the AI-enhanced legal practice of tomorrow.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Educational licenses for students and faculty</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Curriculum resources and training materials</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Workshops and guest lectures</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/60 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-sans">Research collaboration opportunities</span>
                </li>
              </ul>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
                alt="Law Students"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Program Features</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Comprehensive resources for law school education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Educational Licenses</h3>
              <p className="text-white/70 mb-4 font-sans">
                Free or discounted licenses for students and faculty, providing full access to LegalEyes platform features. Students can use the same professional-grade tools they&apos;ll encounter in practice.
              </p>
              <p className="text-white/70 font-sans">
                Licenses include access to all platform features, training resources, and support. Faculty licenses enable professors to integrate AI tools into their teaching and research.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Curriculum Resources</h3>
              <p className="text-white/70 mb-4 font-sans">
                Comprehensive curriculum materials including lesson plans, case studies, exercises, and assessment tools. Resources are designed to integrate seamlessly into existing law school courses.
              </p>
              <p className="text-white/70 font-sans">
                Materials cover topics from AI fundamentals to practical applications in legal research, document review, contract analysis, and more. All resources are regularly updated to reflect the latest developments.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Workshops & Lectures</h3>
              <p className="text-white/70 mb-4 font-sans">
                On-campus workshops and guest lectures by LegalEyes experts. Topics include AI fundamentals, practical applications, ethical considerations, and career preparation.
              </p>
              <p className="text-white/70 font-sans">
                Workshops can be tailored to specific courses or student interests. Guest lectures provide real-world perspectives on AI in legal practice from industry experts.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Research Collaboration</h3>
              <p className="text-white/70 mb-4 font-sans">
                Opportunities for faculty and students to collaborate on research projects exploring AI in legal practice. Access to data, tools, and expertise to support academic research.
              </p>
              <p className="text-white/70 font-sans">
                Research partnerships can lead to publications, conference presentations, and contributions to the field of legal AI. We support academic research that advances understanding of AI in law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Partner Law Schools</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Leading law schools preparing students for the future of legal practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif mb-4">Top 20 Law School</h3>
              <p className="text-white/70 mb-4 font-sans">
                &quot;LegalEyes has been instrumental in preparing our students for modern legal practice. The hands-on experience with professional AI tools gives them a significant advantage when they enter the workforce.&quot;
              </p>
              <p className="text-sm text-white/50 font-sans">— Professor of Legal Technology</p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif mb-4">Regional Law School</h3>
              <p className="text-white/70 mb-4 font-sans">
                &quot;The curriculum resources and training materials have made it easy to integrate AI education into our courses. Our students are now better prepared for the evolving legal profession.&quot;
              </p>
              <p className="text-sm text-white/50 font-sans">— Dean of Academic Affairs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif mb-6">
            Prepare Your Students for the Future
          </h2>
          <p className="text-xl text-white/70 mb-10 font-sans">
            Learn more about our law school program and how we can help prepare your students for AI-enhanced legal practice.
          </p>
          <Link
            href="/request-demo"
            className="inline-block bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors text-lg font-sans"
          >
            Request Program Information
          </Link>
        </div>
      </section>
    </div>
  );
}
