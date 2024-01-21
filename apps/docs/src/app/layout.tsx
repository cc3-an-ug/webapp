import '@cc3/design/style/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

import { BalancerProvider } from '@cc3/design/ui/balancer-provider';

import { SiteConfig } from '@/config/site';

const InterFont = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
});

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  colorScheme: 'light',
  metadataBase: new URL(SiteConfig.url),
  description: SiteConfig.description,
  title: {
    default: SiteConfig.name,
    template: `%s | ${SiteConfig.name}`,
  },
  viewport: {
    initialScale: 1,
    height: 'device-height',
    width: 'device-width',
  },
  keywords: [
    'Web',
    'Development',
    'Agency',
    'Labs',
    'Design',
    'Software',
    'Engineering',
    'Consulting',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SiteConfig.url,
    title: SiteConfig.name,
    siteName: SiteConfig.name,
    description: SiteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: SiteConfig.name,
    description: SiteConfig.description,
  },
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={InterFont.className}>
        <BalancerProvider>{children}</BalancerProvider>
      </body>
    </html>
  );
}
