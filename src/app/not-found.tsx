import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-inner">
        <span className="not-found-code">404</span>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-sub">
          Sorry, that page doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="not-found-cta">Back to Home</Link>
      </div>
    </main>
  );
}
