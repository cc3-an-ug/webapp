'use client';

import Link from 'next/link';
import { useAction } from 'next-safe-action/hooks';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import * as Alert from '@cc3/design/ui/alert';
import { Button } from '@cc3/design/ui/button';
import * as Form from '@cc3/design/ui/form';
import { AlertTriangle, CheckCircle, Loader2 } from '@cc3/design/ui/icons';
import { Input } from '@cc3/design/ui/input';

import { forgotPassword } from '@/server/api/forgot/action';
import { ForgotSchema, type ForgotValues } from '@/server/api/forgot/schema';

export function ForgotPasswordForm() {
  const [show, setShow] = useState(false);

  const { execute, result, status } = useAction(forgotPassword, {
    onSuccess: ({ failure }) => {
      if (!failure) {
        setShow(true);
      }
    },
  });

  const form = useForm({
    resolver: zodResolver(ForgotSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(values: ForgotValues) {
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
        </div>
        <Button className="relative w-full">
          {status === 'executing' && (
            <Loader2 className="absolute left-2 h-4 w-4 animate-spin" />
          )}
          Restablecer contraseña
        </Button>
        <Button
          asChild
          type="button"
          variant="outline"
          className="relative w-full"
        >
          <Link href="/auth/signin">Ingresar</Link>
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
        {show && (
          <Alert.Root className="animate-in fade-in-0 duration-1000">
            <CheckCircle className="h-4 w-4" />
            <Alert.Title>Correo enviado</Alert.Title>
            <Alert.Description>
              Si tu dirección de correo electrónico existe en nuestra base de
              datos, recibirás un enlace de recuperación de contraseña en tu
              dirección de correo electrónico en unos minutos.
            </Alert.Description>
          </Alert.Root>
        )}
      </form>
    </Form.Provider>
  );
}
