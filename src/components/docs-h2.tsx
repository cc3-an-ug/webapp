'use client';

import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';

export function DocsH2({ id, children }: { id: string; children: ReactNode }) {
  const router = useRouter();

  return (
    <h2
      id={id}
      onClick={() => router.push(`#${id}`)}
      className="group cursor-pointer scroll-mt-36"
    >
      <span className="text-muted-foreground absolute left-8 hidden lg:group-hover:inline">
        #
      </span>
      {children}
    </h2>
  );
}
