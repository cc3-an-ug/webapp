import { z } from 'zod';

export const Schema = z.object({
  email: z.string().email('Correo electrónico inválido.'),
  password: z.string().min(1, 'La contraseña es requerida.'),
});

export type Values = z.infer<typeof Schema>;
