import Image from 'next/image';
import { HeroBackButton } from './HeroBackButton';

type HeroImageProps = {
  image: string;
};

export const HeroImage = ({ image }: HeroImageProps) => {
  return (
    <div className="relative shadow-heroInner backdrop:overflow-hidden">
      <div className="relative aspect-square">
        <Image className="z-[-1] object-cover" src={image} fill alt="" />
        <HeroBackButton />
      </div>
    </div>
  );
};
