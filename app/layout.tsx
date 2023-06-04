import '@/_styles/globals.css';
import { PAGE_METAS } from './_constants/meta';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: PAGE_METAS.TITLE,
  description: PAGE_METAS.DESCRIPTION,
};

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export const runtime = 'edge';

export default RootLayout;
