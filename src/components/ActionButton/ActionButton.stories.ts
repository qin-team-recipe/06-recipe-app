import type { Meta, StoryObj } from '@storybook/react';
import { ActionButton } from './ActionButton';

const meta: Meta<typeof ActionButton> = {
  title: 'Components/ActionButton',
  component: ActionButton,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ActionButton>;

export const Default: Story = {
  args: {
    children: 'フォローする',
  },
};

export const Outline: Story = {
  args: {
    theme: 'outline',
    children: 'フォローする',
  },
};
