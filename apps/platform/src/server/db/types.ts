import type { ColumnType } from 'kysely';
export type Generated<T> =
  T extends ColumnType<infer S, infer I, infer U>
    ? ColumnType<S, I | undefined, U>
    : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

import type { Status } from './enums';
import type { Files, Metadata } from './unknown';

export type Assignment = {
  id: string;
  name: string;
  slug: string;
  due: Timestamp;
  limit: Generated<number>;
  files: Files;
};
export type AssignmentToken = {
  id: string;
  assignment_id: string;
  user_id: string;
  expires: number;
};
export type Key = {
  id: string;
  user_id: string;
  hashed_password: string;
};
export type PasswordResetToken = {
  id: string;
  user_id: string;
  expires: number;
};
export type Session = {
  id: string;
  user_id: string;
  active_expires: number;
  idle_expires: number;
};
export type Submit = {
  id: string;
  grade: Generated<number>;
  status: Generated<Status>;
  assignment_id: string;
  user_id: string;
  metadata: Metadata;
  stdout: string;
  stderr: string;
  created_at: Generated<Timestamp>;
};
export type User = {
  id: string;
  name: string | null;
  email: string;
  email_verified: Generated<number>;
  created_at: Generated<Timestamp>;
  updated_at: Timestamp | null;
};
export type UserVerificationToken = {
  id: string;
  user_id: string;
  expires: number;
};
export type DB = {
  Assignment: Assignment;
  AssignmentToken: AssignmentToken;
  Key: Key;
  PasswordResetToken: PasswordResetToken;
  Session: Session;
  Submit: Submit;
  User: User;
  UserVerificationToken: UserVerificationToken;
};
