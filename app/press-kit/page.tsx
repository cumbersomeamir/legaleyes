import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as genMeta } from '../lib/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = genMeta({
  title: 'Press Kit',
  description: 'Resources for media and press inquiries. Everything you need to write about LegalEyes.',
  path: '/press-kit',
});

export default function PressKitPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Press Kit
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Resources for media and press inquiries. Everything you need to write about LegalEyes.
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
              alt="Press Kit"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-5xl font-serif mb-8">About LegalEyes</h2>
              <p className="text-lg text-white/70 mb-6 font-sans">
                LegalEyes is transforming the legal industry by providing professional-class AI tools designed specifically for legal practice. We combine deep legal domain expertise with cutting-edge artificial intelligence to help law firms and legal teams work smarter, faster, and more effectively.
              </p>
              <p className="text-lg text-white/70 mb-6 font-sans">
                Founded in 2023, LegalEyes serves law firms of all sizes, from boutique practices to AmLaw 100 firms, as well as in-house legal teams at Fortune 500 companies. Our platform is used by thousands of legal professionals to accelerate document review, research, drafting, and analysis.
              </p>
              <p className="text-lg text-white/70 mb-8 font-sans">
                LegalEyes is backed by leading venture capital firms and has raised $50 million in Series A funding. The company is headquartered in San Francisco, California, with team members distributed across the United States.
              </p>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Media Contact</h3>
                <p className="text-white/70 font-sans">
                  For media inquiries, please contact:<br />
                  <a href="mailto:press@legaleyes.com" className="text-white/80 hover:text-white font-sans">press@legaleyes.com</a><br />
                  Phone: +1 (555) 123-4567
                </p>
              </div>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
                alt="LegalEyes Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Press Resources</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Download logos, images, and materials for your coverage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"
                  alt="Company Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-3">Company Logo</h3>
              <p className="text-white/70 mb-4 font-sans">
                High-resolution LegalEyes logos in PNG and SVG formats. Available in light and dark versions.
              </p>
              <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                Download Logo (PNG) <span>→</span>
              </Link>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80"
                  alt="Product Screenshots"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-3">Product Screenshots</h3>
              <p className="text-white/70 mb-4 font-sans">
                High-quality screenshots of the LegalEyes platform showing key features and interfaces.
              </p>
              <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                Download Screenshots <span>→</span>
              </Link>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80"
                  alt="Executive Headshots"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-3">Executive Headshots</h3>
              <p className="text-white/70 mb-4 font-sans">
                Professional headshots of LegalEyes executives and leadership team members.
              </p>
              <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                Download Headshots <span>→</span>
              </Link>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
                  alt="Company Fact Sheet"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-3">Company Fact Sheet</h3>
              <p className="text-white/70 mb-4 font-sans">
                Comprehensive fact sheet with company information, key statistics, and milestones.
              </p>
              <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                Download Fact Sheet <span>→</span>
              </Link>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80"
                  alt="Brand Guidelines"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-3">Brand Guidelines</h3>
              <p className="text-white/70 mb-4 font-sans">
                Complete brand guidelines including logo usage, color palette, typography, and brand voice.
              </p>
              <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                Download Guidelines <span>→</span>
              </Link>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
                  alt="Press Release Template"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-3">Press Releases</h3>
              <p className="text-white/70 mb-4 font-sans">
                Archive of recent press releases and announcements from LegalEyes.
              </p>
              <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                View Releases <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-serif mb-8 text-center">Key Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Founded</h3>
                <p className="text-white/70 font-sans">2023</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Headquarters</h3>
                <p className="text-white/70 font-sans">San Francisco, California</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Funding</h3>
                <p className="text-white/70 font-sans">$50M Series A</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif mb-3">Customers</h3>
                <p className="text-white/70 font-sans">Law firms and legal teams worldwide</p>
              </div>
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
                alt="LegalEyes Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif mb-6">
            Need Additional Resources?
          </h2>
          <p className="text-xl text-white/70 mb-10 font-sans">
            Contact our press team for interviews, quotes, or additional materials.
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
