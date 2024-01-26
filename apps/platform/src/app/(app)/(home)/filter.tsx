import Link from 'next/link';

import { Button } from '@cc3/design/ui/button';
import * as DropdownMenu from '@cc3/design/ui/dropdown-menu';
import { ChevronDown } from '@cc3/design/ui/icons';

export function HomeFilter({ show }: { show?: string }) {
  return (
    <div className="focus-within:border-tertiary flex h-9 w-52 items-center overflow-hidden rounded-md border transition-colors focus-within:border">
      <div className="bg-secondary text-muted-foreground flex h-full shrink-0 items-center border-r px-2 text-sm">
        Mostrar
      </div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button
            variant="outline"
            className="relative flex-1 grow justify-start gap-4 rounded-l-none border-0 focus-visible:ring-0"
          >
            {!show && 'Todos'}
            {show === 'all' && 'Todos'}
            {show === 'hit' && 'Ganados'}
            {show === 'miss' && 'Perdidos'}
            <ChevronDown className="text-muted-foreground absolute right-2 h-4 w-4" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="start" className="w-32">
          <DropdownMenu.Item asChild>
            <Link href="/">Todos</Link>
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
