import '@/styles/globals.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { SiteConfig } from '@/config/site';

import { SatoshiFont } from './fonts';
import { RootLayoutFooter } from './footer';
import { RootLayoutHeader } from './header';
import { RootLayoutProvider } from './provider';

export const metadata: Metadata = {
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
      <body className={SatoshiFont.variable}>
        <RootLayoutProvider>
          <RootLayoutHeader />
          <div className="flex min-h-screen flex-col justify-between">
            <main className="relative scroll-mt-36 pt-16">
              <div className="relative mx-auto w-full max-w-screen-2xl lg:flex lg:items-start">
                <nav className="sticky top-16 hidden h-[calc(100vh-4rem)] shrink-0 border-r border-gray-200 lg:block dark:border-gray-800">
                  <div className="-ml-3 h-full overflow-y-scroll p-8 pl-16">
                    <div className="-ml-6 w-80">
                      <div>
                        <div className="ml-3 space-y-2 pl-3">
                          <div className="group flex h-8 items-center justify-between space-x-2 whitespace-nowrap rounded-md bg-violet-50 px-3 text-sm font-medium leading-none text-violet-900 dark:bg-violet-500/20 dark:text-violet-50">
                            <a
                              className="flex h-full grow items-center space-x-2"
                              href="/docs/getting-started-cddd76b7"
                            >
                              <span>Getting Started</span>
                            </a>
                          </div>
                          <div className="group flex h-8 items-center justify-between space-x-2 whitespace-nowrap rounded-md px-3 text-sm font-medium leading-none text-slate-600 hover:bg-gray-50 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-gray-900 dark:hover:text-slate-200">
                            <a
                              className="flex h-full grow items-center space-x-2"
                              href="/docs/concepts-ac167d19"
                            >
                              <span>Concepts</span>
                            </a>
                          </div>
                          <div className="ml-3 space-y-2 border-l border-gray-200 pl-3 dark:border-gray-800">
                            <div className="group flex h-8 items-center justify-between space-x-2 whitespace-nowrap rounded-md px-3 text-sm font-normal leading-none hover:bg-gray-50 hover:text-slate-600 dark:hover:bg-gray-900 dark:hover:text-slate-300">
                              <a
                                className="flex h-full grow items-center space-x-2"
                                href="/docs/concepts/how-contentlayer-works-da5b2220"
                              >
                                <span>How Contentlayer Works</span>
                              </a>
                            </div>
                            <div className="group flex h-8 items-center justify-between space-x-2 whitespace-nowrap rounded-md px-3 text-sm font-normal leading-none hover:bg-gray-50 hover:text-slate-600 dark:hover:bg-gray-900 dark:hover:text-slate-300">
                              <a
                                className="flex h-full grow items-center space-x-2"
                                href="/docs/concepts/content-modeling-dc68721f"
                              >
                                <span>Content Modeling</span>
                              </a>
                            </div>
                            <div className="group flex h-8 items-center justify-between space-x-2 whitespace-nowrap rounded-md px-3 text-sm font-normal leading-none hover:bg-gray-50 hover:text-slate-600 dark:hover:bg-gray-900 dark:hover:text-slate-300">
                              <a
                                className="flex h-full grow items-center space-x-2"
                                href="/docs/concepts/type-safety-e764dcd5"
                              >
                                <span>Type Safety</span>
                              </a>
                            </div>
                            <div className="group flex h-8 items-center justify-between space-x-2 whitespace-nowrap rounded-md px-3 text-sm font-normal leading-none hover:bg-gray-50 hover:text-slate-600 dark:hover:bg-gray-900 dark:hover:text-slate-300">
                              <a
                                className="flex h-full grow items-center space-x-2"
                                href="/docs/concepts/comparison-d7093dfb"
                              >
                                <span>Contentlayer vs X</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-t from-white/0 to-white/100 dark:from-gray-950/0 dark:to-gray-950/100" />
                  <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-white/0 to-white/100 dark:from-gray-950/0 dark:to-gray-950/100" />
                </nav>
                <div className="relative w-full flex-1 grow"></div>
                {children}
              </div>
            </main>
            <RootLayoutFooter />
          </div>
        </RootLayoutProvider>
      </body>
    </html>
  );
}
