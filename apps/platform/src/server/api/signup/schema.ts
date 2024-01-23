import { z } from 'zod';

export const SignUpSchema = z
  .object({
    email: z.string().email('Correo electrónico inválido.'),
    password: z.string().min(1, 'La contraseña es requerida.'),
    confirm: z.string().min(1, 'La confirmación de contraseña es requerida.'),
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Las contraseñas no coinciden.',
    path: ['confirm'],
  });

export type SignUpValues = z.infer<typeof SignUpSchema>;
