'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { RequireSignIn } from './RequireSignIn';
import { noRequireAuthUrlList } from './authConfig';

type SignInFilterProps = {
  children?: React.ReactNode;
};

export const SignInFilter = ({ children }: SignInFilterProps) => {
  const { data: session } = useSession();
  const pathname = usePathname() || '';

  // 認証不要なページの場合は、認証を求めない
  if (noRequireAuthUrlList.includes(pathname)) return <>{children}</>;

  // 認証が必要なページ、かつ、認証されていない場合は、認証を求める
  if (!session) return <RequireSignIn />;

  // 上記以外の場合は、認証を求めない
  return <>{children}</>;
};
