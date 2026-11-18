import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg-light text-dark flex items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">404 — Page not found</p>
        <h1 className="text-3xl font-bold tracking-tight">This page doesn&apos;t exist.</h1>
        <p className="text-base text-secondary leading-relaxed">
          The link you followed may be broken, or the page may have moved.
          Head back to the Automate Business Solutions homepage to explore our
          custom ERP systems, apps and WhatsApp AI automation.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Back to homepage
          </Link>
          <Link href="/#contact" className="btn-secondary">
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
