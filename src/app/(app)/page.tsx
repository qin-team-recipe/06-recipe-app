import { RootPage } from './_pages/RootPage';

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
  return <RootPage chefData={dummyChefData} recipeData={dummyRecipeData} />;
};

export default Home;
