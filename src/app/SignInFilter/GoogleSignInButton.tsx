import { signIn } from 'next-auth/react';
import Image from 'next/image';

export const GoogleSignInButton = () => {
  return (
    <>
      <button
        onClick={() => signIn('google')}
        className="inline-flex items-center rounded-lg bg-blue-10 px-5 py-2.5 text-center text-sm font-bold text-mauve-1 hover:bg-blue-10/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-10/50 dark:focus-visible:ring-blue-10/50"
      >
        <Image
          src={'/assets/icon/signIn/googleIcon.svg'}
          alt="googleアイコン"
          width={16}
          height={16}
          className="mr-4"
        />
        Google ログイン
      </button>
    </>
  );
};
