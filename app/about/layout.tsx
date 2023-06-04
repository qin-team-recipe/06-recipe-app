import { PAGE_METAS } from './_constants/meta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: PAGE_METAS.TITLE,
  description: PAGE_METAS.DESCRIPTION,
};

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <>{children}</>;
};

export const runtime = 'edge';

export default RootLayout;
