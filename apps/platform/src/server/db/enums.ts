export const Status = {
  PENDING: 'PENDING',
  RUNNING: 'RUNNING',
  DONE: 'DONE',
} as const;
export type Status = (typeof Status)[keyof typeof Status];
