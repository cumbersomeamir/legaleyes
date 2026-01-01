import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-9xl font-serif mb-4">404</h1>
        <h2 className="text-4xl font-serif mb-6">Page Not Found</h2>
        <p className="text-xl text-white/70 mb-8 font-sans">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors font-sans"
          >
            Go Home
          </Link>
          <Link
            href="/request-demo"
            className="inline-block bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-colors font-sans"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </div>
  );
}

