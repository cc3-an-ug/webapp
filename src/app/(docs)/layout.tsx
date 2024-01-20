import type { ReactNode } from 'react';

import { DocsAside } from '@/components/docs-aside';

export const runtime = 'edge';

export const dynamic = 'force-dynamic';

export const revalidate = 0;

export default function DocsLayout({ children }: { children?: ReactNode }) {
  return (
    <main className="w-full pt-16">
      <div className="mx-auto flex w-full max-w-screen-2xl px-4 md:px-8 lg:px-16">
        <DocsAside />
        <div className="w-full lg:flex lg:w-[calc(100%-20rem)] lg:items-start">
          {children}
        </div>
      </div>
    </main>
  );
}
