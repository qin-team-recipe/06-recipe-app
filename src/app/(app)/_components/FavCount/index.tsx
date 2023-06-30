import { Icons } from '@/components/Icons';

type FavCountProps = {
  favorite: number;
};

export const FavCount = ({ favorite }: FavCountProps) => {
  return (
    <div className="absolute right-[7px] top-[8px] z-50 rounded-2xl bg-mauve-12 bg-opacity-60 p-1.5">
      <div className="flex items-center gap-x-1">
        <Icons.Fav className="h-3.5 w-3.5 stroke-[#fff] stroke-1" />
        <div className="text-xs text-[#fff]">{favorite}</div>
      </div>
    </div>
  );
};
