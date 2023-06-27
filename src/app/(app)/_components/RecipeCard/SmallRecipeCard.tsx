import Link from 'next/link';

type SmallRecipeCardProps = {
  id: string;
  name: string;
  image?: string;
};

export const SmallRecipeCard = ({ id }: SmallRecipeCardProps) => {
  return (
    <Link href={`/recipe/${id}`} className="w-32 overflow-hidden rounded-2xl">
      <div className="relative aspect-square h-full w-full bg-mauve-4">
        {/* <Image src={image} fill style={{ objectFit: 'cover' }} alt={name} /> */}
      </div>
    </Link>
  );
};
