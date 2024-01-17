'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { Button } from './ui/button';
import * as Tootltip from './ui/tooltip';

export function SideLink({
  href,
  children,
  exact = false,
}: {
  href: string;
  exact?: boolean;
  children?: ReactNode;
}) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  const isExternal = href.startsWith('http');

  return (
    <Tootltip.Provider>
      <Tootltip.Root>
        <Tootltip.Trigger asChild>
          <Button
            asChild
            variant="ghost"
            className={cn(
              isActive &&
                'bg-primary/60 text-primary-foreground dark:text-foreground dark:bg-primary/10',
              'text-muted-foreground line-clamp-1 flex w-full grow items-center justify-start gap-2 overflow-x-hidden',
              isExternal && 'pl-3',
            )}
          >
            <Link
              href={href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noreferrer' : undefined}
            >
              <span className="line-clamp-1 inline-flex w-full overflow-x-hidden">
                {children}
              </span>
            </Link>
          </Button>
        </Tootltip.Trigger>
        <Tootltip.Content align="center" side="right">
          {children}
          <Tootltip.Arrow className="fill-secondary" />
        </Tootltip.Content>
      </Tootltip.Root>
    </Tootltip.Provider>
  );
}
