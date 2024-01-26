'use client';

import axios from 'axios';
import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';

import { EmptySVG } from '@cc3/design/illustration/empty';
import { Button } from '@cc3/design/ui/button';
import { Skeleton } from '@cc3/design/ui/skeleton';

import type { listAssignments } from '@/server/api/data/assignment/list';
import { getBaseUrl } from '@/server/shared';

import { AssignmentCard } from './card';

export type Assignments = Awaited<ReturnType<typeof listAssignments>>;

export function HomeData({ show }: { show?: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ['assignments', show],
    queryFn: async ({ queryKey }): Promise<Assignments> => {
      try {
        const [, show] = queryKey;

        const { data } = await axios.get<Assignments>(
          `${getBaseUrl()}/api/assignment`,
          {
            withCredentials: true,
          },
        );

        if (show === 'hit') {
          return data.filter((assignment) => assignment.maxScore > 60);
        }

        if (show === 'miss') {
          return data.filter((assignment) => assignment.maxScore < 61);
        }

        return data;
      } catch (error) {
        return [];
      }
    },
  });

  const assignments = data || [];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Skeleton className="h-72 w-full rounded-xl" />
        <Skeleton className="h-72 w-full rounded-xl" />
        <Skeleton className="h-72 w-full rounded-xl" />
      </div>
    );
  }

  if (assignments.length === 0) {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <EmptySVG />
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-muted-foreground font-medium">
            No se encontraron tareas
          </h2>
          <Button asChild variant="secondary">
            <Link href="/">Limpiar filtros e intentar de nuevo</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {assignments.map((assignment) => (
        <AssignmentCard key={assignment.id} {...assignment} />
      ))}
    </div>
  );
}
