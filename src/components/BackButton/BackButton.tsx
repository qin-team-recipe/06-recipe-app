'use client';

import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import { Icons } from '../Icons';

export type BackButtonProps = React.ComponentPropsWithoutRef<'button'>;

export const BackButton = ({ className, ...props }: BackButtonProps) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <button
        {...props}
        // mr-1
        className={cn(
          'flex shrink-0 items-center px-2',
          'ring-inset focus-visible:ring-2 focus-visible:ring-mauve-7',
          className
        )}
        onClick={() => {
          if (pathname?.startsWith('/search')) {
            router.push('/');
          }
          //TODO: 画面ごとに処理を入れる
          if (document.referrer === '') {
            //TODO: 同ドメイン内で戻れるページが存在しない場合は、ここで処理
          }
          router.back();
        }}
      >
        <Icons.BackArrow className="h-6 w-6 stroke-mauve-12" />
      </button>
    </>
  );
};
