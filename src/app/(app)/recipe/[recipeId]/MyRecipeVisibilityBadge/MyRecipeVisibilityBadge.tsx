import { tv } from 'tailwind-variants';

export type MyRecipeVisibilityBadgeProps = {
  isPublic: boolean;
};

const myRecipeVisibilityBadge = tv({
  base: 'rounded-2 text-orange-300 w-32 rounded border px-1 py-1 text-center text-xs',
  variants: {
    isPublic: {
      true: 'border-tomato-8 bg-tomato-2 text-tomato-11',
      false: 'border-mauve-8 bg-mauve-2 text-mauve-11',
    },
  },
});

export const MyRecipeVisibilityBadge = ({ isPublic }: MyRecipeVisibilityBadgeProps) => {
  const text = isPublic ? '公開中のマイレシピ' : '非公開のマイレシピ';

  return <div className={myRecipeVisibilityBadge({ isPublic: isPublic })}>{text}</div>;
};
