import type { Meta, StoryObj } from '@storybook/react';
import { RecipeStep } from './index';

const meta: Meta<typeof RecipeStep> = {
  title: 'Components/Recipe/RecipeStep',
  component: RecipeStep,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RecipeStep>;

export const Primary: Story = {
  args: {
    recipeStepData: [
      {
        index: 1,
        text: '用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。',
      },
      {
        index: 1,
        text: '用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。',
      },
      {
        index: 1,
        text: '用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。',
      },
      {
        index: 1,
        text: '用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。',
      },
      {
        index: 1,
        text: '用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。',
      },
    ],
  },
};
