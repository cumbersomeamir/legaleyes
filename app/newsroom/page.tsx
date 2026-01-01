import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as genMeta } from '../lib/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = genMeta({
  title: 'Newsroom',
  description: 'Latest news, updates, and announcements from LegalEyes.',
  path: '/newsroom',
});

export default function NewsroomPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
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

      {/* Hero Image */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
              alt="LegalEyes Newsroom"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 max-w-4xl">
            <article className="border-b border-white/10 pb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="relative w-full h-48 md:h-full rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"
                    alt="AI Assistant Launch"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <time className="text-white/50 text-sm font-sans">December 2024</time>
                  <h2 className="text-4xl font-serif mt-4 mb-4">
                    LegalEyes Launches Advanced AI Assistant for Legal Practice
                  </h2>
                  <p className="text-lg text-white/70 mb-4 font-sans">
                    LegalEyes announces the launch of its next-generation AI assistant, designed specifically for legal professionals. The new assistant provides enhanced document analysis, research capabilities, and drafting support, enabling attorneys to work more efficiently and deliver better client service.
                  </p>
                  <p className="text-lg text-white/70 font-sans">
                    The AI assistant leverages advanced large language models trained on millions of legal documents, enabling it to understand legal context, terminology, and workflows. Early adopters report significant time savings and improved work quality.
                  </p>
                </div>
              </div>
            </article>

            <article className="border-b border-white/10 pb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="relative w-full h-48 md:h-full rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80"
                    alt="Major Law Firm Partnership"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <time className="text-white/50 text-sm font-sans">November 2024</time>
                  <h2 className="text-4xl font-serif mt-4 mb-4">
                    Major Law Firm Partners with LegalEyes
                  </h2>
                  <p className="text-lg text-white/70 mb-4 font-sans">
                    A leading AmLaw 100 firm has selected LegalEyes to transform their document review and research processes, demonstrating the growing adoption of AI in legal practice. The partnership will enable the firm to handle larger caseloads while maintaining quality and reducing costs.
                  </p>
                  <p className="text-lg text-white/70 font-sans">
                    The firm plans to deploy LegalEyes across multiple practice groups, starting with transactional and litigation teams. Initial results show significant improvements in efficiency and attorney satisfaction.
                  </p>
                </div>
              </div>
            </article>

            <article className="border-b border-white/10 pb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="relative w-full h-48 md:h-full rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80"
                    alt="SOC 2 Certification"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <time className="text-white/50 text-sm font-sans">October 2024</time>
                  <h2 className="text-4xl font-serif mt-4 mb-4">
                    LegalEyes Achieves SOC 2 Type II Certification
                  </h2>
                  <p className="text-lg text-white/70 mb-4 font-sans">
                    LegalEyes has achieved SOC 2 Type II certification, demonstrating our commitment to the highest standards of security and data protection for our clients. The certification covers security, availability, processing integrity, confidentiality, and privacy.
                  </p>
                  <p className="text-lg text-white/70 font-sans">
                    This achievement validates LegalEyes&apos; security practices and provides assurance to enterprise customers that their sensitive legal data is protected with industry-leading security measures.
                  </p>
                </div>
              </div>
            </article>

            <article>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="relative w-full h-48 md:h-full rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
                    alt="Series A Funding"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <time className="text-white/50 text-sm font-sans">September 2024</time>
                  <h2 className="text-4xl font-serif mt-4 mb-4">
                    LegalEyes Raises $50M Series A to Accelerate Legal AI Innovation
                  </h2>
                  <p className="text-lg text-white/70 mb-4 font-sans">
                    LegalEyes has closed a $50 million Series A funding round led by leading venture capital firms. The funding will be used to accelerate product development, expand the team, and scale operations to meet growing demand.
                  </p>
                  <p className="text-lg text-white/70 font-sans">
                    The investment reflects strong confidence in LegalEyes&apos; vision and execution, as well as the significant market opportunity in legal AI technology.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif mb-6">Press Inquiries</h2>
          <p className="text-xl text-white/70 mb-10 font-sans">
            For media inquiries, please contact our press team.
          </p>
          <Link
            href="/request-demo"
            className="inline-block bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors text-lg font-sans"
          >
            Contact Press Team
          </Link>
        </div>
      </section>
    </div>
  );
}
