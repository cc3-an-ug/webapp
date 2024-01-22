import '@cc3/design/style/globals.css';

import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import { Fonts } from '@cc3/design/lib/fonts';
import { BalancerProvider } from '@cc3/design/ui/balancer-provider';
import { Footer } from '@cc3/design/ui/footer';
import { Header } from '@cc3/design/ui/header';
import { ThemeProvider } from '@cc3/design/ui/theme-provider';

import { SiteConfig } from '@/config/site';

type RootLayoutProps = {
  children: ReactNode;
};

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
    locale: 'es-ES',
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

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es-ES" suppressHydrationWarning>
      <body className={Fonts}>
        <BalancerProvider>
          <ThemeProvider>
            <Header />
            <div className="flex min-h-screen flex-col justify-between">
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </BalancerProvider>
      </body>
    </html>
  );
}
