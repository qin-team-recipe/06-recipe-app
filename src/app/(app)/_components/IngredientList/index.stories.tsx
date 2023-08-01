import { MainContentLayoutDecorator } from '@/tests/storybook';
import type { Meta, StoryObj } from '@storybook/react';
import { IngredientList } from './index';

const meta: Meta<typeof IngredientList> = {
  title: 'Components/IngredientList',
  component: IngredientList,
  tags: ['autodocs'],
  decorators: [MainContentLayoutDecorator],
};

export default meta;

type Story = StoryObj<typeof IngredientList>;

export const Primary: Story = {
  args: {
    recipeData: {
      id: crypto.randomUUID(),
      name: '定番レシピA',
      description: '短い説明文',
      favorite: 100,
      material: [
        { body: 'キャベツ' },
        { body: 'キャベツ' },
        { body: 'キャベツ' },
        { body: 'キャベツ' },
        { body: 'キャベツ' },
        { body: 'キャベツ' },
        { body: 'キャベツ' },
      ],
    },
  },
};
