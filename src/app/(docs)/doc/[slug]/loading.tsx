import { ChevronRight, Loader2 } from 'lucide-react';

import { Skeleton } from '@/components/ui/skeleton';

export default function DocLoading() {
  return (
    <div className="flex w-full">
      <div className="relative w-full pt-8 2xl:w-[calc(100%-20rem)]">
        <header className="relative w-full">
          <div className="mx-auto w-full max-w-3xl space-y-2 px-4 py-8 md:px-8 lg:max-w-full lg:px-16">
            <ul className="-mx-1 flex flex-wrap items-center text-sm">
              <li className="mx-1 flex items-center space-x-2">
                <span className="inline whitespace-nowrap text-muted-foreground">
                  Documentación
                </span>
                <ChevronRight className="w-4 text-muted-foreground" />
              </li>
            </ul>
            <Skeleton className="h-10 w-1/2 rounded-none" />
          </div>
        </header>
        <div className="docs prose prose-lg prose-slate prose-yellow mx-auto mb-4 w-full min-w-0 max-w-3xl shrink p-4 pb-8 dark:prose-invert prose-headings:font-semibold prose-a:font-normal prose-code:font-normal prose-code:before:content-none  prose-code:after:content-none md:mb-8 md:px-8 lg:mx-0 lg:max-w-full lg:pl-16 lg:pr-8">
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
  );
}
