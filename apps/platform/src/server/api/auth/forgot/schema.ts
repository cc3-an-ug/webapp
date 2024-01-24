import { z } from 'zod';

export const Schema = z.object({
  email: z.string().email('Correo electrónico inválido.'),
});

export type Values = z.infer<typeof Schema>;
