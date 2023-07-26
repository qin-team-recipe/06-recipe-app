'use client';

import { BackButton } from '@/components/BackButton';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SearchInput } from './SearchInput';

type SearchSectionProps = {
  defaultValue?: string;
  isBackButton?: boolean;
};

export const SearchSection = ({ defaultValue = '', isBackButton = false }: SearchSectionProps) => {
  const router = useRouter();
  const [searchWord, setSearchWord] = useState<string>(defaultValue);

  return (
    <div className="flex px-4 py-2">
      {isBackButton ? <BackButton /> : null}
      <SearchInput searchWord={searchWord} setSearchWord={setSearchWord} router={router} />
    </div>
  );
};
