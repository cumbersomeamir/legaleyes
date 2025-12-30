import Link from 'next/link';
import Image from 'next/image';

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Guide
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Comprehensive guides to help you get the most out of LegalEyes. Learn best practices and advanced techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1920&q=80"
              alt="LegalEyes Guides"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6">Comprehensive Guides</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-sans">
              Step-by-step guides to help you master LegalEyes
            </p>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors bg-white/5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="relative w-full h-48 md:h-full rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"
                    alt="Getting Started"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-serif mb-3">Getting Started with LegalEyes</h2>
                  <p className="text-white/70 mb-4 font-sans">
                    A comprehensive guide to setting up your LegalEyes account, configuring your workspace, and getting started with the platform. Learn the basics of navigation, account settings, and your first AI-powered tasks.
                  </p>
                  <p className="text-white/70 mb-4 font-sans">
                    This guide covers everything from account creation to understanding the interface, setting up your first document repository, and making your first AI-powered query. Perfect for new users getting started with LegalEyes.
                  </p>
                  <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                    Read guide <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors bg-white/5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="relative w-full h-48 md:h-full rounded-lg overflow-hidden order-2 md:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80"
                    alt="AI Assistant Guide"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 order-1 md:order-2">
                  <h2 className="text-3xl font-serif mb-3">Using AI Assistant for Legal Research</h2>
                  <p className="text-white/70 mb-4 font-sans">
                    Learn how to effectively use the AI Assistant for legal research, document analysis, and drafting. This comprehensive guide covers query techniques, best practices, and advanced features.
                  </p>
                  <p className="text-white/70 mb-4 font-sans">
                    Discover how to craft effective queries, interpret AI responses, verify citations, and integrate AI assistance into your legal research workflow. Includes real-world examples and use cases.
                  </p>
                  <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                    Read guide <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors bg-white/5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="relative w-full h-48 md:h-full rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
                    alt="Document Management"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-serif mb-3">Best Practices for Document Management</h2>
                  <p className="text-white/70 mb-4 font-sans">
                    Tips and best practices for organizing and managing documents in Vault. Learn how to structure your document repository, use tags and folders effectively, and leverage AI-powered organization features.
                  </p>
                  <p className="text-white/70 mb-4 font-sans">
                    This guide covers document upload strategies, naming conventions, folder structures, search optimization, and bulk operations. Maximize the value of your document repository with proven organizational techniques.
                  </p>
                  <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                    Read guide <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors bg-white/5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="relative w-full h-48 md:h-full rounded-lg overflow-hidden order-2 md:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
                    alt="Custom Workflows"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 order-1 md:order-2">
                  <h2 className="text-3xl font-serif mb-3">Building Custom Workflows</h2>
                  <p className="text-white/70 mb-4 font-sans">
                    A step-by-step guide to creating custom workflows tailored to your firm&apos;s needs. Learn how to use the visual workflow builder, configure automation rules, and integrate workflows with your existing tools.
                  </p>
                  <p className="text-white/70 mb-4 font-sans">
                    This comprehensive guide covers workflow design principles, conditional logic, approval chains, error handling, and testing. Includes templates and examples for common legal workflows.
                  </p>
                  <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                    Read guide <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors bg-white/5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="relative w-full h-48 md:h-full rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80"
                    alt="Security Best Practices"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-serif mb-3">Security Best Practices</h2>
                  <p className="text-white/70 mb-4 font-sans">
                    Learn how to configure security settings, manage access controls, and protect sensitive legal information. This guide covers user permissions, data encryption, compliance settings, and security monitoring.
                  </p>
                  <p className="text-white/70 mb-4 font-sans">
                    Understand LegalEyes&apos; security architecture, learn how to configure role-based access control, set up audit logging, and implement security best practices for your organization.
                  </p>
                  <Link href="#" className="text-white/80 hover:text-white font-medium font-sans inline-flex items-center gap-2">
                    Read guide <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif mb-6">
            Need More Help?
          </h2>
          <p className="text-xl text-white/70 mb-10 font-sans">
            Our support team is here to help. Contact us for personalized assistance.
          </p>
          <Link
            href="/request-demo"
            className="inline-block bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors text-lg font-sans"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
}
