import { BottomNavBar, BottomNavItem, Navigation } from '@/app/(app)/_components/Navigation';
import { Icons } from '@/components/Icons';
import { NextAuthProvider } from '@/components/NextAuthProvider/NextAuthProvider';
import { TrpcProvider } from 'libs/trpc/trpcProvider';
import { SignInFilter } from '../SignInFilter';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen w-full flex-col-reverse sm:bottom-auto sm:max-w-2xl sm:flex-row sm:gap-x-3 sm:px-4">
      <Navigation>
        <BottomNavBar>
          <BottomNavItem label="さがす" href="/" icon={<Icons.Search />} />
          <BottomNavItem label="お気に入り" href="/fav" icon={<Icons.Fav />} />
          <BottomNavItem label="買い物リスト" href="/cart" icon={<Icons.Cart />} />
        </BottomNavBar>
      </Navigation>
      <main className="flex-1 overflow-hidden border-x-0 border-mauve-6 pb-20 sm:border-x-[1px] sm:pb-16">
        <NextAuthProvider>
          <TrpcProvider>
            <SignInFilter>{children}</SignInFilter>
          </TrpcProvider>
        </NextAuthProvider>
      </main>
    </div>
  );
}
