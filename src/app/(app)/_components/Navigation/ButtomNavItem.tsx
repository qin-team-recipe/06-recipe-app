'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { tv } from 'tailwind-variants';
import { UrlObject } from 'url';
import { Icons } from '../Icons/Icon';

type NavLavel = 'さがす' | 'お気に入り' | '買い物リスト';

type ButtonNavItemProps = {
  label: NavLavel;
  href: string | UrlObject;
};

const text = tv({
  base: 'text-[0.6rem] sm:text-base',
  variants: {
    isActive: {
      true: 'font-bold text-tomato-11 sm:text-tomato-11',
      false: 'text-mauve-11 sm:text-mauve-12',
    },
  },
});

const icon = tv({
  base: 'h-6 w-6 stroke-1 sm:stroke-1',
  variants: {
    isActive: {
      true: 'stroke-tomato-11 sm:stroke-tomato-11 stroke-2 sm:stroke-2 ',
      false: 'stroke-mauve-11 sm:stroke-mauve-12',
    },
  },
});

export const ButtomNavItem: React.FC<ButtonNavItemProps> = ({ label, href }) => {
  const pathName = usePathname();

  const isActive = pathName === href;

  const toggleIconFunc = () => {
    switch (label) {
      case 'さがす':
        return <Icons.Search className={icon({ isActive })} />;
      case 'お気に入り':
        return <Icons.Fav className={icon({ isActive })} />;
      case '買い物リスト':
        return <Icons.Cart className={icon({ isActive })} />;
      default:
        return null;
    }
  };

  return (
    <li className="flex-1">
      <Link
        href="/"
        className="
        duration-330 flex w-full select-none flex-col items-center gap-0.5
        transition-colors sm:w-fit sm:flex-row sm:flex-nowrap sm:gap-x-3 sm:rounded-full
        sm:py-2 sm:pl-1.5 sm:pr-5 hover:sm:bg-mauve-4 active:sm:bg-mauve-5
        "
      >
        {toggleIconFunc()}
        <span className={text({ isActive })}>{label}</span>
      </Link>
    </li>
  );
};
