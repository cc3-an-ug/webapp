import type { Metadata } from 'next';

import { ResetPasswordForm } from './form';

export const metadata: Metadata = {
  title: 'Olvidé mi contraseña',
};

export default function ResetPasswordPage({
  searchParams,
}: {
  searchParams: { token: string };
}) {
  return (
    <div className="mx-auto my-auto w-full min-w-min max-w-sm space-y-8 py-4 md:w-7/12 md:py-9">
      <div className="flex w-fit flex-col items-start">
        <h2 className="text-xl font-semibold md:text-2xl">
          Cambiar contraseña
        </h2>
      </div>
      <ResetPasswordForm token={searchParams.token} />
    </div>
  );
}
