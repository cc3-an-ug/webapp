import { ChevronRight, Loader2 } from 'lucide-react';

import { Skeleton } from '@cc3/design/ui/skeleton';

export default function DocLoading() {
  return (
    <main className="w-full pt-16">
      <div className="mx-auto flex w-full max-w-screen-2xl px-4 md:px-8 lg:px-16">
        <aside className="sticky top-16 z-10 hidden w-80 shrink-0 lg:block lg:h-[calc(100vh-4rem)]">
          <div className="h-full w-full overflow-y-auto py-8">
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
          </div>
          <div className="from-background/0 to-card/100 absolute inset-x-0 top-0 h-8 bg-gradient-to-t" />
          <div className="from-background/0 to-card/100 absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b" />
        </aside>
        <div className="w-full lg:flex lg:w-[calc(100%-20rem)] lg:items-start">
          <div className="flex w-full">
            <div className="relative w-full pt-8 2xl:w-[calc(100%-20rem)]">
              <header className="relative w-full">
                <div className="mx-auto w-full max-w-3xl space-y-2 px-4 py-8 md:px-8 lg:max-w-full lg:px-16">
                  <ul className="-mx-1 flex flex-wrap items-center text-sm">
                    <li className="mx-1 flex items-center space-x-2">
                      <span className="text-muted-foreground inline whitespace-nowrap">
                        Documentación
                      </span>
                      <ChevronRight className="text-muted-foreground w-4" />
                    </li>
                  </ul>
                  <Skeleton className="h-10 w-1/2 rounded-none" />
                </div>
              </header>
              <div className="docs prose prose-lg prose-slate prose-yellow dark:prose-invert prose-headings:font-semibold prose-a:font-normal prose-code:font-normal prose-code:before:content-none prose-code:after:content-none mx-auto mb-4 w-full min-w-0 max-w-3xl shrink p-4  pb-8 md:mb-8 md:px-8 lg:mx-0 lg:max-w-full lg:pl-16 lg:pr-8">
                <Skeleton className="h-5 w-3/4 rounded-none" />
                <Skeleton className="mt-4 h-5 w-3/4 rounded-none" />
                <Skeleton className="mt-4 h-5 w-full rounded-none" />
                <Skeleton className="mt-4 h-5 w-1/3 rounded-none" />
                <Skeleton className="mt-4 h-5 w-11/12 rounded-none" />
              </div>
            </div>
            <div className="sticky top-24 hidden max-h-96 w-80 shrink-0 justify-center overflow-y-auto py-8 2xl:flex">
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
