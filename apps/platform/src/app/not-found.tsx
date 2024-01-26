import { Footer } from '@cc3/design/ui/footer';
import { Header } from '@cc3/design/ui/header';
import { Link2 } from '@cc3/design/ui/icons';

import { GoHome } from './go-home';

export default function NotFoundPage() {
  return (
    <div>
      <Header variant="platform" />
      <div className="flex min-h-screen flex-col justify-between">
        <main className="w-full pb-8 pt-32">
          <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-4 py-40 md:px-8 lg:px-16">
            <div className="flex w-fit items-center gap-2">
              <h1 className="text-6xl font-bold">404</h1>
              <Link2 className="text-tertiary h-12 w-12" />
            </div>
            <p className="text-muted-foreground animate-in fade-in-0 text-center duration-1000">
              La URL que estás viendo no existe. <br />
              Presiona{' '}
              <span className="inline-block whitespace-nowrap rounded border px-1.5 align-middle font-medium leading-4 tracking-wide [font-size:10px]">
                /
              </span>{' '}
              para ir al inicio.
            </p>
          </div>
        </main>
        <Footer />
        <GoHome />
      </div>
    </div>
  );
}
