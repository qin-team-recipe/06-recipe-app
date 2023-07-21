import { Fav } from '@/app/(app)/_pages/Fav';

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
  return <Fav chefDate={dummyChefData} />;
};

export default Home;
