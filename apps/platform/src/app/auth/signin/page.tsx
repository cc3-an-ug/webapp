import type { Metadata } from 'next';
import Link from 'next/link';

import { SignInForm } from './form';

export const metadata: Metadata = {
  title: 'Entrar',
};

export default function SignInPage() {
  return (
    <div className="mx-auto my-auto w-full min-w-min max-w-sm space-y-8 py-4 md:w-7/12 md:py-9">
      <div className="flex w-fit flex-col items-start">
        <h2 className="text-xl font-semibold md:text-2xl">Ingresar</h2>
        <p className="text-muted-foreground text-sm">
          ¿No tienes una cuenta?{' '}
          <Link href="/auth/signup" className="text-tertiary font-medium">
            Registrate aquí
          </Link>
          .
        </p>
      </div>
      <SignInForm />
    </div>
  );
}
