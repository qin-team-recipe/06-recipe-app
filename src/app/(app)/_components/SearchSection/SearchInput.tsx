import { Icons } from '@/components/Icons';
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
  loading: boolean;
};

export const SearchInput = ({ searchWord, setSearchWord, loading }: SearchInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
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
      {loading ? <Spinner /> : null}
    </div>
  );
};
