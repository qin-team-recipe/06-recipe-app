import { RecipeListItem, RecipeListItemVariant } from '../RecipeListItem';

type RecipeListProps = {
  type?: RecipeListItemVariant;
};

// TODO:ダミーデータ & プロパティも適当なので削除する
const dummyRecipeData = [
  {
    id: '1',
    name: '定番レシピA',
    description: '短い説明文',
    favorite: 100,
  },
  {
    id: '2',
    name: '定番レシピB',
    description: '少し長めの説明文',
    favorite: 0,
  },
  {
    id: '3',
    name: '少しタイトルが長めの定番レシピC',
    description: '少し長めの説明文少し長めの説明文少し長めの説明文',
    favorite: 36,
  },
  {
    id: '4',
    name: 'タイトルがそこそこ長めの大人気定番レシピC',
    description: '少し長めの説明文少し長めの説明文少し長めの説明文',
    favorite: 200,
  },
];

export const RecipeList = ({ type }: RecipeListProps) => {
  return (
    <>
      {dummyRecipeData.map(({ id, name, description, favorite }) => (
        <RecipeListItem
          type={type}
          key={id}
          id={id}
          name={name}
          description={description}
          favorite={favorite}
        />
      ))}
    </>
  );
};
