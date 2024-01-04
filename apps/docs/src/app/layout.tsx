import '@cc3/design/style/globals.css';

import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import type { ReactNode } from 'react';

import { BalancerProvider } from '@cc3/design/ui/balancer-provider';
import { Button } from '@cc3/design/ui/button';
import { Search } from '@cc3/design/ui/icons';

import { SiteConfig } from '@/config/site';

const WorkSansFont = Work_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans2',
});

const SatoshiFont = localFont({
  src: [
    {
      path: '../../public/fonts/Satoshi-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Satoshi-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={SatoshiFont.className}>
        <BalancerProvider>
          <header className="bg-background dark:bg-background/80 sticky top-0 h-16 w-full border-b backdrop-blur transition-colors">
            <div className="container flex h-full items-center justify-between">
              <span className="text-2xl font-bold tracking-wide">CC3</span>
              <Button
                variant="outline"
                className="relative w-80 items-center justify-start pl-10"
              >
                <Search className="text-muted-foreground absolute left-2 h-4 w-4" />
                Search...
                <span className="absolute right-2 text-xs font-semibold">
                  ⌘K
                </span>
              </Button>
            </div>
          </header>
          {children}
          <footer></footer>
        </BalancerProvider>
      </body>
    </html>
  );
}
