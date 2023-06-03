import { LOCAL_STORAGE_KEYS } from '@/_common/_constants/localStorage';
import { NextResponse, type NextRequest } from 'next/server';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const res = NextResponse.json({ name: 'taro' });

  res.cookies.set(LOCAL_STORAGE_KEYS.NICKNAME, 'john');

  return res;
}
