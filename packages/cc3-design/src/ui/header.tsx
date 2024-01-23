import { Cpu, Github, Search, Slack } from 'lucide-react';
import Link from 'next/link';

import { Badge } from './badge';
import { Button } from './button';
import { ThemeToggle } from './theme-toggle';

export function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="bg-background/90 fixed z-50 w-full border-b backdrop-blur backdrop-filter">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between gap-2 px-4 md:px-8 lg:px-16">
        <div className="hidden items-center space-x-2.5 lg:flex">
          <Link
            href="/"
            className="tracking- flex items-center gap-2 font-medium no-underline"
          >
            <span className="bg-tertiary text-tertiary-foreground inline-flex items-center justify-center rounded-full p-1">
              <Cpu className="h-5 w-5" strokeWidth="1.5" />
            </span>
            <span className="font-semibold tracking-tighter">CC3 AN</span>
          </Link>
          <Badge variant="secondary">2024</Badge>
        </div>
        {children}
        <nav className="divide-border flex flex-1 grow items-center justify-end divide-x">
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
          <div className="flex items-center pl-2 lg:space-x-2 lg:pl-8">
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
        </nav>
      </div>
    </header>
  );
}
