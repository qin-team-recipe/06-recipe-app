import { ChefListItem, ChefListItemVariant } from '@/app/(app)/_components/ChefListItem';
import { ChefInfo } from '@/app/(app)/_components/ChefListItem/ChefInfo';
import { HorizontalScrollArea } from '@/app/(app)/_components/HorizontalScrollArea';

import { Chef } from '@/types';

type HorizontalChefListProps = {
  chefData: Chef[];
  shape: ChefListItemVariant['shape'];
};

export const ChefList = ({ chefData, shape }: HorizontalChefListProps) => {
  if (shape === 'verticalRectangle') {
    return (
      <div className="space-y-4">
        {chefData.map(({ id, name, description, recipeCount }) => (
          <>
            <div className="flex h-28 w-full flex-row items-start gap-x-4">
              <ChefListItem shape="verticalRectangle" key={id} id={id} name={name} />
              <ChefInfo name={name} description={description} recipeCount={recipeCount} />
            </div>
          </>
        ))}
      </div>
    );
  }

  return (
    <HorizontalScrollArea>
      <div className="flex flex-row gap-x-4 px-4">
        {chefData.map(({ id, name }) => (
          <ChefListItem shape={shape} key={id} id={id} name={name} />
        ))}
      </div>
    </HorizontalScrollArea>
  );
};
