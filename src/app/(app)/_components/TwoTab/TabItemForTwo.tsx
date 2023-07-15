'use client';

import * as Tabs from '@radix-ui/react-tabs';
import Link from 'next/link';

type TabItemForTwoProps = {
  tabValue: string;
  href: string;
  children: React.ReactNode;
  asChild?: boolean;
};

export const TabItemForTwo = ({ tabValue, href, children, asChild = true }: TabItemForTwoProps) => {
  return (
    <Tabs.Trigger value={tabValue} asChild={asChild}>
      <Link
        className="flex-1 border-b-[1px] border-mauve-6 py-2.5 text-center data-[state=active]:border-b-2 data-[state=active]:border-mauve-12 data-[state=active]:font-bold"
        href={href}
      >
        {children}
      </Link>
    </Tabs.Trigger>
  );
};
