import Link from 'next/link';
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
        label: 'text-center truncate',
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
  variant?: ChefListItemVariant['shape'];
  id: string;
  name: string;
  image?: string;
};

export const ChefListItem = ({ id, name, variant = 'circle' }: ChefListItemProps) => {
  const { base, imgWrapper, img, label } = chefListItem({ shape: variant });
  return (
    <div className={base()}>
      <Link href={`/chef/${id}`} className={imgWrapper()}>
        <div className={img()}>
          {/* <Image src={imageSrc} fill style={{ objectFit: 'cover' }} alt="logo" /> */}
          {variant === 'rectangle' && <div className={label()}>{name}</div>}
        </div>
      </Link>
      {variant === 'circle' && <div className={label()}>{name}</div>}
    </div>
  );
};
