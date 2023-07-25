import { IconArrowLeft, IconSearch, IconToolsKitchen2 } from '@tabler/icons-react';
import { ChefHat, Heart, LucideProps, Settings, ShoppingCart } from 'lucide-react';

export const Icons = {
  Search: IconSearch,
  Fav: Heart,
  Cart: ShoppingCart,
  Chef: ChefHat,
  Setting: Settings,
  ToolsKitchen2: IconToolsKitchen2,
  BackArrow: IconArrowLeft,
  HeroBackArrow: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" {...props}>
      <path d="M25.3334 16H6.66669" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16 25.3333L6.66669 16L16 6.66666" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  ),
};
