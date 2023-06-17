import { DEFAULT_METADATA } from '@/constants/metadata';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = DEFAULT_METADATA;

//*TODO : 認証画面・管理画面を考えると、このレイアウトは別途切り分けたい
const InnerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto flex min-h-screen w-full flex-col-reverse sm:max-w-[800px] sm:flex-row">
      <nav className="z-100 sm:bg-white fixed bottom-0 w-full bg-mauve-1 shadow-base sm:sticky sm:top-0 sm:h-screen sm:w-auto sm:bg-transparent sm:p-10 sm:shadow-none">
        {/* ButtonNavコンポーネントを実装(stickyの動作を確認するため仮実装) */}
        <div className="hidden pb-10 sm:block">
          <Link className="text-2xl font-bold" href="/">
            app
          </Link>
        </div>
        <ul className="flex w-full flex-row justify-between   py-1 sm:flex-col sm:gap-6">
          <li>
            <Link href="/">話題を検索</Link>
          </li>
          <li>
            <Link href="/">お気に入り</Link>
          </li>
          <li>
            <Link href="/">買い物リスト</Link>
          </li>
        </ul>
      </nav>
      <main className="border-x-0 border-mauve-6 sm:border-x-[1px]">{children}</main>
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
