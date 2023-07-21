import { ComponentProps, ReactNode } from 'react';
import { tv } from 'tailwind-variants';

const button = tv({
  base: 'rounded px-3 py-1 text-center text-sm',
  variants: {
    active: {
      true: 'bg-tomato-9 text-mauve-1',
      false: 'radius-1 border border-tomato-7 text-tomato-9',
    },
  },
});

export type ActionButtonProps = ComponentProps<'button'> & {
  children: ReactNode;
  active: boolean;
};

export const ActionButton = ({ children, active, className, ...props }: ActionButtonProps) => {
  return (
    <button {...props} className={button({ active, className })}>
      {children}
    </button>
  );
};
