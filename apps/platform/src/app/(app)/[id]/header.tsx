import { format } from 'date-fns';

import { cn } from '@cc3/design/lib/utils';
import { Badge } from '@cc3/design/ui/badge';

import type { getAssignment } from '@/server/api/data/assignment/get';

export function AssignmentHeader({
  assignment,
}: {
  assignment: Awaited<ReturnType<typeof getAssignment>>;
}) {
  const { maxScore } = assignment;

  return (
    <div className="flex w-full flex-col items-start justify-between gap-2 lg:flex-row">
      <div className="flex flex-col-reverse items-start gap-2 lg:flex-col">
        <h1 className="line-clamp-1 text-2xl font-semibold md:text-3xl lg:text-4xl">
          {assignment.name}
        </h1>
        <div className="flex items-center gap-2">
          <span className="text-xs">Exp.</span>
          <Badge variant="secondary">
            {format(assignment.due, 'dd/MM/yyyy')}
          </Badge>
        </div>
      </div>
      <span className="font-mono text-2xl">
        <span
          className={cn(
            maxScore < 61 && 'text-red-500',
            maxScore > 60 && maxScore < 81 && 'text-yellow-500',
            maxScore > 80 && 'text-green-500',
          )}
        >
          {maxScore}
        </span>
        /100
      </span>
    </div>
  );
}
