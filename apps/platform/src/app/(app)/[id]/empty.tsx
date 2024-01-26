import { Loader2 } from '@cc3/design/ui/icons';
import { Skeleton } from '@cc3/design/ui/skeleton';

import type { getAssignment } from '@/server/api/data/assignment/get';

import { AssignmentFooter } from './footer';
import { AssignmentHeader } from './header';
import { AssignmentToken } from './token';

export function AssignmentEmpty({
  assignment,
}: {
  assignment: Awaited<ReturnType<typeof getAssignment>>;
}) {
  return (
    <div className="w-full space-y-16">
      <AssignmentHeader assignment={assignment} />
      <AssignmentToken assignment={assignment} />
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
