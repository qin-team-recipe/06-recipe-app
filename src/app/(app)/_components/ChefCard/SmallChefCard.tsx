import Link from 'next/link';

type SmallChefItemProps = {
  id: string;
  name: string;
  image?: string;
};

export const SmallChefCard = ({ id, name }: SmallChefItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-1">
      <Link href={`/chef/${id}`} className="h-20 w-20 overflow-hidden rounded-full">
        <div className="relative aspect-square h-full w-full bg-mauve-4">
          {/* <Image src={imageSrc} fill style={{ objectFit: 'cover' }} alt="logo" /> */}
        </div>
      </Link>
      <span className="text-xs text-mauve-12">{name}</span>
    </div>
  );
};
