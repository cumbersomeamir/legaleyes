import { generateMetadata as genMeta } from '../lib/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = genMeta({
  title: 'Login',
  description: 'Access your LegalEyes account to access your workspace.',
  path: '/login',
});

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

