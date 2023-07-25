'use client';
import { Icons } from '@/components/Icons';
import { useRouter } from 'next/navigation';

export const HeroBackButton = () => {
  const router = useRouter();
  return (
    <button
      className="absolute left-5 top-5 rounded-full bg-mauvea-8 p-1"
      onClick={() => {
        if (document.referrer === '') {
          //TODO: 同ドメイン内で戻れるページが存在しない場合は、ここで処理
        }
        router.back();
      }}
    >
      <Icons.HeroBackArrow className="h-8 w-8 stroke-mauve-1" strokeWidth={1.5} />
    </button>
  );
};
