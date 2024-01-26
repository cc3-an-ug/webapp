'use client';

import axios from 'axios';

import { useQuery } from '@tanstack/react-query';

import { Loader2 } from '@cc3/design/ui/icons';
import { Skeleton } from '@cc3/design/ui/skeleton';

import { getAssignment } from '@/server/api/data/assignment/get';
import { getBaseUrl } from '@/server/shared';

import { AssignmentChart } from './chart';
import { AssignmentDetails } from './details';
import { AssignmentFooter } from './footer';
import { AssignmentHeader } from './header';
import { AssignmentToken } from './token';

type Assignment = Awaited<ReturnType<typeof getAssignment>> | null;

export function AssignmentData({ id }: { id: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ['assignment', id],
    queryFn: async ({ queryKey }) => {
      const [, id] = queryKey;

      try {
        const { data } = await axios.get<Assignment>(
          `${getBaseUrl()}/api/assignment/${id}`,
          {
            withCredentials: true,
          },
        );

        return data;
      } catch (error) {
        return null;
      }
    },
  });

  if (isLoading) {
    return (
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
        <AssignmentFooter loading />
      </div>
    );
  }

  if (!data) {
    return <></>;
  }

  if (data.submits.length === 0) {
    return (
      <div className="w-full space-y-16">
        <AssignmentHeader assignment={data} />
        <AssignmentToken assignment={data} />
        <Skeleton className="h-52 w-full rounded-xl" />
        <div className="flex w-full flex-col items-start gap-8">
          <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
            Intentos
          </h2>
          <div className="flex w-full items-center justify-center py-24">
            <Loader2 className="text-muted-foreground h-4 w-4 animate-spin" />
          </div>
        </div>
        <AssignmentFooter />
      </div>
    );
  }

  return (
    <div className="w-full space-y-16">
      <AssignmentHeader assignment={data} />
      <AssignmentToken assignment={data} />
      <AssignmentChart submits={data.submits} />
      <AssignmentDetails submits={data.submits} />
      <AssignmentFooter />
    </div>
  );
}
