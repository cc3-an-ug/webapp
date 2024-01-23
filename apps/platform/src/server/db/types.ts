import type { ColumnType } from 'kysely';
export type Generated<T> =
  T extends ColumnType<infer S, infer I, infer U>
    ? ColumnType<S, I | undefined, U>
    : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

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
  Key: Key;
  PasswordResetToken: PasswordResetToken;
  Session: Session;
  User: User;
  UserVerificationToken: UserVerificationToken;
};
