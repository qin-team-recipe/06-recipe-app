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

type TopBarVariant = VariantProps<typeof header>;

type TopBarProps = {
  children: React.ReactNode;
  variant?: TopBarVariant['layoutType'];
};

export const TopBar = ({ children, variant }: TopBarProps) => {
  return <header className={header({ layoutType: variant })}>{children}</header>;
};
