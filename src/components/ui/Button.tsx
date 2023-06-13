import { tv } from 'tailwind-variants';

interface ButtonProps {
  color?: 'primary' | 'secondary';
  label: string;
  onClick?: () => void;
}

const button = tv({
  base: 'font-bold cursor-pointer inline-block leading-none rounded-3xl border-0 px-4 py-2',
  variants: {
    color: {
      primary: 'bg-blue-400',
      secondary: 'bg-red-400',
    },
  },
});

export const Button = ({ color = 'primary', label, ...props }: ButtonProps) => {
  return (
    <button type="button" className={button({ color: color })} {...props}>
      {label}
    </button>
  );
};
