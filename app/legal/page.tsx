import Link from 'next/link';

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Legal
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Terms of service and legal information.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-4xl font-serif mb-6">Terms of Service</h2>
            <p className="text-white/60 mb-6 font-sans">
              Last updated: December 2024
            </p>
            <p className="text-white/80 mb-6 font-sans">
              Please read these Terms of Service carefully before using LegalEyes. By accessing or using our service, you agree to be bound by these terms.
            </p>
            <h3 className="text-3xl font-serif mb-4 mt-12">1. Acceptance of Terms</h3>
            <p className="text-white/80 mb-6 font-sans">
              By accessing and using LegalEyes, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            <h3 className="text-3xl font-serif mb-4 mt-12">2. Use License</h3>
            <p className="text-white/80 mb-6 font-sans">
              Permission is granted to temporarily use LegalEyes for personal and commercial use. This is the grant of a license, not a transfer of title.
            </p>
            <h3 className="text-3xl font-serif mb-4 mt-12">3. User Account</h3>
            <p className="text-white/80 mb-6 font-sans">
              You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
