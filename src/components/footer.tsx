import { Cpu } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto flex h-40 w-full max-w-screen-2xl items-center px-4 md:px-8 lg:h-52 lg:px-16">
        <div className="space-y-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold no-underline"
          >
            <Cpu className="text-primary h-6 w-6" />
            <span>CC3 AN</span>
          </Link>
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
