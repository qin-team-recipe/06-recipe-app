'use client';

import { usePathname } from 'next/navigation';
import { tv } from 'tailwind-variants';

type BottomNavBarProps = {
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

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ children }) => {
  const pathname = usePathname();

  const isShow = pathname === '/';

  return <ul className={bottomNavBar({ isShow })}>{children}</ul>;
};
