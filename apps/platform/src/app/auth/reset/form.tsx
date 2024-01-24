'use client';

import { useRouter } from 'next/navigation';
import { useAction } from 'next-safe-action/hooks';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import * as Alert from '@cc3/design/ui/alert';
import { Button } from '@cc3/design/ui/button';
import * as Form from '@cc3/design/ui/form';
import { AlertTriangle, Loader2 } from '@cc3/design/ui/icons';
import { PasswordInput } from '@cc3/design/ui/password-input';

import { resetPassword } from '@/server/api/auth/reset/action';
import { Schema, type Values } from '@/server/api/auth/reset/schema';

export function ResetPasswordForm({ token }: { token: string }) {
  const { push } = useRouter();

  const { execute, result, status } = useAction(resetPassword, {
    onSuccess: ({ failure }) => {
      if (!failure) {
        push('/auth/signin');
      }
    },
  });

  const form = useForm({
    resolver: zodResolver(Schema),
    defaultValues: {
      token,
      password: '',
      confirm: '',
    },
  });

  function onSubmit(values: Values) {
    execute(values);
  }

  return (
    <Form.Provider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-4">
          <Form.Field
            control={form.control}
            name="password"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control>
                  <PasswordInput {...field} />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />
          <Form.Field
            control={form.control}
            name="confirm"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Confirmar contraseña</Form.Label>
                <Form.Control>
                  <PasswordInput {...field} />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />
        </div>
        <Button className="relative w-full">
          {status === 'executing' && (
            <Loader2 className="absolute left-2 h-4 w-4 animate-spin" />
          )}
          Cambiar contraseña
        </Button>
        {result.data?.failure && (
          <Alert.Root
            variant="destructive"
            className="animate-in fade-in-0 duration-1000"
          >
            <AlertTriangle className="h-4 w-4" />
            <Alert.Title>Algo salio mal</Alert.Title>
            <Alert.Description>{result.data.failure}</Alert.Description>
          </Alert.Root>
        )}
      </form>
    </Form.Provider>
  );
}
