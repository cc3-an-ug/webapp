declare namespace Lucia {
  type Auth = import('@/server/auth').Auth;

  type DatabaseSessionAttributes = {
    userId: string;
  };

  type DatabaseUserAttributes = {
    email: string;
  };
}
