'use client';

import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';

export function DocsH3({ id, children }: { id: string; children: ReactNode }) {
  const router = useRouter();

  return (
    <h3
      id={id}
      onClick={() => router.push(`#${id}`)}
      className="group cursor-pointer scroll-mt-36"
    >
      <span className="text-muted-foreground absolute left-8 hidden lg:group-hover:inline">
        #
      </span>
      {children}
    </h3>
  );
}
