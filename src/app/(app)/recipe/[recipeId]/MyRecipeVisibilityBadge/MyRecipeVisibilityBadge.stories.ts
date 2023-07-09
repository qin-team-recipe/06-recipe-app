import type { Meta, StoryObj } from '@storybook/react';
import { MyRecipeVisibilityBadge } from './MyRecipeVisibilityBadge';

const meta: Meta<typeof MyRecipeVisibilityBadge> = {
  title: 'Components/MyRecipeVisibilityBadge',
  component: MyRecipeVisibilityBadge,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MyRecipeVisibilityBadge>;

export const Public: Story = {
  args: {
    isPublic: true,
  },
};

export const Private: Story = {
  args: {
    isPublic: false,
  },
};
