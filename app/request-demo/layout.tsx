import { generateMetadata as genMeta } from '../lib/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = genMeta({
  title: 'Request a Demo',
  description: 'See how LegalEyes can transform your legal practice. Schedule a personalized demonstration with our team.',
  path: '/request-demo',
});

export default function RequestDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

