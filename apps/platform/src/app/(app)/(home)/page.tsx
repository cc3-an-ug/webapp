import type { Metadata } from 'next';

import { HomeData } from './dynamic';
import { HomeFilter } from './filter';

export const metadata: Metadata = {
  title: 'Tareas',
};

export default async function HomePage({
  searchParams,
}: {
  searchParams: { show?: string };
}) {
  const { show } = searchParams;

  return (
    <div className="w-full space-y-8">
      <HomeFilter show={show} />
      <HomeData show={show} />
    </div>
  );
}
