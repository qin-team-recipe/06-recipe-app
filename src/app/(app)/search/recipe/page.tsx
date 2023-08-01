'use client';

import * as Tabs from '@radix-ui/react-tabs';
import { useSearchParams } from 'next/navigation';
import { RecipeList } from '../../_components/RecipeList';
import { SectionHeader } from '../../_components/SectionHeader';

const dummyRecipeData = [
  {
    id: crypto.randomUUID(),
    name: '定番レシピA',
    description: '短い説明文',
    favorite: 100,
  },
  {
    id: crypto.randomUUID(),
    name: '定番レシピB',
    description: '少し長めの説明文',
    favorite: 0,
  },
  {
    id: crypto.randomUUID(),
    name: '少しタイトルが長めの定番レシピC',
    description: '少し長めの説明文少し長めの説明文少し長めの説明文',
    favorite: 36,
  },
  {
    id: crypto.randomUUID(),
    name: 'タイトルがそこそこ長めの大人気定番レシピC',
    description: '少し長めの説明文少し長めの説明文少し長めの説明文',
    favorite: 200,
  },
];

const Home = () => {
  const params = useSearchParams();
  const query = params?.get('q');

  const RECIPE_HEADER_TITLE = query ? `「${query}」で検索` : '話題のレシピ';

  return (
      <Tabs.Content value="tab1" className="mt-5 space-y-2">
        <SectionHeader title={RECIPE_HEADER_TITLE} />
        <RecipeList direction="vertical" recipeData={dummyRecipeData} />
      </Tabs.Content>
  );
};

export default Home;
