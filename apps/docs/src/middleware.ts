import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  const { origin, pathname } = req.nextUrl;
  const redirect = new URL('/lab-0-git-y-representacion-de-numeros', origin);

  if (pathname === '/') {
    return NextResponse.redirect(redirect);
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
