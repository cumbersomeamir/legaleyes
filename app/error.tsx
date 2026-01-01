'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console or error tracking service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-serif mb-4">Something went wrong</h1>
        <p className="text-xl text-white/70 mb-8 font-sans">
          We&apos;re sorry, but something unexpected happened. Please try again.
        </p>
        {error.digest && (
          <p className="text-sm text-white/40 mb-8 font-mono">
            Error ID: {error.digest}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-block bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors font-sans"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-block bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-colors font-sans"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

