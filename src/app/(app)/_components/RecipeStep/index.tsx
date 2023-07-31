import { RecipeStepItem } from '../RecipeStepItem';

type RecipeStep = {
  index: number;
  text: string;
};

type RecipeStepProps = {
  recipeStepData: RecipeStep[];
};

export const RecipeStep = ({ recipeStepData }: RecipeStepProps) => {
  return (
    <div className="divide-y divide-mauve-7 border-y border-mauve-7">
      {recipeStepData.map(({ index, text }) => (
        <RecipeStepItem key={index} index={index} text={text} />
      ))}
    </div>
  );
};
