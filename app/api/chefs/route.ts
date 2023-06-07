import { prisma } from 'libs/prisma';
import { NextResponse } from 'next/server';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function GET() {
  const chefs = await prisma.chef.findMany();
  return NextResponse.json({ chefs });
}
