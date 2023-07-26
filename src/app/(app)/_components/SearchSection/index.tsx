'use client';

import { BackButton } from '@/components/BackButton';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSearchDebounce } from '../../_hooks/useDebounce';
import { SearchInput } from './SearchInput';

type SearchSectionProps = {
  defaultValue?: string;
  isBackButton?: boolean;
};

export const SearchSection = ({ defaultValue = '', isBackButton = false }: SearchSectionProps) => {
  const [searchWord, setSearchWord] = useState<string>(defaultValue);
  const router = useRouter();

  const [debouncedSearchWord, isLoading] = useSearchDebounce<string>(searchWord, 1000);

  useEffect(() => {
    if (!debouncedSearchWord) return;
    router.push(`/search/recipe?q=${debouncedSearchWord}`);
  }, [debouncedSearchWord, router]);

  return (
    <div className="flex px-4 py-2">
      {isBackButton ? <BackButton /> : null}
      <SearchInput searchWord={searchWord} setSearchWord={setSearchWord} loading={isLoading} />
    </div>
  );
};
