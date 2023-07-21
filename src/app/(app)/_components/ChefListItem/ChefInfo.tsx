import { Icons } from '@/components/Icons';

type ChefInfoProps = {
  name: string;
  description: string;
  recipeCount: number;
};

export const ChefInfo = ({ name, description, recipeCount }: ChefInfoProps) => {
  return (
    <div className="flex-1">
      <h3 className="text-lg font-bold text-mauve-12">{name}</h3>
      <p className="mt-1 line-clamp-3 text-sm text-mauve-10">{description}</p>
      <div className="flex items-center gap-x-1.5 text-sm text-mauve-12">
        <Icons.IconToolsKitchen2 size={16} className="stroke-mauve-12" />
        <div>
          <span className="mr-0.5">{recipeCount}</span>レシピ
        </div>
      </div>
    </div>
  );
};
