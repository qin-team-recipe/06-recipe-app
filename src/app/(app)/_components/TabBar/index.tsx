'use client';

import * as Tabs from '@radix-ui/react-tabs';
import { TabItem } from './TabItem';

export type TabItem = {
  href: string;
  label: string;
};

export type TabBarProps = {
  children: React.ReactNode;
  tablist: TabItem[];
  defaltTabValue?: string;
};

export const TabBar = ({ children, tablist, defaltTabValue = 'tab1' }: TabBarProps) => {
  return (
    <Tabs.Root className="flex w-full flex-col" defaultValue={defaltTabValue}>
      <Tabs.List className="flex shrink-0 " asChild>
        <nav>
          {tablist.map((item, index) => (
            <TabItem key={index} tabValue={`tab${index + 1}`} href={item.href}>
              {item.label}
            </TabItem>
          ))}
        </nav>
      </Tabs.List>
      {children}
    </Tabs.Root>
  );
};
