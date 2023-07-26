import * as React from 'react';

import { cn } from '@/lib/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        {...props}
        type={type}
        className={cn(
          'w-full rounded-lg bg-mauve-4 py-2 pl-11 pr-3',
          'font-bold leading-6 placeholder:text-mauve-11',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-mauve-7',
          className
        )}
        ref={ref}
      />
    );
  }
);

Input.displayName = 'Input';
