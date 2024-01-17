import { AlignLeft } from 'lucide-react';

import { DocsAsideMobile } from './docs-aside';
import { Button } from './ui/button';
import * as Sheet from './ui/sheet';

export function Drawer() {
  return (
    <Sheet.Root>
      <Sheet.Trigger asChild>
        <Button variant="ghost" size="icon" className="shrink-0 lg:hidden">
          <AlignLeft className="h-4 w-4" />
        </Button>
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
