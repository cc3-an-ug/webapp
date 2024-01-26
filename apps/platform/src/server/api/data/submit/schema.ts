import { z } from 'zod';

export const Schema = z.object({
  assignmentId: z.string().min(1, 'ID de tarea requerido.'),
});

export type Values = z.infer<typeof Schema>;
