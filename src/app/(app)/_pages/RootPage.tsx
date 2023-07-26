import { Chef, Recipe } from '@/types';
import { ChefList } from '../_components/ChefList';
import { RecipeList } from '../_components/RecipeList';
import { SearchSection } from '../_components/SearchSection';
import { SectionHeader } from '../_components/SectionHeader';

type RootPageProps = {
  chefData: Chef[];
  recipeData: Recipe[];
};

export const RootPage = ({ chefData, recipeData }: RootPageProps) => {
  return (
    <>
      <SearchSection />
      <div className="mt-5 flex flex-col space-y-12">
        <section className="space-y-3">
          <SectionHeader title="注目のシェフ" />
          <ChefList chefData={chefData} shape="horizontalRectangle" />
        </section>
        <section className="space-y-3">
          <SectionHeader title="話題のレシピ" href="/search/recipe" />
          <RecipeList direction="horizontal" recipeData={recipeData} />
        </section>
        <section className="space-y-3">
          <SectionHeader title="シェフ" href="/search/chef" />
          <ChefList chefData={chefData} shape="verticalRectangle" />
        </section>
      </div>
    </>
  );
};
