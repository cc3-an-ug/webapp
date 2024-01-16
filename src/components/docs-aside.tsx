import { Suspense } from 'react';

import { getPostsPreview } from '@/cms/post';

import { SideLink } from './side-link';
import { Skeleton } from './ui/skeleton';

export function DocsAside() {
  return (
    <aside className="sticky top-16 hidden w-80 shrink-0 lg:block lg:h-[calc(100vh-4rem)]">
      <div className="h-full w-full overflow-y-auto py-8">
        <Suspense fallback={<DocsAsideFallback />}>
          <DocsAsideAsync />
        </Suspense>
      </div>
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-t from-white/0 to-white/100 dark:from-gray-950/0 dark:to-gray-950/100" />
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-white/0 to-white/100 dark:from-gray-950/0 dark:to-gray-950/100" />
    </aside>
  );
}

export function DocsAsideMobile() {
  return (
    <div className="w-80 shrink-0">
      <div className="h-full w-full overflow-y-auto py-8">
        <Suspense fallback={<DocsAsideFallback />}>
          <DocsAsideAsync />
        </Suspense>
      </div>
    </div>
  );
}

function DocsAsideFallback() {
  return (
    <div className="space-y-2 pr-6">
      <Skeleton className="h-8 grow" />
      <div className="ml-3 space-y-2 border-l pl-3">
        <Skeleton className="h-9 w-full" />
        <Skeleton className="h-9 w-full" />
        <Skeleton className="h-9 w-full" />
      </div>
      <Skeleton className="h-8 grow" />
      <div className="ml-3 space-y-2 border-l pl-3">
        <Skeleton className="h-9 w-full" />
        <Skeleton className="h-9 w-full" />
        <Skeleton className="h-9 w-full" />
      </div>
    </div>
  );
}

async function DocsAsideAsync() {
  const { labs, projects, tutorials } = await getPostsPreview();

  return (
    <div className="space-y-2 pr-6">
      {labs.length > 0 && (
        <span className="flex h-8 grow items-center px-3 text-sm font-medium leading-none">
          Laboratorios
        </span>
      )}
      {labs.length > 0 && (
        <div className="ml-3 space-y-2 border-l pl-3">
          {labs.map((lab) => (
            <SideLink exact key={lab._id} href={`/doc/${lab.slug.current}`}>
              {lab.title}
            </SideLink>
          ))}
        </div>
      )}
      {projects.length > 0 && (
        <span className="flex h-8 grow items-center px-3 text-sm font-medium leading-none">
          Proyectos
        </span>
      )}
      {projects.length > 0 && (
        <div className="ml-3 space-y-2 border-l pl-3">
          {projects.map((proj) => (
            <SideLink exact key={proj._id} href={`/doc/${proj.slug.current}`}>
              {proj.title}
            </SideLink>
          ))}
        </div>
      )}
      {tutorials.length > 0 && (
        <span className="flex h-8 grow items-center px-3 text-sm font-medium leading-none">
          Tutoriales
        </span>
      )}
      {tutorials.length > 0 && (
        <div className="ml-3 space-y-2 border-l pl-3">
          {tutorials.map((tutorial) => (
            <SideLink
              exact
              key={tutorial._id}
              href={`/doc/${tutorial.slug.current}`}
            >
              {tutorial.title}
            </SideLink>
          ))}
        </div>
      )}
    </div>
  );
}
