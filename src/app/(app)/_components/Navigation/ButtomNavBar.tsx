'use client';

import { usePathname } from 'next/navigation';
import { tv } from 'tailwind-variants';

type ButtonNavBarProps = {
  children: React.ReactNode;
};

const bottomNavBar = tv({
  base: 'flex w-full py-0.5 shadow-base sm:flex-col sm:gap-2 sm:py-0 sm:shadow-none sm:mt-8',
  variants: {
    isShow: {
      true: 'flex',
      false: 'hidden sm:flex',
    },
  },
});

export const ButtomNavBar: React.FC<ButtonNavBarProps> = ({ children }) => {
  const pathName = usePathname();

  const isShow = pathName === '/';

  return <ul className={bottomNavBar({ isShow })}>{children}</ul>;
};
