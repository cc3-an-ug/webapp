declare namespace Lucia {
  type Auth = import('@/server/auth').Auth;

  type DatabaseUserAttributes = {
    email: string;
    email_verified: number;
    updated_at?: Date | null;
  };
}
