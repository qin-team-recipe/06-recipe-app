import { ActionButton } from '@/components/ActionButton';
import { BackButton } from '@/components/BackButton';
import { Chef } from '@/types';
import Image from 'next/image';
import { MediaLink, SocialMediaNav } from '../SocialMediaNav';

const ChefDetailHeader: React.FC<{ mediaLinks: MediaLink[] }> = ({ mediaLinks }) => {
  return (
    <div className="flex w-full justify-between">
      <BackButton />
      <SocialMediaNav mediaLinks={mediaLinks} />
    </div>
  );
};

const ChefCircleIcon: React.FC<{ image: string }> = ({ image }) => {
  return (
    <div className="relative h-20 w-20 overflow-hidden rounded-full">
      <div className="aspect-square h-full w-full">
        <Image
          className="object-cover"
          src={image ?? '/assets/images/sample/chef-sample.jpeg'}
          fill
          alt="logo"
        />
      </div>
    </div>
  );
};

export type ChefDetailProps = {
  chefData: Chef;
  mediaLinks: MediaLink[];
};

export const ChefDetail = ({
  chefData: { name, id, image, description, recipeCount, followCount },
  mediaLinks,
}: ChefDetailProps) => {
  return (
    <div className="px-4 pt-3">
      <ChefDetailHeader mediaLinks={mediaLinks} />
      <div className="mt-2 flex flex-row items-center justify-between gap-x-4">
        <div>
          <h2 className="text-2xl font-bold text-mauve-12">{name}</h2>
          <div className="text-sm text-mauve-11">{id}</div>
        </div>
        <ChefCircleIcon image={image ?? ''} />
      </div>
      <p className="mt-2 leading-6">{description}</p>
      <div className="mt-2 flex flex-row gap-x-4 text-mauve-11">
        <div className="text-sm">
          <span className="font-bold">{recipeCount}</span>
          <span className="ml-1">レシピ</span>
        </div>
        <div className="text-sm">
          <span className="font-bold">{followCount}</span>
          <span className="ml-1">フォロワー</span>
        </div>
      </div>
      <ActionButton className="mt-4 w-full" theme="filled">
        フォローする
      </ActionButton>
    </div>
  );
};
