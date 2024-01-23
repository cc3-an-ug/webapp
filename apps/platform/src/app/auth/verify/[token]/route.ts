import { NextRequest } from 'next/server';

import { auth } from '@/server/auth';
import { validateToken } from '@/server/token';

export async function GET(
  req: NextRequest,
  { params }: { params: { token: string } },
) {
  const { token } = params;

  try {
    const userId = await validateToken('UserVerificationToken', token);
    const user = await auth.getUser(userId);
    await auth.invalidateAllUserSessions(user.userId);

    // update attributes
    await auth.updateUserAttributes(user.userId, {
      email_verified: 1,
      updated_at: new Date(),
    });

    // create session
    const session = await auth.createSession({
      userId: user.userId,
      attributes: {},
    });

    // set session cookie
    const cookie = auth.createSessionCookie(session);

    // redirect to home
    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/',
        'Set-Cookie': cookie.serialize(),
      },
    });
  } catch {
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/auth/signup',
      },
    });
  }
}
