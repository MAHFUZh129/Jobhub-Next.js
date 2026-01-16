import { NextResponse } from 'next/server';

export function middleware(req) {
  const auth = req.cookies.get('auth');

  if (!auth && req.nextUrl.pathname.startsWith('/jobs')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/jobs/:path*'],
};
