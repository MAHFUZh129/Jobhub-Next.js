import { NextResponse } from 'next/server';

export async function POST(req) {
  const { email, password } = await req.json();

  if (email === 'orin@mh.com' && password === 'Orin135mh') {
    const res = NextResponse.json({ success: true });

    res.cookies.set('auth', 'true', {
      httpOnly: true,
      path: '/',
    });

    return res;
  }
  return NextResponse.json(
    { message: 'Invalid credentials' },
    { status: 401 }
  );
   
}
