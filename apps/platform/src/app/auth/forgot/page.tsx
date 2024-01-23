import type { Metadata } from 'next';

import { ForgotPasswordForm } from './form';

export const metadata: Metadata = {
  title: 'Olvidé mi contraseña',
};

export default function ForgotPasswordPage() {
  return (
    <div className="mx-auto my-auto w-full min-w-min max-w-sm space-y-8 py-4 md:w-7/12 md:py-9">
      <div className="flex w-fit flex-col items-start">
        <h2 className="text-xl font-semibold md:text-2xl">
          Restablecer contraseña
        </h2>
      </div>
      <ForgotPasswordForm />
    </div>
  );
}
