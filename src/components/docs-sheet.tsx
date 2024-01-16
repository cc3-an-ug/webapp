import { ChevronDown } from 'lucide-react';

import { DocsAsideMobile } from './docs-aside';
import * as Sheet from './ui/sheet';

export function DocsSheet({ title }: { title: string }) {
  return (
    <Sheet.Root>
      <Sheet.Trigger asChild>
        <button
          aria-label="Show docs navigation"
          className="text-muted-foreground flex space-x-2 text-left text-2xl font-semibold md:space-x-3 md:text-3xl lg:text-4xl"
        >
          <ChevronDown className="mt-1 h-7 w-7 shrink-0 md:h-8 md:w-8" />
          <span className="text-foreground inline-block flex-shrink">
            {title}
          </span>
        </button>
      </Sheet.Trigger>
      <Sheet.Content
        side="left"
        className="max-h-[calc(100vh)] overflow-y-auto"
      >
        <Sheet.Header>
          <Sheet.Title>Contenido</Sheet.Title>
        </Sheet.Header>
        <DocsAsideMobile />
      </Sheet.Content>
    </Sheet.Root>
  );
}
