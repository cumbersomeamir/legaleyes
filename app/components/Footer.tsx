import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-white mb-6">
            Unlock Professional Class AI for Your Firm
          </h2>
          <Link
            href="/request-demo"
            className="inline-block bg-white text-[#0a0a0a] px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors font-sans"
          >
            Request a Demo
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Platform */}
          <div>
            <h3 className="font-semibold text-white mb-4 font-sans">Platform</h3>
            <ul className="space-y-3">
              <li><Link href="/assistant" className="text-white/60 hover:text-white font-sans inline-flex items-center gap-1">Assistant <span>→</span></Link></li>
              <li><Link href="/vault" className="text-white/60 hover:text-white font-sans inline-flex items-center gap-1">Vault <span>→</span></Link></li>
              <li><Link href="/knowledge" className="text-white/60 hover:text-white font-sans inline-flex items-center gap-1">Knowledge <span>→</span></Link></li>
              <li><Link href="/workflow" className="text-white/60 hover:text-white font-sans inline-flex items-center gap-1">Workflow <span>→</span></Link></li>
              <li><Link href="/microsoft-integration" className="text-white/60 hover:text-white font-sans inline-flex items-center gap-1">Microsoft Integration <span>→</span></Link></li>
              <li><Link href="/partnership" className="text-white/60 hover:text-white font-sans inline-flex items-center gap-1">Partnership <span>→</span></Link></li>
            </ul>
          </div>

          {/* Solution */}
          <div>
            <h3 className="font-semibold text-white mb-4 font-sans">Solution</h3>
            <ul className="space-y-3">
              <li><Link href="/innovation" className="text-white/60 hover:text-white font-sans inline-flex items-center gap-1">Innovation <span>→</span></Link></li>
              <li><Link href="/in-house" className="text-white/60 hover:text-white font-sans inline-flex items-center gap-1">In-House <span>→</span></Link></li>
              <li><Link href="/transactional" className="text-white/60 hover:text-white font-sans inline-flex items-center gap-1">Transactional <span>→</span></Link></li>
              <li><Link href="/litigation" className="text-white/60 hover:text-white font-sans inline-flex items-center gap-1">Litigation <span>→</span></Link></li>
              <li><Link href="/collaboration" className="text-white/60 hover:text-white font-sans inline-flex items-center gap-1">Collaboration <span>→</span></Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4 font-sans">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/customer" className="text-white/60 hover:text-white font-sans inline-flex items-center gap-1">Customer <span>→</span></Link></li>
              <li><Link href="/security" className="text-white/60 hover:text-white font-sans inline-flex items-center gap-1">Security <span>→</span></Link></li>
              <li><Link href="/company" className="text-white/60 hover:text-white font-sans inline-flex items-center gap-1">Company <span>→</span></Link></li>
              <li><Link href="/newsroom" className="text-white/60 hover:text-white font-sans inline-flex items-center gap-1">Newsroom <span>→</span></Link></li>
              <li><Link href="/careers" className="text-white/60 hover:text-white font-sans inline-flex items-center gap-1">Careers <span>→</span></Link></li>
              <li><Link href="/law-school" className="text-white/60 hover:text-white font-sans inline-flex items-center gap-1">Law School <span>→</span></Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4 font-sans">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-white/60 hover:text-white font-sans inline-flex items-center gap-1">Blog <span>→</span></Link></li>
              <li><Link href="/video" className="text-white/60 hover:text-white font-sans inline-flex items-center gap-1">Video <span>→</span></Link></li>
              <li><Link href="/guide" className="text-white/60 hover:text-white font-sans inline-flex items-center gap-1">Guide <span>→</span></Link></li>
              <li><Link href="/legal" className="text-white/60 hover:text-white font-sans inline-flex items-center gap-1">Legal <span>→</span></Link></li>
              <li><Link href="/privacy-policy" className="text-white/60 hover:text-white font-sans inline-flex items-center gap-1">Privacy Policy <span>→</span></Link></li>
              <li><Link href="/press-kit" className="text-white/60 hover:text-white font-sans inline-flex items-center gap-1">Press Kit <span>→</span></Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-white/60 text-sm font-sans">
            Copyright © 2025 LegalEyes Corporation. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <span className="sr-only">X</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <span className="sr-only">YouTube</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
