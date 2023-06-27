import { ChefCard } from '@/app/(app)/_components/ChefCard';
import { HeaderRoot } from '@/app/(app)/_components/HeaderRoot';
import { HorizontalScrollArea } from '@/app/(app)/_components/HorizontalScrollArea';
import { RecipeCard } from '@/app/(app)/_components/RecipeCard';
import { Icons } from '@/components/Icons';
import Link from 'next/link';

export const Fav = () => {
  return (
    <>
      <HeaderRoot layoutType={{ layoutType: 'center' }}>
        <h2 className="w-fit font-bold text-mauve-12">お気に入り</h2>
        <Link href="/setting" className="absolute inset-y-0 right-0 w-fit p-3">
          <Icons.Setting className="h-5 w-5 stroke-1 sm:stroke-1" />
        </Link>
      </HeaderRoot>
      <div className="flex flex-col space-y-12 pt-5">
        <section>
          <h3 className="mx-4 text-xl font-bold">シェフ</h3>
          <HorizontalScrollArea>
            <div className="mt-3 flex flex-row gap-x-4 px-4">
              {Array(10)
                .fill(null)
                .map((_, index) => (
                  // eslint-disable-next-line react/jsx-key
                  <ChefCard.Small id={index.toString()} name="山田シェフ" />
                ))}
            </div>
          </HorizontalScrollArea>
        </section>
        <section>
          <div className="flex flex-row items-center justify-between px-4">
            <h3 className="text-xl font-bold text-mauve-12">新着レシピ</h3>
            <Link href="/new-recipes">
              <span className="text-base font-bold text-mauve-9">もっとみる</span>
            </Link>
          </div>
          <HorizontalScrollArea>
            <div className="mt-3 flex h-32 flex-row gap-x-4 px-4">
              {Array(10)
                .fill(null)
                .map((_, index) => (
                  // eslint-disable-next-line react/jsx-key
                  <RecipeCard.Small id={index.toString()} name="定番レシピA" />
                ))}
            </div>
          </HorizontalScrollArea>
        </section>
        <section>
          <div className="flex flex-row items-center justify-between px-4">
            <h3 className="text-xl font-bold text-mauve-12">お気に入りレシピ</h3>
            <Link href="/fav/my">
              <span className="text-base font-bold text-mauve-9">マイレシピをみる</span>
            </Link>
          </div>
          <div className="mt-3">
            <div className="grid grid-cols-2 gap-4 px-4">
              {Array(10)
                .fill(null)
                .map((_, index) => (
                  // eslint-disable-next-line react/jsx-key
                  <RecipeCard.Middle id={index.toString()} name="定番レシピA" />
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
