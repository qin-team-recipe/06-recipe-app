import { LOCAL_STORAGE_KEYS } from '@/_common/_constants/localStorage';
import { NextResponse, type NextRequest } from 'next/server';

export async function GET(req: NextRequest): Promise<NextResponse> {
  console.log('req', req);

  const res = NextResponse.json({ name: 'hanako' });

  res.cookies.set(LOCAL_STORAGE_KEYS.NICKNAME, 'jiro');

  return res;
}
