'use client';

import { useMemo } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

import { getAssignment } from '@/server/api/data/assignment/get';

export function AssignmentChart({
  submits,
}: {
  submits: Awaited<ReturnType<typeof getAssignment>>['submits'];
}) {
  const data = useMemo(() => {
    return [
      {
        number: 0,
        nota: 0,
      },
      ...submits.map((submit, index) => ({
        number: index + 1,
        nota: submit.grade,
      })),
    ];
  }, [submits]);

  return (
    <div className="text-tertiary w-full">
      <ResponsiveContainer width="100%" height={208}>
        <LineChart data={data}>
          <Tooltip
            labelClassName="text-foreground"
            wrapperClassName="text-muted-foreground capitalize"
          />
          <Line
            dot={false}
            dataKey="nota"
            type="monotone"
            strokeWidth={2}
            stroke="currentColor"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
