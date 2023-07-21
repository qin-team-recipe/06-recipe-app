import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
  base: 'rounded px-3 py-1 text-center text-sm',
  variants: {
    theme: {
      filled: 'bg-tomato-9 text-mauve-1',
      outline: 'radius-1 border border-tomato-7 text-tomato-9',
    },
  },
});

export type Theme = VariantProps<typeof button>['theme'];

export type ActionButtonProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode;
  theme?: Theme;
};

export const ActionButton = ({
  children,
  theme = 'filled',
  className,
  ...props
}: ActionButtonProps) => {
  return (
    <button {...props} className={button({ theme, className })}>
      {children}
    </button>
  );
};
