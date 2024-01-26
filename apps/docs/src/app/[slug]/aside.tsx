import { SiteConfig } from '@/config/site';
import type { PostsPreview } from '@/server/cms';

import { AsideLink } from './aside-link';
import { Search } from './search';

export function Aside({ labs, projects, tutorials }: PostsPreview) {
  return (
    <aside className="sticky top-16 z-10 hidden w-80 shrink-0 lg:block lg:h-[calc(100vh-4rem)]">
      <AsideLinks labs={labs} projects={projects} tutorials={tutorials} />
      <div className="from-background/0 to-card/100 absolute inset-x-0 top-0 h-8 bg-gradient-to-t" />
      <div className="from-background/0 to-card/100 absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b" />
    </aside>
  );
}

export function AsideMobile({ labs, projects, tutorials }: PostsPreview) {
  return (
    <div className="w-80 shrink-0">
      <AsideLinks labs={labs} projects={projects} tutorials={tutorials} />
    </div>
  );
}

function AsideLinks({ labs, projects, tutorials }: PostsPreview) {
  return (
    <div className="h-full w-full overflow-y-auto py-8">
      <Search labs={labs} projects={projects} tutorials={tutorials} />
      <div className="space-y-2 pr-6">
        <AsideLink href={SiteConfig.program}>Programa de Curso</AsideLink>
        <AsideLink href={SiteConfig.calendar}>Calendario</AsideLink>
        {labs.length > 0 && (
          <span className="flex h-8 grow items-center px-3 text-sm font-medium leading-none">
            Laboratorios
          </span>
        )}
        {labs.length > 0 && (
          <div className="ml-3 space-y-2 border-l pl-3">
            {labs.map((lab) => (
              <AsideLink exact key={lab._id} href={`/${lab.slug.current}`}>
                {lab.title}
              </AsideLink>
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
              <AsideLink exact key={proj._id} href={`/${proj.slug.current}`}>
                {proj.title}
              </AsideLink>
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
              <AsideLink
                exact
                key={tutorial._id}
                href={`/${tutorial.slug.current}`}
              >
                {tutorial.title}
              </AsideLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
