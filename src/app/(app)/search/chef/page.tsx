'use client';

import * as Tabs from '@radix-ui/react-tabs';
import { useSearchParams } from 'next/navigation';
import { ChefList } from '../../_components/ChefList';
import { SectionHeader } from '../../_components/SectionHeader';

const dummyChefData = [
  {
    id: crypto.randomUUID(),
    name: '田中シェフ',
    description:
      '白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。',
    recipeCount: 123,
  },
  {
    id: crypto.randomUUID(),
    name: '井上シェフ',
    description:
      '白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。',
    recipeCount: 0,
  },
  {
    id: crypto.randomUUID(),
    name: '長谷川シェフ',
    description:
      '白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。',
    recipeCount: 240,
  },
  {
    id: crypto.randomUUID(),
    name: 'フレディーシェフ',
    description:
      '白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。',
    recipeCount: 240,
  },
  {
    id: crypto.randomUUID(),
    name: '少し名前が長いシェフ',
    description:
      '白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。',
    recipeCount: 5000,
  },
];

const Home = () => {
  const params = useSearchParams();
  const query = params?.get('q');

  const CHEF_HEADER_TITLE = query ? `「${query}」で検索` : 'シェフ一覧';

  return (
    <Tabs.Content value="tab2" className="mt-5 space-y-2">
      <SectionHeader title={CHEF_HEADER_TITLE} />
      <ChefList shape="verticalRectangle" chefData={dummyChefData} />
    </Tabs.Content>
  );
};

export default Home;
