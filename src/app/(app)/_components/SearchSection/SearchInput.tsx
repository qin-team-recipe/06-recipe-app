'use client';
import { Icons } from '@/components/Icons';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { useState } from 'react';
import { useSearchDebounce } from '../../_hooks/useSearchDebounce';
import { Input } from './Input';

const Spinner = () => {
  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
      aria-label="読み込み中"
    >
      <div className="h-6 w-6 animate-spin rounded-full border-4 border-mauve-12 border-t-transparent"></div>
    </div>
  );
};

const SearchIcon = () => {
  return (
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <Icons.Search className="h-6 w-6 stroke-mauve-11" />
    </div>
  );
};

type SearchInputProps = {
  searchWord: string;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
  router: AppRouterInstance;
};

export const SearchInput = ({ searchWord, setSearchWord, router }: SearchInputProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const debounce = useSearchDebounce(1000);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
    setIsLoading(true);
    debounce(() => {
      setIsLoading(false);
      if (!e.target.value) return;
      router.push(`/search/recipe?q=${e.target.value}`);
    });
  };

  return (
    <div className="relative flex-1">
      <SearchIcon />
      <Input
        type="text"
        value={searchWord}
        placeholder="シェフやレシピを検索"
        onChange={handleChange}
      />
      {isLoading ? <Spinner /> : null}
    </div>
  );
};
