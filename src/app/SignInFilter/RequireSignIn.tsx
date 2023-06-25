'use client';
import { PAGE_URLS } from '@/constants/pageUrls';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AppleSignInButton } from './AppleSignInButton';
import { GoogleSignInButton } from './GoogleSignInButton';

export const RequireSignIn = () => {
  const pathname = usePathname();

  const imagePath = () => {
    switch (pathname) {
      case PAGE_URLS.FAVORITE:
        return '/assets/images/signIn/girl1.webp';
      case PAGE_URLS.SHOPPING_LIST:
        return '/assets/images/signIn/girl2.webp';
      default:
        return '/assets/images/signIn/girl2.webp';
    }
  };

  return (
    <div className="mt-2">
      <div className="flex justify-center">
        <Image src={imagePath()} alt="ログイン要求画像" width={200} height={200} />
      </div>
      <p className="mb-2 text-center font-bold">ログインをお願いします</p>
      <p className="mb-8 text-center">こちらの機能を利用するにはログインが必要です</p>
      <div className="flex flex-col items-center justify-center gap-2.5 sm:flex-row">
        <div className="px-1">
          <GoogleSignInButton />
        </div>
        <div className="px-1">
          <AppleSignInButton />
        </div>
      </div>
    </div>
  );
};
