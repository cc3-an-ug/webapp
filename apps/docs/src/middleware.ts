import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  const { origin, pathname } = req.nextUrl;
  const redirect = new URL('/lab-0-git-y-representacion-de-numeros', origin);

  if (pathname === '/') {
    return NextResponse.redirect(redirect);
  }

  return NextResponse.next();
}
