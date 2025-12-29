import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Blog
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Insights, updates, and best practices for legal AI.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors">
              <div className="bg-white/5 h-48"></div>
              <div className="p-6">
                <time className="text-white/50 text-sm font-sans">December 15, 2024</time>
                <h2 className="text-2xl font-serif mt-2 mb-3">
                  The Future of AI in Legal Practice
                </h2>
                <p className="text-white/70 mb-4 font-sans">
                  Exploring how AI is transforming legal practice and what it means for lawyers and law firms.
                </p>
                <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                  Read more <span>→</span>
                </Link>
              </div>
            </article>
            <article className="border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors">
              <div className="bg-white/5 h-48"></div>
              <div className="p-6">
                <time className="text-white/50 text-sm font-sans">December 10, 2024</time>
                <h2 className="text-2xl font-serif mt-2 mb-3">
                  Best Practices for Document Review with AI
                </h2>
                <p className="text-white/70 mb-4 font-sans">
                  Learn how to effectively use AI tools for document review to improve accuracy and efficiency.
                </p>
                <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                  Read more <span>→</span>
                </Link>
              </div>
            </article>
            <article className="border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors">
              <div className="bg-white/5 h-48"></div>
              <div className="p-6">
                <time className="text-white/50 text-sm font-sans">December 5, 2024</time>
                <h2 className="text-2xl font-serif mt-2 mb-3">
                  Security and Privacy in Legal AI
                </h2>
                <p className="text-white/70 mb-4 font-sans">
                  Understanding the security measures and privacy protections essential for legal AI platforms.
                </p>
                <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                  Read more <span>→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
