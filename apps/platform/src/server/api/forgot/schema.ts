import { z } from 'zod';

export const ForgotSchema = z.object({
  email: z.string().email('Correo electrónico inválido.'),
});

export type ForgotValues = z.infer<typeof ForgotSchema>;
