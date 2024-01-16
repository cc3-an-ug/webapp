import { Link2 } from 'lucide-react';

export const metadata = {
  title: '404 | CC3 AN',
};

export default function CC3AN404() {
  return (
    <main className="w-full pt-16">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-4 py-40 md:px-8 lg:px-16">
        <div className="flex w-fit items-center gap-2">
          <h1 className="text-6xl font-bold">404</h1>
          <Link2 className="text-primary h-12 w-12" />
        </div>
        <p className="text-muted-foreground text-center">
          La URL que estás viendo no existe. <br />
          Presiona{' '}
          <span className="inline-block whitespace-nowrap rounded border px-1.5 align-middle font-medium leading-4 tracking-wide [font-size:10px]">
            ⌘K
          </span>{' '}
          para buscar.
        </p>
      </div>
    </main>
  );
}
