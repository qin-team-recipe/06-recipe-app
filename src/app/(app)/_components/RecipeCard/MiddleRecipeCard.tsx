import Link from 'next/link';

type MiddleRecipeCardProps = {
  id: string;
  name: string;
  image?: string;
};

export const MiddleRecipeCard = ({ id }: MiddleRecipeCardProps) => {
  return (
    <Link href={`/recipe/${id}`} className="overflow-hidden rounded-2xl">
      <div className="relative aspect-square bg-mauve-4">
        {/* <Image src={image} fill style={{ objectFit: 'cover' }} alt={name} /> */}
      </div>
    </Link>
  );
};
