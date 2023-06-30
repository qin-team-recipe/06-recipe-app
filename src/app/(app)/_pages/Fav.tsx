import { TopBar } from '@/app/(app)/_components/TopBar';
import { Icons } from '@/components/Icons';
import Link from 'next/link';
import { ChefList } from '../_components/ChefList';
import { HorizontalScrollArea } from '../_components/HorizontalScrollArea';
import { RecipeList } from '../_components/RecipeList';

export const Fav = () => {
  return (
    <>
      <TopBar variant="center">
        <h2 className="w-fit font-bold text-mauve-12">お気に入り</h2>
        <Link href="/setting" className="absolute inset-y-0 right-0 w-fit p-3">
          <Icons.Setting className="h-5 w-5 stroke-1 sm:stroke-1" />
        </Link>
      </TopBar>
      <div className="flex flex-col space-y-12 pt-5">
        <section className="space-y-3">
          <h3 className="mx-4 text-xl font-bold">シェフ</h3>
          <HorizontalScrollArea>
            <ChefList shape="circle" />
          </HorizontalScrollArea>
        </section>
        <section className="space-y-3">
          <div className="flex flex-row items-center justify-between px-4">
            <h3 className="text-xl font-bold text-mauve-12">新着レシピ</h3>
            <Link href="/new-recipes">
              <span className="text-base font-bold text-mauve-9">もっとみる</span>
            </Link>
          </div>
          <HorizontalScrollArea>
            <div className="flex flex-row gap-x-4 px-4">
              <RecipeList size="small" />
            </div>
          </HorizontalScrollArea>
        </section>
        <section className="space-y-3">
          <div className="flex flex-row items-center justify-between px-4">
            <h3 className="text-xl font-bold text-mauve-12">お気に入りレシピ</h3>
            <Link href="/fav/my">
              <span className="text-base font-bold text-mauve-9">マイレシピをみる</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 px-4">
            <RecipeList />
          </div>
        </section>
      </div>
    </>
  );
};
