import { ButtomNavBar, ButtomNavItem, Navigation } from '@/app/(app)/_components/Navigation';

import { DEFAULT_METADATA } from '@/constants/metadata';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = DEFAULT_METADATA;

const InnerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto flex min-h-screen w-full flex-col-reverse sm:bottom-auto sm:max-w-2xl sm:flex-row sm:gap-x-3 sm:px-4">
      <Navigation>
        <ButtomNavBar>
          <ButtomNavItem label="さがす" href="/" />
          <ButtomNavItem label="お気に入り" href="/fav" />
          <ButtomNavItem label="買い物リスト" href="/cart" />
        </ButtomNavBar>
      </Navigation>
      <main className="flex-1 overflow-hidden border-x-0 border-mauve-6 sm:border-x-[1px]">
        {children}
      </main>
    </div>
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <InnerLayout>{children}</InnerLayout>
      </body>
    </html>
  );
}
