'use client';

import dynamic from 'next/dynamic';

import { Skeleton } from '@cc3/design/ui/skeleton';

export const HomeData = dynamic(
  () => import('./data').then((mod) => mod.HomeData),
  {
    ssr: false,
    loading: () => (
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Skeleton className="h-72 w-full rounded-xl" />
        <Skeleton className="h-72 w-full rounded-xl" />
        <Skeleton className="h-72 w-full rounded-xl" />
      </div>
    ),
  },
);
