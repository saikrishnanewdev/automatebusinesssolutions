import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AUTOMATE BUSINESS SOLUTIONS | Business Automation & Software Solutions',
  description: 'We build business apps, automation systems, integrations, Excel solutions, websites, and custom software that help businesses work smarter and grow faster.',
  keywords: [
    'Business Automation',
    'App Development',
    'Excel Automation',
    'System Integration',
    'WhatsApp Automation',
    'Custom Software',
    'Workflow Engine',
    'API Integration'
  ],
  openGraph: {
    title: 'AUTOMATE BUSINESS SOLUTIONS | WE AUTOMATE. YOU GROW.',
    description: 'We eliminate manual business overhead through custom software, automated workflows, and integrations.',
    type: 'website',
    siteName: 'AUTOMATE BUSINESS SOLUTIONS'
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
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#020B19] text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}