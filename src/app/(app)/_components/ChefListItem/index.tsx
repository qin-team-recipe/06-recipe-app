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
        base: 'flex w-20 flex-col gap-y-1 overflow-hidden',
        imgWrapper: 'h-20 w-20 rounded-full',
        img: 'aspect-square bg-mauve-4',
        label: 'truncate text-center',
      },
      rectangle: {
        imgWrapper: 'h-52 w-40 rounded-2xl',
        img: 'relative bg-mauve-11',
        label:
          'absolute bottom-[10px] left-[8px] z-50 line-clamp-2 text-base font-semibold text-mauve-1',
      },
    },
  },
});

export type ChefListItemVariant = VariantProps<typeof chefListItem>;

type ChefListItemProps = {
  shape?: ChefListItemVariant['shape'];
  id: string;
  name: string;
  image?: string;
};

export const ChefListItem = ({ id, name, shape = 'circle' }: ChefListItemProps) => {
  const { base, imgWrapper, img, label } = chefListItem({ shape });
  return (
    <div className={base()}>
      <Link href={`/chef/${id}`} className={imgWrapper()}>
        <div className={img()}>
          {/* <Image src={imageSrc} fill style={{ objectFit: 'cover' }} alt="logo" /> */}
          {shape === 'rectangle' ? <div className={label()}>{name}</div> : null}
        </div>
      </Link>
      {shape === 'circle' ? <div className={label()}>{name}</div> : null}
    </div>
  );
};
