import Image from 'next/image';
import Link from 'next/link';
import { VariantProps, tv } from 'tailwind-variants';

const chefListItem = tv({
  slots: {
    base: 'contents',
    imgWrapper: 'overflow-hidden',
    img: 'h-full w-full',
    label: 'text-xs text-mauve-12',
  },
  variants: {
    shape: {
      circle: {
        base: 'flex w-20 flex-col gap-y-1 overflow-hidden',
        imgWrapper: 'h-20 w-20 rounded-full shadow-smallInner',
        img: 'aspect-square',
        label: 'truncate text-center',
      },
      horizontalRectangle: {
        imgWrapper: 'h-40 w-36 rounded-2xl shadow-inner',
        img: 'relative',
        label:
          'absolute bottom-[10px] left-[8px] z-50 line-clamp-2 text-base font-semibold text-mauve-1',
      },
      verticalRectangle: {
        imgWrapper: 'h-full w-[88px] rounded-2xl shadow-smallInner',
        img: 'relative',
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

export const ChefListItem = ({ id, name, shape = 'circle', image }: ChefListItemProps) => {
  const { base, imgWrapper, img, label } = chefListItem({ shape });
  return (
    <div className={base()}>
      <Link href={`/chef/${id}`} className={imgWrapper()}>
        <div className={img()}>
          <Image
            className="z-[-1]"
            src={image ?? '/assets/images/sample/chef-sample.jpeg'}
            fill
            style={{ objectFit: 'cover' }}
            alt="logo"
          />
          {shape === 'horizontalRectangle' ? <div className={label()}>{name}</div> : null}
        </div>
      </Link>
      {shape === 'circle' ? <div className={label()}>{name}</div> : null}
    </div>
  );
};
