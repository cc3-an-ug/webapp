import { z } from 'zod';

export const SignInSchema = z.object({
  email: z.string().email('Correo electrónico inválido.'),
  password: z.string().min(1, 'La contraseña es requerida.'),
});

export type SignInValues = z.infer<typeof SignInSchema>;
