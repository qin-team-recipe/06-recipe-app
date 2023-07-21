import { TopBar } from '@/app/(app)/_components/TopBar';
import { Icons } from '@/components/Icons';
import { Chef, Recipe } from '@/types';
import Link from 'next/link';
import { ChefList } from '../_components/ChefList';
import { RecipeList } from '../_components/RecipeList';

type FavProps = {
  chefData: Chef[];
  recipeData: Recipe[];
};

export const Fav = ({ chefData, recipeData }: FavProps) => {
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
          <ChefList chefData={chefData} shape="circle" />
        </section>
        <section className="space-y-3">
          <div className="flex flex-row items-center justify-between px-4">
            <h3 className="text-xl font-bold text-mauve-12">新着レシピ</h3>
            <Link href="/new-recipes">
              <span className="text-base font-bold text-mauve-9">もっとみる</span>
            </Link>
          </div>
          <RecipeList direction="horizontal" recipeData={recipeData} />
        </section>
        <section className="space-y-3">
          <div className="flex flex-row items-center justify-between px-4">
            <h3 className="text-xl font-bold text-mauve-12">お気に入りレシピ</h3>
            <Link href="/fav/my">
              <span className="text-base font-bold text-mauve-9">マイレシピをみる</span>
            </Link>
          </div>
          <RecipeList direction="vertical" recipeData={recipeData} />
        </section>
      </div>
    </>
  );
};
