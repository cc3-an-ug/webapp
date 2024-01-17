import '@/styles/globals.css';

import clsx from 'clsx';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Provider } from '@/components/provider';
import { SiteConfig } from '@/config/site';

import { JetBrainsMonoFont, SatoshiFont } from './fonts';

export const viewport: Viewport = {
  initialScale: 1,
  height: 'device-height',
  width: 'device-width',
};

export const metadata: Metadata = {
  metadataBase: new URL(SiteConfig.url),
  description: SiteConfig.description,
  title: {
    default: SiteConfig.name,
    template: `%s | ${SiteConfig.name}`,
  },
  keywords: [
    'Docs',
    'CC3',
    'Galileo',
    'Labs',
    'Proyectos',
    'Software',
    'Ingeniería',
    'Universidad',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
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

export default async function RootLayout({
  children,
}: {
  children?: ReactNode;
}) {
  return (
    <html lang="es_ES" className="dark" suppressHydrationWarning>
      <body className={clsx(SatoshiFont.variable, JetBrainsMonoFont.variable)}>
        <Provider>
          <Header />
          <div className="flex min-h-screen flex-col justify-between">
            {children}
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
