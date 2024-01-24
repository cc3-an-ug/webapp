import { format } from 'date-fns';
import Link from 'next/link';

import { cn } from '@cc3/design/lib/utils';
import { Badge } from '@cc3/design/ui/badge';
import * as Card from '@cc3/design/ui/card';

import { listAssignments } from '@/server/api/data/assignment/list';

export function AssignmentCard(
  data: Awaited<ReturnType<typeof listAssignments>>[number],
) {
  return (
    <Link href={`/${data.slug}`}>
      <Card.Root className="glow h-72 w-full">
        <Card.Header className="border-b-tertiary gap-2 border-b">
          <Card.Title>{data.name}</Card.Title>
          <Card.Description className="text-xs">
            Exp.{' '}
            <Badge variant="secondary">{format(data.due, 'dd/MM/yyyy')}</Badge>
          </Card.Description>
        </Card.Header>
        <Card.Content className="text-tertiary pt-6">
          {data.submits.length === 0 && (
            <div className="text-muted-foreground bg-muted flex h-20 w-full items-center justify-center rounded-lg font-mono text-2xl font-medium">
              Pendiente
            </div>
          )}
          {data.submits.length > 0 && (
            <div className="text-muted-foreground bg-muted flex h-20 w-full items-center justify-center rounded-lg font-mono text-2xl font-medium">
              Intento #{data.submits.length}
            </div>
          )}
        </Card.Content>
        <Card.Footer className="justify-end">
          <span className="font-mono text-xl">
            <span
              className={cn(
                data.submits.length === 0 && 'text-red-500',
                data.maxScore < 61 && 'text-red-500',
                data.maxScore > 60 && data.maxScore < 81 && 'text-yellow-500',
                data.maxScore > 80 && 'text-green-500',
              )}
            >
              {data.maxScore}
            </span>
            /100
          </span>
        </Card.Footer>
      </Card.Root>
    </Link>
  );
}
