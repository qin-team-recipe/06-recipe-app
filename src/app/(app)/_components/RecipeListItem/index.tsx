import Image from 'next/image';
import Link from 'next/link';
import { VariantProps, tv } from 'tailwind-variants';
import { FavCount } from '../FavCount';

const recipeListItem = tv({
  slots: {
    wrapper: 'flex flex-col',
    base: 'overflow-hidden rounded-2xl shadow-smallInner',
    img: 'relative aspect-square',
  },
  variants: {
    direction: {
      horizontal: {
        wrapper: 'w-32',
        img: 'h-full w-full',
      },
      vertical: {},
    },
  },
});

export type RecipeListItemVariant = VariantProps<typeof recipeListItem>;

type RecipeListItemProps = {
  id: string;
  name: string;
  description: string;
  favorite: number;
  image?: string;
  direction: RecipeListItemVariant['direction'];
};

export const RecipeListItem = ({
  id,
  direction,
  name,
  description,
  favorite,
  image,
}: RecipeListItemProps) => {
  const { wrapper, base, img } = recipeListItem({ direction });
  return (
    <Link href={`/recipe/${id}`} className={wrapper()}>
      <div className={base()}>
        <div className={img()}>
          <Image
            className="z-[-1]"
            src={image ?? '/assets/images/sample/recipe-sample.png'}
            fill
            style={{ objectFit: 'cover' }}
            alt={name}
          />
          {favorite > 0 ? <FavCount favorite={favorite} /> : null}
        </div>
      </div>
      <div className="mt-2 line-clamp-2 text-xs font-bold text-mauve-12">{name}</div>
      <div className="mt-auto truncate pt-1 text-[0.625rem] text-mauve-11">{description}</div>
    </Link>
  );
};
