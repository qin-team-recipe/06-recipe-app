'use client';

import { PAGE_URLS } from '@/constants/pageUrls';
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type Props = {
  children?: React.ReactNode;
};

const NextAuthProviderInner = ({ children }: Props) => {
  const { data: session } = useSession();
  const router = useRouter();
  // セッション情報が取得できない場合、サインインページへリダイレクト
  if (session === null) {
    router.push(PAGE_URLS.SING_IN);
    return <>{children}</>;
  }

  return <>{children}</>;
};

export const NextAuthProvider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <NextAuthProviderInner>{children}</NextAuthProviderInner>
    </SessionProvider>
  );
};
