import type { ReactNode } from 'react';

import { Cpu } from '@cc3/design/ui/icons';
import { ThemeToggle } from '@cc3/design/ui/theme-toggle';

export default function AuthLayout({ children }: { children?: ReactNode }) {
  return (
    <main className="flex h-svh w-full flex-col justify-center md:flex-row-reverse md:justify-start">
      <section className="mx-auto flex w-full items-start px-4 md:w-1/3 md:items-center md:px-0">
        <div className="bg-background relative mx-auto my-auto w-full min-w-min max-w-sm md:-left-10 md:mx-0">
          <div className="flex items-center gap-2 py-4 md:px-4">
            <span className="bg-tertiary text-tertiary-foreground flex items-center justify-center rounded-full p-2">
              <Cpu className="h-auto w-8" strokeWidth="1.5" />
            </span>
            <span className="text-2xl font-semibold tracking-tighter">
              CC3 AN
            </span>
          </div>
        </div>
      </section>
      <section className="justify-center px-4 md:flex md:h-full md:w-2/3 md:border-r md:px-0">
        {children}
      </section>
      <div className="fixed bottom-4 left-4 z-50">
        <ThemeToggle side="right" />
      </div>
    </main>
  );
}
