import { SearchWrapper } from '../_pages/SearchWrapper';

type LayoutProps = {
  children: React.ReactNode;
};

const layout = ({ children }: LayoutProps) => {
  return <SearchWrapper>{children}</SearchWrapper>;
};

export default layout;
