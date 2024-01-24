import Link from 'next/link';

import { Button } from '@cc3/design/ui/button';
import * as DropdownMenu from '@cc3/design/ui/dropdown-menu';
import { ChevronDown } from '@cc3/design/ui/icons';

export function HomeFilter({ filter }: { filter?: string }) {
  return (
    <div className="flex h-9 w-fit items-center overflow-hidden rounded-md border">
      <div className="bg-secondary text-muted-foreground flex h-full items-center border-r px-2">
        Mostrar
      </div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button
            variant="outline"
            className="relative w-32 justify-start gap-4 rounded-l-none border-0 focus-visible:ring-0"
          >
            {!filter && 'Todos'}
            {filter === 'all' && 'Todos'}
            {filter === 'hit' && 'Ganados'}
            {filter === 'miss' && 'Perdidos'}
            <ChevronDown className="text-muted-foreground absolute right-2 h-4 w-4" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="start" className="w-32">
          <DropdownMenu.Item asChild>
            <Link href="/?show=all">Todos</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <Link href="/?show=hit">Ganados</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <Link href="/?show=miss">Perdidos</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
