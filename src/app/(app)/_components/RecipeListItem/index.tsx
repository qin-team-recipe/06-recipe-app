import Link from 'next/link';
import { Fragment } from 'react';
import { VariantProps, tv } from 'tailwind-variants';
import { FavCount } from '../FavCount';

const recipeListItem = tv({
  slots: {
    wrapper: 'flex flex-col',
    base: 'overflow-hidden rounded-2xl shadow-inner',
    img: 'relative aspect-square bg-mauve-4',
  },
  variants: {
    type: {
      small: {
        wrapper: 'w-32',
        img: 'h-full w-full',
      },
    },
  },
});

export type RecipeListItemVariant = VariantProps<typeof recipeListItem>;

type RecipeListItemProps = {
  type?: RecipeListItemVariant;
  id: string;
  name: string;
  description: string;
  favorite: number;
  image?: string;
};

export const RecipeListItem = ({ id, type, name, description, favorite }: RecipeListItemProps) => {
  const { wrapper, base, img } = recipeListItem(type);
  return (
    <Link href={`/recipe/${id}`} className={wrapper()}>
      <div className={base()}>
        <div className={img()}>
          {/* <Image src={image} fill style={{ objectFit: 'cover' }} alt={name} /> */}
          {favorite > 0 ? <FavCount favorite={favorite} /> : <Fragment></Fragment>}
        </div>
      </div>
      <div className="mt-2 line-clamp-2 text-xs font-bold text-mauve-12">{name}</div>
      <div className="mt-auto truncate pt-1 text-[0.625rem] text-mauve-11">{description}</div>
    </Link>
  );
};
