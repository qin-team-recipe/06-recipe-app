import type { Meta, StoryObj } from '@storybook/react';
import { ChefInfo } from './ChefInfo';
import { ChefListItem } from './index';

const meta: Meta<typeof ChefListItem> = {
  title: 'Components/Chef/ChefListItem',
  component: ChefListItem,
  tags: ['autodocs'],
  args: {
    name: '田中シェフ',
  },
};

export default meta;

type Story = StoryObj<typeof ChefListItem>;

export const Horizontal: Story = {
  decorators: [
    (Story) => (
      <div className="flex flex-row gap-x-4 px-4">
        <Story />
      </div>
    ),
  ],
  args: {
    shape: 'horizontalRectangle',
  },
};

export const Vertical: Story = {
  decorators: [
    (Story) => (
      <div className="flex h-28 w-full flex-row items-start gap-x-4">
        <Story />
        <ChefInfo
          name="田中シェフ"
          description="白ごはん.comを運営しています。アップしたレシピの紹介や、youtube動画、日々の食のこと、オリジナル商品などの案内等をブログでやっています。"
          recipeCount={123}
        />
      </div>
    ),
  ],
  args: {
    shape: 'verticalRectangle',
  },
};

export const Small: Story = {};
