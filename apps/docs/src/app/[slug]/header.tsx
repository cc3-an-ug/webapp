import { ChevronRight } from 'lucide-react';

export function Header({ title }: { title: string }) {
  return (
    <header className="relative w-full">
      <div className="mx-auto w-full max-w-3xl space-y-2 px-4 py-8 md:px-8 lg:max-w-full lg:px-16">
        <ul className="-mx-1 flex flex-wrap items-center text-sm">
          <li className="mx-1 flex items-center space-x-2">
            <span className="text-muted-foreground inline whitespace-nowrap">
              Documentación
            </span>
            <ChevronRight className="text-muted-foreground w-4" />
          </li>
        </ul>
        <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
          {title}
        </h1>
      </div>
    </header>
  );
}
