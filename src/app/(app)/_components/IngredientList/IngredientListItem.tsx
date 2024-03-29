import { Icons } from '@/components/Icons';

type IngredientListItemProps = {
  body: string;
  onAddCart: () => void;
};

export const IngredientListItem = ({ body, onAddCart }: IngredientListItemProps) => {
  return (
    <div className="flex flex-row items-center justify-between px-4 py-2">
      <div className="text-sm text-mauve-11">{body}</div>
      <button onClick={onAddCart}>
        <Icons.CartPlus className="h-5 w-5 stroke-mauve-11 stroke-[1.5]" />
      </button>
    </div>
  );
};
