import type { Meta, StoryObj } from '@storybook/react';
import { ChefList } from './index';

const dummyData = [
  {
    id: crypto.randomUUID(),
    name: '田中シェフ',
    description:
      '白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。',
    recipeCount: 123,
  },
  {
    id: crypto.randomUUID(),
    name: '井上シェフ',
    description:
      '白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。',
    recipeCount: 0,
  },
  {
    id: crypto.randomUUID(),
    name: '少し名前が長いシェフ',
    description:
      '白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。',
    recipeCount: 5000,
  },
  {
    id: crypto.randomUUID(),
    name: 'フレディーシェフ',
    description:
      '白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。',
    recipeCount: 240,
  },
  {
    id: crypto.randomUUID(),
    name: '少し名前が長いシェフ',
    description:
      '白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。',
    recipeCount: 5000,
  },
];

const meta: Meta<typeof ChefList> = {
  title: 'Components/Chef/ChefList',
  component: ChefList,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full overflow-hidden border-x-0 border-mauve-6 sm:max-w-md sm:border-x">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ChefList>;

export const HorizontalNoScroll: Story = {
  args: {
    shape: 'horizontalRectangle',
    chefDate: dummyData.slice(0, 2),
  },
};

export const Horizontal: Story = {
  args: {
    shape: 'horizontalRectangle',
    chefDate: dummyData,
  },
};

export const Vertical: Story = {
  args: {
    shape: 'verticalRectangle',
    chefDate: dummyData,
  },
};

export const SmallNoScroll: Story = {
  args: {
    shape: 'circle',
    chefDate: dummyData.slice(0, 2),
  },
};

export const Small: Story = {
  args: {
    shape: 'circle',
    chefDate: dummyData,
  },
};
