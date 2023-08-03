import { ActionButton } from '@/components/ActionButton';
import { Chef, Recipe } from '@/types';
import Image from 'next/image';
import { HeroImage } from '../HeroImage';
import { SocialMediaNav } from '../SocialMediaNav';

const ChefCircleIcon: React.FC<{ image: string }> = ({ image }) => {
  return (
    <div className="relative h-4 w-4 overflow-hidden rounded-full">
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

type RecipeDetailProps = {
  recipeData: Recipe;
  chefData: Chef;
};

export const RecipeDetail = ({ recipeData, chefData }: RecipeDetailProps) => {
  return (
    <>
      <HeroImage image={recipeData?.image ?? ''} />
      <section className="mx-4">
        <div className="mt-4 flex flex-row items-start justify-between gap-x-3">
          <div className="text-xl font-bold text-mauve-12">{recipeData.name}</div>
          <SocialMediaNav mediaLinks={chefData.links ?? []} />
        </div>
        <p className="mt-3">{recipeData.description}</p>
        <div className="mt-2 flex flex-row items-center gap-x-4">
          <div className="flex items-center gap-x-1">
            <ChefCircleIcon image={chefData.image ?? ''} />
            <span className="text-sm text-mauve-11">{chefData.name}</span>
          </div>
          <div className="text-sm text-mauve-11">
            <span className="font-bold">{recipeData.favorite}</span>
            <span className="ml-1">お気に入り</span>
          </div>
        </div>
        <ActionButton className="mt-4 w-full" theme="filled">
          お気に入りに追加
        </ActionButton>
      </section>
    </>
  );
};
