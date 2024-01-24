'use client';

import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  {
    number: 1,
    nota: 20,
  },
  {
    number: 2,

    nota: 80,
  },
  {
    number: 3,

    nota: 80,
  },
  {
    number: 4,

    nota: 85,
  },
  {
    number: 5,

    nota: 100,
  },
];

export function AssignmentChart() {
  return (
    <div className="text-tertiary w-full">
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <Tooltip
            wrapperClassName="text-muted-foreground capitalize"
            labelClassName="text-foreground"
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
