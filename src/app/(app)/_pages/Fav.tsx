import { TopBar } from '@/app/(app)/_components/TopBar';
import { Icons } from '@/components/Icons';
import { Chef, Recipe } from '@/types';
import Link from 'next/link';
import { ChefList } from '../_components/ChefList';
import { RecipeList } from '../_components/RecipeList';
import { SectionHeader } from '../_components/SectionHeader';

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
          <SectionHeader title="シェフ" />
          <ChefList chefData={chefData} shape="circle" />
        </section>
        <section className="space-y-3">
          <SectionHeader title="新着レシピ" href="/new-recipes" />
          <RecipeList direction="horizontal" recipeData={recipeData} />
        </section>
        <section className="space-y-3">
          <SectionHeader title="お気に入りレシピ" href="/fav/my" />
          <RecipeList direction="vertical" recipeData={recipeData} />
        </section>
      </div>
    </>
  );
};
