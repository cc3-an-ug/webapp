'use client';

import dynamic from 'next/dynamic';

import { SuccessSVG } from '@cc3/design/illustration/success';
import { Loader2 } from '@cc3/design/ui/icons';
import { Skeleton } from '@cc3/design/ui/skeleton';

export const AssignmentData = dynamic(
  () => import('./data').then((mod) => mod.AssignmentData),
  {
    ssr: false,
    loading: () => (
      <div className="w-full space-y-16">
        <div className="flex w-full flex-col items-start justify-between gap-2 lg:flex-row">
          <div className="flex flex-col-reverse items-start gap-2 lg:flex-col">
            <Skeleton className="h-8 w-80 md:h-9 lg:h-10" />
            <div className="flex items-center gap-2">
              <span className="text-xs">Exp.</span>
              <Skeleton className="h-[1.375rem] w-24 rounded-full" />
            </div>
          </div>
          <span className="font-mono text-2xl">
            <Skeleton className="h-8 w-20" />
          </span>
        </div>
        <Skeleton className="h-9 w-full rounded-md" />
        <Skeleton className="h-52 w-full rounded-xl" />
        <div className="flex w-full flex-col items-start gap-8">
          <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
            Intentos
          </h2>
          <div className="flex w-full items-center justify-center py-24">
            <Loader2 className="text-muted-foreground h-4 w-4 animate-spin" />
          </div>
        </div>
        <div className="flex w-full flex-col items-center">
          <SuccessSVG />
          <Skeleton className="h-5 w-3/4" />
        </div>
      </div>
    ),
  },
);
