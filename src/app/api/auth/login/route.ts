import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { signToken, COOKIE_NAME } from '@/lib/auth';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  const adminUser = process.env.ADMIN_USERNAME ?? 'admin';
  const adminHash = process.env.ADMIN_PASSWORD_HASH;
  const adminPass = process.env.ADMIN_PASSWORD;

  if (username !== adminUser) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  let valid = false;
  if (adminHash) {
    valid = await bcrypt.compare(password, adminHash);
  } else if (adminPass) {
    valid = password === adminPass;
  }

  if (!valid) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const token = signToken({ username });
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });
  return res;
}
