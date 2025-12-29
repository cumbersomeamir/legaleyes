import Link from 'next/link';

export default function NewsroomPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Newsroom
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Latest news, updates, and announcements from LegalEyes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 max-w-4xl">
            <article className="border-b border-white/10 pb-12">
              <time className="text-white/50 text-sm font-sans">December 2024</time>
              <h2 className="text-4xl font-serif mt-4 mb-4">
                LegalEyes Launches Advanced AI Assistant for Legal Practice
              </h2>
              <p className="text-lg text-white/70 font-sans">
                LegalEyes announces the launch of its next-generation AI assistant, designed specifically for legal professionals. The new assistant provides enhanced document analysis, research capabilities, and drafting support.
              </p>
            </article>
            <article className="border-b border-white/10 pb-12">
              <time className="text-white/50 text-sm font-sans">November 2024</time>
              <h2 className="text-4xl font-serif mt-4 mb-4">
                Major Law Firm Partners with LegalEyes
              </h2>
              <p className="text-lg text-white/70 font-sans">
                A leading AmLaw 100 firm has selected LegalEyes to transform their document review and research processes, demonstrating the growing adoption of AI in legal practice.
              </p>
            </article>
            <article className="border-b border-white/10 pb-12">
              <time className="text-white/50 text-sm font-sans">October 2024</time>
              <h2 className="text-4xl font-serif mt-4 mb-4">
                LegalEyes Achieves SOC 2 Type II Certification
              </h2>
              <p className="text-lg text-white/70 font-sans">
                LegalEyes has achieved SOC 2 Type II certification, demonstrating our commitment to the highest standards of security and data protection for our clients.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
