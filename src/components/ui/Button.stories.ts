import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    color: 'primary',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    label: 'Button',
  },
};
