'use client';

import { BackButton } from '@/components/BackButton';
import { useRouter } from 'next/navigation';
import { SearchInput } from './SearchInput';

type SearchSectionProps = {
  defaultValue?: string;
  isBackButton?: boolean;
};

export const SearchSection = ({ defaultValue = '', isBackButton = false }: SearchSectionProps) => {
  const router = useRouter();

  return (
    <div className="flex px-4 py-2">
      {isBackButton ? <BackButton className="px-2" /> : null}
      <SearchInput defaultValue={defaultValue} router={router} />
    </div>
  );
};
