'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

import { cn } from '@cc3/design/lib/utils';
import { Button } from '@cc3/design/ui/button';
import * as Tooltip from '@cc3/design/ui/tooltip';

export function AsideLink({
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
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button
            asChild
            variant="ghost"
            className={cn(
              isActive &&
                'bg-primary/60 text-primary-foreground dark:text-foreground dark:bg-primary/10',
              'text-muted-foreground flex w-full grow items-center justify-start gap-2',
              isExternal && 'pl-3',
            )}
          >
            <Link
              href={href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noreferrer' : undefined}
            >
              <span className="line-clamp-1">{children}</span>
            </Link>
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content align="center" side="right">
          {children}
          <Tooltip.Arrow className="fill-secondary" />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
