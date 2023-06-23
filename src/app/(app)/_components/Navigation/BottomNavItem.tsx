'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { tv } from 'tailwind-variants';

type BottomNavItemProps = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const textStyle = tv({
  base: 'text-[0.6rem] sm:text-base',
  variants: {
    isActive: {
      true: 'font-bold text-tomato-11 sm:text-tomato-11',
      false: 'text-mauve-11 sm:text-mauve-12',
    },
  },
});

const iconStyle = tv({
  base: 'h-6 w-6 stroke-1 sm:stroke-1',
  variants: {
    isActive: {
      true: 'stroke-tomato-11 sm:stroke-tomato-11 stroke-2 sm:stroke-2 ',
      false: 'stroke-mauve-11 sm:stroke-mauve-12',
    },
  },
});

export const BottomNavItem = ({ label, href, icon }: BottomNavItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

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
        <div className={iconStyle({ isActive })}>{icon}</div>
        <span className={textStyle({ isActive })}>{label}</span>
      </Link>
    </li>
  );
};
