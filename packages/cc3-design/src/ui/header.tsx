import { Cpu, Github, Search, Slack } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@cc3/design/lib/utils';

import * as Avatar from './avatar';
import { Badge } from './badge';
import { Button } from './button';
import * as DropdownMenu from './dropdown-menu';
import { Skeleton } from './skeleton';
import { ThemeToggle } from './theme-toggle';

export function Header({
  email,
  children,
  variant = 'docs',
}: {
  variant?: 'docs' | 'platform';
  email?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="bg-background/90 fixed z-50 w-full border-b backdrop-blur backdrop-filter">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between gap-2 px-4 md:px-8 lg:px-16">
        <div
          className={cn(
            'flex items-center space-x-2.5',
            variant === 'docs' && 'hidden lg:flex',
          )}
        >
          <Link
            href="/"
            aria-label="CC3 AN"
            className="tracking- flex items-center gap-2 font-medium no-underline"
          >
            <span className="bg-tertiary text-tertiary-foreground inline-flex items-center justify-center rounded-full p-1">
              <Cpu className="h-5 w-5" strokeWidth="1.5" />
            </span>
            <span className="hidden font-semibold tracking-tighter lg:inline">
              CC3 AN
            </span>
          </Link>
          <Badge variant="secondary" className="hidden lg:inline-flex">
            2024
          </Badge>
        </div>
        {children}
        <nav className="divide-border flex flex-1 grow items-center justify-end divide-x">
          {variant === 'docs' && (
            <div className="flex flex-1 grow items-center pr-2 md:max-w-64 lg:space-x-4 lg:pr-8">
              <Button
                id="command-k"
                variant="outline"
                className="bg-muted/30 group relative w-full justify-between pl-8 pr-2 lg:cursor-text"
              >
                <Search className="absolute left-2 h-4 w-4" />
                <span>Buscar</span>
                <Badge
                  variant="secondary"
                  className="group-hover:border-tertiary group-hover:bg-background hidden lg:inline-flex"
                >
                  ⌘K
                </Badge>
              </Button>
            </div>
          )}
          <div
            className={cn(
              'flex items-center lg:space-x-2 lg:pl-8',
              variant === 'docs' && 'pl-2',
              variant === 'platform' && 'pr-2',
            )}
          >
            <ThemeToggle />
            <Button
              asChild
              size="icon"
              variant="ghost"
              className="text-muted-foreground"
            >
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://github.com/cc3-an"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">Github</span>
              </Link>
            </Button>
            <Button
              asChild
              size="icon"
              variant="ghost"
              className="text-muted-foreground"
            >
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://cc3-an-2024.slack.com/"
              >
                <Slack className="h-4 w-4" />
                <span className="sr-only">Slack</span>
              </Link>
            </Button>
          </div>
          {variant === 'platform' && (
            <div className="pl-2">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Avatar.Root className="h-8 w-8">
                    <Avatar.Image
                      src={`https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${email}`}
                    />
                    <Avatar.Fallback>
                      <Skeleton className="h-full w-full rounded-full" />
                    </Avatar.Fallback>
                  </Avatar.Root>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content
                  align="end"
                  sideOffset={20}
                  className="w-40"
                >
                  <DropdownMenu.Label>Mi Cuenta</DropdownMenu.Label>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Group>
                    <DropdownMenu.Item>
                      Configuraciones
                      <DropdownMenu.Shortcut>⌘,</DropdownMenu.Shortcut>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                      Salir
                      <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
                    </DropdownMenu.Item>
                  </DropdownMenu.Group>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
