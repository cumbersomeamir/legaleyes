'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [platformOpen, setPlatformOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-[41px] left-0 right-0 z-[60] bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center text-2xl font-serif text-white">
              LegalEyes
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Platform Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setPlatformOpen(true)}
                onMouseLeave={() => setPlatformOpen(false)}
              >
                <button className="text-white/80 hover:text-white font-sans font-medium py-2 transition-colors">
                  Platform
                </button>
                {platformOpen && (
                  <>
                    <div className="absolute top-full left-0 w-full h-1"></div>
                    <div className="absolute top-full left-0 mt-1 w-96 bg-[#1a1a1a] rounded-lg shadow-xl border border-white/10 p-6 z-[100] pointer-events-auto">
                    <div className="space-y-4">
                      <Link href="/assistant" className="block group py-2 -mx-2 px-2 rounded hover:bg-white/5 transition-colors">
                        <div className="font-semibold text-white group-hover:text-white font-sans">Assistant</div>
                        <div className="text-sm text-white/60 mt-1 font-sans">Ask questions, analyze documents, and draft faster with domain-specific AI.</div>
                      </Link>
                      <Link href="/vault" className="block group py-2 -mx-2 px-2 rounded hover:bg-white/5 transition-colors">
                        <div className="font-semibold text-white group-hover:text-white font-sans">Vault</div>
                        <div className="text-sm text-white/60 mt-1 font-sans">Securely store, organize, and bulk-analyze legal documents.</div>
                      </Link>
                      <Link href="/knowledge" className="block group py-2 -mx-2 px-2 rounded hover:bg-white/5 transition-colors">
                        <div className="font-semibold text-white group-hover:text-white font-sans">Knowledge</div>
                        <div className="text-sm text-white/60 mt-1 font-sans">Research complex legal, regulatory, and tax questions across domains.</div>
                      </Link>
                      <Link href="/workflow" className="block group py-2 -mx-2 px-2 rounded hover:bg-white/5 transition-colors">
                        <div className="font-semibold text-white group-hover:text-white font-sans">Workflow</div>
                        <div className="text-sm text-white/60 mt-1 font-sans">Run pre-built workflows or build your own, tailored to your firm's needs.</div>
                      </Link>
                      <Link href="/microsoft-integration" className="block group py-2 -mx-2 px-2 rounded hover:bg-white/5 transition-colors">
                        <div className="font-semibold text-white group-hover:text-white font-sans">Microsoft Integration</div>
                        <div className="text-sm text-white/60 mt-1 font-sans">Legal intelligence for contract review, drafting, emails, and documents in Word, Outlook, and SharePoint.</div>
                      </Link>
                      <Link href="/partnership" className="block group py-2 -mx-2 px-2 rounded hover:bg-white/5 transition-colors">
                        <div className="font-semibold text-white group-hover:text-white font-sans">Partnership</div>
                        <div className="text-sm text-white/60 mt-1 font-sans">Explore our product and go-to-market partners pushing the boundaries of what's possible.</div>
                      </Link>
                    </div>
                    </div>
                  </>
                )}
              </div>

              {/* Solution Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setSolutionOpen(true)}
                onMouseLeave={() => setSolutionOpen(false)}
              >
                <button className="text-white/80 hover:text-white font-sans font-medium py-2 transition-colors">
                  Solution
                </button>
                {solutionOpen && (
                  <>
                    <div className="absolute top-full left-0 w-full h-1"></div>
                    <div className="absolute top-full left-0 mt-1 w-96 bg-[#1a1a1a] rounded-lg shadow-xl border border-white/10 p-6 z-[100] pointer-events-auto">
                    <div className="space-y-4">
                      <Link href="/innovation" className="block group py-2 -mx-2 px-2 rounded hover:bg-white/5 transition-colors">
                        <div className="font-semibold text-white group-hover:text-white font-sans">Innovation</div>
                        <div className="text-sm text-white/60 mt-1 font-sans">Scale expertise and impact to drive firmwide transformation.</div>
                      </Link>
                      <Link href="/in-house" className="block group py-2 -mx-2 px-2 rounded hover:bg-white/5 transition-colors">
                        <div className="font-semibold text-white group-hover:text-white font-sans">In-House</div>
                        <div className="text-sm text-white/60 mt-1 font-sans">Streamline work and shift focus to strategy and speed.</div>
                      </Link>
                      <Link href="/transactional" className="block group py-2 -mx-2 px-2 rounded hover:bg-white/5 transition-colors">
                        <div className="font-semibold text-white group-hover:text-white font-sans">Transactional</div>
                        <div className="text-sm text-white/60 mt-1 font-sans">Accelerate due diligence, contract analysis, and review with precision and control.</div>
                      </Link>
                      <Link href="/litigation" className="block group py-2 -mx-2 px-2 rounded hover:bg-white/5 transition-colors">
                        <div className="font-semibold text-white group-hover:text-white font-sans">Litigation</div>
                        <div className="text-sm text-white/60 mt-1 font-sans">Cut manual effort, focus on strategy, and deliver stronger outcomes.</div>
                      </Link>
                      <Link href="/collaboration" className="block group py-2 -mx-2 px-2 rounded hover:bg-white/5 transition-colors">
                        <div className="font-semibold text-white group-hover:text-white font-sans">Collaboration</div>
                        <div className="text-sm text-white/60 mt-1 font-sans">Enhance team collaboration with AI-powered tools.</div>
                      </Link>
                    </div>
                    </div>
                  </>
                )}
              </div>

              <Link href="/customer" className="text-white/80 hover:text-white font-sans font-medium transition-colors">
                Customer
              </Link>
              <Link href="/security" className="text-white/80 hover:text-white font-sans font-medium transition-colors">
                Security
              </Link>

              {/* Resources Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                <button className="text-white/80 hover:text-white font-sans font-medium py-2 transition-colors">
                  Resources
                </button>
                {resourcesOpen && (
                  <>
                    <div className="absolute top-full right-0 w-full h-1"></div>
                    <div className="absolute top-full right-0 mt-1 w-64 bg-[#1a1a1a] rounded-lg shadow-xl border border-white/10 p-6 z-[100] pointer-events-auto">
                    <div className="space-y-1">
                      <Link href="/blog" className="block text-white/80 hover:text-white font-sans font-medium transition-colors py-2 px-2 -mx-2 rounded hover:bg-white/5">Blog</Link>
                      <Link href="/video" className="block text-white/80 hover:text-white font-sans font-medium transition-colors py-2 px-2 -mx-2 rounded hover:bg-white/5">Video</Link>
                      <Link href="/guide" className="block text-white/80 hover:text-white font-sans font-medium transition-colors py-2 px-2 -mx-2 rounded hover:bg-white/5">Guide</Link>
                    </div>
                    </div>
                  </>
                )}
              </div>

              {/* About Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button className="text-white/80 hover:text-white font-sans font-medium py-2 transition-colors">
                  About
                </button>
                {aboutOpen && (
                  <>
                    <div className="absolute top-full right-0 w-full h-1"></div>
                    <div className="absolute top-full right-0 mt-1 w-64 bg-[#1a1a1a] rounded-lg shadow-xl border border-white/10 p-6 z-[100] pointer-events-auto">
                    <div className="space-y-1">
                      <Link href="/company" className="block text-white/80 hover:text-white font-sans font-medium transition-colors py-2 px-2 -mx-2 rounded hover:bg-white/5">Company</Link>
                      <Link href="/newsroom" className="block text-white/80 hover:text-white font-sans font-medium transition-colors py-2 px-2 -mx-2 rounded hover:bg-white/5">Newsroom</Link>
                      <Link href="/careers" className="block text-white/80 hover:text-white font-sans font-medium transition-colors py-2 px-2 -mx-2 rounded hover:bg-white/5">Careers</Link>
                      <Link href="/law-school" className="block text-white/80 hover:text-white font-sans font-medium transition-colors py-2 px-2 -mx-2 rounded hover:bg-white/5">Law School</Link>
                    </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link href="/login" className="text-white/80 hover:text-white font-sans font-medium transition-colors">
                Login
              </Link>
              <Link href="/request-demo" className="bg-white text-[#0a0a0a] px-6 py-2.5 rounded-lg font-medium hover:bg-white/90 transition-colors font-sans">
                Request a Demo
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 space-y-4 border-t border-white/10">
              <div>
                <button className="w-full text-left font-semibold text-white py-2 font-sans">Platform</button>
                <div className="pl-4 space-y-2 mt-2">
                  <Link href="/assistant" className="block text-white/60 py-1 font-sans">Assistant</Link>
                  <Link href="/vault" className="block text-white/60 py-1 font-sans">Vault</Link>
                  <Link href="/knowledge" className="block text-white/60 py-1 font-sans">Knowledge</Link>
                  <Link href="/workflow" className="block text-white/60 py-1 font-sans">Workflow</Link>
                  <Link href="/microsoft-integration" className="block text-white/60 py-1 font-sans">Microsoft Integration</Link>
                  <Link href="/partnership" className="block text-white/60 py-1 font-sans">Partnership</Link>
                </div>
              </div>
              <div>
                <button className="w-full text-left font-semibold text-white py-2 font-sans">Solution</button>
                <div className="pl-4 space-y-2 mt-2">
                  <Link href="/innovation" className="block text-white/60 py-1 font-sans">Innovation</Link>
                  <Link href="/in-house" className="block text-white/60 py-1 font-sans">In-House</Link>
                  <Link href="/transactional" className="block text-white/60 py-1 font-sans">Transactional</Link>
                  <Link href="/litigation" className="block text-white/60 py-1 font-sans">Litigation</Link>
                  <Link href="/collaboration" className="block text-white/60 py-1 font-sans">Collaboration</Link>
                </div>
              </div>
              <Link href="/customer" className="block font-semibold text-white py-2 font-sans">Customer</Link>
              <Link href="/security" className="block font-semibold text-white py-2 font-sans">Security</Link>
              <div>
                <button className="w-full text-left font-semibold text-white py-2 font-sans">Resources</button>
                <div className="pl-4 space-y-2 mt-2">
                  <Link href="/blog" className="block text-white/60 py-1 font-sans">Blog</Link>
                  <Link href="/video" className="block text-white/60 py-1 font-sans">Video</Link>
                  <Link href="/guide" className="block text-white/60 py-1 font-sans">Guide</Link>
                </div>
              </div>
              <div>
                <button className="w-full text-left font-semibold text-white py-2 font-sans">About</button>
                <div className="pl-4 space-y-2 mt-2">
                  <Link href="/company" className="block text-white/60 py-1 font-sans">Company</Link>
                  <Link href="/newsroom" className="block text-white/60 py-1 font-sans">Newsroom</Link>
                  <Link href="/careers" className="block text-white/60 py-1 font-sans">Careers</Link>
                  <Link href="/law-school" className="block text-white/60 py-1 font-sans">Law School</Link>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 space-y-2">
                <Link href="/login" className="block text-white/80 py-2 font-sans">Login</Link>
                <Link href="/request-demo" className="block bg-white text-[#0a0a0a] px-6 py-3 rounded-lg font-medium text-center font-sans">
                  Request a Demo
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
