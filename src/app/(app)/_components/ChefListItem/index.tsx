import Link from 'next/link';
import { Fragment } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const chefListItem = tv({
  slots: {
    base: 'contents',
    imgWrapper: 'overflow-hidden shadow-inner',
    img: 'h-full w-full',
    label: 'text-xs text-mauve-12',
  },
  variants: {
    shape: {
      circle: {
        base: 'flex flex-col gap-y-1 w-20 overflow-hidden',
        imgWrapper: 'h-20 w-20 rounded-full',
        img: 'aspect-square bg-mauve-4',
        label: 'text-center',
      },
      rectangle: {
        imgWrapper: 'h-52 w-40 rounded-2xl',
        img: 'relative bg-mauve-11',
        label:
          'z-50 absolute bottom-[10px] left-[8px] text-base text-mauve-1 font-semibold line-clamp-2',
      },
    },
  },
});

export type ChefListItemVariant = VariantProps<typeof chefListItem>;

type ChefListItemProps = {
  type: ChefListItemVariant;
  id: string;
  name: string;
  image?: string;
};

export const ChefListItem = ({ id, name, type }: ChefListItemProps) => {
  const { base, imgWrapper, img, label } = chefListItem(type);
  return (
    <div className={base()}>
      <Link href={`/chef/${id}`} className={imgWrapper()}>
        <div className={img()}>
          {/* <Image src={imageSrc} fill style={{ objectFit: 'cover' }} alt="logo" /> */}
          {type?.shape === 'rectangle' ? (
            <div className={label()}>{name}</div>
          ) : (
            <Fragment></Fragment>
          )}
        </div>
      </Link>
      {type?.shape === 'circle' ? (
        <div className={label()}>
          <div className="truncate">{name}</div>
        </div>
      ) : (
        <Fragment></Fragment>
      )}
    </div>
  );
};
