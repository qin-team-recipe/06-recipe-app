'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { SearchSection } from '../_components/SearchSection';
import { TabBar, type TabItem } from '../_components/TabBar';

type SearchWrapperProps = {
  children: React.ReactNode;
};

export const SearchWrapper = ({ children }: SearchWrapperProps) => {
  const pathname = usePathname();
  const params = useSearchParams();
  const query = params?.get('q');

  const tabList: TabItem[] = [
    {
      href: query ? `/search/recipe?q=${query}` : '/search/recipe',
      label: 'レシピ',
    },
    {
      href: query ? `/search/chef?q=${query}` : '/search/chef',
      label: 'シェフ',
    },
  ];

  return (
    <>
      <SearchSection defaultValue={query ?? ''} isBackButton={true} />
      <TabBar
        tablist={tabList}
        defaltTabValue={pathname?.startsWith('/search/recipe') ? 'tab1' : 'tab2'}
      >
        {children}
      </TabBar>
    </>
  );
};
