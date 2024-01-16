import { Cpu, Github, Menu, Search, Slack } from 'lucide-react';
import Link from 'next/link';

import { ThemeToggle } from '@/components/theme-toggle';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { YearBadge } from './year-badge';

export function Header() {
  return (
    <header className="bg-background/90 fixed z-50 w-full border-b backdrop-blur backdrop-filter">
      <div className="w-ful mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8 lg:px-16">
        <div className="flex items-center space-x-2.5">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold no-underline"
          >
            <Cpu className="text-primary h-6 w-6" strokeWidth="1.5" />
            <span>CC3 AN</span>
          </Link>
          <YearBadge />
        </div>
        <div className="lg:hidden">
          <Button
            size="icon"
            variant="ghost"
            aria-label="Toggle menu"
            className="text-muted-foreground"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
        <nav className="divide-border hidden items-center divide-x lg:flex">
          <div className="flex items-center pr-2 lg:space-x-4 lg:pr-8">
            <Button
              variant="outline"
              className="bg-muted/30 group relative w-64 justify-between pl-8 pr-2"
            >
              <Search className="absolute left-2 h-4 w-4" />
              <span>Buscar</span>
              <Badge
                variant="secondary"
                className="group-hover:border-primary group-hover:bg-background"
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
                href="https://github.com/cc3-an-ug"
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
