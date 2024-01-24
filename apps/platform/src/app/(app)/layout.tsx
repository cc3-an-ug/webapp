import type { ReactNode } from 'react';

import { Footer } from '@cc3/design/ui/footer';
import { Header } from '@cc3/design/ui/header';

import { getSession } from '@/server/session';

export default async function AppLayout({
  children,
}: {
  children?: ReactNode;
}) {
  const user = await getSession();

  return (
    <div>
      <Header variant="platform" email={user.email} />
      <div className="flex min-h-screen flex-col justify-between">
        <main className="w-full pb-8 pt-32">
          <div className="mx-auto flex w-full max-w-screen-2xl px-4 md:px-8 lg:px-16">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
