import type { Meta, StoryObj } from '@storybook/react';
import { RecipeList } from './index';

const dummyRecipeData = [
  {
    id: crypto.randomUUID(),
    name: '定番レシピA',
    description: '短い説明文',
    favorite: 100,
  },
  {
    id: crypto.randomUUID(),
    name: '定番レシピB',
    description: '少し長めの説明文',
    favorite: 0,
  },
  {
    id: crypto.randomUUID(),
    name: '少しタイトルが長めの定番レシピC',
    description: '少し長めの説明文少し長めの説明文少し長めの説明文',
    favorite: 36,
  },
  {
    id: crypto.randomUUID(),
    name: 'タイトルがそこそこ長めの大人気定番レシピC',
    description: '少し長めの説明文少し長めの説明文少し長めの説明文',
    favorite: 200,
  },
];

const meta: Meta<typeof RecipeList> = {
  title: 'Components/Recipe/RecipeList',
  component: RecipeList,
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

type Story = StoryObj<typeof RecipeList>;

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
    recipeData: dummyRecipeData,
  },
};

export const Vertical: Story = {
  args: {
    direction: 'vertical',
    recipeData: dummyRecipeData,
  },
};
