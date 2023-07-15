'use client';

import * as Tabs from '@radix-ui/react-tabs';
import { TabItemForTwo } from './TabItemForTwo';

export type TabItem = {
  tabValue: number;
  href: string;
  label: string;
};

export type TwoTabProps = {
  children: React.ReactNode;
  tablist: TabItem[];
};

export const TwoTab = ({ children, tablist }: TwoTabProps) => {
  return (
    <Tabs.Root className="flex w-full flex-col" defaultValue="tab1">
      <Tabs.List className="flex shrink-0 " asChild>
        <nav>
          {tablist.map((item) => (
            <TabItemForTwo key={item.tabValue} tabValue={`tab${item.tabValue}`} href={item.href}>
              {item.label}
            </TabItemForTwo>
          ))}
        </nav>
      </Tabs.List>
      {children}
    </Tabs.Root>
  );
};
