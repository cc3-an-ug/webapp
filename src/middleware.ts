import { type NextRequest, NextResponse } from 'next/server';

export default async function handler(req: NextRequest) {
  // data from request
  const origin = req.nextUrl.origin;
  const first = '/doc/lab-0-git-y-representacion-de-numeros';

  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(first, origin));
  }

  if (req.nextUrl.pathname === '/doc') {
    return NextResponse.redirect(new URL(first, origin));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
