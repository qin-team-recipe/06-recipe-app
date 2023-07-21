import type { Meta, StoryObj } from '@storybook/react';
import { RecipeListItem } from './index';

const meta: Meta<typeof RecipeListItem> = {
  title: 'Components/Recipe/RecipeListItem',
  component: RecipeListItem,
  tags: ['autodocs'],
  args: {
    id: '1',
    name: '定番レシピA',
    description: '短い説明文',
    favorite: 100,
  },
  decorators: [
    (Story) => (
      <div className="w-full overflow-hidden border-x-0 border-mauve-6 sm:max-w-md sm:border-x">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof RecipeListItem>;

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
  },
};

export const Vertical: Story = {
  args: {
    direction: 'vertical',
  },
};
