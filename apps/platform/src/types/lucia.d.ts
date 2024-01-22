declare namespace Lucia {
  type Auth = import('@/server/auth').Auth;

  type DatabaseUserAttributes = {
    email: string;
  };
}
