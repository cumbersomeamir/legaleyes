import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Blog
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Insights, updates, and best practices for legal AI. Stay informed about the latest developments in legal technology.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors bg-white/5">
              <div className="relative w-full h-48">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                  alt="The Future of AI in Legal Practice"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <time className="text-white/50 text-sm font-sans">December 15, 2024</time>
                <h2 className="text-2xl font-serif mt-2 mb-3">
                  The Future of AI in Legal Practice
                </h2>
                <p className="text-white/70 mb-4 font-sans">
                  Exploring how AI is transforming legal practice and what it means for lawyers and law firms. From document review to legal research, AI is reshaping how legal work gets done.
                </p>
                <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                  Read more <span>→</span>
                </Link>
              </div>
            </article>

            <article className="border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors bg-white/5">
              <div className="relative w-full h-48">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                  alt="Best Practices for Document Review with AI"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <time className="text-white/50 text-sm font-sans">December 10, 2024</time>
                <h2 className="text-2xl font-serif mt-2 mb-3">
                  Best Practices for Document Review with AI
                </h2>
                <p className="text-white/70 mb-4 font-sans">
                  Learn how to effectively use AI tools for document review to improve accuracy and efficiency. Discover proven strategies for getting the most out of AI-powered document analysis.
                </p>
                <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                  Read more <span>→</span>
                </Link>
              </div>
            </article>

            <article className="border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors bg-white/5">
              <div className="relative w-full h-48">
                <Image
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
                  alt="Security and Privacy in Legal AI"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <time className="text-white/50 text-sm font-sans">December 5, 2024</time>
                <h2 className="text-2xl font-serif mt-2 mb-3">
                  Security and Privacy in Legal AI
                </h2>
                <p className="text-white/70 mb-4 font-sans">
                  Understanding the security measures and privacy protections essential for legal AI platforms. Learn what to look for when evaluating AI solutions for your firm.
                </p>
                <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                  Read more <span>→</span>
                </Link>
              </div>
            </article>

            <article className="border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors bg-white/5">
              <div className="relative w-full h-48">
                <Image
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
                  alt="AI-Powered Legal Research"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <time className="text-white/50 text-sm font-sans">November 28, 2024</time>
                <h2 className="text-2xl font-serif mt-2 mb-3">
                  AI-Powered Legal Research: A Game Changer
                </h2>
                <p className="text-white/70 mb-4 font-sans">
                  How AI is revolutionizing legal research, making it faster and more comprehensive. Discover how modern AI tools can help you find relevant cases and statutes more efficiently.
                </p>
                <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                  Read more <span>→</span>
                </Link>
              </div>
            </article>

            <article className="border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors bg-white/5">
              <div className="relative w-full h-48">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                  alt="Contract Analysis with AI"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <time className="text-white/50 text-sm font-sans">November 20, 2024</time>
                <h2 className="text-2xl font-serif mt-2 mb-3">
                  Contract Analysis with AI: Speed and Accuracy
                </h2>
                <p className="text-white/70 mb-4 font-sans">
                  Learn how AI can accelerate contract review while improving accuracy. Explore techniques for using AI to identify risks, extract key terms, and streamline contract workflows.
                </p>
                <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                  Read more <span>→</span>
                </Link>
              </div>
            </article>

            <article className="border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors bg-white/5">
              <div className="relative w-full h-48">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="ROI of Legal AI"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <time className="text-white/50 text-sm font-sans">November 15, 2024</time>
                <h2 className="text-2xl font-serif mt-2 mb-3">
                  Measuring the ROI of Legal AI
                </h2>
                <p className="text-white/70 mb-4 font-sans">
                  How to measure and demonstrate the return on investment from legal AI tools. Learn what metrics matter and how to track the impact of AI on your practice.
                </p>
                <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                  Read more <span>→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-white/70 mb-10 font-sans">
            Subscribe to our newsletter to receive the latest insights on legal AI and technology.
          </p>
          <Link
            href="/request-demo"
            className="inline-block bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors text-lg font-sans"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </section>
    </div>
  );
}
