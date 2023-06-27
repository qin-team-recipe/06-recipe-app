import { VariantProps, tv } from 'tailwind-variants';

const header = tv({
  base: 'flex h-12 items-center border-b border-mauve-6 relative',
  variants: {
    layoutType: {
      center: 'justify-center',
      left: 'justify-start',
      right: 'justify-end',
      between: 'justify-between',
    },
  },
  defaultVariants: {
    layoutType: 'center',
  },
});

type TopBarLayout = VariantProps<typeof header>;

type TopBarProps = {
  children: React.ReactNode;
  layoutType?: TopBarLayout;
};

export const TopBar = ({ children, layoutType }: TopBarProps) => {
  return <header className={header(layoutType)}>{children}</header>;
};
