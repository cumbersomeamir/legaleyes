import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              How we protect and handle your data.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-white/60 mb-6 font-sans">
              Last updated: December 2024
            </p>
            <h2 className="text-4xl font-serif mb-6">Our Commitment to Privacy</h2>
            <p className="text-white/80 mb-6 font-sans">
              LegalEyes is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
            </p>
            <h3 className="text-3xl font-serif mb-4 mt-12">Information We Collect</h3>
            <p className="text-white/80 mb-6 font-sans">
              We collect information that you provide directly to us, such as when you create an account, use our services, or contact us for support.
            </p>
            <h3 className="text-3xl font-serif mb-4 mt-12">How We Use Your Information</h3>
            <p className="text-white/80 mb-6 font-sans">
              We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
            </p>
            <h3 className="text-3xl font-serif mb-4 mt-12">Data Security</h3>
            <p className="text-white/80 mb-6 font-sans">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <h3 className="text-3xl font-serif mb-4 mt-12">Your Rights</h3>
            <p className="text-white/80 mb-6 font-sans">
              You have the right to access, update, or delete your personal information at any time. You may also opt out of certain communications from us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
