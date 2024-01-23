'use client';

import { useRouter } from 'next/navigation';
import { useAction } from 'next-safe-action/hooks';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import * as Alert from '@cc3/design/ui/alert';
import { Button } from '@cc3/design/ui/button';
import * as Form from '@cc3/design/ui/form';
import { AlertTriangle, Loader2 } from '@cc3/design/ui/icons';
import { Input } from '@cc3/design/ui/input';
import { PasswordInput } from '@cc3/design/ui/password-input';

import { signUp } from '@/server/api/signup/action';
import { SignUpSchema, type SignUpValues } from '@/server/api/signup/schema';

export function SignUpForm() {
  const { push } = useRouter();

  const { execute, result, status } = useAction(signUp, {
    onSuccess: ({ failure }) => {
      if (!failure) {
        push('/');
      }
    },
  });

  const form = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirm: '',
    },
  });

  function onSubmit(values: SignUpValues) {
    execute(values);
  }

  return (
    <Form.Provider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-4">
          <Form.Field
            control={form.control}
            name="email"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Correo</Form.Label>
                <Form.Control>
                  <Input placeholder="ejemplo@galileo.edu" {...field} />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />
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
                <Form.Label>Confirmat contraseña</Form.Label>
                <Form.Control>
                  <PasswordInput {...field} />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />
        </div>
        <Button className="text-background bg-foreground relative w-full">
          {status === 'executing' && (
            <Loader2 className="absolute left-2 h-4 w-4 animate-spin" />
          )}
          Registrarse
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
