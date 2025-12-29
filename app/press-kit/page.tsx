import Link from 'next/link';

export default function PressKitPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl font-serif mb-8 leading-tight">
              Press Kit
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-10 font-sans">
              Resources for media and press inquiries.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif mb-6">About LegalEyes</h2>
              <p className="text-lg text-white/70 mb-6 font-sans">
                LegalEyes is transforming the legal industry by providing professional-class AI tools designed specifically for legal practice. We combine deep legal domain expertise with cutting-edge artificial intelligence.
              </p>
              <h3 className="text-3xl font-serif mb-4 mt-12">Media Contact</h3>
              <p className="text-white/70 font-sans">
                For media inquiries, please contact:<br />
                <a href="mailto:press@legaleyes.com" className="text-white/80 hover:text-white font-sans">press@legaleyes.com</a>
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-serif mb-6">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-white/80 hover:text-white font-sans inline-flex items-center gap-2">
                    Company Logo (PNG) <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white font-sans inline-flex items-center gap-2">
                    Company Logo (SVG) <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white font-sans inline-flex items-center gap-2">
                    Product Screenshots <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white font-sans inline-flex items-center gap-2">
                    Executive Headshots <span>→</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white font-sans inline-flex items-center gap-2">
                    Company Fact Sheet <span>→</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
