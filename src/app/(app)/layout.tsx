import { BottomNavBar, BottomNavItem, Navigation } from '@/app/(app)/_components/Navigation';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen w-full flex-col-reverse sm:bottom-auto sm:max-w-2xl sm:flex-row sm:gap-x-3 sm:px-4">
      <Navigation>
        <BottomNavBar>
          <BottomNavItem label="さがす" href="/" />
          <BottomNavItem label="お気に入り" href="/fav" />
          <BottomNavItem label="買い物リスト" href="/cart" />
        </BottomNavBar>
      </Navigation>
      <main className="flex-1 overflow-hidden border-x-0 border-mauve-6 sm:border-x-[1px]">
        {children}
      </main>
    </div>
  );
}
