import { Icons } from '@/components/Icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type NavigationProps = {
  children: React.ReactNode;
};

export const Navigation = ({ children }: NavigationProps) => {
  return (
    <nav
      className={cn(
        'fixed bottom-0 w-full bg-mauve-1',
        'sm:z-100 sm:bg-white sm:sticky sm:bottom-auto sm:top-0 sm:w-auto sm:self-start'
      )}
    >
      <div className="hidden sm:mt-5 sm:block">
        <Link className="text-2xl font-bold" href="/">
          <div className="flex items-center gap-2.5 whitespace-nowrap capitalize">
            <Icons.Chef className="text-mauve12 h-[32px] w-[32px] stroke-2" />
            app
          </div>
        </Link>
      </div>
      {children}
    </nav>
  );
};
