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

type HeaderLayout = VariantProps<typeof header>;

type HeaderRootProps = {
  children: React.ReactNode;
  layoutType?: HeaderLayout;
};

export const HeaderRoot = ({ children, layoutType }: HeaderRootProps) => {
  return <header className={header(layoutType)}>{children}</header>;
};
