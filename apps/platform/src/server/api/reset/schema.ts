import { z } from 'zod';

export const ResetSchema = z
  .object({
    token: z.string().min(1, 'El token es requerido.'),
    password: z.string().min(1, 'La contraseña es requerida.'),
    confirm: z.string().min(1, 'La confirmación de contraseña es requerida.'),
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Las contraseñas no coinciden.',
    path: ['confirm'],
  });

export type ResetValues = z.infer<typeof ResetSchema>;
