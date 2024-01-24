import Link from 'next/link';

import { EmptySVG } from '@cc3/design/illustration/empty';
import { Button } from '@cc3/design/ui/button';

import { listAssignments } from '@/server/api/data/assignment/list';

import { AssignmentCard } from './card';
import { HomeFilter } from './filter';

export default async function HomePage({
  searchParams,
}: {
  searchParams: { show?: string };
}) {
  const filter = searchParams.show;
  let assignments = await listAssignments();

  if (filter === 'hit') {
    assignments = assignments.filter((assignment) => assignment.maxScore > 60);
  }

  if (filter === 'miss') {
    assignments = assignments.filter((assignment) => assignment.maxScore < 61);
  }

  if (assignments.length === 0) {
    return (
      <div className="w-full space-y-8">
        <HomeFilter filter={filter} />
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
      </div>
    );
  }

  return (
    <div className="w-full space-y-8">
      <HomeFilter filter={filter} />
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {assignments.map((assignment) => (
          <AssignmentCard key={assignment.id} {...assignment} />
        ))}
      </div>
    </div>
  );
}
