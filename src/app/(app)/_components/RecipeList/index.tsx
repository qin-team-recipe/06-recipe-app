import { Recipe } from '@/types';
import { HorizontalScrollArea } from '../HorizontalScrollArea';
import { RecipeListItem, RecipeListItemVariant } from '../RecipeListItem';

type RecipeListProps = {
  recipeData: Recipe[];
  direction?: RecipeListItemVariant['direction'];
};

export const RecipeList = ({ direction = 'horizontal', recipeData }: RecipeListProps) => {
  if (direction === 'vertical') {
    return (
      <div className="grid grid-cols-2 gap-4 px-4">
        {recipeData.map(({ id, name, description, favorite }) => (
          <RecipeListItem
            direction="vertical"
            key={id}
            id={id}
            name={name}
            description={description}
            favorite={favorite}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <HorizontalScrollArea>
        <div className="flex flex-row gap-x-4 px-4">
          {recipeData.map(({ id, name, description, favorite }) => (
            <RecipeListItem
              direction="horizontal"
              key={id}
              id={id}
              name={name}
              description={description}
              favorite={favorite}
            />
          ))}
        </div>
      </HorizontalScrollArea>
    </>
  );
};
