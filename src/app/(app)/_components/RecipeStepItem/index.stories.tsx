import type { Meta, StoryObj } from '@storybook/react';
import { RecipeStepItem } from './index';

const meta: Meta<typeof RecipeStepItem> = {
  title: 'Components/Recipe/RecipeStepItem',
  component: RecipeStepItem,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RecipeStepItem>;

export const Primary: Story = {
  args: {
    index: 1,
    text: '用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。',
  },
};
