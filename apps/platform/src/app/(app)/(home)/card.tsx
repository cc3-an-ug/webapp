'use client';

import { format } from 'date-fns';
import Link from 'next/link';
import { Line, LineChart, ResponsiveContainer } from 'recharts';

import { cn } from '@cc3/design/lib/utils';
import { Badge } from '@cc3/design/ui/badge';
import { Button } from '@cc3/design/ui/button';
import * as Card from '@cc3/design/ui/card';

import { listAssignments } from '@/server/api/data/assignment/list';

const fakeData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  // {
  //   name: 'Page B',
  //   uv: 3000,
  //   pv: 1398,
  //   amt: 2210,
  // },
  // {
  //   name: 'Page C',
  //   uv: 2000,
  //   pv: 9800,
  //   amt: 2290,
  // },
  // {
  //   name: 'Page D',
  //   uv: 2780,
  //   pv: 3908,
  //   amt: 2000,
  // },
  // {
  //   name: 'Page E',
  //   uv: 1890,
  //   pv: 4800,
  //   amt: 2181,
  // },
  // {
  //   name: 'Page F',
  //   uv: 2390,
  //   pv: 3800,
  //   amt: 2500,
  // },
  // {
  //   name: 'Page G',
  //   uv: 3490,
  //   pv: 4300,
  //   amt: 2100,
  // },
];

export function AssignmentCard(
  data: Awaited<ReturnType<typeof listAssignments>>[number],
) {
  return (
    <Link href="/">
      <Card.Root>
        <Card.Header className="gap-2">
          <Card.Title>{data.name}</Card.Title>
          <Card.Description className="text-xs">
            <Badge variant="secondary">{format(data.due, 'dd/MM/yyyy')}</Badge>
          </Card.Description>
        </Card.Header>
        <Card.Content className="text-tertiary">
          {data.submits.length < 2 && (
            <div className="text-muted-foreground bg-muted flex h-28 w-full items-center justify-center rounded-lg font-mono text-4xl font-medium">
              50/100
            </div>
          )}
          {data.submits.length > 1 && (
            <ResponsiveContainer width="100%" height={112}>
              <LineChart data={fakeData}>
                <Line
                  type="monotone"
                  dataKey="uv"
                  dot={false}
                  stroke="currentColor"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </Card.Content>
        <Card.Footer className="justify-end">
          <span className="font-mono">50/100</span>
        </Card.Footer>
      </Card.Root>
    </Link>
  );
}
