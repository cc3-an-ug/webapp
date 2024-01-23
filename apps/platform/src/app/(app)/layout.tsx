import type { ReactNode } from 'react';

import { Footer } from '@cc3/design/ui/footer';
import { Header } from '@cc3/design/ui/header';

export default function AppLayout({ children }: { children?: ReactNode }) {
  return (
    <div>
      <Header />
      <div className="flex min-h-screen flex-col justify-between">
        <main className="w-full pt-32">
          <div className="mx-auto flex w-full max-w-screen-2xl px-4 md:px-8 lg:px-16">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
