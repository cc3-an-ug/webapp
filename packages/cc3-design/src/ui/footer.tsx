import { Cpu } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@cc3/design/lib/utils';

export function Footer({ variant = 'full' }: { variant?: 'full' | 'simple' }) {
  return (
    <footer className="bg-background w-full border-t">
      <div
        className={cn(
          'mx-auto flex w-full max-w-screen-2xl items-center px-4 md:px-8 lg:px-16',
          variant === 'full' ? 'h-40 lg:h-52' : 'h-20',
        )}
      >
        <div className="space-y-4">
          {variant === 'full' && (
            <Link
              href="/"
              className="flex items-center gap-2 font-bold no-underline"
            >
              <Cpu className="text-primary h-6 w-6" />
              <span>CC3 AN</span>
            </Link>
          )}
          <div className="text-muted-foreground space-y-2 text-sm">
            <p>Licencia MIT</p>
            <p>
              Hecho con 💛 por{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/andrescv"
                className="hover:text-primary transition-colors"
              >
                @andrescv
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
