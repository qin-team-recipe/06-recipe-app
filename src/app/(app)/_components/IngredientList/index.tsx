import { Recipe } from '@/types';
import { IngredientListItem } from './IngredientListItem';

type IngredientListProps = {
  recipeData: Recipe;
};

export const IngredientList = ({ recipeData: { material, name } }: IngredientListProps) => {
  const handleButtonClick = () => {
    console.log(`レシピ名${name} 買い物リストに追加しました。`);
  };

  return (
    <div className="divide-y divide-mauve-7 border-y border-mauve-7">
      {material?.map((material, idx) => (
        <IngredientListItem key={idx} body={material.body} handleButtonClick={handleButtonClick} />
      ))}
    </div>
  );
};
