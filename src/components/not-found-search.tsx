import { Link2 } from 'lucide-react';
import { Suspense } from 'react';

import { getPostsPreview } from '@/lib/cms';

import { CommandK } from './command-k';

export function NotFoundSearch() {
  return (
    <Suspense fallback={<NotFoundSearchFallback />}>
      <NotFoundSearchAsync />
    </Suspense>
  );
}

function NotFoundSearchFallback() {
  return (
    <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-4 py-40 md:px-8 lg:px-16">
      <div className="flex w-fit items-center gap-2">
        <h1 className="text-6xl font-bold">404</h1>
        <Link2 className="h-12 w-12 text-primary" />
      </div>
    </div>
  );
}

async function NotFoundSearchAsync() {
  const { labs, projects, tutorials } = await getPostsPreview();

  return (
    <>
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-4 py-40 md:px-8 lg:px-16">
        <div className="flex w-fit items-center gap-2">
          <h1 className="text-6xl font-bold">404</h1>
          <Link2 className="h-12 w-12 text-primary" />
        </div>
        <p className="text-center text-muted-foreground duration-1000 animate-in fade-in-0">
          La URL que estás viendo no existe. <br />
          Presiona{' '}
          <span className="inline-block whitespace-nowrap rounded border px-1.5 align-middle font-medium leading-4 tracking-wide [font-size:10px]">
            ⌘K
          </span>{' '}
          para buscar.
        </p>
      </div>
      <CommandK labs={labs} projects={projects} tutorials={tutorials} />
    </>
  );
}
