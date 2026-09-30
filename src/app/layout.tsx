import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Autom Mate | Custom ERP, Mobile & Desktop Apps, WhatsApp AI Automation',
  description: 'Autom Mate engineers custom ERP systems, native Windows & mobile applications, web portals, WhatsApp AI chatbots, and process automation to eliminate manual business work.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  keywords: [
    'Autom Mate',
    'Automate Business Solutions',
    'Custom ERP Systems',
    'Windows Desktop Applications',
    'Custom Mobile Applications',
    'Custom Web Applications',
    'WhatsApp AI Automation',
    'Process Automation'
  ],
  openGraph: {
    title: 'Autom Mate | Custom ERP & Business Process Automation',
    description: 'Custom ERP systems, native Windows & mobile applications, web portals, and WhatsApp AI automation.',
    type: 'website',
    siteName: 'Autom Mate'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autom Mate | Custom Software & Process Automation',
    description: 'Custom ERP systems, desktop and mobile applications, and WhatsApp AI automation.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg-light text-dark antialiased font-sans">
        {children}
      </body>
    </html>
  );
}