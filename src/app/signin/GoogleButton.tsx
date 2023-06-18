'use client';

import { NextAuthProvider } from '@/components/NextAuthProvider/NextAuthProvider';
import { signIn, signOut, useSession } from 'next-auth/react';

const GoogleButtonInner = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('google')}>Sign in</button>
    </>
  );
};

export const GoogleButton = () => {
  return (
    <NextAuthProvider>
      <GoogleButtonInner />
    </NextAuthProvider>
  );
};
